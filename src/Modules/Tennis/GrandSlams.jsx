// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Trophy, Calendar, MapPin, Users, ChevronRight } from 'lucide-react';

// const GrandSlams = () => {
//   const grandSlams = [
//     {
//       id: 'australian-open',
//       name: 'Australian Open',
//       location: 'Melbourne, Australia',
//       surface: 'Hard Court',
//       month: 'January',
//       venue: 'Melbourne Park',
//       prize: '$86.5 Million',
//       color: 'from-blue-600 to-blue-800',
//       description: 'The first Grand Slam of the year, held in the scorching Australian summer.',
//       founded: 1905,
//       draws: {
//         mens_singles: 128,
//         womens_singles: 128,
//         mens_doubles: 64,
//         womens_doubles: 64,
//         mixed_doubles: 32
//       },
//       recentChampions: {
//         mens: 'Novak Djokovic (2023)',
//         womens: 'Aryna Sabalenka (2024)'
//       }
//     },
//     {
//       id: 'french-open',
//       name: 'French Open',
//       location: 'Paris, France',
//       surface: 'Clay Court',
//       month: 'May - June',
//       venue: 'Stade Roland Garros',
//       prize: '€49.6 Million',
//       color: 'from-orange-600 to-red-700',
//       description: 'The premier clay court championship, known for its slow playing surface.',
//       founded: 1891,
//       draws: {
//         mens_singles: 128,
//         womens_singles: 128,
//         mens_doubles: 64,
//         womens_doubles: 64,
//         mixed_doubles: 32
//       },
//       recentChampions: {
//         mens: 'Carlos Alcaraz (2024)',
//         womens: 'Iga Świątek (2024)'
//       }
//     },
//     {
//       id: 'wimbledon',
//       name: 'Wimbledon',
//       location: 'London, England',
//       surface: 'Grass Court',
//       month: 'June - July',
//       venue: 'All England Club',
//       prize: '£44.7 Million',
//       color: 'from-green-600 to-green-800',
//       description: 'The oldest tennis tournament in the world, steeped in tradition.',
//       founded: 1877,
//       draws: {
//         mens_singles: 128,
//         womens_singles: 128,
//         mens_doubles: 64,
//         womens_doubles: 64,
//         mixed_doubles: 48
//       },
//       recentChampions: {
//         mens: 'Carlos Alcaraz (2024)',
//         womens: 'Barbora Krejčíková (2024)'
//       }
//     },
//     {
//       id: 'us-open',
//       name: 'US Open',
//       location: 'New York, USA',
//       surface: 'Hard Court',
//       month: 'August - September',
//       venue: 'USTA Billie Jean King National Tennis Center',
//       prize: '$65 Million',
//       color: 'from-blue-800 to-indigo-900',
//       description: 'The final Grand Slam of the year, played under the lights of New York.',
//       founded: 1881,
//       draws: {
//         mens_singles: 128,
//         womens_singles: 128,
//         mens_doubles: 64,
//         womens_doubles: 64,
//         mixed_doubles: 32
//       },
//       recentChampions: {
//         mens: 'Jannik Sinner (2024)',
//         womens: 'Coco Gauff (2023)'
//       }
//     }
//   ];

//   const stats = [
//     { label: 'Total Prize Money', value: '$300M+', icon: Trophy },
//     { label: 'Annual Tournaments', value: '4', icon: Calendar },
//     { label: 'Players Competing', value: '500+', icon: Users }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-3 mb-4">
//             <Trophy className="h-10 w-10" />
//             <h1 className="text-4xl font-bold">Grand Slam Championships</h1>
//           </div>
//           <p className="text-lg opacity-90 max-w-2xl">
//             The four most prestigious tennis tournaments in the world, representing the pinnacle of professional tennis.
//           </p>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="max-w-7xl mx-auto px-4 -mt-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {stats.map((stat, idx) => (
//             <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
//               <div className="flex items-center gap-4">
//                 <div className="bg-blue-100 p-3 rounded-lg">
//                   <stat.icon className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <div>
//                   <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
//                   <p className="text-sm text-gray-600">{stat.label}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Grand Slams Grid */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {grandSlams.map((slam) => (
//             <Link
//               key={slam.id}
//               to={`/tennis/grandslam/${slam.id}`}
//               className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all overflow-hidden"
//             >
//               {/* Header with Gradient */}
//               <div className={`bg-gradient-to-r ${slam.color} text-white p-6`}>
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h2 className="text-2xl font-bold mb-2">{slam.name}</h2>
//                     <div className="flex items-center gap-2 text-sm opacity-90">
//                       <MapPin className="h-4 w-4" />
//                       <span>{slam.location}</span>
//                     </div>
//                   </div>
//                   <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <p className="text-gray-600 mb-4">{slam.description}</p>

//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <p className="text-sm text-gray-500 mb-1">Surface</p>
//                     <p className="font-semibold text-gray-800">{slam.surface}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 mb-1">When</p>
//                     <p className="font-semibold text-gray-800">{slam.month}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 mb-1">Prize Money</p>
//                     <p className="font-semibold text-gray-800">{slam.prize}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 mb-1">Founded</p>
//                     <p className="font-semibold text-gray-800">{slam.founded}</p>
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-200 pt-4">
//                   <p className="text-sm font-medium text-gray-700 mb-2">Recent Champions</p>
//                   <div className="space-y-1 text-sm text-gray-600">
//                     <p><span className="font-medium">Men's:</span> {slam.recentChampions.mens}</p>
//                     <p><span className="font-medium">Women's:</span> {slam.recentChampions.womens}</p>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Info Section */}
//       <div className="max-w-7xl mx-auto px-4 pb-12">
//         <div className="bg-white rounded-xl shadow-sm p-8">
//           <h2 className="text-2xl font-bold mb-4">About Grand Slams</h2>
//           <div className="prose max-w-none text-gray-600">
//             <p className="mb-4">
//               The Grand Slam tournaments, also known as the majors, are the four most important annual tennis events. 
//               They offer the most ranking points, prize money, public and media attention, and are considered the 
//               greatest sporting achievement in tennis.
//             </p>
//             <p className="mb-4">
//               Each tournament is played over two weeks, featuring men's and women's singles, doubles, and mixed doubles. 
//               The tournaments are overseen by the International Tennis Federation (ITF), rather than the separate 
//               men's and women's tour organizing bodies.
//             </p>
//             <p>
//               Winning all four major championships in the same calendar year is called a Calendar Grand Slam, 
//               a feat achieved by only a select few players in tennis history.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GrandSlams;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Trophy, Calendar, MapPin, ChevronRight } from 'lucide-react';

// const GrandSlams = () => {
//   const grandSlams = [
//     {
//       id: 'australian-open',
//       name: 'Australian Open',
//       location: 'Melbourne, Australia',
//       surface: 'Hard',
//       month: 'January',
//       venue: 'Melbourne Park',
//       prize: 'A$96.5M',
//       color: 'from-blue-600 to-blue-800',
//       description: 'Happy Slam – first major of the year in summer heat.',
//       recentChampions: { mens: 'Jannik Sinner (2025)', womens: 'Madison Keys (2025)' }
//     },
//     {
//       id: 'french-open',
//       name: 'French Open',
//       location: 'Paris, France',
//       surface: 'Clay',
//       month: 'May–June',
//       venue: 'Roland Garros',
//       prize: '€56.4M',
//       color: 'from-orange-600 to-red-700',
//       description: 'The ultimate test on slow red clay.',
//       recentChampions: { mens: 'Carlos Alcaraz (2025)', womens: 'Coco Gauff (2025)' }
//     },
//     {
//       id: 'wimbledon',
//       name: 'Wimbledon',
//       location: 'London, England',
//       surface: 'Grass',
//       month: 'June–July',
//       venue: 'All England Club',
//       prize: '£53.5M',
//       color: 'from-green-600 to-green-800',
//       description: 'The oldest and most traditional major.',
//       recentChampions: { mens: 'Jannik Sinner (2025)', womens: 'Iga Świątek (2025)' }
//     },
//     {
//       id: 'us-open',
//       name: 'US Open',
//       location: 'New York, USA',
//       surface: 'Hard',
//       month: 'Aug–Sept',
//       venue: 'USTA Billie Jean King NTC',
//       prize: '$90M',
//       color: 'from-blue-800 to-indigo-900',
//       description: 'The electric final major under NYC lights.',
//       recentChampions: { mens: 'Carlos Alcaraz (2025)', womens: 'Aryna Sabalenka (2025)' }
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-10">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-3 mb-2">
//             <Trophy className="w-8 h-8" />
//             <h1 className="text-4xl font-bold">Grand Slam Tournaments</h1>
//           </div>
//           <p className="text-blue-100">The four majors – pinnacle of professional tennis</p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {/* Grand Slams Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
//           {grandSlams.map((slam) => (
//             <Link
//               key={slam.id}
//               to={`/tennis/grandslam/${slam.id}`}
//               className="group bg-white rounded-lg shadow hover:shadow-md transition-all border border-gray-100"
//             >
//               {/* Colored Header */}
//               <div className={`bg-gradient-to-r ${slam.color} text-white p-5 rounded-t-lg`}>
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h2 className="text-xl font-bold">{slam.name}</h2>
//                     <div className="flex items-center gap-2 text-sm opacity-90 mt-1">
//                       <MapPin className="w-4 h-4" />
//                       <span>{slam.location}</span>
//                     </div>
//                   </div>
//                   <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </div>
//               </div>

//               {/* Compact Body */}
//               <div className="p-5">
//                 <p className="text-sm text-gray-600 mb-4">{slam.description}</p>

//                 <div className="grid grid-cols-2 gap-4 text-sm">
//                   <div>
//                     <p className="text-gray-500">Surface</p>
//                     <p className="font-semibold">{slam.surface}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-500">Held</p>
//                     <p className="font-semibold">{slam.month}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-500">Prize Money</p>
//                     <p className="font-semibold">{slam.prize}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-500">Venue</p>
//                     <p className="font-semibold truncate">{slam.venue}</p>
//                   </div>
//                 </div>

//                 <div className="mt-4 pt-4 border-t border-gray-100 text-sm">
//                   <p className="font-medium text-gray-700 mb-1">2025 Champions</p>
//                   <div className="grid grid-cols-2 gap-2 text-gray-600">
//                     <p>Men's: {slam.recentChampions.mens}</p>
//                     <p>Women's: {slam.recentChampions.womens}</p>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Quick Fact */}
//         <div className="mt-8 bg-white rounded-xl shadow-md p-6 text-center">
//           <p className="text-lg font-semibold text-gray-800">
//             Combined 2025 Prize Money: <span className="text-blue-600">Over $300 Million</span>
//           </p>
//           <p className="text-sm text-gray-600 mt-2">
//             The Grand Slams offer the highest prize money, ranking points, and prestige in tennis.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GrandSlams;


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Trophy, Calendar, MapPin, ChevronRight, Clock } from 'lucide-react';
// import TopTennisStories from '../../data/TopTennisStories.js';
// import LatestNews from '../../data/LatestNews.js';

// const GrandSlams = () => {
//   const navigate = useNavigate();

//   // Updated with accurate 2025 champions and latest prize money info (as of Jan 2026)
//   const grandSlams = [
//     {
//       id: 'australian-open',
//       name: 'Australian Open',
//       location: 'Melbourne, Australia',
//       surface: 'Hard',
//       month: 'January',
//       venue: 'Melbourne Park',
//       prize: 'A$111.5M', // Record prize money for 2026
//       color: 'from-blue-600 to-blue-800',
//       description: 'Happy Slam – first major of the year in summer heat.',
//       recentChampions: { mens: 'Jannik Sinner (2025)', womens: 'Madison Keys (2025)' }
//     },
//     {
//       id: 'french-open',
//       name: 'French Open',
//       location: 'Paris, France',
//       surface: 'Clay',
//       month: 'May–June',
//       venue: 'Roland Garros',
//       prize: '€56.4M', // Approximate from 2025 data
//       color: 'from-orange-600 to-red-700',
//       description: 'The ultimate test on slow red clay.',
//       recentChampions: { mens: 'Carlos Alcaraz (2025)', womens: 'Coco Gauff (2025)' } // Adjusted based on available data; update if needed
//     },
//     {
//       id: 'wimbledon',
//       name: 'Wimbledon',
//       location: 'London, England',
//       surface: 'Grass',
//       month: 'June–July',
//       venue: 'All England Club',
//       prize: '£53.5M',
//       color: 'from-green-600 to-green-800',
//       description: 'The oldest and most traditional major.',
//       recentChampions: { mens: 'Jannik Sinner (2025)', womens: 'Iga Świątek (2025)' }
//     },
//     {
//       id: 'us-open',
//       name: 'US Open',
//       location: 'New York, USA',
//       surface: 'Hard',
//       month: 'Aug–Sept',
//       venue: 'USTA Billie Jean King NTC',
//       prize: '$90M',
//       color: 'from-blue-800 to-indigo-900',
//       description: 'The electric final major under NYC lights.',
//       recentChampions: { mens: 'Carlos Alcaraz (2025)', womens: 'Aryna Sabalenka (2025)' }
//     }
//   ];

//   const handleStoryClick = (id) => {
//     navigate(`/details/tennis/${id}`);
//   };

//   const handleNewsClick = (title) => {
//     navigate(`/news-details/${encodeURIComponent(title)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
//       {/* Hero Section - Exactly matching LiveScores page width, style, and responsiveness */}
//       <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="bg-gradient-to-r from-green-600 via-blue-600 to-indigo-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//             <div>
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">🏆 Grand Slam Tournaments</h1>
//               <p className="text-green-100 text-sm sm:text-base">The four majors – pinnacle of professional tennis</p>
//             </div>
//             <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
//               <div className="flex items-center gap-2">
//                 <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
//                 <span className="font-semibold">{new Date().toLocaleTimeString()}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content - Same max-w-7xl container and responsive grid as LiveScores */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Left Main Section: Grand Slams Cards */}
//           <div className="lg:col-span-8 space-y-6">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
//               {grandSlams.map((slam) => (
//                 <Link
//                   key={slam.id}
//                   to={`/tennis/grandslam/${slam.id}`}
//                   className="group bg-white rounded-lg shadow hover:shadow-md transition-all border border-gray-100"
//                 >
//                   <div className={`bg-gradient-to-r ${slam.color} text-white p-5 rounded-t-lg`}>
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <h2 className="text-xl font-bold">{slam.name}</h2>
//                         <div className="flex items-center gap-2 text-sm opacity-90 mt-1">
//                           <MapPin className="w-4 h-4" />
//                           <span>{slam.location}</span>
//                         </div>
//                       </div>
//                       <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                     </div>
//                   </div>

//                   <div className="p-5">
//                     <p className="text-sm text-gray-600 mb-4">{slam.description}</p>

//                     <div className="grid grid-cols-2 gap-4 text-sm">
//                       <div>
//                         <p className="text-gray-500">Surface</p>
//                         <p className="font-semibold">{slam.surface}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-500">Held</p>
//                         <p className="font-semibold">{slam.month}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-500">Prize Money</p>
//                         <p className="font-semibold">{slam.prize}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-500">Venue</p>
//                         <p className="font-semibold truncate">{slam.venue}</p>
//                       </div>
//                     </div>

//                     <div className="mt-4 pt-4 border-t border-gray-100 text-sm">
//                       <p className="font-medium text-gray-700 mb-1">2025 Champions</p>
//                       <div className="grid grid-cols-2 gap-2 text-gray-600">
//                         <p>Men's: {slam.recentChampions.mens}</p>
//                         <p>Women's: {slam.recentChampions.womens}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>

//             {/* Quick Fact - Responsive and centered */}
//             <div className="bg-white rounded-xl shadow-md p-6 text-center">
//               <p className="text-lg font-semibold text-gray-800">
//                 Combined Prize Money: <span className="text-green-600">Over $300 Million</span>
//               </p>
//               <p className="text-sm text-gray-600 mt-2">
//                 The Grand Slams offer the highest prize money, ranking points, and prestige in tennis.
//               </p>
//             </div>
//           </div>

//           {/* Desktop Sidebar - Hidden on mobile, exactly like LiveScores */}
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

//       {/* Mobile Top Tennis Stories - Separate section below main grid */}
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

//       {/* Latest Sports News - Full responsive width inside max-w-7xl */}
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
//                   onClick={() => handleNewsClick(article.title)}
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

// export default GrandSlams;


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trophy, Calendar, MapPin, ChevronRight, Clock } from 'lucide-react';
import TopTennisStories from '../../data/TopTennisStories.js';
import LatestNews from '../../data/LatestNews.js';
import { grandSlams } from '../../data/TennisGrandSlamData.js';

const GrandSlams = () => {
  const navigate = useNavigate();

  const handleStoryClick = (id) => {
    navigate(`/details/tennis/${id}`);
  };

  const handleNewsClick = (title) => {
    navigate(`/news-details/${encodeURIComponent(title)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-gradient-to-r from-green-600 via-blue-600 to-indigo-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">🏆 Grand Slam Tournaments</h1>
              <p className="text-green-100 text-sm sm:text-base">The four majors – pinnacle of professional tennis</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold">{new Date().toLocaleTimeString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Left Main Section: Grand Slams Cards */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {grandSlams.map((slam) => (
                <Link
                  key={slam.id}
                  to={`/tennis/grandslam/${slam.id}`}
                  className="group bg-white rounded-lg shadow hover:shadow-md transition-all border border-gray-100"
                >
                  <div className={`bg-gradient-to-r ${slam.color} text-white p-5 rounded-t-lg`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-bold">{slam.name}</h2>
                        <div className="flex items-center gap-2 text-sm opacity-90 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>{slam.location}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-sm text-gray-600 mb-4">{slam.description}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Surface</p>
                        <p className="font-semibold">{slam.surface}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Held</p>
                        <p className="font-semibold">{slam.month}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Prize Money</p>
                        <p className="font-semibold">{slam.prize}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Venue</p>
                        <p className="font-semibold truncate">{slam.venue}</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100 text-sm">
                      <p className="font-medium text-gray-700 mb-1">2025 Champions</p>
                      <div className="grid grid-cols-2 gap-2 text-gray-600">
                        <p>Men's: {slam.recentChampions.mens}</p>
                        <p>Women's: {slam.recentChampions.womens}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Quick Fact */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <p className="text-lg font-semibold text-gray-800">
                Combined Prize Money: <span className="text-green-600">Over $300 Million</span>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                The Grand Slams offer the highest prize money, ranking points, and prestige in tennis.
              </p>
            </div>
          </div>

          {/* Desktop Sidebar */}
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

      {/* Mobile Top Tennis Stories */}
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
                  onClick={() => handleNewsClick(article.title)}
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

export default GrandSlams;