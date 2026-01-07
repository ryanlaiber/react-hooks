import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Timer from "../views/Timer";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timer" element={<Timer />} />
    </Routes>
  );
}

export default AppRoutes;
