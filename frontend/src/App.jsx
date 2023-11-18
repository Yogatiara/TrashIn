import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashBoardMainLayout from "./pages/dashboard-page/DashBoardMainLayout";
import "./App.css";
import Home from "./pages/dashboard-page/Home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/dashboard" element={<DashBoardMainLayout />}>
            <Route index={true} element={<Home />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
