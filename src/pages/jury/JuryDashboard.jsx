import { useState, useEffect } from "react";
import { Link } from "react-router";
import { toast } from "react-hot-toast";
import { CheckCircle, Info, Star, ChevronRight, Maximize2 } from "lucide-react";

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
    ][i % 12]}?auto=format&fit=crop&q=80&w=800`,
    category: ["Digital Art", "Oil Painting", "Photography"][i % 3],
    title: `Submission #${1000 + i + 1}`
}));

export default function JuryDashboard() {
    const [candidates, setCandidates] = useState(MOCK_CANDIDATES);
    const [votedCandidates, setVotedCandidates] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);

    const handleVote = (id, score) => {
        setVotedCandidates((prev) => ({
            ...prev,
            [id]: score,
        }));
        toast.success(`Score of ${score} recorded!`, {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
            iconTheme: {
                primary: '#d4af37',
                secondary: '#fff',
            },
        });
    };

    const progress = Math.round((Object.keys(votedCandidates).length / candidates.length) * 100);

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
            {/* Header Section */}
            <div className="relative mb-12 p-8 rounded-3xl bg-gradient-to-br from-[#1a1c2c] to-[#4a192c] text-white shadow-2xl overflow-hidden">
                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                                Evaluation <span className="text-[#d4af37]">Portal</span>
                            </h1>
                            <p className="text-gray-300 mt-4 max-w-2xl text-lg leading-relaxed">
                                Review submissions with precision. Your scores contribute to the final global average.
                                <span className="block mt-2 font-semibold text-white/90">
                                    <Info className="inline-block w-5 h-5 mr-2 -mt-1 text-[#d4af37]" />
                                    Voting is 100% anonymous for a fair evaluation.
                                </span>
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 min-w-[200px]">
                            <div className="text-sm font-medium text-gray-300 mb-2">Voting Progress</div>
                            <div className="flex items-end gap-2 mb-4">
                                <span className="text-4xl font-bold">{progress}%</span>
                                <span className="text-gray-400 mb-1">completed</span>
                            </div>
                            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-[#d4af37] h-full transition-all duration-1000 ease-out"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Abstract background elements */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Grid Layout - 2 columns for larger images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {candidates.map((candidate, index) => (
                    <div
                        key={candidate.id}
                        className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 border border-gray-100 flex flex-col"
                    >
                        {/* Image Container - Larger & Dynamic */}
                        <div className="relative aspect-[4/5] overflow-hidden bg-gray-900">
                            <Link to={`/jury/dashboard/${candidate.id}`} className="block w-full h-full cursor-pointer">
                                <img
                                    src={candidate.photoUrl}
                                    alt="Candidate Submission"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                    loading="lazy"
                                />
                            </Link>

                            {/* Premium Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Quick Actions */}
                            <div className="absolute top-6 right-6 flex gap-2">
                                <button
                                    onClick={() => setSelectedImage(candidate.photoUrl)}
                                    className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-[#d4af37] transition-colors duration-300"
                                    title="View Fullscreen"
                                >
                                    <Maximize2 size={20} />
                                </button>
                            </div>

                            {/* Badge */}
                            <div className="absolute top-6 left-6">
                                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold tracking-widest uppercase">
                                    {candidate.category}
                                </div>
                            </div>

                            {/* Info on bottom of image */}
                            <Link to={`/jury/dashboard/${candidate.id}`} className="absolute bottom-6 left-8 right-8 text-white group/info">
                                <div className="text-xs font-medium text-[#d4af37] mb-1 group-hover/info:translate-x-1 transition-transform">ID: #{candidate.id.toString().padStart(4, '0')}</div>
                                <h3 className="text-2xl font-bold group-hover/info:text-[#d4af37] transition-colors">{candidate.title}</h3>
                            </Link>

                            {/* Score Checkmark */}
                            {votedCandidates[candidate.id] && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] z-20">
                                    <div
                                        className="bg-white rounded-3xl p-8 flex flex-col items-center shadow-2xl scale-100 transition-transform duration-300"
                                    >
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle className="text-green-500 w-10 h-10" />
                                        </div>
                                        <div className="text-gray-500 text-sm font-medium uppercase tracking-widest mb-1">Your Score</div>
                                        <div className="text-5xl font-black text-gray-900 mb-4">{votedCandidates[candidate.id]}<span className="text-xl text-gray-400">/20</span></div>
                                        <button
                                            onClick={() => setVotedCandidates(prev => {
                                                const newVoted = { ...prev };
                                                delete newVoted[candidate.id];
                                                return newVoted;
                                            })}
                                            className="text-[#d4af37] font-semibold text-sm hover:underline"
                                        >
                                            Change Score
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Voting Controls - Compact grid for 1-20 */}
                        <div className="p-8 bg-white">
                            <div className="flex items-center gap-2 mb-6">
                                <Star className="text-[#d4af37] fill-[#d4af37] w-5 h-5" />
                                <span className="font-bold text-gray-800 tracking-tight">Assign Score (1 - 20)</span>
                            </div>

                            <div className="grid grid-cols-5 gap-3">
                                {Array.from({ length: 20 }, (_, i) => i + 1).map((score) => (
                                    <button
                                        key={score}
                                        onClick={() => handleVote(candidate.id, score)}
                                        className={`h-12 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${votedCandidates[candidate.id] === score
                                            ? "bg-[#d4af37] text-white shadow-lg shadow-[#d4af37]/40 ring-2 ring-[#d4af37] ring-offset-2"
                                            : "bg-[#f8f9fa] text-gray-600 hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
                                            }`}
                                    >
                                        {score}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-8 flex justify-between items-center text-xs text-gray-400 font-medium">
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                    <span>Verified Entry</span>
                                </div>
                                <span>UNBIASED VOTING SYSTEM</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Results Calculation Section */}
            <div
                className="relative z-10 mt-20 p-10 bg-white rounded-[3rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100"
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">LIVE CALCULATION</span>
                            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Global Standing <span className="text-[#d4af37]">Top 10</span></h2>
                        </div>
                        <p className="text-gray-500">Based on the current average from all jury members. Positions may shift until final validation.</p>
                    </div>
                    <button
                        disabled={progress < 100}
                        className={`px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 ${progress === 100
                            ? "bg-black text-white hover:scale-105 active:scale-95 shadow-xl shadow-black/20"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                            }`}
                    >
                        Finalize & Submit Results
                        <ChevronRight size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {candidates
                        .map(c => ({
                            ...c,
                            myScore: votedCandidates[c.id] || 0,
                            // Simulate average from other 4 jury members (random 12-18 range)
                            otherAvg: (Math.random() * 6 + 12),
                            get globalAvg() {
                                return (this.myScore + this.otherAvg * 4) / 5;
                            }
                        }))
                        .sort((a, b) => b.globalAvg - a.globalAvg)
                        .slice(0, 10)
                        .map((winner, idx) => (
                            <div
                                key={winner.id}
                                className="flex items-center gap-6 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all group"
                            >
                                <div className="relative">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xl ${idx === 0 ? "bg-[#d4af37] text-white ring-4 ring-[#d4af37]/20" :
                                        idx === 1 ? "bg-gray-400 text-white" :
                                            idx === 2 ? "bg-orange-400 text-white" : "bg-white text-gray-400"
                                        }`}>
                                        {idx + 1}
                                    </div>
                                </div>
                                <div className="h-16 w-16 rounded-xl overflow-hidden shadow-sm group-hover:scale-110 transition-transform">
                                    <img src={winner.photoUrl} className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 leading-tight">Submission #{winner.id.toString().padStart(4, '0')}</h4>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">{winner.category}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-black text-gray-900 group-hover:text-[#d4af37] transition-colors">{winner.globalAvg.toFixed(1)}</div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Avg Score</div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {progress < 100 && (
                    <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-center gap-3 text-amber-800 text-sm">
                        <Info size={18} />
                        Complete all {candidates.length} evaluations to enable submission to administration.
                    </div>
                )}
            </div>

            {/* Image Preview Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-xl"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl scale-100 transition-all duration-300"
                    />
                    <button
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
            )}
        </div>
    );
}
