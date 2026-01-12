// src/data/BasketballStatsData.js

export const basketballStats = {
  nba: {
    pointsLeaders: [
      { rank: 1, player: 'Luka Dončić', team: 'Dallas Mavericks', ppg: 33.8, gp: 45 },
      { rank: 2, player: 'Giannis Antetokounmpo', team: 'Milwaukee Bucks', ppg: 32.1, gp: 43 },
      { rank: 3, player: 'Shai Gilgeous-Alexander', team: 'Oklahoma City Thunder', ppg: 31.2, gp: 47 },
      { rank: 4, player: 'Nikola Jokić', team: 'Denver Nuggets', ppg: 29.8, gp: 44 },
      { rank: 5, player: 'Joel Embiid', team: 'Philadelphia 76ers', ppg: 29.5, gp: 38 }
    ],
    assistsLeaders: [
      { rank: 1, player: 'Luka Dončić', team: 'Dallas Mavericks', apg: 9.0, gp: 45 },
      { rank: 2, player: 'Draymond Green', team: 'Golden State Warriors', apg: 9.0, gp: 42 },
      { rank: 3, player: 'Austin Reaves', team: 'Los Angeles Lakers', apg: 9.0, gp: 44 },
      { rank: 4, player: 'Tyrese Haliburton', team: 'Indiana Pacers', apg: 11.8, gp: 42 },
      { rank: 5, player: 'Trae Young', team: 'Atlanta Hawks', apg: 11.2, gp: 45 }
    ],
    reboundsLeaders: [
      { rank: 1, player: 'Nikola Jokić', team: 'Denver Nuggets', rpg: 12.4, gp: 44 },
      { rank: 2, player: 'Domantas Sabonis', team: 'Sacramento Kings', rpg: 13.2, gp: 46 },
      { rank: 3, player: 'Rudy Gobert', team: 'Minnesota Timberwolves', rpg: 12.5, gp: 43 },
      { rank: 4, player: 'Anthony Davis', team: 'LA Lakers', rpg: 11.8, gp: 41 },
      { rank: 5, player: 'Giannis Antetokounmpo', team: 'Milwaukee Bucks', rpg: 11.4, gp: 43 }
    ],
    threePointLeaders: [
      { rank: 1, player: 'Stephen Curry', team: 'Golden State Warriors', tpm: 4.8, pct: '42.5%', gp: 42 },
      { rank: 2, player: 'Damian Lillard', team: 'Milwaukee Bucks', tpm: 4.2, pct: '38.9%', gp: 45 },
      { rank: 3, player: 'Luka Dončić', team: 'Dallas Mavericks', tpm: 4.1, pct: '37.2%', gp: 45 },
      { rank: 4, player: 'Buddy Hield', team: 'Philadelphia 76ers', tpm: 3.9, pct: '40.1%', gp: 44 },
      { rank: 5, player: 'Klay Thompson', team: 'Golden State Warriors', tpm: 3.7, pct: '39.8%', gp: 40 }
    ]
  },

  wnba: {
    pointsLeaders: [
      { rank: 1, player: 'A\'ja Wilson', team: 'Las Vegas Aces', ppg: 27.3, gp: 23 },
      { rank: 2, player: 'Breanna Stewart', team: 'New York Liberty', ppg: 23.5, gp: 24 },
      { rank: 3, player: 'Arike Ogunbowale', team: 'Dallas Wings', ppg: 22.1, gp: 22 },
      { rank: 4, player: 'Sabrina Ionescu', team: 'New York Liberty', ppg: 20.2, gp: 24 },
      { rank: 5, player: 'Kelsey Plum', team: 'Las Vegas Aces', ppg: 18.9, gp: 23 }
    ],
    assistsLeaders: [
      { rank: 1, player: 'Courtney Vandersloot', team: 'New York Liberty', apg: 7.8, gp: 24 },
      { rank: 2, player: 'Natasha Cloud', team: 'Phoenix Mercury', apg: 6.9, gp: 22 },
      { rank: 3, player: 'Sabrina Ionescu', team: 'New York Liberty', apg: 6.2, gp: 24 },
      { rank: 4, player: 'Chelsea Gray', team: 'Las Vegas Aces', apg: 5.8, gp: 21 },
      { rank: 5, player: 'Arike Ogunbowale', team: 'Dallas Wings', apg: 5.1, gp: 22 }
    ],
    reboundsLeaders: [
      { rank: 1, player: 'A\'ja Wilson', team: 'Las Vegas Aces', rpg: 11.9, gp: 23 },
      { rank: 2, player: 'Jonquel Jones', team: 'New York Liberty', rpg: 9.8, gp: 23 },
      { rank: 3, player: 'Breanna Stewart', team: 'New York Liberty', rpg: 9.1, gp: 24 },
      { rank: 4, player: 'Angel Reese', team: 'Chicago Sky', rpg: 8.7, gp: 20 },
      { rank: 5, player: 'Brittney Griner', team: 'Phoenix Mercury', rpg: 8.2, gp: 21 }
    ],
    threePointLeaders: [
      { rank: 1, player: 'Sabrina Ionescu', team: 'New York Liberty', tpm: 3.2, pct: '41.2%', gp: 24 },
      { rank: 2, player: 'Kelsey Plum', team: 'Las Vegas Aces', tpm: 2.8, pct: '38.5%', gp: 23 },
      { rank: 3, player: 'Jewell Loyd', team: 'Seattle Storm', tpm: 2.6, pct: '37.8%', gp: 22 },
      { rank: 4, player: 'Marina Mabrey', team: 'Connecticut Sun', tpm: 2.5, pct: '39.1%', gp: 23 },
      { rank: 5, player: 'Arike Ogunbowale', team: 'Dallas Wings', tpm: 2.4, pct: '36.2%', gp: 22 }
    ]
  }
};