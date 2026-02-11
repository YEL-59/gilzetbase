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
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              My Submissions
            </h1>
            <p className="text-sm text-gray-600">
              View and manage your photography contest submissions
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="bg-amber-100 border border-amber-200 rounded-lg p-3 flex items-center gap-4">
              <div>
                <p className="text-xs text-amber-800 font-medium uppercase tracking-wider">
                  Remaining Credits
                </p>
                <p className="text-xl font-bold text-amber-900">2 / 5 Photos</p>
              </div>
              <Button
                onClick={() => navigate("/dashboard/subscription")}
                className="bg-amber-500 hover:bg-amber-600 text-white shadow-sm"
              >
                Upgrade Plan
              </Button>
            </div>
          </div>
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
          <Card className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-lg shadow-md border-none text-white">
            <p className="text-sm text-amber-100 mb-2">Credits Left</p>
            <p className="text-3xl font-bold text-white">2</p>
            <p className="text-xs text-amber-100 mt-1">out of 5 total</p>
          </Card>
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
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-amber-200 transition-colors"
            >
              <div className="flex items-start gap-4">
                {/* Thumbnail */}
                <div className="relative group">
                  <img
                    src={submission.image}
                    alt={submission.title}
                    className="w-24 h-24 rounded-lg object-cover flex-shrink-0 shadow-sm"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white text-xs"
                      onClick={() =>
                        navigate(`/dashboard/submissions/${submission.id}`)
                      }
                    >
                      View
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded uppercase tracking-wider">
                          Contest
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">
                          {submission.title}
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-amber-600 mb-1">
                        {submission.subtitle}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Submitted: {submission.date}</span>
                        <span>•</span>
                        <span>ID: {submission.submissionId}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Button
                        className={`${submission.statusColor} text-white px-4 py-1.5 rounded-full text-xs font-bold hover:opacity-90 shadow-sm`}
                      >
                        {submission.status}
                      </Button>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-[10px] text-gray-500 mb-1 font-bold uppercase tracking-wider">
                        CATEGORY
                      </p>
                      <p className="text-sm font-bold text-gray-800">
                        {submission.category}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 mb-1 font-bold uppercase tracking-wider">
                        COUNTRY
                      </p>
                      <p className="text-sm font-bold text-gray-800">
                        {submission.country}
                      </p>
                    </div>
                    <div className="md:col-span-2 flex justify-end items-end">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-amber-200 text-amber-700 hover:bg-amber-50 font-bold text-xs"
                        onClick={() =>
                          navigate(`/dashboard/submissions/${submission.id}`)
                        }
                      >
                        FULL DETAILS
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
