import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Gift, ShieldCheck, Globe, Zap, BarChart3 } from 'lucide-react';

export default function AffiliateProgramHome() {
    return (
        <div className="font-sans text-gray-900 bg-white">
            {/* 🌟 Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden border-b border-gray-100">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-8">
                            <Zap size={14} />
                            Partner with Excellence
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-gray-900">
                            Empower Your Influence. <br />
                            <span className="text-[#d4af37]">Earn Weekly Rewards.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
                            Join our exclusive partner network and earn up to 30% recurring commission for every photographer you refer to the platform.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/affiliate/register"
                                className="bg-gray-900 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-black transition-all shadow-lg flex items-center gap-2"
                            >
                                Apply for Partner Access
                                <ArrowRight size={20} />
                            </Link>
                            <Link
                                to="/affiliate/login"
                                className="text-gray-600 font-bold hover:text-gray-900 transition-colors px-6 py-4"
                            >
                                Existing Partner? Sign In
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Subtle Background Decoration */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>
            </section>

            {/* 📊 Stats Section */}
            <section className="py-16 bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: "Commission Rate", value: "30%", icon: TrendingUp },
                            { label: "Cookie Duration", value: "30 Days", icon: Gift },
                            { label: "Active Partners", value: "1,200+", icon: Users },
                            { label: "Payout Frequency", value: "Weekly", icon: ShieldCheck },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-4">
                                    <stat.icon size={24} className="text-[#d4af37]" />
                                </div>
                                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 💎 Program Highlights */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                                Professional Tools for <br />
                                <span className="text-[#d4af37]">Ambitious Partners</span>
                            </h2>
                            <p className="text-gray-500 mb-10 leading-relaxed max-w-lg">
                                We provide everything you need to succeed, from high-converting creative assets to a real-time dashboard that tracks every click and conversion.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { title: "Real-time Tracking", desc: "Instant attribution for every click and registration.", icon: BarChart3 },
                                    { title: "Marketing Kit", desc: "Access professional banners and social media assets.", icon: Globe },
                                    { title: "Dedicated Support", desc: "Our team is here to help you optimize your growth.", icon: ShieldCheck }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1">
                                            <CheckCircle2 size={20} className="text-green-500" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">{item.title}</h3>
                                            <p className="text-sm text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-inner overflow-hidden relative group">
                            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 relative z-10">
                                <div className="flex justify-between items-center mb-8">
                                    <div className="text-sm font-bold text-gray-900 uppercase">Revenue Projection</div>
                                    <TrendingUp size={18} className="text-green-500" />
                                </div>
                                <div className="space-y-4">
                                    {[80, 50, 95, 65].map((w, i) => (
                                        <div key={i} className="w-full bg-gray-50 h-2 rounded-full overflow-hidden">
                                            <div className="bg-[#d4af37] h-full rounded-full transition-all duration-1000 group-hover:bg-[#bfa030]" style={{ width: `${w}%` }}></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                                    <div className="text-3xl font-bold text-gray-900">$4,250.00</div>
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Monthly Average Earnings</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🏁 CTA Section */}
            <section className="py-24 bg-gray-900 text-white text-center relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to grow with us?</h2>
                    <p className="text-gray-400 mb-12 max-w-xl mx-auto">
                        Join hundreds of successful partners who are earning sustainable income by sharing the vision of AVA.
                    </p>
                    <Link
                        to="/affiliate/register"
                        className="inline-flex items-center gap-2 bg-[#d4af37] text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-[#bfa030] transition-all"
                    >
                        Apply Now
                        <ArrowRight size={20} />
                    </Link>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] opacity-[0.03] rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37] opacity-[0.03] rounded-full blur-[100px]"></div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-gray-100 text-center">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    &copy; 2026 AVA Affiliate • Professional Partnership Program
                </p>
            </footer>
        </div>
    );
}

