// src/data/TennisToursDetail.js

export const tennisTourDetails = {
  'atp-finals': {
    name: 'Nitto ATP Finals',
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
      { year: 2025, champion: 'Jannik Sinner', runnerUp: 'Carlos Alcaraz' },
      { year: 2024, champion: 'Jannik Sinner', runnerUp: 'Taylor Fritz' },
      { year: 2023, champion: 'Novak Djokovic', runnerUp: 'Jannik Sinner' },
      { year: 2022, champion: 'Novak Djokovic', runnerUp: 'Casper Ruud' },
      { year: 2021, champion: 'Alexander Zverev', runnerUp: 'Daniil Medvedev' }
    ],
    records: {
      mostTitles: 'Novak Djokovic (7)',
      youngestChampion: 'Lleyton Hewitt (20y 8m)',
      oldestChampion: 'Roger Federer (36y 10m)'
    }
  },

  'indian-wells': {
    name: 'BNP Paribas Open',
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
      { year: 2025, champion: 'Jack Draper', runnerUp: 'Holger Rune' },
      { year: 2024, champion: 'Carlos Alcaraz', runnerUp: 'Daniil Medvedev' },
      { year: 2023, champion: 'Carlos Alcaraz', runnerUp: 'Daniil Medvedev' },
      { year: 2022, champion: 'Taylor Fritz', runnerUp: 'Rafael Nadal' },
      { year: 2021, champion: 'Cameron Norrie', runnerUp: 'Nikoloz Basilashvili' }
    ],
    records: {
      mostTitles: 'Novak Djokovic & Roger Federer (5 each)',
      youngestChampion: 'Boris Becker (19y)',
      note: 'Often features long, high-quality matches'
    }
  },

  'wta-finals': {
    name: 'WTA Finals Riyadh',
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
      { year: 2025, champion: 'Elena Rybakina', runnerUp: 'Aryna Sabalenka' },
      { year: 2024, champion: 'Coco Gauff', runnerUp: 'Zheng Qinwen' },
      { year: 2023, champion: 'Iga Świątek', runnerUp: 'Jessica Pegula' },
      { year: 2022, champion: 'Caroline Garcia', runnerUp: 'Aryna Sabalenka' },
      { year: 2021, champion: 'Garbiñe Muguruza', runnerUp: 'Anett Kontaveit' }
    ],
    records: {
      mostTitles: 'Martina Navratilova (8)',
      youngestChampion: 'Tracy Austin (17y)',
      oldestChampion: 'Serena Williams (33y)'
    }
  }
};