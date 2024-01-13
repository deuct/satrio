//import react router dom
import { Routes, Route } from "react-router-dom";

import Dashboard from "../views/dashboard.jsx";
import Pembiayaan from "../views/pages/pembiayaan.jsx";

function RoutesIndex() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pembiayaan" element={<Pembiayaan />} />
    </Routes>
  );
}

export default RoutesIndex;
