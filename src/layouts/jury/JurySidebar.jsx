import { NavLink } from "react-router";

export default function JurySidebar() {
    return (
        <aside className="w-64 bg-[#1a1a1a] text-white flex flex-col justify-between h-screen sticky top-0">
            {/* Top */}
            <div>
                {/* Logo */}
                <div className="p-6 border-b border-white/10">
                    <h1 className="text-xl font-bold text-[#d4af37]">
                        AVA <span className="text-sm font-normal">Jury Portal</span>
                    </h1>
                </div>

                {/* Menu */}
                <nav className="p-4 space-y-2">
                    {/* ===== VOTE DASHBOARD ===== */}
                    <NavLink
                        to="/jury/dashboard"
                        end
                        className={({ isActive }) =>
                            `flex gap-2 items-center px-4 py-2 rounded transition-colors ${isActive ? "bg-[#d4af37] text-black" : "hover:bg-white/10"
                            }`
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <path d="M9 12h6" />
                            <path d="M12 9v6" />
                        </svg>
                        Vote Dashboard
                    </NavLink>

                    {/* ===== ARCHIVES ===== */}
                    <NavLink
                        to="/jury/archive"
                        className={({ isActive }) =>
                            `flex gap-2 items-center px-4 py-2 rounded transition-colors ${isActive ? "bg-[#d4af37] text-black" : "hover:bg-white/10"
                            }`
                        }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                        Archives & History
                    </NavLink>

                    {/* ===== SETTINGS ===== */}
                    <NavLink
                        to="/jury/profile"
                        className={({ isActive }) =>
                            `flex gap-2 items-center px-4 py-2 rounded transition-colors ${isActive ? "bg-[#d4af37] text-black" : "hover:bg-white/10"
                            }`
                        }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.09a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.09a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
                        Settings
                    </NavLink>
                </nav>
            </div>

            {/* Bottom */}
            <div className="p-4 border-t border-white/10">
                <button className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors w-full px-4 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
                    Sign Out
                </button>
            </div>
        </aside>
    );
}
