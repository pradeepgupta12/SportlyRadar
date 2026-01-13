// // src/data/HockeyStatsData.js

// export const hockeyStats = {
//   overall: {
//     totalGoals: 322,
//     matchesPlayed: 80,
//     penaltyCorners: 567,
//     avgGoalsPerMatch: 4.0,
//   },

//   goals: [
//     { rank: 1, player: 'Jip Janssen', country: 'Netherlands', value: 15 },
//     { rank: 2, player: 'Blake Govers', country: 'Australia', value: 12 },
//     { rank: 3, player: 'Harmanpreet Singh', country: 'India', value: 12 },
//     { rank: 4, player: 'Thierry Brinkman', country: 'Netherlands', value: 10 },
//     { rank: 5, player: 'Alexander Hendrickx', country: 'Belgium', value: 9 },
//   ],

//   assists: [
//     { rank: 1, player: 'Victor Wegnez', country: 'Belgium', value: 10 },
//     { rank: 2, player: 'Manpreet Singh', country: 'India', value: 9 },
//     { rank: 3, player: 'Aran Zalewski', country: 'Australia', value: 8 },
//     { rank: 4, player: 'Jorrit Croon', country: 'Netherlands', value: 8 },
//     { rank: 5, player: 'Tom Craig', country: 'Australia', value: 7 },
//   ],

//   saves: [
//     { rank: 1, player: 'Jean-Paul Danneberg', country: 'Germany', value: 142 },
//     { rank: 2, player: 'Vincent Vanasch', country: 'Belgium', value: 138 },
//     { rank: 3, player: 'PR Sreejesh', country: 'India', value: 135 },
//     { rank: 4, player: 'Pirmin Blaak', country: 'Netherlands', value: 130 },
//     { rank: 5, player: 'Andrew Charter', country: 'Australia', value: 125 },
//   ],
// };

// src/data/HockeyStatsData.js

export const hockeyStats = {
  overall: {
    totalGoals: 322,
    matchesPlayed: 80,
    penaltyCorners: 567,
    avgGoalsPerMatch: 4.0,
  },

  goals: [
    { 
      rank: 1, 
      player: 'Jip Janssen', 
      country: 'Netherlands', 
      value: 15,
      avatar: 'https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/bwtdqevuiu1wbycodjcl',  // Getty - recent Olympic photo
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg'
    },
    { 
      rank: 2, 
      player: 'Blake Govers', 
      country: 'Australia', 
      value: 12,
      avatar: 'https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/y0rm22tkypu14w05w8pw',  // Hockey Australia official profile
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg'
    },
    { 
      rank: 3, 
      player: 'Harmanpreet Singh', 
      country: 'India', 
      value: 12,
      avatar: 'https://d12d6l12s3d372.cloudfront.net/harmanpreet_cropped_9279862_be8bbc10ca.jpg',  // Olympics.com / Wikipedia style
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg'
    },
    { 
      rank: 4, 
      player: 'Thierry Brinkman', 
      country: 'Netherlands', 
      value: 10,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNISxNzIQ3TZ1pB_aY_ZxtyXUCeRXNZ_uIVg&s',  // Getty - action/profile
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg'
    },
    { 
      rank: 5, 
      player: 'Alexander Hendrickx', 
      country: 'Belgium', 
      value: 9,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNM7z5tpC2TXYTARNBwQyzirYM_lWECJrF9g&s',  // Getty - celebration shot
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg'
    },
  ],

  assists: [
    { 
      rank: 1, 
      player: 'Victor Wegnez', 
      country: 'Belgium', 
      value: 10,
      avatar: 'https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/yyyq7txvyvmpsrbqq40v',  // Getty - in action
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg'
    },
    { 
      rank: 2, 
      player: 'Manpreet Singh', 
      country: 'India', 
      value: 9,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZVC9NfA5D4DQ4cQbpX_3i5X3i6EqTvXI8fA&s',  // Olympics profile style
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg'
    },
    { 
      rank: 3, 
      player: 'Aran Zalewski', 
      country: 'Australia', 
      value: 8,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCeRGSic0zalylinsqQm1uAL87Z1_R4_Gq6g&s',  // Hockey Australia (similar pattern)
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg'
    },
    { 
      rank: 4, 
      player: 'Jorrit Croon', 
      country: 'Netherlands', 
      value: 8,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY8XSxtpbcTLPOXq75vanfZwaBNlU2kPPHAg&s',  // Getty approximate
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg'
    },
    { 
      rank: 5, 
      player: 'Tom Craig', 
      country: 'Australia', 
      value: 7,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndoPktgPUBCqDApYfXeksyPccLCz_HQYBBw&s',  // Hockey Australia
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg'
    },
  ],

  saves: [
    { 
      rank: 1, 
      player: 'Jean-Paul Danneberg', 
      country: 'Germany', 
      value: 142,
      avatar: 'https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/gqsjizgvilfgt2zlmthk',  // Getty goalie shot
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg'
    },
    { 
      rank: 2, 
      player: 'Vincent Vanasch', 
      country: 'Belgium', 
      value: 138,
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Vincent_Vanasch.jpg',  // Getty
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg'
    },
    { 
      rank: 3, 
      player: 'PR Sreejesh', 
      country: 'India', 
      value: 135,
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/P._R._Sreejesh_in_August_2024_with_his_Paris_Olympics_bronze_medal.jpg',  // Olympics / Wikipedia
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg'
    },
    { 
      rank: 4, 
      player: 'Pirmin Blaak', 
      country: 'Netherlands', 
      value: 130,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV6FWTIk3qF2DeRAEVhbP9z9eKjMS1THFyQA&s',  // Getty
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg'
    },
    { 
      rank: 5, 
      player: 'Andrew Charter', 
      country: 'Australia', 
      value: 125,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanysh8vWYINeF6IieHcQAj5a7rgHsiRSrig&s',  // Hockey Australia
      flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg'
    },
  ],
};