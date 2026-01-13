// // src/data/FootballTransferDetail.js

// export const footballTransferDetails = {
//   "1": {
//     id: 1,
//     player: {
//       name: 'Brennan Johnson',
//       age: 24,
//       position: 'Winger',
//       nationality: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
//       nationalityName: 'Wales',
//     },
//     from: {
//       team: 'Tottenham Hotspur',
//       league: 'Premier League',
//       country: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
//       goals: 8,
//       assists: 10
//     },
//     to: {
//       team: 'Crystal Palace',
//       league: 'Premier League',
//       country: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
//       shirtNumber: 7
//     },
//     transfer: {
//       fee: '€45M',
//       contractLength: '5 years',
//       annualWage: '€8M/year',
//       weeklyWage: '€154,000/week',
//       date: '2026-01-02',
//       status: 'Completed',
//       type: 'Permanent Transfer'
//     },
//     timeline: [
//       { date: '2025-12-20', event: 'Initial bid accepted', status: 'completed' },
//       { date: '2025-12-25', event: 'Personal terms agreed', status: 'completed' },
//       { date: '2026-01-01', event: 'Medical completed', status: 'completed' },
//       { date: '2026-01-02', event: 'Official announcement', status: 'completed' }
//     ],
//     impact: {
//       playerMotivation: 'More regular playing time and development',
//       clubReason: 'Add pace and creativity to attack',
//       marketImpact: 'Significant intra-league deal early in window'
//     },
//     comparisons: [
//       { player: 'Jack Grealish (Aston Villa → Man City)', fee: '€117M', year: 2021 },
//       { player: 'Anthony Gordon (Everton → Newcastle)', fee: '€45M', year: 2022 },
//       { player: 'Mykhailo Mudryk (Shakhtar → Chelsea)', fee: '€100M', year: 2023 }
//     ]
//   }
//   // You can add more transfer details with different IDs here later
// };

// src/data/FootballTransferDetail.js

export const footballTransferDetails = {
  "1": {
    id: 1,
    player: {
      name: 'Brennan Johnson',
      age: 24,
      position: 'Winger',
      nationality: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Wales.svg', // Wales flag SVG
      nationalityName: 'Wales',
    },
    from: {
      team: 'Tottenham Hotspur',
      league: 'Premier League',
      country: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg', // England flag SVG
      goals: 8,
      assists: 10
    },
    to: {
      team: 'Crystal Palace',
      league: 'Premier League',
      country: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg', // England flag SVG
      shirtNumber: 7
    },
    transfer: {
      fee: '€45M',
      contractLength: '5 years',
      annualWage: '€8M/year',
      weeklyWage: '€154,000/week',
      date: '2026-01-02',
      status: 'Completed',
      type: 'Permanent Transfer'
    },
    timeline: [
      { date: '2025-12-20', event: 'Initial bid accepted', status: 'completed' },
      { date: '2025-12-25', event: 'Personal terms agreed', status: 'completed' },
      { date: '2026-01-01', event: 'Medical completed', status: 'completed' },
      { date: '2026-01-02', event: 'Official announcement', status: 'completed' }
    ],
    impact: {
      playerMotivation: 'More regular playing time and development',
      clubReason: 'Add pace and creativity to attack',
      marketImpact: 'Significant intra-league deal early in window'
    },
    comparisons: [
      { player: 'Jack Grealish (Aston Villa → Man City)', fee: '€117M', year: 2021 },
      { player: 'Anthony Gordon (Everton → Newcastle)', fee: '€45M', year: 2022 },
      { player: 'Mykhailo Mudryk (Shakhtar → Chelsea)', fee: '€100M', year: 2023 }
    ]
  }
  // You can add more transfer details with different IDs here later
};