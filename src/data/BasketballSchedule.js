// // src/data/BasketballSchedule.js

// export const basketballSchedule = {
//   nba: [
//     {
//       date: '2026-01-08',
//       matches: [
//         {
//           id: 'nba-20260108-1',
//           time: '8:00 PM',
//           home: 'Miami Heat',
//           away: 'Chicago Bulls',
//           venue: 'Kaseya Center',
//           city: 'Miami, FL'
//         },
//         {
//           id: 'nba-20260108-2',
//           time: '8:00 PM',
//           home: 'Cleveland Cavaliers',
//           away: 'Minnesota Timberwolves',
//           venue: 'Rocket Mortgage FieldHouse',
//           city: 'Cleveland, OH'
//         }
//       ]
//     },
//     {
//       date: '2026-01-09',
//       matches: [
//         {
//           id: 'nba-20260109-1',
//           time: '7:30 PM',
//           home: 'New York Knicks',
//           away: 'Boston Celtics',
//           venue: 'Madison Square Garden',
//           city: 'New York, NY'
//         },
//         {
//           id: 'nba-20260109-2',
//           time: '10:00 PM',
//           home: 'Los Angeles Lakers',
//           away: 'Golden State Warriors',
//           venue: 'Crypto.com Arena',
//           city: 'Los Angeles, CA'
//         }
//       ]
//     },
//     {
//       date: '2026-01-10',
//       matches: [
//         {
//           id: 'nba-20260110-1',
//           time: '8:00 PM',
//           home: 'Oklahoma City Thunder',
//           away: 'Denver Nuggets',
//           venue: 'Paycom Center',
//           city: 'Oklahoma City, OK'
//         }
//       ]
//     }
//   ],

//   wnba: [
//     {
//       date: '2026-05-15',
//       matches: [
//         {
//           id: 'wnba-20260515-1',
//           time: '7:00 PM',
//           home: 'Las Vegas Aces',
//           away: 'Phoenix Mercury',
//           venue: 'Michelob ULTRA Arena',
//           city: 'Las Vegas, NV'
//         },
//         {
//           id: 'wnba-20260515-2',
//           time: '8:00 PM',
//           home: 'Seattle Storm',
//           away: 'Los Angeles Sparks',
//           venue: 'Climate Pledge Arena',
//           city: 'Seattle, WA'
//         }
//       ]
//     },
//     {
//       date: '2026-05-16',
//       matches: [
//         {
//           id: 'wnba-20260516-1',
//           time: '7:30 PM',
//           home: 'New York Liberty',
//           away: 'Indiana Fever',
//           venue: 'Barclays Center',
//           city: 'Brooklyn, NY'
//         }
//       ]
//     }
//   ]
// };


// src/data/BasketballSchedule.js

export const basketballSchedule = {
  nba: [
    {
      date: '2026-01-08',
      matches: [
        {
          id: 'nba-20260108-1',
          time: '8:00 PM',
          home: 'Miami Heat',
          away: 'Chicago Bulls',
          homeLogo: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg',
          awayLogo: 'https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg',
          venue: 'Kaseya Center',
          city: 'Miami, FL'
        },
        {
          id: 'nba-20260108-2',
          time: '8:00 PM',
          home: 'Cleveland Cavaliers',
          away: 'Minnesota Timberwolves',
          homeLogo: 'https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg',
          awayLogo: 'https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg',
          venue: 'Rocket Mortgage FieldHouse',
          city: 'Cleveland, OH'
        }
      ]
    },
    {
      date: '2026-01-09',
      matches: [
        {
          id: 'nba-20260109-1',
          time: '7:30 PM',
          home: 'New York Knicks',
          away: 'Boston Celtics',
          homeLogo: 'https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg',
          awayLogo: 'https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg',
          venue: 'Madison Square Garden',
          city: 'New York, NY'
        },
        {
          id: 'nba-20260109-2',
          time: '10:00 PM',
          home: 'Los Angeles Lakers',
          away: 'Golden State Warriors',
          homeLogo: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg',
          awayLogo: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg',
          venue: 'Crypto.com Arena',
          city: 'Los Angeles, CA'
        }
      ]
    },
    {
      date: '2026-01-10',
      matches: [
        {
          id: 'nba-20260110-1',
          time: '8:00 PM',
          home: 'Oklahoma City Thunder',
          away: 'Denver Nuggets',
          homeLogo: 'https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg',
          awayLogo: 'https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg',
          venue: 'Paycom Center',
          city: 'Oklahoma City, OK'
        }
      ]
    }
  ],

  wnba: [
    {
      date: '2026-05-15',
      matches: [
        {
          id: 'wnba-20260515-1',
          time: '7:00 PM',
          home: 'Las Vegas Aces',
          away: 'Phoenix Mercury',
          homeLogo: 'https://a.espncdn.com/i/teamlogos/wnba/500/lv.png',
          awayLogo: 'https://a.espncdn.com/i/teamlogos/wnba/500/phx.png',
          venue: 'Michelob ULTRA Arena',
          city: 'Las Vegas, NV'
        },
        {
          id: 'wnba-20260515-2',
          time: '8:00 PM',
          home: 'Seattle Storm',
          away: 'Los Angeles Sparks',
          homeLogo: 'https://a.espncdn.com/i/teamlogos/wnba/500/sea.png',
          awayLogo: 'https://a.espncdn.com/i/teamlogos/wnba/500/la.png',
          venue: 'Climate Pledge Arena',
          city: 'Seattle, WA'
        }
      ]
    },
    {
      date: '2026-05-16',
      matches: [
        {
          id: 'wnba-20260516-1',
          time: '7:30 PM',
          home: 'New York Liberty',
          away: 'Indiana Fever',
          homeLogo: 'https://a.espncdn.com/i/teamlogos/wnba/500/ny.png',
          awayLogo: 'https://a.espncdn.com/i/teamlogos/wnba/500/ind.png',
          venue: 'Barclays Center',
          city: 'Brooklyn, NY'
        }
      ]
    }
  ]
};