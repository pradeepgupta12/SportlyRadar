// ============================================
// 4. TENNIS SCORECARD - TennisScorecard.jsx
// ============================================
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import tennisData from '../data/LiveTennisMatches.js';

const TennisScorecard = () => {
  const { matchId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('info');
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    const match = tennisData.data.LiveMatches.find(m => m.match_id === matchId);
    setMatchData(match);
  }, [matchId]);

  if (!matchData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading match data...</p>
      </div>
    );
  }

  const isDoubles = matchData.match_type.includes('Doubles');

  const getPlayerName = (player) => {
    if (player.team) {
      return `${player.team[0].name} / ${player.team[1].name}`;
    }
    return player.name;
  };

  const getPlayerCountry = (player) => {
    if (player.team) {
      return `${player.team[0].country} / ${player.team[1].country}`;
    }
    return player.country;
  };

  const getPlayerShortName = (player) => {
    if (player.team) {
      return `${player.team[0].short_name} / ${player.team[1].short_name}`;
    }
    return player.short_name || player.name;
  };

  const tabs = [
    { id: 'info', label: 'Info' },
    { id: 'live', label: 'Live' },
    { id: 'stats', label: 'Stats' },
    { id: 'sets', label: 'Sets' },
    { id: 'commentary', label: 'Commentary' },
    { id: 'highlights', label: 'Highlights' }
  ];

  const InfoRow = ({ label, value, hasArrow }) => (
    <div className="flex justify-between items-center p-3 sm:p-4 hover:bg-gray-50">
      <span className="text-sm sm:text-base font-medium text-gray-700">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm sm:text-base text-gray-600 text-right">{value}</span>
        {hasArrow && <ChevronRight className="w-4 h-4 text-gray-400" />}
      </div>
    </div>
  );

  const renderInfo = () => (
    <div className=" p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">MATCH INFO</h2>
      <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
        <InfoRow label="Tournament" value={matchData.tournament.name} />
        <InfoRow label="Category" value={matchData.tournament.category} />
        <InfoRow label="Surface" value={matchData.tournament.surface} />
        <InfoRow label="Match Type" value={matchData.match_type} />
        <InfoRow label="Round" value={matchData.match_number} />
        <InfoRow label="Date" value={matchData.schedule.date} />
        <InfoRow label="Time" value={matchData.schedule.time} />
        <InfoRow label="Venue" value={`${matchData.venue.name}, ${matchData.venue.city}`} hasArrow />
        <InfoRow label="Capacity" value={matchData.venue.capacity?.toLocaleString() || 'N/A'} />
        {matchData.info?.weather && <InfoRow label="Weather" value={matchData.info.weather} />}
        {matchData.info?.attendance && <InfoRow label="Attendance" value={matchData.info.attendance.toLocaleString()} />}
      </div>
    </div>
  );

  const renderLive = () => (
    <div className=" p-4 sm:p-6">
      <h2 className="text-lg font-bold mb-4">LIVE SCORE</h2>

      <div className="bg-purple-600 text-white p-6 rounded-lg mb-6">
        <div className="space-y-6">
          {/* Player 1 / Team 1 */}
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <p className="font-semibold text-xl">{getPlayerName(matchData.players[0])}</p>
              <p className="text-sm opacity-90">{getPlayerCountry(matchData.players[0])}</p>
            </div>
            <div className="flex items-center gap-6">
              {matchData.scorecard.previous_sets.map((set, idx) => (
                <div key={idx} className="text-3xl font-bold w-10 text-center">
                  {isDoubles ? set.team1_games : set.player1_games}
                </div>
              ))}
              <div className="text-4xl font-bold w-12 text-center bg-white text-purple-600 rounded-lg">
                {isDoubles ? matchData.scorecard.current_set.team1_games : matchData.scorecard.current_set.player1_games}
              </div>
              <div className="text-2xl font-semibold w-16 text-center">
                {isDoubles ? matchData.scorecard.current_set.team1_points : matchData.scorecard.current_set.player1_points}
              </div>
            </div>
          </div>

          <div className="border-t border-white/30"></div>

          {/* Player 2 / Team 2 */}
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <p className="font-semibold text-xl">{getPlayerName(matchData.players[1])}</p>
              <p className="text-sm opacity-90">{getPlayerCountry(matchData.players[1])}</p>
            </div>
            <div className="flex items-center gap-6">
              {matchData.scorecard.previous_sets.map((set, idx) => (
                <div key={idx} className="text-3xl font-bold w-10 text-center">
                  {isDoubles ? set.team2_games : set.player2_games}
                </div>
              ))}
              <div className="text-4xl font-bold w-12 text-center bg-white text-purple-600 rounded-lg">
                {isDoubles ? matchData.scorecard.current_set.team2_games : matchData.scorecard.current_set.player2_games}
              </div>
              <div className="text-2xl font-semibold w-16 text-center">
                {isDoubles ? matchData.scorecard.current_set.team2_points : matchData.scorecard.current_set.player2_points}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 pt-4 border-t border-white/30">
          <p className="text-lg font-semibold">Set {matchData.scorecard.current_set.set_number}</p>
          <p className="text-sm mt-1 opacity-90">Server: {matchData.scorecard.server}</p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg">
        <p className="text-base font-semibold text-blue-900">{matchData.scorecard.current_status}</p>
      </div>
    </div>
  );

  const StatRow = ({ label, value1, value2 }) => (
    <div className="flex justify-between items-center py-3 border-b border-gray-200">
      <span className="font-bold text-lg w-20 text-right text-purple-700">{value1}</span>
      <span className="text-gray-700 flex-1 text-center text-sm font-medium">{label}</span>
      <span className="font-bold text-lg w-20 text-left text-purple-700">{value2}</span>
    </div>
  );

  const renderStats = () => {
    const stats1 = isDoubles 
      ? matchData.scorecard.statistics.team1 
      : matchData.scorecard.statistics.player1;

    const stats2 = isDoubles 
      ? matchData.scorecard.statistics.team2 
      : matchData.scorecard.statistics.player2;

    return (
      <div className=" p-4 sm:p-6">
        <h2 className="text-lg font-bold mb-6">MATCH STATISTICS</h2>

        <div className="bg-gray-50 rounded-lg p-6">
          <div className="space-y-4">
            <StatRow label="Aces" value1={stats1.aces} value2={stats2.aces} />
            <StatRow label="Double Faults" value1={stats1.double_faults} value2={stats2.double_faults} />
            <StatRow label="1st Serve In %" value1={`${stats1.first_serve_in_percentage}%`} value2={`${stats2.first_serve_in_percentage}%`} />
            <StatRow label="1st Serve Points Won %" value1={`${stats1.first_serve_points_won_percentage}%`} value2={`${stats2.first_serve_points_won_percentage}%`} />
            <StatRow label="2nd Serve Points Won %" value1={`${stats1.second_serve_points_won_percentage}%`} value2={`${stats2.second_serve_points_won_percentage}%`} />
            <StatRow label="Break Points Saved" value1={stats1.break_points_saved} value2={stats2.break_points_saved} />
            <StatRow label="Break Points Converted" value1={stats1.break_points_converted} value2={stats2.break_points_converted} />
            <StatRow label="Winners" value1={stats1.winners} value2={stats2.winners} />
            <StatRow label="Unforced Errors" value1={stats1.unforced_errors} value2={stats2.unforced_errors} />
          </div>
        </div>
      </div>
    );
  };

  const renderSets = () => (
    <div className=" p-4 sm:p-6">
      <h2 className="text-lg font-bold mb-6">SET SCORES</h2>

      <div className="space-y-6">
        {matchData.scorecard.previous_sets.map((set, idx) => (
          <div key={idx} className="border-2 border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-gray-700 text-white p-3 font-semibold text-center">
              Set {set.set_number} - Completed
            </div>
            <div className="p-5 bg-gray-50 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-lg">{getPlayerName(matchData.players[0])}</span>
                <span className="text-3xl font-bold text-gray-800">
                  {isDoubles ? set.team1_games : set.player1_games}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-lg">{getPlayerName(matchData.players[1])}</span>
                <span className="text-3xl font-bold text-gray-800">
                  {isDoubles ? set.team2_games : set.player2_games}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Current Set */}
        <div className="border-4 border-purple-600 rounded-lg overflow-hidden">
          <div className="bg-purple-600 text-white p-3 font-semibold text-center">
            Set {matchData.scorecard.current_set.set_number} - In Progress
          </div>
          <div className="p-5 bg-purple-50 space-y-6">
            <div className="flex justify-between items-center">
              <span className="font-medium text-lg">{getPlayerName(matchData.players[0])}</span>
              <div className="flex items-center gap-6">
                <span className="text-4xl font-bold">
                  {isDoubles ? matchData.scorecard.current_set.team1_games : matchData.scorecard.current_set.player1_games}
                </span>
                <span className="text-2xl font-semibold text-purple-700">
                  {isDoubles ? matchData.scorecard.current_set.team1_points : matchData.scorecard.current_set.player1_points}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-lg">{getPlayerName(matchData.players[1])}</span>
              <div className="flex items-center gap-6">
                <span className="text-4xl font-bold">
                  {isDoubles ? matchData.scorecard.current_set.team2_games : matchData.scorecard.current_set.player2_games}
                </span>
                <span className="text-2xl font-semibold text-purple-700">
                  {isDoubles ? matchData.scorecard.current_set.team2_points : matchData.scorecard.current_set.player2_points}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCommentary = () => (
    <div className=" p-4 sm:p-6">
      <h2 className="text-lg font-bold mb-6">COMMENTARY</h2>
      <div className="space-y-4">
        {matchData.commentary && matchData.commentary.length > 0 ? (
          matchData.commentary.map((comment, idx) => (
            <div key={idx} className="border-l-4 border-purple-600 pl-4 py-3 bg-purple-50 rounded-r-lg">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-bold text-purple-700">{comment.time}</span>
              </div>
              <p className="text-gray-800">{comment.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-8">No commentary available yet.</p>
        )}
      </div>
    </div>
  );

  const renderHighlights = () => (
    <div className=" p-4 sm:p-6">
      <h2 className="text-lg font-bold mb-6">HIGHLIGHTS</h2>
      <div className="space-y-5">
        {matchData.highlights && matchData.highlights.length > 0 ? (
          matchData.highlights.map((highlight, idx) => (
            <div key={idx} className="bg-purple-50 border-l-4 border-purple-600 p-5 rounded-r-lg">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-purple-800 mb-1">{highlight}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-8">No highlights available yet.</p>
        )}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'info': return renderInfo();
      case 'live': return renderLive();
      case 'stats': return renderStats();
      case 'sets': return renderSets();
      case 'commentary': return renderCommentary();
      case 'highlights': return renderHighlights();
      default: return renderInfo();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex-1">
              <h1 className="text-lg sm:text-xl font-bold truncate">
                {getPlayerShortName(matchData.players[0])} vs {getPlayerShortName(matchData.players[1])}
              </h1>
              <p className="text-sm text-gray-600">
                {matchData.tournament.name} • {matchData.match_number} • {matchData.venue.name}
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 overflow-x-auto pb-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 text-sm font-medium whitespace-nowrap rounded-t-lg transition ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 pb-10">
        {renderContent()}
      </div>
    </div>
  );
};

export default TennisScorecard;