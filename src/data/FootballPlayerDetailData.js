// src/data/FootballPlayerDetailData.js

export const footballPlayerDetails = {
  "1": {
    id: 1,
    name: 'Erling Haaland',
    fullName: 'Erling Braut Haaland',
    country: '🇳🇴',
    countryName: 'Norway',
    position: 'Forward',
    team: 'Manchester City',
    league: 'Premier League',
    number: 9,
    age: 25,
    height: '1.94 m',
    weight: '88 kg',
    foot: 'Left',
    marketValue: '€180M',
    rating: 92.5,
    currentSeason: {
      goals: 28,
      assists: 7,
      matches: 22,
      minutesPlayed: 1890,
      goalsPerMatch: 1.27,
      passAccuracy: 78,
      shotsOnTarget: 62,
      dribbles: 45,
      aerialDuels: 89,
      tackles: 12
    },
    careerStats: {
      totalGoals: 287,
      totalAssists: 68,
      totalMatches: 298,
      clubs: ['Bryne FK', 'Molde FK', 'RB Salzburg', 'Borussia Dortmund', 'Manchester City']
    },
    achievements: [
      'Premier League Champion (22/23, 23/24)',
      'Premier League Golden Boot (22/23)',
      'UCL Top Scorer (22/23)',
      'FIFA Best Young Player'
    ],
    recentMatches: [
      { date: '2026-01-02', opponent: 'Arsenal', result: 'D', score: '2-2', goals: 1, assists: 0, rating: 8.5 },
      { date: '2025-12-28', opponent: 'Liverpool', result: 'W', score: '3-1', goals: 2, assists: 1, rating: 9.2 },
      { date: '2025-12-21', opponent: 'Chelsea', result: 'W', score: '2-0', goals: 1, assists: 0, rating: 8.8 },
      { date: '2025-12-14', opponent: 'Tottenham', result: 'W', score: '4-1', goals: 3, assists: 0, rating: 9.8 },
      { date: '2025-12-07', opponent: 'Newcastle', result: 'D', score: '1-1', goals: 0, assists: 1, rating: 7.5 }
    ],
    strengths: ['Finishing', 'Pace', 'Positioning', 'Strength', 'Aerial'],
    contract: { expires: 'June 30, 2029', weeklyWage: '€675,000' }
  }

  // You can add more players here with different IDs (e.g. "2" for Mbappé, etc.)
};