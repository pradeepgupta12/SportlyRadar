

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { TrendingUp, DollarSign, Calendar, ArrowRight, Search, Filter, Clock } from 'lucide-react';
// import TopFootballStories from '../../data/TopFootballStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { footballTransfers, topTransfers } from '../../data/FootballTransfersData.js';

// const FootballTransfers = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('latest');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedLeague, setSelectedLeague] = useState('all');

//   const leagues = ['all', 'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1', 'Saudi Pro League'];

//   const getStatusColor = (status) => {
//     const colors = {
//       'Completed': 'bg-green-100 text-green-700',
//       'In Progress': 'bg-yellow-100 text-yellow-700',
//       'Rumor': 'bg-blue-100 text-blue-700'
//     };
//     return colors[status] || 'bg-gray-100 text-gray-700';
//   };

//   const filteredTransfers = footballTransfers.filter(transfer => {
//     const matchesSearch = transfer.player.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          transfer.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          transfer.to.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesLeague = selectedLeague === 'all' || 
//                          transfer.fromLeague === selectedLeague || 
//                          transfer.toLeague === selectedLeague;
//     const matchesTab = activeTab === 'latest' || 
//                       (activeTab === 'completed' && transfer.status === 'Completed') ||
//                       (activeTab === 'rumors' && transfer.status === 'Rumor');
//     return matchesSearch && matchesLeague && matchesTab;
//   });

//   const handleStoryClick = (id) => {
//     navigate(`/details/football/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Main Content (Left) */}
//           <div className="lg:col-span-8 space-y-6">

//             {/* Header */}
//             <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 rounded-xl shadow-xl">
//               <div className="max-w-7xl mx-auto px-4">
//                 <h1 className="text-5xl font-bold mb-3">💰 Transfer News</h1>
//                 <p className="text-purple-100 text-lg">Latest football transfer updates and rumors</p>
//               </div>
//             </div>

//             {/* Filters */}
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <div className="flex flex-col md:flex-row gap-4 mb-4">
//                 <div className="flex-1 relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="text"
//                     placeholder="Search players or clubs..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
//                   />
//                 </div>
//                 <select
//                   value={selectedLeague}
//                   onChange={(e) => setSelectedLeague(e.target.value)}
//                   className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
//                 >
//                   {leagues.map(league => (
//                     <option key={league} value={league}>
//                       {league === 'all' ? 'All Leagues' : league}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="flex gap-2 overflow-x-auto">
//                 {['latest', 'completed', 'rumors'].map(tab => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap ${
//                       activeTab === tab
//                         ? 'bg-purple-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Transfers List */}
//             <div className="space-y-4">
//               {filteredTransfers.map(transfer => (
//                 <Link
//                   key={transfer.id}
//                   to={`/football/transfer/${transfer.id}`}
//                   className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
//                 >
//                   <div className="p-6">
//                     {/* Header */}
//                     <div className="flex items-start justify-between mb-4">
//                       <div className="flex items-center gap-3">
//                         <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
//                           {transfer.player.charAt(0)}
//                         </div>
//                         <div>
//                           <h3 className="text-xl font-bold text-gray-800">{transfer.player}</h3>
//                           <p className="text-sm text-gray-500">{transfer.position} • {transfer.age} years</p>
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(transfer.status)}`}>
//                           {transfer.status}
//                         </span>
//                         {transfer.breaking && (
//                           <span className="block mt-1 text-xs text-red-600 font-bold">🔥 BREAKING</span>
//                         )}
//                       </div>
//                     </div>

//                     {/* Transfer Route */}
//                     <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 mb-4">
//                       <div className="flex items-center justify-between">
//                         <div className="flex-1">
//                           <div className="flex items-center gap-2 mb-1">
//                             <span className="text-2xl">{transfer.fromLogo}</span>
//                             <span className="font-semibold text-gray-800">{transfer.from}</span>
//                           </div>
//                           <p className="text-xs text-gray-500">{transfer.fromLeague}</p>
//                         </div>
                        
//                         <div className="px-4">
//                           <ArrowRight className="w-6 h-6 text-purple-600" />
//                         </div>
                        
//                         <div className="flex-1 text-right">
//                           <div className="flex items-center justify-end gap-2 mb-1">
//                             <span className="font-semibold text-gray-800">{transfer.to}</span>
//                             <span className="text-2xl">{transfer.toLogo}</span>
//                           </div>
//                           <p className="text-xs text-gray-500">{transfer.toLeague}</p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Transfer Details */}
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                       <div className="bg-gray-50 rounded-lg p-3">
//                         <p className="text-xs text-gray-500 mb-1">Transfer Fee</p>
//                         <p className="font-bold text-purple-600">{transfer.fee}</p>
//                       </div>
//                       <div className="bg-gray-50 rounded-lg p-3">
//                         <p className="text-xs text-gray-500 mb-1">Contract</p>
//                         <p className="font-bold text-gray-800">{transfer.contractLength}</p>
//                       </div>
//                       <div className="bg-gray-50 rounded-lg p-3">
//                         <p className="text-xs text-gray-500 mb-1">Wage</p>
//                         <p className="font-bold text-gray-800">{transfer.wage}</p>
//                       </div>
//                       <div className="bg-gray-50 rounded-lg p-3">
//                         <p className="text-xs text-gray-500 mb-1">Date</p>
//                         <p className="font-bold text-gray-800">{new Date(transfer.date).toLocaleDateString()}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               ))}

//               {filteredTransfers.length === 0 && (
//                 <div className="bg-white rounded-xl shadow-lg p-12 text-center">
//                   <p className="text-gray-500 text-lg">No transfers found</p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Right Sidebar (Desktop Only) */}
//           <div className="hidden lg:block lg:col-span-4 space-y-6">
//             {/* Top Transfers */}
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
//                 <TrendingUp className="text-purple-600" />
//                 Top Transfers 2026
//               </h3>
//               <div className="space-y-3">
//                 {topTransfers.map((transfer, index) => (
//                   <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
//                     <span className="text-2xl">{transfer.logo}</span>
//                     <div className="flex-1">
//                       <p className="font-semibold text-sm text-gray-800">{transfer.player}</p>
//                       <p className="text-xs text-gray-500">{transfer.from} → {transfer.to}</p>
//                     </div>
//                     <span className="font-bold text-purple-600 text-sm">{transfer.fee}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Transfer Window Info */}
//             <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl shadow-lg p-6">
//               <h3 className="text-xl font-bold mb-4">Transfer Window</h3>
//               <div className="space-y-3">
//                 <div className="flex items-center justify-between">
//                   <span className="text-purple-100">Status:</span>
//                   <span className="font-bold">Open</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-purple-100">Closes:</span>
//                   <span className="font-bold">Jan 31, 2026</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-purple-100">Days Left:</span>
//                   <span className="font-bold">24 Days</span>
//                 </div>
//               </div>
//               <div className="mt-4 w-full bg-purple-400 rounded-full h-2">
//                 <div className="bg-white h-2 rounded-full" style={{width: '80%'}}></div>
//               </div>
//             </div>

//             {/* Top Football Stories Sidebar */}
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
//                       <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-purple-600 transition-colors">
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
//                 className="mt-6 w-full text-center text-purple-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile: Top Transfers + Transfer Window + Top Stories */}
//       <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8 space-y-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Top Transfers */}
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
//               <TrendingUp className="text-purple-600" />
//               Top Transfers 2026
//             </h3>
//             <div className="space-y-3">
//               {topTransfers.map((transfer, index) => (
//                 <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
//                   <span className="text-2xl">{transfer.logo}</span>
//                   <div className="flex-1">
//                     <p className="font-semibold text-sm text-gray-800">{transfer.player}</p>
//                     <p className="text-xs text-gray-500">{transfer.from} → {transfer.to}</p>
//                   </div>
//                   <span className="font-bold text-purple-600 text-sm">{transfer.fee}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Transfer Window Info */}
//           <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl shadow-lg p-6">
//             <h3 className="text-xl font-bold mb-4">Transfer Window</h3>
//             <div className="space-y-3">
//               <div className="flex items-center justify-between">
//                 <span className="text-purple-100">Status:</span>
//                 <span className="font-bold">Open</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-purple-100">Closes:</span>
//                 <span className="font-bold">Jan 31, 2026</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-purple-100">Days Left:</span>
//                 <span className="font-bold">24 Days</span>
//               </div>
//             </div>
//             <div className="mt-4 w-full bg-purple-400 rounded-full h-2">
//               <div className="bg-white h-2 rounded-full" style={{width: '80%'}}></div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Top Football Stories */}
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
//               className="mt-4 w-full text-center text-purple-600 font-medium hover:underline text-sm"
//             >
//               View All Stories →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Latest Sports News - Full Width Bottom Section */}
//       <div className="mt-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
//                 Latest Sports News
//               </h3>
//               <button
//                 onClick={() => navigate('/all-latest-news')}
//                 className="text-purple-600 hover:underline font-medium text-sm sm:text-base"
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

// export default FootballTransfers;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TrendingUp, DollarSign, Calendar, ArrowRight, Search, Filter, Clock } from 'lucide-react';
import TopFootballStories from '../../data/TopFootballStories.js';
import LatestNews from '../../data/LatestNews.js';
import { footballTransfers, topTransfers } from '../../data/FootballTransfersData.js';

const FootballTransfers = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLeague, setSelectedLeague] = useState('all');

  const leagues = ['all', 'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1', 'Saudi Pro League'];

  const getStatusColor = (status) => {
    const colors = {
      'Completed': 'bg-green-100 text-green-700',
      'In Progress': 'bg-yellow-100 text-yellow-700',
      'Rumor': 'bg-blue-100 text-blue-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const filteredTransfers = footballTransfers.filter(transfer => {
    const matchesSearch = transfer.player.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         transfer.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         transfer.to.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLeague = selectedLeague === 'all' || 
                         transfer.fromLeague === selectedLeague || 
                         transfer.toLeague === selectedLeague;
    const matchesTab = activeTab === 'latest' || 
                      (activeTab === 'completed' && transfer.status === 'Completed') ||
                      (activeTab === 'rumors' && transfer.status === 'Rumor');
    return matchesSearch && matchesLeague && matchesTab;
  });

  const handleStoryClick = (id) => {
    navigate(`/details/football/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Main Content (Left) */}
          <div className="lg:col-span-8 space-y-6">

            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 rounded-xl shadow-xl">
              <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-5xl font-bold mb-3">💰 Transfer News</h1>
                <p className="text-purple-100 text-lg">Latest football transfer updates and rumors</p>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search players or clubs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <select
                  value={selectedLeague}
                  onChange={(e) => setSelectedLeague(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  {leagues.map(league => (
                    <option key={league} value={league}>
                      {league === 'all' ? 'All Leagues' : league}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-2 overflow-x-auto">
                {['latest', 'completed', 'rumors'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap ${
                      activeTab === tab
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Transfers List */}
            <div className="space-y-4">
              {filteredTransfers.map(transfer => (
                <Link
                  key={transfer.id}
                  to={`/football/transfer/${transfer.id}`}
                  className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={transfer.playerImage}
                          alt={transfer.player}
                          className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
                          onError={(e) => { e.target.src = 'https://via.placeholder.com/48?text=' + transfer.player.charAt(0); }}
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{transfer.player}</h3>
                          <p className="text-sm text-gray-500">{transfer.position} • {transfer.age} years</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(transfer.status)}`}>
                          {transfer.status}
                        </span>
                        {transfer.breaking && (
                          <span className="block mt-1 text-xs text-red-600 font-bold">🔥 BREAKING</span>
                        )}
                      </div>
                    </div>

                    {/* Transfer Route */}
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <img
                              src={transfer.fromLogo}
                              alt={transfer.from}
                              className="w-10 h-10 object-contain"
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            <span className="font-semibold text-gray-800">{transfer.from}</span>
                          </div>
                          <p className="text-xs text-gray-500">{transfer.fromLeague}</p>
                        </div>
                        
                        <div className="px-4">
                          <ArrowRight className="w-6 h-6 text-purple-600" />
                        </div>
                        
                        <div className="flex-1 text-right">
                          <div className="flex items-center justify-end gap-3 mb-1">
                            <span className="font-semibold text-gray-800">{transfer.to}</span>
                            <img
                              src={transfer.toLogo}
                              alt={transfer.to}
                              className="w-10 h-10 object-contain"
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          </div>
                          <p className="text-xs text-gray-500">{transfer.toLeague}</p>
                        </div>
                      </div>
                    </div>

                    {/* Transfer Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Transfer Fee</p>
                        <p className="font-bold text-purple-600">{transfer.fee}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Contract</p>
                        <p className="font-bold text-gray-800">{transfer.contractLength}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Wage</p>
                        <p className="font-bold text-gray-800">{transfer.wage}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Date</p>
                        <p className="font-bold text-gray-800">{new Date(transfer.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              {filteredTransfers.length === 0 && (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <p className="text-gray-500 text-lg">No transfers found</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-4 space-y-6">
            {/* Top Transfers */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="text-purple-600" />
                Top Transfers 2026
              </h3>
              <div className="space-y-3">
                {topTransfers.map((transfer, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                    <img
                      src={transfer.logo}
                      alt={transfer.to}
                      className="w-10 h-10 object-contain"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-gray-800">{transfer.player}</p>
                      <p className="text-xs text-gray-500">{transfer.from} → {transfer.to}</p>
                    </div>
                    <span className="font-bold text-purple-600 text-sm">{transfer.fee}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transfer Window Info */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Transfer Window</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-purple-100">Status:</span>
                  <span className="font-bold">Open</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-100">Closes:</span>
                  <span className="font-bold">Jan 31, 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-100">Days Left:</span>
                  <span className="font-bold">24 Days</span>
                </div>
              </div>
              <div className="mt-4 w-full bg-purple-400 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{width: '80%'}}></div>
              </div>
            </div>

            {/* Top Football Stories Sidebar */}
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
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-purple-600 transition-colors">
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
                className="mt-6 w-full text-center text-purple-600 font-medium hover:underline text-sm"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Top Transfers + Transfer Window + Top Stories */}
      <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top Transfers */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="text-purple-600" />
              Top Transfers 2026
            </h3>
            <div className="space-y-3">
              {topTransfers.map((transfer, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                  <img
                    src={transfer.logo}
                    alt={transfer.to}
                    className="w-10 h-10 object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-gray-800">{transfer.player}</p>
                    <p className="text-xs text-gray-500">{transfer.from} → {transfer.to}</p>
                  </div>
                  <span className="font-bold text-purple-600 text-sm">{transfer.fee}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transfer Window Info */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Transfer Window</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-purple-100">Status:</span>
                <span className="font-bold">Open</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-purple-100">Closes:</span>
                <span className="font-bold">Jan 31, 2026</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-purple-100">Days Left:</span>
                <span className="font-bold">24 Days</span>
              </div>
            </div>
            <div className="mt-4 w-full bg-purple-400 rounded-full h-2">
              <div className="bg-white h-2 rounded-full" style={{width: '80%'}}></div>
            </div>
          </div>
        </div>

        {/* Mobile Top Football Stories */}
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
              className="mt-4 w-full text-center text-purple-600 font-medium hover:underline text-sm"
            >
              View All Stories →
            </button>
          </div>
        </div>
      </div>

      {/* Latest Sports News - Full Width Bottom Section */}
      <div className="mt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Latest Sports News
              </h3>
              <button
                onClick={() => navigate('/all-latest-news')}
                className="text-purple-600 hover:underline font-medium text-sm sm:text-base"
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

export default FootballTransfers;