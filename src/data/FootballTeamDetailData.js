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
    country: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    league: 'Premier League',
    manager: 'Pep Guardiola',
    teamValue: '€1.26B',
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
      { name: 'Erling Haaland', position: 'Forward', goals: 19, assists: 5, rating: 8.1 },
      { name: 'Kevin De Bruyne', position: 'Midfielder', goals: 8, assists: 12, rating: 8.3 },
      { name: 'Phil Foden', position: 'Midfielder', goals: 9, assists: 8, rating: 7.9 },
      { name: 'Rodri', position: 'Midfielder', goals: 5, assists: 4, rating: 8.2 },
      { name: 'Rúben Dias', position: 'Defender', goals: 2, assists: 1, rating: 8.0 }
    ],
    recentMatches: [
      { date: '2026-01-01', opponent: 'Sunderland', result: 'D', score: '0-0' },
      { date: '2025-12-28', opponent: 'Everton', result: 'W', score: '3-1' },
      { date: '2025-12-26', opponent: 'Aston Villa', result: 'W', score: '2-1' },
      { date: '2025-12-21', opponent: 'Crystal Palace', result: 'W', score: '4-0' },
      { date: '2025-12-15', opponent: 'Manchester United', result: 'W', score: '2-1' }
    ],
    trophies: [
      { name: 'Premier League', count: 9 },
      { name: 'FA Cup', count: 7 },
      { name: 'League Cup', count: 8 },
      { name: 'UEFA Champions League', count: 1 },
      { name: 'UEFA Super Cup', count: 1 },
      { name: 'FIFA Club World Cup', count: 1 }
    ]
  }

  // You can add more teams here in future (e.g. "liverpool", "arsenal", etc.)
};