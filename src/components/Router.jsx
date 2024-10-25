// src/components/Router.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TeamInfo } from "./steps/Team/TeamInfo";
import { School } from "./steps/School/School";
import { Review } from "./steps/Review/Review";
import { Teachers} from "./steps/Teacher/Teachers.jsx";
import { Pupil } from "./steps/Pupil/Pupil.jsx"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TeamInfo />} />
        <Route path="/school" element={<School />} />
        <Route path="/teacher" element={<Teachers />} />
        <Route path="/pupil" element={<Pupil />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
};