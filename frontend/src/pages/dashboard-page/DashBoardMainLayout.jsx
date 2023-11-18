import SideBar from "../../components/dashboard/SideBar";
import Navbar from "../../components/dashboard/Navbar";
import { Outlet } from "react-router-dom";

const DashBoardMainLayout = () => {
  return (
    <>
      <div className="bg-[#2FC8B0] bg-opacity-40 w-full h-screen">
        <Navbar />
        <SideBar />

        <div className="">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashBoardMainLayout;
