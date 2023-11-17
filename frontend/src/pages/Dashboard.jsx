import {Routes , Route} from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import ListUser from "../components/dashboard/ListUser";

const Dashboard = () => {
    return ( 
        <div className="bg-[#2FC8B0] h-8">
            <Sidebar />
            <div className="flex flex-col mx-auto w-full p-10 h-[1300px]">
                <Routes>
                    <Route path="/list-user" element={<ListUser />} />
                </Routes>
            </div>
        </div>  
     );
}
 
export default Dashboard;