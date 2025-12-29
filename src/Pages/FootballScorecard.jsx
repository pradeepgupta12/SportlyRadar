// FootballScorecard.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import footballData from '../data/FootballData.json';

const FootballScorecard = () => {
  const { matchId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('info');
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    const match = footballData.data.LiveMatches.find(m => m.match_id === matchId);
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
    { id: 'lineups', label: 'Lineups' },
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
        <InfoRow label="Competition" value={matchData.competition} />
        <InfoRow label="Match Type" value={matchData.match_type} />
        <InfoRow label="Match Number" value={matchData.match_number} />
        <InfoRow label="Date" value={matchData.schedule.date} />
        <InfoRow label="Kickoff Time" value={matchData.schedule.kickoff_time} />
        <InfoRow label="Venue" value={`${matchData.venue.name}, ${matchData.venue.city}`} hasArrow />
        <InfoRow label="Capacity" value={matchData.venue.capacity.toLocaleString()} />
        <InfoRow label="Attendance" value={matchData.venue.attendance.toLocaleString()} />
        <InfoRow label="Referee" value={matchData.match_summary.referee} />
        <InfoRow label="Broadcast" value={matchData.schedule.broadcast.join(', ')} />

        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2">{matchData.teams.home.name}</h3>
          <p className="text-sm text-gray-600">Manager: {matchData.teams.home.manager}</p>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2">{matchData.teams.away.name}</h3>
          <p className="text-sm text-gray-600">Manager: {matchData.teams.away.manager}</p>
        </div>
      </div>
    </div>
  );

  const renderLive = () => (
    <div className=" p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">LIVE MATCH</h2>
      
      <div className="bg-green-600 text-white p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <img src={matchData.images.team1_logo} alt={matchData.teams.home.name} className="w-12 h-12 object-contain" />
            <div>
              <p className="font-semibold text-lg">{matchData.teams.home.name}</p>
              <p className="text-xs opacity-90">{matchData.teams.home.short_name}</p>
            </div>
          </div>
          <div className="text-4xl font-bold">{matchData.scores.current_score.home_goals}</div>
        </div>

        <div className="text-center py-2 text-sm font-semibold">
          {matchData.scores.current_score.match_time}' - {matchData.match_summary.match_time}
        </div>

        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold">{matchData.scores.current_score.away_goals}</div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="font-semibold text-lg">{matchData.teams.away.name}</p>
              <p className="text-xs opacity-90">{matchData.teams.away.short_name}</p>
            </div>
            <img src={matchData.images.team2_logo} alt={matchData.teams.away.name} className="w-12 h-12 object-contain" />
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-4">
        <p className="text-sm font-semibold text-blue-800">{matchData.match_summary.current_status}</p>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Goal Scorers</h3>
        {matchData.scores.current_score.scorers.map((scorer, idx) => (
          <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0">
              {scorer.minute}'
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{scorer.player}</p>
              <p className="text-xs text-gray-600">{scorer.team} • Assist: {scorer.assist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStats = () => (
    <div className=" p-4">
      <h2 className="text-lg font-bold mb-4">MATCH STATISTICS</h2>

      <div className="space-y-4">
        <StatBar label="Possession" 
          value1={matchData.stats.home_team.possession} 
          value2={matchData.stats.away_team.possession} 
          team1={matchData.teams.home.short_name}
          team2={matchData.teams.away.short_name} />
        
        <StatBar label="Shots" 
          value1={matchData.stats.home_team.shots} 
          value2={matchData.stats.away_team.shots}
          team1={matchData.teams.home.short_name}
          team2={matchData.teams.away.short_name} />
        
        <StatBar label="Shots on Target" 
          value1={matchData.stats.home_team.shots_on_target} 
          value2={matchData.stats.away_team.shots_on_target}
          team1={matchData.teams.home.short_name}
          team2={matchData.teams.away.short_name} />
        
        <StatBar label="Passes Completed" 
          value1={matchData.stats.home_team.passes_completed} 
          value2={matchData.stats.away_team.passes_completed}
          team1={matchData.teams.home.short_name}
          team2={matchData.teams.away.short_name} />
        
        <StatBar label="Corners" 
          value1={matchData.stats.home_team.corners} 
          value2={matchData.stats.away_team.corners}
          team1={matchData.teams.home.short_name}
          team2={matchData.teams.away.short_name} />
        
        <StatBar label="Fouls" 
          value1={matchData.stats.home_team.fouls} 
          value2={matchData.stats.away_team.fouls}
          team1={matchData.teams.home.short_name}
          team2={matchData.teams.away.short_name} />
        
        <StatBar label="Yellow Cards" 
          value1={matchData.stats.home_team.yellow_cards} 
          value2={matchData.stats.away_team.yellow_cards}
          team1={matchData.teams.home.short_name}
          team2={matchData.teams.away.short_name} />
        
        <StatBar label="Red Cards" 
          value1={matchData.stats.home_team.red_cards} 
          value2={matchData.stats.away_team.red_cards}
          team1={matchData.teams.home.short_name}
          team2={matchData.teams.away.short_name} />
      </div>
    </div>
  );

  const StatBar = ({ label, value1, value2, team1, team2 }) => {
    const total = value1 + value2;
    const percentage1 = total > 0 ? (value1 / total) * 100 : 50;
    const percentage2 = total > 0 ? (value2 / total) * 100 : 50;

    return (
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="font-semibold">{value1}</span>
          <span className="text-gray-600">{label}</span>
          <span className="font-semibold">{value2}</span>
        </div>
        <div className="flex h-2 rounded-full overflow-hidden bg-gray-200">
          <div className="bg-blue-600" style={{ width: `${percentage1}%` }}></div>
          <div className="bg-red-600" style={{ width: `${percentage2}%` }}></div>
        </div>
      </div>
    );
  };

  const renderLineups = () => (
    <div className=" p-4">
      <h2 className="text-lg font-bold mb-4">LINEUPS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="bg-blue-600 text-white p-3 rounded-t-lg">
            <h3 className="font-semibold">{matchData.teams.home.name}</h3>
            <p className="text-xs opacity-90">Formation: {matchData.lineups.home.formation}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-b-lg">
            <h4 className="font-semibold mb-2 text-sm">Starting XI</h4>
            <div className="space-y-2">
              {matchData.lineups.home.starting_xi.map((player, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 bg-white rounded">
                  <span className="text-xs font-semibold text-gray-500 w-6">{idx + 1}</span>
                  <span className="text-sm">{player}</span>
                </div>
              ))}
            </div>
            <h4 className="font-semibold mt-4 mb-2 text-sm">Bench</h4>
            <div className="space-y-2">
              {matchData.lineups.home.bench.map((player, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 bg-white rounded opacity-70">
                  <span className="text-xs font-semibold text-gray-500 w-6">{idx + 12}</span>
                  <span className="text-sm">{player}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-red-600 text-white p-3 rounded-t-lg">
            <h3 className="font-semibold">{matchData.teams.away.name}</h3>
            <p className="text-xs opacity-90">Formation: {matchData.lineups.away.formation}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-b-lg">
            <h4 className="font-semibold mb-2 text-sm">Starting XI</h4>
            <div className="space-y-2">
              {matchData.lineups.away.starting_xi.map((player, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 bg-white rounded">
                  <span className="text-xs font-semibold text-gray-500 w-6">{idx + 1}</span>
                  <span className="text-sm">{player}</span>
                </div>
              ))}
            </div>
            <h4 className="font-semibold mt-4 mb-2 text-sm">Bench</h4>
            <div className="space-y-2">
              {matchData.lineups.away.bench.map((player, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 bg-white rounded opacity-70">
                  <span className="text-xs font-semibold text-gray-500 w-6">{idx + 12}</span>
                  <span className="text-sm">{player}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCommentary = () => (
    <div className=" p-4">
      <h2 className="text-lg font-bold mb-4">COMMENTARY</h2>
      <div className="space-y-3">
        {matchData.commentary.map((comment, idx) => (
          <div key={idx} className="border-l-4 border-green-600 pl-4 py-2 bg-gray-50">
            <span className="font-semibold text-green-600">{comment.minute}</span>
            <p className="text-sm text-gray-700 mt-1">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderHighlights = () => (
    <div className=" p-4">
      <h2 className="text-lg font-bold mb-4">MATCH HIGHLIGHTS</h2>
      <div className="space-y-4">
        {matchData.highlights.map((highlight, idx) => (
          <div key={idx} className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-sm font-semibold text-gray-800">{highlight}</p>
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
      case 'lineups': return renderLineups();
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
            <button 
              onClick={() => navigate('/')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1 min-w-0">
              <h1 className="text-base sm:text-lg font-bold truncate">
                {matchData.teams.home.name} vs {matchData.teams.away.name} - {matchData.competition}
              </h1>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-600 mt-1">
                <span>{matchData.match_number}</span>
                <span>•</span>
                <span className="truncate">{matchData.venue.name}, {matchData.venue.city}</span>
                <span>•</span>
                <span>{matchData.schedule.date}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-green-600 border-b-2 border-green-600'
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

export default FootballScorecard;