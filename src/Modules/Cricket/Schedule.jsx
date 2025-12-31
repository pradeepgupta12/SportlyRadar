import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cricketData from '../../data/ScheduleMatch.json'; // Adjust path if needed

const Schedule = () => {
  const [activeCategory, setActiveCategory] = useState('international');
  const navigate = useNavigate();

  const categories = [
    { id: 'international', label: 'International' },
    { id: 't20_leagues', label: 'T20 Leagues' },
    { id: 'domestic', label: 'Domestic' },
    { id: 'women', label: 'Women' },
    { id: 'all', label: 'All Matches' },
  ];

  const getMatches = () => {
    if (activeCategory === 'all') {
      return [
        ...cricketData.cricket_matches.international.matches,
        ...cricketData.cricket_matches.t20_leagues.matches,
        ...cricketData.cricket_matches.domestic.matches,
        ...cricketData.cricket_matches.women.matches,
      ];
    }
    return cricketData.cricket_matches[activeCategory]?.matches || [];
  };

  const matches = getMatches();

  const handleMatchClick = (matchId) => {
    navigate(`/cricket/match/${matchId}`);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'TBA';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).toUpperCase().replace(',', '');
  };

  const formatTime = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cricket Schedule</h1>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat.id
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Matches */}
        <div className="space-y-4">
          {matches.length === 0 ? (
            <p className="text-center text-gray-500 py-10">No matches scheduled.</p>
          ) : (
            matches.map((match) => {
              const { matchInfo, series } = match;
              const venue = matchInfo.venue || {};

              return (
                <div
                  key={match.matchId}
                  onClick={() => handleMatchClick(match.matchId)}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer p-5"
                >
                  <div className="text-xs text-gray-500 font-medium mb-1">
                    {formatDate(matchInfo.dateTime?.venueLocal)}
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm font-semibold text-gray-700">
                        {series.name}, {series.season}
                      </div>
                      <div className="text-lg font-bold text-gray-900 mt-1">
                        {matchInfo.matchTitle}
                        {matchInfo.day && ` • ${matchInfo.day}`}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {venue.name}, {venue.city}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-800">
                        {formatTime(matchInfo.dateTime?.venueLocal)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {formatTime(matchInfo.dateTime?.gmt)} GMT
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;