// src/data/cricketLeagues.js

export const cricketLeaguesData = {
  "leagues": [
    {
      "id": "ipl",
      "name": "Indian Premier League",
      "shortName": "IPL",
      "logo": "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=200&h=200&fit=crop",
      "country": "India",
      "season": "2026",
      "format": "T20",
      "status": "Ongoing",
      "startDate": "2026-03-15",
      "endDate": "2026-05-25",
      "totalMatches": 74,
      "completedMatches": 28,
      "teams": 10,
      "description": "The Indian Premier League is a professional Twenty20 cricket league in India, contested during March and May of every year by eight teams representing eight different cities in India.",
      "prize": "$5,000,000",
      "currentChampion": "Mumbai Indians",
      "mostSuccessful": "Mumbai Indians (5 titles)",
      "topScorer": {
        "name": "Virat Kohli",
        "team": "Royal Challengers Bangalore",
        "runs": 8263,
        "matches": 237,
        "average": 37.25,
        "strikeRate": 130.41,
        "centuries": 7,
        "fifties": 50
      },
      "topWicketTaker": {
        "name": "Yuzvendra Chahal",
        "team": "Rajasthan Royals",
        "wickets": 187,
        "matches": 141,
        "average": 22.50,
        "economy": 7.75,
        "bestBowling": "5/40"
      },
      "standings": [
        {
          "position": 1,
          "team": "Gujarat Titans",
          "logo": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=100&h=100&fit=crop",
          "matches": 8,
          "won": 6,
          "lost": 2,
          "points": 12,
          "nrr": "+0.850",
          "form": ["W", "W", "L", "W", "W"]
        },
        {
          "position": 2,
          "team": "Rajasthan Royals",
          "logo": "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop",
          "matches": 8,
          "won": 6,
          "lost": 2,
          "points": 12,
          "nrr": "+0.720",
          "form": ["W", "L", "W", "W", "W"]
        },
        {
          "position": 3,
          "team": "Kolkata Knight Riders",
          "logo": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=100&h=100&fit=crop",
          "matches": 8,
          "won": 5,
          "lost": 3,
          "points": 10,
          "nrr": "+0.450",
          "form": ["W", "W", "L", "W", "L"]
        },
        {
          "position": 4,
          "team": "Mumbai Indians",
          "logo": "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop",
          "matches": 8,
          "won": 5,
          "lost": 3,
          "points": 10,
          "nrr": "+0.320",
          "form": ["L", "W", "W", "W", "L"]
        },
        {
          "position": 5,
          "team": "Chennai Super Kings",
          "logo": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=100&h=100&fit=crop",
          "matches": 8,
          "won": 4,
          "lost": 4,
          "points": 8,
          "nrr": "+0.150",
          "form": ["W", "L", "W", "L", "W"]
        },
        {
          "position": 6,
          "team": "Royal Challengers Bangalore",
          "logo": "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop",
          "matches": 8,
          "won": 4,
          "lost": 4,
          "points": 8,
          "nrr": "-0.120",
          "form": ["L", "W", "L", "W", "W"]
        },
        {
          "position": 7,
          "team": "Sunrisers Hyderabad",
          "logo": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=100&h=100&fit=crop",
          "matches": 8,
          "won": 3,
          "lost": 5,
          "points": 6,
          "nrr": "-0.350",
          "form": ["L", "L", "W", "L", "W"]
        },
        {
          "position": 8,
          "team": "Delhi Capitals",
          "logo": "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop",
          "matches": 8,
          "won": 3,
          "lost": 5,
          "points": 6,
          "nrr": "-0.480",
          "form": ["L", "W", "L", "L", "W"]
        },
        {
          "position": 9,
          "team": "Punjab Kings",
          "logo": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=100&h=100&fit=crop",
          "matches": 8,
          "won": 2,
          "lost": 6,
          "points": 4,
          "nrr": "-0.650",
          "form": ["L", "L", "W", "L", "L"]
        },
        {
          "position": 10,
          "team": "Lucknow Super Giants",
          "logo": "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop",
          "matches": 8,
          "won": 2,
          "lost": 6,
          "points": 4,
          "nrr": "-0.890",
          "form": ["L", "W", "L", "L", "L"]
        }
      ],
      "recentMatches": [
        {
          "id": "match1",
          "team1": "Gujarat Titans",
          "team2": "Mumbai Indians",
          "date": "2026-04-15",
          "venue": "Narendra Modi Stadium, Ahmedabad",
          "result": "Gujarat Titans won by 7 wickets",
          "score1": "168/3 (18.2 overs)",
          "score2": "165/8 (20 overs)"
        },
        {
          "id": "match2",
          "team1": "Rajasthan Royals",
          "team2": "Chennai Super Kings",
          "date": "2026-04-14",
          "venue": "Sawai Mansingh Stadium, Jaipur",
          "result": "Rajasthan Royals won by 32 runs",
          "score1": "198/4 (20 overs)",
          "score2": "166/9 (20 overs)"
        },
        {
          "id": "match3",
          "team1": "Kolkata Knight Riders",
          "team2": "Royal Challengers Bangalore",
          "date": "2026-04-13",
          "venue": "Eden Gardens, Kolkata",
          "result": "Kolkata Knight Riders won by 5 wickets",
          "score1": "181/5 (19.3 overs)",
          "score2": "177/7 (20 overs)"
        }
      ],
      "upcomingMatches": [
        {
          "id": "match4",
          "team1": "Chennai Super Kings",
          "team2": "Mumbai Indians",
          "date": "2026-04-16",
          "time": "19:30 IST",
          "venue": "M. A. Chidambaram Stadium, Chennai"
        },
        {
          "id": "match5",
          "team1": "Punjab Kings",
          "team2": "Delhi Capitals",
          "date": "2026-04-17",
          "time": "15:30 IST",
          "venue": "Punjab Cricket Association Stadium, Mohali"
        },
        {
          "id": "match6",
          "team1": "Sunrisers Hyderabad",
          "team2": "Lucknow Super Giants",
          "date": "2026-04-17",
          "time": "19:30 IST",
          "venue": "Rajiv Gandhi International Stadium, Hyderabad"
        }
      ],
      "venues": [
        {
          "name": "Wankhede Stadium",
          "city": "Mumbai",
          "capacity": "33,108",
          "matches": 7
        },
        {
          "name": "M. A. Chidambaram Stadium",
          "city": "Chennai",
          "capacity": "50,000",
          "matches": 7
        },
        {
          "name": "Eden Gardens",
          "city": "Kolkata",
          "capacity": "66,000",
          "matches": 7
        }
      ]
    },
    {
      "id": "bbl",
      "name": "Big Bash League",
      "shortName": "BBL",
      "logo": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=200&h=200&fit=crop",
      "country": "Australia",
      "season": "2025-26",
      "format": "T20",
      "status": "Upcoming",
      "startDate": "2025-12-10",
      "endDate": "2026-02-05",
      "totalMatches": 61,
      "completedMatches": 0,
      "teams": 8,
      "description": "The Big Bash League is an Australian professional franchise Twenty20 cricket league, which was established in 2011 by Cricket Australia.",
      "prize": "$2,000,000",
      "currentChampion": "Sydney Sixers",
      "mostSuccessful": "Perth Scorchers (5 titles)"
    },
    {
      "id": "psl",
      "name": "Pakistan Super League",
      "shortName": "PSL",
      "logo": "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=200&h=200&fit=crop",
      "country": "Pakistan",
      "season": "2026",
      "format": "T20",
      "status": "Completed",
      "startDate": "2026-02-08",
      "endDate": "2026-03-18",
      "totalMatches": 34,
      "completedMatches": 34,
      "teams": 6,
      "description": "The Pakistan Super League is a professional Twenty20 cricket league contested by six teams representing six cities in Pakistan.",
      "prize": "$1,500,000",
      "currentChampion": "Islamabad United",
      "mostSuccessful": "Islamabad United (3 titles)"
    },
    {
      "id": "cpl",
      "name": "Caribbean Premier League",
      "shortName": "CPL",
      "logo": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=200&h=200&fit=crop",
      "country": "West Indies",
      "season": "2026",
      "format": "T20",
      "status": "Upcoming",
      "startDate": "2026-08-28",
      "endDate": "2026-09-30",
      "totalMatches": 33,
      "completedMatches": 0,
      "teams": 6,
      "description": "The Caribbean Premier League is an annual Twenty20 cricket tournament held in the Caribbean.",
      "prize": "$1,000,000",
      "currentChampion": "Guyana Amazon Warriors",
      "mostSuccessful": "Trinbago Knight Riders (5 titles)"
    },
    {
      "id": "hundred",
      "name": "The Hundred",
      "shortName": "The Hundred",
      "logo": "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=200&h=200&fit=crop",
      "country": "England & Wales",
      "season": "2026",
      "format": "100-ball",
      "status": "Upcoming",
      "startDate": "2026-07-23",
      "endDate": "2026-08-27",
      "totalMatches": 68,
      "completedMatches": 0,
      "teams": 8,
      "description": "The Hundred is a professional franchise 100-ball cricket tournament in England and Wales run by the England and Wales Cricket Board (ECB).",
      "prize": "$1,200,000",
      "currentChampion": "Oval Invincibles (Men), Southern Brave (Women)",
      "mostSuccessful": "Southern Brave (2 titles)"
    },
    {
      "id": "sa20",
      "name": "SA20 League",
      "shortName": "SA20",
      "logo": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=200&h=200&fit=crop",
      "country": "South Africa",
      "season": "2026",
      "format": "T20",
      "status": "Upcoming",
      "startDate": "2026-01-10",
      "endDate": "2026-02-11",
      "totalMatches": 33,
      "completedMatches": 0,
      "teams": 6,
      "description": "The SA20 is a professional Twenty20 cricket league in South Africa, established in 2023.",
      "prize": "$1,800,000",
      "currentChampion": "Sunrisers Eastern Cape",
      "mostSuccessful": "Sunrisers Eastern Cape (2 titles)"
    }
  ]
};