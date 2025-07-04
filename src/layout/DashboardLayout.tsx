import { Outlet } from "react-router-dom";
import Sidebar from "@/widgets/Sidebar";
import Header from "@/widgets/Header";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-[#f4f7fe]">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
