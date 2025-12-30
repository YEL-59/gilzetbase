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
import { Upload } from "lucide-react";

const SubmitPhotoForm = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white py-12">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-600 mb-2">Awards 2026</p>
          <h1 className="text-3xl md:text-4xl font-normal text-gray-900 mb-2">
            Global Design Excellence
          </h1>
          <p className="text-xs text-gray-500">
            Shape the future of digital experiences
          </p>
        </div>

        {/* Form */}
        <div className="space-y-8">
          {/* Submit Your Photo Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Submit Your Photo
            </h2>

            {/* Personal Information */}
            <div className="space-y-6 mb-8">
              <h3 className="text-base font-semibold text-gray-900">
                Personal Information
              </h3>

              <div className="space-y-2">
                <Label htmlFor="fullname" className="text-sm font-medium">
                  Full name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullname"
                  placeholder="Enter your full name"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@email.com"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country" className="text-sm font-medium">
                  Country <span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Photo Information */}
            <div className="space-y-6">
              <h3 className="text-base font-semibold text-gray-900">
                Photo Information
              </h3>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-sm font-medium">
                  Choose Category <span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fashion">Fashion Photography</SelectItem>
                    <SelectItem value="beauty">Beauty & Make-Up</SelectItem>
                    <SelectItem value="models">
                      Models / Hair / Styling
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title" className="text-sm font-medium">
                  Photo Title <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="title"
                  placeholder="Enter photo title"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium">
                  Photo Description <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe your photo, key elements, and context"
                  className="w-full min-h-[100px] resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  AI OR NOT? <span className="text-red-500">*</span>
                </Label>
                <p className="text-xs text-gray-500 mb-3">
                  Please let us know if you used AI assistance or not.
                </p>
                <div className="space-y-3">
                  <Label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="ai"
                      value="yes"
                      className="w-4 h-4"
                    />
                    <span className="text-sm">Photo is AI (YES)</span>
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="ai"
                      value="no"
                      className="w-4 h-4"
                    />
                    <span className="text-sm">No (AI is Photo)</span>
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  File upload <span className="text-red-500">*</span>
                </Label>
                <p className="text-xs text-gray-500 mb-3">
                  UPLOAD FILE: (Format: JPG/JPEG) (Size limit: 20MB)
                </p>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="relative cursor-pointer"
                    asChild
                  >
                    <label>
                      <input
                        type="file"
                        className="hidden"
                        accept=".jpg,.jpeg"
                        onChange={handleFileChange}
                      />
                      <Upload className="w-4 h-4 mr-2" />
                      Choose File
                    </label>
                  </Button>
                  <span className="text-sm text-gray-500 flex items-center">
                    {fileName || "No file chosen"}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  File size limit: 20mb
                </p>
                <p className="text-xs text-gray-500">
                  You had 5 submit left, when the submit completed, it can be!
                </p>
              </div>
            </div>
          </div>

          {/* Agreements */}
          <div className="space-y-4 pt-6 border-t">
            <h3 className="text-base font-semibold text-gray-900">
              Agreements
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Checkbox id="terms" className="mt-1" />
                <Label
                  htmlFor="terms"
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  I accept the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms & Conditions
                  </a>
                  .
                </Label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox id="copyright" className="mt-1" />
                <Label
                  htmlFor="copyright"
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  I certify that I am the exclusive copyright holder of the
                  submitted photo.
                </Label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox id="original" className="mt-1" />
                <Label
                  htmlFor="original"
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  I guarantee that the photo is my original work.
                </Label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox id="publish" className="mt-1" />
                <Label
                  htmlFor="publish"
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  I authorize Art Visor Awards to publish my photo for contest
                  purposes.
                </Label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <Button className="bg-[#C4A24C] hover:bg-[#B39340] text-white px-8 py-3">
              Submit Photo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitPhotoForm;
