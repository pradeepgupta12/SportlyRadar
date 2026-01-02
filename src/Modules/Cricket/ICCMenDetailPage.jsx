import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import worldCupData from '../../data/ICCMenDetail.json'; // ← Aapka diya hua JSON

const tabs = ['Info', 'Live', 'Scorecard', 'Squads', 'Overs', 'Highlights', 'Full Commentary', 'News'];

const ICCMenDetailPage = () => {
  const { matchId } = useParams();
  const [activeTab, setActiveTab] = useState('Info');

  // Match find karo matchId se
  const match = worldCupData.matches.find(m => m.matchId === matchId);

  if (!match) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Match Not Found</h2>
          <p className="text-gray-600 mt-2">Invalid match ID: {matchId}</p>
        </div>
      </div>
    );
  }

  const { basic, tabs: matchTabs } = match;
  const { matchNumber, group, teams, venue, date, time } = basic;
  const [team1, team2] = teams;

  // Helper: Country code for flags (flagcdn.com)
  const getCountryCode = (teamName) => {
    const codes = {
      'India': 'in',
      'Pakistan': 'pk',
      'Australia': 'au',
      'England': 'gb-eng',
      'New Zealand': 'nz',
      'South Africa': 'za',
      'Afghanistan': 'af',
      'Bangladesh': 'bd',
      'West Indies': 'wi', // Custom, flagcdn doesn't have direct
      'Sri Lanka': 'lk',
      'Netherlands': 'nl',
      'Ireland': 'ie',
      'Zimbabwe': 'zw',
      'United States of America': 'us',
      'USA': 'us',
      'Namibia': 'na',
      'Nepal': 'np',
      'Oman': 'om',
      'UAE': 'ae',
      'Canada': 'ca',
      'Italy': 'it'
    };
    return codes[teamName] || 'xx'; // fallback
  };

  // Date formatting
  const formatDate = (dateStr) => {
    if (!dateStr) return 'TBA';
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Teal Background */}
      <div className=" text-black py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-2xl font-bold">
            {team1} vs {team2}
          </h1>
          <p className="text-lg mt-2 opacity-95">
            {matchNumber}, {group} • {worldCupData.series}
          </p>
          <p className="text-md mt-1">
            {formatDate(date)} • {time.local} Local ({time.gmt} GMT)
          </p>
          <p className="text-md">
            Venue: {venue.stadium}, {venue.city}, {venue.country}
          </p>
        </div>
      </div>

      {/* Sticky Tabs */}
      <div className="bg-white sticky top-16 z-20 shadow-md">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex ">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? 'border-b-4 border-teal-600 text-teal-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* INFO TAB */}
        {activeTab === 'Info' && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Match Info Table */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Match Information</h2>
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 font-medium text-gray-700 w-32">Match</td>
                    <td className="py-3 text-gray-900">{matchNumber} • {group}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium text-gray-700">Series</td>
                    <td className="py-3 text-gray-900">{worldCupData.series}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium text-gray-700">Date</td>
                    <td className="py-3 text-gray-900">{formatDate(date)}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium text-gray-700">Time</td>
                    <td className="py-3 text-gray-900">
                      {time.local} Local • {time.gmt} GMT
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium text-gray-700">Venue</td>
                    <td className="py-3 text-gray-900">
                      {venue.stadium}, {venue.city}, {venue.country}
                    </td>
                  </tr>
                  {matchTabs.info?.umpires && (
                    <tr className="border-b">
                      <td className="py-3 font-medium text-gray-700">Umpires</td>
                      <td className="py-3 text-gray-900">
                        {matchTabs.info.umpires.join(', ')}
                      </td>
                    </tr>
                  )}
                  {matchTabs.info?.weather && (
                    <tr className="border-b">
                      <td className="py-3 font-medium text-gray-700">Weather</td>
                      <td className="py-3 text-gray-900">{matchTabs.info.weather}</td>
                    </tr>
                  )}
                  {matchTabs.info?.pitch && (
                    <tr>
                      <td className="py-3 font-medium text-gray-700">Pitch Report</td>
                      <td className="py-3 text-gray-900">{matchTabs.info.pitch}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Right: Teams with Flags */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Teams</h2>
              <div className="space-y-6">
                <div className="bg-gray-100 rounded-lg p-6 flex items-center gap-5">
                  <img
                    src={`https://flagcdn.com/48x36/${getCountryCode(team1)}.png`}
                    alt={team1}
                    className="w-16 h-12 object-cover rounded shadow"
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{team1}</h3>
                    {matchTabs.squads?.[team1]?.captain && (
                      <p className="text-sm text-gray-600">
                        Captain: {matchTabs.squads[team1].captain}
                      </p>
                    )}
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-6 flex items-center gap-5">
                  <img
                    src={`https://flagcdn.com/48x36/${getCountryCode(team2)}.png`}
                    alt={team2}
                    className="w-16 h-12 object-cover rounded shadow"
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{team2}</h3>
                    {matchTabs.squads?.[team2]?.captain && (
                      <p className="text-sm text-gray-600">
                        Captain: {matchTabs.squads[team2].captain}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SQUADS TAB */}
        {activeTab === 'Squads' && (
          <div>
            <h2 className="text-2xl font-bold text-center mb-8">Playing Squads</h2>
            {matchTabs.squads && Object.keys(matchTabs.squads).length > 0 ? (
              <div className="grid md:grid-cols-2 gap-10">
                {Object.entries(matchTabs.squads).map(([teamName, squad]) => (
                  <div key={teamName} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={`https://flagcdn.com/48x36/${getCountryCode(teamName)}.png`}
                        alt={teamName}
                        className="w-12 h-9 rounded"
                        onError={(e) => (e.target.style.display = 'none')}
                      />
                      <h3 className="text-xl font-bold">{teamName}</h3>
                    </div>
                    {squad.players && squad.players.length > 0 ? (
                      <ul className="space-y-2">
                        {squad.players.map((player, i) => (
                          <li key={i} className="flex justify-between">
                            <span>{player.name || `Player ${i + 1}`}</span>
                            {squad.captain === player.name && (
                              <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">Captain</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 italic">Squad not announced yet</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600 text-lg">
                Squads will be announced closer to the match date.
              </p>
            )}
          </div>
        )}

        {/* Other Tabs - Placeholder (Future mein live data aayega) */}
        {['Live', 'Scorecard', 'Overs', 'Highlights', 'Full Commentary', 'News'].includes(activeTab) && (
          <div className="text-center py-20 bg-white rounded-lg shadow">
            <p className="text-2xl text-gray-600 font-medium">
              {activeTab} content not available yet
            </p>
            <p className="text-gray-500 mt-4">
              This section will be updated once the match starts or highlights are available.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ICCMenDetailPage;