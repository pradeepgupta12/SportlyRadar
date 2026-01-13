// // src/data/BasketballLeagueData.js
// export const leagues = [
//   {
//     id: 'nba',
//     name: 'NBA',
//     fullName: 'National Basketball Association',
//     country: 'United States',
//     founded: 1946,
//     teams: 30,
//     logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/800px-National_Basketball_Association_logo.svg.png',
//     description: 'The premier professional basketball league featuring the world\'s best players.',
//     currentChampion: 'Oklahoma City Thunder',
//     season: '2025-26'
//   },
//   {
//     id: 'wnba',
//     name: 'WNBA',
//     fullName: 'Women\'s National Basketball Association',
//     country: 'United States',
//     founded: 1996,
//     teams: 12,
//     logo: 'https://a.espncdn.com/combiner/i?img=/i/espn/misc_logos/500/wnba.png',
//     description: 'Professional women\'s basketball league in the United States.',
//     currentChampion: 'Las Vegas Aces',
//     season: '2025'
//   },
//   {
//     id: 'euroleague',
//     name: 'EuroLeague',
//     fullName: 'Turkish Airlines EuroLeague',
//     country: 'Europe',
//     founded: 2000,
//     teams: 18,
//     logo: 'https://images.seeklogo.com/logo-png/64/2/euroleague-vertical-logo-png_seeklogo-640599.png',
//     description: 'Europe\'s top-tier professional basketball club competition.',
//     currentChampion: 'Fenerbahçe Beko',
//     season: '2025-26'
//   },
//   {
//     id: 'fiba-world-cup',
//     name: 'FIBA World Cup',
//     fullName: 'FIBA Basketball World Cup',
//     country: 'International',
//     founded: 1950,
//     teams: 32,
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/0/07/FIBA_Basketball_World_Cup_logo.svg',
//     description: 'International basketball championship contested by senior men\'s national teams.',
//     currentChampion: 'Germany',
//     season: '2023 (Next: 2027)'
//   },
//   {
//     id: 'cba',
//     name: 'CBA',
//     fullName: 'Chinese Basketball Association',
//     country: 'China',
//     founded: 1995,
//     teams: 20,
//     logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Chinese_Basketball_Association.svg',
//     description: 'China\'s premier professional basketball league.',
//     currentChampion: 'Zhejiang Lions',
//     season: '2025-26'
//   },
//   {
//     id: 'nbl',
//     name: 'NBL',
//     fullName: 'National Basketball League',
//     country: 'Australia',
//     founded: 1979,
//     teams: 10,
//     logo: 'https://upload.wikimedia.org/wikipedia/en/b/b2/NBL_%28Australia%29_logo.svg',
//     description: 'Australia\'s premier professional basketball league.',
//     currentChampion: 'Illawarra Hawks',
//     season: '2025-26'
//   }
// ];

// src/data/BasketballLeagueData.js
export const leagues = [
  {
    id: 'nba',
    name: 'NBA',
    fullName: 'National Basketball Association',
    country: 'United States',
    founded: 1946,
    teams: 30,
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/800px-National_Basketball_Association_logo.svg.png',
    description: 'The premier professional basketball league featuring the world\'s best players.',
    currentChampion: 'Oklahoma City Thunder',
    championLogo: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg',  // Official Thunder logo
    season: '2025-26'
  },
  {
    id: 'wnba',
    name: 'WNBA',
    fullName: 'Women\'s National Basketball Association',
    country: 'United States',
    founded: 1996,
    teams: 12,
    logo: 'https://a.espncdn.com/combiner/i?img=/i/espn/misc_logos/500/wnba.png',
    description: 'Professional women\'s basketball league in the United States.',
    currentChampion: 'Las Vegas Aces',
    championLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Las_Vegas_Aces_logo.svg/250px-Las_Vegas_Aces_logo.svg.png',  // Official Aces logo
    season: '2025'
  },
  {
    id: 'euroleague',
    name: 'EuroLeague',
    fullName: 'Turkish Airlines EuroLeague',
    country: 'Europe',
    founded: 2000,
    teams: 18,
    logo: 'https://images.seeklogo.com/logo-png/64/2/euroleague-vertical-logo-png_seeklogo-640599.png',
    description: 'Europe\'s top-tier professional basketball club competition.',
    currentChampion: 'Fenerbahçe Beko',
    championLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/250px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png',  // Fenerbahçe main logo (basketball department uses same)
    season: '2025-26'
  },
  {
    id: 'fiba-world-cup',
    name: 'FIBA World Cup',
    fullName: 'FIBA Basketball World Cup',
    country: 'International',
    founded: 1950,
    teams: 32,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/07/FIBA_Basketball_World_Cup_logo.svg',
    description: 'International basketball championship contested by senior men\'s national teams.',
    currentChampion: 'Germany',
    championLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6IgN-Y5QvVuCZHhCoqu1W-Qd07wq7MV9W9w&s',  // German DBB national team logo
    season: '2023 (Next: 2027)'
  },
  {
    id: 'cba',
    name: 'CBA',
    fullName: 'Chinese Basketball Association',
    country: 'China',
    founded: 1995,
    teams: 20,
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Chinese_Basketball_Association.svg',
    description: 'China\'s premier professional basketball league.',
    currentChampion: 'Zhejiang Lions',
    championLogo: 'https://upload.wikimedia.org/wikipedia/en/1/10/Zhejiang_Lions.png',  // Zhejiang Guangsha Lions logo
    season: '2025-26'
  },
  {
    id: 'nbl',
    name: 'NBL',
    fullName: 'National Basketball League',
    country: 'Australia',
    founded: 1979,
    teams: 10,
    logo: 'https://upload.wikimedia.org/wikipedia/en/b/b2/NBL_%28Australia%29_logo.svg',
    description: 'Australia\'s premier professional basketball league.',
    currentChampion: 'Illawarra Hawks',
    championLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZKQR3q-kO-vy3uRCIKBEPTT2io02OnuqDA&s',  // Official Illawarra Hawks logo
    season: '2025-26'
  }
];