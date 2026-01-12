// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Trophy, Calendar, MapPin, DollarSign, ChevronRight } from 'lucide-react';

// const Tours = () => {
//   const [selectedTour, setSelectedTour] = useState('atp');

//   const tourTypes = [
//     { id: 'atp', label: 'ATP Tour (Men)' },
//     { id: 'wta', label: 'WTA Tour (Women)' }
//   ];

//   const atpTournaments = [
//     {
//       id: 'atp-finals',
//       name: 'ATP Finals',
//       category: 'Year-End Championship',
//       location: 'Turin, Italy',
//       surface: 'Hard (Indoor)',
//       month: 'November',
//       prize: '$15 Million',
//       points: '1500',
//       participants: 8,
//       description: 'The season-ending championship featuring the top 8 singles players and doubles teams.'
//     },
//     {
//       id: 'indian-wells',
//       name: 'BNP Paribas Open',
//       category: 'ATP Masters 1000',
//       location: 'Indian Wells, USA',
//       surface: 'Hard',
//       month: 'March',
//       prize: '$8.8 Million',
//       points: '1000',
//       participants: 96,
//       description: 'Also known as the "fifth Grand Slam" due to its prestige and large draw.'
//     },
//     {
//       id: 'miami-open',
//       name: 'Miami Open',
//       category: 'ATP Masters 1000',
//       location: 'Miami, USA',
//       surface: 'Hard',
//       month: 'March-April',
//       prize: '$8.8 Million',
//       points: '1000',
//       participants: 96,
//       description: 'One of the premier hard court tournaments held annually in South Florida.'
//     },
//     {
//       id: 'monte-carlo',
//       name: 'Monte-Carlo Masters',
//       category: 'ATP Masters 1000',
//       location: 'Monte Carlo, Monaco',
//       surface: 'Clay',
//       month: 'April',
//       prize: '€5.2 Million',
//       points: '1000',
//       participants: 56,
//       description: 'The first clay court Masters 1000 event of the season.'
//     },
//     {
//       id: 'madrid',
//       name: 'Madrid Open',
//       category: 'ATP Masters 1000',
//       location: 'Madrid, Spain',
//       surface: 'Clay',
//       month: 'April-May',
//       prize: '€7.7 Million',
//       points: '1000',
//       participants: 56,
//       description: 'Held at the Caja Mágica, known for its altitude affecting play.'
//     },
//     {
//       id: 'rome',
//       name: 'Italian Open',
//       category: 'ATP Masters 1000',
//       location: 'Rome, Italy',
//       surface: 'Clay',
//       month: 'May',
//       prize: '€7.4 Million',
//       points: '1000',
//       participants: 56,
//       description: 'A key clay court event leading up to the French Open.'
//     },
//     {
//       id: 'canada',
//       name: 'Canadian Open',
//       category: 'ATP Masters 1000',
//       location: 'Toronto/Montreal, Canada',
//       surface: 'Hard',
//       month: 'August',
//       prize: '$6.8 Million',
//       points: '1000',
//       participants: 56,
//       description: 'Alternates between Toronto and Montreal each year.'
//     },
//     {
//       id: 'cincinnati',
//       name: 'Cincinnati Masters',
//       category: 'ATP Masters 1000',
//       location: 'Cincinnati, USA',
//       surface: 'Hard',
//       month: 'August',
//       prize: '$6.8 Million',
//       points: '1000',
//       participants: 56,
//       description: 'The last major tournament before the US Open.'
//     },
//     {
//       id: 'shanghai',
//       name: 'Shanghai Masters',
//       category: 'ATP Masters 1000',
//       location: 'Shanghai, China',
//       surface: 'Hard',
//       month: 'October',
//       prize: '$8.8 Million',
//       points: '1000',
//       participants: 56,
//       description: 'The only Masters 1000 event held in Asia.'
//     },
//     {
//       id: 'paris',
//       name: 'Paris Masters',
//       category: 'ATP Masters 1000',
//       location: 'Paris, France',
//       surface: 'Hard (Indoor)',
//       month: 'October-November',
//       prize: '€5.4 Million',
//       points: '1000',
//       participants: 56,
//       description: 'The final Masters 1000 event before the ATP Finals.'
//     }
//   ];

//   const wtaTournaments = [
//     {
//       id: 'wta-finals',
//       name: 'WTA Finals',
//       category: 'Year-End Championship',
//       location: 'Riyadh, Saudi Arabia',
//       surface: 'Hard (Indoor)',
//       month: 'November',
//       prize: '$15 Million',
//       points: '1500',
//       participants: 8,
//       description: 'The season-ending championship featuring the top 8 singles players and doubles teams.'
//     },
//     {
//       id: 'indian-wells-wta',
//       name: 'BNP Paribas Open',
//       category: 'WTA 1000',
//       location: 'Indian Wells, USA',
//       surface: 'Hard',
//       month: 'March',
//       prize: '$8.8 Million',
//       points: '1000',
//       participants: 96,
//       description: 'One of the most prestigious combined ATP/WTA events.'
//     },
//     {
//       id: 'miami-open-wta',
//       name: 'Miami Open',
//       category: 'WTA 1000',
//       location: 'Miami, USA',
//       surface: 'Hard',
//       month: 'March-April',
//       prize: '$8.8 Million',
//       points: '1000',
//       participants: 96,
//       description: 'The Sunshine Double with Indian Wells, held in South Florida.'
//     },
//     {
//       id: 'madrid-wta',
//       name: 'Madrid Open',
//       category: 'WTA 1000',
//       location: 'Madrid, Spain',
//       surface: 'Clay',
//       month: 'April-May',
//       prize: '€7.7 Million',
//       points: '1000',
//       participants: 56,
//       description: 'A key clay court event in the European spring season.'
//     },
//     {
//       id: 'rome-wta',
//       name: 'Italian Open',
//       category: 'WTA 1000',
//       location: 'Rome, Italy',
//       surface: 'Clay',
//       month: 'May',
//       prize: '€7.4 Million',
//       points: '1000',
//       participants: 56,
//       description: 'The premier clay court event before the French Open.'
//     },
//     {
//       id: 'dubai',
//       name: 'Dubai Tennis Championships',
//       category: 'WTA 1000',
//       location: 'Dubai, UAE',
//       surface: 'Hard',
//       month: 'February',
//       prize: '$3 Million',
//       points: '1000',
//       participants: 48,
//       description: 'A prestigious Middle East tournament.'
//     },
//     {
//       id: 'canada-wta',
//       name: 'Canadian Open',
//       category: 'WTA 1000',
//       location: 'Toronto/Montreal, Canada',
//       surface: 'Hard',
//       month: 'August',
//       prize: '$2.7 Million',
//       points: '1000',
//       participants: 56,
//       description: 'Part of the North American hard court swing.'
//     },
//     {
//       id: 'cincinnati-wta',
//       name: 'Cincinnati Open',
//       category: 'WTA 1000',
//       location: 'Cincinnati, USA',
//       surface: 'Hard',
//       month: 'August',
//       prize: '$2.7 Million',
//       points: '1000',
//       participants: 56,
//       description: 'The final tune-up before the US Open.'
//     },
//     {
//       id: 'beijing',
//       name: 'China Open',
//       category: 'WTA 1000',
//       location: 'Beijing, China',
//       surface: 'Hard',
//       month: 'September-October',
//       prize: '$8.2 Million',
//       points: '1000',
//       participants: 64,
//       description: 'One of the most important tournaments in Asia.'
//     },
//     {
//       id: 'guadalajara',
//       name: 'Guadalajara Open',
//       category: 'WTA 1000',
//       location: 'Guadalajara, Mexico',
//       surface: 'Hard',
//       month: 'September',
//       prize: '$2.5 Million',
//       points: '1000',
//       participants: 32,
//       description: 'The newest addition to the WTA 1000 series.'
//     }
//   ];

//   const currentTournaments = selectedTour === 'atp' ? atpTournaments : wtaTournaments;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-3 mb-2">
//             <Trophy className="h-10 w-10" />
//             <h1 className="text-4xl font-bold">ATP & WTA Tours</h1>
//           </div>
//           <p className="text-lg opacity-90">Explore the world's premier professional tennis circuits</p>
//         </div>
//       </div>

//       {/* Tour Type Selector */}
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="flex gap-3">
//           {tourTypes.map((tour) => (
//             <button
//               key={tour.id}
//               onClick={() => setSelectedTour(tour.id)}
//               className={`px-6 py-3 rounded-lg font-medium transition-colors ${
//                 selectedTour === tour.id
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-white text-gray-700 hover:bg-gray-100'
//               }`}
//             >
//               {tour.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Tournament Grid */}
//       <div className="max-w-7xl mx-auto px-4 pb-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {currentTournaments.map((tournament) => (
//             <Link
//               key={tournament.id}
//               to={`/tennis/tour/${tournament.id}`}
//               className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6"
//             >
//               <div className="flex justify-between items-start mb-4">
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
//                     {tournament.name}
//                   </h3>
//                   <span className="inline-block text-sm font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
//                     {tournament.category}
//                   </span>
//                 </div>
//                 <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
//               </div>

//               <p className="text-gray-600 mb-4">{tournament.description}</p>

//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <div className="flex items-start gap-2">
//                   <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="text-xs text-gray-500">Location</p>
//                     <p className="text-sm font-medium text-gray-800">{tournament.location}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <Calendar className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="text-xs text-gray-500">When</p>
//                     <p className="text-sm font-medium text-gray-800">{tournament.month}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between pt-4 border-t border-gray-200">
//                 <div className="flex items-center gap-2">
//                   <DollarSign className="h-4 w-4 text-green-600" />
//                   <span className="text-sm font-semibold text-gray-800">{tournament.prize}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Trophy className="h-4 w-4 text-yellow-600" />
//                   <span className="text-sm font-semibold text-gray-800">{tournament.points} pts</span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Info Section */}
//         <div className="mt-8 bg-white rounded-xl shadow-sm p-8">
//           <h2 className="text-2xl font-bold mb-4">
//             About the {selectedTour === 'atp' ? 'ATP' : 'WTA'} Tour
//           </h2>
//           <div className="prose max-w-none text-gray-600 space-y-4">
//             {selectedTour === 'atp' ? (
//               <>
//                 <p>
//                   The ATP Tour is the worldwide top-tier tennis tour for men organized by the Association of Tennis Professionals. 
//                   The tour includes ATP Masters 1000, ATP 500, and ATP 250 events, along with the Grand Slams and ATP Finals.
//                 </p>
//                 <p>
//                   <strong>Masters 1000 Events:</strong> These are the most prestigious tournaments after the Grand Slams, 
//                   offering 1000 ranking points to the champion. Top players are required to participate in all nine Masters 1000 events.
//                 </p>
//                 <p>
//                   <strong>ATP Finals:</strong> The season-ending championship features only the top 8 singles players and doubles 
//                   teams who have qualified based on their performance throughout the year.
//                 </p>
//               </>
//             ) : (
//               <>
//                 <p>
//                   The WTA Tour is the elite professional tennis tour for women organized by the Women's Tennis Association. 
//                   It features WTA 1000, WTA 500, and WTA 250 tournaments, alongside the Grand Slams and WTA Finals.
//                 </p>
//                 <p>
//                   <strong>WTA 1000 Events:</strong> The premier tier of women's professional tennis below Grand Slams, 
//                   offering 1000 ranking points. These tournaments feature the strongest player fields and largest prize pools.
//                 </p>
//                 <p>
//                   <strong>WTA Finals:</strong> The year-end championship brings together the top 8 singles players and 
//                   8 doubles teams, competing for one of the sport's most prestigious titles.
//                 </p>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tours;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Trophy, Calendar, MapPin, DollarSign, ChevronRight } from 'lucide-react';

// import TopTennisStories from '../../data/TopTennisStories.js';
// import LatestNews from '../../data/LatestNews.js';

// const Tours = () => {
//   const navigate = useNavigate();
//   const [selectedTour, setSelectedTour] = useState('atp');

//   const tourTypes = [
//     { id: 'atp', label: 'ATP Tour (Men)' },
//     { id: 'wta', label: 'WTA Tour (Women)' }
//   ];

//   const atpTournaments = [
//     {
//       id: 'atp-finals',
//       name: 'Nitto ATP Finals',
//       category: 'Year-End Championship',
//       location: 'Turin, Italy',
//       surface: 'Hard (Indoor)',
//       month: 'November',
//       prize: '$15.5 Million',
//       points: '1500',
//       participants: 8,
//       description: 'The season-ending championship featuring the top 8 singles players and doubles teams.'
//     },
//     {
//       id: 'indian-wells',
//       name: 'BNP Paribas Open',
//       category: 'ATP Masters 1000',
//       location: 'Indian Wells, USA',
//       surface: 'Hard',
//       month: 'March',
//       prize: '~$9-10 Million',
//       points: '1000',
//       participants: 96,
//       description: 'Also known as the "fifth Grand Slam" due to its prestige and large draw.'
//     },
//     {
//       id: 'miami-open',
//       name: 'Miami Open',
//       category: 'ATP Masters 1000',
//       location: 'Miami, USA',
//       surface: 'Hard',
//       month: 'March-April',
//       prize: '~$9-10 Million',
//       points: '1000',
//       participants: 96,
//       description: 'One of the premier hard court tournaments held annually in South Florida.'
//     },
//     {
//       id: 'monte-carlo',
//       name: 'Monte-Carlo Masters',
//       category: 'ATP Masters 1000',
//       location: 'Monte Carlo, Monaco',
//       surface: 'Clay',
//       month: 'April',
//       prize: '~€5.8 Million',
//       points: '1000',
//       participants: 56,
//       description: 'The first clay court Masters 1000 event of the season.'
//     },
//     {
//       id: 'madrid',
//       name: 'Madrid Open',
//       category: 'ATP Masters 1000',
//       location: 'Madrid, Spain',
//       surface: 'Clay',
//       month: 'April-May',
//       prize: '~€8 Million',
//       points: '1000',
//       participants: 56,
//       description: 'Held at the Caja Mágica, known for its altitude affecting play.'
//     },
//     {
//       id: 'rome',
//       name: 'Italian Open',
//       category: 'ATP Masters 1000',
//       location: 'Rome, Italy',
//       surface: 'Clay',
//       month: 'May',
//       prize: '~€8 Million',
//       points: '1000',
//       participants: 56,
//       description: 'A key clay court event leading up to the French Open.'
//     },
//     {
//       id: 'canada',
//       name: 'National Bank Open',
//       category: 'ATP Masters 1000',
//       location: 'Toronto/Montreal, Canada',
//       surface: 'Hard',
//       month: 'August',
//       prize: '~$7 Million',
//       points: '1000',
//       participants: 56,
//       description: 'Alternates between Toronto and Montreal each year.'
//     },
//     {
//       id: 'cincinnati',
//       name: 'Cincinnati Open',
//       category: 'ATP Masters 1000',
//       location: 'Cincinnati, USA',
//       surface: 'Hard',
//       month: 'August',
//       prize: '~$7 Million',
//       points: '1000',
//       participants: 56,
//       description: 'The last major hard court event before the US Open.'
//     },
//     {
//       id: 'shanghai',
//       name: 'Shanghai Masters',
//       category: 'ATP Masters 1000',
//       location: 'Shanghai, China',
//       surface: 'Hard',
//       month: 'October',
//       prize: '~$9-10 Million',
//       points: '1000',
//       participants: 56,
//       description: 'The premier Masters 1000 event in Asia.'
//     },
//     {
//       id: 'paris',
//       name: 'Rolex Paris Masters',
//       category: 'ATP Masters 1000',
//       location: 'Paris, France',
//       surface: 'Hard (Indoor)',
//       month: 'October-November',
//       prize: '~€5.8 Million',
//       points: '1000',
//       participants: 56,
//       description: 'The final Masters 1000 event before the ATP Finals.'
//     }
//   ];

//   const wtaTournaments = [
//     {
//       id: 'wta-finals',
//       name: 'WTA Finals Riyadh',
//       category: 'Year-End Championship',
//       location: 'Riyadh, Saudi Arabia',
//       surface: 'Hard (Indoor)',
//       month: 'November',
//       prize: '$15.5 Million',
//       points: '1500',
//       participants: 8,
//       description: 'The season-ending championship featuring the top 8 singles players and doubles teams.'
//     },
//     {
//       id: 'indian-wells-wta',
//       name: 'BNP Paribas Open',
//       category: 'WTA 1000',
//       location: 'Indian Wells, USA',
//       surface: 'Hard',
//       month: 'March',
//       prize: '~$9-10 Million',
//       points: '1000',
//       participants: 96,
//       description: 'One of the most prestigious combined events on tour.'
//     },
//     {
//       id: 'miami-open-wta',
//       name: 'Miami Open',
//       category: 'WTA 1000',
//       location: 'Miami, USA',
//       surface: 'Hard',
//       month: 'March-April',
//       prize: '~$9-10 Million',
//       points: '1000',
//       participants: 96,
//       description: 'Part of the Sunshine Double with Indian Wells.'
//     },
//     {
//       id: 'madrid-wta',
//       name: 'Madrid Open',
//       category: 'WTA 1000',
//       location: 'Madrid, Spain',
//       surface: 'Clay',
//       month: 'April-May',
//       prize: '~€8 Million',
//       points: '1000',
//       participants: 96,
//       description: 'A major clay court event in the spring season.'
//     },
//     {
//       id: 'rome-wta',
//       name: 'Italian Open',
//       category: 'WTA 1000',
//       location: 'Rome, Italy',
//       surface: 'Clay',
//       month: 'May',
//       prize: '~€8 Million',
//       points: '1000',
//       participants: 56,
//       description: 'The premier clay court event before the French Open.'
//     },
//     {
//       id: 'beijing',
//       name: 'China Open',
//       category: 'WTA 1000',
//       location: 'Beijing, China',
//       surface: 'Hard',
//       month: 'September-October',
//       prize: '~$8 Million',
//       points: '1000',
//       participants: 64,
//       description: 'One of the most important tournaments in Asia.'
//     },
//     {
//       id: 'cincinnati-wta',
//       name: 'Cincinnati Open',
//       category: 'WTA 1000',
//       location: 'Cincinnati, USA',
//       surface: 'Hard',
//       month: 'August',
//       prize: '~$3 Million',
//       points: '1000',
//       participants: 56,
//       description: 'The final tune-up before the US Open.'
//     },
//     {
//       id: 'canada-wta',
//       name: 'National Bank Open',
//       category: 'WTA 1000',
//       location: 'Toronto/Montreal, Canada',
//       surface: 'Hard',
//       month: 'August',
//       prize: '~$3 Million',
//       points: '1000',
//       participants: 56,
//       description: 'Part of the North American hard court swing.'
//     }
//   ];

//   const currentTournaments = selectedTour === 'atp' ? atpTournaments : wtaTournaments;

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

//           {/* Left: Tours Main Section */}
//           <div className="lg:col-span-8 space-y-6">
//             {/* Hero Section */}
//             <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-xl shadow-xl p-8">
//               <div className="flex items-center gap-4 mb-4">
//                 <Trophy className="h-12 w-12" />
//                 <div>
//                   <h1 className="text-3xl sm:text-4xl font-bold">ATP & WTA Tours</h1>
//                   <p className="text-lg opacity-90 mt-1">Premier professional tennis circuits • 2026 Season</p>
//                 </div>
//               </div>
//             </div>

//             {/* Tour Type Selector */}
//             <div className="bg-white rounded-xl shadow p-5">
//               <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
//                 {tourTypes.map((tour) => (
//                   <button
//                     key={tour.id}
//                     onClick={() => setSelectedTour(tour.id)}
//                     className={`px-6 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all ${
//                       selectedTour === tour.id
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {tour.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Tournament Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {currentTournaments.map((tournament) => (
//                 <Link
//                   key={tournament.id}
//                   to={`/tennis/tour/${tournament.id}`}
//                   className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6"
//                 >
//                   <div className="flex justify-between items-start mb-4">
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
//                         {tournament.name}
//                       </h3>
//                       <span className="inline-block text-sm font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
//                         {tournament.category}
//                       </span>
//                     </div>
//                     <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
//                   </div>

//                   <p className="text-gray-600 mb-5">{tournament.description}</p>

//                   <div className="space-y-4">
//                     <div className="flex items-center gap-3">
//                       <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
//                       <div>
//                         <p className="text-xs text-gray-500">Location</p>
//                         <p className="font-medium text-gray-800">{tournament.location}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <Calendar className="h-5 w-5 text-gray-400 flex-shrink-0" />
//                       <div>
//                         <p className="text-xs text-gray-500">Month</p>
//                         <p className="font-medium text-gray-800">{tournament.month}</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between pt-5 mt-5 border-t border-gray-200">
//                     <div className="flex items-center gap-2">
//                       <DollarSign className="h-5 w-5 text-green-600" />
//                       <span className="font-semibold text-gray-800">{tournament.prize}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Trophy className="h-5 w-5 text-yellow-600" />
//                       <span className="font-semibold text-gray-800">{tournament.points} pts</span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>

//             {/* Info Section */}
//             <div className="bg-white rounded-xl shadow-md p-8">
//               <h2 className="text-2xl font-bold mb-5">
//                 About the {selectedTour === 'atp' ? 'ATP Tour' : 'WTA Tour'}
//               </h2>
//               <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
//                 {selectedTour === 'atp' ? (
//                   <>
//                     <p>
//                       The ATP Tour is the elite professional tennis circuit for men, featuring nine Masters 1000 events, the Nitto ATP Finals, and the four Grand Slams.
//                     </p>
//                     <p>
//                       <strong>Masters 1000:</strong> Mandatory for top players, these tournaments offer 1000 ranking points to the winner and represent the highest tier below the Grand Slams.
//                     </p>
//                     <p>
//                       <strong>Nitto ATP Finals:</strong> Exclusive year-end event in Turin for the top 8 players, with record prize money and ranking points.
//                     </p>
//                   </>
//                 ) : (
//                   <>
//                     <p>
//                       The WTA Tour is the premier professional tennis circuit for women, including WTA 1000 events, the WTA Finals, and the Grand Slams.
//                     </p>
//                     <p>
//                       <strong>WTA 1000:</strong> The top tier below Grand Slams, offering 1000 points and massive prize pools to attract the strongest fields.
//                     </p>
//                     <p>
//                       <strong>WTA Finals Riyadh:</strong> Season-ending showdown in Saudi Arabia for the top 8 players, featuring record-breaking prize money.
//                     </p>
//                   </>
//                 )}
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

// export default Tours;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trophy, Calendar, MapPin, DollarSign, ChevronRight } from 'lucide-react';

import TopTennisStories from '../../data/TopTennisStories.js';
import LatestNews from '../../data/LatestNews.js';
import { tennisTours } from '../../data/TennisTours.js';

const Tours = () => {
  const navigate = useNavigate();
  const [selectedTour, setSelectedTour] = useState('atp');

  const tourTypes = [
    { id: 'atp', label: 'ATP Tour (Men)' },
    { id: 'wta', label: 'WTA Tour (Women)' }
  ];

  // Data ab external file se aa raha hai
  const currentTournaments = tennisTours[selectedTour] || [];

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

          {/* Left: Tours Main Section */}
          <div className="lg:col-span-8 space-y-6">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white rounded-xl shadow-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Trophy className="h-12 w-12" />
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold">ATP & WTA Tours</h1>
                  <p className="text-lg opacity-90 mt-1">Premier professional tennis circuits • 2026 Season</p>
                </div>
              </div>
            </div>

            {/* Tour Type Selector */}
            <div className="bg-white rounded-xl shadow p-5">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {tourTypes.map((tour) => (
                  <button
                    key={tour.id}
                    onClick={() => setSelectedTour(tour.id)}
                    className={`px-6 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all ${
                      selectedTour === tour.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tour.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tournament Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentTournaments.map((tournament) => (
                <Link
                  key={tournament.id}
                  to={`/tennis/tour/${tournament.id}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                        {tournament.name}
                      </h3>
                      <span className="inline-block text-sm font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                        {tournament.category}
                      </span>
                    </div>
                    <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>

                  <p className="text-gray-600 mb-5">{tournament.description}</p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="font-medium text-gray-800">{tournament.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">Month</p>
                        <p className="font-medium text-gray-800">{tournament.month}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-5 mt-5 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-gray-800">{tournament.prize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-yellow-600" />
                      <span className="font-semibold text-gray-800">{tournament.points} pts</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Info Section */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-5">
                About the {selectedTour === 'atp' ? 'ATP Tour' : 'WTA Tour'}
              </h2>
              <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
                {selectedTour === 'atp' ? (
                  <>
                    <p>
                      The ATP Tour is the elite professional tennis circuit for men, featuring nine Masters 1000 events, the Nitto ATP Finals, and the four Grand Slams.
                    </p>
                    <p>
                      <strong>Masters 1000:</strong> Mandatory for top players, these tournaments offer 1000 ranking points to the winner and represent the highest tier below the Grand Slams.
                    </p>
                    <p>
                      <strong>Nitto ATP Finals:</strong> Exclusive year-end event in Turin for the top 8 players, with record prize money and ranking points.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      The WTA Tour is the premier professional tennis circuit for women, including WTA 1000 events, the WTA Finals, and the Grand Slams.
                    </p>
                    <p>
                      <strong>WTA 1000:</strong> The top tier below Grand Slams, offering 1000 points and massive prize pools to attract the strongest fields.
                    </p>
                    <p>
                      <strong>WTA Finals Riyadh:</strong> Season-ending showdown in Saudi Arabia for the top 8 players, featuring record-breaking prize money.
                    </p>
                  </>
                )}
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

export default Tours;