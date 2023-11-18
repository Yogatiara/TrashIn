import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashBoardMainLayout from "./pages/dashboard-page/DashBoardMainLayout";
import "./App.css";
import Home from "./pages/dashboard-page/Home";
import ListUser from "./pages/dashboard-page/user/ListUser";
import ListEvent from "./pages/dashboard-page/event/ListEvent";
import ListTps from "./pages/dashboard-page/tps/ListTps";
import ShowUser from "./pages/dashboard-page/user/ShowUser";
import ShowEvent from "./pages/dashboard-page/event/ShowEvent";
import ShowTps from "./pages/dashboard-page/tps/ShowTps";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/dashboard" element={<DashBoardMainLayout />}>
            <Route index={true} element={<Home />}></Route>
            <Route path="list-user">
              <Route index={true} element={<ListUser />}></Route>
              <Route path={":id"} element={<ShowUser />}></Route>
            </Route>
            <Route path="list-event">
              <Route index={true} element={<ListEvent />}></Route>
              <Route path={":id"} element={<ShowEvent />}></Route>
            </Route>
            <Route path="list-tps">
              <Route index={true} element={<ListTps />}></Route>
              <Route path={":id"} element={<ShowTps />}></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
