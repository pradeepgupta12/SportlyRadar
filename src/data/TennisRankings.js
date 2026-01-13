// // src/data/TennisRankings.js

// export const tennisRankings = {
//   'mens-singles': [
//     { rank: 1, prevRank: 1, name: 'Jannik Sinner', country: 'Italy', points: 11830, tournaments: 19, change: 0 },
//     { rank: 2, prevRank: 2, name: 'Alexander Zverev', country: 'Germany', points: 7915, tournaments: 20, change: 0 },
//     { rank: 3, prevRank: 3, name: 'Carlos Alcaraz', country: 'Spain', points: 7010, tournaments: 17, change: 0 },
//     { rank: 4, prevRank: 5, name: 'Taylor Fritz', country: 'USA', points: 5100, tournaments: 23, change: 1 },
//     { rank: 5, prevRank: 4, name: 'Daniil Medvedev', country: 'Russia', points: 5030, tournaments: 20, change: -1 },
//     { rank: 6, prevRank: 6, name: 'Casper Ruud', country: 'Norway', points: 4255, tournaments: 21, change: 0 },
//     { rank: 7, prevRank: 7, name: 'Novak Djokovic', country: 'Serbia', points: 3910, tournaments: 14, change: 0 },
//     { rank: 8, prevRank: 9, name: 'Alex de Minaur', country: 'Australia', points: 3745, tournaments: 23, change: 1 },
//     { rank: 9, prevRank: 10, name: 'Andrey Rublev', country: 'Russia', points: 3600, tournaments: 23, change: 1 },
//     { rank: 10, prevRank: 8, name: 'Grigor Dimitrov', country: 'Bulgaria', points: 3340, tournaments: 22, change: -2 },
//     { rank: 11, prevRank: 11, name: 'Stefanos Tsitsipas', country: 'Greece', points: 3165, tournaments: 21, change: 0 },
//     { rank: 12, prevRank: 13, name: 'Tommy Paul', country: 'USA', points: 2950, tournaments: 25, change: 1 },
//     { rank: 13, prevRank: 12, name: 'Holger Rune', country: 'Denmark', points: 2780, tournaments: 20, change: -1 },
//     { rank: 14, prevRank: 14, name: 'Lorenzo Musetti', country: 'Italy', points: 2600, tournaments: 24, change: 0 },
//     { rank: 15, prevRank: 15, name: 'Jack Draper', country: 'Great Britain', points: 2410, tournaments: 21, change: 0 }
//   ],

//   'womens-singles': [
//     { rank: 1, prevRank: 1, name: 'Aryna Sabalenka', country: 'Belarus', points: 9706, tournaments: 18, change: 0 },
//     { rank: 2, prevRank: 2, name: 'Iga Świątek', country: 'Poland', points: 8370, tournaments: 19, change: 0 },
//     { rank: 3, prevRank: 3, name: 'Coco Gauff', country: 'USA', points: 6530, tournaments: 21, change: 0 },
//     { rank: 4, prevRank: 4, name: 'Jasmine Paolini', country: 'Italy', points: 5344, tournaments: 22, change: 0 },
//     { rank: 5, prevRank: 5, name: 'Zheng Qinwen', country: 'China', points: 5340, tournaments: 23, change: 0 },
//     { rank: 6, prevRank: 7, name: 'Elena Rybakina', country: 'Kazakhstan', points: 5171, tournaments: 18, change: 1 },
//     { rank: 7, prevRank: 6, name: 'Jessica Pegula', country: 'USA', points: 4705, tournaments: 20, change: -1 },
//     { rank: 8, prevRank: 8, name: 'Emma Navarro', country: 'USA', points: 3698, tournaments: 23, change: 0 },
//     { rank: 9, prevRank: 10, name: 'Daria Kasatkina', country: 'Russia', points: 3368, tournaments: 24, change: 1 },
//     { rank: 10, prevRank: 9, name: 'Barbora Krejčíková', country: 'Czech Republic', points: 3214, tournaments: 19, change: -1 },
//     { rank: 11, prevRank: 11, name: 'Danielle Collins', country: 'USA', points: 3177, tournaments: 20, change: 0 },
//     { rank: 12, prevRank: 12, name: 'Paula Badosa', country: 'Spain', points: 3145, tournaments: 22, change: 0 },
//     { rank: 13, prevRank: 14, name: 'Diana Shnaider', country: 'Russia', points: 3020, tournaments: 26, change: 1 },
//     { rank: 14, prevRank: 13, name: 'Anna Kalinskaya', country: 'Russia', points: 2891, tournaments: 23, change: -1 },
//     { rank: 15, prevRank: 15, name: 'Beatriz Haddad Maia', country: 'Brazil', points: 2758, tournaments: 25, change: 0 }
//   ],

//   'mens-doubles': [
//     { rank: 1, prevRank: 1, name: 'Marcelo Arevalo / Mate Pavic', country: 'ESA / CRO', points: 7960, change: 0 },
//     { rank: 2, prevRank: 2, name: 'Harri Heliovaara / Henry Patten', country: 'FIN / GBR', points: 6420, change: 0 },
//     { rank: 3, prevRank: 3, name: 'Marcel Granollers / Horacio Zeballos', country: 'ESP / ARG', points: 6190, change: 0 },
//     { rank: 4, prevRank: 5, name: 'Simone Bolelli / Andrea Vavassori', country: 'ITA / ITA', points: 5630, change: 1 },
//     { rank: 5, prevRank: 4, name: 'Max Purcell / Jordan Thompson', country: 'AUS / AUS', points: 5570, change: -1 },
//     { rank: 6, prevRank: 6, name: 'Rajeev Ram / Joe Salisbury', country: 'USA / GBR', points: 4880, change: 0 },
//     { rank: 7, prevRank: 7, name: 'Kevin Krawietz / Tim Puetz', country: 'GER / GER', points: 4235, change: 0 },
//     { rank: 8, prevRank: 8, name: 'Austin Krajicek / Rajeev Ram', country: 'USA / USA', points: 3940, change: 0 },
//     { rank: 9, prevRank: 9, name: 'Wesley Koolhof / Nikola Mektic', country: 'NED / CRO', points: 3815, change: 0 },
//     { rank: 10, prevRank: 11, name: 'Santiago Gonzalez / Edouard Roger-Vasselin', country: 'MEX / FRA', points: 3610, change: 1 }
//   ],

//   'womens-doubles': [
//     { rank: 1, prevRank: 1, name: 'Gabriela Dabrowski / Erin Routliffe', country: 'CAN / NZL', points: 9225, change: 0 },
//     { rank: 2, prevRank: 3, name: 'Katerina Siniakova / Taylor Townsend', country: 'CZE / USA', points: 8330, change: 1 },
//     { rank: 3, prevRank: 2, name: 'Sara Errani / Jasmine Paolini', country: 'ITA / ITA', points: 8030, change: -1 },
//     { rank: 4, prevRank: 4, name: 'Hao-Ching Chan / Veronika Kudermetova', country: 'TPE / RUS', points: 6790, change: 0 },
//     { rank: 5, prevRank: 5, name: 'Su-Wei Hsieh / Elise Mertens', country: 'TPE / BEL', points: 5855, change: 0 },
//     { rank: 6, prevRank: 6, name: 'Nicole Melichar-Martinez / Ellen Perez', country: 'USA / AUS', points: 5320, change: 0 },
//     { rank: 7, prevRank: 7, name: 'Lyudmyla Kichenok / Jelena Ostapenko', country: 'UKR / LAT', points: 4780, change: 0 },
//     { rank: 8, prevRank: 9, name: 'Desirae Krawczyk / Caroline Dolehide', country: 'USA / USA', points: 4565, change: 1 },
//     { rank: 9, prevRank: 8, name: 'Laura Siegemund / Vera Zvonareva', country: 'GER / RUS', points: 4410, change: -1 },
//     { rank: 10, prevRank: 10, name: 'Kristina Mladenovic / Zhang Shuai', country: 'FRA / CHN', points: 4120, change: 0 }
//   ]
// };

// src/data/TennisRankings.js

export const tennisRankings = {
  'mens-singles': [
    { 
      rank: 1, prevRank: 1, name: 'Jannik Sinner', country: 'Italy', points: 11830, tournaments: 19, change: 0,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/it.png'
    },
    { 
      rank: 2, prevRank: 2, name: 'Alexander Zverev', country: 'Germany', points: 7915, tournaments: 20, change: 0,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/de.png'
    },
    { 
      rank: 3, prevRank: 3, name: 'Carlos Alcaraz', country: 'Spain', points: 7010, tournaments: 17, change: 0,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/es.png'
    },
    { 
      rank: 4, prevRank: 5, name: 'Taylor Fritz', country: 'USA', points: 5100, tournaments: 23, change: 1,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/us.png'
    },
    { 
      rank: 5, prevRank: 4, name: 'Daniil Medvedev', country: 'Russia', points: 5030, tournaments: 20, change: -1,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/ru.png'
    },
    { 
      rank: 6, prevRank: 6, name: 'Casper Ruud', country: 'Norway', points: 4255, tournaments: 21, change: 0,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/no.png'
    },
    { 
      rank: 7, prevRank: 7, name: 'Novak Djokovic', country: 'Serbia', points: 3910, tournaments: 14, change: 0,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/rs.png'
    },
    { 
      rank: 8, prevRank: 9, name: 'Alex de Minaur', country: 'Australia', points: 3745, tournaments: 23, change: 1,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/au.png'
    },
    { 
      rank: 9, prevRank: 10, name: 'Andrey Rublev', country: 'Russia', points: 3600, tournaments: 23, change: 1,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/ru.png'
    },
    { 
      rank: 10, prevRank: 8, name: 'Grigor Dimitrov', country: 'Bulgaria', points: 3340, tournaments: 22, change: -2,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/bg.png'
    },
    { 
      rank: 11, prevRank: 11, name: 'Stefanos Tsitsipas', country: 'Greece', points: 3165, tournaments: 21, change: 0,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/gr.png'
    },
    { 
      rank: 12, prevRank: 13, name: 'Tommy Paul', country: 'USA', points: 2950, tournaments: 25, change: 1,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/us.png'
    },
    { 
      rank: 13, prevRank: 12, name: 'Holger Rune', country: 'Denmark', points: 2780, tournaments: 20, change: -1,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg', // Rune image
      country_flag_url: 'https://flagcdn.com/32x24/dk.png'
    },
    { 
      rank: 14, prevRank: 14, name: 'Lorenzo Musetti', country: 'Italy', points: 2600, tournaments: 24, change: 0,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/it.png'
    },
    { 
      rank: 15, prevRank: 15, name: 'Jack Draper', country: 'Great Britain', points: 2410, tournaments: 21, change: 0,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/gb.png'
    }
  ],

  'womens-singles': [
    { 
      rank: 1, prevRank: 1, name: 'Aryna Sabalenka', country: 'Belarus', points: 9706, tournaments: 18, change: 0,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/320760.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/by.png'
    },
    { 
      rank: 2, prevRank: 2, name: 'Iga Świątek', country: 'Poland', points: 8370, tournaments: 19, change: 0,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/326408.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/pl.png'
    },
    { 
      rank: 3, prevRank: 3, name: 'Coco Gauff', country: 'USA', points: 6530, tournaments: 21, change: 0,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/328560.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/us.png'
    },
    { 
      rank: 4, prevRank: 4, name: 'Jasmine Paolini', country: 'Italy', points: 5344, tournaments: 22, change: 0,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/paolini.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/it.png'
    },
    { 
      rank: 5, prevRank: 5, name: 'Zheng Qinwen', country: 'China', points: 5340, tournaments: 23, change: 0,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/zheng-qinwen.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/cn.png'
    },
    { 
      rank: 6, prevRank: 7, name: 'Elena Rybakina', country: 'Kazakhstan', points: 5171, tournaments: 18, change: 1,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/rybakina.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/kz.png'
    },
    { 
      rank: 7, prevRank: 6, name: 'Jessica Pegula', country: 'USA', points: 4705, tournaments: 20, change: -1,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/pegula.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/us.png'
    },
    { 
      rank: 8, prevRank: 8, name: 'Emma Navarro', country: 'USA', points: 3698, tournaments: 23, change: 0,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/navarro.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/us.png'
    },
    { 
      rank: 9, prevRank: 10, name: 'Daria Kasatkina', country: 'Russia', points: 3368, tournaments: 24, change: 1,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/kasatkina.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/ru.png'
    },
    { 
      rank: 10, prevRank: 9, name: 'Barbora Krejčíková', country: 'Czech Republic', points: 3214, tournaments: 19, change: -1,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/krejcikova.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/cz.png'
    },
    { 
      rank: 11, prevRank: 11, name: 'Danielle Collins', country: 'USA', points: 3177, tournaments: 20, change: 0,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/collins.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/us.png'
    },
    { 
      rank: 12, prevRank: 12, name: 'Paula Badosa', country: 'Spain', points: 3145, tournaments: 22, change: 0,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/badosa.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/es.png'
    },
    { 
      rank: 13, prevRank: 14, name: 'Diana Shnaider', country: 'Russia', points: 3020, tournaments: 26, change: 1,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/shnaider.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/ru.png'
    },
    { 
      rank: 14, prevRank: 13, name: 'Anna Kalinskaya', country: 'Russia', points: 2891, tournaments: 23, change: -1,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/kalinskaya.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/ru.png'
    },
    { 
      rank: 15, prevRank: 15, name: 'Beatriz Haddad Maia', country: 'Brazil', points: 2758, tournaments: 25, change: 0,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/haddad-maia.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/br.png'
    }
  ],

  'mens-doubles': [
    { 
      rank: 1, prevRank: 1, name: 'Marcelo Arevalo / Mate Pavic', country: 'ESA / CRO', points: 7960, change: 0,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg', // Marcelo; for Mate use separate if needed in UI
      country_flag_url: 'https://flagcdn.com/32x24/sv.png' // ESA (El Salvador) primary; adjust if needed for pair
    },
    { 
      rank: 2, prevRank: 2, name: 'Harri Heliovaara / Henry Patten', country: 'FIN / GBR', points: 6420, change: 0,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/fi.png'
    },
    { 
      rank: 3, prevRank: 3, name: 'Marcel Granollers / Horacio Zeballos', country: 'ESP / ARG', points: 6190, change: 0,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/es.png'
    },
    { 
      rank: 4, prevRank: 5, name: 'Simone Bolelli / Andrea Vavassori', country: 'ITA / ITA', points: 5630, change: 1,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/it.png'
    },
    { 
      rank: 5, prevRank: 4, name: 'Max Purcell / Jordan Thompson', country: 'AUS / AUS', points: 5570, change: -1,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/au.png'
    },
    { 
      rank: 6, prevRank: 6, name: 'Rajeev Ram / Joe Salisbury', country: 'USA / GBR', points: 4880, change: 0,
      profile_image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/us.png'
    },
    { 
      rank: 7, prevRank: 7, name: 'Kevin Krawietz / Tim Puetz', country: 'GER / GER', points: 4235, change: 0,
      profile_image_url: 'https://www.atptour.com/-/media/images/players/head-shot/krawietz.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/de.png'
    },
    { 
      rank: 8, prevRank: 8, name: 'Austin Krajicek / Rajeev Ram', country: 'USA / USA', points: 3940, change: 0,
      profile_image_url: 'https://www.atptour.com/-/media/images/players/head-shot/krajicek.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/us.png'
    },
    { 
      rank: 9, prevRank: 9, name: 'Wesley Koolhof / Nikola Mektic', country: 'NED / CRO', points: 3815, change: 0,
      profile_image_url: 'https://www.atptour.com/-/media/images/players/head-shot/koolhof.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/nl.png'
    },
    { 
      rank: 10, prevRank: 11, name: 'Santiago Gonzalez / Edouard Roger-Vasselin', country: 'MEX / FRA', points: 3610, change: 1,
      profile_image_url: 'https://www.atptour.com/-/media/images/players/head-shot/gonzalez.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/mx.png'
    }
  ],

  'womens-doubles': [
    { 
      rank: 1, prevRank: 1, name: 'Gabriela Dabrowski / Erin Routliffe', country: 'CAN / NZL', points: 9225, change: 0,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/dabrowski.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/ca.png'
    },
    { 
      rank: 2, prevRank: 3, name: 'Katerina Siniakova / Taylor Townsend', country: 'CZE / USA', points: 8330, change: 1,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/siniakova.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/cz.png'
    },
    { 
      rank: 3, prevRank: 2, name: 'Sara Errani / Jasmine Paolini', country: 'ITA / ITA', points: 8030, change: -1,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/errani.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/it.png'
    },
    { 
      rank: 4, prevRank: 4, name: 'Hao-Ching Chan / Veronika Kudermetova', country: 'TPE / RUS', points: 6790, change: 0,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/chan-hao-ching.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/tw.png'
    },
    { 
      rank: 5, prevRank: 5, name: 'Su-Wei Hsieh / Elise Mertens', country: 'TPE / BEL', points: 5855, change: 0,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/hsieh-su-wei.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/tw.png'
    },
    { 
      rank: 6, prevRank: 6, name: 'Nicole Melichar-Martinez / Ellen Perez', country: 'USA / AUS', points: 5320, change: 0,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/melichar.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/us.png'
    },
    { 
      rank: 7, prevRank: 7, name: 'Lyudmyla Kichenok / Jelena Ostapenko', country: 'UKR / LAT', points: 4780, change: 0,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/kichenok.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/ua.png'
    },
    { 
      rank: 8, prevRank: 9, name: 'Desirae Krawczyk / Caroline Dolehide', country: 'USA / USA', points: 4565, change: 1,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/krawczyk.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/us.png'
    },
    { 
      rank: 9, prevRank: 8, name: 'Laura Siegemund / Vera Zvonareva', country: 'GER / RUS', points: 4410, change: -1,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/siegemund.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/de.png'
    },
    { 
      rank: 10, prevRank: 10, name: 'Kristina Mladenovic / Zhang Shuai', country: 'FRA / CHN', points: 4120, change: 0,
      profile_image_url: 'https://www.wtatennis.com/-/media/images/players/head-shot/mladenovic.jpg',
      country_flag_url: 'https://flagcdn.com/32x24/fr.png'
    }
  ]
};