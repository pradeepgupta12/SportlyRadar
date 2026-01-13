// // src/data/TennisGrandSlamDetail.js

// export const grandSlamDetails = {
//   'australian-open': {
//     name: 'Australian Open',
//     location: 'Melbourne, Australia',
//     surface: 'Hard',
//     month: 'January',
//     venue: 'Melbourne Park',
//     prize: 'A$96.5M',
//     color: 'from-blue-600 to-blue-800',
//     founded: 1905,
//     mainCourt: 'Rod Laver Arena (14,820)',
//     description: 'The Happy Slam – first major of the year, known for extreme heat and retractable roofs.',
//     traditions: ['Extreme heat policy', 'Blue courts', 'Australia Day finals'],
//     records: {
//       mostTitles: { mens: 'Novak Djokovic (10)', womens: 'Margaret Court (11)' },
//       longestMatch: '5h 53m (Nadal vs Djokovic, 2012 Final)'
//     },
//     draws: [
//       { category: "Men's Singles", size: 128 },
//       { category: "Women's Singles", size: 128 },
//       { category: "Men's Doubles", size: 64 },
//       { category: "Women's Doubles", size: 64 },
//       { category: 'Mixed Doubles', size: 32 }
//     ],
//     pastChampions: [
//       { year: 2025, mens: 'Jannik Sinner', womens: 'Madison Keys' },
//       { year: 2024, mens: 'Jannik Sinner', womens: 'Aryna Sabalenka' },
//       { year: 2023, mens: 'Novak Djokovic', womens: 'Aryna Sabalenka' },
//       { year: 2022, mens: 'Rafael Nadal', womens: 'Ashleigh Barty' },
//       { year: 2021, mens: 'Novak Djokovic', womens: 'Naomi Osaka' }
//     ]
//   },

//   'french-open': {
//     name: 'French Open',
//     location: 'Paris, France',
//     surface: 'Clay',
//     month: 'May–June',
//     venue: 'Roland Garros',
//     prize: '€56M+',
//     color: 'from-orange-600 to-red-700',
//     founded: 1891,
//     mainCourt: 'Philippe-Chatrier (15,225)',
//     description: 'The ultimate clay test – slow red courts favouring baseline grinders.',
//     traditions: ['Red clay', 'Slow pace', 'Historic venue'],
//     records: {
//       mostTitles: { mens: 'Rafael Nadal (14)', womens: 'Chris Evert (7)' },
//       longestMatch: '6h 33m (Fognini vs Ramos, 2018)'
//     },
//     draws: [
//       { category: "Men's Singles", size: 128 },
//       { category: "Women's Singles", size: 128 },
//       { category: "Men's Doubles", size: 64 },
//       { category: "Women's Doubles", size: 64 },
//       { category: 'Mixed Doubles', size: 32 }
//     ],
//     pastChampions: [
//       { year: 2025, mens: 'Carlos Alcaraz', womens: 'Coco Gauff' },
//       { year: 2024, mens: 'Carlos Alcaraz', womens: 'Iga Świątek' },
//       { year: 2023, mens: 'Novak Djokovic', womens: 'Iga Świątek' },
//       { year: 2022, mens: 'Rafael Nadal', womens: 'Iga Świątek' },
//       { year: 2021, mens: 'Novak Djokovic', womens: 'Barbora Krejčíková' }
//     ]
//   },

//   'wimbledon': {
//     name: 'Wimbledon',
//     location: 'London, England',
//     surface: 'Grass',
//     month: 'June–July',
//     venue: 'All England Club',
//     prize: '£53.5M',
//     color: 'from-green-600 to-green-800',
//     founded: 1877,
//     mainCourt: 'Centre Court (15,000)',
//     description: 'The oldest major – steeped in tradition on fast grass.',
//     traditions: ['All-white dress code', 'Strawberries & cream', 'Royal Box'],
//     records: {
//       mostTitles: { mens: 'Roger Federer (8)', womens: 'Martina Navratilova (9)' },
//       longestMatch: '11h 5m (Isner vs Mahut, 2010)'
//     },
//     draws: [
//       { category: "Men's Singles", size: 128 },
//       { category: "Women's Singles", size: 128 },
//       { category: "Men's Doubles", size: 64 },
//       { category: "Women's Doubles", size: 64 },
//       { category: 'Mixed Doubles', size: 48 }
//     ],
//     pastChampions: [
//       { year: 2025, mens: 'Jannik Sinner', womens: 'Iga Świątek' },
//       { year: 2024, mens: 'Carlos Alcaraz', womens: 'Barbora Krejčíková' },
//       { year: 2023, mens: 'Carlos Alcaraz', womens: 'Markéta Vondroušová' },
//       { year: 2022, mens: 'Novak Djokovic', womens: 'Elena Rybakina' },
//       { year: 2021, mens: 'Novak Djokovic', womens: 'Ashleigh Barty' }
//     ]
//   },

//   'us-open': {
//     name: 'US Open',
//     location: 'New York, USA',
//     surface: 'Hard',
//     month: 'Aug–Sept',
//     venue: 'USTA Billie Jean King NTC',
//     prize: '$90M',
//     color: 'from-blue-800 to-indigo-900',
//     founded: 1881,
//     mainCourt: 'Arthur Ashe (23,771)',
//     description: 'Electric night sessions in the world’s largest tennis stadium.',
//     traditions: ['Night matches', 'Rowdy crowds', 'Blue courts'],
//     records: {
//       mostTitles: { mens: 'Connors/Sampras/Federer (5)', womens: 'Molla Mallory (8)' },
//       longestMatch: '5h 26m (Edberg vs Chang, 1992)'
//     },
//     draws: [
//       { category: "Men's Singles", size: 128 },
//       { category: "Women's Singles", size: 128 },
//       { category: "Men's Doubles", size: 64 },
//       { category: "Women's Doubles", size: 64 },
//       { category: 'Mixed Doubles', size: 32 }
//     ],
//     pastChampions: [
//       { year: 2025, mens: 'Carlos Alcaraz', womens: 'Aryna Sabalenka' },
//       { year: 2024, mens: 'Jannik Sinner', womens: 'Aryna Sabalenka' },
//       { year: 2023, mens: 'Novak Djokovic', womens: 'Coco Gauff' },
//       { year: 2022, mens: 'Carlos Alcaraz', womens: 'Iga Świątek' },
//       { year: 2021, mens: 'Daniil Medvedev', womens: 'Emma Raducanu' }
//     ]
//   }
// };


// src/data/TennisGrandSlamDetail.js

export const grandSlamDetails = {
  'australian-open': {
    name: 'Australian Open',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Australian_Open_Logo_2017.svg',
    location: 'Melbourne, Australia',
    surface: 'Hard',
    month: 'January',
    venue: 'Melbourne Park',
    prize: 'A$96.5M',
    color: 'from-blue-600 to-blue-800',
    founded: 1905,
    mainCourt: 'Rod Laver Arena (14,820)',
    description: 'The Happy Slam – first major of the year, known for extreme heat and retractable roofs.',
    traditions: ['Extreme heat policy', 'Blue courts', 'Australia Day finals'],
    records: {
      mostTitles: { mens: 'Novak Djokovic (10)', womens: 'Margaret Court (11)' },
      longestMatch: '5h 53m (Nadal vs Djokovic, 2012 Final)'
    },
    draws: [
      { category: "Men's Singles", size: 128 },
      { category: "Women's Singles", size: 128 },
      { category: "Men's Doubles", size: 64 },
      { category: "Women's Doubles", size: 64 },
      { category: 'Mixed Doubles', size: 32 }
    ],
    pastChampions: [
      { 
        year: 2025, 
        mens: 'Jannik Sinner', 
        womens: 'Madison Keys',
        mens_logo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReoxaNVQFxtk-YZ4jXnvP5Z40-P70jXa5kfg&s',
        womens_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Madison_Keys_%282023_DC_Open%29_01a_%28cropped2%29.jpg/960px-Madison_Keys_%282023_DC_Open%29_01a_%28cropped2%29.jpg'
      },
      { 
        year: 2024, 
        mens: 'Jannik Sinner', 
        womens: 'Aryna Sabalenka',
        mens_logo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReoxaNVQFxtk-YZ4jXnvP5Z40-P70jXa5kfg&s',
        womens_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Aryna_Sabalenka_%282024_DC_Open%29_06.jpg'
      },
      { 
        year: 2023, 
        mens: 'Novak Djokovic', 
        womens: 'Aryna Sabalenka',
        mens_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Novak_Djokovic_2024_Paris_Olympics.jpg',
        womens_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Aryna_Sabalenka_%282024_DC_Open%29_06.jpg'
      },
      { 
        year: 2022, 
        mens: 'Rafael Nadal', 
        womens: 'Ashleigh Barty',
        mens_logo_url: 'https://www.atptour.com/-/media/images/players/head-shot/n409.jpg',
        womens_logo_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/ashleigh-barty.jpg' // fallback if exact not available, but usually WTA has it
      },
      { 
        year: 2021, 
        mens: 'Novak Djokovic', 
        womens: 'Naomi Osaka',
        mens_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Novak_Djokovic_2024_Paris_Olympics.jpg',
        womens_logo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfSDUFuivGfr2UDLQ7BrfvHF33rax43UIWw&s'
      }
    ]
  },

  'french-open': {
    name: 'French Open',
    logo_url: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Logo_Roland-Garros.svg',
    location: 'Paris, France',
    surface: 'Clay',
    month: 'May–June',
    venue: 'Roland Garros',
    prize: '€56M+',
    color: 'from-orange-600 to-red-700',
    founded: 1891,
    mainCourt: 'Philippe-Chatrier (15,225)',
    description: 'The ultimate clay test – slow red courts favouring baseline grinders.',
    traditions: ['Red clay', 'Slow pace', 'Historic venue'],
    records: {
      mostTitles: { mens: 'Rafael Nadal (14)', womens: 'Chris Evert (7)' },
      longestMatch: '6h 33m (Fognini vs Ramos, 2018)'
    },
    draws: [
      { category: "Men's Singles", size: 128 },
      { category: "Women's Singles", size: 128 },
      { category: "Men's Doubles", size: 64 },
      { category: "Women's Doubles", size: 64 },
      { category: 'Mixed Doubles', size: 32 }
    ],
    pastChampions: [
      { 
        year: 2025, 
        mens: 'Carlos Alcaraz', 
        womens: 'Coco Gauff',
        mens_logo_url: 'https://www.atptour.com/-/media/images/players/head-shot/a0e2.jpg',
        womens_logo_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/328560.jpg'
      },
      { 
        year: 2024, 
        mens: 'Carlos Alcaraz', 
        womens: 'Iga Świątek',
        mens_logo_url: 'https://www.atptour.com/-/media/images/players/head-shot/a0e2.jpg',
        womens_logo_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/326408.jpg'
      },
      { 
        year: 2023, 
        mens: 'Novak Djokovic', 
        womens: 'Iga Świątek',
        mens_logo_url: 'https://www.atptour.com/-/media/images/players/head-shot/d643.jpg',
        womens_logo_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/326408.jpg'
      },
      { 
        year: 2022, 
        mens: 'Rafael Nadal', 
        womens: 'Iga Świątek',
        mens_logo_url: 'https://www.atptour.com/-/media/images/players/head-shot/n409.jpg',
        womens_logo_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/326408.jpg'
      },
      { 
        year: 2021, 
        mens: 'Novak Djokovic', 
        womens: 'Barbora Krejčíková',
        mens_logo_url: 'https://www.atptour.com/-/media/images/players/head-shot/d643.jpg',
        womens_logo_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/barbora-krejcikova.jpg'
      }
    ]
  },

  'wimbledon': {
    name: 'Wimbledon',
    logo_url: 'https://1000logos.net/wp-content/uploads/2017/02/Wimbledon-Logo.png',
    location: 'London, England',
    surface: 'Grass',
    month: 'June–July',
    venue: 'All England Club',
    prize: '£53.5M',
    color: 'from-green-600 to-green-800',
    founded: 1877,
    mainCourt: 'Centre Court (15,000)',
    description: 'The oldest major – steeped in tradition on fast grass.',
    traditions: ['All-white dress code', 'Strawberries & cream', 'Royal Box'],
    records: {
      mostTitles: { mens: 'Roger Federer (8)', womens: 'Martina Navratilova (9)' },
      longestMatch: '11h 5m (Isner vs Mahut, 2010)'
    },
    draws: [
      { category: "Men's Singles", size: 128 },
      { category: "Women's Singles", size: 128 },
      { category: "Men's Doubles", size: 64 },
      { category: "Women's Doubles", size: 64 },
      { category: 'Mixed Doubles', size: 48 }
    ],
    pastChampions: [
      { 
        year: 2025, 
        mens: 'Jannik Sinner', 
        womens: 'Iga Świątek',
        mens_logo_url: 'https://www.atptour.com/-/media/images/players/head-shot/s0ag.jpg',
        womens_logo_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/326408.jpg'
      },
      { 
        year: 2024, 
        mens: 'Carlos Alcaraz', 
        womens: 'Barbora Krejčíková',
        mens_logo_url: 'https://www.atptour.com/-/media/images/players/head-shot/a0e2.jpg',
        womens_logo_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/barbora-krejcikova.jpg'
      },
      { 
        year: 2023, 
        mens: 'Carlos Alcaraz', 
        womens: 'Markéta Vondroušová',
        mens_logo_url: 'https://www.atptour.com/-/media/images/players/head-shot/a0e2.jpg',
        womens_logo_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/marketa-vondrousova.jpg'
      },
      { 
        year: 2022, 
        mens: 'Novak Djokovic', 
        womens: 'Elena Rybakina',
        mens_logo_url: 'https://www.atptour.com/-/media/images/players/head-shot/d643.jpg',
        womens_logo_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/elena-rybakina.jpg'
      },
      { 
        year: 2021, 
        mens: 'Novak Djokovic', 
        womens: 'Ashleigh Barty',
        mens_logo_url: 'https://www.atptour.com/-/media/images/players/head-shot/d643.jpg',
        womens_logo_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/ashleigh-barty.jpg'
      }
    ]
  },

  'us-open': {
    name: 'US Open',
    logo_url: 'https://1000logos.net/wp-content/uploads/2016/10/US-Open-Logo.png',
    location: 'New York, USA',
    surface: 'Hard',
    month: 'Aug–Sept',
    venue: 'USTA Billie Jean King NTC',
    prize: '$90M',
    color: 'from-blue-800 to-indigo-900',
    founded: 1881,
    mainCourt: 'Arthur Ashe (23,771)',
    description: 'Electric night sessions in the world’s largest tennis stadium.',
    traditions: ['Night matches', 'Rowdy crowds', 'Blue courts'],
    records: {
      mostTitles: { mens: 'Connors/Sampras/Federer (5)', womens: 'Molla Mallory (8)' },
      longestMatch: '5h 26m (Edberg vs Chang, 1992)'
    },
    draws: [
      { category: "Men's Singles", size: 128 },
      { category: "Women's Singles", size: 128 },
      { category: "Men's Doubles", size: 64 },
      { category: "Women's Doubles", size: 64 },
      { category: 'Mixed Doubles', size: 32 }
    ],
    pastChampions: [
      { 
        year: 2025, 
        mens: 'Carlos Alcaraz', 
        womens: 'Aryna Sabalenka',
        mens_logo_url: 'https://www.atptour.com/-/media/images/players/head-shot/a0e2.jpg',
        womens_logo_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/320760.jpg'
      },
      { 
        year: 2024, 
        mens: 'Jannik Sinner', 
        womens: 'Aryna Sabalenka',
        mens_logo_url: 'https://www.atptour.com/-/media/images/players/head-shot/s0ag.jpg',
        womens_logo_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/320760.jpg'
      },
      { 
        year: 2023, 
        mens: 'Novak Djokovic', 
        womens: 'Coco Gauff',
        mens_logo_url: 'https://www.atptour.com/-/media/images/players/head-shot/d643.jpg',
        womens_logo_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/328560.jpg'
      },
      { 
        year: 2022, 
        mens: 'Carlos Alcaraz', 
        womens: 'Iga Świątek',
        mens_logo_url: 'https://www.atptour.com/-/media/images/players/head-shot/a0e2.jpg',
        womens_logo_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/326408.jpg'
      },
      { 
        year: 2021, 
        mens: 'Daniil Medvedev', 
        womens: 'Emma Raducanu',
        mens_logo_url: 'https://www.atptour.com/-/media/images/players/head-shot/medvedev.jpg',
        womens_logo_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/emma-raducanu.jpg'
      }
    ]
  }
};