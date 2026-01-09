import {
  ArrowLeft,
  Download,
  User,
  Mail,
  MapPin,
  Calendar,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

const SubmissionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  //   const submission = submissions.find((s) => s.id === id);

  //   if (!submission) {
  //     return <p className="p-6">Submission not found</p>;
  //   }
  return (
    <div className="w-full min-h-screen bg-gray-50 py-8">
      <div className=" mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate("/dashboard/submissions")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to My Submission
        </button>

        {/* Header with Status */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-normal text-gray-900 mb-2">
              Stories in Silence
            </h1>
            <p className="text-sm text-gray-600">
              Your submission has been received and is waiting for review
            </p>
          </div>
          <Button className="bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-700">
            Submitted
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Photo */}
          <div className="lg:col-span-2 space-y-6">
            {/* Photo Card */}
            <Card className="bg-white rounded-xl overflow-hidden border border-gray-200">
              <img
                src="https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Stories in Silence"
                className="w-full h-[400px] object-cover"
              />
              <div className="p-4">
                <Button className="w-full bg-[#C4A24C] hover:bg-[#B39340] text-white py-3 rounded-lg flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Original
                </Button>
              </div>
            </Card>

            {/* Photo Information */}
            <Card className="bg-white p-6 rounded-xl border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Photo Information
              </h2>

              <div className="space-y-4">
                {/* Category */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">
                      Category
                    </span>
                  </div>
                  <p className="text-[#C4A24C] font-medium pl-6">Portrait</p>
                </div>

                {/* Photo Description */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">
                      Photo Description
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-6">
                    A comprehensive portrait that captures the quiet strength
                    and resilience of the human spirit. Shot in natural window
                    light, this image emphasizes texture, emotion, and the
                    profound beauty found in moments of stillness and
                    reflection.
                  </p>
                </div>

                {/* Submission Date */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">
                      Submission Date
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm pl-6">December 5, 2025</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Info Cards */}
          <div className="space-y-6">
            {/* Personal Information */}
            <Card className="bg-white p-6 rounded-xl border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Personal Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Full Name</p>
                    <p className="text-sm text-gray-900 font-medium">
                      Elena Rodriguez
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <p className="text-sm text-gray-900">
                      elena.rodriguez@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Country</p>
                    <p className="text-sm text-gray-900">Spain</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Agreements */}
            <Card className="bg-white p-6 rounded-xl border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Agreements
              </h2>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Accepted the{" "}
                    <span className="text-blue-600">Terms & Conditions</span>
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Certified as exclusive copyright holder
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Guaranteed original work
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Authorized Art Visor Awards to publish photo
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-1">SUBMISSION ID</p>
                <p className="text-sm font-semibold text-gray-900">#00000003</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Copyright © AVA 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubmissionDetails;
