// // src/data/TennisGrandSlamData.js

// export const grandSlams = [
//   {
//     id: 'australian-open',
//     name: 'Australian Open',
//     location: 'Melbourne, Australia',
//     surface: 'Hard',
//     month: 'January',
//     venue: 'Melbourne Park',
//     prize: 'A$111.5M', // Record prize money for 2026
//     color: 'from-blue-600 to-blue-800',
//     description: 'Happy Slam – first major of the year in summer heat.',
//     recentChampions: { mens: 'Jannik Sinner (2025)', womens: 'Madison Keys (2025)' }
//   },
//   {
//     id: 'french-open',
//     name: 'French Open',
//     location: 'Paris, France',
//     surface: 'Clay',
//     month: 'May–June',
//     venue: 'Roland Garros',
//     prize: '€56.4M', // Approximate from 2025 data
//     color: 'from-orange-600 to-red-700',
//     description: 'The ultimate test on slow red clay.',
//     recentChampions: { mens: 'Carlos Alcaraz (2025)', womens: 'Coco Gauff (2025)' }
//   },
//   {
//     id: 'wimbledon',
//     name: 'Wimbledon',
//     location: 'London, England',
//     surface: 'Grass',
//     month: 'June–July',
//     venue: 'All England Club',
//     prize: '£53.5M',
//     color: 'from-green-600 to-green-800',
//     description: 'The oldest and most traditional major.',
//     recentChampions: { mens: 'Jannik Sinner (2025)', womens: 'Iga Świątek (2025)' }
//   },
//   {
//     id: 'us-open',
//     name: 'US Open',
//     location: 'New York, USA',
//     surface: 'Hard',
//     month: 'Aug–Sept',
//     venue: 'USTA Billie Jean King NTC',
//     prize: '$90M',
//     color: 'from-blue-800 to-indigo-900',
//     description: 'The electric final major under NYC lights.',
//     recentChampions: { mens: 'Carlos Alcaraz (2025)', womens: 'Aryna Sabalenka (2025)' }
//   }
// ];

// src/data/TennisGrandSlamData.js

export const grandSlams = [
  {
    id: 'australian-open',
    name: 'Australian Open',
    location: 'Melbourne, Australia',
    surface: 'Hard',
    month: 'January',
    venue: 'Melbourne Park',
    prize: 'A$111.5M', // Record prize money for 2026
    color: 'from-blue-600 to-blue-800',
    description: 'Happy Slam – first major of the year in summer heat.',
    recentChampions: { mens: 'Jannik Sinner (2025)', womens: 'Madison Keys (2025)' },
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Australian_Open_Logo_2017.svg' // Official style, transparent-friendly
  },
  {
    id: 'french-open',
    name: 'French Open',
    location: 'Paris, France',
    surface: 'Clay',
    month: 'May–June',
    venue: 'Roland Garros',
    prize: '€56.4M', // Approximate from 2025 data
    color: 'from-orange-600 to-red-700',
    description: 'The ultimate test on slow red clay.',
    recentChampions: { mens: 'Carlos Alcaraz (2025)', womens: 'Coco Gauff (2025)' },
    logo_url: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Logo_Roland-Garros.svg' // Classic Roland Garros logo
  },
  {
    id: 'wimbledon',
    name: 'Wimbledon',
    location: 'London, England',
    surface: 'Grass',
    month: 'June–July',
    venue: 'All England Club',
    prize: '£53.5M',
    color: 'from-green-600 to-green-800',
    description: 'The oldest and most traditional major.',
    recentChampions: { mens: 'Jannik Sinner (2025)', womens: 'Iga Świątek (2025)' },
    logo_url: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Wimbledon.svg' // Traditional Wimbledon emblem
  },
  {
    id: 'us-open',
    name: 'US Open',
    location: 'New York, USA',
    surface: 'Hard',
    month: 'Aug–Sept',
    venue: 'USTA Billie Jean King NTC',
    prize: '$90M',
    color: 'from-blue-800 to-indigo-900',
    description: 'The electric final major under NYC lights.',
    recentChampions: { mens: 'Carlos Alcaraz (2025)', womens: 'Aryna Sabalenka (2025)' },
    logo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbw-KE8CWY6gOGnZt6yU8jm4rnPwSmmBM1zQ&s' // Iconic US Open flaming ball logo
  }
];