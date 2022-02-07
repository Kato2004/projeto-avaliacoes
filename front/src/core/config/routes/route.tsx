import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../../../pages/home";
import { Assessments } from "../../../pages/assessments";
import { PageNotExists } from "../../../pages/erro404";

export const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avaliacoes" element={<Assessments />} />
        <Route path="/*" element={<PageNotExists />} />
      </Routes>
    </Router>
  );
};
