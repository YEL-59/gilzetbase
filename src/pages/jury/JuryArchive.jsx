import { useState } from "react";
import { Link } from "react-router";

const YEARS = [2026, 2025, 2024, 2023];
const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const CATEGORIES = ["All Categories", "Digital Art", "Oil Painting", "Photography", "Sculpture", "AI Generated"];

// Mock data generator for archive
const generateMockArchive = (year, month, category) => {
    // Simulate different content based on filters
    return Array.from({ length: 8 }, (_, i) => ({
        id: `${year}-${month}-${i}`,
        title: `${category === "All Categories" ? "Art" : category} Submission #${i + 1}`,
        artist: `Artist ${i + 1}`, // Jury usually doesn't see names, but in archive maybe? The user said "without seeing candidate names" for voting. For archive, usually winners are known. I'll stick to ID for consistency unless specified.
        imageUrl: `https://picsum.photos/400/300?random=${year}${month}${i}`,
        score: (Math.random() * 2 + 8).toFixed(1), // Mock high scores for winners
        year,
        month,
        category: category === "All Categories" ? ["Digital Art", "Oil Painting"][i % 2] : category,
    }));
};

export default function JuryArchive() {
    const [selectedYear, setSelectedYear] = useState(2026);
    const [selectedMonth, setSelectedMonth] = useState("January");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

    const archiveData = generateMockArchive(selectedYear, selectedMonth, selectedCategory);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Contest Archive</h1>
                    <p className="text-gray-500 text-sm">Browse past contests, winners, and submissions maintained over time.</p>
                </div>

                <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-gray-200">
                    <button
                        onClick={() => setViewMode("grid")}
                        className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-100 text-black' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                    </button>
                    <button
                        onClick={() => setViewMode("list")}
                        className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-100 text-black' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-wrap gap-4 items-center">
                {/* Year Filter */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase">Year</label>
                    <div className="flex gap-2">
                        {YEARS.map(year => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedYear === year ? 'bg-[#d4af37] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="w-px h-10 bg-gray-200 hidden md:block mx-2"></div>

                {/* Month Filter */}
                <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
                    <label className="text-xs font-semibold text-gray-500 uppercase">Month</label>
                    <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#d4af37] focus:border-[#d4af37] block p-2"
                    >
                        {MONTHS.map(month => (
                            <option key={month} value={month}>{month}</option>
                        ))}
                    </select>
                </div>

                {/* Category Filter */}
                <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
                    <label className="text-xs font-semibold text-gray-500 uppercase">Category</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#d4af37] focus:border-[#d4af37] block p-2"
                    >
                        {CATEGORIES.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden min-h-[400px]">
                <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                    <h2 className="font-semibold text-gray-800">
                        {selectedMonth} {selectedYear} <span className="text-gray-400 font-normal">| {selectedCategory}</span>
                    </h2>
                    <span className="text-xs bg-black text-white px-2 py-1 rounded">
                        10 Winners / 120 Submissions
                    </span>
                </div>

                <div className={`p-6 ${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' : 'space-y-4'}`}>
                    {archiveData.map((item) => (
                        viewMode === 'grid' ? (
                            // Grid Item
                            <div key={item.id} className="group relative bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-all overflow-hidden">
                                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                                        ★ {item.score}
                                    </div>
                                </div>
                                <div className="p-3">
                                    <p className="text-xs text-[#d4af37] font-semibold uppercase">{item.category}</p>
                                    <h3 className="text-sm font-medium text-gray-900 mt-1 truncate">{item.title}</h3>
                                    <p className="text-xs text-gray-500 mt-1">{item.year} • {item.month}</p>
                                </div>
                            </div>
                        ) : (
                            // List Item
                            <div key={item.id} className="flex items-center gap-4 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                                <div className="h-16 w-24 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                                    <p className="text-xs text-gray-500">{item.category} • {item.month} {item.year}</p>
                                </div>
                                <div className="text-right px-4">
                                    <span className="block text-lg font-bold text-gray-800">{item.score}</span>
                                    <span className="text-xs text-gray-400">Score</span>
                                </div>
                                <button className="px-3 py-1.5 text-xs border border-gray-300 rounded hover:bg-gray-100">View Details</button>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}
