import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Trophy, MapPin, Users, Target, TrendingUp } from 'lucide-react';
import LiveTennisMatches from '../../data/LiveTennisMatches';

const MatchDetail = () => {
  const { matchId } = useParams();
  const [activeTab, setActiveTab] = useState('scorecard');

  const match = LiveTennisMatches.data.LiveMatches.find(
    m => m.match_id === matchId
  );

  if (!match) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Match not found</p>
      </div>
    );
  }

  const isDoubles = match.match_type.includes('Doubles');
  const stats = match.scorecard.statistics;

  const tabs = [
    { id: 'scorecard', label: 'Scorecard' },
    { id: 'statistics', label: 'Statistics' },
    { id: 'commentary', label: 'Commentary' },
    { id: 'info', label: 'Match Info' }
  ];

  const renderPlayerHeader = (player, index) => {
    if (isDoubles && player.team) {
      return (
        <div className="text-center">
          {player.team.map((p, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.country}</p>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="text-center">
        <h3 className="text-xl font-bold">{player.name}</h3>
        <p className="text-sm text-gray-600">{player.country}</p>
        <p className="text-xs text-gray-500">Rank: {player.ranking}</p>
        {player.seed && (
          <span className="inline-block mt-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
            Seed {player.seed}
          </span>
        )}
      </div>
    );
  };

  const renderScorecard = () => {
    const { current_set, previous_sets } = match.scorecard;
    
    return (
      <div className="space-y-6">
        {/* Set by Set Score */}
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Set Scores</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Player</th>
                  {previous_sets.map((_, idx) => (
                    <th key={idx} className="text-center py-2 px-4">Set {idx + 1}</th>
                  ))}
                  <th className="text-center py-2 px-4 bg-green-50">Set {current_set.set_number}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">
                    {isDoubles ? match.players[0].team.map(p => p.short_name).join(' / ') : match.players[0].short_name}
                  </td>
                  {previous_sets.map((set, idx) => (
                    <td key={idx} className="text-center py-3 px-4 font-semibold">
                      {isDoubles ? set.team1_games : set.player1_games}
                    </td>
                  ))}
                  <td className="text-center py-3 px-4 font-bold text-green-700 bg-green-50">
                    {isDoubles ? current_set.team1_games : current_set.player1_games}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">
                    {isDoubles ? match.players[1].team.map(p => p.short_name).join(' / ') : match.players[1].short_name}
                  </td>
                  {previous_sets.map((set, idx) => (
                    <td key={idx} className="text-center py-3 px-4 font-semibold">
                      {isDoubles ? set.team2_games : set.player2_games}
                    </td>
                  ))}
                  <td className="text-center py-3 px-4 font-bold text-green-700 bg-green-50">
                    {isDoubles ? current_set.team2_games : current_set.player2_games}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Current Game */}
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Current Game</h3>
          <div className="text-center">
            <p className="text-2xl font-bold mb-2">
              {isDoubles ? current_set.team1_points : current_set.player1_points} - {isDoubles ? current_set.team2_points : current_set.player2_points}
            </p>
            <p className="text-sm text-gray-600">Server: {match.scorecard.server}</p>
          </div>
        </div>

        {/* Highlights */}
        {match.highlights && match.highlights.length > 0 && (
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Match Highlights</h3>
            <ul className="space-y-2">
              {match.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Target className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  const renderStatistics = () => {
    if (!stats || isDoubles) {
      return (
        <div className="bg-white rounded-lg p-6">
          <p className="text-gray-600">Detailed statistics not available</p>
        </div>
      );
    }

    const statItems = [
      { key: 'aces', label: 'Aces' },
      { key: 'double_faults', label: 'Double Faults' },
      { key: 'first_serve_in_percentage', label: '1st Serve %', suffix: '%' },
      { key: 'first_serve_points_won_percentage', label: '1st Serve Points Won', suffix: '%' },
      { key: 'second_serve_points_won_percentage', label: '2nd Serve Points Won', suffix: '%' },
      { key: 'break_points_saved', label: 'Break Points Saved' },
      { key: 'break_points_converted', label: 'Break Points Converted' },
      { key: 'winners', label: 'Winners' },
      { key: 'unforced_errors', label: 'Unforced Errors' }
    ];

    return (
      <div className="bg-white rounded-lg p-6">
        <h3 className="text-lg font-bold mb-6">Match Statistics</h3>
        <div className="space-y-4">
          {statItems.map((stat) => (
            <div key={stat.key}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">{stats.player1[stat.key]}{stat.suffix || ''}</span>
                <span className="text-gray-600">{stat.label}</span>
                <span className="font-medium">{stats.player2[stat.key]}{stat.suffix || ''}</span>
              </div>
              <div className="flex gap-2">
                <div
                  className="h-2 bg-blue-600 rounded"
                  style={{
                    width: `${(stats.player1[stat.key] / (stats.player1[stat.key] + stats.player2[stat.key])) * 50}%`
                  }}
                ></div>
                <div
                  className="h-2 bg-red-600 rounded"
                  style={{
                    width: `${(stats.player2[stat.key] / (stats.player1[stat.key] + stats.player2[stat.key])) * 50}%`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCommentary = () => {
    return (
      <div className="bg-white rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">Live Commentary</h3>
        <div className="space-y-4">
          {match.commentary.map((comment, idx) => (
            <div key={idx} className="border-l-4 border-blue-600 pl-4">
              <p className="text-sm font-medium text-gray-600 mb-1">{comment.time}</p>
              <p className="text-gray-800">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderMatchInfo = () => {
    return (
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Tournament Information</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Tournament:</span>
              <span className="font-medium">{match.tournament.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Category:</span>
              <span className="font-medium">{match.tournament.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Surface:</span>
              <span className="font-medium">{match.tournament.surface}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Venue Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Stadium:</span>
              <span className="font-medium">{match.venue.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Location:</span>
              <span className="font-medium">{match.venue.city}, {match.venue.country}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Capacity:</span>
              <span className="font-medium">{match.venue.capacity?.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Match Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Weather:</span>
              <span className="font-medium">{match.info.weather}</span>
            </div>
            {match.info.attendance && (
              <div className="flex justify-between">
                <span className="text-gray-600">Attendance:</span>
                <span className="font-medium">{match.info.attendance.toLocaleString()}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Link
          to="/tennis/live"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Live Scores
        </Link>
      </div>

      {/* Match Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-12 mt-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="h-6 w-6" />
            <h1 className="text-2xl font-bold">{match.series}</h1>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              {match.match_type} - {match.match_number}
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {match.venue.name}
            </span>
            <span>{match.schedule.date} at {match.schedule.time}</span>
          </div>
        </div>
      </div>

      {/* Player Headers */}
      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-3 gap-4 items-center">
            {renderPlayerHeader(match.players[0], 0)}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-red-600">LIVE</span>
              </div>
              <p className="text-sm text-gray-600">{match.scorecard.current_status}</p>
            </div>
            {renderPlayerHeader(match.players[1], 1)}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 pb-12">
        {activeTab === 'scorecard' && renderScorecard()}
        {activeTab === 'statistics' && renderStatistics()}
        {activeTab === 'commentary' && renderCommentary()}
        {activeTab === 'info' && renderMatchInfo()}
      </div>
    </div>
  );
};

export default MatchDetail;