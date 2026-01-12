// import React, { useState } from 'react';
// import { Calendar, MapPin, Clock } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Schedule = () => {
//   const [selectedLeague, setSelectedLeague] = useState('nba');

//   const scheduleData = {
//     nba: [
//       {
//         date: '2026-01-04',
//         matches: [
//           {
//             id: 'nba-1',
//             time: '19:00',
//             home: 'Boston Celtics',
//             away: 'Milwaukee Bucks',
//             venue: 'TD Garden',
//             city: 'Boston'
//           },
//           {
//             id: 'nba-2',
//             time: '20:30',
//             home: 'LA Lakers',
//             away: 'Golden State Warriors',
//             venue: 'Crypto.com Arena',
//             city: 'Los Angeles'
//           },
//           {
//             id: 'nba-3',
//             time: '19:30',
//             home: 'Miami Heat',
//             away: 'Philadelphia 76ers',
//             venue: 'Kaseya Center',
//             city: 'Miami'
//           }
//         ]
//       },
//       {
//         date: '2026-01-05',
//         matches: [
//           {
//             id: 'nba-4',
//             time: '18:00',
//             home: 'Denver Nuggets',
//             away: 'Phoenix Suns',
//             venue: 'Ball Arena',
//             city: 'Denver'
//           },
//           {
//             id: 'nba-5',
//             time: '19:00',
//             home: 'Dallas Mavericks',
//             away: 'Oklahoma City Thunder',
//             venue: 'American Airlines Center',
//             city: 'Dallas'
//           }
//         ]
//       },
//       {
//         date: '2026-01-06',
//         matches: [
//           {
//             id: 'nba-6',
//             time: '19:30',
//             home: 'Brooklyn Nets',
//             away: 'Cleveland Cavaliers',
//             venue: 'Barclays Center',
//             city: 'Brooklyn'
//           },
//           {
//             id: 'nba-7',
//             time: '20:00',
//             home: 'Portland Trail Blazers',
//             away: 'Sacramento Kings',
//             venue: 'Moda Center',
//             city: 'Portland'
//           }
//         ]
//       }
//     ],
//     wnba: [
//       {
//         date: '2025-06-13',
//         matches: [
//           {
//             id: 'wnba-1',
//             time: '19:00',
//             home: 'New York Liberty',
//             away: 'Chicago Sky',
//             venue: 'Barclays Center',
//             city: 'Brooklyn'
//           },
//           {
//             id: 'wnba-2',
//             time: '21:00',
//             home: 'Las Vegas Aces',
//             away: 'Phoenix Mercury',
//             venue: 'Michelob ULTRA Arena',
//             city: 'Las Vegas'
//           }
//         ]
//       },
//       {
//         date: '2025-06-14',
//         matches: [
//           {
//             id: 'wnba-3',
//             time: '19:00',
//             home: 'Connecticut Sun',
//             away: 'Indiana Fever',
//             venue: 'Mohegan Sun Arena',
//             city: 'Uncasville'
//           },
//           {
//             id: 'wnba-4',
//             time: '20:00',
//             home: 'Seattle Storm',
//             away: 'Minnesota Lynx',
//             venue: 'Climate Pledge Arena',
//             city: 'Seattle'
//           }
//         ]
//       }
//     ]
//   };

//   const schedule = scheduleData[selectedLeague];

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-3xl md:text-5xl font-bold mb-3">Match Schedule</h1>
//           <p className="text-lg text-orange-100">Upcoming basketball games and fixtures</p>
//         </div>
//       </div>

//       {/* League Selector */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="flex gap-4 mb-8">
//           <button
//             onClick={() => setSelectedLeague('nba')}
//             className={`px-6 py-3 rounded-lg font-semibold transition-all ${
//               selectedLeague === 'nba'
//                 ? 'bg-orange-600 text-white shadow-lg'
//                 : 'bg-white text-gray-700 hover:bg-orange-50'
//             }`}
//           >
//             NBA
//           </button>
//           <button
//             onClick={() => setSelectedLeague('wnba')}
//             className={`px-6 py-3 rounded-lg font-semibold transition-all ${
//               selectedLeague === 'wnba'
//                 ? 'bg-orange-600 text-white shadow-lg'
//                 : 'bg-white text-gray-700 hover:bg-orange-50'
//             }`}
//           >
//             WNBA
//           </button>
//         </div>

//         {/* Schedule by Date */}
//         <div className="space-y-8">
//           {schedule.map((day, dayIdx) => (
//             <div key={dayIdx} className="bg-white rounded-xl shadow-lg overflow-hidden">
//               {/* Date Header */}
//               <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4">
//                 <div className="flex items-center gap-3">
//                   <Calendar className="w-6 h-6" />
//                   <h2 className="text-xl font-bold">{formatDate(day.date)}</h2>
//                 </div>
//               </div>

//               {/* Matches */}
//               <div className="p-6">
//                 <div className="space-y-4">
//                   {day.matches.map((match) => (
//                     <Link
//                       key={match.id}
//                       to={`/basketball-scorecard/${match.id}`}
//                       className="block border-2 border-gray-200 rounded-lg p-4 hover:border-orange-500 hover:shadow-md transition-all"
//                     >
//                       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                         {/* Teams */}
//                         <div className="flex-1">
//                           <div className="flex items-center justify-between mb-2">
//                             <span className="font-semibold text-gray-800 text-lg">{match.home}</span>
//                             <span className="text-gray-400 font-medium mx-4">vs</span>
//                           </div>
//                           <div className="flex items-center justify-between">
//                             <span className="font-semibold text-gray-800 text-lg">{match.away}</span>
//                           </div>
//                         </div>

//                         {/* Match Info */}
//                         <div className="flex flex-col md:items-end gap-2">
//                           <div className="flex items-center gap-2 text-sm text-gray-600">
//                             <Clock className="w-4 h-4" />
//                             <span className="font-medium">{match.time} EST</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-sm text-gray-600">
//                             <MapPin className="w-4 h-4" />
//                             <span>{match.venue}, {match.city}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Schedule;


// import React, { useState } from 'react';
// import { Calendar, MapPin, Clock } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Schedule = () => {
//   const [selectedLeague, setSelectedLeague] = useState('nba');

//   const scheduleData = {
//     nba: [
//       {
//         date: '2026-01-04',
//         matches: [
//           {
//             id: 'nba-1001',
//             time: '3:00 PM',
//             home: 'Orlando Magic',
//             away: 'Indiana Pacers',
//             venue: 'Kia Center',
//             city: 'Orlando, FL'
//           },
//           {
//             id: 'nba-1002',
//             time: 'TBD',
//             home: 'Brooklyn Nets',
//             away: 'Denver Nuggets',
//             venue: 'Barclays Center',
//             city: 'Brooklyn, NY'
//           },
//           // Add more if available, but from data, these are highlighted
//         ]
//       },
//       {
//         date: '2026-01-05',
//         matches: [
//           {
//             id: 'nba-1003',
//             time: 'TBD',
//             home: 'Philadelphia 76ers',
//             away: 'Denver Nuggets',
//             venue: 'Wells Fargo Center',
//             city: 'Philadelphia, PA'
//           },
//           // Other games likely, but highlighted this one
//         ]
//       },
//       {
//         date: '2026-01-06',
//         matches: [
//           {
//             id: 'nba-1004',
//             time: '8:00 PM',
//             home: 'Minnesota Timberwolves',
//             away: 'Miami Heat',
//             venue: 'Target Center',
//             city: 'Minneapolis, MN'
//           },
//         ]
//       }
//     ],
//     wnba: [
//       // Keeping placeholder as season is off (May-Sep)
//       {
//         date: '2026-05-15',
//         matches: [
//           {
//             id: 'wnba-1',
//             time: '7:00 PM',
//             home: 'Las Vegas Aces',
//             away: 'Phoenix Mercury',
//             venue: 'Michelob ULTRA Arena',
//             city: 'Las Vegas'
//           },
//           {
//             id: 'wnba-2',
//             time: '8:00 PM',
//             home: 'Seattle Storm',
//             away: 'Los Angeles Sparks',
//             venue: 'Climate Pledge Arena',
//             city: 'Seattle'
//           }
//         ]
//       },
//       {
//         date: '2026-05-16',
//         matches: [
//           {
//             id: 'wnba-3',
//             time: '7:30 PM',
//             home: 'New York Liberty',
//             away: 'Indiana Fever',
//             venue: 'Barclays Center',
//             city: 'Brooklyn'
//           }
//         ]
//       }
//     ]
//   };

//   const schedule = scheduleData[selectedLeague];

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 ">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white   py-10">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-2xl font-bold mb-2">🏀 Basketball Schedule</h1>
//           <p className="text-orange-100">Upcoming NBA & WNBA fixtures</p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {/* League Selector */}
//         <div className="bg-white rounded-xl shadow-md p-4 mb-6">
//           <div className="flex gap-3">
//             <button
//               onClick={() => setSelectedLeague('nba')}
//               className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
//                 selectedLeague === 'nba' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               NBA
//             </button>
//             <button
//               onClick={() => setSelectedLeague('wnba')}
//               className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
//                 selectedLeague === 'wnba' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               WNBA
//             </button>
//           </div>
//         </div>

//         {/* Schedule */}
//         <div className="space-y-6">
//           {schedule.map((day) => (
//             <div key={day.date} className="bg-white rounded-xl shadow-md overflow-hidden">
//               <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4">
//                 <div className="flex items-center gap-2">
//                   <Calendar className="w-5 h-5" />
//                   <h2 className="text-lg font-semibold">{formatDate(day.date)}</h2>
//                 </div>
//               </div>

//               <div className="p-5 space-y-4">
//                 {day.matches.map((match) => (
//                   <Link
//                     key={match.id}
//                     to={`/basketball-scorecard/${match.id}`}
//                     className="block bg-gray-50 rounded-lg p-4 hover:bg-orange-50 transition-colors"
//                   >
//                     <div className="grid grid-cols-3 items-center gap-4">
//                       {/* Home */}
//                       <div className="text-left">
//                         <p className="font-semibold text-gray-800">{match.home}</p>
//                       </div>

//                       {/* Center */}
//                       <div className="text-center">
//                         <p className="text-lg font-bold text-gray-400">VS</p>
//                         <p className="text-xs text-gray-600 mt-1">
//                           <Clock className="w-4 h-4 inline" /> {match.time} ET
//                         </p>
//                       </div>

//                       {/* Away */}
//                       <div className="text-right">
//                         <p className="font-semibold text-gray-800">{match.away}</p>
//                       </div>
//                     </div>

//                     <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600 flex items-center gap-1 justify-center">
//                       <MapPin className="w-4 h-4" />
//                       {match.venue}, {match.city}
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Schedule;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Clock, Calendar, MapPin } from 'lucide-react';
// import TopBasketballStories from '../../data/TopBasketballStories.js';
// import LatestNews from '../../data/LatestNews.js';

// const Schedule = () => {
//   const navigate = useNavigate();
//   const [selectedLeague, setSelectedLeague] = useState('nba');

//   const scheduleData = {
//     nba: [
//       {
//         date: '2026-01-08',
//         matches: [
//           {
//             id: 'nba-20260108-1',
//             time: '8:00 PM',
//             home: 'Miami Heat',
//             away: 'Chicago Bulls',
//             venue: 'Kaseya Center',
//             city: 'Miami, FL'
//           },
//           {
//             id: 'nba-20260108-2',
//             time: '8:00 PM',
//             home: 'Cleveland Cavaliers',
//             away: 'Minnesota Timberwolves',
//             venue: 'Rocket Mortgage FieldHouse',
//             city: 'Cleveland, OH'
//           },
//           // Placeholder for more games if available
//         ]
//       },
//       {
//         date: '2026-01-09',
//         matches: [
//           {
//             id: 'nba-20260109-1',
//             time: '7:30 PM',
//             home: 'New York Knicks',
//             away: 'Boston Celtics',
//             venue: 'Madison Square Garden',
//             city: 'New York, NY'
//           },
//           {
//             id: 'nba-20260109-2',
//             time: '10:00 PM',
//             home: 'Los Angeles Lakers',
//             away: 'Golden State Warriors',
//             venue: 'Crypto.com Arena',
//             city: 'Los Angeles, CA'
//           }
//         ]
//       },
//       {
//         date: '2026-01-10',
//         matches: [
//           {
//             id: 'nba-20260110-1',
//             time: '8:00 PM',
//             home: 'Oklahoma City Thunder',
//             away: 'Denver Nuggets',
//             venue: 'Paycom Center',
//             city: 'Oklahoma City, OK'
//           }
//         ]
//       }
//     ],
//     wnba: [
//       // WNBA 2026 season starts in May - showing upcoming placeholders
//       {
//         date: '2026-05-15',
//         matches: [
//           {
//             id: 'wnba-20260515-1',
//             time: '7:00 PM',
//             home: 'Las Vegas Aces',
//             away: 'Phoenix Mercury',
//             venue: 'Michelob ULTRA Arena',
//             city: 'Las Vegas, NV'
//           },
//           {
//             id: 'wnba-20260515-2',
//             time: '8:00 PM',
//             home: 'Seattle Storm',
//             away: 'Los Angeles Sparks',
//             venue: 'Climate Pledge Arena',
//             city: 'Seattle, WA'
//           }
//         ]
//       },
//       {
//         date: '2026-05-16',
//         matches: [
//           {
//             id: 'wnba-20260516-1',
//             time: '7:30 PM',
//             home: 'New York Liberty',
//             away: 'Indiana Fever',
//             venue: 'Barclays Center',
//             city: 'Brooklyn, NY'
//           }
//         ]
//       }
//     ]
//   };

//   const schedule = scheduleData[selectedLeague];

//   const handleStoryClick = (id) => {
//     navigate(`/details/basketball/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">
//       {/* Main Container */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Left: Hero + Schedule */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Hero Header Card */}
//             <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
//               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//                 <div>
//                   <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">🏀 Basketball Schedule</h1>
//                   <p className="text-orange-100 text-sm sm:text-base">Upcoming NBA & WNBA fixtures</p>
//                 </div>
//                 <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
//                   <div className="flex items-center gap-2">
//                     <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
//                     <span className="font-semibold">{new Date().toLocaleTimeString()}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* League Selector */}
//             <div className="bg-white rounded-xl shadow-md p-4">
//               <div className="flex gap-3">
//                 <button
//                   onClick={() => setSelectedLeague('nba')}
//                   className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
//                     selectedLeague === 'nba' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   NBA
//                 </button>
//                 <button
//                   onClick={() => setSelectedLeague('wnba')}
//                   className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
//                     selectedLeague === 'wnba' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   WNBA
//                 </button>
//               </div>
//             </div>

//             {/* Schedule */}
//             <div className="space-y-6">
//               {schedule.map((day) => (
//                 <div key={day.date} className="bg-white rounded-xl shadow-md overflow-hidden">
//                   <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4">
//                     <div className="flex items-center gap-2">
//                       <Calendar className="w-5 h-5" />
//                       <h2 className="text-lg font-semibold">{formatDate(day.date)}</h2>
//                     </div>
//                   </div>

//                   <div className="p-5 space-y-4">
//                     {day.matches.map((match) => (
//                       <Link
//                         key={match.id}
//                         to={`/basketball-scorecard/${match.id}`}
//                         className="block bg-gray-50 rounded-lg p-4 hover:bg-orange-50 transition-colors"
//                       >
//                         <div className="grid grid-cols-3 items-center gap-4">
//                           {/* Home */}
//                           <div className="text-left">
//                             <p className="font-semibold text-gray-800">{match.home}</p>
//                           </div>

//                           {/* Center */}
//                           <div className="text-center">
//                             <p className="text-lg font-bold text-gray-400">VS</p>
//                             <p className="text-xs text-gray-600 mt-1">
//                               <Clock className="w-4 h-4 inline" /> {match.time} ET
//                             </p>
//                           </div>

//                           {/* Away */}
//                           <div className="text-right">
//                             <p className="font-semibold text-gray-800">{match.away}</p>
//                           </div>
//                         </div>

//                         <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600 flex items-center gap-1 justify-center">
//                           <MapPin className="w-4 h-4" />
//                           {match.venue}, {match.city}
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Sidebar: Top Stories (Desktop only) */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-5">Top Basketball Stories</h3>
//               <div className="space-y-4">
//                 {TopBasketballStories.data.TopBasketballStories.slice(0, 5).map((story) => (
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
//                       <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-orange-600 transition-colors">
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
//                 onClick={() => navigate('/all-top-basketball-stories')}
//                 className="mt-6 w-full text-center text-orange-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile: Top Basketball Stories */}
//       <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Top Basketball Stories</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {TopBasketballStories.data.TopBasketballStories.slice(0, 4).map((story) => (
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
//               onClick={() => navigate('/all-top-basketball-stories')}
//               className="mt-4 w-full text-center text-orange-600 font-medium hover:underline text-sm"
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
//                 className="text-orange-600 hover:underline font-medium text-sm sm:text-base"
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

// export default Schedule;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, Calendar, MapPin } from 'lucide-react';
import TopBasketballStories from '../../data/TopBasketballStories.js';
import LatestNews from '../../data/LatestNews.js';
import { basketballSchedule } from '../../data/BasketballSchedule.js';

const Schedule = () => {
  const navigate = useNavigate();
  const [selectedLeague, setSelectedLeague] = useState('nba');

  // Get schedule data from external file
  const schedule = basketballSchedule[selectedLeague] || [];

  const handleStoryClick = (id) => {
    navigate(`/details/basketball/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Left: Hero + Schedule */}
          <div className="lg:col-span-8 space-y-6">
            {/* Hero Header Card */}
            <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">🏀 Basketball Schedule</h1>
                  <p className="text-orange-100 text-sm sm:text-base">Upcoming NBA & WNBA fixtures</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold">{new Date().toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* League Selector */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedLeague('nba')}
                  className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    selectedLeague === 'nba' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  NBA
                </button>
                <button
                  onClick={() => setSelectedLeague('wnba')}
                  className={`flex-1 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    selectedLeague === 'wnba' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  WNBA
                </button>
              </div>
            </div>

            {/* Schedule */}
            <div className="space-y-6">
              {schedule.map((day) => (
                <div key={day.date} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <h2 className="text-lg font-semibold">{formatDate(day.date)}</h2>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                    {day.matches.map((match) => (
                      <Link
                        key={match.id}
                        to={`/basketball-scorecard/${match.id}`}
                        className="block bg-gray-50 rounded-lg p-4 hover:bg-orange-50 transition-colors"
                      >
                        <div className="grid grid-cols-3 items-center gap-4">
                          {/* Home */}
                          <div className="text-left">
                            <p className="font-semibold text-gray-800">{match.home}</p>
                          </div>

                          {/* Center */}
                          <div className="text-center">
                            <p className="text-lg font-bold text-gray-400">VS</p>
                            <p className="text-xs text-gray-600 mt-1">
                              <Clock className="w-4 h-4 inline" /> {match.time} ET
                            </p>
                          </div>

                          {/* Away */}
                          <div className="text-right">
                            <p className="font-semibold text-gray-800">{match.away}</p>
                          </div>
                        </div>

                        <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600 flex items-center gap-1 justify-center">
                          <MapPin className="w-4 h-4" />
                          {match.venue}, {match.city}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar: Top Stories (Desktop only) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Top Basketball Stories</h3>
              <div className="space-y-4">
                {TopBasketballStories.data.TopBasketballStories.slice(0, 5).map((story) => (
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
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-orange-600 transition-colors">
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
                onClick={() => navigate('/all-top-basketball-stories')}
                className="mt-6 w-full text-center text-orange-600 font-medium hover:underline text-sm"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Top Basketball Stories */}
      <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Basketball Stories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TopBasketballStories.data.TopBasketballStories.slice(0, 4).map((story) => (
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
              onClick={() => navigate('/all-top-basketball-stories')}
              className="mt-4 w-full text-center text-orange-600 font-medium hover:underline text-sm"
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
                className="text-orange-600 hover:underline font-medium text-sm sm:text-base"
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

export default Schedule;