// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { Navbar } from "../components/Navbar";

// import Home from "../Pages/Home";
// import LiveScoresPage from "../Pages/LiveScoresPage";
// import LatestSportNewsDetails from "../Pages/LatestSportNewsDetails";
// import AllLatestNews from "../Pages/AllLatestNews";
// import Blogs from "../Pages/Blogs";
// import BlogDetails from "../Pages/BlogDetails";
// import Footer from "../components/Footer";

// const AppRoutes = () => {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/live-scores" element={<LiveScoresPage />} />
//         <Route path="/news-details/:title" element={< LatestSportNewsDetails/>} />
//         <Route path="/all-latest-news" element={<AllLatestNews />} />
//         <Route path="/blogs" element={<Blogs />} />
// <Route path="/blogs/:slug" element={<BlogDetails />} />
//       </Routes>
//       <Footer/>
//     </>
//   );
// };

// export default AppRoutes;


import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";

import Home from "../Pages/Home";
import LiveScoresPage from "../Pages/LiveScoresPage";
import LatestSportNewsDetails from "../Pages/LatestSportNewsDetails";
import AllLatestNews from "../Pages/AllLatestNews";
import Blogs from "../Pages/Blogs";
import BlogDetails from "../Pages/BlogDetails";
import Footer from "../components/Footer";

// Scorecard Components Import करें
import FootballScorecard from "../Pages/FootballScorecard";     // या जहाँ भी हैं
import BasketballScorecard from "../Pages/BasketballScorecard";
import HockeyScorecard from "../Pages/HockeyScorecard";
import CricketScorecard from "../Pages/CricketScorecard";
import TennisScorecard from "../Pages/TennisScorecard";

const AppRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Existing Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/live-scores" element={<LiveScoresPage />} />
        <Route path="/news-details/:title" element={<LatestSportNewsDetails />} />
        <Route path="/all-latest-news" element={<AllLatestNews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />

        {/* === NEW: Sport-specific Scorecard Routes === */}
        <Route path="/football-scorecard/:matchId" element={<FootballScorecard />} />
        <Route path="/basketball-scorecard/:matchId" element={<BasketballScorecard />} />
        <Route path="/hockey-scorecard/:matchId" element={<HockeyScorecard />} />
        <Route path="/cricket-scorecard/:matchId" element={<CricketScorecard />} />
        <Route path="/tennis-scorecard/:matchId" element={<TennisScorecard />} />

        {/* Optional: Generic fallback अगर कोई और sport आए */}
        {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
      </Routes>

      <Footer />
    </>
  );
};

export default AppRoutes;