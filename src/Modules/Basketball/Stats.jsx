// import React, { useState } from 'react';
// import { TrendingUp, Award, Target, Zap } from 'lucide-react';

// const Stats = () => {
//   const [selectedLeague, setSelectedLeague] = useState('nba');

//   const statsData = {
//     nba: {
//       pointsLeaders: [
//         { rank: 1, player: 'Luka Dončić', team: 'Dallas Mavericks', ppg: 33.8, gp: 45 },
//         { rank: 2, player: 'Giannis Antetokounmpo', team: 'Milwaukee Bucks', ppg: 32.1, gp: 43 },
//         { rank: 3, player: 'Shai Gilgeous-Alexander', team: 'Oklahoma City Thunder', ppg: 31.2, gp: 47 },
//         { rank: 4, player: 'Joel Embiid', team: 'Philadelphia 76ers', ppg: 30.5, gp: 38 },
//         { rank: 5, player: 'Kevin Durant', team: 'Phoenix Suns', ppg: 28.9, gp: 44 }
//       ],
//       assistsLeaders: [
//         { rank: 1, player: 'Tyrese Haliburton', team: 'Indiana Pacers', apg: 11.8, gp: 42 },
//         { rank: 2, player: 'Trae Young', team: 'Atlanta Hawks', apg: 11.2, gp: 45 },
//         { rank: 3, player: 'Luka Dončić', team: 'Dallas Mavericks', apg: 9.3, gp: 45 },
//         { rank: 4, player: 'James Harden', team: 'LA Clippers', apg: 8.9, gp: 40 },
//         { rank: 5, player: 'Chris Paul', team: 'Golden State Warriors', apg: 8.5, gp: 38 }
//       ],
//       reboundsLeaders: [
//         { rank: 1, player: 'Domantas Sabonis', team: 'Sacramento Kings', rpg: 13.2, gp: 46 },
//         { rank: 2, player: 'Nikola Jokić', team: 'Denver Nuggets', rpg: 12.8, gp: 44 },
//         { rank: 3, player: 'Rudy Gobert', team: 'Minnesota Timberwolves', rpg: 12.5, gp: 43 },
//         { rank: 4, player: 'Anthony Davis', team: 'LA Lakers', rpg: 11.8, gp: 41 },
//         { rank: 5, player: 'Giannis Antetokounmpo', team: 'Milwaukee Bucks', rpg: 11.4, gp: 43 }
//       ],
//       threePointLeaders: [
//         { rank: 1, player: 'Stephen Curry', team: 'Golden State Warriors', tpm: 4.8, pct: '42.5%', gp: 42 },
//         { rank: 2, player: 'Damian Lillard', team: 'Milwaukee Bucks', tpm: 4.2, pct: '38.9%', gp: 45 },
//         { rank: 3, player: 'Luka Dončić', team: 'Dallas Mavericks', tpm: 4.1, pct: '37.2%', gp: 45 },
//         { rank: 4, player: 'Buddy Hield', team: 'Philadelphia 76ers', tpm: 3.9, pct: '40.1%', gp: 44 },
//         { rank: 5, player: 'Klay Thompson', team: 'Golden State Warriors', tpm: 3.7, pct: '39.8%', gp: 40 }
//       ]
//     },
//     wnba: {
//       pointsLeaders: [
//         { rank: 1, player: 'A\'ja Wilson', team: 'Las Vegas Aces', ppg: 27.3, gp: 23 },
//         { rank: 2, player: 'Breanna Stewart', team: 'New York Liberty', ppg: 23.5, gp: 24 },
//         { rank: 3, player: 'Arike Ogunbowale', team: 'Dallas Wings', ppg: 22.1, gp: 22 },
//         { rank: 4, player: 'Sabrina Ionescu', team: 'New York Liberty', ppg: 20.2, gp: 24 },
//         { rank: 5, player: 'Kelsey Plum', team: 'Las Vegas Aces', ppg: 18.9, gp: 23 }
//       ],
//       assistsLeaders: [
//         { rank: 1, player: 'Courtney Vandersloot', team: 'New York Liberty', apg: 7.8, gp: 24 },
//         { rank: 2, player: 'Natasha Cloud', team: 'Phoenix Mercury', apg: 6.9, gp: 22 },
//         { rank: 3, player: 'Sabrina Ionescu', team: 'New York Liberty', apg: 6.2, gp: 24 },
//         { rank: 4, player: 'Chelsea Gray', team: 'Las Vegas Aces', apg: 5.8, gp: 21 },
//         { rank: 5, player: 'Arike Ogunbowale', team: 'Dallas Wings', apg: 5.1, gp: 22 }
//       ],
//       reboundsLeaders: [
//         { rank: 1, player: 'A\'ja Wilson', team: 'Las Vegas Aces', rpg: 11.9, gp: 23 },
//         { rank: 2, player: 'Jonquel Jones', team: 'New York Liberty', rpg: 9.8, gp: 23 },
//         { rank: 3, player: 'Breanna Stewart', team: 'New York Liberty', rpg: 9.1, gp: 24 },
//         { rank: 4, player: 'Angel Reese', team: 'Chicago Sky', rpg: 8.7, gp: 20 },
//         { rank: 5, player: 'Brittney Griner', team: 'Phoenix Mercury', rpg: 8.2, gp: 21 }
//       ],
//       threePointLeaders: [
//         { rank: 1, player: 'Sabrina Ionescu', team: 'New York Liberty', tpm: 3.2, pct: '41.2%', gp: 24 },
//         { rank: 2, player: 'Kelsey Plum', team: 'Las Vegas Aces', tpm: 2.8, pct: '38.5%', gp: 23 },
//         { rank: 3, player: 'Jewell Loyd', team: 'Seattle Storm', tpm: 2.6, pct: '37.8%', gp: 22 },
//         { rank: 4, player: 'Marina Mabrey', team: 'Connecticut Sun', tpm: 2.5, pct: '39.1%', gp: 23 },
//         { rank: 5, player: 'Arike Ogunbowale', team: 'Dallas Wings', tpm: 2.4, pct: '36.2%', gp: 22 }
//       ]
//     }
//   };

//   const stats = statsData[selectedLeague];

//   const StatCard = ({ title, icon: Icon, leaders, metric, extraMetric }) => (
//     <div className="bg-white rounded-xl shadow-lg p-6">
//       <div className="flex items-center gap-3 mb-6">
//         <div className="p-3 bg-orange-100 rounded-lg">
//           <Icon className="w-6 h-6 text-orange-600" />
//         </div>
//         <h2 className="text-xl font-bold text-gray-800">{title}</h2>
//       </div>
//       <div className="space-y-3">
//         {leaders.map((leader) => (
//           <div key={leader.rank} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
//             <div className="flex items-center gap-3">
//               <span className="flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded-full font-bold text-sm">
//                 {leader.rank}
//               </span>
//               <div>
//                 <p className="font-semibold text-gray-800">{leader.player}</p>
//                 <p className="text-xs text-gray-500">{leader.team}</p>
//               </div>
//             </div>
//             <div className="text-right">
//               <p className="text-2xl font-bold text-orange-600">{leader[metric]}</p>
//               {extraMetric && <p className="text-xs text-gray-500">{leader[extraMetric]}</p>}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-8">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-2xl md:text-2xl font-bold mb-3">Basketball Statistics</h1>
//           <p className="text-lg text-orange-100">League leaders across key statistical categories</p>
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

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <StatCard
//             title="Points Leaders"
//             icon={Award}
//             leaders={stats.pointsLeaders}
//             metric="ppg"
//           />
//           <StatCard
//             title="Assists Leaders"
//             icon={Target}
//             leaders={stats.assistsLeaders}
//             metric="apg"
//           />
//           <StatCard
//             title="Rebounds Leaders"
//             icon={TrendingUp}
//             leaders={stats.reboundsLeaders}
//             metric="rpg"
//           />
//           <StatCard
//             title="Three-Point Leaders"
//             icon={Zap}
//             leaders={stats.threePointLeaders}
//             metric="tpm"
//             extraMetric="pct"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stats;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, TrendingUp, Award, Target, Zap } from 'lucide-react';
import TopBasketballStories from '../../data/TopBasketballStories.js';
import LatestNews from '../../data/LatestNews.js';

const Stats = () => {
  const navigate = useNavigate();
  const [selectedLeague, setSelectedLeague] = useState('nba');

  const statsData = {
    nba: {
      pointsLeaders: [
        { rank: 1, player: 'Luka Dončić', team: 'Dallas Mavericks', ppg: 33.8, gp: 45 },
        { rank: 2, player: 'Giannis Antetokounmpo', team: 'Milwaukee Bucks', ppg: 32.1, gp: 43 },
        { rank: 3, player: 'Shai Gilgeous-Alexander', team: 'Oklahoma City Thunder', ppg: 31.2, gp: 47 },
        { rank: 4, player: 'Nikola Jokić', team: 'Denver Nuggets', ppg: 29.8, gp: 44 },
        { rank: 5, player: 'Joel Embiid', team: 'Philadelphia 76ers', ppg: 29.5, gp: 38 }
      ],
      assistsLeaders: [
        { rank: 1, player: 'Luka Dončić', team: 'Dallas Mavericks', apg: 9.0, gp: 45 },
        { rank: 2, player: 'Draymond Green', team: 'Golden State Warriors', apg: 9.0, gp: 42 },
        { rank: 3, player: 'Austin Reaves', team: 'Los Angeles Lakers', apg: 9.0, gp: 44 },
        { rank: 4, player: 'Tyrese Haliburton', team: 'Indiana Pacers', apg: 11.8, gp: 42 },
        { rank: 5, player: 'Trae Young', team: 'Atlanta Hawks', apg: 11.2, gp: 45 }
      ],
      reboundsLeaders: [
        { rank: 1, player: 'Nikola Jokić', team: 'Denver Nuggets', rpg: 12.4, gp: 44 },
        { rank: 2, player: 'Domantas Sabonis', team: 'Sacramento Kings', rpg: 13.2, gp: 46 },
        { rank: 3, player: 'Rudy Gobert', team: 'Minnesota Timberwolves', rpg: 12.5, gp: 43 },
        { rank: 4, player: 'Anthony Davis', team: 'LA Lakers', rpg: 11.8, gp: 41 },
        { rank: 5, player: 'Giannis Antetokounmpo', team: 'Milwaukee Bucks', rpg: 11.4, gp: 43 }
      ],
      threePointLeaders: [
        { rank: 1, player: 'Stephen Curry', team: 'Golden State Warriors', tpm: 4.8, pct: '42.5%', gp: 42 },
        { rank: 2, player: 'Damian Lillard', team: 'Milwaukee Bucks', tpm: 4.2, pct: '38.9%', gp: 45 },
        { rank: 3, player: 'Luka Dončić', team: 'Dallas Mavericks', tpm: 4.1, pct: '37.2%', gp: 45 },
        { rank: 4, player: 'Buddy Hield', team: 'Philadelphia 76ers', tpm: 3.9, pct: '40.1%', gp: 44 },
        { rank: 5, player: 'Klay Thompson', team: 'Golden State Warriors', tpm: 3.7, pct: '39.8%', gp: 40 }
      ]
    },
    wnba: {
      pointsLeaders: [
        { rank: 1, player: 'A\'ja Wilson', team: 'Las Vegas Aces', ppg: 27.3, gp: 23 },
        { rank: 2, player: 'Breanna Stewart', team: 'New York Liberty', ppg: 23.5, gp: 24 },
        { rank: 3, player: 'Arike Ogunbowale', team: 'Dallas Wings', ppg: 22.1, gp: 22 },
        { rank: 4, player: 'Sabrina Ionescu', team: 'New York Liberty', ppg: 20.2, gp: 24 },
        { rank: 5, player: 'Kelsey Plum', team: 'Las Vegas Aces', ppg: 18.9, gp: 23 }
      ],
      assistsLeaders: [
        { rank: 1, player: 'Courtney Vandersloot', team: 'New York Liberty', apg: 7.8, gp: 24 },
        { rank: 2, player: 'Natasha Cloud', team: 'Phoenix Mercury', apg: 6.9, gp: 22 },
        { rank: 3, player: 'Sabrina Ionescu', team: 'New York Liberty', apg: 6.2, gp: 24 },
        { rank: 4, player: 'Chelsea Gray', team: 'Las Vegas Aces', apg: 5.8, gp: 21 },
        { rank: 5, player: 'Arike Ogunbowale', team: 'Dallas Wings', apg: 5.1, gp: 22 }
      ],
      reboundsLeaders: [
        { rank: 1, player: 'A\'ja Wilson', team: 'Las Vegas Aces', rpg: 11.9, gp: 23 },
        { rank: 2, player: 'Jonquel Jones', team: 'New York Liberty', rpg: 9.8, gp: 23 },
        { rank: 3, player: 'Breanna Stewart', team: 'New York Liberty', rpg: 9.1, gp: 24 },
        { rank: 4, player: 'Angel Reese', team: 'Chicago Sky', rpg: 8.7, gp: 20 },
        { rank: 5, player: 'Brittney Griner', team: 'Phoenix Mercury', rpg: 8.2, gp: 21 }
      ],
      threePointLeaders: [
        { rank: 1, player: 'Sabrina Ionescu', team: 'New York Liberty', tpm: 3.2, pct: '41.2%', gp: 24 },
        { rank: 2, player: 'Kelsey Plum', team: 'Las Vegas Aces', tpm: 2.8, pct: '38.5%', gp: 23 },
        { rank: 3, player: 'Jewell Loyd', team: 'Seattle Storm', tpm: 2.6, pct: '37.8%', gp: 22 },
        { rank: 4, player: 'Marina Mabrey', team: 'Connecticut Sun', tpm: 2.5, pct: '39.1%', gp: 23 },
        { rank: 5, player: 'Arike Ogunbowale', team: 'Dallas Wings', tpm: 2.4, pct: '36.2%', gp: 22 }
      ]
    }
  };

  const stats = statsData[selectedLeague];

  const handleStoryClick = (id) => {
    navigate(`/details/basketball/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  const StatCard = ({ title, icon: Icon, leaders, metric, extraMetric }) => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-orange-100 rounded-lg">
          <Icon className="w-6 h-6 text-orange-600" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="space-y-3">
        {leaders.map((leader) => (
          <div key={leader.rank} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded-full font-bold text-sm">
                {leader.rank}
              </span>
              <div>
                <p className="font-semibold text-gray-800">{leader.player}</p>
                <p className="text-xs text-gray-500">{leader.team}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-orange-600">{leader[metric]}</p>
              {extraMetric && <p className="text-xs text-gray-500">{leader[extraMetric]}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Left: Hero + Stats */}
          <div className="lg:col-span-8 space-y-6">
            {/* Hero Header Card */}
            <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">🏀 Basketball Statistics</h1>
                  <p className="text-orange-100 text-sm sm:text-base">League leaders across key statistical categories</p>
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
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedLeague('nba')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedLeague === 'nba'
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-50 shadow'
                }`}
              >
                NBA
              </button>
              <button
                onClick={() => setSelectedLeague('wnba')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedLeague === 'wnba'
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-50 shadow'
                }`}
              >
                WNBA
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <StatCard title="Points Leaders" icon={Award} leaders={stats.pointsLeaders} metric="ppg" />
              <StatCard title="Assists Leaders" icon={Target} leaders={stats.assistsLeaders} metric="apg" />
              <StatCard title="Rebounds Leaders" icon={TrendingUp} leaders={stats.reboundsLeaders} metric="rpg" />
              <StatCard title="Three-Point Leaders" icon={Zap} leaders={stats.threePointLeaders} metric="tpm" extraMetric="pct" />
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

export default Stats;