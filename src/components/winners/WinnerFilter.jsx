import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const WinnerFilter = ({ onFilterChange }) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);
  const months = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "fashion", label: "Fashion Photography" },
    { value: "fine-art", label: "Fine Art & Conceptual" },
    { value: "nature", label: "Nature & Travel" },
    { value: "wedding", label: "Weddings & Events" },
    { value: "portrait", label: "Portrait" },
    { value: "commercial", label: "Commercial" },
  ];

  const handleFilterChange = () => {
    if (onFilterChange) {
      onFilterChange({
        year: selectedYear,
        month: selectedMonth,
        category: selectedCategory,
      });
    }
  };

  React.useEffect(() => {
    handleFilterChange();
  }, [selectedYear, selectedMonth, selectedCategory]);

  return (
    <div className="w-full bg-white py-8 px-6 rounded-xl border border-gray-100 shadow-sm mb-12">
      <div className="container mx-auto">
        {/* Filter Header */}
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Filter Winners</h3>

        {/* Filter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Year Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Year
            </label>
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
                className="w-full appearance-none px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-white text-gray-900 font-medium"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>
          </div>

          {/* Month Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Month
            </label>
            <div className="relative">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(Number(e.target.value))}
                className="w-full appearance-none px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-white text-gray-900 font-medium"
              >
                {months.map((month) => (
                  <option key={month.value} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category
            </label>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full appearance-none px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-white text-gray-900 font-medium"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>
          </div>
        </div>

        {/* Active Filter Display */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">Active Filters: </span>
            <span className="inline-block px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-xs font-medium mr-2">
              {selectedYear}
            </span>
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium mr-2">
              {months.find((m) => m.value === selectedMonth)?.label}
            </span>
            <span className="inline-block px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
              {categories.find((c) => c.value === selectedCategory)?.label}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WinnerFilter;
