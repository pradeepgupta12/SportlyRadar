// // src/data/FootballStatsData.js

// export const footballStatsData = {
//   playerStats: [
//     {
//       id: 1,
//       name: 'Erling Haaland',
//       team: 'Manchester City',
//       position: 'Forward',
//       league: 'Premier League',
//       goals: 19,
//       assists: 5,
//       matches: 19,
//       rating: 8.1
//     },
//     {
//       id: 2,
//       name: 'Igor Thiago',
//       team: 'Brentford',
//       position: 'Forward',
//       league: 'Premier League',
//       goals: 11,
//       assists: 4,
//       matches: 18,
//       rating: 7.8
//     },
//     {
//       id: 3,
//       name: 'Antoine Semenyo',
//       team: 'Bournemouth',
//       position: 'Forward',
//       league: 'Premier League',
//       goals: 9,
//       assists: 3,
//       matches: 19,
//       rating: 7.6
//     },
//     {
//       id: 4,
//       name: 'Jean-Philippe Mateta',
//       team: 'Crystal Palace',
//       position: 'Forward',
//       league: 'Premier League',
//       goals: 8,
//       assists: 2,
//       matches: 17,
//       rating: 7.5
//     },
//     {
//       id: 5,
//       name: 'Dominic Calvert-Lewin',
//       team: 'Everton',
//       position: 'Forward',
//       league: 'Premier League',
//       goals: 8,
//       assists: 3,
//       matches: 19,
//       rating: 7.4
//     }
//   ],

//   teamStats: [
//     {
//       id: 1,
//       name: 'Arsenal',
//       played: 19,
//       won: 14,
//       drawn: 3,
//       lost: 2,
//       gf: 48,
//       ga: 18,
//       gd: 30,
//       points: 45,
//       form: ['W', 'W', 'W', 'D', 'W']
//     },
//     {
//       id: 2,
//       name: 'Manchester City',
//       played: 19,
//       won: 12,
//       drawn: 5,
//       lost: 2,
//       gf: 42,
//       ga: 20,
//       gd: 22,
//       points: 41,
//       form: ['D', 'W', 'W', 'W', 'D']
//     },
//     {
//       id: 3,
//       name: 'Aston Villa',
//       played: 19,
//       won: 12,
//       drawn: 3,
//       lost: 4,
//       gf: 40,
//       ga: 25,
//       gd: 15,
//       points: 39,
//       form: ['L', 'W', 'D', 'W', 'W']
//     },
//     {
//       id: 4,
//       name: 'Liverpool',
//       played: 19,
//       won: 9,
//       drawn: 6,
//       lost: 4,
//       gf: 38,
//       ga: 22,
//       gd: 16,
//       points: 33,
//       form: ['D', 'W', 'L', 'W', 'D']
//     },
//     {
//       id: 5,
//       name: 'Chelsea',
//       played: 19,
//       won: 10,
//       drawn: 4,
//       lost: 5,
//       gf: 35,
//       ga: 28,
//       gd: 7,
//       points: 34,
//       form: ['W', 'D', 'L', 'W', 'W']
//     }
//   ]
// };

// src/data/FootballStatsData.js

export const footballStatsData = {
  playerStats: [
    {
      id: 1,
      name: 'Erling Haaland',
      nameImage: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Erling_Haaland_June_2025.jpg',
      team: 'Manchester City',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
      position: 'Forward',
      league: 'Premier League',
      goals: 19,
      assists: 5,
      matches: 19,
      rating: 8.1
    },
    {
      id: 2,
      name: 'Igor Thiago',
      nameImage: 'https://cdn-img.zerozero.pt/img/jogadores/new/62/16/656216_igor_thiago_20251026001039.png', // Real photo not easily available, using placeholder
      team: 'Brentford',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg',
      position: 'Forward',
      league: 'Premier League',
      goals: 11,
      assists: 4,
      matches: 18,
      rating: 7.8
    },
    {
      id: 3,
      name: 'Antoine Semenyo',
      nameImage: 'https://img.a.transfermarkt.technology/portrait/big/583255-1737452028.jpg?lm=1', // Placeholder (limited public images)
      team: 'Bournemouth',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/AFC_Bournemouth_%282013%29.svg',
      position: 'Forward',
      league: 'Premier League',
      goals: 9,
      assists: 3,
      matches: 19,
      rating: 7.6
    },
    {
      id: 4,
      name: 'Jean-Philippe Mateta',
      nameImage: 'https://assets.sorare.com/playerpicture/92522e61-1e4c-4138-8201-3d4a2f978259/picture/squared-52a9deff63aadda6cae766d5f557746f.png',
      team: 'Crystal Palace',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Crystal_Palace_FC_logo_%282022%29.svg',
      position: 'Forward',
      league: 'Premier League',
      goals: 8,
      assists: 2,
      matches: 17,
      rating: 7.5
    },
    {
      id: 5,
      name: 'Dominic Calvert-Lewin',
      nameImage: 'https://www.thefa.com/-/media/www-thefa-com/images/england/men-senior/player-profiles/dominic-calvert-lewin/723-dcl.ashx',
      team: 'Everton',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg',
      position: 'Forward',
      league: 'Premier League',
      goals: 8,
      assists: 3,
      matches: 19,
      rating: 7.4
    }
  ],

  teamStats: [
    {
      id: 1,
      name: 'Arsenal',
      nameLogo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
      played: 19,
      won: 14,
      drawn: 3,
      lost: 2,
      gf: 48,
      ga: 18,
      gd: 30,
      points: 45,
      form: ['W', 'W', 'W', 'D', 'W']
    },
    {
      id: 2,
      name: 'Manchester City',
      nameLogo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
      played: 19,
      won: 12,
      drawn: 5,
      lost: 2,
      gf: 42,
      ga: 20,
      gd: 22,
      points: 41,
      form: ['D', 'W', 'W', 'W', 'D']
    },
    {
      id: 3,
      name: 'Aston Villa',
      nameLogo: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Aston_Villa_FC_new_crest.svg',
      played: 19,
      won: 12,
      drawn: 3,
      lost: 4,
      gf: 40,
      ga: 25,
      gd: 15,
      points: 39,
      form: ['L', 'W', 'D', 'W', 'W']
    },
    {
      id: 4,
      name: 'Liverpool',
      nameLogo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
      played: 19,
      won: 9,
      drawn: 6,
      lost: 4,
      gf: 38,
      ga: 22,
      gd: 16,
      points: 33,
      form: ['D', 'W', 'L', 'W', 'D']
    },
    {
      id: 5,
      name: 'Chelsea',
      nameLogo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg',
      played: 19,
      won: 10,
      drawn: 4,
      lost: 5,
      gf: 35,
      ga: 28,
      gd: 7,
      points: 34,
      form: ['W', 'D', 'L', 'W', 'W']
    }
  ]
};