import { NavLink, useNavigate } from "react-router";
import {
    LayoutDashboard,
    DollarSign,
    Gift,
    Settings,
    LogOut
} from "lucide-react";
import toast from "react-hot-toast";

export default function AffiliateSidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        toast.info("Signing out...");
        setTimeout(() => {
            navigate("/affiliate/login");
        }, 1000);
    };

    return (
        <aside className="w-64 bg-[#1a1a1a] text-white flex flex-col justify-between h-screen sticky top-0">
            {/* Top */}
            <div>
                {/* Logo */}
                <div className="p-6 border-b border-white/10">
                    <h1 className="text-xl font-bold text-[#d4af37]">
                        AVA <span className="text-sm font-normal">Affiliate</span>
                    </h1>
                </div>

                {/* Menu */}
                <nav className="p-4 space-y-2">
                    {[
                        { to: "/affiliate/panel", label: "Dashboard", icon: LayoutDashboard, end: true },
                        { to: "/affiliate/panel/commissions", label: "Commissions", icon: DollarSign },
                        { to: "/affiliate/panel/materials", label: "Marketing Kit", icon: Gift },
                        { to: "/affiliate/panel/settings", label: "Settings", icon: Settings },
                    ].map((item, i) => (
                        <NavLink
                            key={i}
                            to={item.to}
                            end={item.end}
                            className={({ isActive }) =>
                                `flex gap-2 items-center px-4 py-2 rounded transition-colors ${isActive ? "bg-[#d4af37] text-black" : "hover:bg-white/10"
                                }`
                            }
                        >
                            <item.icon size={20} />
                            <span className="text-sm font-medium">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* Bottom */}
            <div className="p-4 border-t border-white/10">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors w-full px-4 py-2"
                >
                    <LogOut size={20} />
                    <span className="text-sm font-medium">Sign Out</span>
                </button>
            </div>
        </aside>
    );
}

