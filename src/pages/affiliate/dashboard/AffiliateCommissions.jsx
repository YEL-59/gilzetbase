import React, { useState } from 'react';
import {
    Download,
    Filter,
    ChevronDown,
    Wallet,
    Search,
    X,
    Info
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function AffiliateCommissions() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleExport = () => toast.success("Exporting transaction data...");
    const handlePayoutRequest = () => {
        toast.error("Minimum payout threshold of €100 not reached or request form coming soon.");
    };

    const transactions = [
        { id: "#TRX-9823", date: "Oct 24, 2025", desc: "Premium Registration Commission", amount: 25.00, status: "Approved", type: "credit" },
        { id: "#TRX-9821", date: "Oct 22, 2025", desc: "Silver Contest Entry Referral", amount: 5.00, status: "Pending", type: "credit" },
        { id: "#TRX-9810", date: "Oct 15, 2025", desc: "Monthly Payout to PayPal", amount: 150.00, status: "Paid", type: "debit" },
        { id: "#TRX-9755", date: "Oct 12, 2025", desc: "User Registration Bonus", amount: 25.00, status: "Approved", type: "credit" },
        { id: "#TRX-9712", date: "Oct 01, 2025", desc: "Platform Promotion Reward", amount: 15.00, status: "Approved", type: "credit" },
    ];

    const filteredTransactions = transactions.filter(trx => {
        const matchesSearch = trx.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
            trx.id.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === "All" || trx.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Commissions & History</h1>
                    <p className="text-gray-500 text-sm">Review your earnings and withdrawal history.</p>
                </div>

                {/* Payout Threshold Info */}
                <div className="flex items-center gap-3 bg-blue-50 border border-blue-100 px-4 py-2 rounded-lg">
                    <div className="bg-blue-500/10 p-1.5 rounded-full">
                        <Info size={16} className="text-blue-600" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-blue-900">Payout Threshold</p>
                        <p className="text-[11px] text-blue-700">Minimum balance of <span className="font-bold">€100</span> required for withdrawal.</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={handleExport}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                        <Download size={16} />
                        Export
                    </button>
                    <button
                        onClick={handlePayoutRequest}
                        className="flex items-center gap-2 px-6 py-2 bg-[#d4af37] text-black rounded-lg text-sm font-semibold hover:bg-[#bfa030] transition-colors shadow-sm"
                    >
                        <Wallet size={16} />
                        Request Payout
                    </button>
                </div>
            </div>

            {/* 💰 Quick Stats / Balance */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                            <Wallet size={20} />
                        </div>
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Available Balance</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">€425.00</div>
                    <div className="mt-2 flex items-center gap-2">
                        <div className="h-1.5 flex-1 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                        <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider">Threshold Met</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                            <Info size={20} />
                        </div>
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Next Payout</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">€100.00</div>
                    <p className="text-xs text-gray-500 mt-2">Minimum required for withdrawal</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                            <Search size={20} />
                        </div>
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Pending Review</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">€25.00</div>
                    <p className="text-xs text-gray-500 mt-2">Commissions waiting for approval</p>
                </div>
            </div>

            {/* 🔍 Search & Filters */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4 relative">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by ID or description..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-[#d4af37] focus:border-[#d4af37] outline-none text-sm transition-all"
                    />
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            <X size={14} />
                        </button>
                    )}
                </div>

                <div className="relative">
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${filterStatus !== 'All' ? 'bg-[#d4af37]/10 border-[#d4af37] text-[#d4af37]' : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'}`}
                    >
                        <Filter size={18} />
                        {filterStatus === "All" ? "Status" : filterStatus}
                        <ChevronDown size={14} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isFilterOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-xl z-50 py-2">
                            {["All", "Approved", "Pending", "Paid"].map((status) => (
                                <button
                                    key={status}
                                    onClick={() => {
                                        setFilterStatus(status);
                                        setIsFilterOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${filterStatus === status ? 'bg-gray-50 text-[#d4af37] font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* 📅 Commissions Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                                <th className="px-6 py-4">Transaction ID</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Description</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredTransactions.map((trx) => (
                                <tr key={trx.id} className="hover:bg-gray-50/50 transition-colors text-sm">
                                    <td className="px-6 py-4 font-semibold text-gray-700">{trx.id}</td>
                                    <td className="px-6 py-4 text-gray-500">{trx.date}</td>
                                    <td className="px-6 py-4 text-gray-700">{trx.desc}</td>
                                    <td className="px-6 py-4">
                                        <span className={`font-bold ${trx.type === 'credit' ? 'text-green-600' : 'text-gray-900'}`}>
                                            {trx.type === 'credit' ? '+' : '-'}${trx.amount.toFixed(2)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase
                                            ${trx.status === 'Approved' ? 'bg-green-100 text-green-700' :
                                                trx.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                                                    'bg-gray-900 text-white'}`}>
                                            {trx.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredTransactions.length === 0 && (
                    <div className="py-16 text-center">
                        <Wallet className="text-gray-300 w-12 h-12 mx-auto mb-3" />
                        <h4 className="text-lg font-semibold text-gray-900">No transactions found</h4>
                        <p className="text-sm text-gray-500">Try adjusting your filters or search term.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
