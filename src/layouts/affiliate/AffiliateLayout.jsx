import { Outlet } from "react-router";
import AffiliateSidebar from "./AffiliateSidebar";

export default function AffiliateLayout() {
    return (
        <div className="flex min-h-screen bg-[#f5f6fa]">
            {/* Sidebar */}
            <AffiliateSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Topbar */}
                <div className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm">
                    <div className="text-xl font-semibold text-gray-800">
                        Affiliate Partner Panel
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-right hidden sm:block">
                            <div className="text-sm font-medium text-gray-900">John Doe</div>
                            <div className="text-xs text-gray-500">Elite Partner</div>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
                            <img
                                src="https://ui-avatars.com/api/?name=John+Doe&background=caa844&color=fff"
                                alt="Affiliate Profile"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Page Content */}
                <div className="p-6 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

