import SideBar from "../../components/dashboard/SideBar";
import Navbar from "../../components/dashboard/Navbar";
import { Outlet } from "react-router-dom";

const DashBoardMainLayout = () => {
  return (
    <div className="bg-[#99d3cab2]  min-h-screen  ">
      <Navbar />
      <SideBar />
      <div className="ml-64 pt-[140px] p-7 opacity- z-0">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardMainLayout;
