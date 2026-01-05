import React, { useState } from 'react';

const TopScorers = () => {
  const [filter, setFilter] = useState('all');

  const scorers = [
    {
      rank: 1,
      name: 'Thierry Brinkman',
      country: 'Netherlands',
      flag: '🇳🇱',
      goals: 18,
      matches: 12,
      assists: 5,
      penaltyCorners: 8,
    },
    {
      rank: 2,
      name: 'Tom Boon',
      country: 'Belgium',
      flag: '🇧🇪',
      goals: 16,
      matches: 14,
      assists: 7,
      penaltyCorners: 10,
    },
    {
      rank: 3,
      name: 'Blake Govers',
      country: 'Australia',
      flag: '🇦🇺',
      goals: 15,
      matches: 11,
      assists: 4,
      penaltyCorners: 12,
    },
    {
      rank: 4,
      name: 'Harmanpreet Singh',
      country: 'India',
      flag: '🇮🇳',
      goals: 14,
      matches: 13,
      assists: 6,
      penaltyCorners: 9,
    },
    {
      rank: 5,
      name: 'Gonzalo Peillat',
      country: 'Germany',
      flag: '🇩🇪',
      goals: 13,
      matches: 12,
      assists: 3,
      penaltyCorners: 11,
    },
    {
      rank: 6,
      name: 'Alexander Hendrickx',
      country: 'Belgium',
      flag: '🇧🇪',
      goals: 12,
      matches: 10,
      assists: 4,
      penaltyCorners: 10,
    },
    {
      rank: 7,
      name: 'Akashdeep Singh',
      country: 'India',
      flag: '🇮🇳',
      goals: 11,
      matches: 13,
      assists: 8,
      penaltyCorners: 2,
    },
    {
      rank: 8,
      name: 'Martin Haner',
      country: 'Germany',
      flag: '🇩🇪',
      goals: 10,
      matches: 11,
      assists: 5,
      penaltyCorners: 7,
    },
  ];

  const countries = ['all', 'Netherlands', 'Belgium', 'Australia', 'India', 'Germany'];

  const filteredScorers =
    filter === 'all'
      ? scorers
      : scorers.filter((scorer) => scorer.country === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            Top Goal Scorers
          </h1>
          <p className="text-gray-600">
            Leading goal scorers in international hockey
          </p>
        </div>

        {/* Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="text-sm font-semibold text-gray-700 mb-3">
            Filter by Country
          </p>
          <div className="flex flex-wrap gap-2">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setFilter(country)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  filter === country
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {country === 'all' ? 'All Countries' : country}
              </button>
            ))}
          </div>
        </div>

        {/* Scorers Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Desktop View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Rank</th>
                  <th className="px-6 py-4 text-left font-bold">Player</th>
                  <th className="px-6 py-4 text-left font-bold">Country</th>
                  <th className="px-6 py-4 text-center font-bold">Goals</th>
                  <th className="px-6 py-4 text-center font-bold">Matches</th>
                  <th className="px-6 py-4 text-center font-bold">Assists</th>
                  <th className="px-6 py-4 text-center font-bold">PC Goals</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredScorers.map((scorer) => (
                  <tr
                    key={scorer.rank}
                    className="hover:bg-blue-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg ${
                          scorer.rank === 1
                            ? 'bg-yellow-400 text-yellow-900'
                            : scorer.rank === 2
                            ? 'bg-gray-300 text-gray-700'
                            : scorer.rank === 3
                            ? 'bg-orange-400 text-orange-900'
                            : 'bg-blue-100 text-blue-600'
                        }`}
                      >
                        {scorer.rank}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {scorer.name}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{scorer.flag}</span>
                        <span>{scorer.country}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 font-bold rounded-lg">
                        {scorer.goals}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      {scorer.matches}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-semibold rounded-lg">
                        {scorer.assists}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      {scorer.penaltyCorners}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="md:hidden divide-y divide-gray-100">
            {filteredScorers.map((scorer) => (
              <div key={scorer.rank} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full font-bold ${
                        scorer.rank === 1
                          ? 'bg-yellow-400 text-yellow-900'
                          : scorer.rank === 2
                          ? 'bg-gray-300 text-gray-700'
                          : scorer.rank === 3
                          ? 'bg-orange-400 text-orange-900'
                          : 'bg-blue-100 text-blue-600'
                      }`}
                    >
                      {scorer.rank}
                    </div>
                    <div>
                      <p className="font-bold text-lg text-gray-900">
                        {scorer.name}
                      </p>
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <span className="text-xl">{scorer.flag}</span>
                        <span>{scorer.country}</span>
                      </div>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-green-100 text-green-700 font-bold rounded-lg text-lg">
                    {scorer.goals}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-lg font-bold text-gray-900">
                      {scorer.matches}
                    </p>
                    <p className="text-gray-600">Matches</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-lg font-bold text-blue-600">
                      {scorer.assists}
                    </p>
                    <p className="text-gray-600">Assists</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-lg font-bold text-purple-600">
                      {scorer.penaltyCorners}
                    </p>
                    <p className="text-gray-600">PC Goals</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopScorers;