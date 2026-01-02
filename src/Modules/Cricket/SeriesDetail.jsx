import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cricketData from '../../data/ScheduleMatch.json';

const SeriesDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Series mapping
  const seriesMapping = {
    'icc-mens-t20-world-cup-2026': 'ICC Mens T20 World Cup 2026',
    'the-ashes-2025-26': 'The Ashes',
    'ipl-2026': 'Indian Premier League',
  };

  const seriesName = seriesMapping[slug];

  // Find matches for this series
  const getSeriesMatches = () => {
    const allMatches = [];
    
    Object.keys(cricketData.cricket_matches).forEach((category) => {
      const categoryMatches = cricketData.cricket_matches[category].matches || [];
      categoryMatches.forEach((match) => {
        // Match series name with the current series
        if (match.series.name === seriesName) {
          allMatches.push(match);
        }
      });
    });

    return allMatches;
  };

  const matches = getSeriesMatches();

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

  if (!seriesName) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Series Not Found</h2>
          <button
            onClick={() => navigate('/cricket/series')}
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            ← Back to Series
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/cricket/series')}
          className="mb-4 text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2"
        >
          ← Back to Series
        </button>

        {/* Series Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{seriesName}</h1>
          {matches.length > 0 && (
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="font-medium">Format: {matches[0].series.format}</span>
              <span>•</span>
              <span className="font-medium">Season: {matches[0].series.season}</span>
              <span>•</span>
              <span className="font-medium">{matches.length} Match{matches.length > 1 ? 'es' : ''}</span>
            </div>
          )}
        </div>

        {/* Matches Schedule */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule</h2>
        
        <div className="space-y-4">
          {matches.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-10 text-center">
              <p className="text-gray-500 text-lg">No matches scheduled for this series yet.</p>
            </div>
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

export default SeriesDetail;