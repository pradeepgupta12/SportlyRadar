// // src/data/TennisTours.js

// export const tennisTours = {
//   atp: [
//     {
//       id: 'atp-finals',
//       name: 'Nitto ATP Finals',
//       category: 'Year-End Championship',
//       location: 'Turin, Italy',
//       surface: 'Hard (Indoor)',
//       month: 'November',
//       prize: '$15.5 Million',
//       points: '1500',
//       participants: 8,
//       description: 'The season-ending championship featuring the top 8 singles players and doubles teams.'
//     },
//     {
//       id: 'indian-wells',
//       name: 'BNP Paribas Open',
//       category: 'ATP Masters 1000',
//       location: 'Indian Wells, USA',
//       surface: 'Hard',
//       month: 'March',
//       prize: '~$9-10 Million',
//       points: '1000',
//       participants: 96,
//       description: 'Also known as the "fifth Grand Slam" due to its prestige and large draw.'
//     },
//     {
//       id: 'miami-open',
//       name: 'Miami Open',
//       category: 'ATP Masters 1000',
//       location: 'Miami, USA',
//       surface: 'Hard',
//       month: 'March-April',
//       prize: '~$9-10 Million',
//       points: '1000',
//       participants: 96,
//       description: 'One of the premier hard court tournaments held annually in South Florida.'
//     },
//     {
//       id: 'monte-carlo',
//       name: 'Monte-Carlo Masters',
//       category: 'ATP Masters 1000',
//       location: 'Monte Carlo, Monaco',
//       surface: 'Clay',
//       month: 'April',
//       prize: '~€5.8 Million',
//       points: '1000',
//       participants: 56,
//       description: 'The first clay court Masters 1000 event of the season.'
//     },
//     {
//       id: 'madrid',
//       name: 'Madrid Open',
//       category: 'ATP Masters 1000',
//       location: 'Madrid, Spain',
//       surface: 'Clay',
//       month: 'April-May',
//       prize: '~€8 Million',
//       points: '1000',
//       participants: 56,
//       description: 'Held at the Caja Mágica, known for its altitude affecting play.'
//     },
//     {
//       id: 'rome',
//       name: 'Italian Open',
//       category: 'ATP Masters 1000',
//       location: 'Rome, Italy',
//       surface: 'Clay',
//       month: 'May',
//       prize: '~€8 Million',
//       points: '1000',
//       participants: 56,
//       description: 'A key clay court event leading up to the French Open.'
//     },
//     {
//       id: 'canada',
//       name: 'National Bank Open',
//       category: 'ATP Masters 1000',
//       location: 'Toronto/Montreal, Canada',
//       surface: 'Hard',
//       month: 'August',
//       prize: '~$7 Million',
//       points: '1000',
//       participants: 56,
//       description: 'Alternates between Toronto and Montreal each year.'
//     },
//     {
//       id: 'cincinnati',
//       name: 'Cincinnati Open',
//       category: 'ATP Masters 1000',
//       location: 'Cincinnati, USA',
//       surface: 'Hard',
//       month: 'August',
//       prize: '~$7 Million',
//       points: '1000',
//       participants: 56,
//       description: 'The last major hard court event before the US Open.'
//     },
//     {
//       id: 'shanghai',
//       name: 'Shanghai Masters',
//       category: 'ATP Masters 1000',
//       location: 'Shanghai, China',
//       surface: 'Hard',
//       month: 'October',
//       prize: '~$9-10 Million',
//       points: '1000',
//       participants: 56,
//       description: 'The premier Masters 1000 event in Asia.'
//     },
//     {
//       id: 'paris',
//       name: 'Rolex Paris Masters',
//       category: 'ATP Masters 1000',
//       location: 'Paris, France',
//       surface: 'Hard (Indoor)',
//       month: 'October-November',
//       prize: '~€5.8 Million',
//       points: '1000',
//       participants: 56,
//       description: 'The final Masters 1000 event before the ATP Finals.'
//     }
//   ],

//   wta: [
//     {
//       id: 'wta-finals',
//       name: 'WTA Finals Riyadh',
//       category: 'Year-End Championship',
//       location: 'Riyadh, Saudi Arabia',
//       surface: 'Hard (Indoor)',
//       month: 'November',
//       prize: '$15.5 Million',
//       points: '1500',
//       participants: 8,
//       description: 'The season-ending championship featuring the top 8 singles players and doubles teams.'
//     },
//     {
//       id: 'indian-wells-wta',
//       name: 'BNP Paribas Open',
//       category: 'WTA 1000',
//       location: 'Indian Wells, USA',
//       surface: 'Hard',
//       month: 'March',
//       prize: '~$9-10 Million',
//       points: '1000',
//       participants: 96,
//       description: 'One of the most prestigious combined events on tour.'
//     },
//     {
//       id: 'miami-open-wta',
//       name: 'Miami Open',
//       category: 'WTA 1000',
//       location: 'Miami, USA',
//       surface: 'Hard',
//       month: 'March-April',
//       prize: '~$9-10 Million',
//       points: '1000',
//       participants: 96,
//       description: 'Part of the Sunshine Double with Indian Wells.'
//     },
//     {
//       id: 'madrid-wta',
//       name: 'Madrid Open',
//       category: 'WTA 1000',
//       location: 'Madrid, Spain',
//       surface: 'Clay',
//       month: 'April-May',
//       prize: '~€8 Million',
//       points: '1000',
//       participants: 96,
//       description: 'A major clay court event in the spring season.'
//     },
//     {
//       id: 'rome-wta',
//       name: 'Italian Open',
//       category: 'WTA 1000',
//       location: 'Rome, Italy',
//       surface: 'Clay',
//       month: 'May',
//       prize: '~€8 Million',
//       points: '1000',
//       participants: 56,
//       description: 'The premier clay court event before the French Open.'
//     },
//     {
//       id: 'beijing',
//       name: 'China Open',
//       category: 'WTA 1000',
//       location: 'Beijing, China',
//       surface: 'Hard',
//       month: 'September-October',
//       prize: '~$8 Million',
//       points: '1000',
//       participants: 64,
//       description: 'One of the most important tournaments in Asia.'
//     },
//     {
//       id: 'cincinnati-wta',
//       name: 'Cincinnati Open',
//       category: 'WTA 1000',
//       location: 'Cincinnati, USA',
//       surface: 'Hard',
//       month: 'August',
//       prize: '~$3 Million',
//       points: '1000',
//       participants: 56,
//       description: 'The final tune-up before the US Open.'
//     },
//     {
//       id: 'canada-wta',
//       name: 'National Bank Open',
//       category: 'WTA 1000',
//       location: 'Toronto/Montreal, Canada',
//       surface: 'Hard',
//       month: 'August',
//       prize: '~$3 Million',
//       points: '1000',
//       participants: 56,
//       description: 'Part of the North American hard court swing.'
//     }
//   ]
// };

// src/data/TennisTours.js

export const tennisTours = {
  atp: [
    {
      id: 'atp-finals',
      name: 'Nitto ATP Finals',
      logo_url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Nitto_ATP_Finals_logo.jpg',
      category: 'Year-End Championship',
      location: 'Turin, Italy',
      surface: 'Hard (Indoor)',
      month: 'November',
      prize: '$15.5 Million',
      points: '1500',
      participants: 8,
      description: 'The season-ending championship featuring the top 8 singles players and doubles teams.'
    },
    {
      id: 'indian-wells',
      name: 'BNP Paribas Open',
      logo_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/BNP_Paribas.png',
      category: 'ATP Masters 1000',
      location: 'Indian Wells, USA',
      surface: 'Hard',
      month: 'March',
      prize: '~$9-10 Million',
      points: '1000',
      participants: 96,
      description: 'Also known as the "fifth Grand Slam" due to its prestige and large draw.'
    },
    {
      id: 'miami-open',
      name: 'Miami Open',
      logo_url: 'https://e7.pngegg.com/pngimages/57/865/png-clipart-2016-miami-open-logo-2015-miami-open-men-tennis-coral-lakes-gated-community-thumbnail.png',
      category: 'ATP Masters 1000',
      location: 'Miami, USA',
      surface: 'Hard',
      month: 'March-April',
      prize: '~$9-10 Million',
      points: '1000',
      participants: 96,
      description: 'One of the premier hard court tournaments held annually in South Florida.'
    },
    {
      id: 'monte-carlo',
      name: 'Monte-Carlo Masters',
      logo_url: 'https://i.pinimg.com/474x/ef/1b/37/ef1b372fcee6ea116765ff5fb6591ebb.jpg',
      category: 'ATP Masters 1000',
      location: 'Monte Carlo, Monaco',
      surface: 'Clay',
      month: 'April',
      prize: '~€5.8 Million',
      points: '1000',
      participants: 56,
      description: 'The first clay court Masters 1000 event of the season.'
    },
    {
      id: 'madrid',
      name: 'Madrid Open',
      logo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2jOjNv1Y2JZsLKYq0IF5hTMyJDa0YHJXUw&s',
      category: 'ATP Masters 1000',
      location: 'Madrid, Spain',
      surface: 'Clay',
      month: 'April-May',
      prize: '~€8 Million',
      points: '1000',
      participants: 56,
      description: 'Held at the Caja Mágica, known for its altitude affecting play.'
    },
    {
      id: 'rome',
      name: 'Italian Open',
      logo_url: 'https://1000logos.net/wp-content/uploads/2017/02/Internazionali-BNL-dItalia-Logo.png',
      category: 'ATP Masters 1000',
      location: 'Rome, Italy',
      surface: 'Clay',
      month: 'May',
      prize: '~€8 Million',
      points: '1000',
      participants: 56,
      description: 'A key clay court event leading up to the French Open.'
    },
    {
      id: 'canada',
      name: 'National Bank Open',
      logo_url: 'https://1000logos.net/wp-content/uploads/2020/08/National-Bank-Open-Logo.png',
      category: 'ATP Masters 1000',
      location: 'Toronto/Montreal, Canada',
      surface: 'Hard',
      month: 'August',
      prize: '~$7 Million',
      points: '1000',
      participants: 56,
      description: 'Alternates between Toronto and Montreal each year.'
    },
    {
      id: 'cincinnati',
      name: 'Cincinnati Open',
      logo_url: 'https://1000logos.net/wp-content/uploads/2017/02/Western-Southern-Open-Logo.png',
      category: 'ATP Masters 1000',
      location: 'Cincinnati, USA',
      surface: 'Hard',
      month: 'August',
      prize: '~$7 Million',
      points: '1000',
      participants: 56,
      description: 'The last major hard court event before the US Open.'
    },
    {
      id: 'shanghai',
      name: 'Shanghai Masters',
      logo_url: 'https://1000logos.net/wp-content/uploads/2017/02/Shanghai-Masters-Logo.png',
      category: 'ATP Masters 1000',
      location: 'Shanghai, China',
      surface: 'Hard',
      month: 'October',
      prize: '~$9-10 Million',
      points: '1000',
      participants: 56,
      description: 'The premier Masters 1000 event in Asia.'
    },
    {
      id: 'paris',
      name: 'Rolex Paris Masters',
      logo_url: 'https://1000logos.net/wp-content/uploads/2017/02/Rolex-Paris-Masters-Logo.png',
      category: 'ATP Masters 1000',
      location: 'Paris, France',
      surface: 'Hard (Indoor)',
      month: 'October-November',
      prize: '~€5.8 Million',
      points: '1000',
      participants: 56,
      description: 'The final Masters 1000 event before the ATP Finals.'
    }
  ],

  wta: [
    {
      id: 'wta-finals',
      name: 'WTA Finals Riyadh',
      logo_url: 'https://www.wtatennis.com/-/media/images/tournaments/wta-finals-riyadh-logo.png',
      category: 'Year-End Championship',
      location: 'Riyadh, Saudi Arabia',
      surface: 'Hard (Indoor)',
      month: 'November',
      prize: '$15.5 Million',
      points: '1500',
      participants: 8,
      description: 'The season-ending championship featuring the top 8 singles players and doubles teams.'
    },
    {
      id: 'indian-wells-wta',
      name: 'BNP Paribas Open',
      logo_url: 'https://1000logos.net/wp-content/uploads/2017/02/BNP-Paribas-Open-Logo.png',
      category: 'WTA 1000',
      location: 'Indian Wells, USA',
      surface: 'Hard',
      month: 'March',
      prize: '~$9-10 Million',
      points: '1000',
      participants: 96,
      description: 'One of the most prestigious combined events on tour.'
    },
    {
      id: 'miami-open-wta',
      name: 'Miami Open',
      logo_url: 'https://www.miamiopen.com/img/miami-open-logo.png',
      category: 'WTA 1000',
      location: 'Miami, USA',
      surface: 'Hard',
      month: 'March-April',
      prize: '~$9-10 Million',
      points: '1000',
      participants: 96,
      description: 'Part of the Sunshine Double with Indian Wells.'
    },
    {
      id: 'madrid-wta',
      name: 'Madrid Open',
      logo_url: 'https://1000logos.net/wp-content/uploads/2017/02/Mutua-Madrid-Open-Logo.png',
      category: 'WTA 1000',
      location: 'Madrid, Spain',
      surface: 'Clay',
      month: 'April-May',
      prize: '~€8 Million',
      points: '1000',
      participants: 96,
      description: 'A major clay court event in the spring season.'
    },
    {
      id: 'rome-wta',
      name: 'Italian Open',
      logo_url: 'https://1000logos.net/wp-content/uploads/2017/02/Internazionali-BNL-dItalia-Logo.png',
      category: 'WTA 1000',
      location: 'Rome, Italy',
      surface: 'Clay',
      month: 'May',
      prize: '~€8 Million',
      points: '1000',
      participants: 56,
      description: 'The premier clay court event before the French Open.'
    },
    {
      id: 'beijing',
      name: 'China Open',
      logo_url: 'https://1000logos.net/wp-content/uploads/2017/02/China-Open-Logo.png',
      category: 'WTA 1000',
      location: 'Beijing, China',
      surface: 'Hard',
      month: 'September-October',
      prize: '~$8 Million',
      points: '1000',
      participants: 64,
      description: 'One of the most important tournaments in Asia.'
    },
    {
      id: 'cincinnati-wta',
      name: 'Cincinnati Open',
      logo_url: 'https://1000logos.net/wp-content/uploads/2017/02/Western-Southern-Open-Logo.png',
      category: 'WTA 1000',
      location: 'Cincinnati, USA',
      surface: 'Hard',
      month: 'August',
      prize: '~$3 Million',
      points: '1000',
      participants: 56,
      description: 'The final tune-up before the US Open.'
    },
    {
      id: 'canada-wta',
      name: 'National Bank Open',
      logo_url: 'https://1000logos.net/wp-content/uploads/2020/08/National-Bank-Open-Logo.png',
      category: 'WTA 1000',
      location: 'Toronto/Montreal, Canada',
      surface: 'Hard',
      month: 'August',
      prize: '~$3 Million',
      points: '1000',
      participants: 56,
      description: 'Part of the North American hard court swing.'
    }
  ]
};