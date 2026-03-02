import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Calendar, Tag, FileText, Loader2 } from "lucide-react";
import { useGetScoreDetails } from "@/hooks/jury.hook";

export default function JuryPhotoDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: response, isLoading } = useGetScoreDetails(id);

    const details = response?.data;
    const photoUrl = details?.competition_images?.[0]?.image || details?.category?.image || "https://via.placeholder.com/1200x800?text=No+Image";

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-96 text-gray-500">
                <Loader2 className="w-10 h-10 animate-spin text-[#d4af37] mb-4" />
                <p>Decoding Submission Data...</p>
            </div>
        );
    }

    if (!details) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 py-20">
                <p className="text-xl font-semibold">Submission not found</p>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-6 px-6 py-2 bg-white border border-[#d4af37] text-[#d4af37] rounded-full hover:bg-[#d4af37] hover:text-white transition-all font-bold"
                >
                    Back to Evaluation
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto pb-20">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors mb-8 group"
            >
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-[#d4af37] group-hover:text-white transition-all">
                    <ArrowLeft size={20} />
                </div>
                <span className="font-semibold">Back to Evaluation</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column - Large Image */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 p-2">
                        <img
                            src={photoUrl}
                            alt={details?.photo_title || "Art Submission"}
                            className="w-full h-auto object-cover rounded-[2rem]"
                        />
                    </div>
                </div>

                {/* Right Column - Info */}
                <div className="space-y-6">
                    <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 sticky top-10">
                        <h2 className="text-2xl font-black text-gray-900 mb-8 border-b pb-4 flex items-center gap-2">
                            <span className="w-2 h-8 bg-[#d4af37] rounded-full"></span>
                            Submission Details
                        </h2>

                        <div className="space-y-8">
                            {/* Title */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Photo Title</label>
                                <h3 className="text-xl font-bold text-gray-800">{details?.photo_title || "Untitled Artwork"}</h3>
                            </div>

                            {/* Category */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-gray-800 font-bold">
                                    <Tag size={18} className="text-[#d4af37]" />
                                    <span>Category</span>
                                </div>
                                <div className="px-5 py-2 bg-amber-50 text-[#d4af37] text-xs font-black rounded-xl inline-block border border-amber-100 uppercase tracking-wider">
                                    {details?.category?.name || "General Selection"}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-gray-800 font-bold">
                                    <FileText size={18} className="text-[#d4af37]" />
                                    <span>Photo Description</span>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {details?.photo_description || details?.description || "No description provided for this submission."}
                                </p>
                            </div>

                            {/* Submission Date */}
                            <div className="pt-8 border-t space-y-3">
                                <div className="flex items-center gap-2 text-gray-800 font-bold">
                                    <Calendar size={18} className="text-[#d4af37]" />
                                    <span>Submission Date</span>
                                </div>
                                <p className="text-gray-500 font-medium">
                                    {details?.created_at
                                        ? new Date(details.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                                        : "Recently Submitted"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Anonymous Badge */}
                    <div className="bg-gradient-to-br from-[#1a1c2c] to-[#4a192c] rounded-2xl p-6 text-white text-center shadow-lg border border-white/10">
                        <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-2 text-gray-400">Security Status</div>
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
