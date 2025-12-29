import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import hockeyData from '../data/LiveHockeyMatchDetail.js';

const HockeyScorecard = () => {
  const { matchId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('info');
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    const match = hockeyData.data.matches.find(m => m.match_id === matchId);
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
    { id: 'scorecard', label: 'Scorecard' },
    { id: 'squads', label: 'Squads' },
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
        <InfoRow label="Series" value={matchData.series} />
        <InfoRow label="Match Type" value={matchData.match_type} />
        <InfoRow label="Match Number" value={matchData.match_number} />
        <InfoRow label="Date" value={matchData.info.date} />
        <InfoRow label="Start Time" value={matchData.info.start_time} />
        <InfoRow label="Venue" value={`${matchData.info.venue.name}, ${matchData.info.venue.city}`} hasArrow />
        <InfoRow label="Umpires" value={matchData.info.umpires?.join(', ')} />
        <InfoRow label="Video Umpire" value={matchData.info.match_officials?.[0]?.replace('Video Umpire: ', '')} />
      </div>
    </div>
  );

  const renderLive = () => (
    <div className=" p-4 sm:p-6">
      <h2 className="text-lg font-bold mb-4">LIVE MATCH</h2>
      
      <div className="bg-red-600 text-white p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <img src={matchData.images.team1_flag} alt={matchData.squads.teams[0].name} className="w-12 h-12 object-contain" />
            <div>
              <p className="font-semibold text-lg">{matchData.squads.teams[0].name}</p>
              <p className="text-xs opacity-90">{matchData.squads.teams[0].short_name}</p>
            </div>
          </div>
          <div className="text-4xl font-bold">{matchData.scorecard.team_stats[0].total_goals}</div>
        </div>

        <div className="text-center py-2 text-sm font-semibold">
          Q{matchData.info.current_quarter} • {matchData.info.time_remaining_in_quarter} remaining
        </div>

        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold">{matchData.scorecard.team_stats[1].total_goals}</div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="font-semibold text-lg">{matchData.squads.teams[1].name}</p>
              <p className="text-xs opacity-90">{matchData.squads.teams[1].short_name}</p>
            </div>
            <img src={matchData.images.team2_flag} alt={matchData.squads.teams[1].name} className="w-12 h-12 object-contain" />
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded mb-4">
        <h3 className="font-semibold mb-2">Quarter Scores</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {matchData.scorecard.quarters.map((quarter, idx) => (
            <div key={idx} className="bg-white p-2 rounded text-center">
              <p className="text-xs text-gray-600">Q{quarter.quarter}</p>
              <p className="font-bold text-sm">{quarter.score}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold">Goal Scorers</h3>
        {matchData.scorecard.player_stats.goal_scorers.map((scorer, idx) => (
          <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded">
            <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0">
              Q{scorer.quarter}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{scorer.name}</p>
              <p className="text-xs text-gray-600">{scorer.team} • {scorer.type} • {scorer.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderScorecard = () => (
    <div className=" p-4">
      <h2 className="text-lg font-bold mb-4">SCORECARD</h2>
      
      <div className="space-y-6">
        {matchData.scorecard.quarters.map((quarter, idx) => (
          <div key={idx} className="border rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white p-3 font-semibold">
              Quarter {quarter.quarter} - {quarter.score}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-2">Team</th>
                    <th className="p-2 text-center">Goals</th>
                    <th className="p-2 text-center">Shots</th>
                    <th className="p-2 text-center">Circle Entries</th>
                    <th className="p-2 text-center">Penalty Corners</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {quarter.teams.map((team, tidx) => (
                    <tr key={tidx} className="hover:bg-gray-50">
                      <td className="p-2 font-medium">{team.team}</td>
                      <td className="p-2 text-center font-semibold">{team.goals}</td>
                      <td className="p-2 text-center">{team.shots}</td>
                      <td className="p-2 text-center">{team.circle_entries}</td>
                      <td className="p-2 text-center">{team.penalty_corners}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <div className="mt-6">
          <h3 className="font-semibold mb-3">Match Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matchData.scorecard.team_stats.map((team, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-3 text-center">{team.team}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Total Goals</span>
                    <span className="font-semibold">{team.total_goals}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shots</span>
                    <span className="font-semibold">{team.shots}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Circle Entries</span>
                    <span className="font-semibold">{team.circle_entries}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Penalty Corners</span>
                    <span className="font-semibold">{team.penalty_corners_awarded} ({team.penalty_corners_converted} converted)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Possession</span>
                    <span className="font-semibold">{team.possession_percentage}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cards</span>
                    <span className="font-semibold">
                      <span className="text-green-600">G:{team.green_cards}</span>{' '}
                      <span className="text-yellow-600">Y:{team.yellow_cards}</span>{' '}
                      <span className="text-red-600">R:{team.red_cards}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSquads = () => (
    <div className=" p-4">
      <h2 className="text-lg font-bold mb-4">SQUADS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {matchData.squads.teams.map((team, idx) => (
          <div key={idx}>
            <div className="bg-red-600 text-white p-3 rounded-t-lg">
              <h3 className="font-semibold">{team.name}</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-b-lg">
              <h4 className="font-semibold mb-2 text-sm">Players</h4>
              <div className="space-y-2">
                {team.players.map((player, pidx) => (
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
                {team.supporting_staff.map((staff, sidx) => (
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

  const renderCommentary = () => (
    <div className=" p-4">
      <h2 className="text-lg font-bold mb-4">COMMENTARY</h2>
      <div className="space-y-3">
        {matchData.commentary.map((comment, idx) => (
          <div key={idx} className="border-l-4 border-red-600 pl-4 py-2 bg-gray-50">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-red-600">{comment.time}</span>
              <span className="text-xs text-gray-600">Q{comment.quarter}</span>
            </div>
            <p className="text-sm text-gray-700">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderHighlights = () => (
    <div className=" p-4">
      <h2 className="text-lg font-bold mb-4">HIGHLIGHTS</h2>
      <div className="space-y-4">
        {matchData.highlights.map((highlight, idx) => (
          <div key={idx} className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <div className="flex items-start gap-3">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0">
                {idx + 1}
              </div>
              <div className="flex-1">
                <p className="text-xs text-red-600 font-semibold mb-1">{highlight.time}</p>
                <p className="text-sm text-gray-800">{highlight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'info': return renderInfo();
      case 'live': return renderLive();
      case 'scorecard': return renderScorecard();
      case 'squads': return renderSquads();
      case 'commentary': return renderCommentary();
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
                {matchData.squads.teams[0].name} vs {matchData.squads.teams[1].name} - {matchData.series}
              </h1>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-600 mt-1">
                <span>{matchData.match_number}</span>
                <span>•</span>
                <span>{matchData.info.venue.name}, {matchData.info.venue.city}</span>
                <span>•</span>
                <span>{matchData.info.date}</span>
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
                    ? 'text-red-600 border-b-2 border-red-600'
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

export default HockeyScorecard;