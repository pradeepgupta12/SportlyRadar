// // src/data/BasketballLeagueDetail.js

// export const leagueDetails = {
//   nba: {
//     name: 'NBA',
//     fullName: 'National Basketball Association',
//     logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/800px-National_Basketball_Association_logo.svg.png',
//     standings: [
//       { rank: 1, team: 'Oklahoma City Thunder', wins: 35, losses: 12, pct: '.745', streak: 'W4' },
//       { rank: 2, team: 'Boston Celtics', wins: 34, losses: 13, pct: '.723', streak: 'W2' },
//       { rank: 3, team: 'Cleveland Cavaliers', wins: 33, losses: 14, pct: '.702', streak: 'L1' },
//       { rank: 4, team: 'Denver Nuggets', wins: 32, losses: 15, pct: '.681', streak: 'W3' },
//       { rank: 5, team: 'Houston Rockets', wins: 31, losses: 16, pct: '.660', streak: 'W5' }
//     ],
//     topScorers: [
//       { rank: 1, player: 'Shai Gilgeous-Alexander', team: 'Oklahoma City Thunder', ppg: 32.1, rpg: 5.8, apg: 6.9 },
//       { rank: 2, player: 'Luka Dončić', team: 'Dallas Mavericks', ppg: 31.8, rpg: 9.0, apg: 9.2 },
//       { rank: 3, player: 'Giannis Antetokounmpo', team: 'Milwaukee Bucks', ppg: 31.2, rpg: 11.5, apg: 6.1 },
//       { rank: 4, player: 'Nikola Jokić', team: 'Denver Nuggets', ppg: 29.8, rpg: 12.4, apg: 9.8 },
//       { rank: 5, player: 'Joel Embiid', team: 'Philadelphia 76ers', ppg: 29.5, rpg: 10.8, apg: 5.5 }
//     ],
//     recentMatches: [
//       { home: 'Oklahoma City Thunder', away: 'Charlotte Hornets', homeScore: 118, awayScore: 145, date: '2026-01-06' },
//       { home: 'Houston Rockets', away: 'Phoenix Suns', homeScore: 112, awayScore: 114, date: '2026-01-06' },
//       { home: 'Boston Celtics', away: 'LA Lakers', homeScore: 126, awayScore: 115, date: '2026-01-05' }
//     ]
//   },

//   wnba: {
//     name: 'WNBA',
//     fullName: 'Women\'s National Basketball Association',
//     logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Women%27s_National_Basketball_Association_logo.svg/800px-Women%27s_National_Basketball_Association_logo.svg.png',
//     standings: [
//       { rank: 1, team: 'New York Liberty', wins: 18, losses: 5, pct: '.783', streak: 'W4' },
//       { rank: 2, team: 'Las Vegas Aces', wins: 17, losses: 6, pct: '.739', streak: 'W2' },
//       { rank: 3, team: 'Connecticut Sun', wins: 16, losses: 7, pct: '.696', streak: 'L1' },
//       { rank: 4, team: 'Minnesota Lynx', wins: 15, losses: 8, pct: '.652', streak: 'W3' },
//       { rank: 5, team: 'Seattle Storm', wins: 14, losses: 9, pct: '.609', streak: 'W1' }
//     ],
//     topScorers: [
//       { rank: 1, player: 'A\'ja Wilson', team: 'Las Vegas Aces', ppg: 27.3, rpg: 11.9, apg: 3.2 },
//       { rank: 2, player: 'Breanna Stewart', team: 'New York Liberty', ppg: 23.5, rpg: 9.1, apg: 4.0 },
//       { rank: 3, player: 'Sabrina Ionescu', team: 'New York Liberty', ppg: 20.2, rpg: 4.3, apg: 6.2 },
//       { rank: 4, player: 'Arike Ogunbowale', team: 'Dallas Wings', ppg: 22.1, rpg: 3.8, apg: 5.1 },
//       { rank: 5, player: 'Kelsey Plum', team: 'Las Vegas Aces', ppg: 18.9, rpg: 3.2, apg: 4.8 }
//     ],
//     recentMatches: [
//       { home: 'New York Liberty', away: 'Las Vegas Aces', homeScore: 89, awayScore: 92, date: '2025-09-15' },
//       { home: 'Connecticut Sun', away: 'Seattle Storm', homeScore: 78, awayScore: 85, date: '2025-09-14' }
//     ]
//   }

//   // You can add euroleague, cba, nbl, fiba-world-cup etc. in the same format later
// };


// src/data/BasketballLeagueDetail.js

export const leagueDetails = {
  nba: {
    name: 'NBA',
    fullName: 'National Basketball Association',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/800px-National_Basketball_Association_logo.svg.png',

    standings: [
      {
        rank: 1,
        team: 'Oklahoma City Thunder',
        teamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg',
        wins: 35,
        losses: 12,
        pct: '.745',
        streak: 'W4'
      },
      {
        rank: 2,
        team: 'Boston Celtics',
        teamLogo: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg',
        wins: 34,
        losses: 13,
        pct: '.723',
        streak: 'W2'
      },
      {
        rank: 3,
        team: 'Cleveland Cavaliers',
        teamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Cleveland_Cavaliers_logo.svg',
        wins: 33,
        losses: 14,
        pct: '.702',
        streak: 'L1'
      },
      {
        rank: 4,
        team: 'Denver Nuggets',
        teamLogo: 'https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg',
        wins: 32,
        losses: 15,
        pct: '.681',
        streak: 'W3'
      },
      {
        rank: 5,
        team: 'Houston Rockets',
        teamLogo: 'https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg',
        wins: 31,
        losses: 16,
        pct: '.660',
        streak: 'W5'
      }
    ],

    topScorers: [
      {
        rank: 1,
        player: 'Shai Gilgeous-Alexander',
        playerAvatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1628983.png',
        team: 'Oklahoma City Thunder',
        teamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg',
        ppg: 32.1,
        rpg: 5.8,
        apg: 6.9
      },
      {
        rank: 2,
        player: 'Luka Dončić',
        playerAvatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1629029.png',
        team: 'Dallas Mavericks',
        teamLogo: 'https://upload.wikimedia.org/wikipedia/en/9/97/Dallas_Mavericks_logo.svg',
        ppg: 31.8,
        rpg: 9.0,
        apg: 9.2
      },
      {
        rank: 3,
        player: 'Giannis Antetokounmpo',
        playerAvatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/203507.png',
        team: 'Milwaukee Bucks',
        teamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg',
        ppg: 31.2,
        rpg: 11.5,
        apg: 6.1
      },
      {
        rank: 4,
        player: 'Nikola Jokić',
        playerAvatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/203999.png',
        team: 'Denver Nuggets',
        teamLogo: 'https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg',
        ppg: 29.8,
        rpg: 12.4,
        apg: 9.8
      },
      {
        rank: 5,
        player: 'Joel Embiid',
        playerAvatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/203954.png',
        team: 'Philadelphia 76ers',
        teamLogo: 'https://upload.wikimedia.org/wikipedia/en/0/0e/Philadelphia_76ers_logo.svg',
        ppg: 29.5,
        rpg: 10.8,
        apg: 5.5
      }
    ],

    recentMatches: [
      {
        home: 'Oklahoma City Thunder',
        homeLogo: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg',
        away: 'Charlotte Hornets',
        awayLogo: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg',
        homeScore: 118,
        awayScore: 145,
        date: '2026-01-06'
      },
      {
        home: 'Houston Rockets',
        homeLogo: 'https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg',
        away: 'Phoenix Suns',
        awayLogo: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Phoenix_Suns_logo.svg',
        homeScore: 112,
        awayScore: 114,
        date: '2026-01-06'
      },
      {
        home: 'Boston Celtics',
        homeLogo: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg',
        away: 'LA Lakers',
        awayLogo: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Los_Angeles_Lakers_logo.svg',
        homeScore: 126,
        awayScore: 115,
        date: '2026-01-05'
      }
    ]
  },

  wnba: {
    name: 'WNBA',
    fullName: "Women's National Basketball Association",
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Women%27s_National_Basketball_Association_logo.svg/800px-Women%27s_National_Basketball_Association_logo.svg.png',

    standings: [
      {
        rank: 1,
        team: 'New York Liberty',
        teamLogo: 'https://upload.wikimedia.org/wikipedia/en/3/3e/New_York_Liberty_logo.svg',
        wins: 18,
        losses: 5,
        pct: '.783',
        streak: 'W4'
      },
      {
        rank: 2,
        team: 'Las Vegas Aces',
        teamLogo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Las_Vegas_Aces_logo.svg',
        wins: 17,
        losses: 6,
        pct: '.739',
        streak: 'W2'
      },
      {
        rank: 3,
        team: 'Connecticut Sun',
        teamLogo: 'https://upload.wikimedia.org/wikipedia/en/7/77/Connecticut_Sun_logo.svg',
        wins: 16,
        losses: 7,
        pct: '.696',
        streak: 'L1'
      }
    ],

    topScorers: [
      {
        rank: 1,
        player: "A'ja Wilson",
        playerAvatar: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/A%27ja_Wilson_2023.jpg',
        team: 'Las Vegas Aces',
        teamLogo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Las_Vegas_Aces_logo.svg',
        ppg: 27.3,
        rpg: 11.9,
        apg: 3.2
      },
      {
        rank: 2,
        player: 'Breanna Stewart',
        playerAvatar: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Breanna_Stewart_2023.jpg',
        team: 'New York Liberty',
        teamLogo: 'https://upload.wikimedia.org/wikipedia/en/3/3e/New_York_Liberty_logo.svg',
        ppg: 23.5,
        rpg: 9.1,
        apg: 4.0
      }
    ]
  }
};
