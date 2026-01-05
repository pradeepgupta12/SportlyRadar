import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Calendar, Users, MapPin } from 'lucide-react';

const Leagues = () => {
  const leagues = [
    {
      id: 'nba',
      name: 'NBA',
      fullName: 'National Basketball Association',
      country: 'United States',
      founded: 1946,
      teams: 30,
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/330px-National_Basketball_Association_logo.svg.png',
      description: 'The premier professional basketball league featuring the world\'s best players.',
      currentChampion: 'Boston Celtics',
      season: '2024-25'
    },
    {
      id: 'wnba',
      name: 'WNBA',
      fullName: 'Women\'s National Basketball Association',
      country: 'United States',
      founded: 1996,
      teams: 12,
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Women%27s_National_Basketball_Association_logo.svg/330px-Women%27s_National_Basketball_Association_logo.svg.png',
      description: 'Professional women\'s basketball league in the United States.',
      currentChampion: 'New York Liberty',
      season: '2025'
    },
    {
      id: 'euroleague',
      name: 'EuroLeague',
      fullName: 'Turkish Airlines EuroLeague',
      country: 'Europe',
      founded: 2000,
      teams: 18,
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/EuroLeague_2016_logo.svg/330px-EuroLeague_2016_logo.svg.png',
      description: 'Europe\'s top-tier professional basketball club competition.',
      currentChampion: 'Panathinaikos',
      season: '2024-25'
    },
    {
      id: 'fiba-world-cup',
      name: 'FIBA World Cup',
      fullName: 'FIBA Basketball World Cup',
      country: 'International',
      founded: 1950,
      teams: 32,
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/FIBA_logo.svg/330px-FIBA_logo.svg.png',
      description: 'International basketball championship contested by senior men\'s national teams.',
      currentChampion: 'Germany',
      season: '2023 (Next: 2027)'
    },
    {
      id: 'cba',
      name: 'CBA',
      fullName: 'Chinese Basketball Association',
      country: 'China',
      founded: 1995,
      teams: 20,
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Chinese_Basketball_Association_logo.svg/330px-Chinese_Basketball_Association_logo.svg.png',
      description: 'China\'s premier professional basketball league.',
      currentChampion: 'Liaoning Flying Leopards',
      season: '2024-25'
    },
    {
      id: 'nbl',
      name: 'NBL',
      fullName: 'National Basketball League',
      country: 'Australia',
      founded: 1979,
      teams: 10,
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/NBL_%28Australia%29_logo.svg/330px-NBL_%28Australia%29_logo.svg.png',
      description: 'Australia\'s premier professional basketball league.',
      currentChampion: 'Tasmania JackJumpers',
      season: '2024-25'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Basketball Leagues</h1>
          <p className="text-lg text-orange-100">Explore professional basketball leagues worldwide</p>
        </div>
      </div>

      {/* Leagues Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leagues.map((league) => (
            <Link
              key={league.id}
              to={`/basketball/league/${league.id}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* League Logo */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 flex items-center justify-center">
                <img 
                  src={league.logo} 
                  alt={league.name}
                  className="h-24 w-24 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* League Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{league.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{league.fullName}</p>
                
                <p className="text-gray-700 mb-4 line-clamp-2">{league.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-orange-600" />
                    {league.country}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-orange-600" />
                    {league.teams} Teams
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-orange-600" />
                    Founded {league.founded}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Current Champion</p>
                      <p className="font-semibold text-gray-800">{league.currentChampion}</p>
                    </div>
                    <Trophy className="w-8 h-8 text-yellow-500" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leagues;