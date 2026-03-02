import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Calendar, Tag, FileText, Loader2, Star, Users, Award } from "lucide-react";
import { useGetContestArchiveDetails } from "@/hooks/jury.hook";

export default function JuryArchiveDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: response, isLoading } = useGetContestArchiveDetails(id);

    const details = response?.data;
    const photoUrl = details?.competition_images?.[0]?.image || details?.category?.image || "https://via.placeholder.com/1200x800?text=No+Image";

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-[600px] text-gray-500 bg-gray-50/30 rounded-3xl border border-dashed border-gray-100">
                <Loader2 className="w-12 h-12 animate-spin text-[#d4af37] mb-4" />
                <p className="font-medium">Unlocking Historical Archives...</p>
            </div>
        );
    }

    if (!details) {
        return (
            <div className="flex flex-col items-center justify-center h-[600px] text-gray-500 py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
                <p className="text-xl font-bold text-gray-800">Archive Record Not Found</p>
                <p className="text-sm text-gray-400 mt-2">The record you are looking for might have been moved or removed.</p>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-8 px-8 py-3 bg-black text-white rounded-2xl hover:bg-[#d4af37] transition-all font-black text-xs tracking-widest uppercase shadow-xl"
                >
                    Return to Archive
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto pb-20">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-3 text-gray-400 hover:text-gray-900 transition-all mb-8 group"
            >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all border border-gray-50">
                    <ArrowLeft size={20} />
                </div>
                <div className="flex flex-col items-start translate-x-1">
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none mb-1 opacity-50">Navigation</span>
                    <span className="font-bold tracking-tight">Return to Chronicles</span>
                </div>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column - Large Image & Meta */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 p-3 group relative">
                        <img
                            src={photoUrl}
                            alt={details?.photo_title || "Art Submission"}
                            className="w-full h-auto object-cover rounded-[2.8rem] transition-transform duration-700 group-hover:scale-[1.02]"
                        />

                        {/* Winner Badge */}
                        {details.status === "winner" && (
                            <div className="absolute top-10 left-10 bg-[#d4af37] text-white px-6 py-2 rounded-full font-black text-xs tracking-[0.2em] uppercase shadow-2xl flex items-center gap-2">
                                <Award size={16} />
                                Hall of Fame
                            </div>
                        )}
                    </div>

                    {/* Final Scores Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 text-center flex flex-col items-center">
                            <div className="w-12 h-12 bg-amber-50 text-[#d4af37] rounded-2xl flex items-center justify-center mb-4 border border-amber-100">
                                <Star size={24} />
                            </div>
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Weighted Rank</span>
                            <h4 className="text-3xl font-black text-gray-900">{details.percentage}%</h4>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 text-center flex flex-col items-center">
                            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-4 border border-blue-100">
                                <Users size={24} />
                            </div>
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Jury Peer Count</span>
                            <h4 className="text-3xl font-black text-gray-900">{details.scores_count}</h4>
                        </div>
                        <div className="bg-[#1a1c2c] p-8 rounded-[2rem] shadow-xl text-center flex flex-col items-center text-white">
                            <div className="w-12 h-12 bg-white/10 text-[#d4af37] rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                                <Award size={24} />
                            </div>
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Global Standing</span>
                            <h4 className="text-3xl font-black">{details.total_score} pts</h4>
                        </div>
                    </div>

                    {/* Peer Reviews Table */}
                    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
                        <div className="px-8 py-5 border-b border-gray-50 bg-gray-50/30 flex items-center gap-3">
                            <Users size={18} className="text-[#d4af37]" />
                            <h3 className="font-bold text-gray-800 tracking-tight text-sm uppercase tracking-widest">Historical Evaluation Logs</h3>
                        </div>
                        <div className="p-8">
                            <div className="space-y-4">
                                {details.scores?.map((score, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl border border-gray-50 hover:border-[#d4af37]/20 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[10px] font-black text-gray-400">
                                                J{score.user_id}
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-gray-800 tracking-tight">Verified Jury Member</p>
                                                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Credentialed Peer Reviewer</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-base font-black text-gray-900">{score.score}</span>
                                            <span className="text-[10px] text-gray-400 ml-1 font-bold">/ 20</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Submission Details */}
                <div className="space-y-8">
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 sticky top-10">
                        <h2 className="text-xl font-black text-gray-900 mb-8 border-b border-gray-50 pb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-black rounded-full"></span>
                            Chronological Record
                        </h2>

                        <div className="space-y-10">
                            {/* Photo Identity */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                                    Submission Identity
                                </label>
                                <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-tight">{details.photo_title || "Untitled Masterpiece"}</h3>
                            </div>

                            {/* Category Badge */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gray-900 font-bold text-xs uppercase tracking-widest">
                                    <Tag size={16} className="text-[#d4af37]" />
                                    <span>Curated Category</span>
                                </div>
                                <div className="px-6 py-2.5 bg-gray-900 text-[#d4af37] text-xs font-black rounded-2xl inline-block shadow-lg uppercase tracking-[0.1em]">
                                    {details.category?.name || "General Exhibition"}
                                </div>
                            </div>

                            {/* Description Terminal */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gray-900 font-bold text-xs uppercase tracking-widest">
                                    <FileText size={16} className="text-[#d4af37]" />
                                    <span>Artist Context</span>
                                </div>
                                <div className="bg-gray-50/80 rounded-3xl p-6 border border-gray-100">
                                    <p className="text-gray-600 leading-relaxed text-sm font-medium italic">
                                        "{details.photo_description || details.description || "No description provided for this submission."}"
                                    </p>
                                </div>
                            </div>

                            {/* Archive Timestamp */}
                            <div className="pt-8 border-t border-gray-50 space-y-4">
                                <div className="flex items-center gap-3 text-gray-900 font-bold text-xs uppercase tracking-widest">
                                    <Calendar size={16} className="text-[#d4af37]" />
                                    <span>Verified Entry Date</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-50 text-gray-800">
                                        <p className="text-xs font-black leading-none uppercase">
                                            {details.created_at ? new Date(details.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : "Recently Archived"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security Badge */}
                    <div className="bg-gradient-to-br from-[#1a1c2c] to-[#4a192c] rounded-[2rem] p-8 text-white text-center shadow-2xl relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-3">System Integrity</div>
                            <div className="text-xs font-black flex items-center justify-center gap-3 tracking-widest">
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
                                SECURE ARCHIVE ACCESS
                            </div>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
