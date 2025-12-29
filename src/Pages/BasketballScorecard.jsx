import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import basketballData from '../data/BasketballData.json';

const BasketballScorecard = () => {
  const { matchId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('info');
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    const match = basketballData.live_matches.find(m => m.match_id === matchId);
    setMatchData(match);
  }, [matchId]);

  if (!matchData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading match data...</p>
      </div>
    );
  }

  const tabs = [
    { id: 'info', label: 'Info' },
    { id: 'live', label: 'Live' },
    { id: 'stats', label: 'Stats' },
    { id: 'players', label: 'Players' },
    { id: 'squads', label: 'Squads' },
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
        <InfoRow label="League" value={matchData.league} />
        <InfoRow label="Match Type" value={matchData.match_type} />
        <InfoRow label="Round" value={matchData.match_round} />
        <InfoRow label="Date" value={matchData.date} />
        <InfoRow label="Arena" value={`${matchData.arena.name}, ${matchData.arena.city}`} hasArrow />
        <InfoRow label="Tip Off" value={matchData.match_info.tip_off} />
        <InfoRow label="Current Status" value={matchData.match_info.current_status} />
      </div>
    </div>
  );

  const renderLive = () => (
    <div className=" p-4 sm:p-6">
      <h2 className="text-lg font-bold mb-4">LIVE SCORE</h2>
      
      <div className="bg-orange-600 text-white p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <img src={matchData.images.team1_flag} alt={matchData.teams[0].name} className="w-12 h-12 object-contain" />
            <div>
              <p className="font-semibold text-lg">{matchData.teams[0].name}</p>
              <p className="text-xs opacity-90">{matchData.teams[0].short_name}</p>
            </div>
          </div>
          <div className="text-4xl font-bold">{matchData.teams[0].total_points}</div>
        </div>

        <div className="text-center py-2 text-sm font-semibold">
          Q{matchData.match_info.quarter} • {matchData.match_info.time_remaining} remaining
        </div>

        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold">{matchData.teams[1].total_points}</div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="font-semibold text-lg">{matchData.teams[1].name}</p>
              <p className="text-xs opacity-90">{matchData.teams[1].short_name}</p>
            </div>
            <img src={matchData.images.team2_flag} alt={matchData.teams[1].name} className="w-12 h-12 object-contain" />
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded mb-4">
        <h3 className="font-semibold mb-2">Quarter Scores</h3>
        <div className="grid grid-cols-4 gap-2">
          {matchData.quarter_scores.map((quarter, idx) => (
            <div key={idx} className="bg-white p-2 rounded text-center">
              <p className="text-xs text-gray-600">Q{quarter.quarter_number}</p>
              <p className="font-bold">{quarter.team1_points} - {quarter.team2_points}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Commentary</h3>
        {matchData.commentary.map((comment, idx) => (
          <div key={idx} className="bg-gray-50 p-3 rounded">
            <p className="text-sm text-gray-700">{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStats = () => (
    <div className=" p-4">
      <h2 className="text-lg font-bold mb-4">TEAM STATISTICS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {matchData.teams.map((team, idx) => (
          <div key={idx} className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-3 text-center">{team.name}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Field Goals</span>
                <span className="font-semibold">{team.team_stats.field_goals_made}/{team.team_stats.field_goals_attempted} ({team.team_stats.fg_percentage})</span>
              </div>
              <div className="flex justify-between">
                <span>3-Pointers</span>
                <span className="font-semibold">{team.team_stats.three_pointers_made}/{team.team_stats.three_pointers_attempted} ({team.team_stats.three_pt_percentage})</span>
              </div>
              <div className="flex justify-between">
                <span>Free Throws</span>
                <span className="font-semibold">{team.team_stats.free_throws_made}/{team.team_stats.free_throws_attempted} ({team.team_stats.ft_percentage})</span>
              </div>
              <div className="flex justify-between">
                <span>Rebounds</span>
                <span className="font-semibold">{team.team_stats.rebounds}</span>
              </div>
              <div className="flex justify-between">
                <span>Assists</span>
                <span className="font-semibold">{team.team_stats.assists}</span>
              </div>
              <div className="flex justify-between">
                <span>Turnovers</span>
                <span className="font-semibold">{team.team_stats.turnovers}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPlayers = () => (
    <div className=" p-4">
      <h2 className="text-lg font-bold mb-4">TOP PLAYERS</h2>
      {matchData.teams.map((team, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="font-semibold mb-3 text-lg">{team.name}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-2">Player</th>
                  <th className="p-2 text-center">PTS</th>
                  <th className="p-2 text-center">REB</th>
                  <th className="p-2 text-center">AST</th>
                  <th className="p-2 text-center">FG</th>
                  <th className="p-2 text-center">3PT</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {team.player_stats.map((player, pidx) => (
                  <tr key={pidx} className="hover:bg-gray-50">
                    <td className="p-2 font-medium text-blue-600">{player.name}</td>
                    <td className="p-2 text-center font-semibold">{player.points}</td>
                    <td className="p-2 text-center">{player.rebounds}</td>
                    <td className="p-2 text-center">{player.assists}</td>
                    <td className="p-2 text-center">{player.field_goals_made}/{player.field_goals_attempted}</td>
                    <td className="p-2 text-center">{player.three_pointers_made}/{player.three_pointers_attempted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSquads = () => (
    <div className=" p-4">
      <h2 className="text-lg font-bold mb-4">SQUADS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {matchData.teams.map((team, idx) => (
          <div key={idx}>
            <div className="bg-orange-600 text-white p-3 rounded-t-lg">
              <h3 className="font-semibold">{team.name}</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-b-lg">
              <h4 className="font-semibold mb-2 text-sm">Players</h4>
              <div className="space-y-2">
                {team.squad.players.map((player, pidx) => (
                  <div key={pidx} className="flex items-center justify-between p-2 bg-white rounded">
                    <div>
                      <span className="text-sm font-medium">{player.name}</span>
                      {player.is_captain && <span className="ml-2 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded">C</span>}
                    </div>
                    <span className="text-xs text-gray-600">{player.role}</span>
                  </div>
                ))}
              </div>

              <h4 className="font-semibold mt-4 mb-2 text-sm">Coaching Staff</h4>
              <div className="space-y-2">
                {team.squad.supporting_staff.map((staff, sidx) => (
                  <div key={sidx} className="flex items-center justify-between p-2 bg-white rounded">
                    <span className="text-sm">{staff.name}</span>
                    <span className="text-xs text-gray-600">{staff.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderHighlights = () => (
    <div className=" p-4">
      <h2 className="text-lg font-bold mb-4">HIGHLIGHTS</h2>
      <div className="space-y-3">
        {matchData.highlights.map((highlight, idx) => (
          <div key={idx} className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <p className="text-sm text-gray-800">{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'info': return renderInfo();
      case 'live': return renderLive();
      case 'stats': return renderStats();
      case 'players': return renderPlayers();
      case 'squads': return renderSquads();
      case 'highlights': return renderHighlights();
      default: return renderInfo();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1 min-w-0">
              <h1 className="text-base sm:text-lg font-bold truncate">
                {matchData.teams[0].name} vs {matchData.teams[1].name} - {matchData.league}
              </h1>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-600 mt-1">
                <span>{matchData.match_round}</span>
                <span>•</span>
                <span>{matchData.arena.name}, {matchData.arena.city}</span>
                <span>•</span>
                <span>{matchData.date}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-1 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default BasketballScorecard;