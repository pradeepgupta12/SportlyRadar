


// import React, { useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { 
//   Trophy, 
//   Target, 
//   Calendar, 
//   Award, 
//   ArrowRight, 
//   FileText, 
//   DollarSign, 
//   CheckCircle, 
//   Users, 
//   TrendingUp 
// } from 'lucide-react';
// import TopFootballStories from '../../data/TopFootballStories.js';
// import LatestNews from '../../data/LatestNews.js';
// import { footballTransferDetails } from '../../data/FootballTransferDetail.js';

// const FootballTransferDetail = () => {
//   const { transferId } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('standings');

//   // Data ab external file se aa raha hai
//   const transfer = footballTransferDetails[transferId] || footballTransferDetails["1"];

//   const getFormColor = (result) => {
//     const colors = { 'W': 'bg-green-500', 'D': 'bg-yellow-500', 'L': 'bg-red-500' };
//     return colors[result] || 'bg-gray-500';
//   };

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

//           {/* Left/Main Content */}
//           <div className="lg:col-span-8 space-y-6">

//             {/* Super Compact Hero Section */}
//             <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8 rounded-xl shadow-xl">
//               <div className="max-w-7xl mx-auto px-4">
//                 <div className="flex items-center justify-center gap-4 mb-3">
//                   <img 
//                     src={transfer.from.country} 
//                     alt="From country flag" 
//                     className="w-12 h-8 object-cover rounded shadow-sm" 
//                     onError={(e) => { e.target.src = 'https://via.placeholder.com/48x32?text=Flag'; }}
//                   />
//                   <ArrowRight className="w-10 h-10 animate-pulse" />
//                   <img 
//                     src={transfer.to.country} 
//                     alt="To country flag" 
//                     className="w-12 h-8 object-cover rounded shadow-sm" 
//                     onError={(e) => { e.target.src = 'https://via.placeholder.com/48x32?text=Flag'; }}
//                   />
//                 </div>

//                 <div className="text-center">
//                   <h1 className="text-3xl md:text-4xl font-bold mb-1">{transfer.player.name}</h1>
//                   <p className="text-purple-100 text-base mb-3">
//                     {transfer.from.team} → {transfer.to.team}
//                   </p>

//                   <div className="bg-white text-gray-800 rounded-lg inline-block px-6 py-4 shadow-lg">
//                     <p className="text-xs text-gray-600 mb-1">Transfer Fee</p>
//                     <p className="text-3xl font-bold text-purple-600">{transfer.transfer.fee}</p>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-6 text-center text-sm">
//                   <div className="bg-white/20 backdrop-blur rounded-lg py-2">
//                     <p className="text-xl font-bold">{transfer.from.goals}G + {transfer.from.assists}A</p>
//                     <p className="text-xs text-purple-100">Stats at {transfer.from.team}</p>
//                   </div>
//                   <div className="bg-white/20 backdrop-blur rounded-lg py-2">
//                     <p className="text-xl font-bold">#{transfer.to.shirtNumber}</p>
//                     <p className="text-xs text-purple-100">Shirt Number</p>
//                   </div>
//                   <div className="bg-white/20 backdrop-blur rounded-lg py-2">
//                     <p className="text-xl font-bold">{transfer.transfer.contractLength}</p>
//                     <p className="text-xs text-purple-100">Contract</p>
//                   </div>
//                   <div className="bg-white/20 backdrop-blur rounded-lg py-2 hidden md:block">
//                     <p className="text-xl font-bold">{transfer.transfer.weeklyWage}</p>
//                     <p className="text-xs text-purple-100">Weekly Wage</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="max-w-7xl mx-auto px-4 py-8">
//               {/* Contract & Stats */}
//               <div className="grid md:grid-cols-2 gap-5 mb-8">
//                 <div className="bg-white rounded-xl shadow-md p-5">
//                   <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
//                     <FileText className="w-5 h-5 text-purple-600" />
//                     Contract Details
//                   </h3>
//                   <div className="space-y-2 text-sm">
//                     <div className="flex justify-between"><span className="text-gray-600">Length:</span><span className="font-semibold">{transfer.transfer.contractLength}</span></div>
//                     <div className="flex justify-between"><span className="text-gray-600">Annual Wage:</span><span className="font-semibold text-green-600">{transfer.transfer.annualWage}</span></div>
//                     <div className="flex justify-between"><span className="text-gray-600">Announced:</span><span className="font-semibold">{new Date(transfer.transfer.date).toLocaleDateString()}</span></div>
//                   </div>
//                 </div>

//                 <div className="bg-white rounded-xl shadow-md p-5">
//                   <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
//                     <DollarSign className="w-5 h-5 text-green-600" />
//                     Transfer Info
//                   </h3>
//                   <div className="space-y-2 text-sm">
//                     <div className="flex justify-between"><span className="text-gray-600">Type:</span><span className="font-semibold">{transfer.transfer.type}</span></div>
//                     <div className="flex justify-between"><span className="text-gray-600">Status:</span><span className="font-semibold text-green-600">{transfer.transfer.status}</span></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Timeline */}
//               <div className="bg-white rounded-xl shadow-md p-5 mb-8">
//                 <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
//                   <Calendar className="w-5 h-5 text-blue-600" />
//                   Timeline
//                 </h3>
//                 <div className="grid md:grid-cols-2 gap-3">
//                   {transfer.timeline.map((item, idx) => (
//                     <div key={idx} className="flex items-center gap-3">
//                       <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
//                         <CheckCircle className="w-4 h-4 text-white" />
//                       </div>
//                       <div>
//                         <p className="text-sm font-medium">{item.event}</p>
//                         <p className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Impact */}
//               <div className="grid md:grid-cols-3 gap-4 mb-8">
//                 <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4">
//                   <Trophy className="w-6 h-6 mb-2" />
//                   <h4 className="font-bold text-sm mb-1">Player Motivation</h4>
//                   <p className="text-xs text-blue-100">{transfer.impact.playerMotivation}</p>
//                 </div>
//                 <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-4">
//                   <Users className="w-6 h-6 mb-2" />
//                   <h4 className="font-bold text-sm mb-1">Club Strategy</h4>
//                   <p className="text-xs text-purple-100">{transfer.impact.clubReason}</p>
//                 </div>
//                 <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl p-4">
//                   <TrendingUp className="w-6 h-6 mb-2" />
//                   <h4 className="font-bold text-sm mb-1">Market Impact</h4>
//                   <p className="text-xs text-pink-100">{transfer.impact.marketImpact}</p>
//                 </div>
//               </div>

//               {/* Comparisons */}
//               <div className="bg-white rounded-xl shadow-md p-5">
//                 <h3 className="text-lg font-bold mb-3">Similar Transfers</h3>
//                 <div className="grid md:grid-cols-3 gap-3">
//                   {transfer.comparisons.map((comp, idx) => (
//                     <div key={idx} className="bg-gray-50 rounded-lg p-3 text-center">
//                       <p className="font-bold text-sm text-gray-800">{comp.player}</p>
//                       <p className="text-xs text-gray-500">{comp.year}</p>
//                       <p className="text-xl font-bold text-purple-600 mt-1">{comp.fee}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Sidebar - Desktop Only */}
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
//               className="mt-4 w-full text-center text-purple-600 font-medium hover:underline text-sm"
//             >
//               View All Stories →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Latest Sports News */}
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

// export default FootballTransferDetail;


import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Trophy, 
  Target, 
  Calendar, 
  Award, 
  ArrowRight, 
  FileText, 
  DollarSign, 
  CheckCircle, 
  Users, 
  TrendingUp 
} from 'lucide-react';
import TopFootballStories from '../../data/TopFootballStories.js';
import LatestNews from '../../data/LatestNews.js';
import { footballTransferDetails } from '../../data/FootballTransferDetail.js';
import SEO from '../../components/SEO.jsx';

const FootballTransferDetail = () => {
  const { transferId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('standings');

  // Data ab external file se aa raha hai
  const transfer = footballTransferDetails[transferId] || footballTransferDetails["1"];

  const getFormColor = (result) => {
    const colors = { 'W': 'bg-green-500', 'D': 'bg-yellow-500', 'L': 'bg-red-500' };
    return colors[result] || 'bg-gray-500';
  };

  const handleStoryClick = (id) => {
    navigate(`/details/football/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  // SEO data
  const seoTitle = `${transfer.player.name} Transfer - ${transfer.from.team} to ${transfer.to.team} | SportlyRadar`;
  const seoDescription = `Complete details of ${transfer.player.name}'s transfer from ${transfer.from.team} to ${transfer.to.team} for ${transfer.transfer.fee}. Includes contract details, timeline, market impact, and similar transfers.`;
  const seoKeywords = `${transfer.player.name} transfer, ${transfer.from.team} to ${transfer.to.team}, football transfer news, transfer fee, contract details, player transfer, soccer transfer`;
  const currentUrl = window.location.href;
  const transferImage = transfer.player.image || "https://via.placeholder.com/800x400?text=Football+Transfer";

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        url={currentUrl}
        canonical={currentUrl}
        image={transferImage}
        type="article"
        publishedTime={new Date(transfer.transfer.date).toISOString()}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
        {/* Main Grid Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

            {/* Left/Main Content */}
            <div className="lg:col-span-8 space-y-6">

              {/* Super Compact Hero Section */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8 rounded-xl shadow-xl">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <img 
                      src={transfer.from.country} 
                      alt="From country flag" 
                      className="w-12 h-8 object-cover rounded shadow-sm" 
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/48x32?text=Flag'; }}
                    />
                    <ArrowRight className="w-10 h-10 animate-pulse" />
                    <img 
                      src={transfer.to.country} 
                      alt="To country flag" 
                      className="w-12 h-8 object-cover rounded shadow-sm" 
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/48x32?text=Flag'; }}
                    />
                  </div>

                  <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-1">{transfer.player.name}</h1>
                    <p className="text-purple-100 text-base mb-3">
                      {transfer.from.team} → {transfer.to.team}
                    </p>

                    <div className="bg-white text-gray-800 rounded-lg inline-block px-6 py-4 shadow-lg">
                      <p className="text-xs text-gray-600 mb-1">Transfer Fee</p>
                      <p className="text-3xl font-bold text-purple-600">{transfer.transfer.fee}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-6 text-center text-sm">
                    <div className="bg-white/20 backdrop-blur rounded-lg py-2">
                      <p className="text-xl font-bold">{transfer.from.goals}G + {transfer.from.assists}A</p>
                      <p className="text-xs text-purple-100">Stats at {transfer.from.team}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-lg py-2">
                      <p className="text-xl font-bold">#{transfer.to.shirtNumber}</p>
                      <p className="text-xs text-purple-100">Shirt Number</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-lg py-2">
                      <p className="text-xl font-bold">{transfer.transfer.contractLength}</p>
                      <p className="text-xs text-purple-100">Contract</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-lg py-2 hidden md:block">
                      <p className="text-xl font-bold">{transfer.transfer.weeklyWage}</p>
                      <p className="text-xs text-purple-100">Weekly Wage</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Contract & Stats */}
                <div className="grid md:grid-cols-2 gap-5 mb-8">
                  <div className="bg-white rounded-xl shadow-md p-5">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-purple-600" />
                      Contract Details
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-gray-600">Length:</span><span className="font-semibold">{transfer.transfer.contractLength}</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Annual Wage:</span><span className="font-semibold text-green-600">{transfer.transfer.annualWage}</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Announced:</span><span className="font-semibold">{new Date(transfer.transfer.date).toLocaleDateString()}</span></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-5">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      Transfer Info
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-gray-600">Type:</span><span className="font-semibold">{transfer.transfer.type}</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Status:</span><span className="font-semibold text-green-600">{transfer.transfer.status}</span></div>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-white rounded-xl shadow-md p-5 mb-8">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    Timeline
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {transfer.timeline.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{item.event}</p>
                          <p className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4">
                    <Trophy className="w-6 h-6 mb-2" />
                    <h4 className="font-bold text-sm mb-1">Player Motivation</h4>
                    <p className="text-xs text-blue-100">{transfer.impact.playerMotivation}</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-4">
                    <Users className="w-6 h-6 mb-2" />
                    <h4 className="font-bold text-sm mb-1">Club Strategy</h4>
                    <p className="text-xs text-purple-100">{transfer.impact.clubReason}</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl p-4">
                    <TrendingUp className="w-6 h-6 mb-2" />
                    <h4 className="font-bold text-sm mb-1">Market Impact</h4>
                    <p className="text-xs text-pink-100">{transfer.impact.marketImpact}</p>
                  </div>
                </div>

                {/* Comparisons */}
                <div className="bg-white rounded-xl shadow-md p-5">
                  <h3 className="text-lg font-bold mb-3">Similar Transfers</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {transfer.comparisons.map((comp, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-3 text-center">
                        <p className="font-bold text-sm text-gray-800">{comp.player}</p>
                        <p className="text-xs text-gray-500">{comp.year}</p>
                        <p className="text-xl font-bold text-purple-600 mt-1">{comp.fee}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Desktop Only */}
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
                className="mt-4 w-full text-center text-purple-600 font-medium hover:underline text-sm"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>

        {/* Latest Sports News */}
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
    </>
  );
};

export default FootballTransferDetail;