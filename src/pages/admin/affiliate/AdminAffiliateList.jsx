import React, { useState } from 'react';
import {
    Search,
    Filter,
    Download,
    MoreHorizontal,
    CheckCircle2,
    Clock,
    Eye
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function AdminAffiliateList() {
    const [affiliates] = useState([
        { id: "AFF-1024", name: "Sarah Jenkins", email: "sarah@example.com", joined: "Oct 12, 2025", referrals: 156, earnings: "$2,450.00", status: "Active" },
        { id: "AFF-1025", name: "Mark Peterson", email: "mark@example.com", joined: "Oct 15, 2025", referrals: 84, earnings: "$1,120.00", status: "Active" },
        { id: "AFF-1026", name: "David Wilson", email: "david@example.com", joined: "Oct 18, 2025", referrals: 12, earnings: "$150.00", status: "Pending" },
        { id: "AFF-1027", name: "Emma Thompson", email: "emma@example.com", joined: "Oct 20, 2025", referrals: 0, earnings: "$0.00", status: "Suspended" },
    ]);

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-700';
            case 'Pending': return 'bg-orange-100 text-orange-700';
            case 'Suspended': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const handleExport = () => toast.success("Exporting affiliate data...");
    const handleCreatePartner = () => toast.info("Opening partner creation form...");
    const handleFilterClick = () => toast.info("Filter options coming soon");
    const handleViewDetails = (id) => toast.info(`Viewing details for ${id}`);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Affiliate Management</h1>
                    <p className="text-gray-500 text-sm">Review applications and manage active partnerships.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={handleExport}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium bg-white hover:bg-gray-50 transition-colors"
                    >
                        <Download size={18} />
                        Export CSV
                    </button>
                    <button
                        onClick={handleCreatePartner}
                        className="flex items-center gap-2 px-4 py-2 bg-[#d4af37] text-white rounded-lg text-sm font-bold hover:bg-[#bfa030] transition-colors shadow-sm"
                    >
                        Create Partner
                    </button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: "Total Affiliates", value: "1,248", change: "+12 this week", icon: CheckCircle2, color: "text-blue-600" },
                    { label: "Pending Applications", value: "42", change: "Requires review", icon: Clock, color: "text-orange-600" },
                    { label: "Total Payouts", value: "$45,280", change: "Last 30 days", icon: DollarSign, color: "text-green-600" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start mb-4">
                            <div className="text-sm font-medium text-gray-500">{stat.label}</div>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs text-gray-400 mt-1">{stat.change}</div>
                    </div>
                ))}
            </div>

            {/* Filters & Search */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by name, email or ID..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37] text-sm"
                    />
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div
                        onClick={handleFilterClick}
                        className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                        <Filter size={18} className="text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">Filter</span>
                    </div>
                    <select className="bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg text-sm font-medium outline-none focus:ring-1 focus:ring-[#d4af37]">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Pending</option>
                        <option>Suspended</option>
                    </select>
                </div>
            </div>

            {/* Affiliates Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Affiliate</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Joined Date</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Referrals</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Earnings</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {affiliates.map((aff) => (
                                <tr key={aff.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500">
                                                {aff.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-gray-900">{aff.name}</div>
                                                <div className="text-xs text-gray-500">{aff.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{aff.joined}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600 text-center">{aff.referrals}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900">{aff.earnings}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${getStatusStyle(aff.status)}`}>
                                            {aff.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleViewDetails(aff.id)}
                                                className="p-2 text-gray-400 hover:text-[#d4af37] transition-colors rounded-lg hover:bg-gray-100"
                                            >
                                                <Eye size={18} />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100">
                                                <MoreHorizontal size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                    <div>Showing 4 of 1,248 affiliates</div>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 border border-gray-200 rounded bg-white hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 border border-gray-200 rounded bg-white hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Dummy DollarSign for stats since I missed importing it
function DollarSign({ size, className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
    );
}
