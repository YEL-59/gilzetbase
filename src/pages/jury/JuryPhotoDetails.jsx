import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Calendar, Tag, FileText } from "lucide-react";

// Using same mock data logic to find the "photo"
const MOCK_CANDIDATES = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    photoUrl: `https://images.unsplash.com/photo-${[
        "1500648767791-00dcc994a43e",
        "1506794778202-cad84cf45f1d",
        "1534528741775-53994a69daeb",
        "1507003211169-0a1dd7228f2d",
        "1494790108377-be9c29b29330",
        "1524504388940-b1c1722653e1",
        "1521119989659-a83eee488004",
        "1531746020798-e6953c6e8e04",
        "1488426862026-3ee34a7d66df",
        "1539571696357-5a69c17a67c6",
        "1517841905240-472988babdf9",
        "1524250502761-1ac6f2e30d43"
    ][i % 12]}?auto=format&fit=crop&q=80&w=1200`,
    category: ["Digital Art", "Oil Painting", "Photography"][i % 3],
    title: `Submission #${1000 + i + 1}`,
    description: "A contemplative portrait that captures the quiet strength and resilience of the human spirit. Shot in natural window light, this image emphasizes texture, emotion, and the profound beauty found in moments of stillness and reflection.",
    date: "December 5, 2025"
}));

export default function JuryPhotoDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const candidate = MOCK_CANDIDATES.find(c => c.id === parseInt(id));

    if (!candidate) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <p>Submission not found</p>
                <button onClick={() => navigate(-1)} className="mt-4 text-[#d4af37] font-semibold">Go Back</button>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto pb-20">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-8 group"
            >
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-[#d4af37] group-hover:text-white transition-all">
                    <ArrowLeft size={20} />
                </div>
                <span className="font-semibold">Back to Evaluation</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column - Large Image */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
                        <img
                            src={candidate.photoUrl}
                            alt={candidate.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Right Column - Info (Matches provided screenshot) */}
                <div className="space-y-6">
                    <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 sticky top-10">
                        <h2 className="text-2xl font-black text-gray-900 mb-8 border-b pb-4">Photo Information</h2>

                        <div className="space-y-8">
                            {/* Category */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-gray-800 font-bold">
                                    <Tag size={18} className="text-[#d4af37]" />
                                    <span>Category</span>
                                </div>
                                <div className="px-5 py-2 bg-amber-50 text-[#d4af37] text-sm font-black rounded-xl inline-block border border-amber-100">
                                    {candidate.category}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-gray-800 font-bold">
                                    <FileText size={18} className="text-[#d4af37]" />
                                    <span>Photo Description</span>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {candidate.description}
                                </p>
                            </div>

                            {/* Submission Date */}
                            <div className="pt-8 border-t space-y-3">
                                <div className="flex items-center gap-2 text-gray-800 font-bold">
                                    <Calendar size={18} className="text-[#d4af37]" />
                                    <span>Submission Date</span>
                                </div>
                                <p className="text-gray-500 font-medium">
                                    {candidate.date}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Anonymous Badge */}
                    <div className="bg-gradient-to-br from-[#1a1c2c] to-[#4a192c] rounded-2xl p-6 text-white text-center shadow-lg border border-white/10">
                        <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-2">Security Status</div>
                        <div className="text-sm font-semibold flex items-center justify-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                            ANONYMOUS SESSION ACTIVE
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
