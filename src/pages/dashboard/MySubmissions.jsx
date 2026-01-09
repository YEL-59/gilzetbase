import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router";

const MySubmissions = () => {
  const stats = [
    { label: "Total Submissions", value: 3, color: "text-gray-900" },
    { label: "Accepted", value: 1, color: "text-teal-600" },
    { label: "Under Review", value: 1, color: "text-blue-600" },
    { label: "Submitted", value: 1, color: "text-blue-600" },
  ];

  const submissions = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=200",
      title: "Winter Solstice 2024",
      subtitle: "Stories in Silence",
      date: "December 5, 2025",
      category: "Portrait",
      submissionId: "#00000003",
      country: "Spain",
      status: "Submitted",
      statusColor: "bg-blue-600",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=200",
      title: "Winter Solstice 2024",
      subtitle: "Stories in Silence",
      date: "December 5, 2025",
      category: "Portrait",
      submissionId: "#00000003",
      country: "Spain",
      status: "Accepted",
      statusColor: "bg-teal-600",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=200",
      title: "Winter Solstice 2024",
      subtitle: "Stories in Silence",
      date: "December 5, 2025",
      category: "Portrait",
      submissionId: "#00000003",
      country: "Spain",
      status: "Under Review",
      statusColor: "bg-gray-600",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-gray-50 py-8">
      <div className=" mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            My Submissions
          </h1>
          <p className="text-sm text-gray-600">
            View and manage your photography contest submissions
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </Card>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search by title, category, or description..."
            className="pl-10 bg-white"
          />
        </div>

        {/* Submissions List */}
        <div className="space-y-4">
          {submissions.map((submission) => (
            <Card
              key={submission.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex items-start gap-4">
                {/* Thumbnail */}
                <img
                  src={submission.image}
                  alt={submission.title}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {submission.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {submission.subtitle}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Submission Date : {submission.date}
                      </p>
                    </div>
                    <Button
                      className={`${submission.statusColor} text-white px-4 py-1.5 rounded-full text-sm font-medium hover:opacity-90`}
                    >
                      {submission.status}
                    </Button>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">CATEGORY</p>
                      <p className="text-sm font-medium text-[#C4A24C]">
                        {submission.category}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        SUBMISSION ID
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        {submission.submissionId}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">COUNTRY</p>
                      <p className="text-sm text-gray-900">
                        {submission.country}
                      </p>
                    </div>
                    <div className="flex items-end">
                      <Button
                        variant="link"
                        className="text-[#C4A24C] hover:text-[#B39340] p-0 h-auto font-medium text-sm"
                        onClick={() =>
                          navigate(`/dashboard/submissions/${submission.id}`)
                        }
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
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

export default MySubmissions;
