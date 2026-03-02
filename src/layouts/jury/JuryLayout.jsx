import { Outlet, Link, useNavigate } from "react-router";
import JurySidebar from "./JurySidebar";
import { useGetUserInfo, useLogout } from "@/hooks/auth.hook";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User as UserIcon, Home, LayoutDashboard } from "lucide-react";

export default function JuryLayout() {
    const { data: response } = useGetUserInfo();
    const { mutate: logoutMutate } = useLogout();
    const navigate = useNavigate();
    const user = response?.data;

    const handleLogout = () => {
        logoutMutate(null, {
            onSuccess: () => navigate("/"),
            onError: () => navigate("/"),
        });
    };

    return (
        <div className="flex min-h-screen bg-[#f5f6fa]">
            {/* Sidebar */}
            <JurySidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Topbar */}
                <div className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm">
                    <div className="text-xl font-semibold text-gray-800">
                        Jury Voting Panel
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
                                <div className="text-right hidden sm:block">
                                    <div className="text-sm font-medium text-gray-900">
                                        {user ? `${user.first_name} ${user.last_name}` : "Jury Member"}
                                    </div>
                                    <div className="text-xs text-gray-500 capitalize">{user?.role || "Jury"} Member</div>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
                                    <img
                                        src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.first_name}+${user?.last_name}&background=0D8ABC&color=fff`}
                                        alt="Jury Profile"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 mt-1">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link to="/jury/profile" className="flex items-center gap-2 cursor-pointer">
                                    <UserIcon size={16} />
                                    <span>Jury Profile</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/" className="flex items-center gap-2 cursor-pointer">
                                    <Home size={16} />
                                    <span>Main Website</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={handleLogout}
                                className="text-red-600 focus:text-red-600 cursor-pointer"
                            >
                                <LogOut size={16} className="mr-2" />
                                <span>Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Page Content */}
                <div className="p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
