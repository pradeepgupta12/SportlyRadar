import React from 'react';
import { Link } from 'react-router-dom';

const Leagues = () => {
  const leagues = [
    {
      id: 1,
      name: 'FIH Pro League',
      country: 'International',
      teams: 9,
      logo: '🏑',
      description: 'Premier international hockey league',
      season: '2025-26',
    },
    {
      id: 2,
      name: 'Euro Hockey League',
      country: 'Europe',
      teams: 24,
      logo: '🇪🇺',
      description: 'Top European club competition',
      season: '2025-26',
    },
    {
      id: 3,
      name: 'Hockey India League',
      country: 'India',
      teams: 8,
      logo: '🇮🇳',
      description: 'Premier hockey league in India',
      season: '2025',
    },
    {
      id: 4,
      name: 'Australian Hockey League',
      country: 'Australia',
      teams: 10,
      logo: '🇦🇺',
      description: 'Top tier Australian hockey',
      season: '2025',
    },
    {
      id: 5,
      name: 'Hoofdklasse',
      country: 'Netherlands',
      teams: 12,
      logo: '🇳🇱',
      description: 'Dutch national hockey league',
      season: '2025-26',
    },
    {
      id: 6,
      name: 'Hockey Belgium League',
      country: 'Belgium',
      teams: 14,
      logo: '🇧🇪',
      description: 'Belgian premier hockey division',
      season: '2025-26',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Hockey Leagues
          </h1>
          <p className="text-gray-600">
            Explore top hockey leagues from around the world
          </p>
        </div>

        {/* Leagues Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leagues.map((league) => (
            <div
              key={league.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {league.logo}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {league.name}
              </h3>
              <p className="text-gray-600 text-sm mb-1">{league.country}</p>
              <p className="text-gray-500 text-sm mb-3">
                {league.description}
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">
                  {league.teams} Teams
                </span>
                <span className="text-sm font-semibold text-blue-600">
                  {league.season}
                </span>
              </div>
              <Link
                to={`/hockey/league/${league.id}`}
                className="block w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                View League
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leagues;