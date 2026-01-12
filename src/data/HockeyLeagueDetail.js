// src/data/HockeyLeagueDetail.js

export const hockeyLeagueDetails = {
  "1": {
    id: 1,
    name: 'FIH Pro League',
    country: 'International',
    logo: '🏑',
    season: '2025-26',
    description: 'The premier international league featuring the world\'s top 9 national teams in a home-and-away format.',
    founded: '2019',
    teams: 9,
    format: 'Round Robin (Home & Away)',
    standings: [
      { rank: 1, team: 'Argentina', flag: '🇦🇷', played: 4, won: 3, drawn: 1, lost: 0, gf: 12, ga: 6, gd: 6, points: 11 },
      { rank: 2, team: 'Belgium', flag: '🇧🇪', played: 4, won: 3, drawn: 1, lost: 0, gf: 12, ga: 6, gd: 6, points: 10 },
      { rank: 3, team: 'Netherlands', flag: '🇳🇱', played: 4, won: 2, drawn: 1, lost: 1, gf: 10, ga: 8, gd: 2, points: 7 },
      { rank: 4, team: 'Germany', flag: '🇩🇪', played: 4, won: 1, drawn: 0, lost: 3, gf: 7, ga: 12, gd: -5, points: 3 },
      { rank: 5, team: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', played: 4, won: 1, drawn: 0, lost: 3, gf: 6, ga: 11, gd: -5, points: 3 },
      { rank: 6, team: 'Pakistan', flag: '🇵🇰', played: 4, won: 0, drawn: 1, lost: 3, gf: 6, ga: 12, gd: -6, points: 1 },
    ],
    topScorers: [
      { rank: 1, name: 'Multiple Players', team: '', flag: '', goals: 4 },
      { rank: 2, name: 'Multiple Players', team: '', flag: '', goals: 3 },
    ],
    recentMatches: [
      { id: 1, date: '2025-12-14', team1: 'Belgium', team2: 'Germany', flag1: '🇧🇪', flag2: '🇩🇪', score: '4-1', status: 'Completed' },
      { id: 2, date: '2025-12-14', team1: 'Netherlands', team2: 'Pakistan', flag1: '🇳🇱', flag2: '🇵🇰', score: '5-2', status: 'Completed' },
      { id: 3, date: '2025-12-13', team1: 'England', team2: 'Germany', flag1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', flag2: '🇩🇪', score: '1-4', status: 'Completed' },
      { id: 4, date: '2025-12-12', team1: 'Argentina', team2: 'Netherlands', flag1: '🇦🇷', flag2: '🇳🇱', score: '1-1 (2-4 SO)', status: 'Completed' },
    ],
    upcomingMatches: [
      { id: 5, date: '2026-02-05', team1: 'China', team2: 'England', flag1: '🇨🇳', flag2: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', time: 'TBD', venue: 'Yunfu' },
      { id: 6, date: '2026-02-06', team1: 'England', team2: 'Netherlands', flag1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', flag2: '🇳🇱', time: 'TBD', venue: 'Valencia' },
      { id: 7, date: '2026-02-10', team1: 'India', team2: 'Argentina', flag1: '🇮🇳', flag2: '🇦🇷', time: 'TBD', venue: 'Rourkela' },
    ],
  },

  // Baaki leagues (2 se 6) ke data bhi yahin daal sakte ho agar chahiye
  // Abhi sirf id 1 dikhaya gaya hai jaise aapke code mein tha
  // Future mein jaise chahiye waise extend kar sakte ho
};