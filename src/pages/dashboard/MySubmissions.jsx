import { useState, useEffect } from "react";
import { Search, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router";
import { useGetCompetitions } from "@/hooks/competition.hook";

const MySubmissions = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const perPage = 50;
  const itemsPerPage = 3; // client-side items per page

  // Debounce search input (500ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setPage(1); // reset to page 1 on new search
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const { data: response, isLoading } = useGetCompetitions(1, perPage, debouncedSearch);

  const apiData = response?.data || {};
  const total = apiData?.total || 0;
  const winnerCount = apiData?.winner || 0;
  const submittedCount = apiData?.submitted || 0;
  const competitions = apiData?.competitions?.data || [];

  const stats = [
    { label: "Total Submissions", value: total, color: "text-gray-900" },
    { label: "Winner", value: winnerCount, color: "text-teal-600" },
    { label: "Submitted", value: submittedCount, color: "text-blue-600" },
  ];

  // Status badge styles
  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case "winner":
        return "bg-teal-600";
      case "submitted":
        return "bg-blue-600";
      default:
        return "bg-gray-600";
    }
  };

  // Format status label
  const formatStatus = (status) => {
    if (!status) return "N/A";
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  // Client-side pagination
  const totalPages = Math.ceil(competitions.length / itemsPerPage);
  const currentPage = Math.min(page, totalPages || 1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCompetitions = competitions.slice(startIndex, startIndex + itemsPerPage);

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
            <div>

              <Link to="/affiliate">
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg">
                  Join as affilate
                </button>
              </Link>
            </div>
          </div>
          {/* <div className="flex flex-col items-end gap-2">
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
          </div> */}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </Card>
          ))}
          {/* <Card className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-lg shadow-md border-none text-white">
            <p className="text-sm text-amber-100 mb-2">Credits Left</p>
            <p className="text-3xl font-bold text-white">2</p>
            <p className="text-xs text-amber-100 mt-1">out of 5 total</p>
          </Card> */}
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search by title, category, or description..."
            className="pl-10 bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
            <span className="ml-3 text-gray-500">Loading submissions...</span>
          </div>
        ) : competitions.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No submissions found.</p>
          </div>
        ) : (
          <>
            {/* Submissions List */}
            <div className="space-y-4">
              {paginatedCompetitions.map((submission) => (
                <Card
                  key={submission.id}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-amber-200 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    {/* Thumbnail */}
                    <div className="relative group">
                      <img
                        src={
                          submission.competition_images?.[0]?.image ||
                          "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=200"
                        }
                        alt={submission.photo_title}
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
                              {submission.photo_title}
                            </h3>
                          </div>
                          <p className="text-sm font-medium text-amber-600 mb-1">
                            {submission.photo_description}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>By: {submission.full_name}</span>
                            <span>•</span>
                            <span>
                              ID: #{String(submission.id).padStart(8, "0")}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Button
                            className={`${getStatusStyle(submission.status)} text-white px-4 py-1.5 rounded-full text-xs font-bold hover:opacity-90 shadow-sm`}
                          >
                            {formatStatus(submission.status)}
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
                            {submission.category?.name || "N/A"}
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
                              navigate(
                                `/dashboard/submissions/${submission.id}`
                              )
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage <= 1}
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  className="border-gray-300 text-gray-600 hover:bg-gray-100"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter((p) => {
                    // Show first, last, current, and neighbors
                    return (
                      p === 1 ||
                      p === totalPages ||
                      Math.abs(p - currentPage) <= 1
                    );
                  })
                  .reduce((acc, p, idx, arr) => {
                    // Insert ellipsis between non-consecutive numbers
                    if (idx > 0 && p - arr[idx - 1] > 1) {
                      acc.push("...");
                    }
                    acc.push(p);
                    return acc;
                  }, [])
                  .map((item, idx) =>
                    item === "..." ? (
                      <span
                        key={`ellipsis-${idx}`}
                        className="px-2 text-gray-400 text-sm"
                      >
                        ...
                      </span>
                    ) : (
                      <Button
                        key={item}
                        variant={currentPage === item ? "default" : "outline"}
                        size="sm"
                        onClick={() => setPage(item)}
                        className={
                          currentPage === item
                            ? "bg-amber-500 hover:bg-amber-600 text-white border-amber-500"
                            : "border-gray-300 text-gray-600 hover:bg-gray-100"
                        }
                      >
                        {item}
                      </Button>
                    )
                  )}

                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage >= totalPages}
                  onClick={() =>
                    setPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className="border-gray-300 text-gray-600 hover:bg-gray-100"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}
          </>
        )}

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
