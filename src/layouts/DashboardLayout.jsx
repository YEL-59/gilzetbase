import Sidebar from "@/shared/sidebar/Sidebar";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[#f5f6fa]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="h-16 bg-white border-b flex items-center justify-end px-6">
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium">Esther Howard</span>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">
          <Outlet /> {/* Dynamic content loads here */}
        </div>
      </div>
    </div>
  );
}
