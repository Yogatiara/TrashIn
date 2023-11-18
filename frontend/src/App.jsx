import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import ListUser from "./components/dashboard/ListUser";
import ListEvent from "./components/Dashboard/ListEvent";
import ListTps from "./components/Dashboard/ListTps";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/list-user" element={<ListUser />} />
          <Route path="/dashboard/list-tps" element={<ListTps />} />
          <Route path="/dashboard/list-event" element={<ListEvent />} />
          <Route path="/login-admin" element={<Login />} />
        </Routes>
      </BrowserRouter>    
    </>
    
  );
};

export default App;
