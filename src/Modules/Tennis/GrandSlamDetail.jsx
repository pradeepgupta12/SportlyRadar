// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { ArrowLeft, Trophy, Calendar, MapPin, Users, DollarSign, Award, TrendingUp } from 'lucide-react';

// const GrandSlamDetail = () => {
//   const { slamId } = useParams();
//   const [activeTab, setActiveTab] = useState('overview');

//   const slamData = {
//     'australian-open': {
//       name: 'Australian Open',
//       location: 'Melbourne, Australia',
//       surface: 'Hard Court (Plexicushion)',
//       month: 'January',
//       venue: 'Melbourne Park',
//       prize: '$86.5 Million',
//       color: 'from-blue-600 to-blue-800',
//       founded: 1905,
//       courts: 24,
//       mainCourt: 'Rod Laver Arena (capacity: 14,820)',
//       description: 'The Australian Open is the first of the four Grand Slam tennis tournaments held each year. Known for its extremely hot conditions, it features a retractable roof on its main courts.',
//       traditions: [
//         'Extreme heat policy with roof closures',
//         'Australia Day finals',
//         'Blue hard courts'
//       ],
//       records: {
//         mostTitles: {
//           mens: 'Novak Djokovic (10 titles)',
//           womens: 'Margaret Court (11 titles)'
//         },
//         longestMatch: '5h 53m - Rafael Nadal vs Novak Djokovic (2012 Final)'
//       },
//       draws: [
//         { category: "Men's Singles", players: 128 },
//         { category: "Women's Singles", players: 128 },
//         { category: "Men's Doubles", teams: 64 },
//         { category: "Women's Doubles", teams: 64 },
//         { category: "Mixed Doubles", teams: 32 }
//       ],
//       pastChampions: [
//         { year: 2024, mens: 'Jannik Sinner', womens: 'Aryna Sabalenka' },
//         { year: 2023, mens: 'Novak Djokovic', womens: 'Aryna Sabalenka' },
//         { year: 2022, mens: 'Rafael Nadal', womens: 'Ashleigh Barty' },
//         { year: 2021, mens: 'Novak Djokovic', womens: 'Naomi Osaka' },
//         { year: 2020, mens: 'Novak Djokovic', womens: 'Sofia Kenin' }
//       ]
//     },
//     'french-open': {
//       name: 'French Open',
//       location: 'Paris, France',
//       surface: 'Clay Court (Red Clay)',
//       month: 'May - June',
//       venue: 'Stade Roland Garros',
//       prize: '€49.6 Million',
//       color: 'from-orange-600 to-red-700',
//       founded: 1891,
//       courts: 20,
//       mainCourt: 'Court Philippe-Chatrier (capacity: 15,225)',
//       description: 'The French Open is the premier clay court championship in the world and the only Grand Slam tournament currently held on this surface. Known for its distinctive red clay.',
//       traditions: [
//         'Red clay courts',
//         'Slower ball speed favoring baseline players',
//         'Historic wooden scoreboards'
//       ],
//       records: {
//         mostTitles: {
//           mens: 'Rafael Nadal (14 titles)',
//           womens: 'Chris Evert (7 titles)'
//         },
//         longestMatch: '6h 33m - Fabio Fognini vs Alberto Ramos (2018)'
//       },
//       draws: [
//         { category: "Men's Singles", players: 128 },
//         { category: "Women's Singles", players: 128 },
//         { category: "Men's Doubles", teams: 64 },
//         { category: "Women's Doubles", teams: 64 },
//         { category: "Mixed Doubles", teams: 32 }
//       ],
//       pastChampions: [
//         { year: 2024, mens: 'Carlos Alcaraz', womens: 'Iga Świątek' },
//         { year: 2023, mens: 'Novak Djokovic', womens: 'Iga Świątek' },
//         { year: 2022, mens: 'Rafael Nadal', womens: 'Iga Świątek' },
//         { year: 2021, mens: 'Novak Djokovic', womens: 'Barbora Krejčíková' },
//         { year: 2020, mens: 'Rafael Nadal', womens: 'Iga Świątek' }
//       ]
//     },
//     'wimbledon': {
//       name: 'Wimbledon',
//       location: 'London, England',
//       surface: 'Grass Court',
//       month: 'June - July',
//       venue: 'All England Lawn Tennis and Croquet Club',
//       prize: '£44.7 Million',
//       color: 'from-green-600 to-green-800',
//       founded: 1877,
//       courts: 18,
//       mainCourt: 'Centre Court (capacity: 15,000)',
//       description: 'The Championships, Wimbledon, is the oldest tennis tournament in the world and is widely regarded as the most prestigious. It is the only major still played on grass.',
//       traditions: [
//         'Strict all-white dress code',
//         'Strawberries and cream',
//         'Royal patronage',
//         'No play on Middle Sunday'
//       ],
//       records: {
//         mostTitles: {
//           mens: 'Roger Federer (8 titles)',
//           womens: 'Martina Navratilova (9 titles)'
//         },
//         longestMatch: '11h 5m - John Isner vs Nicolas Mahut (2010)'
//       },
//       draws: [
//         { category: "Men's Singles", players: 128 },
//         { category: "Women's Singles", players: 128 },
//         { category: "Men's Doubles", teams: 64 },
//         { category: "Women's Doubles", teams: 64 },
//         { category: "Mixed Doubles", teams: 48 }
//       ],
//       pastChampions: [
//         { year: 2024, mens: 'Carlos Alcaraz', womens: 'Barbora Krejčíková' },
//         { year: 2023, mens: 'Carlos Alcaraz', womens: 'Markéta Vondroušová' },
//         { year: 2022, mens: 'Novak Djokovic', womens: 'Elena Rybakina' },
//         { year: 2021, mens: 'Novak Djokovic', womens: 'Ashleigh Barty' },
//         { year: 2019, mens: 'Novak Djokovic', womens: 'Simona Halep' }
//       ]
//     },
//     'us-open': {
//       name: 'US Open',
//       location: 'New York, USA',
//       surface: 'Hard Court (DecoTurf)',
//       month: 'August - September',
//       venue: 'USTA Billie Jean King National Tennis Center',
//       prize: '$65 Million',
//       color: 'from-blue-800 to-indigo-900',
//       founded: 1881,
//       courts: 22,
//       mainCourt: 'Arthur Ashe Stadium (capacity: 23,771)',
//       description: 'The US Open is the final Grand Slam tournament of the year. Known for its electric atmosphere and night sessions, it features the largest tennis stadium in the world.',
//       traditions: [
//         'Night matches under lights',
//         'Rowdy, energetic crowds',
//         'Blue hard courts',
//         'Labor Day weekend finals'
//       ],
//       records: {
//         mostTitles: {
//           mens: 'Jimmy Connors, Pete Sampras, Roger Federer (5 titles each)',
//           womens: 'Molla Bjurstedt Mallory (8 titles)'
//         },
//         longestMatch: '5h 26m - Stefan Edberg vs Michael Chang (1992)'
//       },
//       draws: [
//         { category: "Men's Singles", players: 128 },
//         { category: "Women's Singles", players: 128 },
//         { category: "Men's Doubles", teams: 64 },
//         { category: "Women's Doubles", teams: 64 },
//         { category: "Mixed Doubles", teams: 32 }
//       ],
//       pastChampions: [
//         { year: 2024, mens: 'Jannik Sinner', womens: 'Aryna Sabalenka' },
//         { year: 2023, mens: 'Novak Djokovic', womens: 'Coco Gauff' },
//         { year: 2022, mens: 'Carlos Alcaraz', womens: 'Iga Świątek' },
//         { year: 2021, mens: 'Daniil Medvedev', womens: 'Emma Raducanu' },
//         { year: 2020, mens: 'Dominic Thiem', womens: 'Naomi Osaka' }
//       ]
//     }
//   };

//   const slam = slamData[slamId];

//   if (!slam) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-xl text-gray-600">Grand Slam not found</p>
//       </div>
//     );
//   }

//   const tabs = [
//     { id: 'overview', label: 'Overview' },
//     { id: 'draws', label: 'Draws' },
//     { id: 'champions', label: 'Past Champions' },
//     { id: 'records', label: 'Records' }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Back Button */}
//       <div className="max-w-7xl mx-auto px-4 pt-6">
//         <Link
//           to="/tennis/grandslams"
//           className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
//         >
//           <ArrowLeft className="h-4 w-4" />
//           Back to Grand Slams
//         </Link>
//       </div>

//       {/* Hero Section */}
//       <div className={`bg-gradient-to-r ${slam.color} text-white py-16 mt-4`}>
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-4 mb-4">
//             <Trophy className="h-12 w-12" />
//             <div>
//               <h1 className="text-4xl font-bold mb-2">{slam.name}</h1>
//               <div className="flex items-center gap-4 text-lg opacity-90">
//                 <span className="flex items-center gap-2">
//                   <MapPin className="h-5 w-5" />
//                   {slam.location}
//                 </span>
//                 <span className="flex items-center gap-2">
//                   <Calendar className="h-5 w-5" />
//                   {slam.month}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Quick Stats */}
//       <div className="max-w-7xl mx-auto px-4 -mt-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <Calendar className="h-6 w-6 text-blue-600 mb-2" />
//             <p className="text-2xl font-bold text-gray-800">{slam.founded}</p>
//             <p className="text-sm text-gray-600">Founded</p>
//           </div>
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <DollarSign className="h-6 w-6 text-green-600 mb-2" />
//             <p className="text-2xl font-bold text-gray-800">{slam.prize}</p>
//             <p className="text-sm text-gray-600">Prize Money</p>
//           </div>
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <MapPin className="h-6 w-6 text-red-600 mb-2" />
//             <p className="text-xl font-bold text-gray-800">{slam.venue}</p>
//             <p className="text-sm text-gray-600">Venue</p>
//           </div>
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <Award className="h-6 w-6 text-purple-600 mb-2" />
//             <p className="text-2xl font-bold text-gray-800">{slam.surface}</p>
//             <p className="text-sm text-gray-600">Surface</p>
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
//               <h2 className="text-2xl font-bold mb-4">About {slam.name}</h2>
//               <p className="text-gray-600 mb-6">{slam.description}</p>
              
//               <div className="grid md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <h3 className="font-semibold text-lg mb-3">Venue Details</h3>
//                   <div className="space-y-2 text-gray-600">
//                     <p><span className="font-medium">Main Court:</span> {slam.mainCourt}</p>
//                     <p><span className="font-medium">Total Courts:</span> {slam.courts}</p>
//                     <p><span className="font-medium">Surface:</span> {slam.surface}</p>
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg mb-3">Traditions</h3>
//                   <ul className="space-y-2">
//                     {slam.traditions.map((tradition, idx) => (
//                       <li key={idx} className="flex items-start gap-2 text-gray-600">
//                         <span className="text-blue-600 mt-1">•</span>
//                         {tradition}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === 'draws' && (
//           <div className="bg-white rounded-xl shadow-sm p-8">
//             <h2 className="text-2xl font-bold mb-6">Tournament Draws</h2>
//             <div className="grid md:grid-cols-2 gap-4">
//               {slam.draws.map((draw, idx) => (
//                 <div key={idx} className="border border-gray-200 rounded-lg p-4">
//                   <h3 className="font-semibold text-lg mb-2">{draw.category}</h3>
//                   <p className="text-gray-600">
//                     {draw.players ? `${draw.players} Players` : `${draw.teams} Teams`}
//                   </p>
//                 </div>
//               ))}
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
//                     <th className="text-left py-3 px-4">Men's Singles</th>
//                     <th className="text-left py-3 px-4">Women's Singles</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {slam.pastChampions.map((champion, idx) => (
//                     <tr key={idx} className="border-b hover:bg-gray-50">
//                       <td className="py-3 px-4 font-semibold">{champion.year}</td>
//                       <td className="py-3 px-4">{champion.mens}</td>
//                       <td className="py-3 px-4">{champion.womens}</td>
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
//             <div className="space-y-6">
//               <div>
//                 <h3 className="font-semibold text-lg mb-3">Most Titles</h3>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div className="border border-gray-200 rounded-lg p-4">
//                     <p className="text-sm text-gray-500 mb-1">Men's Singles</p>
//                     <p className="font-semibold text-lg">{slam.records.mostTitles.mens}</p>
//                   </div>
//                   <div className="border border-gray-200 rounded-lg p-4">
//                     <p className="text-sm text-gray-500 mb-1">Women's Singles</p>
//                     <p className="font-semibold text-lg">{slam.records.mostTitles.womens}</p>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg mb-3">Longest Match</h3>
//                 <div className="border border-gray-200 rounded-lg p-4">
//                   <p className="text-gray-700">{slam.records.longestMatch}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GrandSlamDetail;


import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Calendar, MapPin, Award } from 'lucide-react';

const GrandSlamDetail = () => {
  const { slamId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const slamData = {
    'australian-open': {
      name: 'Australian Open',
      location: 'Melbourne, Australia',
      surface: 'Hard',
      month: 'January',
      venue: 'Melbourne Park',
      prize: 'A$96.5M',
      color: 'from-blue-600 to-blue-800',
      founded: 1905,
      mainCourt: 'Rod Laver Arena (14,820)',
      description: 'The Happy Slam – first major of the year, known for extreme heat and retractable roofs.',
      traditions: ['Extreme heat policy', 'Blue courts', 'Australia Day finals'],
      records: {
        mostTitles: { mens: 'Novak Djokovic (10)', womens: 'Margaret Court (11)' },
        longestMatch: '5h 53m (Nadal vs Djokovic, 2012 Final)'
      },
      draws: [
        { category: "Men's Singles", size: 128 },
        { category: "Women's Singles", size: 128 },
        { category: "Men's Doubles", size: 64 },
        { category: "Women's Doubles", size: 64 },
        { category: 'Mixed Doubles', size: 32 }
      ],
      pastChampions: [
        { year: 2025, mens: 'Jannik Sinner', womens: 'Madison Keys' },
        { year: 2024, mens: 'Jannik Sinner', womens: 'Aryna Sabalenka' },
        { year: 2023, mens: 'Novak Djokovic', womens: 'Aryna Sabalenka' },
        { year: 2022, mens: 'Rafael Nadal', womens: 'Ashleigh Barty' },
        { year: 2021, mens: 'Novak Djokovic', womens: 'Naomi Osaka' }
      ]
    },
    'french-open': {
      name: 'French Open',
      location: 'Paris, France',
      surface: 'Clay',
      month: 'May–June',
      venue: 'Roland Garros',
      prize: '€56M+',
      color: 'from-orange-600 to-red-700',
      founded: 1891,
      mainCourt: 'Philippe-Chatrier (15,225)',
      description: 'The ultimate clay test – slow red courts favouring baseline grinders.',
      traditions: ['Red clay', 'Slow pace', 'Historic venue'],
      records: {
        mostTitles: { mens: 'Rafael Nadal (14)', womens: 'Chris Evert (7)' },
        longestMatch: '6h 33m (Fognini vs Ramos, 2018)'
      },
      draws: [
        { category: "Men's Singles", size: 128 },
        { category: "Women's Singles", size: 128 },
        { category: "Men's Doubles", size: 64 },
        { category: "Women's Doubles", size: 64 },
        { category: 'Mixed Doubles', size: 32 }
      ],
      pastChampions: [
        { year: 2025, mens: 'Carlos Alcaraz', womens: 'Coco Gauff' },
        { year: 2024, mens: 'Carlos Alcaraz', womens: 'Iga Świątek' },
        { year: 2023, mens: 'Novak Djokovic', womens: 'Iga Świątek' },
        { year: 2022, mens: 'Rafael Nadal', womens: 'Iga Świątek' },
        { year: 2021, mens: 'Novak Djokovic', womens: 'Barbora Krejčíková' }
      ]
    },
    'wimbledon': {
      name: 'Wimbledon',
      location: 'London, England',
      surface: 'Grass',
      month: 'June–July',
      venue: 'All England Club',
      prize: '£53.5M',
      color: 'from-green-600 to-green-800',
      founded: 1877,
      mainCourt: 'Centre Court (15,000)',
      description: 'The oldest major – steeped in tradition on fast grass.',
      traditions: ['All-white dress code', 'Strawberries & cream', 'Royal Box'],
      records: {
        mostTitles: { mens: 'Roger Federer (8)', womens: 'Martina Navratilova (9)' },
        longestMatch: '11h 5m (Isner vs Mahut, 2010)'
      },
      draws: [
        { category: "Men's Singles", size: 128 },
        { category: "Women's Singles", size: 128 },
        { category: "Men's Doubles", size: 64 },
        { category: "Women's Doubles", size: 64 },
        { category: 'Mixed Doubles', size: 48 }
      ],
      pastChampions: [
        { year: 2025, mens: 'Jannik Sinner', womens: 'Iga Świątek' },
        { year: 2024, mens: 'Carlos Alcaraz', womens: 'Barbora Krejčíková' },
        { year: 2023, mens: 'Carlos Alcaraz', womens: 'Markéta Vondroušová' },
        { year: 2022, mens: 'Novak Djokovic', womens: 'Elena Rybakina' },
        { year: 2021, mens: 'Novak Djokovic', womens: 'Ashleigh Barty' }
      ]
    },
    'us-open': {
      name: 'US Open',
      location: 'New York, USA',
      surface: 'Hard',
      month: 'Aug–Sept',
      venue: 'USTA Billie Jean King NTC',
      prize: '$90M',
      color: 'from-blue-800 to-indigo-900',
      founded: 1881,
      mainCourt: 'Arthur Ashe (23,771)',
      description: 'Electric night sessions in the world’s largest tennis stadium.',
      traditions: ['Night matches', 'Rowdy crowds', 'Blue courts'],
      records: {
        mostTitles: { mens: 'Connors/Sampras/Federer (5)', womens: 'Molla Mallory (8)' },
        longestMatch: '5h 26m (Edberg vs Chang, 1992)'
      },
      draws: [
        { category: "Men's Singles", size: 128 },
        { category: "Women's Singles", size: 128 },
        { category: "Men's Doubles", size: 64 },
        { category: "Women's Doubles", size: 64 },
        { category: 'Mixed Doubles', size: 32 }
      ],
      pastChampions: [
        { year: 2025, mens: 'Carlos Alcaraz', womens: 'Aryna Sabalenka' },
        { year: 2024, mens: 'Jannik Sinner', womens: 'Aryna Sabalenka' },
        { year: 2023, mens: 'Novak Djokovic', womens: 'Coco Gauff' },
        { year: 2022, mens: 'Carlos Alcaraz', womens: 'Iga Świątek' },
        { year: 2021, mens: 'Daniil Medvedev', womens: 'Emma Raducanu' }
      ]
    }
  };

  const slam = slamData[slamId];

  if (!slam) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Grand Slam not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Back + Compact Header */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link to="/tennis/grandslams" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Grand Slams
        </Link>

        <div className={`bg-gradient-to-r ${slam.color} text-white rounded-xl p-6 mt-4`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Trophy className="w-10 h-10" />
              <div>
                <h1 className="text-3xl font-bold">{slam.name}</h1>
                <div className="flex items-center gap-4 text-sm opacity-90 mt-1">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{slam.location}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{slam.month}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <p className="text-xs text-gray-600">Founded</p>
            <p className="text-xl font-bold">{slam.founded}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <p className="text-xs text-gray-600">Prize Money</p>
            <p className="text-xl font-bold text-green-600">{slam.prize}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <p className="text-xs text-gray-600">Surface</p>
            <p className="text-xl font-bold">{slam.surface}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <p className="text-xs text-gray-600">Main Court</p>
            <p className="text-lg font-bold">{slam.mainCourt}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <div className="flex gap-3 overflow-x-auto">
          {['overview', 'draws', 'champions', 'records'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab === 'overview' ? 'Overview' : tab === 'draws' ? 'Draws' : tab === 'champions' ? 'Recent Champions' : 'Records'}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-5">
              <h3 className="text-lg font-semibold mb-3">About</h3>
              <p className="text-gray-600 text-sm">{slam.description}</p>
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Traditions</p>
                <div className="flex flex-wrap gap-2">
                  {slam.traditions.map((t, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-5">
              <h3 className="text-lg font-semibold mb-3">Venue</h3>
              <p className="text-sm text-gray-600">{slam.venue}</p>
              <p className="text-sm text-gray-600 mt-2">Main Court: {slam.mainCourt}</p>
            </div>
          </div>
        )}

        {activeTab === 'draws' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {slam.draws.map((d, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-4 text-center">
                <p className="text-sm font-medium">{d.category}</p>
                <p className="text-xl font-bold mt-1">{d.size} {d.size > 64 ? 'Players' : 'Teams'}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'champions' && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4">Year</th>
                  <th className="text-left py-3 px-4">Men's</th>
                  <th className="text-left py-3 px-4">Women's</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {slam.pastChampions.map((c, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{c.year}</td>
                    <td className="py-3 px-4">{c.mens}</td>
                    <td className="py-3 px-4">{c.womens}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'records' && (
          <div className="space-y-5">
            <div className="bg-white rounded-xl shadow-md p-5">
              <h3 className="text-lg font-semibold mb-3">Most Singles Titles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">Men's</p>
                  <p className="font-bold">{slam.records.mostTitles.mens}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">Women's</p>
                  <p className="font-bold">{slam.records.mostTitles.womens}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-5">
              <h3 className="text-lg font-semibold mb-3">Longest Match</h3>
              <p className="text-gray-700">{slam.records.longestMatch}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GrandSlamDetail;