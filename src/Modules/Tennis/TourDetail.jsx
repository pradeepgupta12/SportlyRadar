// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { ArrowLeft, Trophy, Calendar, MapPin, DollarSign, Users, Award } from 'lucide-react';

// const TourDetail = () => {
//   const { tourId } = useParams();
//   const [activeTab, setActiveTab] = useState('overview');

//   const tournamentData = {
//     'atp-finals': {
//       name: 'ATP Finals',
//       category: 'Year-End Championship',
//       location: 'Turin, Italy',
//       surface: 'Hard (Indoor)',
//       month: 'November',
//       prize: '$15 Million',
//       points: '1500',
//       participants: 8,
//       venue: 'Pala Alpitour',
//       established: 1970,
//       description: 'The ATP Finals is the season-ending championship of the ATP Tour. It features the top eight singles players and doubles teams based on their performance throughout the season.',
//       format: 'Round-robin followed by semifinals and final',
//       pastChampions: [
//         { year: 2024, champion: 'Jannik Sinner', runnerUp: 'Taylor Fritz' },
//         { year: 2023, champion: 'Novak Djokovic', runnerUp: 'Jannik Sinner' },
//         { year: 2022, champion: 'Novak Djokovic', runnerUp: 'Casper Ruud' },
//         { year: 2021, champion: 'Alexander Zverev', runnerUp: 'Daniil Medvedev' },
//         { year: 2020, champion: 'Daniil Medvedev', runnerUp: 'Dominic Thiem' }
//       ],
//       records: {
//         mostTitles: 'Novak Djokovic (7 titles)',
//         youngestChampion: 'Lleyton Hewitt (20 years, 8 months)',
//         oldestChampion: 'Roger Federer (36 years, 10 months)'
//       }
//     },
//     'indian-wells': {
//       name: 'BNP Paribas Open',
//       category: 'ATP Masters 1000',
//       location: 'Indian Wells, California, USA',
//       surface: 'Hard',
//       month: 'March',
//       prize: '$8.8 Million',
//       points: '1000',
//       participants: 96,
//       venue: 'Indian Wells Tennis Garden',
//       established: 1974,
//       description: 'Often called the "fifth Grand Slam," the BNP Paribas Open is one of the largest and most prestigious tennis tournaments outside the four majors.',
//       format: '96-player draw with byes for top seeds',
//       pastChampions: [
//         { year: 2024, champion: 'Carlos Alcaraz', runnerUp: 'Daniil Medvedev' },
//         { year: 2023, champion: 'Carlos Alcaraz', runnerUp: 'Daniil Medvedev' },
//         { year: 2022, champion: 'Taylor Fritz', runnerUp: 'Rafael Nadal' },
//         { year: 2021, champion: 'Cameron Norrie', runnerUp: 'Nikoloz Basilashvili' },
//         { year: 2019, champion: 'Dominic Thiem', runnerUp: 'Roger Federer' }
//       ],
//       records: {
//         mostTitles: 'Novak Djokovic (5 titles)',
//         youngestChampion: 'Michael Chang (20 years)',
//         longestMatch: '4h 58m'
//       }
//     },
//     'wta-finals': {
//       name: 'WTA Finals',
//       category: 'Year-End Championship',
//       location: 'Riyadh, Saudi Arabia',
//       surface: 'Hard (Indoor)',
//       month: 'November',
//       prize: '$15 Million',
//       points: '1500',
//       participants: 8,
//       venue: 'King Saud University Indoor Arena',
//       established: 1972,
//       description: 'The WTA Finals is the season-ending championship featuring the top eight singles players and doubles teams of the WTA Tour.',
//       format: 'Round-robin followed by semifinals and final',
//       pastChampions: [
//         { year: 2024, champion: 'Coco Gauff', runnerUp: 'Zheng Qinwen' },
//         { year: 2023, champion: 'Iga Świątek', runnerUp: 'Jessica Pegula' },
//         { year: 2022, champion: 'Caroline Garcia', runnerUp: 'Aryna Sabalenka' },
//         { year: 2021, champion: 'Garbiñe Muguruza', runnerUp: 'Anett Kontaveit' },
//         { year: 2019, champion: 'Ashleigh Barty', runnerUp: 'Elina Svitolina' }
//       ],
//       records: {
//         mostTitles: 'Martina Navratilova (8 titles)',
//         youngestChampion: 'Tracy Austin (17 years)',
//         oldestChampion: 'Serena Williams (33 years)'
//       }
//     }
//   };

//   const tournament = tournamentData[tourId];

//   if (!tournament) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-xl text-gray-600">Tournament not found</p>
//       </div>
//     );
//   }

//   const tabs = [
//     { id: 'overview', label: 'Overview' },
//     { id: 'champions', label: 'Past Champions' },
//     { id: 'records', label: 'Records' }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Back Button */}
//       <div className="max-w-7xl mx-auto px-4 pt-6">
//         <Link
//           to="/tennis/tours"
//           className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
//         >
//           <ArrowLeft className="h-4 w-4" />
//           Back to Tours
//         </Link>
//       </div>

//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16 mt-4">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-4 mb-4">
//             <Trophy className="h-12 w-12" />
//             <div>
//               <h1 className="text-4xl font-bold mb-2">{tournament.name}</h1>
//               <span className="inline-block text-lg bg-white/20 px-4 py-1 rounded-full">
//                 {tournament.category}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Quick Stats */}
//       <div className="max-w-7xl mx-auto px-4 -mt-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <MapPin className="h-6 w-6 text-blue-600 mb-2" />
//             <p className="text-sm text-gray-500 mb-1">Location</p>
//             <p className="font-semibold text-gray-800">{tournament.location}</p>
//           </div>
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <Calendar className="h-6 w-6 text-green-600 mb-2" />
//             <p className="text-sm text-gray-500 mb-1">When</p>
//             <p className="font-semibold text-gray-800">{tournament.month}</p>
//           </div>
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <DollarSign className="h-6 w-6 text-yellow-600 mb-2" />
//             <p className="text-sm text-gray-500 mb-1">Prize Money</p>
//             <p className="font-semibold text-gray-800">{tournament.prize}</p>
//           </div>
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <Award className="h-6 w-6 text-purple-600 mb-2" />
//             <p className="text-sm text-gray-500 mb-1">Points</p>
//             <p className="font-semibold text-gray-800">{tournament.points}</p>
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="max-w-7xl mx-auto px-4 mt-8">
//         <div className="flex gap-2 overflow-x-auto pb-2">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
//                 activeTab === tab.id
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-white text-gray-700 hover:bg-gray-100'
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Tab Content */}
//       <div className="max-w-7xl mx-auto px-4 py-6 pb-12">
//         {activeTab === 'overview' && (
//           <div className="space-y-6">
//             <div className="bg-white rounded-xl shadow-sm p-8">
//               <h2 className="text-2xl font-bold mb-4">About the Tournament</h2>
//               <p className="text-gray-600 mb-6">{tournament.description}</p>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <h3 className="font-semibold text-lg mb-3">Tournament Details</h3>
//                   <div className="space-y-3">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Venue:</span>
//                       <span className="font-medium">{tournament.venue}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Established:</span>
//                       <span className="font-medium">{tournament.established}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Surface:</span>
//                       <span className="font-medium">{tournament.surface}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Draw Size:</span>
//                       <span className="font-medium">{tournament.participants} players</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-lg mb-3">Format</h3>
//                   <p className="text-gray-600">{tournament.format}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === 'champions' && (
//           <div className="bg-white rounded-xl shadow-sm p-8">
//             <h2 className="text-2xl font-bold mb-6">Recent Champions</h2>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="border-b-2">
//                   <tr>
//                     <th className="text-left py-3 px-4">Year</th>
//                     <th className="text-left py-3 px-4">Champion</th>
//                     <th className="text-left py-3 px-4">Runner-Up</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {tournament.pastChampions.map((champion, idx) => (
//                     <tr key={idx} className="border-b hover:bg-gray-50">
//                       <td className="py-4 px-4 font-semibold">{champion.year}</td>
//                       <td className="py-4 px-4 flex items-center gap-2">
//                         <Trophy className="h-4 w-4 text-yellow-600" />
//                         <span className="font-medium">{champion.champion}</span>
//                       </td>
//                       <td className="py-4 px-4 text-gray-600">{champion.runnerUp}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {activeTab === 'records' && (
//           <div className="bg-white rounded-xl shadow-sm p-8">
//             <h2 className="text-2xl font-bold mb-6">Tournament Records</h2>
//             <div className="space-y-4">
//               {Object.entries(tournament.records).map(([key, value], idx) => (
//                 <div key={idx} className="border border-gray-200 rounded-lg p-4">
//                   <p className="text-sm text-gray-500 mb-1">
//                     {key.split(/(?=[A-Z])/).join(' ')}
//                   </p>
//                   <p className="font-semibold text-lg text-gray-800">{value}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TourDetail;

// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { ArrowLeft, Trophy, Calendar, MapPin, Award } from 'lucide-react';

// const TourDetail = () => {
//   const { tourId } = useParams();
//   const [activeTab, setActiveTab] = useState('overview');

//   const tournamentData = {
//     'atp-finals': {
//       name: 'ATP Finals',
//       category: 'Year-End Championship',
//       location: 'Turin, Italy',
//       surface: 'Hard (Indoor)',
//       month: 'November',
//       prize: '$15.5M',
//       points: '1500',
//       participants: 8,
//       venue: 'Inalpi Arena',
//       established: 1970,
//       description: 'Season-ending event for the top 8 singles players & doubles teams.',
//       format: 'Round-robin groups → semifinals → final',
//       pastChampions: [
//         { year: 2025, champion: 'Jannik Sinner', runnerUp: 'Carlos Alcaraz' },
//         { year: 2024, champion: 'Jannik Sinner', runnerUp: 'Taylor Fritz' },
//         { year: 2023, champion: 'Novak Djokovic', runnerUp: 'Jannik Sinner' },
//         { year: 2022, champion: 'Novak Djokovic', runnerUp: 'Casper Ruud' },
//         { year: 2021, champion: 'Alexander Zverev', runnerUp: 'Daniil Medvedev' }
//       ],
//       records: {
//         mostTitles: 'Novak Djokovic (7)',
//         youngestChampion: 'Lleyton Hewitt (20y 8m)',
//         oldestChampion: 'Roger Federer (36y 10m)'
//       }
//     },
//     'indian-wells': {
//       name: 'BNP Paribas Open',
//       category: 'ATP Masters 1000',
//       location: 'Indian Wells, CA, USA',
//       surface: 'Hard',
//       month: 'March',
//       prize: '$9.7M',
//       points: '1000',
//       participants: 96,
//       venue: 'Indian Wells Tennis Garden',
//       established: 1974,
//       description: 'Often called the "5th Grand Slam" – largest combined ATP/WTA event outside majors.',
//       format: '96-player draw (top seeds bye)',
//       pastChampions: [
//         { year: 2025, champion: 'Jack Draper', runnerUp: 'Holger Rune' },
//         { year: 2024, champion: 'Carlos Alcaraz', runnerUp: 'Daniil Medvedev' },
//         { year: 2023, champion: 'Carlos Alcaraz', runnerUp: 'Daniil Medvedev' },
//         { year: 2022, champion: 'Taylor Fritz', runnerUp: 'Rafael Nadal' },
//         { year: 2021, champion: 'Cameron Norrie', runnerUp: 'Nikoloz Basilashvili' }
//       ],
//       records: {
//         mostTitles: 'Novak Djokovic & Roger Federer (5 each)',
//         youngestChampion: 'Michael Chang (20y)',
//         note: 'Longest match: ~5 hours'
//       }
//     },
//     'wta-finals': {
//       name: 'WTA Finals',
//       category: 'Year-End Championship',
//       location: 'Riyadh, Saudi Arabia',
//       surface: 'Hard (Indoor)',
//       month: 'November',
//       prize: '$15.5M',
//       points: '1500',
//       participants: 8,
//       venue: 'King Saud University Arena',
//       established: 1972,
//       description: 'Season-ending event for the top 8 singles players & doubles teams.',
//       format: 'Round-robin groups → semifinals → final',
//       pastChampions: [
//         { year: 2025, champion: 'Elena Rybakina', runnerUp: 'Aryna Sabalenka' },
//         { year: 2024, champion: 'Coco Gauff', runnerUp: 'Zheng Qinwen' },
//         { year: 2023, champion: 'Iga Świątek', runnerUp: 'Jessica Pegula' },
//         { year: 2022, champion: 'Caroline Garcia', runnerUp: 'Aryna Sabalenka' },
//         { year: 2021, champion: 'Garbiñe Muguruza', runnerUp: 'Anett Kontaveit' }
//       ],
//       records: {
//         mostTitles: 'Martina Navratilova (8)',
//         youngestChampion: 'Tracy Austin (17y)',
//         oldestChampion: 'Serena Williams (33y)'
//       }
//     }
//   };

//   const tournament = tournamentData[tourId];

//   if (!tournament) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-600">
//         Tournament not found
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Back + Compact Header */}
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <Link to="/tennis/tours" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm">
//           <ArrowLeft className="w-4 h-4" /> Back to Tours
//         </Link>

//         <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-xl p-6 mt-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <Trophy className="w-10 h-10" />
//               <div>
//                 <h1 className="text-3xl font-bold">{tournament.name}</h1>
//                 <span className="inline-block text-sm bg-white/20 px-3 py-1 rounded-full mt-1">
//                   {tournament.category}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Quick Stats */}
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//           <div className="bg-white rounded-lg shadow p-4 text-center">
//             <p className="text-xs text-gray-600">Location</p>
//             <p className="text-lg font-bold">{tournament.location}</p>
//           </div>
//           <div className="bg-white rounded-lg shadow p-4 text-center">
//             <p className="text-xs text-gray-600">Held</p>
//             <p className="text-lg font-bold">{tournament.month}</p>
//           </div>
//           <div className="bg-white rounded-lg shadow p-4 text-center">
//             <p className="text-xs text-gray-600">Prize Money</p>
//             <p className="text-lg font-bold text-green-600">{tournament.prize}</p>
//           </div>
//           <div className="bg-white rounded-lg shadow p-4 text-center">
//             <p className="text-xs text-gray-600">Winner Points</p>
//             <p className="text-lg font-bold">{tournament.points}</p>
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="max-w-7xl mx-auto px-4 mb-6">
//         <div className="flex gap-3 overflow-x-auto">
//           {['overview', 'champions', 'records'].map(tab => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
//                 activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               {tab === 'overview' ? 'Overview' : tab === 'champions' ? 'Recent Champions' : 'Records'}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Tab Content */}
//       <div className="max-w-7xl mx-auto px-4 pb-12">
//         {activeTab === 'overview' && (
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="bg-white rounded-xl shadow-md p-5">
//               <h3 className="text-lg font-semibold mb-3">About</h3>
//               <p className="text-sm text-gray-600">{tournament.description}</p>
//               <p className="text-sm text-gray-600 mt-3"><span className="font-medium">Format:</span> {tournament.format}</p>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-5">
//               <h3 className="text-lg font-semibold mb-3">Details</h3>
//               <div className="space-y-2 text-sm">
//                 <div className="flex justify-between"><span className="text-gray-600">Venue:</span> <span>{tournament.venue}</span></div>
//                 <div className="flex justify-between"><span className="text-gray-600">Established:</span> <span>{tournament.established}</span></div>
//                 <div className="flex justify-between"><span className="text-gray-600">Surface:</span> <span>{tournament.surface}</span></div>
//                 <div className="flex justify-between"><span className="text-gray-600">Players:</span> <span>{tournament.participants}</span></div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === 'champions' && (
//           <div className="bg-white rounded-xl shadow-md overflow-hidden">
//             <table className="w-full text-sm">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="text-left py-3 px-4">Year</th>
//                   <th className="text-left py-3 px-4">Champion</th>
//                   <th className="text-left py-3 px-4">Runner-Up</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {tournament.pastChampions.map((c, i) => (
//                   <tr key={i} className="hover:bg-gray-50">
//                     <td className="py-3 px-4 font-medium">{c.year}</td>
//                     <td className="py-3 px-4 flex items-center gap-2">
//                       <Trophy className="w-4 h-4 text-yellow-600" />
//                       {c.champion}
//                     </td>
//                     <td className="py-3 px-4 text-gray-600">{c.runnerUp}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {activeTab === 'records' && (
//           <div className="grid md:grid-cols-3 gap-4">
//             {Object.entries(tournament.records).map(([key, value], i) => (
//               <div key={i} className="bg-white rounded-lg shadow p-5">
//                 <p className="text-sm text-gray-600 mb-1">
//                   {key === 'mostTitles' ? 'Most Titles' :
//                    key === 'youngestChampion' ? 'Youngest Champion' :
//                    key === 'oldestChampion' ? 'Oldest Champion' : key}
//                 </p>
//                 <p className="font-bold">{value}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TourDetail;


// import React, { useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { ArrowLeft, Trophy, Calendar, MapPin, Award } from 'lucide-react';

// import TopTennisStories from '../../data/TopTennisStories.js';
// import LatestNews from '../../data/LatestNews.js';

// const TourDetail = () => {
//   const { tourId } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('overview');

//   const tournamentData = {
//     'atp-finals': {
//       name: 'Nitto ATP Finals',
//       category: 'Year-End Championship',
//       location: 'Turin, Italy',
//       surface: 'Hard (Indoor)',
//       month: 'November',
//       prize: '$15.5M',
//       points: '1500',
//       participants: 8,
//       venue: 'Inalpi Arena',
//       established: 1970,
//       description: 'Season-ending event for the top 8 singles players & doubles teams.',
//       format: 'Round-robin groups → semifinals → final',
//       pastChampions: [
//         { year: 2025, champion: 'Jannik Sinner', runnerUp: 'Carlos Alcaraz' },
//         { year: 2024, champion: 'Jannik Sinner', runnerUp: 'Taylor Fritz' },
//         { year: 2023, champion: 'Novak Djokovic', runnerUp: 'Jannik Sinner' },
//         { year: 2022, champion: 'Novak Djokovic', runnerUp: 'Casper Ruud' },
//         { year: 2021, champion: 'Alexander Zverev', runnerUp: 'Daniil Medvedev' }
//       ],
//       records: {
//         mostTitles: 'Novak Djokovic (7)',
//         youngestChampion: 'Lleyton Hewitt (20y 8m)',
//         oldestChampion: 'Roger Federer (36y 10m)'
//       }
//     },
//     'indian-wells': {
//       name: 'BNP Paribas Open',
//       category: 'ATP Masters 1000',
//       location: 'Indian Wells, CA, USA',
//       surface: 'Hard',
//       month: 'March',
//       prize: '~$9.7M',
//       points: '1000',
//       participants: 96,
//       venue: 'Indian Wells Tennis Garden',
//       established: 1974,
//       description: 'Often called the "5th Grand Slam" – largest combined ATP/WTA event outside majors.',
//       format: '96-player draw (top seeds bye)',
//       pastChampions: [
//         { year: 2025, champion: 'Jack Draper', runnerUp: 'Holger Rune' },
//         { year: 2024, champion: 'Carlos Alcaraz', runnerUp: 'Daniil Medvedev' },
//         { year: 2023, champion: 'Carlos Alcaraz', runnerUp: 'Daniil Medvedev' },
//         { year: 2022, champion: 'Taylor Fritz', runnerUp: 'Rafael Nadal' },
//         { year: 2021, champion: 'Cameron Norrie', runnerUp: 'Nikoloz Basilashvili' }
//       ],
//       records: {
//         mostTitles: 'Novak Djokovic & Roger Federer (5 each)',
//         youngestChampion: 'Boris Becker (19y)',
//         note: 'Often features long, high-quality matches'
//       }
//     },
//     'wta-finals': {
//       name: 'WTA Finals Riyadh',
//       category: 'Year-End Championship',
//       location: 'Riyadh, Saudi Arabia',
//       surface: 'Hard (Indoor)',
//       month: 'November',
//       prize: '$15.5M',
//       points: '1500',
//       participants: 8,
//       venue: 'King Saud University Arena',
//       established: 1972,
//       description: 'Season-ending event for the top 8 singles players & doubles teams.',
//       format: 'Round-robin groups → semifinals → final',
//       pastChampions: [
//         { year: 2025, champion: 'Elena Rybakina', runnerUp: 'Aryna Sabalenka' },
//         { year: 2024, champion: 'Coco Gauff', runnerUp: 'Zheng Qinwen' },
//         { year: 2023, champion: 'Iga Świątek', runnerUp: 'Jessica Pegula' },
//         { year: 2022, champion: 'Caroline Garcia', runnerUp: 'Aryna Sabalenka' },
//         { year: 2021, champion: 'Garbiñe Muguruza', runnerUp: 'Anett Kontaveit' }
//       ],
//       records: {
//         mostTitles: 'Martina Navratilova (8)',
//         youngestChampion: 'Tracy Austin (17y)',
//         oldestChampion: 'Serena Williams (33y)'
//       }
//     }
//   };

//   const tournament = tournamentData[tourId];

//   if (!tournament) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-600">
//         Tournament not found
//       </div>
//     );
//   }

//   const handleStoryClick = (id) => {
//     navigate(`/details/tennis/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
//       {/* Main Content Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Left: Tournament Details */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Back Button + Header */}
//             <div>
//               <Link to="/tennis/tours" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm mb-4">
//                 <ArrowLeft className="w-4 h-4" /> Back to Tours
//               </Link>

//               <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-xl shadow-xl p-8">
//                 <div className="flex items-center gap-5">
//                   <Trophy className="h-14 w-14" />
//                   <div>
//                     <h1 className="text-3xl sm:text-4xl font-bold">{tournament.name}</h1>
//                     <span className="inline-block text-sm bg-white/20 px-4 py-1.5 rounded-full mt-2">
//                       {tournament.category}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <div className="bg-white rounded-xl shadow p-5 text-center">
//                 <p className="text-xs text-gray-600">Location</p>
//                 <p className="text-lg font-bold mt-1">{tournament.location}</p>
//               </div>
//               <div className="bg-white rounded-xl shadow p-5 text-center">
//                 <p className="text-xs text-gray-600">Held</p>
//                 <p className="text-lg font-bold mt-1">{tournament.month}</p>
//               </div>
//               <div className="bg-white rounded-xl shadow p-5 text-center">
//                 <p className="text-xs text-gray-600">Prize Money</p>
//                 <p className="text-lg font-bold text-green-600 mt-1">{tournament.prize}</p>
//               </div>
//               <div className="bg-white rounded-xl shadow p-5 text-center">
//                 <p className="text-xs text-gray-600">Winner Points</p>
//                 <p className="text-lg font-bold mt-1">{tournament.points}</p>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="bg-white rounded-xl shadow p-5">
//               <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
//                 {['overview', 'champions', 'records'].map(tab => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-6 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
//                       activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {tab === 'overview' ? 'Overview' : tab === 'champions' ? 'Recent Champions' : 'Records'}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Tab Content */}
//             <div className="space-y-6">
//               {activeTab === 'overview' && (
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="bg-white rounded-xl shadow-md p-6">
//                     <h3 className="text-xl font-semibold mb-4">About</h3>
//                     <p className="text-gray-600 mb-4">{tournament.description}</p>
//                     <p className="text-gray-700"><span className="font-medium">Format:</span> {tournament.format}</p>
//                   </div>

//                   <div className="bg-white rounded-xl shadow-md p-6">
//                     <h3 className="text-xl font-semibold mb-4">Details</h3>
//                     <div className="space-y-4 text-gray-700">
//                       <div className="flex justify-between"><span className="text-gray-600">Venue:</span> <span className="font-medium">{tournament.venue}</span></div>
//                       <div className="flex justify-between"><span className="text-gray-600">Established:</span> <span className="font-medium">{tournament.established}</span></div>
//                       <div className="flex justify-between"><span className="text-gray-600">Surface:</span> <span className="font-medium">{tournament.surface}</span></div>
//                       <div className="flex justify-between"><span className="text-gray-600">Participants:</span> <span className="font-medium">{tournament.participants}</span></div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'champions' && (
//                 <div className="bg-white rounded-xl shadow-md overflow-hidden">
//                   <table className="w-full">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="text-left py-4 px-6 font-medium">Year</th>
//                         <th className="text-left py-4 px-6 font-medium">Champion</th>
//                         <th className="text-left py-4 px-6 font-medium">Runner-Up</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-100">
//                       {tournament.pastChampions.map((c, i) => (
//                         <tr key={i} className="hover:bg-gray-50">
//                           <td className="py-4 px-6 font-medium">{c.year}</td>
//                           <td className="py-4 px-6 flex items-center gap-3">
//                             <Trophy className="w-5 h-5 text-yellow-600" />
//                             {c.champion}
//                           </td>
//                           <td className="py-4 px-6 text-gray-600">{c.runnerUp}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}

//               {activeTab === 'records' && (
//                 <div className="grid md:grid-cols-3 gap-6">
//                   {Object.entries(tournament.records).map(([key, value], i) => (
//                     <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center">
//                       <p className="text-sm text-gray-600 mb-2">
//                         {key === 'mostTitles' ? 'Most Titles' :
//                          key === 'youngestChampion' ? 'Youngest Champion' :
//                          key === 'oldestChampion' ? 'Oldest Champion' : key.charAt(0).toUpperCase() + key.slice(1)}
//                       </p>
//                       <p className="text-xl font-bold text-gray-800">{value}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Right Sidebar: Top Tennis Stories (Desktop only) */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-5">Top Tennis Stories</h3>
//               <div className="space-y-4">
//                 {TopTennisStories.data.TopTennisStories.slice(0, 5).map((story) => (
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
//                 onClick={() => navigate('/all-top-tennis-stories')}
//                 className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile: Top Tennis Stories Section */}
//       <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Top Tennis Stories</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {TopTennisStories.data.TopTennisStories.slice(0, 4).map((story) => (
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
//               onClick={() => navigate('/all-top-tennis-stories')}
//               className="mt-4 w-full text-center text-blue-600 font-medium hover:underline text-sm"
//             >
//               View All Stories →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Latest Sports News - Full width */}
//       <div className="mt-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
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

// export default TourDetail;


import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, Calendar, MapPin, Award } from 'lucide-react';

import TopTennisStories from '../../data/TopTennisStories.js';
import LatestNews from '../../data/LatestNews.js';
import { tennisTourDetails } from '../../data/TennisToursDetail.js';

const TourDetail = () => {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Data ab external file se aa raha hai
  const tournament = tennisTourDetails[tourId];

  if (!tournament) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Tournament not found
      </div>
    );
  }

  const handleStoryClick = (id) => {
    navigate(`/details/tennis/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Left: Tournament Details */}
          <div className="lg:col-span-8 space-y-6">
            {/* Back Button + Header */}
            <div>
              <Link to="/tennis/tours" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm mb-4">
                <ArrowLeft className="w-4 h-4" /> Back to Tours
              </Link>

              <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-xl shadow-xl p-8">
                <div className="flex items-center gap-5">
                  <Trophy className="h-14 w-14" />
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold">{tournament.name}</h1>
                    <span className="inline-block text-sm bg-white/20 px-4 py-1.5 rounded-full mt-2">
                      {tournament.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl shadow p-5 text-center">
                <p className="text-xs text-gray-600">Location</p>
                <p className="text-lg font-bold mt-1">{tournament.location}</p>
              </div>
              <div className="bg-white rounded-xl shadow p-5 text-center">
                <p className="text-xs text-gray-600">Held</p>
                <p className="text-lg font-bold mt-1">{tournament.month}</p>
              </div>
              <div className="bg-white rounded-xl shadow p-5 text-center">
                <p className="text-xs text-gray-600">Prize Money</p>
                <p className="text-lg font-bold text-green-600 mt-1">{tournament.prize}</p>
              </div>
              <div className="bg-white rounded-xl shadow p-5 text-center">
                <p className="text-xs text-gray-600">Winner Points</p>
                <p className="text-lg font-bold mt-1">{tournament.points}</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow p-5">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {['overview', 'champions', 'records'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                      activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab === 'overview' ? 'Overview' : tab === 'champions' ? 'Recent Champions' : 'Records'}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === 'overview' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">About</h3>
                    <p className="text-gray-600 mb-4">{tournament.description}</p>
                    <p className="text-gray-700"><span className="font-medium">Format:</span> {tournament.format}</p>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">Details</h3>
                    <div className="space-y-4 text-gray-700">
                      <div className="flex justify-between"><span className="text-gray-600">Venue:</span> <span className="font-medium">{tournament.venue}</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Established:</span> <span className="font-medium">{tournament.established}</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Surface:</span> <span className="font-medium">{tournament.surface}</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Participants:</span> <span className="font-medium">{tournament.participants}</span></div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'champions' && (
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-4 px-6 font-medium">Year</th>
                        <th className="text-left py-4 px-6 font-medium">Champion</th>
                        <th className="text-left py-4 px-6 font-medium">Runner-Up</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {tournament.pastChampions.map((c, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="py-4 px-6 font-medium">{c.year}</td>
                          <td className="py-4 px-6 flex items-center gap-3">
                            <Trophy className="w-5 h-5 text-yellow-600" />
                            {c.champion}
                          </td>
                          <td className="py-4 px-6 text-gray-600">{c.runnerUp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'records' && (
                <div className="grid md:grid-cols-3 gap-6">
                  {Object.entries(tournament.records).map(([key, value], i) => (
                    <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center">
                      <p className="text-sm text-gray-600 mb-2">
                        {key === 'mostTitles' ? 'Most Titles' :
                         key === 'youngestChampion' ? 'Youngest Champion' :
                         key === 'oldestChampion' ? 'Oldest Champion' : 
                         key === 'note' ? 'Note' : key.charAt(0).toUpperCase() + key.slice(1)}
                      </p>
                      <p className="text-xl font-bold text-gray-800">{value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar: Top Tennis Stories (Desktop only) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Top Tennis Stories</h3>
              <div className="space-y-4">
                {TopTennisStories.data.TopTennisStories.slice(0, 5).map((story) => (
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
                onClick={() => navigate('/all-top-tennis-stories')}
                className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Top Tennis Stories Section */}
      <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Tennis Stories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TopTennisStories.data.TopTennisStories.slice(0, 4).map((story) => (
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
              onClick={() => navigate('/all-top-tennis-stories')}
              className="mt-4 w-full text-center text-blue-600 font-medium hover:underline text-sm"
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

export default TourDetail;