// src/components/Router.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TeamInfo } from "./TeamInfo";
import { School } from "./School";
import { Review } from "./Review";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TeamInfo />} />
        <Route path="/school" element={<School />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
};