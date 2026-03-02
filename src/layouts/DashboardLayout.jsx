import { useState, useRef, useEffect } from "react";
import Sidebar from "@/shared/sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router";
import { useAuth } from "@/hooks/AuthContext";
import { useLogout } from "@/hooks/auth.hook";
import {
  Home,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Bell,
} from "lucide-react";

export default function DashboardLayout() {
  const { user } = useAuth();
  const { mutate: logoutMutate } = useLogout();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayName = user
    ? `${user.first_name || ""} ${user.last_name || ""}`.trim()
    : "Guest";

  const userEmail = user?.email || "";
  const avatarUrl = user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=d4af37&color=fff&bold=true`;

  const menuItems = [
    {
      label: "Home",
      icon: Home,
      onClick: () => {
        navigate("/");
        setDropdownOpen(false);
      },
    },
    {
      label: "Profile",
      icon: User,
      onClick: () => {
        navigate("/dashboard/account/profile");
        setDropdownOpen(false);
      },
    },
    {
      label: "Settings",
      icon: Settings,
      onClick: () => {
        navigate("/dashboard/account/password");
        setDropdownOpen(false);
      },
    },
  ];

  const handleLogout = () => {
    setDropdownOpen(false);
    logoutMutate(null, {
      onSuccess: () => {
        navigate("/");
      },
      onError: () => {
        navigate("/");
      }
    });
  };

  return (
    <div className="flex min-h-screen bg-[#f5f6fa]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="h-16 bg-white border-b flex items-center justify-between px-6 sticky top-0 z-30">
          {/* Left side - can add breadcrumbs later */}
          <div />

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            {/* <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Bell className="w-5 h-5 text-gray-500" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button> */}

            {/* Divider */}
            <div className="w-px h-8 bg-gray-200" />

            {/* User Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-3 px-3 py-1.5 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200"
              >
                <img
                  src={avatarUrl}
                  alt={displayName}
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-amber-400/30"
                />
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-semibold text-gray-800 leading-tight">
                    {displayName}
                  </p>
                  <p className="text-[11px] text-gray-400 leading-tight">
                    {user?.role
                      ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
                      : "Member"}
                  </p>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  {/* User Info Header */}
                  <div className="px-4 py-3 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <img
                        src={avatarUrl}
                        alt={displayName}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-400/40"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-900 truncate">
                          {displayName}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {userEmail}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-1.5">
                    {menuItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={item.onClick}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-amber-700 transition-colors"
                      >
                        <item.icon className="w-4 h-4 text-gray-400" />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Logout */}
                  <div className="border-t border-gray-100 py-1.5">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
