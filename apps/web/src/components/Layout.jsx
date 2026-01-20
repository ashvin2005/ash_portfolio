import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => (
  <div className="relative min-h-screen bg-background">
    <div className="geometric-bg">
      <div className="geo-triangle-1"></div>
      <div className="geo-triangle-2"></div>
      <div className="geo-triangle-3"></div>
    </div>
    <div className="geometric-bg-right">
      <div className="geo-right-1"></div>
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 py-5 md:py-8">
      <div className="md:hidden"><Sidebar /></div>

      <Header />

      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <div className="hidden md:block"><Sidebar /></div>
        <main className="flex-1 min-w-0"><Outlet /></main>
      </div>

      <div className="flex items-center justify-center mt-8 text-[11px]">
        <span className="animate-pulse ..."></span>
        ALL SYSTEMS OPERATIONAL · STATUS · UPTIME
      </div>
    </div>
  </div>
);