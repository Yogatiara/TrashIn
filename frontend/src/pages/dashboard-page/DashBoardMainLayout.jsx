import SideBar from "../../components/dashboard/SideBar";
import Navbar from "../../components/dashboard/Navbar";
import { Outlet } from "react-router-dom";

const DashBoardMainLayout = () => {
  return (
    <div className="bg-[#2FC8B0] bg-fixed min-h-screen">
      <Navbar />
      <SideBar />
      <div className="ml-64 pt-[140px] p-7 z-0">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardMainLayout;
