

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import cricketData from '../../data/ScheduleMatch.json'; // Path adjust if needed

const tabs = ['Info', 'Live', 'Scorecard', 'Squads', 'Overs', 'Highlights', 'Full Commentary', 'News'];

const ScheduleMatchDetail = () => {
  const { matchId } = useParams();
  const [activeTab, setActiveTab] = useState('Info');

  // Find match
  let match = null;
  Object.values(cricketData.cricket_matches).forEach((category) => {
    const found = category.matches.find((m) => m.matchId === matchId);
    if (found) match = found;
  });

  if (!match) {
    return <div className="p-10 text-center text-xl text-gray-600">Match not found</div>;
  }

  const { matchInfo, series, tabs: matchTabs } = match;
  const venue = matchInfo.venue || {};

  const formatDate = (dateStr) => {
    if (!dateStr) return 'TBA';
    return new Date(dateStr).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const formatTime = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  const teams = Object.entries(matchTabs.squads || {});

  // Helper to get country code for flag (from existing JSON patterns)
  const getCountryCode = (teamName) => {
    if (teamName.includes('Australia') || teamName.includes('AUS')) return 'au';
    if (teamName.includes('England') || teamName.includes('ENG')) return 'gb-eng'; // Specific for England flag
    if (teamName.includes('India') || teamName.includes('IND')) return 'in';
    // Default fallback (most domestic/franchise are India)
    return 'in';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Teal with white text */}
      <div className=" text-black py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold">
            {matchInfo.matchTitle} - Live Cricket Score, Commentary
          </h1>
          <p className="text-sm mt-1 opacity-90">
            Series: {series.name}, {series.season} • Venue: {venue.name}, {venue.city}
          </p>
          <p className="text-sm mt-1">
            Date & Time: {formatDate(matchInfo.dateTime?.venueLocal)} {formatTime(matchInfo.dateTime?.venueLocal)} LOCAL
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white sticky top-16 z-20 shadow-sm ">
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-teal-600 text-teal-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        {/* INFO TAB - All table format */}
        {activeTab === 'Info' && (
          <div>
            <h2 className="text-xl font-bold mb-4">INFO</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <table className="w-full mb-8">
                  <tbody>
                    <tr>
                      <td className="py-2 font-medium text-gray-700 w-24">Match</td>
                      <td className="py-2 text-gray-900">
                        {matchInfo.matchTitle} • {series.name}, {series.season}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-gray-700">Series</td>
                      <td className="py-2 text-gray-900">{series.name}, {series.season}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-gray-700">Date</td>
                      <td className="py-2 text-gray-900">{formatDate(matchInfo.dateTime?.venueLocal)}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-gray-700">Time</td>
                      <td className="py-2 text-gray-900">
                        {formatTime(matchInfo.dateTime?.venueLocal)} LOCAL, {formatTime(matchInfo.dateTime?.gmt)} GMT
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-gray-700">Venue</td>
                      <td className="py-2 text-gray-900">{venue.name}, {venue.city}</td>
                    </tr>
                  </tbody>
                </table>

                {/* Squads Preview - Table format */}
                {teams.map(([teamName, teamData]) => (
                  <div key={teamName} className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-2">{teamName} squad</h4>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr>
                          <td className="py-1 font-medium text-gray-700 align-top">Players</td>
                          <td className="py-1 text-gray-900">
                            {teamData.players?.map((p) => p.name).join(', ')}
                            {teamData.captain && <span className="ml-2">({teamData.captain} (c))</span>}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>

              {/* Right Column - Venue Guide */}
              <div>
                <div className="bg-gray-200 px-4 py-2 font-bold mb-4">VENUE GUIDE</div>
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="py-2 font-medium text-gray-700 w-24">Stadium</td>
                      <td className="py-2 text-gray-900">{venue.name}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-gray-700">City</td>
                      <td className="py-2 text-gray-900">{venue.city}, {venue.country || 'Australia'}</td>
                    </tr>
                    {venue.capacity && (
                      <tr>
                        <td className="py-2 font-medium text-gray-700">Capacity</td>
                        <td className="py-2 text-gray-900">{venue.capacity.toLocaleString()}</td>
                      </tr>
                    )}
                    {venue.ends && venue.ends.length > 0 && (
                      <tr>
                        <td className="py-2 font-medium text-gray-700">Ends</td>
                        <td className="py-2 text-gray-900">{venue.ends.join(', ')}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SQUADS TAB - Two column layout */}
        {activeTab === 'Squads' && (
          <div>
            {/* Team Flags Header - Using flagcdn.com for genuine flags */}
            <div className="bg-teal-100 py-4 mb-4 flex justify-between items-center px-6 rounded">
              <div className="flex items-center gap-3">
                <img 
                  src={`https://flagcdn.com/48x36/${getCountryCode(teams[0]?.[0] || '')}.png`} 
                  alt={teams[0]?.[0] || ''} 
                  className="w-12 h-9 object-cover rounded"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span className="font-bold text-lg">{teams[0]?.[0] || 'Team 1'}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-lg">{teams[1]?.[0] || 'Team 2'}</span>
                <img 
                  src={`https://flagcdn.com/48x36/${getCountryCode(teams[1]?.[0] || '')}.png`} 
                  alt={teams[1]?.[0] || ''} 
                  className="w-12 h-9 object-cover rounded"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>

            <h2 className="text-xl font-bold mb-6 text-center">Squad</h2>

            {/* Two Column Layout - Players side by side */}
            <div className="bg-white rounded-lg">
              {(() => {
                const team1 = teams[0] || [];
                const team2 = teams[1] || [];
                const team1Data = team1[1];
                const team2Data = team2[1];
                const maxPlayers = Math.max(
                  team1Data?.players?.length || 0,
                  team2Data?.players?.length || 0
                );

                return Array.from({ length: maxPlayers }).map((_, index) => {
                  const player1 = team1Data?.players?.[index];
                  const player2 = team2Data?.players?.[index];

                  return (
                    <div key={index} className="grid grid-cols-2 border-b border-gray-200 hover:bg-gray-50">
                      {/* Left Player */}
                      <div className="p-4 flex items-center gap-3 border-r border-gray-200">
                        {player1 ? (
                          <>
                            <img
                              src={player1.avatar || 'https://via.placeholder.com/40'}
                              alt={player1.name}
                              className="w-10 h-10 rounded-full object-cover"
                              onError={(e) => (e.target.src = 'https://via.placeholder.com/40')}
                            />
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900">
                                {player1.name}
                                {team1Data.captain === player1.name && (
                                  <span className="ml-2 text-xs text-gray-600">(C)</span>
                                )}
                              </div>
                              <div className="text-sm text-gray-600">{player1.role}</div>
                            </div>
                          </>
                        ) : (
                          <div className="w-full h-12"></div>
                        )}
                      </div>

                      {/* Right Player */}
                      <div className="p-4 flex items-center justify-end gap-3">
                        {player2 ? (
                          <>
                            <div className="flex-1 text-right">
                              <div className="font-semibold text-gray-900">
                                {player2.name}
                                {team2Data.captain === player2.name && (
                                  <span className="ml-2 text-xs text-gray-600">(C)</span>
                                )}
                              </div>
                              <div className="text-sm text-gray-600">{player2.role}</div>
                            </div>
                            <img
                              src={player2.avatar || 'https://via.placeholder.com/40'}
                              alt={player2.name}
                              className="w-10 h-10 rounded-full object-cover"
                              onError={(e) => (e.target.src = 'https://via.placeholder.com/40')}
                            />
                          </>
                        ) : (
                          <div className="w-full h-12"></div>
                        )}
                      </div>
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        )}

        {/* Other Tabs Placeholder */}
        {['Live', 'Scorecard', 'Overs', 'Highlights', 'Full Commentary', 'News'].includes(activeTab) && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">Match has not started yet.</p>
            <p className="text-gray-500 mt-4">Content will be available once the match begins.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleMatchDetail;