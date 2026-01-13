// // src/data/FootballLeagueDetail.js

// export const footballLeagueDetails = {
//   'premier-league': {
//     name: 'Premier League',
//     country: 'England',
//     icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
//     season: '2025/26',
//     founded: 1992,
//     teams: 20,
//     matches: 380,
//     description: 'The most competitive and watched football league in the world',
//     currentChampion: 'Liverpool (Defending Champions)',
//     topScorer: 'Erling Haaland - 19 goals',
//     standings: [
//       { pos: 1, team: 'Arsenal', played: 19, won: 14, drawn: 3, lost: 2, gf: 48, ga: 18, gd: 30, points: 45, form: ['W', 'W', 'W', 'D', 'W'] },
//       { pos: 2, team: 'Manchester City', played: 19, won: 12, drawn: 5, lost: 2, gf: 42, ga: 20, gd: 22, points: 41, form: ['D', 'W', 'W', 'W', 'D'] },
//       { pos: 3, team: 'Aston Villa', played: 19, won: 12, drawn: 3, lost: 4, gf: 40, ga: 25, gd: 15, points: 39, form: ['L', 'W', 'D', 'W', 'W'] },
//       { pos: 4, team: 'Liverpool', played: 19, won: 9, drawn: 6, lost: 4, gf: 38, ga: 22, gd: 16, points: 33, form: ['D', 'W', 'L', 'W', 'D'] },
//       { pos: 5, team: 'Chelsea', played: 19, won: 10, drawn: 4, lost: 5, gf: 35, ga: 28, gd: 7, points: 34, form: ['W', 'D', 'L', 'W', 'W'] },
//       { pos: 6, team: 'Newcastle United', played: 19, won: 9, drawn: 5, lost: 5, gf: 32, ga: 26, gd: 6, points: 32, form: ['W', 'D', 'W', 'L', 'D'] },
//       { pos: 7, team: 'Brighton', played: 19, won: 8, drawn: 7, lost: 4, gf: 30, ga: 24, gd: 6, points: 31, form: ['D', 'W', 'D', 'W', 'L'] },
//       { pos: 8, team: 'Tottenham Hotspur', played: 19, won: 8, drawn: 5, lost: 6, gf: 36, ga: 32, gd: 4, points: 29, form: ['D', 'L', 'W', 'D', 'W'] }
//     ],
//     topScorers: [
//       { name: 'Erling Haaland', team: 'Manchester City', goals: 19, assists: 5 },
//       { name: 'Igor Thiago', team: 'Brentford', goals: 11, assists: 4 },
//       { name: 'Antoine Semenyo', team: 'Bournemouth', goals: 9, assists: 3 },
//       { name: 'Jean-Philippe Mateta', team: 'Crystal Palace', goals: 8, assists: 2 },
//       { name: 'Dominic Calvert-Lewin', team: 'Everton', goals: 8, assists: 3 }
//     ],
//     recentMatches: [
//       { home: 'Sunderland', away: 'Manchester City', score: '0-0', date: '2026-01-01' },
//       { home: 'Liverpool', away: 'Leeds United', score: '0-0', date: '2026-01-01' },
//       { home: 'Brentford', away: 'Tottenham Hotspur', score: '0-0', date: '2026-01-01' },
//       { home: 'Crystal Palace', away: 'Fulham', score: '1-1', date: '2026-01-01' },
//       { home: 'Manchester City', away: 'Chelsea', score: '1-1', date: '2026-01-04' },
//       { home: 'Fulham', away: 'Liverpool', score: '2-2', date: '2026-01-04' }
//     ]
//   }
//   // You can add other leagues here later (la-liga, serie-a, etc.)
// };


// src/data/FootballLeagueDetail.js

export const footballLeagueDetails = {
  'premier-league': {
    name: 'Premier League',
    country: 'England',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg',
    season: '2025/26',
    founded: 1992,
    teams: 20,
    matches: 380,
    description: 'The most competitive and watched football league in the world',
    currentChampion: 'Liverpool (Defending Champions)',
    topScorer: 'Erling Haaland - 19 goals',
    standings: [
      { 
        pos: 1, 
        team: 'Arsenal', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
        played: 19, won: 14, drawn: 3, lost: 2, gf: 48, ga: 18, gd: 30, points: 45, form: ['W', 'W', 'W', 'D', 'W'] 
      },
      { 
        pos: 2, 
        team: 'Manchester City', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
        played: 19, won: 12, drawn: 5, lost: 2, gf: 42, ga: 20, gd: 22, points: 41, form: ['D', 'W', 'W', 'W', 'D'] 
      },
      { 
        pos: 3, 
        team: 'Aston Villa', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Aston_Villa_FC_new_crest.svg',
        played: 19, won: 12, drawn: 3, lost: 4, gf: 40, ga: 25, gd: 15, points: 39, form: ['L', 'W', 'D', 'W', 'W'] 
      },
      { 
        pos: 4, 
        team: 'Liverpool', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
        played: 19, won: 9, drawn: 6, lost: 4, gf: 38, ga: 22, gd: 16, points: 33, form: ['D', 'W', 'L', 'W', 'D'] 
      },
      { 
        pos: 5, 
        team: 'Chelsea', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg',
        played: 19, won: 10, drawn: 4, lost: 5, gf: 35, ga: 28, gd: 7, points: 34, form: ['W', 'D', 'L', 'W', 'W'] 
      },
      { 
        pos: 6, 
        team: 'Newcastle United', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg',
        played: 19, won: 9, drawn: 5, lost: 5, gf: 32, ga: 26, gd: 6, points: 32, form: ['W', 'D', 'W', 'L', 'D'] 
      },
      { 
        pos: 7, 
        team: 'Brighton', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/d/d0/Brighton_and_Hove_Albion_FC_crest.svg',
        played: 19, won: 8, drawn: 7, lost: 4, gf: 30, ga: 24, gd: 6, points: 31, form: ['D', 'W', 'D', 'W', 'L'] 
      },
      { 
        pos: 8, 
        team: 'Tottenham Hotspur', 
        logo: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg',
        played: 19, won: 8, drawn: 5, lost: 6, gf: 36, ga: 32, gd: 4, points: 29, form: ['D', 'L', 'W', 'D', 'W'] 
      }
    ],
    topScorers: [
      { name: 'Erling Haaland', team: 'Manchester City', goals: 19, assists: 5 },
      { name: 'Igor Thiago', team: 'Brentford', goals: 11, assists: 4 },
      { name: 'Antoine Semenyo', team: 'Bournemouth', goals: 9, assists: 3 },
      { name: 'Jean-Philippe Mateta', team: 'Crystal Palace', goals: 8, assists: 2 },
      { name: 'Dominic Calvert-Lewin', team: 'Everton', goals: 8, assists: 3 }
    ],
    recentMatches: [
      { 
        home: 'Sunderland', 
        homeLogo: 'https://upload.wikimedia.org/wikipedia/en/7/77/Logo_Sunderland.svg',
        away: 'Manchester City', 
        awayLogo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
        score: '0-0', 
        date: '2026-01-01' 
      },
      { 
        home: 'Liverpool', 
        homeLogo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
        away: 'Leeds United', 
        awayLogo: 'https://upload.wikimedia.org/wikipedia/en/5/54/Leeds_United_F.C._logo.svg',
        score: '0-0', 
        date: '2026-01-01' 
      },
      { 
        home: 'Brentford', 
        homeLogo: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg',
        away: 'Tottenham Hotspur', 
        awayLogo: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg',
        score: '0-0', 
        date: '2026-01-01' 
      },
      { 
        home: 'Crystal Palace', 
        homeLogo: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Crystal_Palace_FC_logo_%282022%29.svg',
        away: 'Fulham', 
        awayLogo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg',
        score: '1-1', 
        date: '2026-01-01' 
      },
      { 
        home: 'Manchester City', 
        homeLogo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
        away: 'Chelsea', 
        awayLogo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg',
        score: '1-1', 
        date: '2026-01-04' 
      },
      { 
        home: 'Fulham', 
        homeLogo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg',
        away: 'Liverpool', 
        awayLogo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
        score: '2-2', 
        date: '2026-01-04' 
      }
    ]
  }
  // You can add other leagues here later (la-liga, serie-a, etc.)
};