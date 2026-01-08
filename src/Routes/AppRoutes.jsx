



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

// === Cricket Pages ===
import LiveScores from "../Modules/Cricket/LiveScores";
import ICCRankings from "../Modules/Cricket/ICCRankings";
import Schedule from "../Modules/Cricket/Schedule";
import Leagues from "../Modules/Cricket/Leagues";
import ScheduleMatchDetail from "../Modules/Cricket/ScheduleMatchDetail";
import ICCMenWorld from "../Modules/Cricket/ICCMenWorld";
import ICCMenDetailPage from "../Modules/Cricket/ICCMenDetailPage";
import Series from "../Modules/Cricket/Series";
import SeriesDetail from "../Modules/Cricket/SeriesDetail";

// === Football Pages ===
import FootballLiveScores from "../Modules/Football/LiveScores";
import FootballLeagues from "../Modules/Football/Leagues";
import FootballLeagueDetail from "../Modules/Football/LeagueDetail";
import FootballTransfers from "../Modules/Football/Transfers";
import FootballStats from "../Modules/Football/Stats";
import FootballTopScorers from "../Modules/Football/TopScorers";
import FootballRankings from "../Modules/Football/Rankings";
import FootballSchedule from "../Modules/Football/Schedule";
import FootballPlayerDetail from "../Modules/Football/PlayerDetail";
import FootballTeamDetail from "../Modules/Football/TeamDetail";
import FootballTransferDetail from "../Modules/Football/TransferDetail";

// === Tennis Pages ===
import TennisLiveScores from "../Modules/Tennis/LiveScores";
import TennisGrandSlams from "../Modules/Tennis/GrandSlams";
import TennisGrandSlamDetail from "../Modules/Tennis/GrandSlamDetail";
import TennisRankings from "../Modules/Tennis/Rankings";
import TennisTours from "../Modules/Tennis/Tours";
import TennisTourDetail from "../Modules/Tennis/TourDetail";
import TennisMatchDetail from "../Modules/Tennis/MatchDetail";

// === Hockey Pages ===
import HockeyLiveScores from "../Modules/Hockey/LiveScores";
import HockeyLeagues from "../Modules/Hockey/Leagues";
import HockeyStats from "../Modules/Hockey/Stats";
import HockeyTopScorers from "../Modules/Hockey/TopScorers";
import HockeyRankings from "../Modules/Hockey/Rankings";
import HockeySchedule from "../Modules/Hockey/Schedule";
import HockeyLeagueDetail from "../Modules/Hockey/LeagueDetail";

// === Basketball Pages ===
import BasketballLiveScores from "../Modules/Basketball/LiveScores";
import BasketballLeagues from "../Modules/Basketball/Leagues";
import BasketballLeagueDetail from "../Modules/Basketball/LeagueDetail";
import BasketballStats from "../Modules/Basketball/Stats";
import BasketballSchedule from "../Modules/Basketball/Schedule";
import AboutUs from "../Pages/AboutUs";
import AllTopCricketStories from "../Pages/AllTopCricketStories";
import CricketStoryDetail from "../Pages/CricketStoryDetail";
import AllTopFootballStories from "../Pages/AllTopFootballStories";
import FootballStoryDetails from "../Pages/FootballStoryDetails";
import AllTopTennisStories from "../Pages/AllTopTennisStories";
import TennisStoryDetails from "../Pages/TennisStoryDetails";
import AllTopBasketballStories from "../Pages/AllTopBasketballStories";
import BasketballStoryDetails from "../Pages/BasketballStoryDetails";

const AppRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* ========== HOME & GENERAL ROUTES ========== */}
        <Route path="/" element={<Home />} />
        <Route path="/news-details/:title" element={<LatestSportNewsDetails />} />
        <Route path="/all-latest-news" element={<AllLatestNews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route path="/about" element={<AboutUs/>} />

        {/* ========== CRICKET SECTION ROUTES ========== */}
        <Route path="/cricket/live" element={<LiveScores />} />
        <Route path="/cricket/series" element={<Series />} />
        <Route path="/cricket/series/:slug" element={<SeriesDetail />} />
        <Route path="/cricket/rankings" element={<ICCRankings />} />
        <Route path="/cricket/schedule" element={<Schedule />} />
        <Route path="/cricket/leagues" element={<Leagues />} />
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

        <Route path="/all-top-cricket-stories" element={<AllTopCricketStories />} />
        <Route path="/details/cricket/:id" element={<CricketStoryDetail />} />

        <Route path="/all-top-football-stories" element={<AllTopFootballStories />} />
        <Route path="/details/football/:id" element={<FootballStoryDetails />} />

        <Route path="/all-top-tennis-stories" element={<AllTopTennisStories />} />
        <Route path="/details/tennis/:id" element={<TennisStoryDetails />} />

        <Route path="/all-top-basketball-stories" element={<AllTopBasketballStories />} />
      <Route path="/details/basketball/:id" element={<BasketballStoryDetails />} />


        {/* ========== 404 PAGE ========== */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="text-center">
              <h1 className="text-9xl font-bold text-gray-300">404</h1>
              <p className="text-2xl text-gray-600 mb-4">Page Not Found</p>
              <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Go Home
              </a>
            </div>
          </div>
        } />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRoutes;