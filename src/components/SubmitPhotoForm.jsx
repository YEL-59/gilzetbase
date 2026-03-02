import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSubmitCompetition } from "@/hooks/competition.hook";
import { useGetCategories } from "@/hooks/categories.hook";
import { Loader2 } from "lucide-react";

const SubmitPhotoForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    country: "",
    category_id: "",
    photo_title: "",
    photo_description: "",
    description: "",
  });

  const [agreements, setAgreements] = useState({
    terms: false,
    owner: false,
    original: false,
    auth: false,
  });

  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState("");

  const { mutate: submitCompetition, isPending } = useSubmitCompetition();
  const { data: categoriesData } = useGetCategories();

  const categories = categoriesData?.data || categoriesData || [];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (id, checked) => {
    setAgreements((prev) => ({ ...prev, [id]: checked }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);
      setFileName(selectedFiles.map((f) => f.name).join(", "));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    const { full_name, email, country, category_id, photo_title, photo_description } = formData;
    if (!full_name || !email || !country || !category_id || !photo_title || !photo_description) {
      return;
    }

    // Validate agreements
    if (!agreements.terms || !agreements.owner || !agreements.original || !agreements.auth) {
      return;
    }

    // Validate file
    if (files.length === 0) {
      return;
    }

    // Build FormData
    const payload = new FormData();
    payload.append("full_name", formData.full_name);
    payload.append("email", formData.email);
    payload.append("country", formData.country);
    payload.append("category_id", formData.category_id);
    payload.append("photo_title", formData.photo_title);
    payload.append("photo_description", formData.photo_description);
    payload.append("description", formData.description);
    payload.append("team_condition", agreements.terms ? 1 : 0);
    payload.append("copy_right", agreements.owner ? 1 : 0);
    payload.append("my_photo", agreements.original ? 1 : 0);
    payload.append("authorizate_purpose", agreements.auth ? 1 : 0);

    // Append image files
    files.forEach((file) => {
      payload.append("images[]", file);
    });

    submitCompetition(payload, {
      onSuccess: () => {
        // Reset form on success
        setFormData({
          full_name: "",
          email: "",
          country: "",
          category_id: "",
          photo_title: "",
          photo_description: "",
          description: "",
        });
        setAgreements({ terms: false, owner: false, original: false, auth: false });
        setFiles([]);
        setFileName("");
      },
    });
  };

  return (
    <div className="w-full min-h-screen bg-white py-20 font-sans text-[#1a1a1a]">
      {/* Page Header */}
      <div className="text-center mb-16 space-y-1">
        <p className="text-xl font-serif italic text-gray-800">Awards 2026</p>
        <h1 className="text-3xl md:text-4xl font-serif font-medium tracking-tight">
          Global Design Excellence
        </h1>
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-light">
          Shape the future of digital experiences.
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-3xl mx-auto border border-gray-100 rounded-lg shadow-sm p-8 md:p-16">
        <div className="mb-10">
          <h2 className="text-2xl font-serif mb-1">Submit Your Photo</h2>
          <p className="text-[10px] text-gray-400">
            Fields marked with <span className="text-red-500">*</span> are
            required.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Section: Personal Info */}
          <section>
            <h3 className="text-lg font-serif border-b border-gray-100 pb-2 mb-6">
              Personal Information
            </h3>
            <div className="space-y-5">
              <div className="space-y-1.5">
                <Label className="text-[11px] font-semibold uppercase tracking-wider">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="Enter your full name"
                  className="rounded-sm border-gray-200 focus:ring-0 focus:border-gray-400"
                  value={formData.full_name}
                  onChange={(e) => handleInputChange("full_name", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-[11px] font-semibold uppercase tracking-wider">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  className="rounded-sm border-gray-200"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-[11px] font-semibold uppercase tracking-wider">
                  Country <span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="Enter your country"
                  className="rounded-sm border-gray-200 focus:ring-0 focus:border-gray-400"
                  value={formData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  required
                />
              </div>
            </div>
          </section>

          {/* Section: Photo Info */}
          <section>
            <h3 className="text-lg font-serif border-b border-gray-100 pb-2 mb-6">
              Photo Information
            </h3>
            <div className="space-y-5">
              <div className="space-y-1.5">
                <Label className="text-[11px] font-semibold uppercase tracking-wider">
                  Chosen Category <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.category_id}
                  onValueChange={(value) => handleInputChange("category_id", value)}
                >
                  <SelectTrigger className="rounded-sm border-gray-200">
                    <SelectValue placeholder="Select your category" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.isArray(categories) && categories.length > 0 ? (
                      categories.map((cat) => (
                        <SelectItem key={cat.id} value={String(cat.id)}>
                          {cat.name}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="1">Libre Art</SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label className="text-[11px] font-semibold uppercase tracking-wider">
                  Photo Title <span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="Add short title"
                  className="rounded-sm border-gray-200"
                  value={formData.photo_title}
                  onChange={(e) => handleInputChange("photo_title", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-[11px] font-semibold uppercase tracking-wider">
                  Photo Description <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  placeholder="Describe your photo, key elements, and context."
                  className="rounded-sm border-gray-200 min-h-[120px]"
                  maxLength={800}
                  value={formData.photo_description}
                  onChange={(e) => handleInputChange("photo_description", e.target.value)}
                  required
                />
                <p className="text-[9px] text-gray-400 italic">
                  {formData.photo_description.length}/800 characters.
                </p>
              </div>

              {/* File Upload Area */}
              <div className="space-y-2 pt-2">
                <Label className="text-[11px] font-semibold uppercase tracking-wider">
                  Photo File (JPG only) <span className="text-red-500">*</span>
                </Label>
                <div className="flex items-center gap-4">
                  <label className="bg-[#e5e7eb] hover:bg-gray-300 transition-colors px-4 py-2 rounded text-[11px] font-medium cursor-pointer">
                    Choose File
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".jpg,.jpeg,.png"
                      multiple
                    />
                  </label>
                  <span className="text-[11px] text-gray-500">
                    {fileName || "No file chosen"}
                  </span>
                </div>
                <p className="text-[9px] text-gray-400">JPG, max size 10 MB.</p>
              </div>

              {/* Optional Field */}
              <div className="space-y-1.5 pt-4">
                <Label className="text-[11px] font-semibold uppercase tracking-wider text-gray-600">
                  For Libre Art : concept description (Optional)
                </Label>
                <Textarea
                  placeholder="Describe your photo, key elements, and context."
                  className="rounded-sm border-gray-100 bg-gray-50/30 min-h-[80px]"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                />
                <p className="text-[9px] text-gray-400">
                  This field is shown only when the selected category is Libre
                  Art.
                </p>
              </div>
            </div>
          </section>

          {/* Agreements Section */}
          <section className="space-y-6">
            <h3 className="text-lg font-serif border-b border-gray-100 pb-2 mb-4">
              Agreements
            </h3>
            <div className="space-y-3">
              {[
                {
                  id: "terms",
                  label: (
                    <>
                      I accept the{" "}
                      <span className="text-blue-500 cursor-pointer">
                        Terms & Conditions
                      </span>
                      .
                    </>
                  ),
                },
                {
                  id: "owner",
                  label:
                    "I certify that I am the exclusive copyright holder of the submitted photo.",
                },
                {
                  id: "original",
                  label: "I guarantee that the photo is my original work.",
                },
                {
                  id: "auth",
                  label:
                    "I authorize Art Vision Awards to publish my photo for contest purposes.",
                },
              ].map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <Checkbox
                    id={item.id}
                    className="border-gray-300 rounded-sm w-3.5 h-3.5"
                    checked={agreements[item.id]}
                    onCheckedChange={(checked) => handleCheckboxChange(item.id, checked)}
                  />
                  <Label
                    htmlFor={item.id}
                    className="text-[11px] text-gray-600 font-normal leading-none cursor-pointer"
                  >
                    {item.label}
                  </Label>
                </div>
              ))}
            </div>
          </section>

          {/* Action Footer */}
          <div className="pt-4 space-y-3">
            <Button
              type="submit"
              disabled={isPending}
              className="bg-[#C4A24C] hover:bg-[#b3913b] text-white rounded-[4px] px-6 py-5 text-[11px] font-medium transition-all shadow-none disabled:opacity-60"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Photo"
              )}
            </Button>
            <div>
              <button type="button" className="text-[10px] text-blue-600 hover:underline italic">
                Save and continue later
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitPhotoForm;
