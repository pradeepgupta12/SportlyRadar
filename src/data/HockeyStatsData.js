// src/data/HockeyStatsData.js

export const hockeyStats = {
  overall: {
    totalGoals: 322,
    matchesPlayed: 80,
    penaltyCorners: 567,
    avgGoalsPerMatch: 4.0,
  },

  goals: [
    { rank: 1, player: 'Jip Janssen', country: 'Netherlands', value: 15 },
    { rank: 2, player: 'Blake Govers', country: 'Australia', value: 12 },
    { rank: 3, player: 'Harmanpreet Singh', country: 'India', value: 12 },
    { rank: 4, player: 'Thierry Brinkman', country: 'Netherlands', value: 10 },
    { rank: 5, player: 'Alexander Hendrickx', country: 'Belgium', value: 9 },
  ],

  assists: [
    { rank: 1, player: 'Victor Wegnez', country: 'Belgium', value: 10 },
    { rank: 2, player: 'Manpreet Singh', country: 'India', value: 9 },
    { rank: 3, player: 'Aran Zalewski', country: 'Australia', value: 8 },
    { rank: 4, player: 'Jorrit Croon', country: 'Netherlands', value: 8 },
    { rank: 5, player: 'Tom Craig', country: 'Australia', value: 7 },
  ],

  saves: [
    { rank: 1, player: 'Jean-Paul Danneberg', country: 'Germany', value: 142 },
    { rank: 2, player: 'Vincent Vanasch', country: 'Belgium', value: 138 },
    { rank: 3, player: 'PR Sreejesh', country: 'India', value: 135 },
    { rank: 4, player: 'Pirmin Blaak', country: 'Netherlands', value: 130 },
    { rank: 5, player: 'Andrew Charter', country: 'Australia', value: 125 },
  ],
};