// import React, { useState } from 'react';
// import { TrendingUp, TrendingDown, Minus, Trophy, Award } from 'lucide-react';

// const Rankings = () => {
//   const [selectedCategory, setSelectedCategory] = useState('mens-singles');

//   const categories = [
//     { id: 'mens-singles', label: "Men's Singles (ATP)" },
//     { id: 'womens-singles', label: "Women's Singles (WTA)" },
//     { id: 'mens-doubles', label: "Men's Doubles" },
//     { id: 'womens-doubles', label: "Women's Doubles" }
//   ];

//   const rankingsData = {
//     'mens-singles': [
//       { rank: 1, prevRank: 1, name: 'Jannik Sinner', country: 'Italy', points: 11830, tournaments: 19, change: 0 },
//       { rank: 2, prevRank: 2, name: 'Alexander Zverev', country: 'Germany', points: 7915, tournaments: 20, change: 0 },
//       { rank: 3, prevRank: 3, name: 'Carlos Alcaraz', country: 'Spain', points: 7010, tournaments: 17, change: 0 },
//       { rank: 4, prevRank: 5, name: 'Taylor Fritz', country: 'USA', points: 5100, tournaments: 23, change: 1 },
//       { rank: 5, prevRank: 4, name: 'Daniil Medvedev', country: 'Russia', points: 5030, tournaments: 20, change: -1 },
//       { rank: 6, prevRank: 6, name: 'Casper Ruud', country: 'Norway', points: 4255, tournaments: 21, change: 0 },
//       { rank: 7, prevRank: 7, name: 'Novak Djokovic', country: 'Serbia', points: 3910, tournaments: 14, change: 0 },
//       { rank: 8, prevRank: 9, name: 'Alex de Minaur', country: 'Australia', points: 3745, tournaments: 23, change: 1 },
//       { rank: 9, prevRank: 10, name: 'Andrey Rublev', country: 'Russia', points: 3600, tournaments: 23, change: 1 },
//       { rank: 10, prevRank: 8, name: 'Grigor Dimitrov', country: 'Bulgaria', points: 3340, tournaments: 22, change: -2 },
//       { rank: 11, prevRank: 11, name: 'Stefanos Tsitsipas', country: 'Greece', points: 3165, tournaments: 21, change: 0 },
//       { rank: 12, prevRank: 13, name: 'Tommy Paul', country: 'USA', points: 2950, tournaments: 25, change: 1 },
//       { rank: 13, prevRank: 12, name: 'Holger Rune', country: 'Denmark', points: 2780, tournaments: 20, change: -1 },
//       { rank: 14, prevRank: 14, name: 'Lorenzo Musetti', country: 'Italy', points: 2600, tournaments: 24, change: 0 },
//       { rank: 15, prevRank: 15, name: 'Jack Draper', country: 'Great Britain', points: 2410, tournaments: 21, change: 0 }
//     ],
//     'womens-singles': [
//       { rank: 1, prevRank: 1, name: 'Aryna Sabalenka', country: 'Belarus', points: 9706, tournaments: 18, change: 0 },
//       { rank: 2, prevRank: 2, name: 'Iga Świątek', country: 'Poland', points: 8370, tournaments: 19, change: 0 },
//       { rank: 3, prevRank: 3, name: 'Coco Gauff', country: 'USA', points: 6530, tournaments: 21, change: 0 },
//       { rank: 4, prevRank: 4, name: 'Jasmine Paolini', country: 'Italy', points: 5344, tournaments: 22, change: 0 },
//       { rank: 5, prevRank: 5, name: 'Zheng Qinwen', country: 'China', points: 5340, tournaments: 23, change: 0 },
//       { rank: 6, prevRank: 7, name: 'Elena Rybakina', country: 'Kazakhstan', points: 5171, tournaments: 18, change: 1 },
//       { rank: 7, prevRank: 6, name: 'Jessica Pegula', country: 'USA', points: 4705, tournaments: 20, change: -1 },
//       { rank: 8, prevRank: 8, name: 'Emma Navarro', country: 'USA', points: 3698, tournaments: 23, change: 0 },
//       { rank: 9, prevRank: 10, name: 'Daria Kasatkina', country: 'Russia', points: 3368, tournaments: 24, change: 1 },
//       { rank: 10, prevRank: 9, name: 'Barbora Krejčíková', country: 'Czech Republic', points: 3214, tournaments: 19, change: -1 },
//       { rank: 11, prevRank: 11, name: 'Danielle Collins', country: 'USA', points: 3177, tournaments: 20, change: 0 },
//       { rank: 12, prevRank: 12, name: 'Paula Badosa', country: 'Spain', points: 3145, tournaments: 22, change: 0 },
//       { rank: 13, prevRank: 14, name: 'Diana Shnaider', country: 'Russia', points: 3020, tournaments: 26, change: 1 },
//       { rank: 14, prevRank: 13, name: 'Anna Kalinskaya', country: 'Russia', points: 2891, tournaments: 23, change: -1 },
//       { rank: 15, prevRank: 15, name: 'Beatriz Haddad Maia', country: 'Brazil', points: 2758, tournaments: 25, change: 0 }
//     ],
//     'mens-doubles': [
//       { rank: 1, prevRank: 1, name: 'Marcelo Arevalo / Mate Pavic', country: 'ESA / CRO', points: 7960, change: 0 },
//       { rank: 2, prevRank: 2, name: 'Harri Heliovaara / Henry Patten', country: 'FIN / GBR', points: 6420, change: 0 },
//       { rank: 3, prevRank: 3, name: 'Marcel Granollers / Horacio Zeballos', country: 'ESP / ARG', points: 6190, change: 0 },
//       { rank: 4, prevRank: 5, name: 'Simone Bolelli / Andrea Vavassori', country: 'ITA / ITA', points: 5630, change: 1 },
//       { rank: 5, prevRank: 4, name: 'Max Purcell / Jordan Thompson', country: 'AUS / AUS', points: 5570, change: -1 },
//       { rank: 6, prevRank: 6, name: 'Rajeev Ram / Joe Salisbury', country: 'USA / GBR', points: 4880, change: 0 },
//       { rank: 7, prevRank: 7, name: 'Kevin Krawietz / Tim Puetz', country: 'GER / GER', points: 4235, change: 0 },
//       { rank: 8, prevRank: 8, name: 'Austin Krajicek / Rajeev Ram', country: 'USA / USA', points: 3940, change: 0 },
//       { rank: 9, prevRank: 9, name: 'Wesley Koolhof / Nikola Mektic', country: 'NED / CRO', points: 3815, change: 0 },
//       { rank: 10, prevRank: 11, name: 'Santiago Gonzalez / Edouard Roger-Vasselin', country: 'MEX / FRA', points: 3610, change: 1 }
//     ],
//     'womens-doubles': [
//       { rank: 1, prevRank: 1, name: 'Gabriela Dabrowski / Erin Routliffe', country: 'CAN / NZL', points: 9225, change: 0 },
//       { rank: 2, prevRank: 3, name: 'Katerina Siniakova / Taylor Townsend', country: 'CZE / USA', points: 8330, change: 1 },
//       { rank: 3, prevRank: 2, name: 'Sara Errani / Jasmine Paolini', country: 'ITA / ITA', points: 8030, change: -1 },
//       { rank: 4, prevRank: 4, name: 'Hao-Ching Chan / Veronika Kudermetova', country: 'TPE / RUS', points: 6790, change: 0 },
//       { rank: 5, prevRank: 5, name: 'Su-Wei Hsieh / Elise Mertens', country: 'TPE / BEL', points: 5855, change: 0 },
//       { rank: 6, prevRank: 6, name: 'Nicole Melichar-Martinez / Ellen Perez', country: 'USA / AUS', points: 5320, change: 0 },
//       { rank: 7, prevRank: 7, name: 'Lyudmyla Kichenok / Jelena Ostapenko', country: 'UKR / LAT', points: 4780, change: 0 },
//       { rank: 8, prevRank: 9, name: 'Desirae Krawczyk / Caroline Dolehide', country: 'USA / USA', points: 4565, change: 1 },
//       { rank: 9, prevRank: 8, name: 'Laura Siegemund / Vera Zvonareva', country: 'GER / RUS', points: 4410, change: -1 },
//       { rank: 10, prevRank: 10, name: 'Kristina Mladenovic / Zhang Shuai', country: 'FRA / CHN', points: 4120, change: 0 }
//     ]
//   };

//   const currentRankings = rankingsData[selectedCategory];

//   const getChangeIcon = (change) => {
//     if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
//     if (change < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
//     return <Minus className="h-4 w-4 text-gray-400" />;
//   };

//   const getChangeColor = (change) => {
//     if (change > 0) return 'text-green-600';
//     if (change < 0) return 'text-red-600';
//     return 'text-gray-400';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-3 mb-2">
//             <Trophy className="h-10 w-10" />
//             <h1 className="text-4xl font-bold">Live Player Rankings</h1>
//           </div>
//           <p className="text-lg opacity-90">Official ATP and WTA world rankings updated weekly</p>
//         </div>
//       </div>

//       {/* Category Filters */}
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="flex gap-3 overflow-x-auto pb-2">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id)}
//               className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
//                 selectedCategory === category.id
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-white text-gray-700 hover:bg-gray-100'
//               }`}
//             >
//               {category.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Rankings Table */}
//       <div className="max-w-7xl mx-auto px-4 pb-12">
//         <div className="bg-white rounded-xl shadow-sm overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-gray-50 border-b-2 border-gray-200">
//                 <tr>
//                   <th className="text-left py-4 px-4 font-semibold text-gray-700">Rank</th>
//                   <th className="text-left py-4 px-4 font-semibold text-gray-700">Player</th>
//                   <th className="text-left py-4 px-4 font-semibold text-gray-700">Country</th>
//                   <th className="text-center py-4 px-4 font-semibold text-gray-700">Points</th>
//                   <th className="text-center py-4 px-4 font-semibold text-gray-700">Tournaments</th>
//                   <th className="text-center py-4 px-4 font-semibold text-gray-700">Change</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {currentRankings.map((player) => (
//                   <tr key={player.rank} className="hover:bg-gray-50 transition-colors">
//                     <td className="py-4 px-4">
//                       <div className="flex items-center gap-2">
//                         <span className="text-lg font-bold text-gray-800">{player.rank}</span>
//                         {player.rank <= 3 && (
//                           <Award className={`h-5 w-5 ${
//                             player.rank === 1 ? 'text-yellow-500' :
//                             player.rank === 2 ? 'text-gray-400' :
//                             'text-amber-700'
//                           }`} />
//                         )}
//                       </div>
//                     </td>
//                     <td className="py-4 px-4">
//                       <span className="font-semibold text-gray-800">{player.name}</span>
//                     </td>
//                     <td className="py-4 px-4">
//                       <span className="text-gray-600">{player.country}</span>
//                     </td>
//                     <td className="py-4 px-4 text-center">
//                       <span className="font-medium text-gray-800">{player.points.toLocaleString()}</span>
//                     </td>
//                     <td className="py-4 px-4 text-center">
//                       <span className="text-gray-600">{player.tournaments}</span>
//                     </td>
//                     <td className="py-4 px-4">
//                       <div className="flex items-center justify-center gap-2">
//                         {getChangeIcon(player.change)}
//                         <span className={`font-medium ${getChangeColor(player.change)}`}>
//                           {player.change > 0 ? `+${player.change}` : player.change === 0 ? '-' : player.change}
//                         </span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Info Section */}
//         <div className="mt-8 bg-blue-50 rounded-xl p-6">
//           <h3 className="font-semibold text-lg mb-3">About Rankings</h3>
//           <div className="space-y-2 text-gray-700">
//             <p>
//               <strong>ATP Rankings:</strong> The Association of Tennis Professionals (ATP) rankings are based on a rolling 52-week system. 
//               Players earn points based on their performance in tournaments.
//             </p>
//             <p>
//               <strong>WTA Rankings:</strong> The Women's Tennis Association (WTA) uses a similar 52-week rolling ranking system.
//             </p>
//             <p>
//               <strong>Updated:</strong> Rankings are updated every Monday based on the previous week's tournament results.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Rankings;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { TrendingUp, TrendingDown, Minus, Trophy, Award } from 'lucide-react';

// import TopTennisStories from '../../data/TopTennisStories.js';
// import LatestNews from '../../data/LatestNews.js';

// const Rankings = () => {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState('mens-singles');

//   const categories = [
//     { id: 'mens-singles', label: "Men's Singles (ATP)" },
//     { id: 'womens-singles', label: "Women's Singles (WTA)" },
//     { id: 'mens-doubles', label: "Men's Doubles" },
//     { id: 'womens-doubles', label: "Women's Doubles" }
//   ];

//   const rankingsData = {
//     'mens-singles': [
//       { rank: 1, prevRank: 1, name: 'Jannik Sinner', country: 'Italy', points: 11830, tournaments: 19, change: 0 },
//       { rank: 2, prevRank: 2, name: 'Alexander Zverev', country: 'Germany', points: 7915, tournaments: 20, change: 0 },
//       { rank: 3, prevRank: 3, name: 'Carlos Alcaraz', country: 'Spain', points: 7010, tournaments: 17, change: 0 },
//       { rank: 4, prevRank: 5, name: 'Taylor Fritz', country: 'USA', points: 5100, tournaments: 23, change: 1 },
//       { rank: 5, prevRank: 4, name: 'Daniil Medvedev', country: 'Russia', points: 5030, tournaments: 20, change: -1 },
//       { rank: 6, prevRank: 6, name: 'Casper Ruud', country: 'Norway', points: 4255, tournaments: 21, change: 0 },
//       { rank: 7, prevRank: 7, name: 'Novak Djokovic', country: 'Serbia', points: 3910, tournaments: 14, change: 0 },
//       { rank: 8, prevRank: 9, name: 'Alex de Minaur', country: 'Australia', points: 3745, tournaments: 23, change: 1 },
//       { rank: 9, prevRank: 10, name: 'Andrey Rublev', country: 'Russia', points: 3600, tournaments: 23, change: 1 },
//       { rank: 10, prevRank: 8, name: 'Grigor Dimitrov', country: 'Bulgaria', points: 3340, tournaments: 22, change: -2 },
//       { rank: 11, prevRank: 11, name: 'Stefanos Tsitsipas', country: 'Greece', points: 3165, tournaments: 21, change: 0 },
//       { rank: 12, prevRank: 13, name: 'Tommy Paul', country: 'USA', points: 2950, tournaments: 25, change: 1 },
//       { rank: 13, prevRank: 12, name: 'Holger Rune', country: 'Denmark', points: 2780, tournaments: 20, change: -1 },
//       { rank: 14, prevRank: 14, name: 'Lorenzo Musetti', country: 'Italy', points: 2600, tournaments: 24, change: 0 },
//       { rank: 15, prevRank: 15, name: 'Jack Draper', country: 'Great Britain', points: 2410, tournaments: 21, change: 0 }
//     ],
//     'womens-singles': [
//       { rank: 1, prevRank: 1, name: 'Aryna Sabalenka', country: 'Belarus', points: 9706, tournaments: 18, change: 0 },
//       { rank: 2, prevRank: 2, name: 'Iga Świątek', country: 'Poland', points: 8370, tournaments: 19, change: 0 },
//       { rank: 3, prevRank: 3, name: 'Coco Gauff', country: 'USA', points: 6530, tournaments: 21, change: 0 },
//       { rank: 4, prevRank: 4, name: 'Jasmine Paolini', country: 'Italy', points: 5344, tournaments: 22, change: 0 },
//       { rank: 5, prevRank: 5, name: 'Zheng Qinwen', country: 'China', points: 5340, tournaments: 23, change: 0 },
//       { rank: 6, prevRank: 7, name: 'Elena Rybakina', country: 'Kazakhstan', points: 5171, tournaments: 18, change: 1 },
//       { rank: 7, prevRank: 6, name: 'Jessica Pegula', country: 'USA', points: 4705, tournaments: 20, change: -1 },
//       { rank: 8, prevRank: 8, name: 'Emma Navarro', country: 'USA', points: 3698, tournaments: 23, change: 0 },
//       { rank: 9, prevRank: 10, name: 'Daria Kasatkina', country: 'Russia', points: 3368, tournaments: 24, change: 1 },
//       { rank: 10, prevRank: 9, name: 'Barbora Krejčíková', country: 'Czech Republic', points: 3214, tournaments: 19, change: -1 },
//       { rank: 11, prevRank: 11, name: 'Danielle Collins', country: 'USA', points: 3177, tournaments: 20, change: 0 },
//       { rank: 12, prevRank: 12, name: 'Paula Badosa', country: 'Spain', points: 3145, tournaments: 22, change: 0 },
//       { rank: 13, prevRank: 14, name: 'Diana Shnaider', country: 'Russia', points: 3020, tournaments: 26, change: 1 },
//       { rank: 14, prevRank: 13, name: 'Anna Kalinskaya', country: 'Russia', points: 2891, tournaments: 23, change: -1 },
//       { rank: 15, prevRank: 15, name: 'Beatriz Haddad Maia', country: 'Brazil', points: 2758, tournaments: 25, change: 0 }
//     ],
//     'mens-doubles': [
//       { rank: 1, prevRank: 1, name: 'Marcelo Arevalo / Mate Pavic', country: 'ESA / CRO', points: 7960, change: 0 },
//       { rank: 2, prevRank: 2, name: 'Harri Heliovaara / Henry Patten', country: 'FIN / GBR', points: 6420, change: 0 },
//       { rank: 3, prevRank: 3, name: 'Marcel Granollers / Horacio Zeballos', country: 'ESP / ARG', points: 6190, change: 0 },
//       { rank: 4, prevRank: 5, name: 'Simone Bolelli / Andrea Vavassori', country: 'ITA / ITA', points: 5630, change: 1 },
//       { rank: 5, prevRank: 4, name: 'Max Purcell / Jordan Thompson', country: 'AUS / AUS', points: 5570, change: -1 },
//       { rank: 6, prevRank: 6, name: 'Rajeev Ram / Joe Salisbury', country: 'USA / GBR', points: 4880, change: 0 },
//       { rank: 7, prevRank: 7, name: 'Kevin Krawietz / Tim Puetz', country: 'GER / GER', points: 4235, change: 0 },
//       { rank: 8, prevRank: 8, name: 'Austin Krajicek / Rajeev Ram', country: 'USA / USA', points: 3940, change: 0 },
//       { rank: 9, prevRank: 9, name: 'Wesley Koolhof / Nikola Mektic', country: 'NED / CRO', points: 3815, change: 0 },
//       { rank: 10, prevRank: 11, name: 'Santiago Gonzalez / Edouard Roger-Vasselin', country: 'MEX / FRA', points: 3610, change: 1 }
//     ],
//     'womens-doubles': [
//       { rank: 1, prevRank: 1, name: 'Gabriela Dabrowski / Erin Routliffe', country: 'CAN / NZL', points: 9225, change: 0 },
//       { rank: 2, prevRank: 3, name: 'Katerina Siniakova / Taylor Townsend', country: 'CZE / USA', points: 8330, change: 1 },
//       { rank: 3, prevRank: 2, name: 'Sara Errani / Jasmine Paolini', country: 'ITA / ITA', points: 8030, change: -1 },
//       { rank: 4, prevRank: 4, name: 'Hao-Ching Chan / Veronika Kudermetova', country: 'TPE / RUS', points: 6790, change: 0 },
//       { rank: 5, prevRank: 5, name: 'Su-Wei Hsieh / Elise Mertens', country: 'TPE / BEL', points: 5855, change: 0 },
//       { rank: 6, prevRank: 6, name: 'Nicole Melichar-Martinez / Ellen Perez', country: 'USA / AUS', points: 5320, change: 0 },
//       { rank: 7, prevRank: 7, name: 'Lyudmyla Kichenok / Jelena Ostapenko', country: 'UKR / LAT', points: 4780, change: 0 },
//       { rank: 8, prevRank: 9, name: 'Desirae Krawczyk / Caroline Dolehide', country: 'USA / USA', points: 4565, change: 1 },
//       { rank: 9, prevRank: 8, name: 'Laura Siegemund / Vera Zvonareva', country: 'GER / RUS', points: 4410, change: -1 },
//       { rank: 10, prevRank: 10, name: 'Kristina Mladenovic / Zhang Shuai', country: 'FRA / CHN', points: 4120, change: 0 }
//     ]
//   };

//   const currentRankings = rankingsData[selectedCategory];

//   const getChangeIcon = (change) => {
//     if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
//     if (change < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
//     return <Minus className="h-4 w-4 text-gray-400" />;
//   };

//   const getChangeColor = (change) => {
//     if (change > 0) return 'text-green-600';
//     if (change < 0) return 'text-red-600';
//     return 'text-gray-400';
//   };

//   const handleStoryClick = (id) => {
//     navigate(`/details/tennis/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
//       {/* Main Content Grid - Consistent with LiveScores & GrandSlamDetail */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Left: Rankings Main Section */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Hero Section */}
//             <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-xl shadow-xl p-8">
//               <div className="flex items-center gap-4 mb-4">
//                 <Trophy className="h-12 w-12" />
//                 <div>
//                   <h1 className="text-3xl sm:text-4xl font-bold">Live Player Rankings</h1>
//                   <p className="text-lg opacity-90 mt-1">Official ATP & WTA world rankings • Updated January 2026</p>
//                 </div>
//               </div>
//             </div>

//             {/* Category Filters */}
//             <div className="bg-white rounded-xl shadow p-5">
//               <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
//                 {categories.map((category) => (
//                   <button
//                     key={category.id}
//                     onClick={() => setSelectedCategory(category.id)}
//                     className={`px-5 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all ${
//                       selectedCategory === category.id
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {category.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Rankings Table */}
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="text-left py-4 px-6 font-semibold text-gray-700">Rank</th>
//                       <th className="text-left py-4 px-6 font-semibold text-gray-700">Player</th>
//                       <th className="text-left py-4 px-6 font-semibold text-gray-700">Country</th>
//                       <th className="text-center py-4 px-6 font-semibold text-gray-700">Points</th>
//                       {selectedCategory.includes('singles') && (
//                         <th className="text-center py-4 px-6 font-semibold text-gray-700">Tournaments</th>
//                       )}
//                       <th className="text-center py-4 px-6 font-semibold text-gray-700">Change</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {currentRankings.map((player) => (
//                       <tr key={player.rank} className="hover:bg-gray-50 transition-colors">
//                         <td className="py-5 px-6">
//                           <div className="flex items-center gap-3">
//                             <span className="text-xl font-bold text-gray-800">{player.rank}</span>
//                             {player.rank <= 3 && (
//                               <Award className={`h-6 w-6 ${
//                                 player.rank === 1 ? 'text-yellow-500' :
//                                 player.rank === 2 ? 'text-gray-400' :
//                                 'text-amber-700'
//                               }`} />
//                             )}
//                           </div>
//                         </td>
//                         <td className="py-5 px-6">
//                           <span className="font-semibold text-gray-800">{player.name}</span>
//                         </td>
//                         <td className="py-5 px-6">
//                           <span className="text-gray-600">{player.country}</span>
//                         </td>
//                         <td className="py-5 px-6 text-center">
//                           <span className="font-medium text-gray-800">{player.points.toLocaleString()}</span>
//                         </td>
//                         {selectedCategory.includes('singles') && player.tournaments && (
//                           <td className="py-5 px-6 text-center">
//                             <span className="text-gray-600">{player.tournaments}</span>
//                           </td>
//                         )}
//                         <td className="py-5 px-6">
//                           <div className="flex items-center justify-center gap-2">
//                             {getChangeIcon(player.change)}
//                             <span className={`font-medium ${getChangeColor(player.change)}`}>
//                               {Math.abs(player.change) === 0 ? '-' : Math.abs(player.change)}
//                             </span>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Info Section */}
//             <div className="bg-blue-50 rounded-xl p-6">
//               <h3 className="font-semibold text-lg mb-3">About Rankings</h3>
//               <div className="space-y-2 text-gray-700 text-sm">
//                 <p>
//                   <strong>ATP & WTA Rankings:</strong> Based on a rolling 52-week system. Points are earned from tournament performance.
//                 </p>
//                 <p>
//                   Rankings are updated every Monday (or after major tournaments).
//                 </p>
//                 <p>
//                   Last update: January 2026
//                 </p>
//               </div>
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

// export default Rankings;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, TrendingDown, Minus, Trophy, Award } from 'lucide-react';

import TopTennisStories from '../../data/TopTennisStories.js';
import LatestNews from '../../data/LatestNews.js';
import { tennisRankings } from '../../data/TennisRankings.js';

const Rankings = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('mens-singles');

  const categories = [
    { id: 'mens-singles', label: "Men's Singles (ATP)" },
    { id: 'womens-singles', label: "Women's Singles (WTA)" },
    { id: 'mens-doubles', label: "Men's Doubles" },
    { id: 'womens-doubles', label: "Women's Doubles" }
  ];

  // Get rankings from external data file
  const currentRankings = tennisRankings[selectedCategory] || [];

  const getChangeIcon = (change) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <Minus className="h-4 w-4 text-gray-400" />;
  };

  const getChangeColor = (change) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-400';
  };

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

          {/* Left: Rankings Main Section */}
          <div className="lg:col-span-8 space-y-6">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-xl shadow-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Trophy className="h-12 w-12" />
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold">Live Player Rankings</h1>
                  <p className="text-lg opacity-90 mt-1">Official ATP & WTA world rankings • Updated January 2026</p>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="bg-white rounded-xl shadow p-5">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-5 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Rankings Table */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700">Rank</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700">Player</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700">Country</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-700">Points</th>
                      {selectedCategory.includes('singles') && (
                        <th className="text-center py-4 px-6 font-semibold text-gray-700">Tournaments</th>
                      )}
                      <th className="text-center py-4 px-6 font-semibold text-gray-700">Change</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {currentRankings.map((player) => (
                      <tr key={player.rank} className="hover:bg-gray-50 transition-colors">
                        <td className="py-5 px-6">
                          <div className="flex items-center gap-3">
                            <span className="text-xl font-bold text-gray-800">{player.rank}</span>
                            {player.rank <= 3 && (
                              <Award className={`h-6 w-6 ${
                                player.rank === 1 ? 'text-yellow-500' :
                                player.rank === 2 ? 'text-gray-400' :
                                'text-amber-700'
                              }`} />
                            )}
                          </div>
                        </td>
                        <td className="py-5 px-6">
                          <span className="font-semibold text-gray-800">{player.name}</span>
                        </td>
                        <td className="py-5 px-6">
                          <span className="text-gray-600">{player.country}</span>
                        </td>
                        <td className="py-5 px-6 text-center">
                          <span className="font-medium text-gray-800">{player.points.toLocaleString()}</span>
                        </td>
                        {selectedCategory.includes('singles') && player.tournaments && (
                          <td className="py-5 px-6 text-center">
                            <span className="text-gray-600">{player.tournaments}</span>
                          </td>
                        )}
                        <td className="py-5 px-6">
                          <div className="flex items-center justify-center gap-2">
                            {getChangeIcon(player.change)}
                            <span className={`font-medium ${getChangeColor(player.change)}`}>
                              {Math.abs(player.change) === 0 ? '-' : Math.abs(player.change)}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Info Section */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">About Rankings</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p>
                  <strong>ATP & WTA Rankings:</strong> Based on a rolling 52-week system. Points are earned from tournament performance.
                </p>
                <p>
                  Rankings are updated every Monday (or after major tournaments).
                </p>
                <p>
                  Last update: January 2026
                </p>
              </div>
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

export default Rankings;