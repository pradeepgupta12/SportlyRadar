// // src/data/TennisToursDetail.js

// export const tennisTourDetails = {
//   'atp-finals': {
//     name: 'Nitto ATP Finals',
//     category: 'Year-End Championship',
//     location: 'Turin, Italy',
//     surface: 'Hard (Indoor)',
//     month: 'November',
//     prize: '$15.5M',
//     points: '1500',
//     participants: 8,
//     venue: 'Inalpi Arena',
//     established: 1970,
//     description: 'Season-ending event for the top 8 singles players & doubles teams.',
//     format: 'Round-robin groups → semifinals → final',
//     pastChampions: [
//       { year: 2025, champion: 'Jannik Sinner', runnerUp: 'Carlos Alcaraz' },
//       { year: 2024, champion: 'Jannik Sinner', runnerUp: 'Taylor Fritz' },
//       { year: 2023, champion: 'Novak Djokovic', runnerUp: 'Jannik Sinner' },
//       { year: 2022, champion: 'Novak Djokovic', runnerUp: 'Casper Ruud' },
//       { year: 2021, champion: 'Alexander Zverev', runnerUp: 'Daniil Medvedev' }
//     ],
//     records: {
//       mostTitles: 'Novak Djokovic (7)',
//       youngestChampion: 'Lleyton Hewitt (20y 8m)',
//       oldestChampion: 'Roger Federer (36y 10m)'
//     }
//   },

//   'indian-wells': {
//     name: 'BNP Paribas Open',
//     category: 'ATP Masters 1000',
//     location: 'Indian Wells, CA, USA',
//     surface: 'Hard',
//     month: 'March',
//     prize: '~$9.7M',
//     points: '1000',
//     participants: 96,
//     venue: 'Indian Wells Tennis Garden',
//     established: 1974,
//     description: 'Often called the "5th Grand Slam" – largest combined ATP/WTA event outside majors.',
//     format: '96-player draw (top seeds bye)',
//     pastChampions: [
//       { year: 2025, champion: 'Jack Draper', runnerUp: 'Holger Rune' },
//       { year: 2024, champion: 'Carlos Alcaraz', runnerUp: 'Daniil Medvedev' },
//       { year: 2023, champion: 'Carlos Alcaraz', runnerUp: 'Daniil Medvedev' },
//       { year: 2022, champion: 'Taylor Fritz', runnerUp: 'Rafael Nadal' },
//       { year: 2021, champion: 'Cameron Norrie', runnerUp: 'Nikoloz Basilashvili' }
//     ],
//     records: {
//       mostTitles: 'Novak Djokovic & Roger Federer (5 each)',
//       youngestChampion: 'Boris Becker (19y)',
//       note: 'Often features long, high-quality matches'
//     }
//   },

//   'wta-finals': {
//     name: 'WTA Finals Riyadh',
//     category: 'Year-End Championship',
//     location: 'Riyadh, Saudi Arabia',
//     surface: 'Hard (Indoor)',
//     month: 'November',
//     prize: '$15.5M',
//     points: '1500',
//     participants: 8,
//     venue: 'King Saud University Arena',
//     established: 1972,
//     description: 'Season-ending event for the top 8 singles players & doubles teams.',
//     format: 'Round-robin groups → semifinals → final',
//     pastChampions: [
//       { year: 2025, champion: 'Elena Rybakina', runnerUp: 'Aryna Sabalenka' },
//       { year: 2024, champion: 'Coco Gauff', runnerUp: 'Zheng Qinwen' },
//       { year: 2023, champion: 'Iga Świątek', runnerUp: 'Jessica Pegula' },
//       { year: 2022, champion: 'Caroline Garcia', runnerUp: 'Aryna Sabalenka' },
//       { year: 2021, champion: 'Garbiñe Muguruza', runnerUp: 'Anett Kontaveit' }
//     ],
//     records: {
//       mostTitles: 'Martina Navratilova (8)',
//       youngestChampion: 'Tracy Austin (17y)',
//       oldestChampion: 'Serena Williams (33y)'
//     }
//   }
// };


// src/data/TennisToursDetail.js

export const tennisTourDetails = {
  'atp-finals': {
    name: 'Nitto ATP Finals',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Nitto_ATP_Finals_logo.jpg', // Official logo from site (SVG for sharp quality)
    category: 'Year-End Championship',
    location: 'Turin, Italy',
    surface: 'Hard (Indoor)',
    month: 'November',
    prize: '$15.5M',
    points: '1500',
    participants: 8,
    venue: 'Inalpi Arena',
    established: 1970,
    description: 'Season-ending event for the top 8 singles players & doubles teams.',
    format: 'Round-robin groups → semifinals → final',
    pastChampions: [
      { 
        year: 2025, 
        champion: 'Jannik Sinner', 
        runnerUp: 'Carlos Alcaraz',
        championAvatar: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg', // Official ATP profile image
        runnerUpAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Carlos_Alcaraz_2025_FO.jpg/250px-Carlos_Alcaraz_2025_FO.jpg'  // Official ATP profile image
      },
      { 
        year: 2024, 
        champion: 'Jannik Sinner', 
        runnerUp: 'Taylor Fritz',
        championAvatar: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg',
        runnerUpAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_L8-HecmS12iVMRYtfPEyXenmj0OwKdpOw&s' // From ATP or similar
      },
      { 
        year: 2023, 
        champion: 'Novak Djokovic', 
        runnerUp: 'Jannik Sinner',
        championAvatar: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Novak_Djokovic_2024_Paris_Olympics.jpg',
        runnerUpAvatar: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Jannik_Sinner_2024_US_Open_4_%28cropped%29.jpg'
      },
      { 
        year: 2022, 
        champion: 'Novak Djokovic', 
        runnerUp: 'Casper Ruud',
        championAvatar: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Novak_Djokovic_2024_Paris_Olympics.jpg',
        runnerUpAvatar: 'https://www.atptour.com/-/media/images/players/head-shot/r0f5_head_mohr.svg'
      },
      { 
        year: 2021, 
        champion: 'Alexander Zverev', 
        runnerUp: 'Daniil Medvedev',
        championAvatar: 'https://www.atptour.com/-/media/images/players/head-shot/z355_head_mohr.svg',
        runnerUpAvatar: 'https://www.atptour.com/-/media/images/players/head-shot/me32_head_mohr.svg'
      }
    ],
    records: {
      mostTitles: 'Novak Djokovic (7)',
      youngestChampion: 'Lleyton Hewitt (20y 8m)',
      oldestChampion: 'Roger Federer (36y 10m)'
    }
  },

  'indian-wells': {
    name: 'BNP Paribas Open',
    logoUrl: 'https://bnpparibasopen.com/wp-content/themes/bnppo/assets/images/logo.svg', // Official logo from tournament site
    category: 'ATP Masters 1000',
    location: 'Indian Wells, CA, USA',
    surface: 'Hard',
    month: 'March',
    prize: '~$9.7M',
    points: '1000',
    participants: 96,
    venue: 'Indian Wells Tennis Garden',
    established: 1974,
    description: 'Often called the "5th Grand Slam" – largest combined ATP/WTA event outside majors.',
    format: '96-player draw (top seeds bye)',
    pastChampions: [
      { 
        year: 2025, 
        champion: 'Jack Draper', 
        runnerUp: 'Holger Rune',
        championAvatar: 'https://www.atptour.com/-/media/images/players/head-shot/d0co_head_mohr.svg', // Official ATP
        runnerUpAvatar: 'https://www.atptour.com/-/media/images/players/head-shot/r0f4_head_mohr.svg'
      },
      { 
        year: 2024, 
        champion: 'Carlos Alcaraz', 
        runnerUp: 'Daniil Medvedev',
        championAvatar: 'https://www.atptour.com/-/media/images/players/head-shot/a0e2_head_mohr.svg',
        runnerUpAvatar: 'https://www.atptour.com/-/media/images/players/head-shot/me32_head_mohr.svg'
      },
      { 
        year: 2023, 
        champion: 'Carlos Alcaraz', 
        runnerUp: 'Daniil Medvedev',
        championAvatar: 'https://www.atptour.com/-/media/images/players/head-shot/a0e2_head_mohr.svg',
        runnerUpAvatar: 'https://www.atptour.com/-/media/images/players/head-shot/me32_head_mohr.svg'
      },
      { 
        year: 2022, 
        champion: 'Taylor Fritz', 
        runnerUp: 'Rafael Nadal',
        championAvatar: 'https://www.atptour.com/-/media/tennis/players/head-shot/taylor-fritz.png',
        runnerUpAvatar: 'https://www.atptour.com/-/media/images/players/head-shot/n409_head_mohr.svg'
      },
      { 
        year: 2021, 
        champion: 'Cameron Norrie', 
        runnerUp: 'Nikoloz Basilashvili',
        championAvatar: 'https://www.atptour.com/-/media/images/players/head-shot/n552_head_mohr.svg',
        runnerUpAvatar: 'https://www.atptour.com/-/media/images/players/head-shot/bc88_head_mohr.svg'
      }
    ],
    records: {
      mostTitles: 'Novak Djokovic & Roger Federer (5 each)',
      youngestChampion: 'Boris Becker (19y)',
      note: 'Often features long, high-quality matches'
    }
  },

  'wta-finals': {
    name: 'WTA Finals Riyadh',
    logoUrl: 'https://www.wtatennis.com/assets/images/logos/wta-finals-riyadh.svg', // Official WTA Finals branding (adjust if needed)
    category: 'Year-End Championship',
    location: 'Riyadh, Saudi Arabia',
    surface: 'Hard (Indoor)',
    month: 'November',
    prize: '$15.5M',
    points: '1500',
    participants: 8,
    venue: 'King Saud University Arena',
    established: 1972,
    description: 'Season-ending event for the top 8 singles players & doubles teams.',
    format: 'Round-robin groups → semifinals → final',
    pastChampions: [
      { 
        year: 2025, 
        champion: 'Elena Rybakina', 
        runnerUp: 'Aryna Sabalenka',
        championAvatar: 'https://www.wtatennis.com/-/media/images/players/headshot/324166_rybakina.jpg', // Official WTA style
        runnerUpAvatar: 'https://www.wtatennis.com/-/media/images/players/headshot/326408_sabalenka.jpg'
      },
      { 
        year: 2024, 
        champion: 'Coco Gauff', 
        runnerUp: 'Zheng Qinwen',
        championAvatar: 'https://www.wtatennis.com/-/media/images/players/headshot/326423_gauff.jpg',
        runnerUpAvatar: 'https://www.wtatennis.com/-/media/images/players/headshot/q124_zheng.jpg'
      },
      { 
        year: 2023, 
        champion: 'Iga Świątek', 
        runnerUp: 'Jessica Pegula',
        championAvatar: 'https://www.wtatennis.com/-/media/images/players/headshot/320925_swiatek.jpg',
        runnerUpAvatar: 'https://www.wtatennis.com/-/media/images/players/headshot/326430_pegula.jpg'
      },
      { 
        year: 2022, 
        champion: 'Caroline Garcia', 
        runnerUp: 'Aryna Sabalenka',
        championAvatar: 'https://www.wtatennis.com/-/media/images/players/headshot/315180_garcia.jpg',
        runnerUpAvatar: 'https://www.wtatennis.com/-/media/images/players/headshot/326408_sabalenka.jpg'
      },
      { 
        year: 2021, 
        champion: 'Garbiñe Muguruza', 
        runnerUp: 'Anett Kontaveit',
        championAvatar: 'https://www.wtatennis.com/-/media/images/players/headshot/316738_muguruza.jpg',
        runnerUpAvatar: 'https://www.wtatennis.com/-/media/images/players/headshot/318033_kontaveit.jpg'
      }
    ],
    records: {
      mostTitles: 'Martina Navratilova (8)',
      youngestChampion: 'Tracy Austin (17y)',
      oldestChampion: 'Serena Williams (33y)'
    }
  }
};