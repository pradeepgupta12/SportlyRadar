


import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

// === General Pages ===
import Home from "../Pages/Home";
import LatestSportNewsDetails from "../Pages/LatestSportNewsDetails";
import AllLatestNews from "../Pages/AllLatestNews";
import Blogs from "../Pages/Blogs";
import BlogDetails from "../Pages/BlogDetails";

// === Scorecard Pages ===
import FootballScorecard from "../Pages/FootballScorecard";
import BasketballScorecard from "../Pages/BasketballScorecard";
import HockeyScorecard from "../Pages/HockeyScorecard";
import CricketScorecard from "../Pages/CricketScorecard";
import TennisScorecard from "../Pages/TennisScorecard";

// === Cricket Pages - Capital C folder ===
import LiveScores from "../Modules/Cricket/LiveScores";
import ICCRankings from "../Modules/Cricket/ICCRankings";
import Schedule from "../Modules/Cricket/Schedule";
import Leagues from "../Modules/Cricket/Leagues";
import SeriesTournaments from "../Modules/Cricket/SeriesTournaments";
import ScheduleMatchDetail from "../Modules/Cricket/ScheduleMatchDetail";


const AppRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home & General Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/news-details/:title" element={<LatestSportNewsDetails />} />
        <Route path="/all-latest-news" element={<AllLatestNews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />

        {/* === Cricket Section Routes === */}
        <Route path="/cricket/live" element={<LiveScores />} />
        <Route path="/cricket/series" element={<SeriesTournaments />} />
        <Route path="/cricket/rankings" element={<ICCRankings />} />
        <Route path="/cricket/schedule" element={<Schedule />} />
        <Route path="/cricket/leagues" element={<Leagues />} />

        {/* === Scorecard Routes === */}
        <Route path="/cricket-scorecard/:matchId" element={<CricketScorecard />} />
        <Route path="/football-scorecard/:matchId" element={<FootballScorecard />} />
        <Route path="/basketball-scorecard/:matchId" element={<BasketballScorecard />} />
        <Route path="/hockey-scorecard/:matchId" element={<HockeyScorecard />} />
        <Route path="/tennis-scorecard/:matchId" element={<TennisScorecard />} />
        <Route path="/cricket/match/:matchId" element={<ScheduleMatchDetail />} />
 
       

        {/* Optional: 404 Page (अगर चाहें तो uncomment करें) */}
        {/* <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-3xl font-bold">404 - Page Not Found</div>} /> */}
      </Routes>

      <Footer />
    </>
  );
};

export default AppRoutes;