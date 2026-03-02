import {
  ArrowLeft,
  Download,
  User,
  Mail,
  MapPin,
  Calendar,
  FileText,
  CheckCircle2,
  XCircle,
  Star,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useGetCompetitionDetails } from "@/hooks/competition.hook";

const SubmissionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: response, isLoading } = useGetCompetitionDetails(id);
  const submission = response?.data || null;

  // Status badge styles
  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case "winner":
        return "bg-teal-600";
      case "submitted":
        return "bg-gray-600";
      default:
        return "bg-blue-600";
    }
  };

  const formatStatus = (status) => {
    if (!status) return "N/A";
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
        <span className="ml-3 text-gray-500">Loading submission details...</span>
      </div>
    );
  }

  if (!submission) {
    return (
      <div className="w-full min-h-screen bg-gray-50 py-8">
        <div className="mx-auto px-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to My Submission
          </button>
          <p className="text-center text-gray-500 text-lg py-20">
            Submission not found.
          </p>
        </div>
      </div>
    );
  }

  const mainImage =
    submission.competition_images?.[0]?.image ||
    "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=800";

  return (
    <div className="w-full min-h-screen bg-gray-50 py-8">
      <div className=" mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to My Submission
        </button>

        {/* Header with Status */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-normal text-gray-900 mb-2">
              {submission.photo_title}
            </h1>
            <p className="text-sm text-gray-600">
              {submission.status === "submitted"
                ? "Your submission has been received and is waiting for review"
                : submission.status === "winner"
                  ? "Congratulations! Your submission has been selected as a winner"
                  : "Your submission is being processed"}
            </p>
          </div>
          <Button
            className={`${getStatusStyle(submission.status)} text-white px-6 py-2 rounded-full hover:opacity-90`}
          >
            {formatStatus(submission.status)}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Photo */}
          <div className="lg:col-span-2 space-y-6">
            {/* Photo Card */}
            <Card className="bg-white rounded-xl overflow-hidden border border-gray-200">
              <img
                src={mainImage}
                alt={submission.photo_title}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-4">
                <a
                  href={mainImage}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[#C4A24C] hover:bg-[#B39340] text-white py-3 rounded-lg flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Original
                  </Button>
                </a>
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
                  <p className="text-[#C4A24C] font-medium pl-6">
                    {submission.category?.name || "N/A"}
                  </p>
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
                    {submission.photo_description}
                  </p>
                </div>

                {/* Description (Libre Art concept) */}
                {submission.description && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">
                        Concept Description
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pl-6">
                      {submission.description}
                    </p>
                  </div>
                )}
              </div>
            </Card>

            {/* Scores Section - shown only if scores exist */}
            {submission.scores && submission.scores.length > 0 && (
              <Card className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Scores
                  </h2>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                    <span className="text-lg font-bold text-gray-900">
                      {submission.total_score ?? 0}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({submission.scores_count}{" "}
                      {submission.scores_count === 1 ? "judge" : "judges"})
                    </span>
                  </div>
                </div>

                {submission.percentage > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Overall Percentage</span>
                      <span className="font-semibold text-gray-900">
                        {submission.percentage.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-amber-500 h-2.5 rounded-full transition-all"
                        style={{
                          width: `${Math.min(submission.percentage, 100)}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  {submission.scores.map((score, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-700">
                          Judge #{score.user_id}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="text-sm font-bold text-gray-900">
                          {score.score}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
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
                      {submission.full_name}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <p className="text-sm text-gray-900">{submission.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Country</p>
                    <p className="text-sm text-gray-900">
                      {submission.country}
                    </p>
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
                  {submission.team_condition ? (
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm text-gray-700">
                    Accepted the{" "}
                    <span className="text-blue-600">Terms & Conditions</span>
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  {submission.copy_right ? (
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm text-gray-700">
                    Certified as exclusive copyright holder
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  {submission.my_photo ? (
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm text-gray-700">
                    Guaranteed original work
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  {submission.authorizate_purpose ? (
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm text-gray-700">
                    Authorized Art Vision Awards to publish photo
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-1">SUBMISSION ID</p>
                <p className="text-sm font-semibold text-gray-900">
                  #{String(submission.id).padStart(8, "0")}
                </p>
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
