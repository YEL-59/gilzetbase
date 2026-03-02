import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Info, Loader2 } from "lucide-react";
import { useGetContestArchive, useGetCategories } from "@/hooks/jury.hook";

const MONTHS = [
    { name: "January", value: 1 },
    { name: "February", value: 2 },
    { name: "March", value: 3 },
    { name: "April", value: 4 },
    { name: "May", value: 5 },
    { name: "June", value: 6 },
    { name: "July", value: 7 },
    { name: "August", value: 8 },
    { name: "September", value: 9 },
    { name: "October", value: 10 },
    { name: "November", value: 11 },
    { name: "December", value: 12 }
];

export default function JuryArchive() {
    // Initialize with empty strings to fetch "All Data" (/contest-archive) on mount
    const [yearInput, setYearInput] = useState("");
    const [debouncedYear, setDebouncedYear] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [viewMode, setViewMode] = useState("grid");

    // Debounce logic for year input
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedYear(yearInput);
        }, 600);

        return () => clearTimeout(handler);
    }, [yearInput]);

    const { data: categoriesResponse } = useGetCategories();
    const categories = categoriesResponse?.data?.data || [];

    const { data: archiveResponse, isLoading } = useGetContestArchive({
        year: debouncedYear,
        month: selectedMonth,
        category_id: selectedCategory
    });
    const archiveData = archiveResponse?.data || [];

    if (isLoading) {
        return (
            <div className="min-h-[600px] flex flex-col items-center justify-center bg-gray-50/50 rounded-3xl border border-dashed border-gray-200">
                <Loader2 className="w-12 h-12 animate-spin text-[#d4af37] mb-4" />
                <p className="text-gray-500 font-medium animate-pulse">Retrieving archived evaluation records...</p>
            </div>
        );
    }

    return (
        <div className="space-y-8 pb-20">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Contest <span className="text-[#d4af37]">Archive</span></h1>
                    <p className="text-gray-500 mt-1">Explore historical evaluation data, winners, and verified submissions.</p>
                </div>

                <div className="flex items-center gap-1 bg-white p-1.5 rounded-2xl border border-gray-200 shadow-sm">
                    <button
                        onClick={() => setViewMode("grid")}
                        className={`p-2.5 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-black text-white shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
                        title="Grid View"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                    </button>
                    <button
                        onClick={() => setViewMode("list")}
                        className={`p-2.5 rounded-xl transition-all ${viewMode === 'list' ? 'bg-black text-white shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
                        title="List View"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white p-6 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-wrap gap-6 items-center">
                <div className="flex flex-col gap-2 min-w-[120px]">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Year Filter</label>
                    <input
                        type="number"
                        value={yearInput}
                        onChange={(e) => setYearInput(e.target.value ? Number(e.target.value) : "")}
                        className="w-full bg-gray-50 border-gray-100 text-gray-900 text-sm font-bold rounded-xl focus:ring-[#d4af37] focus:border-[#d4af37] block p-3 outline-none transition-all"
                        placeholder="All Years"
                    />
                </div>

                <div className="w-px h-12 bg-gray-100 hidden lg:block"></div>

                <div className="flex flex-col gap-2 flex-1 min-w-[150px]">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Month Filter</label>
                    <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value ? Number(e.target.value) : "")}
                        className="w-full bg-gray-50 border-gray-100 text-gray-900 text-sm font-bold rounded-xl focus:ring-[#d4af37] focus:border-[#d4af37] block p-3 outline-none transition-all"
                    >
                        <option value="">All Months</option>
                        {MONTHS.map(month => (
                            <option key={month.value} value={month.value}>{month.name}</option>
                        ))}
                    </select>
                </div>

                <div className="w-px h-12 bg-gray-100 hidden lg:block"></div>

                <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Category Filter</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full bg-gray-50 border-gray-100 text-gray-900 text-sm font-bold rounded-xl focus:ring-[#d4af37] focus:border-[#d4af37] block p-3 outline-none transition-all"
                    >
                        <option value="">All Categories</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="px-8 py-5 border-b border-gray-50 bg-gray-50/30 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></div>
                        <h2 className="font-bold text-gray-800">
                            {selectedMonth ? MONTHS.find(m => m.value === selectedMonth)?.name : "All Records"} {debouncedYear ? debouncedYear : ""} Archive
                        </h2>
                    </div>
                    <span className="text-[10px] font-black bg-black text-white px-3 py-1.5 rounded-full tracking-widest uppercase">
                        {archiveData.length} records found
                    </span>
                </div>

                <div className={`p-8 ${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8' : 'space-y-4'}`}>
                    {archiveData.length > 0 ? (
                        archiveData.map((item) => {
                            const photoUrl = item.competition_images?.[0]?.image || item.category?.image || "https://via.placeholder.com/800x600?text=No+Image";
                            const dateStr = item.created_at ? new Date(item.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : "N/A";

                            return viewMode === 'grid' ? (
                                <div key={item.id} className="group relative bg-white rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
                                    <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
                                        <img src={photoUrl} alt={item.photo_title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                            <Link
                                                to={`/jury/archive/${item.id}`}
                                                className="w-full bg-white text-black py-3 rounded-2xl text-xs font-black tracking-widest uppercase text-center hover:bg-[#d4af37] hover:text-white transition-all shadow-xl"
                                            >
                                                View Metadata
                                            </Link>
                                        </div>

                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-black px-3 py-1.5 rounded-full shadow-sm tracking-widest uppercase">
                                            ★ {item.percentage}%
                                        </div>
                                    </div>
                                    <div className="p-5 flex-1 flex flex-col">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] text-[#d4af37] font-black uppercase tracking-widest px-2 py-0.5 bg-[#d4af37]/10 rounded-md">
                                                {item.category?.name || "General"}
                                            </span>
                                            <Link to={`/jury/archive/${item.id}`} className="text-gray-300 hover:text-[#d4af37] transition-colors">
                                                <Info size={16} />
                                            </Link>
                                        </div>
                                        <h3 className="text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-[#d4af37] transition-colors tracking-tight">
                                            {item.photo_title || "Untitled Masterpiece"}
                                        </h3>
                                        <p className="text-[11px] text-gray-400 mt-2 font-medium">{dateStr}</p>
                                    </div>
                                </div>
                            ) : (
                                <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-3xl border border-gray-50 hover:bg-gray-50 hover:border-gray-100 transition-all group">
                                    <div className="h-24 w-full sm:w-40 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm">
                                        <img src={photoUrl} alt={item.photo_title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="flex-1 text-center sm:text-left">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1 justify-center sm:justify-start">
                                            <h3 className="text-base font-black text-gray-900 tracking-tight">{item.photo_title || "Untitled Masterpiece"}</h3>
                                            <span className="hidden sm:block text-gray-300">•</span>
                                            <span className="text-xs font-bold text-[#d4af37] uppercase tracking-widest">{item.category?.name}</span>
                                        </div>
                                        <p className="text-xs text-gray-400 font-medium">{dateStr} Submission</p>
                                    </div>
                                    <div className="flex items-center gap-8 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-4 sm:pt-0 border-gray-50">
                                        <div className="text-center sm:text-right">
                                            <span className="block text-2xl font-black text-gray-900 tracking-tight">{item.percentage}%</span>
                                            <span className="text-[9px] text-gray-400 uppercase font-black tracking-widest">Final Weighted Score</span>
                                        </div>
                                        <Link
                                            to={`/jury/archive/${item.id}`}
                                            className="px-6 py-3 text-[10px] font-black bg-white border border-gray-200 rounded-2xl hover:bg-black hover:text-white hover:border-black transition-all shadow-sm tracking-widest uppercase"
                                        >
                                            Metadata
                                        </Link>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-span-full py-32 flex flex-col items-center justify-center text-center">
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                <Info className="text-gray-200" size={40} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">No Chronicles Found</h3>
                            <p className="text-gray-400 max-w-xs mt-2 text-sm">We couldn't find any archived records matching your current filter selection.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
