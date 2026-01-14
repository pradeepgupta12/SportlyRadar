


// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { Navbar } from "../components/Navbar";
// import Footer from "../components/Footer";
// import ScrollToTop from "../components/ScrollToTop"; // ← Added this import

// // === General Pages ===
// import Home from "../Pages/Home";
// import LatestSportNewsDetails from "../Pages/LatestSportNewsDetails";
// import AllLatestNews from "../Pages/AllLatestNews";
// import Blogs from "../Pages/Blogs";
// import BlogDetails from "../Pages/BlogDetails";

// // === Scorecard Pages ===
// import FootballScorecard from "../Pages/FootballScorecard";
// import BasketballScorecard from "../Pages/BasketballScorecard";
// import HockeyScorecard from "../Pages/HockeyScorecard";
// import CricketScorecard from "../Pages/CricketScorecard";
// import TennisScorecard from "../Pages/TennisScorecard";

// // === Cricket Pages ===
// import LiveScores from "../Modules/Cricket/LiveScores";
// import ICCRankings from "../Modules/Cricket/ICCRankings";
// import Schedule from "../Modules/Cricket/Schedule";
// import ScheduleMatchDetail from "../Modules/Cricket/ScheduleMatchDetail";
// import ICCMenWorld from "../Modules/Cricket/ICCMenWorld";
// import ICCMenDetailPage from "../Modules/Cricket/ICCMenDetailPage";
// import Series from "../Modules/Cricket/Series";
// import SeriesDetail from "../Modules/Cricket/SeriesDetail";

// // === Football Pages ===
// import FootballLiveScores from "../Modules/Football/LiveScores";
// import FootballLeagues from "../Modules/Football/Leagues";
// import FootballLeagueDetail from "../Modules/Football/LeagueDetail";
// import FootballTransfers from "../Modules/Football/Transfers";
// import FootballStats from "../Modules/Football/Stats";
// import FootballTopScorers from "../Modules/Football/TopScorers";
// import FootballRankings from "../Modules/Football/Rankings";
// import FootballSchedule from "../Modules/Football/Schedule";
// import FootballPlayerDetail from "../Modules/Football/PlayerDetail";
// import FootballTeamDetail from "../Modules/Football/TeamDetail";
// import FootballTransferDetail from "../Modules/Football/TransferDetail";

// // === Tennis Pages ===
// import TennisLiveScores from "../Modules/Tennis/LiveScores";
// import TennisGrandSlams from "../Modules/Tennis/GrandSlams";
// import TennisGrandSlamDetail from "../Modules/Tennis/GrandSlamDetail";
// import TennisRankings from "../Modules/Tennis/Rankings";
// import TennisTours from "../Modules/Tennis/Tours";
// import TennisTourDetail from "../Modules/Tennis/TourDetail";
// import TennisMatchDetail from "../Modules/Tennis/MatchDetail";

// // === Hockey Pages ===
// import HockeyLiveScores from "../Modules/Hockey/LiveScores";
// import HockeyLeagues from "../Modules/Hockey/Leagues";
// import HockeyStats from "../Modules/Hockey/Stats";
// import HockeyTopScorers from "../Modules/Hockey/TopScorers";
// import HockeyRankings from "../Modules/Hockey/Rankings";
// import HockeySchedule from "../Modules/Hockey/Schedule";
// import HockeyLeagueDetail from "../Modules/Hockey/LeagueDetail";

// // === Basketball Pages ===
// import BasketballLiveScores from "../Modules/Basketball/LiveScores";
// import BasketballLeagues from "../Modules/Basketball/Leagues";
// import BasketballLeagueDetail from "../Modules/Basketball/LeagueDetail";
// import BasketballStats from "../Modules/Basketball/Stats";
// import BasketballSchedule from "../Modules/Basketball/Schedule";

// import AboutUs from "../Pages/AboutUs";
// import AllTopCricketStories from "../Pages/AllTopCricketStories";
// import CricketStoryDetail from "../Pages/CricketStoryDetail";
// import AllTopFootballStories from "../Pages/AllTopFootballStories";
// import FootballStoryDetails from "../Pages/FootballStoryDetails";
// import AllTopTennisStories from "../Pages/AllTopTennisStories";
// import TennisStoryDetails from "../Pages/TennisStoryDetails";
// import AllTopBasketballStories from "../Pages/AllTopBasketballStories";
// import BasketballStoryDetails from "../Pages/BasketballStoryDetails";
// import AllTopHockeyStories from "../Pages/AllTopHockeyStories";
// import HockeyStoryDetails from "../Pages/HockeyStoryDetails";
// import CricketLeagues from "../Modules/Cricket/CricketLeagues";
// import LeagueDetail from "../Modules/Cricket/LeagueDetail";
// import ContactUs from "../Pages/ContactUs";

// const AppRoutes = () => {
//   return (
//     <>
//       <Navbar />

//       <ScrollToTop />  {/* ← This ensures every navigation scrolls to top */}

//       <Routes>
//         {/* ========== HOME & GENERAL ROUTES ========== */}
//         <Route path="/" element={<Home />} />
//         <Route path="/news-details/:title" element={<LatestSportNewsDetails />} />
//         <Route path="/all-latest-news" element={<AllLatestNews />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/blog" element={<Blogs />} />
//         <Route path="/blogs/:slug" element={<BlogDetails />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/contact-us" element={<ContactUs />} />

//         {/* ========== CRICKET SECTION ROUTES ========== */}
//         <Route path="/cricket/live" element={<LiveScores />} />
//         <Route path="/cricket/series" element={<Series />} />
//         <Route path="/cricket/series/:slug" element={<SeriesDetail />} />
//         <Route path="/cricket/rankings" element={<ICCRankings />} />
//         <Route path="/cricket/schedule" element={<Schedule />} />
//         <Route path="/cricket/leagues" element={<CricketLeagues />} />
//         <Route path="/leagues/:leagueId" element={<LeagueDetail />} />
//         <Route path="/leagues" element={<CricketLeagues />} />
//         <Route path="/cricket/match/:matchId" element={<ScheduleMatchDetail />} />
//         <Route path="/cricket/series/icc-mens-t20-world-cup-2026" element={<ICCMenWorld />} />
//         <Route path="/cricket/series/icc-mens-t20-world-cup-2026/match/:matchId" element={<ICCMenDetailPage />} />

//         {/* ========== FOOTBALL SECTION ROUTES ========== */}
//         <Route path="/football/live" element={<FootballLiveScores />} />
//         <Route path="/football/leagues" element={<FootballLeagues />} />
//         <Route path="/football/league/:leagueId" element={<FootballLeagueDetail />} />
//         <Route path="/football/transfers" element={<FootballTransfers />} />
//         <Route path="/football/transfer/:transferId" element={<FootballTransferDetail />} />
//         <Route path="/football/stats" element={<FootballStats />} />
//         <Route path="/football/scorers" element={<FootballTopScorers />} />
//         <Route path="/football/rankings" element={<FootballRankings />} />
//         <Route path="/football/schedule" element={<FootballSchedule />} />
//         <Route path="/football/player/:playerId" element={<FootballPlayerDetail />} />
//         <Route path="/football/team/:teamId" element={<FootballTeamDetail />} />

//         {/* ========== TENNIS SECTION ROUTES ========== */}
//         <Route path="/tennis/live" element={<TennisLiveScores />} />
//         <Route path="/tennis/match/:matchId" element={<TennisMatchDetail />} />
//         <Route path="/tennis/grandslams" element={<TennisGrandSlams />} />
//         <Route path="/tennis/grandslam/:slamId" element={<TennisGrandSlamDetail />} />
//         <Route path="/tennis/rankings" element={<TennisRankings />} />
//         <Route path="/tennis/tours" element={<TennisTours />} />
//         <Route path="/tennis/tour/:tourId" element={<TennisTourDetail />} />

//         {/* ========== HOCKEY SECTION ROUTES ========== */}
//         <Route path="/hockey/live" element={<HockeyLiveScores />} />
//         <Route path="/hockey/leagues" element={<HockeyLeagues />} />
//         <Route path="/hockey/stats" element={<HockeyStats />} />
//         <Route path="/hockey/scorers" element={<HockeyTopScorers />} />
//         <Route path="/hockey/rankings" element={<HockeyRankings />} />
//         <Route path="/hockey/schedule" element={<HockeySchedule />} />
//         <Route path="/hockey/scorecard/:matchId" element={<HockeyScorecard />} />
//         <Route path="/hockey/league/:leagueId" element={<HockeyLeagueDetail />} />

//         {/* ========== BASKETBALL SECTION ROUTES ========== */}
//         <Route path="/basketball/live" element={<BasketballLiveScores />} />
//         <Route path="/basketball/leagues" element={<BasketballLeagues />} />
//         <Route path="/basketball/league/:leagueId" element={<BasketballLeagueDetail />} />
//         <Route path="/basketball/stats" element={<BasketballStats />} />
//         <Route path="/basketball/schedule" element={<BasketballSchedule />} />

//         {/* ========== SCORECARD ROUTES ========== */}
//         <Route path="/cricket-scorecard/:matchId" element={<CricketScorecard />} />
//         <Route path="/football-scorecard/:matchId" element={<FootballScorecard />} />
//         <Route path="/basketball-scorecard/:matchId" element={<BasketballScorecard />} />
//         <Route path="/hockey-scorecard/:matchId" element={<HockeyScorecard />} />
//         <Route path="/tennis-scorecard/:matchId" element={<TennisScorecard />} />

//         <Route path="/all-top-cricket-stories" element={<AllTopCricketStories />} />
//         <Route path="/details/cricket/:id" element={<CricketStoryDetail />} />

//         <Route path="/all-top-football-stories" element={<AllTopFootballStories />} />
//         <Route path="/details/football/:id" element={<FootballStoryDetails />} />

//         <Route path="/all-top-tennis-stories" element={<AllTopTennisStories />} />
//         <Route path="/details/tennis/:id" element={<TennisStoryDetails />} />

//         <Route path="/all-top-basketball-stories" element={<AllTopBasketballStories />} />
//         <Route path="/details/basketball/:id" element={<BasketballStoryDetails />} />

//         <Route path="/all-top-hockey-stories" element={<AllTopHockeyStories />} />
//         <Route path="/details/hockey/:id" element={<HockeyStoryDetails />} />

//         {/* ========== 404 PAGE ========== */}
//         <Route path="*" element={
//           <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
//             <div className="text-center">
//               <h1 className="text-9xl font-bold text-gray-300">404</h1>
//               <p className="text-2xl text-gray-600 mb-4">Page Not Found</p>
//               <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
//                 Go Home
//               </a>
//             </div>
//           </div>
//         } />
//       </Routes>

//       <Footer />
//     </>
//   );
// };

// export default AppRoutes;


// src/AppRoutes.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import {Navbar} from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

// === General Pages (Lazy Loaded) ===
const Home = lazy(() => import("../Pages/Home"));
const LatestSportNewsDetails = lazy(() => import("../Pages/LatestSportNewsDetails"));
const AllLatestNews = lazy(() => import("../Pages/AllLatestNews"));
const Blogs = lazy(() => import("../Pages/Blogs"));
const BlogDetails = lazy(() => import("../Pages/BlogDetails"));
const AboutUs = lazy(() => import("../Pages/AboutUs"));
const ContactUs = lazy(() => import("../Pages/ContactUs"));

// === Scorecard Pages ===
const FootballScorecard = lazy(() => import("../Pages/FootballScorecard"));
const BasketballScorecard = lazy(() => import("../Pages/BasketballScorecard"));
const HockeyScorecard = lazy(() => import("../Pages/HockeyScorecard"));
const CricketScorecard = lazy(() => import("../Pages/CricketScorecard"));
const TennisScorecard = lazy(() => import("../Pages/TennisScorecard"));

// === Cricket Pages ===
const LiveScores = lazy(() => import("../Modules/Cricket/LiveScores"));
const ICCRankings = lazy(() => import("../Modules/Cricket/ICCRankings"));
const Schedule = lazy(() => import("../Modules/Cricket/Schedule"));
const ScheduleMatchDetail = lazy(() => import("../Modules/Cricket/ScheduleMatchDetail"));
const ICCMenWorld = lazy(() => import("../Modules/Cricket/ICCMenWorld"));
const ICCMenDetailPage = lazy(() => import("../Modules/Cricket/ICCMenDetailPage"));
const Series = lazy(() => import("../Modules/Cricket/Series"));
const SeriesDetail = lazy(() => import("../Modules/Cricket/SeriesDetail"));
const CricketLeagues = lazy(() => import("../Modules/Cricket/CricketLeagues"));
const LeagueDetail = lazy(() => import("../Modules/Cricket/LeagueDetail"));

// === Football Pages ===
const FootballLiveScores = lazy(() => import("../Modules/Football/LiveScores"));
const FootballLeagues = lazy(() => import("../Modules/Football/Leagues"));
const FootballLeagueDetail = lazy(() => import("../Modules/Football/LeagueDetail"));
const FootballTransfers = lazy(() => import("../Modules/Football/Transfers"));
const FootballStats = lazy(() => import("../Modules/Football/Stats"));
const FootballTopScorers = lazy(() => import("../Modules/Football/TopScorers"));
const FootballRankings = lazy(() => import("../Modules/Football/Rankings"));
const FootballSchedule = lazy(() => import("../Modules/Football/Schedule"));
const FootballPlayerDetail = lazy(() => import("../Modules/Football/PlayerDetail"));
const FootballTeamDetail = lazy(() => import("../Modules/Football/TeamDetail"));
const FootballTransferDetail = lazy(() => import("../Modules/Football/TransferDetail"));

// === Tennis Pages ===
const TennisLiveScores = lazy(() => import("../Modules/Tennis/LiveScores"));
const TennisGrandSlams = lazy(() => import("../Modules/Tennis/GrandSlams"));
const TennisGrandSlamDetail = lazy(() => import("../Modules/Tennis/GrandSlamDetail"));
const TennisRankings = lazy(() => import("../Modules/Tennis/Rankings"));
const TennisTours = lazy(() => import("../Modules/Tennis/Tours"));
const TennisTourDetail = lazy(() => import("../Modules/Tennis/TourDetail"));
const TennisMatchDetail = lazy(() => import("../Modules/Tennis/MatchDetail"));

// === Hockey Pages ===
const HockeyLiveScores = lazy(() => import("../Modules/Hockey/LiveScores"));
const HockeyLeagues = lazy(() => import("../Modules/Hockey/Leagues"));
const HockeyStats = lazy(() => import("../Modules/Hockey/Stats"));
const HockeyTopScorers = lazy(() => import("../Modules/Hockey/TopScorers"));
const HockeyRankings = lazy(() => import("../Modules/Hockey/Rankings"));
const HockeySchedule = lazy(() => import("../Modules/Hockey/Schedule"));
const HockeyLeagueDetail = lazy(() => import("../Modules/Hockey/LeagueDetail"));

// === Basketball Pages ===
const BasketballLiveScores = lazy(() => import("../Modules/Basketball/LiveScores"));
const BasketballLeagues = lazy(() => import("../Modules/Basketball/Leagues"));
const BasketballLeagueDetail = lazy(() => import("../Modules/Basketball/LeagueDetail"));
const BasketballStats = lazy(() => import("../Modules/Basketball/Stats"));
const BasketballSchedule = lazy(() => import("../Modules/Basketball/Schedule"));

// === Stories Pages ===
const AllTopCricketStories = lazy(() => import("../Pages/AllTopCricketStories"));
const CricketStoryDetail = lazy(() => import("../Pages/CricketStoryDetail"));
const AllTopFootballStories = lazy(() => import("../Pages/AllTopFootballStories"));
const FootballStoryDetails = lazy(() => import("../Pages/FootballStoryDetails"));
const AllTopTennisStories = lazy(() => import("../Pages/AllTopTennisStories"));
const TennisStoryDetails = lazy(() => import("../Pages/TennisStoryDetails"));
const AllTopBasketballStories = lazy(() => import("../Pages/AllTopBasketballStories"));
const BasketballStoryDetails = lazy(() => import("../Pages/BasketballStoryDetails"));
const AllTopHockeyStories = lazy(() => import("../Pages/AllTopHockeyStories"));
const HockeyStoryDetails = lazy(() => import("../Pages/HockeyStoryDetails"));

// Loading fallback (shown while page is loading)
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
  </div>
);

const AppRoutes = () => {
  return (
    <>
      <Navbar />

      <ScrollToTop />

      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* ========== HOME & GENERAL ROUTES ========== */}
          <Route path="/" element={<Home />} />
          <Route path="/news-details/:title" element={<LatestSportNewsDetails />} />
          <Route path="/all-latest-news" element={<AllLatestNews />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* ========== CRICKET SECTION ROUTES ========== */}
          <Route path="/cricket/live" element={<LiveScores />} />
          <Route path="/cricket/series" element={<Series />} />
          <Route path="/cricket/series/:slug" element={<SeriesDetail />} />
          <Route path="/cricket/rankings" element={<ICCRankings />} />
          <Route path="/cricket/schedule" element={<Schedule />} />
          <Route path="/cricket/leagues" element={<CricketLeagues />} />
          <Route path="/leagues/:leagueId" element={<LeagueDetail />} />
          <Route path="/leagues" element={<CricketLeagues />} />
          <Route path="/cricket/match/:matchId" element={<ScheduleMatchDetail />} />
          <Route path="/cricket/series/icc-mens-t20-world-cup-2026" element={<ICCMenWorld />} />
          <Route path="/cricket/series/icc-mens-t20-world-cup-2026/match/:matchId" element={<ICCMenDetailPage />} />

          {/* ========== FOOTBALL SECTION ROUTES ========== */}
          <Route path="/football/live" element={<FootballLiveScores />} />
          <Route path="/football/leagues" element={<FootballLeagues />} />
          <Route path="/football/league/:leagueId" element={<FootballLeagueDetail />} />
          <Route path="/football/transfers" element={<FootballTransfers />} />
          <Route path="/football/transfer/:transferId" element={<FootballTransferDetail />} />
          <Route path="/football/stats" element={<FootballStats />} />
          <Route path="/football/scorers" element={<FootballTopScorers />} />
          <Route path="/football/rankings" element={<FootballRankings />} />
          <Route path="/football/schedule" element={<FootballSchedule />} />
          <Route path="/football/player/:playerId" element={<FootballPlayerDetail />} />
          <Route path="/football/team/:teamId" element={<FootballTeamDetail />} />

          {/* ========== TENNIS SECTION ROUTES ========== */}
          <Route path="/tennis/live" element={<TennisLiveScores />} />
          <Route path="/tennis/match/:matchId" element={<TennisMatchDetail />} />
          <Route path="/tennis/grandslams" element={<TennisGrandSlams />} />
          <Route path="/tennis/grandslam/:slamId" element={<TennisGrandSlamDetail />} />
          <Route path="/tennis/rankings" element={<TennisRankings />} />
          <Route path="/tennis/tours" element={<TennisTours />} />
          <Route path="/tennis/tour/:tourId" element={<TennisTourDetail />} />

          {/* ========== HOCKEY SECTION ROUTES ========== */}
          <Route path="/hockey/live" element={<HockeyLiveScores />} />
          <Route path="/hockey/leagues" element={<HockeyLeagues />} />
          <Route path="/hockey/stats" element={<HockeyStats />} />
          <Route path="/hockey/scorers" element={<HockeyTopScorers />} />
          <Route path="/hockey/rankings" element={<HockeyRankings />} />
          <Route path="/hockey/schedule" element={<HockeySchedule />} />
          <Route path="/hockey/scorecard/:matchId" element={<HockeyScorecard />} />
          <Route path="/hockey/league/:leagueId" element={<HockeyLeagueDetail />} />

          {/* ========== BASKETBALL SECTION ROUTES ========== */}
          <Route path="/basketball/live" element={<BasketballLiveScores />} />
          <Route path="/basketball/leagues" element={<BasketballLeagues />} />
          <Route path="/basketball/league/:leagueId" element={<BasketballLeagueDetail />} />
          <Route path="/basketball/stats" element={<BasketballStats />} />
          <Route path="/basketball/schedule" element={<BasketballSchedule />} />

          {/* ========== SCORECARD ROUTES ========== */}
          <Route path="/cricket-scorecard/:matchId" element={<CricketScorecard />} />
          <Route path="/football-scorecard/:matchId" element={<FootballScorecard />} />
          <Route path="/basketball-scorecard/:matchId" element={<BasketballScorecard />} />
          <Route path="/hockey-scorecard/:matchId" element={<HockeyScorecard />} />
          <Route path="/tennis-scorecard/:matchId" element={<TennisScorecard />} />

          {/* ========== STORIES ROUTES ========== */}
          <Route path="/all-top-cricket-stories" element={<AllTopCricketStories />} />
          <Route path="/details/cricket/:id" element={<CricketStoryDetail />} />

          <Route path="/all-top-football-stories" element={<AllTopFootballStories />} />
          <Route path="/details/football/:id" element={<FootballStoryDetails />} />

          <Route path="/all-top-tennis-stories" element={<AllTopTennisStories />} />
          <Route path="/details/tennis/:id" element={<TennisStoryDetails />} />

          <Route path="/all-top-basketball-stories" element={<AllTopBasketballStories />} />
          <Route path="/details/basketball/:id" element={<BasketballStoryDetails />} />

          <Route path="/all-top-hockey-stories" element={<AllTopHockeyStories />} />
          <Route path="/details/hockey/:id" element={<HockeyStoryDetails />} />

          {/* ========== 404 PAGE ========== */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="text-center px-4">
                  <h1 className="text-8xl md:text-9xl font-bold text-gray-300 mb-4">404</h1>
                  <p className="text-2xl md:text-3xl text-gray-600 mb-6">Oops! Page Not Found</p>
                  <a
                    href="/"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Go Back Home
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default AppRoutes;