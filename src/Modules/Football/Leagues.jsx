


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Trophy, Users, Search, ArrowRight } from 'lucide-react';
// import TopFootballStories from '../../data/TopFootballStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { footballLeagues } from '../../data/FootballLeagueData.js';

// const FootballLeagues = () => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedContinent, setSelectedContinent] = useState('all');

//   const continents = ['all', 'Europe', 'North America', 'South America'];

//   const filteredLeagues = footballLeagues.filter(league => {
//     const matchesSearch = league.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          league.country.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesContinent = selectedContinent === 'all' || league.continent === selectedContinent;
//     return matchesSearch && matchesContinent;
//   });

//   const handleStoryClick = (id) => {
//     navigate(`/details/football/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
//           {/* Left: Leagues List */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Header */}
//             <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-10 rounded-xl shadow-xl">
//               <div className="max-w-7xl mx-auto px-4">
//                 <h1 className="text-4xl md:text-5xl font-bold mb-3">🏆 Football Leagues</h1>
//                 <p className="text-green-100 text-lg">Discover the best leagues worldwide – Season 2025/26</p>
//               </div>
//             </div>

//             {/* Filters */}
//             <div className="bg-white rounded-xl shadow-lg p-5 mb-8">
//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="flex-1 relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="text"
//                     placeholder="Search leagues or countries..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
//                   />
//                 </div>
//                 <select
//                   value={selectedContinent}
//                   onChange={(e) => setSelectedContinent(e.target.value)}
//                   className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 bg-white"
//                 >
//                   {continents.map(continent => (
//                     <option key={continent} value={continent}>
//                       {continent === 'all' ? 'All Continents' : continent}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Compact Stats Overview */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//               <div className="bg-white rounded-xl p-5 shadow text-center">
//                 <Trophy className="w-8 h-8 mx-auto mb-2 text-green-600" />
//                 <p className="text-2xl font-bold">{filteredLeagues.length}</p>
//                 <p className="text-sm text-gray-600">Leagues</p>
//               </div>
//               <div className="bg-white rounded-xl p-5 shadow text-center">
//                 <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
//                 <p className="text-2xl font-bold">{filteredLeagues.reduce((acc, l) => acc + l.teams, 0)}</p>
//                 <p className="text-sm text-gray-600">Total Teams</p>
//               </div>
//             </div>

//             {/* League Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
//               {filteredLeagues.map(league => (
//                 <Link
//                   key={league.id}
//                   to={`/football/league/${league.id}`}
//                   className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
//                 >
//                   {/* Fixed Height Green Header */}
//                   <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-6 flex items-center justify-between min-h-[120px]">
//                     <div className="flex items-center gap-4">
//                       <img
//                         src={league.logo}
//                         alt={`${league.name} logo`}
//                         className="w-16 h-16 object-contain"
//                         onError={(e) => { e.target.src = 'https://via.placeholder.com/64?text=⚽'; }}
//                       />
//                       <div>
//                         <h3 className="text-lg font-bold leading-tight">{league.name}</h3>
//                         <p className="text-sm text-green-100 opacity-90">{league.country}</p>
//                       </div>
//                     </div>
//                     {/* Removed the duplicate logo span that was using emoji */}
//                   </div>

//                   {/* Body */}
//                   <div className="p-6 flex flex-col flex-1">
//                     <p className="text-sm text-gray-600 mb-5 line-clamp-2">{league.description}</p>

//                     <div className="grid grid-cols-2 gap-4 mb-5">
//                       <div className="bg-gray-50 rounded-xl px-4 py-3 text-center">
//                         <p className="text-xs text-gray-500">Season</p>
//                         <p className="font-semibold text-sm">{league.season}</p>
//                       </div>
//                       <div className="bg-gray-50 rounded-xl px-4 py-3 text-center">
//                         <p className="text-xs text-gray-500">Teams</p>
//                         <p className="font-semibold text-sm">{league.teams}</p>
//                       </div>
//                     </div>

//                     <div className="space-y-3 text-sm mb-7">
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Top Scorer</span>
//                         <span className="font-medium truncate max-w-[160px] text-right">{league.topScorer}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Leading Team</span>
//                         <span className="font-medium truncate max-w-[160px] text-right">{league.topTeam}</span>
//                       </div>
//                     </div>

//                     <button className="mt-auto w-full bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 transition group-hover:gap-3">
//                       View Details
//                       <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//                     </button>
//                   </div>
//                 </Link>
//               ))}
//             </div>

//             {filteredLeagues.length === 0 && (
//               <div className="bg-white rounded-xl shadow-lg p-12 text-center">
//                 <p className="text-gray-500 text-lg">No leagues found</p>
//                 <p className="text-gray-400 text-sm mt-2">Try adjusting your filters</p>
//               </div>
//             )}
//           </div>

//           {/* Right Sidebar: Top Football Stories (Desktop only) */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-5">Top Football Stories</h3>
//               <div className="space-y-4">
//                 {TopFootballStories.data.TopFootballStories.slice(0, 5).map((story) => (
//                   <div
//                     key={story.id}
//                     onClick={() => handleStoryClick(story.id)}
//                     className="flex gap-3 cursor-pointer group hover:bg-gray-50 rounded-lg p-3 -mx-3 transition-colors"
//                   >
//                     <div className="flex-shrink-0">
//                       <img
//                         src={story.image || 'https://via.placeholder.com/100'}
//                         alt={story.title}
//                         className="w-20 h-20 object-cover rounded-lg"
//                       />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-green-600 transition-colors">
//                         {story.title}
//                       </h4>
//                       <p className="text-xs text-gray-500 mt-1">
//                         {new Date(story.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <button
//                 onClick={() => navigate('/all-top-football-stories')}
//                 className="mt-6 w-full text-center text-green-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Top Football Stories */}
//       <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Top Football Stories</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {TopFootballStories.data.TopFootballStories.slice(0, 4).map((story) => (
//                 <div
//                   key={story.id}
//                   onClick={() => handleStoryClick(story.id)}
//                   className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
//                 >
//                   <img
//                     src={story.image || 'https://via.placeholder.com/300'}
//                     alt={story.title}
//                     className="w-full h-40 object-cover"
//                   />
//                   <div className="p-3">
//                     <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
//                       {story.title}
//                     </h4>
//                     <p className="text-xs text-gray-500 mt-1">
//                       {new Date(story.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button
//               onClick={() => navigate('/all-top-football-stories')}
//               className="mt-4 w-full text-center text-green-600 font-medium hover:underline text-sm"
//             >
//               View All Stories →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Latest Sports News Section */}
//       <div className="mt-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
//                 Latest Sports News
//               </h3>
//               <button
//                 onClick={() => navigate('/all-latest-news')}
//                 className="text-green-600 hover:underline font-medium text-sm sm:text-base"
//               >
//                 View All →
//               </button>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {LatestNews.data.LatestNews.slice(0, 6).map((article) => (
//                 <div
//                   key={article.title}
//                   onClick={() => handleNewsCardClick(article.title)}
//                   className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
//                 >
//                   <img
//                     src={article.image || "https://via.placeholder.com/400x250"}
//                     alt={article.title}
//                     className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="p-4">
//                     <h4 className="text-base font-semibold text-gray-800 line-clamp-2 mb-2">
//                       {article.title}
//                     </h4>
//                     <p className="text-sm text-gray-600 line-clamp-2 mb-3">
//                       {article.description}
//                     </p>
//                     <div className="flex justify-between text-xs text-gray-500">
//                       <span>Source: {article.source}</span>
//                       <span>
//                         {new Date(article.published).toLocaleDateString('en-US', {
//                           month: 'short',
//                           day: '2-digit',
//                           year: 'numeric',
//                         })}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FootballLeagues;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trophy, Users, Search, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO.jsx';
import TopFootballStories from '../../data/TopFootballStories.js';
import LatestNews from '../../data/LatestNews.js';
import { footballLeagues } from '../../data/FootballLeagueData.js';

const FootballLeagues = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('all');

  const continents = ['all', 'Europe', 'North America', 'South America'];

  const filteredLeagues = footballLeagues.filter(league => {
    const matchesSearch = league.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         league.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesContinent = selectedContinent === 'all' || league.continent === selectedContinent;
    return matchesSearch && matchesContinent;
  });

  const handleStoryClick = (id) => {
    navigate(`/details/football/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  // SEO meta data
  const seoTitle = "Football Leagues Worldwide | Top Professional Leagues | SportlyRadar";
  const seoDescription = "Explore all major football leagues including Premier League, La Liga, Bundesliga, Serie A, Ligue 1, MLS, and more. Get league details, teams, and statistics.";
  const seoKeywords = "football leagues, Premier League, La Liga, Bundesliga, Serie A, Ligue 1, MLS, football, soccer leagues, professional football";
  const seoImage = "https://sportlyradar.com/football-leagues-og-image.jpg";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* SEO Component */}
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        image={seoImage}
        url={window.location.href}
        type="website"
      />

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left: Leagues List */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-10 rounded-xl shadow-xl">
              <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-3">🏆 Football Leagues</h1>
                <p className="text-green-100 text-lg">Discover the best leagues worldwide – Season 2025/26</p>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl shadow-lg p-5 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search leagues or countries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <select
                  value={selectedContinent}
                  onChange={(e) => setSelectedContinent(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 bg-white"
                >
                  {continents.map(continent => (
                    <option key={continent} value={continent}>
                      {continent === 'all' ? 'All Continents' : continent}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Compact Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-xl p-5 shadow text-center">
                <Trophy className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="text-2xl font-bold">{filteredLeagues.length}</p>
                <p className="text-sm text-gray-600">Leagues</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-2xl font-bold">{filteredLeagues.reduce((acc, l) => acc + l.teams, 0)}</p>
                <p className="text-sm text-gray-600">Total Teams</p>
              </div>
            </div>

            {/* League Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {filteredLeagues.map(league => (
                <Link
                  key={league.id}
                  to={`/football/league/${league.id}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
                >
                  {/* Fixed Height Green Header */}
                  <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-6 flex items-center justify-between min-h-[120px]">
                    <div className="flex items-center gap-4">
                      <img
                        src={league.logo}
                        alt={`${league.name} logo`}
                        className="w-16 h-16 object-contain"
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/64?text=⚽'; }}
                      />
                      <div>
                        <h3 className="text-lg font-bold leading-tight">{league.name}</h3>
                        <p className="text-sm text-green-100 opacity-90">{league.country}</p>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-sm text-gray-600 mb-5 line-clamp-2">{league.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-5">
                      <div className="bg-gray-50 rounded-xl px-4 py-3 text-center">
                        <p className="text-xs text-gray-500">Season</p>
                        <p className="font-semibold text-sm">{league.season}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl px-4 py-3 text-center">
                        <p className="text-xs text-gray-500">Teams</p>
                        <p className="font-semibold text-sm">{league.teams}</p>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm mb-7">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Top Scorer</span>
                        <span className="font-medium truncate max-w-[160px] text-right">{league.topScorer}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Leading Team</span>
                        <span className="font-medium truncate max-w-[160px] text-right">{league.topTeam}</span>
                      </div>
                    </div>

                    <button className="mt-auto w-full bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 transition group-hover:gap-3">
                      View Details
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </Link>
              ))}
            </div>

            {filteredLeagues.length === 0 && (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <p className="text-gray-500 text-lg">No leagues found</p>
                <p className="text-gray-400 text-sm mt-2">Try adjusting your filters</p>
              </div>
            )}
          </div>

          {/* Right Sidebar: Top Football Stories (Desktop only) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Top Football Stories</h3>
              <div className="space-y-4">
                {TopFootballStories.data.TopFootballStories.slice(0, 5).map((story) => (
                  <div
                    key={story.id}
                    onClick={() => handleStoryClick(story.id)}
                    className="flex gap-3 cursor-pointer group hover:bg-gray-50 rounded-lg p-3 -mx-3 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={story.image || 'https://via.placeholder.com/100'}
                        alt={story.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-green-600 transition-colors">
                        {story.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(story.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/all-top-football-stories')}
                className="mt-6 w-full text-center text-green-600 font-medium hover:underline text-sm"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Top Football Stories */}
      <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Football Stories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TopFootballStories.data.TopFootballStories.slice(0, 4).map((story) => (
                <div
                  key={story.id}
                  onClick={() => handleStoryClick(story.id)}
                  className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
                >
                  <img
                    src={story.image || 'https://via.placeholder.com/300'}
                    alt={story.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3">
                    <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                      {story.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(story.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('/all-top-football-stories')}
              className="mt-4 w-full text-center text-green-600 font-medium hover:underline text-sm"
            >
              View All Stories →
            </button>
          </div>
        </div>
      </div>

      {/* Latest Sports News Section */}
      <div className="mt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Latest Sports News
              </h3>
              <button
                onClick={() => navigate('/all-latest-news')}
                className="text-green-600 hover:underline font-medium text-sm sm:text-base"
              >
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LatestNews.data.LatestNews.slice(0, 6).map((article) => (
                <div
                  key={article.title}
                  onClick={() => handleNewsCardClick(article.title)}
                  className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <img
                    src={article.image || "https://via.placeholder.com/400x250"}
                    alt={article.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h4 className="text-base font-semibold text-gray-800 line-clamp-2 mb-2">
                      {article.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {article.description}
                    </p>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Source: {article.source}</span>
                      <span>
                        {new Date(article.published).toLocaleDateString('en-US', {
                          month: 'short',
                          day: '2-digit',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootballLeagues;