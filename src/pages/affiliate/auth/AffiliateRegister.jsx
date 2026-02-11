import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Mail, User, Lock, ExternalLink, ArrowRight, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AffiliateRegister() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        userType: 'Photographer',
        promotionChannels: '',
        password: '',
        acceptedTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
            toast.error("Please fill in all required fields");
            return;
        }
        if (!formData.acceptedTerms) {
            toast.error("You must accept the terms and conditions to register");
            return;
        }
        setIsLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            toast.success("Application submitted successfully! Please log in.");
            navigate('/affiliate/login');
        } catch (error) {
            toast.error("Registration failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f5f6fa] flex items-center justify-center p-6 py-12">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                <div className="p-8 md:p-12">
                    <div className="text-center mb-10">
                        <Link to="/" className="inline-flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-[#d4af37] rounded-lg flex items-center justify-center text-black font-bold text-xl">
                                A
                            </div>
                            <span className="text-2xl font-bold text-gray-900 tracking-tight">AVA Affiliate</span>
                        </Link>
                        <h1 className="text-2xl font-bold text-gray-900">Partner Application</h1>
                        <p className="text-gray-500 text-sm mt-2">Join our network and start earning commissions</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">First Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="John"
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-[#d4af37] focus:border-[#d4af37] outline-none text-sm transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Last Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Doe"
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-[#d4af37] focus:border-[#d4af37] outline-none text-sm transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-[#d4af37] focus:border-[#d4af37] outline-none text-sm transition-all"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Partner Type</label>
                                <select
                                    name="userType"
                                    value={formData.userType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-[#d4af37] focus:border-[#d4af37] outline-none text-sm font-medium appearance-none cursor-pointer"
                                >
                                    <option value="Photographer">Photographer</option>
                                    <option value="Influencer">Influencer / Creator</option>
                                    <option value="Agency">Marketing Agency</option>
                                    <option value="Visitor">Industry Enthusiast</option>
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Primary Channel</label>
                                <div className="relative">
                                    <ExternalLink className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        name="promotionChannels"
                                        value={formData.promotionChannels}
                                        onChange={handleChange}
                                        placeholder="instagram.com/user"
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-[#d4af37] focus:border-[#d4af37] outline-none text-sm transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Create Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-[#d4af37] focus:border-[#d4af37] outline-none text-sm transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex items-start gap-3 pt-2">
                            <div className="flex items-center h-5">
                                <input
                                    id="acceptedTerms"
                                    name="acceptedTerms"
                                    type="checkbox"
                                    checked={formData.acceptedTerms}
                                    onChange={handleChange}
                                    className="w-5 h-5 text-[#d4af37] border-gray-300 rounded focus:ring-[#d4af37] cursor-pointer"
                                />
                            </div>
                            <label htmlFor="acceptedTerms" className="text-sm text-gray-600 cursor-pointer select-none leading-tight">
                                I have read and agree to the <Link to="/terms" className="text-[#d4af37] font-bold hover:underline">Affiliate Program Terms & Conditions</Link>. I understand that any violation of these terms may result in account termination.
                            </label>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gray-900 hover:bg-black text-white py-4 rounded-lg font-bold text-base transition-all flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-gray-200"
                            >
                                {isLoading ? (
                                    <Loader2 className="animate-spin" size={20} />
                                ) : (
                                    <>
                                        <span>Submit Application</span>
                                        <ArrowRight size={18} />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-10 pt-6 border-t border-gray-100 text-center">
                        <p className="text-sm text-gray-500">
                            Already part of the network?{' '}
                            <Link to="/affiliate/login" className="text-[#d4af37] font-bold hover:underline">
                                Member Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

