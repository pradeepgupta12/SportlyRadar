// // src/Modules/Cricket/CricketLeagues.jsx
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Trophy,
//   Calendar,
//   MapPin,
//   Users,
//   TrendingUp,
//   Clock,
//   ChevronRight,
// } from 'lucide-react';
// import { cricketLeaguesData } from '../../data/cricketLeagues.js';

// // Mock data imports (replace with your actual data files)
// import TopStories from '../../data/TopStories.js';     // Assuming same structure as LiveScores
// import LatestNews from '../../data/LatestNews.js';     // Assuming same structure

// export default function CricketLeagues() {
//   const [leagues, setLeagues] = useState([]);
//   const [filteredLeagues, setFilteredLeagues] = useState([]);
//   const [statusFilter, setStatusFilter] = useState('All');
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();

//   useEffect(() => {
//     setTimeout(() => {
//       setLeagues(cricketLeaguesData.leagues || []);
//       setFilteredLeagues(cricketLeaguesData.leagues || []);
//       setLoading(false);
//     }, 500);
//   }, []);

//   useEffect(() => {
//     if (statusFilter === 'All') {
//       setFilteredLeagues(leagues);
//     } else {
//       setFilteredLeagues(leagues.filter((league) => league.status === statusFilter));
//     }
//   }, [statusFilter, leagues]);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Ongoing':
//         return 'bg-green-100 text-green-800 border-green-200';
//       case 'Upcoming':
//         return 'bg-blue-100 text-blue-800 border-blue-200';
//       case 'Completed':
//         return 'bg-gray-100 text-gray-800 border-gray-200';
//       default:
//         return 'bg-gray-100 text-gray-800 border-gray-200';
//     }
//   };

//   // Navigation Handlers (same as LiveScores)
//   const handleStoryClick = (id) => {
//     navigate(`/details/cricket/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
//           <div className="text-center">
//             <Trophy className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 text-yellow-300" />
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
//               Cricket Leagues
//             </h1>
//             <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
//               Follow the world's most exciting cricket leagues with live scores, standings, and statistics
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//         {/* Filter Section */}
//         <div className="mb-8 bg-white rounded-xl shadow-md p-4 sm:p-6">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//             <h2 className="text-lg sm:text-xl font-bold text-gray-900">Browse Leagues</h2>
//             <div className="flex flex-wrap gap-2">
//               {['All', 'Ongoing', 'Upcoming', 'Completed'].map((status) => (
//                 <button
//                   key={status}
//                   onClick={() => setStatusFilter(status)}
//                   className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//                     statusFilter === status
//                       ? 'bg-blue-600 text-white shadow-md'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   {status}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
//           {/* Main Content: Leagues Grid */}
//           <div className="lg:col-span-8 space-y-8">
//             {/* League Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
//               {filteredLeagues.map((league) => (
//                 <div
//                   key={league.id}
//                   onClick={() => navigate(`/leagues/${league.id}`)}
//                   className="group cursor-pointer h-full"
//                 >
//                   <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border-2 border-transparent hover:border-blue-500 transform hover:-translate-y-1 flex flex-col">
//                     {/* Header */}
//                     <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white">
//                       <div className="absolute top-4 right-4">
//                         <span
//                           className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(league.status)} bg-white`}
//                         >
//                           {league.status}
//                         </span>
//                       </div>
//                       <div className="flex items-center gap-4 mb-4">
//                         <img
//                           src={league.logo}
//                           alt={league.name}
//                           className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border-4 border-white/20"
//                         />
//                         <div className="flex-1 min-w-0">
//                           <h3 className="text-xl sm:text-2xl font-bold mb-1 truncate">
//                             {league.shortName || league.name}
//                           </h3>
//                           <p className="text-blue-100 text-sm truncate">{league.name}</p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className="p-6 flex flex-col flex-grow">
//                       <div className="space-y-3 mb-6 flex-grow">
//                         <div className="flex items-center gap-2 text-sm text-gray-600">
//                           <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
//                           <span className="truncate">{league.country}</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-sm text-gray-600">
//                           <Calendar className="h-4 w-4 text-blue-600 flex-shrink-0" />
//                           <span className="truncate">Season {league.season}</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-sm text-gray-600">
//                           <Users className="h-4 w-4 text-blue-600 flex-shrink-0" />
//                           <span className="truncate">{league.teams} Teams</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-sm text-gray-600">
//                           <Clock className="h-4 w-4 text-blue-600 flex-shrink-0" />
//                           <span className="truncate">{league.format} Format</span>
//                         </div>
//                       </div>

//                       {league.status === 'Ongoing' && league.totalMatches && league.completedMatches && (
//                         <div className="mb-6">
//                           <div className="flex justify-between text-sm text-gray-600 mb-2">
//                             <span>Progress</span>
//                             <span className="font-semibold">
//                               {league.completedMatches}/{league.totalMatches} Matches
//                             </span>
//                           </div>
//                           <div className="w-full bg-gray-200 rounded-full h-2">
//                             <div
//                               className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full"
//                               style={{ width: `${(league.completedMatches / league.totalMatches) * 100}%` }}
//                             />
//                           </div>
//                         </div>
//                       )}

//                       <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 mb-6 border border-yellow-200 mt-auto">
//                         <div className="flex items-start gap-3">
//                           <Trophy className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
//                           <div className="flex-1 min-w-0">
//                             <p className="text-xs text-yellow-800 font-medium mb-1">Current Champion</p>
//                             <p className="text-sm font-bold text-yellow-900 truncate">
//                               {league.currentChampion || '—'}
//                             </p>
//                           </div>
//                         </div>
//                       </div>

//                       <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 group-hover:shadow-lg transition-all">
//                         View Full Details
//                         <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {filteredLeagues.length === 0 && (
//               <div className="text-center py-16 bg-white rounded-xl shadow-md">
//                 <Trophy className="h-16 w-16 mx-auto text-gray-400 mb-4" />
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">No Leagues Found</h3>
//                 <p className="text-gray-600">Try adjusting your filters to see more leagues</p>
//               </div>
//             )}

//             {/* Stats Cards */}
//             <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               <div className="bg-white rounded-xl shadow-md p-6 text-center">
//                 <TrendingUp className="h-8 w-8 mx-auto mb-3 text-blue-600" />
//                 <p className="text-3xl font-bold text-gray-900 mb-1">{leagues.length}</p>
//                 <p className="text-sm text-gray-600">Total Leagues</p>
//               </div>
//               <div className="bg-white rounded-xl shadow-md p-6 text-center">
//                 <Clock className="h-8 w-8 mx-auto mb-3 text-green-600" />
//                 <p className="text-3xl font-bold text-gray-900 mb-1">
//                   {leagues.filter((l) => l.status === 'Ongoing').length}
//                 </p>
//                 <p className="text-sm text-gray-600">Ongoing</p>
//               </div>
//               <div className="bg-white rounded-xl shadow-md p-6 text-center">
//                 <Calendar className="h-8 w-8 mx-auto mb-3 text-blue-600" />
//                 <p className="text-3xl font-bold text-gray-900 mb-1">
//                   {leagues.filter((l) => l.status === 'Upcoming').length}
//                 </p>
//                 <p className="text-sm text-gray-600">Upcoming</p>
//               </div>
//               <div className="bg-white rounded-xl shadow-md p-6 text-center">
//                 <Trophy className="h-8 w-8 mx-auto mb-3 text-yellow-600" />
//                 <p className="text-3xl font-bold text-gray-900 mb-1">
//                   {leagues.filter((l) => l.status === 'Completed').length}
//                 </p>
//                 <p className="text-sm text-gray-600">Completed</p>
//               </div>
//             </div>
//           </div>

//           {/* Desktop Sidebar - Top Cricket Stories */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-5">Top Cricket Stories</h3>
//               <div className="space-y-4">
//                 {TopStories.data.TopStories.slice(0, 5).map((story) => (
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
//                       <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-blue-600 transition-colors">
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
//                 onClick={() => navigate('/all-top-cricket-stories')}
//                 className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile - Top Cricket Stories */}
//         <div className="lg:hidden mt-12">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Top Cricket Stories</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {TopStories.data.TopStories.slice(0, 4).map((story) => (
//                 <div
//                   key={story.id}
//                   onClick={() => handleStoryClick(story.id)}
//                   className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden bg-gray-50"
//                 >
//                   <img
//                     src={story.image || 'https://via.placeholder.com/300x180'}
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
//               onClick={() => navigate('/all-top-cricket-stories')}
//               className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//             >
//               View All Stories →
//             </button>
//           </div>
//         </div>

//         {/* Latest Sports News Section */}
//         <div className="mt-16">
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
//                 Latest Sports News
//               </h3>
//               <button
//                 onClick={() => navigate('/all-latest-news')}
//                 className="text-blue-600 hover:underline font-medium text-sm sm:text-base"
//               >
//                 View All →
//               </button>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {LatestNews.data.LatestNews.slice(0, 6).map((article) => (
//                 <div
//                   key={article.title}
//                   onClick={() => handleNewsCardClick(article.title)}
//                   className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
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
// }


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Trophy,
  Calendar,
  MapPin,
  Users,
  TrendingUp,
  Clock,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { cricketLeaguesData } from '../../data/cricketLeagues.js';

// Mock data imports (replace with your actual data files)
import TopStories from '../../data/TopStories.js';
import LatestNews from '../../data/LatestNews.js';

export default function CricketLeagues() {
  const [leagues, setLeagues] = useState([]);
  const [filteredLeagues, setFilteredLeagues] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLeagues(cricketLeaguesData.leagues || []);
      setFilteredLeagues(cricketLeaguesData.leagues || []);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (statusFilter === 'All') {
      setFilteredLeagues(leagues);
    } else {
      setFilteredLeagues(leagues.filter((league) => league.status === statusFilter));
    }
  }, [statusFilter, leagues]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ongoing':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Upcoming':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Completed':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleStoryClick = (id) => {
    navigate(`/details/cricket/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section - Same width as filters section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="flex items-center justify-center gap-4">
                <Trophy className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-yellow-300 flex-shrink-0" />
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                  Cricket Leagues
                </span>
              </span>
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl md:text-2xl opacity-95 max-w-3xl mx-auto">
              Follow the world's most exciting cricket leagues with live scores, standings, and statistics
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left: Leagues List */}
          <div className="lg:col-span-8 space-y-8">
            {/* Filters Section - SAME WIDTH as hero */}
            <div className="bg-white rounded-xl shadow-lg p-5 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 className="text-xl font-bold text-gray-900">Browse Leagues</h2>
                <div className="flex flex-wrap gap-2.5">
                  {['All', 'Ongoing', 'Upcoming', 'Completed'].map((status) => (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        statusFilter === status
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* League Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {filteredLeagues.map((league) => (
                <div
                  key={league.id}
                  onClick={() => navigate(`/leagues/${league.id}`)}
                  className="group cursor-pointer h-full"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border-2 border-transparent hover:border-blue-500 transform hover:-translate-y-1 flex flex-col">
                    {/* Header */}
                    <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white">
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                            league.status
                          )} bg-white`}
                        >
                          {league.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={league.logo}
                          alt={league.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border-4 border-white/20"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl sm:text-2xl font-bold mb-1 truncate">
                            {league.shortName || league.name}
                          </h3>
                          <p className="text-blue-100 text-sm truncate">{league.name}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="space-y-3 mb-6 flex-grow">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="truncate">{league.country}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="truncate">Season {league.season}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="truncate">{league.teams} Teams</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="truncate">{league.format} Format</span>
                        </div>
                      </div>

                      {league.status === 'Ongoing' && league.totalMatches && league.completedMatches && (
                        <div className="mb-6">
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Progress</span>
                            <span className="font-semibold">
                              {league.completedMatches}/{league.totalMatches} Matches
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full"
                              style={{ width: `${(league.completedMatches / league.totalMatches) * 100}%` }}
                            />
                          </div>
                        </div>
                      )}

                      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 mb-6 border border-yellow-200 mt-auto">
                        <div className="flex items-start gap-3">
                          <Trophy className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-yellow-800 font-medium mb-1">Current Champion</p>
                            <p className="text-sm font-bold text-yellow-900 truncate">
                              {league.currentChampion || '—'}
                            </p>
                          </div>
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 group-hover:shadow-lg transition-all">
                        View Full Details
                        <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredLeagues.length === 0 && (
              <div className="text-center py-16 bg-white rounded-xl shadow-md">
                <Trophy className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Leagues Found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more leagues</p>
              </div>
            )}

            {/* Stats Cards - Below League Cards */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                <p className="text-3xl font-bold text-gray-900 mb-1">{leagues.length}</p>
                <p className="text-sm text-gray-600">Total Leagues</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-3 text-green-600" />
                <p className="text-3xl font-bold text-gray-900 mb-1">
                  {leagues.filter((l) => l.status === 'Ongoing').length}
                </p>
                <p className="text-sm text-gray-600">Ongoing</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                <p className="text-3xl font-bold text-gray-900 mb-1">
                  {leagues.filter((l) => l.status === 'Upcoming').length}
                </p>
                <p className="text-sm text-gray-600">Upcoming</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <Trophy className="h-8 w-8 mx-auto mb-3 text-yellow-600" />
                <p className="text-3xl font-bold text-gray-900 mb-1">
                  {leagues.filter((l) => l.status === 'Completed').length}
                </p>
                <p className="text-sm text-gray-600">Completed</p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Top Cricket Stories */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                <div className="w-2 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                Top Cricket Stories
              </h3>
              <div className="space-y-4">
                {TopStories.data.TopStories.slice(0, 5).map((story) => (
                  <div
                    key={story.id}
                    onClick={() => handleStoryClick(story.id)}
                    className="flex gap-3 cursor-pointer group hover:bg-gray-50 rounded-lg p-3 -mx-3 transition-all duration-200 hover:scale-[1.02]"
                  >
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <img
                          src={story.image || 'https://via.placeholder.com/100'}
                          alt={story.title}
                          className="w-20 h-20 object-cover rounded-lg group-hover:brightness-110 transition-all"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-blue-600 transition-colors">
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
                onClick={() => navigate('/all-top-cricket-stories')}
                className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm py-2 hover:bg-blue-50 rounded-lg transition-colors"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>

        {/* Mobile - Top Cricket Stories (Only shown on mobile) */}
        <div className="lg:hidden mt-12">
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Cricket Stories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TopStories.data.TopStories.slice(0, 4).map((story) => (
                <div
                  key={story.id}
                  onClick={() => handleStoryClick(story.id)}
                  className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden bg-gray-50"
                >
                  <img
                    src={story.image || 'https://via.placeholder.com/300x180'}
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
              onClick={() => navigate('/all-top-cricket-stories')}
              className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
            >
              View All Stories →
            </button>
          </div>
        </div>

        {/* Latest Sports News Section */}
        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Latest Sports News
              </h3>
              <button
                onClick={() => navigate('/all-latest-news')}
                className="text-blue-600 hover:underline font-medium text-sm sm:text-base"
              >
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LatestNews.data.LatestNews.slice(0, 6).map((article) => (
                <div
                  key={article.title}
                  onClick={() => handleNewsCardClick(article.title)}
                  className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
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
}