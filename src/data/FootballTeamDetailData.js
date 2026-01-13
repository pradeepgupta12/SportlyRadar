// // src/data/FootballTeamDetailData.js

// export const footballTeamDetails = {
//   "manchester-city": {
//     id: 'manchester-city',
//     name: 'Manchester City',
//     nickname: 'The Citizens',
//     founded: 1880,
//     stadium: 'Etihad Stadium',
//     capacity: 53400,
//     city: 'Manchester',
//     country: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
//     league: 'Premier League',
//     manager: 'Pep Guardiola',
//     teamValue: '€1.26B',
//     currentSeason: {
//       position: 2,
//       played: 19,
//       won: 12,
//       drawn: 5,
//       lost: 2,
//       goalsFor: 42,
//       goalsAgainst: 20,
//       goalDifference: 22,
//       points: 41,
//       form: ['D', 'W', 'W', 'W', 'D']
//     },
//     topPlayers: [
//       { name: 'Erling Haaland', position: 'Forward', goals: 19, assists: 5, rating: 8.1 },
//       { name: 'Kevin De Bruyne', position: 'Midfielder', goals: 8, assists: 12, rating: 8.3 },
//       { name: 'Phil Foden', position: 'Midfielder', goals: 9, assists: 8, rating: 7.9 },
//       { name: 'Rodri', position: 'Midfielder', goals: 5, assists: 4, rating: 8.2 },
//       { name: 'Rúben Dias', position: 'Defender', goals: 2, assists: 1, rating: 8.0 }
//     ],
//     recentMatches: [
//       { date: '2026-01-01', opponent: 'Sunderland', result: 'D', score: '0-0' },
//       { date: '2025-12-28', opponent: 'Everton', result: 'W', score: '3-1' },
//       { date: '2025-12-26', opponent: 'Aston Villa', result: 'W', score: '2-1' },
//       { date: '2025-12-21', opponent: 'Crystal Palace', result: 'W', score: '4-0' },
//       { date: '2025-12-15', opponent: 'Manchester United', result: 'W', score: '2-1' }
//     ],
//     trophies: [
//       { name: 'Premier League', count: 9 },
//       { name: 'FA Cup', count: 7 },
//       { name: 'League Cup', count: 8 },
//       { name: 'UEFA Champions League', count: 1 },
//       { name: 'UEFA Super Cup', count: 1 },
//       { name: 'FIFA Club World Cup', count: 1 }
//     ]
//   }

//   // You can add more teams here in future (e.g. "liverpool", "arsenal", etc.)
// };

// src/data/FootballTeamDetailData.js

export const footballTeamDetails = {
  "manchester-city": {
    id: 'manchester-city',
    name: 'Manchester City',
    nickname: 'The Citizens',
    founded: 1880,
    stadium: 'Etihad Stadium',
    capacity: 53400,
    city: 'Manchester',
    country: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg', // England flag SVG
    league: 'Premier League',
    leagueLogo: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg',
    manager: 'Pep Guardiola',
    teamValue: '€1.26B',
    teamLogo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
    currentSeason: {
      position: 2,
      played: 19,
      won: 12,
      drawn: 5,
      lost: 2,
      goalsFor: 42,
      goalsAgainst: 20,
      goalDifference: 22,
      points: 41,
      form: ['D', 'W', 'W', 'W', 'D']
    },
    topPlayers: [
      { 
        name: 'Erling Haaland', 
        position: 'Forward', 
        goals: 19, 
        assists: 5, 
        rating: 8.1,
        playerImage: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Erling_Haaland_2023_%28cropped%29.jpg'
      },
      { 
        name: 'Kevin De Bruyne', 
        position: 'Midfielder', 
        goals: 8, 
        assists: 12, 
        rating: 8.3,
        playerImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Kevin_De_Bruyne_2018.jpg/800px-Kevin_De_Bruyne_2018.jpg'
      },
      { 
        name: 'Phil Foden', 
        position: 'Midfielder', 
        goals: 9, 
        assists: 8, 
        rating: 7.9,
        playerImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Phil_Foden_2023.jpg/800px-Phil_Foden_2023.jpg'
      },
      { 
        name: 'Rodri', 
        position: 'Midfielder', 
        goals: 5, 
        assists: 4, 
        rating: 8.2,
        playerImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Rodri_2023.jpg/800px-Rodri_2023.jpg'
      },
      { 
        name: 'Rúben Dias', 
        position: 'Defender', 
        goals: 2, 
        assists: 1, 
        rating: 8.0,
        playerImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/R%C3%BAben_Dias_2021.jpg/800px-R%C3%BAben_Dias_2021.jpg'
      }
    ],
    recentMatches: [
      { 
        date: '2026-01-01', 
        opponent: 'Sunderland', 
        opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/3/39/Sunderland_AFC_Logo.svg',
        result: 'D', 
        score: '0-0' 
      },
      { 
        date: '2025-12-28', 
        opponent: 'Everton', 
        opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg',
        result: 'W', 
        score: '3-1' 
      },
      { 
        date: '2025-12-26', 
        opponent: 'Aston Villa', 
        opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Aston_Villa_FC_new_crest.svg',
        result: 'W', 
        score: '2-1' 
      },
      { 
        date: '2025-12-21', 
        opponent: 'Crystal Palace', 
        opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Crystal_Palace_FC_logo_%282022%29.svg',
        result: 'W', 
        score: '4-0' 
      },
      { 
        date: '2025-12-15', 
        opponent: 'Manchester United', 
        opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg',
        result: 'W', 
        score: '2-1' 
      }
    ],
    trophies: [
      { 
        name: 'Premier League', 
        count: 9,
        trophyLogo: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg'
      },
      { 
        name: 'FA Cup', 
        count: 7,
        trophyLogo: 'https://upload.wikimedia.org/wikipedia/en/5/55/FA_Cup_2020.png'
      },
      { 
        name: 'League Cup', 
        count: 8,
        trophyLogo: 'https://upload.wikimedia.org/wikipedia/en/5/55/FA_Cup_2020.png'
      },
      { 
        name: 'UEFA Champions League', 
        count: 1,
        trophyLogo: 'https://upload.wikimedia.org/wikipedia/en/f/f5/UEFA_Champions_League.svg'
      },
      { 
        name: 'UEFA Super Cup', 
        count: 1,
        trophyLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/UEFA_Super_Cup_logo.svg/960px-UEFA_Super_Cup_logo.svg.png'
      },
      { 
        name: 'FIFA Club World Cup', 
        count: 1,
        trophyLogo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/2025_FIFA_Club_World_Cup.svg'
      }
    ]
  }

  // You can add more teams here in future (e.g. "liverpool", "arsenal", etc.)
};