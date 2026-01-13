import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Calendar, Trophy, Search, Filter, MapPin } from 'lucide-react';
import footballData from '../../data/FootballData.json';
import TopFootballStories from '../../data/TopFootballStories.js';
import LatestNews from '../../data/LatestNews.js';

const FootballLiveScores = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('live');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompetition, setSelectedCompetition] = useState('all');
  const [matches, setMatches] = useState([]);
  const [competitions, setCompetitions] = useState(['all']);

  const handleStoryClick = (id) => {
    navigate(`/details/football/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  useEffect(() => {
    if (footballData.status === 'success' && footballData.data.LiveMatches) {
      setMatches(footballData.data.LiveMatches);
      const uniqueCompetitions = ['all', ...new Set(footballData.data.LiveMatches.map(m => m.competition))];
      setCompetitions(uniqueCompetitions);
    }
  }, []);

  const filteredMatches = matches.filter(match => {
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'live' && match.status === 'Live') ||
                      (activeTab === 'upcoming' && match.status === 'Upcoming') ||
                      (activeTab === 'finished' && match.status === 'Finished');
    
    const matchesCompetition = selectedCompetition === 'all' || match.competition === selectedCompetition;
    
    const matchesSearch = match.teams.home.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         match.teams.away.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTab && matchesCompetition && matchesSearch;
  });

  const getStatusBadge = (status, matchTime) => {
    if (status === 'Live') {
      return (
        <span className="flex items-center gap-1 text-[10px] sm:text-xs bg-red-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-bold animate-pulse">
          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          LIVE {matchTime}
        </span>
      );
    }
    if (status === 'Finished') {
      return <span className="text-[10px] sm:text-xs bg-gray-600 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-bold">FT</span>;
    }
    return <span className="text-[10px] sm:text-xs bg-blue-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-bold">Upcoming</span>;
  };

  const handleMatchClick = (matchId) => {
    navigate(`/football-scorecard/${matchId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left: Football Live Scores */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white rounded-xl shadow-xl p-5 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">⚽ Live Football Scores</h1>
                  <p className="text-blue-100 text-sm sm:text-base">Real-time match updates from around the world</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold">{new Date().toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-5">
              <div className="flex flex-col gap-2">
                <div className="relative">
                  
                </div>

                <div className="relative">
                  
                </div>
              </div>

              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {['all', 'live', 'upcoming', 'finished'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all text-sm ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Match Cards - Fully Responsive */}
            <div className="space-y-4">
              {filteredMatches.length === 0 ? (
                <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12 text-center">
                  <div className="text-5xl sm:text-6xl mb-4">⚽</div>
                  <p className="text-gray-500 text-base sm:text-lg">No matches found</p>
                  <p className="text-gray-400 text-sm mt-2">Try adjusting your filters</p>
                </div>
              ) : (
                filteredMatches.map(match => (
                  <div
                    key={match.match_id}
                    onClick={() => handleMatchClick(match.match_id)}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100 overflow-hidden"
                  >
                    {/* Competition & Status */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
                      <div className="flex items-center gap-2 truncate">
                        <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="font-medium truncate">{match.competition}</span>
                      </div>
                      {getStatusBadge(match.status, match.scores.current_score.match_time)}
                    </div>

                    {/* Match Content - Responsive Layout */}
                    <div className="p-4 sm:p-5">
                      {/* Mobile: Vertical Stack | Desktop: 3-column grid */}
                      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:items-center gap-4 lg:gap-6">
                        {/* Home Team */}
                        <div className="flex flex-row-reverse lg:flex-row items-center justify-end lg:justify-end gap-3">
                          <div className="text-right lg:text-right">
                            <p className="font-bold text-base sm:text-lg text-gray-800 truncate max-w-[140px] sm:max-w-none">
                              {match.teams.home.name}
                            </p>
                            <p className="text-xs text-gray-500 hidden sm:block">{match.teams.home.manager}</p>
                          </div>
                          <img 
                            src={match.images.team1_logo} 
                            alt={match.teams.home.name}
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
                            onError={(e) => e.target.style.display = 'none'}
                          />
                        </div>

                        {/* Score - Center */}
                        <div className="text-center order-first lg:order-none">
                          <div className="inline-block bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg">
                            <p className="text-2xl sm:text-4xl font-bold">
                              {match.scores.current_score.home_goals} - {match.scores.current_score.away_goals}
                            </p>
                          </div>
                        </div>

                        {/* Away Team */}
                        <div className="flex items-center gap-3">
                          <img 
                            src={match.images.team2_logo} 
                            alt={match.teams.away.name}
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
                            onError={(e) => e.target.style.display = 'none'}
                          />
                          <div className="text-left">
                            <p className="font-bold text-base sm:text-lg text-gray-800 truncate max-w-[140px] sm:max-w-none">
                              {match.teams.away.name}
                            </p>
                            <p className="text-xs text-gray-500 hidden sm:block">{match.teams.away.manager}</p>
                          </div>
                        </div>
                      </div>

                      {/* Venue Info - Responsive Wrap */}
                      <div className="mt-4 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs text-gray-600">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span className="text-xs sm:text-sm">{new Date(match.schedule.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="text-xs sm:text-sm">{match.schedule.kickoff_time}</span>
                        </div>
                        <div className="flex items-center gap-1.5 max-w-[180px]">
                          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="truncate text-xs sm:text-sm">{match.venue.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Stats Footer */}
            {matches.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">{matches.length}</div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">Total Matches</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-red-600">
                      {matches.filter(m => m.status === 'Live').length}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">Live Now</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-green-600">
                      {matches.filter(m => m.status === 'Finished').length}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">Finished</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-indigo-600">
                      {matches.filter(m => m.status === 'Upcoming').length}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">Upcoming</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Top Football Stories (Desktop) */}
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
                onClick={() => navigate('/all-top-football-stories')}
                className="mt-6 w-full text-center text-blue-600 font-medium hover:underline text-sm"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Top Football Stories & Latest News */}
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
              className="mt-4 w-full text-center text-blue-600 font-medium hover:underline text-sm"
            >
              View All Stories →
            </button>
          </div>
        </div>
      </div>

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

export default FootballLiveScores;