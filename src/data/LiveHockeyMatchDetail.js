const LiveHockeyMatchDetail = {
  "status": "success",
  "data": {
    "matches": [
      {
        "match_id": "1",
        "series": "Netherlands vs Argentina 2025",
        "match_type": "International",
        "match_number": "1st Match",
        "info": {
          "venue": {
            "name": "Wagener Stadium",
            "city": "Amstelveen",
            "country": "Netherlands"
          },
          "date": "2025-06-03",
          "start_time": "14:00 Local Time",
          "status": "Live",
          "current_quarter": 3,
          "time_remaining_in_quarter": "5:00",
          "umpires": ["Martin Madden (IRE)", "Sarah Wilson (GBR)"],
          "match_officials": ["Video Umpire: Jonas van 't Hek (NED)"]
        },
        "schedule": {
          "pushback": "Netherlands won the opening pushback",
          "quarter_times": [
            { "quarter": 1, "duration": "15:00" },
            { "quarter": 2, "duration": "15:00" },
            { "quarter": 3, "duration": "15:00 (ongoing)" },
            { "quarter": 4, "duration": "15:00" }
          ]
        },
        "squads": {
          "teams": [
            {
              "name": "Netherlands",
              "short_name": "NED",
              "captain_id": "p13",
              "players": [
                {"id": "p13", "name": "Billy Bakker", "role": "Midfielder", "is_captain": true},
                {"id": "p14", "name": "Pirmin Blaak", "role": "Goalkeeper"},
                {"id": "p15", "name": "Thierry Brinkman", "role": "Forward"},
                {"id": "p145", "name": "Jorrit Croon", "role": "Midfielder"},
                {"id": "p146", "name": "Seve van Ass", "role": "Midfielder"},
                {"id": "p147", "name": "Jeroen Hertzberger", "role": "Forward"},
                {"id": "p148", "name": "Mink van der Weerden", "role": "Defender"},
                {"id": "p149", "name": "Valentin Verga", "role": "Midfielder"},
                {"id": "p150", "name": "Robbert Kemperman", "role": "Midfielder"},
                {"id": "p151", "name": "Bjorn Kellerman", "role": "Forward"},
                {"id": "p152", "name": "Sander Baart", "role": "Defender"}
              ],
              "supporting_staff": [
                {"id": "s13", "name": "Max Caldas", "role": "Head Coach"},
                {"id": "s14", "name": "Eric Verboom", "role": "Assistant Coach"},
                {"id": "s15", "name": "Jan de Vries", "role": "Physio"}
              ],
              "benched_players": [
                {"id": "p153", "name": "Mirco Pruyser", "role": "Forward"},
                {"id": "p154", "name": "Lars Balk", "role": "Defender"},
                {"id": "p155", "name": "Joep de Mol", "role": "Defender"}
              ],
              "country": "Netherlands"
            },
            {
              "name": "Argentina",
              "short_name": "ARG",
              "captain_id": "p19",
              "players": [
                {"id": "p19", "name": "Juan Manuel Vivaldi", "role": "Goalkeeper", "is_captain": true},
                {"id": "p20", "name": "Matias Rey", "role": "Defender"},
                {"id": "p21", "name": "Agustin Mazzilli", "role": "Forward"},
                {"id": "p167", "name": "Lucas Vila", "role": "Forward"},
                {"id": "p168", "name": "Pedro Ibarra", "role": "Defender"},
                {"id": "p169", "name": "Juan Martin Lopez", "role": "Defender"},
                {"id": "p170", "name": "Maico Casella", "role": "Forward"},
                {"id": "p171", "name": "Lucas Martinez", "role": "Forward"},
                {"id": "p172", "name": "Ignacio Ortiz", "role": "Midfielder"},
                {"id": "p173", "name": "Martin Ferreiro", "role": "Forward"},
                {"id": "p174", "name": "Leandro Tolini", "role": "Defender"}
              ],
              "supporting_staff": [
                {"id": "s19", "name": "German Orozco", "role": "Head Coach"},
                {"id": "s20", "name": "Mariano Ronconi", "role": "Assistant Coach"},
                {"id": "s21", "name": "Pablo Martinez", "role": "Physio"}
              ],
              "benched_players": [
                {"id": "p175", "name": "Tomas Domene", "role": "Defender"},
                {"id": "p176", "name": "Nicolas Della Torre", "role": "Forward"},
                {"id": "p177", "name": "Emiliano Bosso", "role": "Goalkeeper"}
              ],
              "country": "Argentina"
            }
          ]
        },
        "scorecard": {
          "current_score": "Netherlands 4 - 1 Argentina",
          "quarters": [
            {
              "quarter": 1,
              "score": "1 - 1",
              "teams": [
                {"team": "Netherlands", "goals": 1, "shots": 6, "circle_entries": 8, "penalty_corners": 2},
                {"team": "Argentina", "goals": 1, "shots": 4, "circle_entries": 5, "penalty_corners": 1}
              ]
            },
            {
              "quarter": 2,
              "score": "1 - 0",
              "teams": [
                {"team": "Netherlands", "goals": 1, "shots": 5, "circle_entries": 7, "penalty_corners": 3},
                {"team": "Argentina", "goals": 0, "shots": 3, "circle_entries": 4, "penalty_corners": 1}
              ]
            },
            {
              "quarter": 3,
              "score": "2 - 0 (ongoing)",
              "teams": [
                {"team": "Netherlands", "goals": 2, "shots": 8, "circle_entries": 10, "penalty_corners": 4},
                {"team": "Argentina", "goals": 0, "shots": 5, "circle_entries": 6, "penalty_corners": 2}
              ]
            }
          ],
          "team_stats": [
            {
              "team": "Netherlands",
              "total_goals": 4,
              "shots": 19,
              "circle_entries": 25,
              "penalty_corners_awarded": 9,
              "penalty_corners_converted": 2,
              "green_cards": 0,
              "yellow_cards": 1,
              "red_cards": 0,
              "possession_percentage": 58
            },
            {
              "team": "Argentina",
              "total_goals": 1,
              "shots": 12,
              "circle_entries": 15,
              "penalty_corners_awarded": 4,
              "penalty_corners_converted": 1,
              "green_cards": 1,
              "yellow_cards": 0,
              "red_cards": 0,
              "possession_percentage": 42
            }
          ],
          "player_stats": {
            "goal_scorers": [
              {"player_id": "p151", "name": "Bjorn Kellerman", "team": "Netherlands", "goals": 1, "assists": 0, "time": "15:30", "quarter": 1, "type": "Field Goal"},
              {"player_id": "p21", "name": "Agustin Mazzilli", "team": "Argentina", "goals": 1, "assists": 0, "time": "10:25", "quarter": 1, "type": "Penalty Corner"},
              {"player_id": "p147", "name": "Jeroen Hertzberger", "team": "Netherlands", "goals": 1, "assists": 0, "time": "28:10", "quarter": 2, "type": "Field Goal"},
              {"player_id": "p15", "name": "Thierry Brinkman", "team": "Netherlands", "goals": 1, "assists": 0, "time": "22:45", "quarter": 3, "type": "Field Goal"},
              {"player_id": "p147", "name": "Jeroen Hertzberger", "team": "Netherlands", "goals": 1, "assists": 1, "time": "38:20", "quarter": 3, "type": "Penalty Corner"}
            ],
            "goalkeepers": [
              {"player_id": "p14", "name": "Pirmin Blaak", "team": "Netherlands", "saves": 5, "goals_conceded": 1},
              {"player_id": "p19", "name": "Juan Manuel Vivaldi", "team": "Argentina", "saves": 8, "goals_conceded": 4}
            ]
          }
        },
        "commentary": [
          {"time": "0:00", "quarter": 1, "text": "Match starts! Netherlands wins pushback and attacks early."},
          {"time": "10:25", "quarter": 1, "text": "GOAL! Agustin Mazzilli scores for Argentina from a penalty corner. 0-1"},
          {"time": "15:30", "quarter": 1, "text": "GOAL! Bjorn Kellerman equalizes for Netherlands. 1-1"},
          {"time": "28:10", "quarter": 2, "text": "GOAL! Jeroen Hertzberger puts Netherlands ahead. 2-1"},
          {"time": "22:45", "quarter": 3, "text": "GOAL! Thierry Brinkman extends the lead. 3-1"},
          {"time": "38:20", "quarter": 3, "text": "GOAL! Hertzberger scores again from PC. 4-1"},
          {"time": "Current", "quarter": 3, "text": "Netherlands dominating possession in the third quarter."}
        ],
        "highlights": [
          {"time": "10:25", "description": "Agustin Mazzilli's powerful penalty corner drag flick beats the keeper."},
          {"time": "15:30", "description": "Bjorn Kellerman's quick reverse stick finish."},
          {"time": "28:10", "description": "Hertzberger's clinical field goal after a swift counter-attack."},
          {"time": "38:20", "description": "Hertzberger doubles his tally with a well-executed penalty corner variation."}
        ],
        "images": {
          "team1_flag": "https://cdn.britannica.com/82/2982-050-4A783E03/flag-prototype-Netherlands-countries-European-flags.jpg",
          "team2_flag": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
        }
      },
      {
        "match_id": "2",
        "series": "Belgium vs India 2025",
        "match_type": "International",
        "match_number": "1st Match",
        "info": {
          "venue": {
            "name": "KHC Dragons Stadium",
            "city": "Brasschaat",
            "country": "Belgium"
          },
          "date": "2025-06-01",
          "start_time": "16:00 Local Time",
          "status": "Full Time",
          "final_score": "Belgium 4 - 2 India",
          "umpires": ["Coen van Bunge (NED)", "Annelies Cooman (BEL)"],
          "match_officials": ["Video Umpire: Marcelo Servetto (ARG)"]
        },
        "schedule": {
          "pushback": "Belgium won the opening pushback",
          "quarter_times": [
            { "quarter": 1, "duration": "15:00", "score": "2 - 1" },
            { "quarter": 2, "duration": "15:00", "score": "1 - 0" },
            { "quarter": 3, "duration": "15:00", "score": "1 - 1" },
            { "quarter": 4, "duration": "15:00", "score": "0 - 0" }
          ]
        },
        "squads": {
          "teams": [
            {
              "name": "Belgium",
              "short_name": "BEL",
              "captain_id": "p16",
              "players": [
                {"id": "p16", "name": "Arthur van Doren", "role": "Defender", "is_captain": true},
                {"id": "p17", "name": "Vincent Vanasch", "role": "Goalkeeper"},
                {"id": "p18", "name": "John-John Dohmen", "role": "Midfielder"},
                {"id": "p156", "name": "Florent van Aubel", "role": "Forward"},
                {"id": "p157", "name": "Simon Gougnard", "role": "Midfielder"},
                {"id": "p158", "name": "Cedric Charlier", "role": "Forward"},
                {"id": "p159", "name": "Loick Luypaert", "role": "Defender"},
                {"id": "p160", "name": "Victor Wegnez", "role": "Midfielder"},
                {"id": "p161", "name": "Tom Boon", "role": "Forward"},
                {"id": "p162", "name": "Gauthier Boccard", "role": "Defender"},
                {"id": "p163", "name": "Antoine Kina", "role": "Midfielder"}
              ],
              "supporting_staff": [
                {"id": "s16", "name": "Shane McLeod", "role": "Head Coach"},
                {"id": "s17", "name": "Michel van den Heuvel", "role": "Assistant Coach"},
                {"id": "s18", "name": "Pierre Cornu", "role": "Physio"}
              ],
              "benched_players": [
                {"id": "p164", "name": "Sebastien Dockier", "role": "Forward"},
                {"id": "p165", "name": "Nicolas de Kerpel", "role": "Defender"},
                {"id": "p166", "name": "Loic van Doren", "role": "Goalkeeper"}
              ],
              "country": "Belgium"
            },
            {
              "name": "India",
              "short_name": "IND",
              "captain_id": "p1",
              "players": [
                {"id": "p1", "name": "Harmanpreet Singh", "role": "Defender", "is_captain": true},
                {"id": "p2", "name": "PR Sreejesh", "role": "Goalkeeper"},
                {"id": "p3", "name": "Manpreet Singh", "role": "Midfielder"},
                {"id": "p101", "name": "Mandeep Singh", "role": "Forward"},
                {"id": "p102", "name": "Rupinder Pal Singh", "role": "Defender"},
                {"id": "p103", "name": "Akashdeep Singh", "role": "Forward"},
                {"id": "p104", "name": "Lalit Upadhyay", "role": "Forward"},
                {"id": "p105", "name": "Sumit", "role": "Defender"},
                {"id": "p106", "name": "Nilakanta Sharma", "role": "Midfielder"},
                {"id": "p107", "name": "Gurjant Singh", "role": "Forward"},
                {"id": "p108", "name": "Krishan Pathak", "role": "Goalkeeper"}
              ],
              "supporting_staff": [
                {"id": "s1", "name": "Graham Reid", "role": "Head Coach"},
                {"id": "s2", "name": "Shivendra Singh", "role": "Assistant Coach"},
                {"id": "s3", "name": "Anand Kumar", "role": "Physio"}
              ],
              "benched_players": [
                {"id": "p109", "name": "Simranjeet Singh", "role": "Forward"},
                {"id": "p110", "name": "Varun Kumar", "role": "Defender"},
                {"id": "p111", "name": "Shamsher Singh", "role": "Midfielder"}
              ],
              "country": "India"
            }
          ]
        },
        "scorecard": {
          "current_score": "Belgium 4 - 2 India",
          "quarters": [
            {
              "quarter": 1,
              "score": "2 - 1",
              "teams": [
                {"team": "Belgium", "goals": 2, "shots": 7, "circle_entries": 10, "penalty_corners": 3},
                {"team": "India", "goals": 1, "shots": 5, "circle_entries": 7, "penalty_corners": 2}
              ]
            },
            {
              "quarter": 2,
              "score": "1 - 0",
              "teams": [
                {"team": "Belgium", "goals": 1, "shots": 6, "circle_entries": 8, "penalty_corners": 2},
                {"team": "India", "goals": 0, "shots": 4, "circle_entries": 5, "penalty_corners": 1}
              ]
            },
            {
              "quarter": 3,
              "score": "1 - 1",
              "teams": [
                {"team": "Belgium", "goals": 1, "shots": 5, "circle_entries": 7, "penalty_corners": 2},
                {"team": "India", "goals": 1, "shots": 6, "circle_entries": 8, "penalty_corners": 3}
              ]
            },
            {
              "quarter": 4,
              "score": "0 - 0",
              "teams": [
                {"team": "Belgium", "goals": 0, "shots": 4, "circle_entries": 6, "penalty_corners": 1},
                {"team": "India", "goals": 0, "shots": 5, "circle_entries": 7, "penalty_corners": 2}
              ]
            }
          ],
          "team_stats": [
            {
              "team": "Belgium",
              "total_goals": 4,
              "shots": 22,
              "circle_entries": 31,
              "penalty_corners_awarded": 8,
              "penalty_corners_converted": 2,
              "green_cards": 1,
              "yellow_cards": 0,
              "red_cards": 0,
              "possession_percentage": 55
            },
            {
              "team": "India",
              "total_goals": 2,
              "shots": 20,
              "circle_entries": 27,
              "penalty_corners_awarded": 8,
              "penalty_corners_converted": 1,
              "green_cards": 0,
              "yellow_cards": 1,
              "red_cards": 0,
              "possession_percentage": 45
            }
          ],
          "player_stats": {
            "goal_scorers": [
              {"player_id": "p161", "name": "Tom Boon", "team": "Belgium", "goals": 2, "assists": 1, "time": "12:30", "quarter": 1, "type": "Penalty Corner"},
              {"player_id": "p101", "name": "Mandeep Singh", "team": "India", "goals": 1, "assists": 0, "time": "18:50", "quarter": 1, "type": "Field Goal"},
              {"player_id": "p158", "name": "Cedric Charlier", "team": "Belgium", "goals": 1, "assists": 0, "time": "25:45", "quarter": 2, "type": "Field Goal"},
              {"player_id": "p156", "name": "Florent van Aubel", "team": "Belgium", "goals": 1, "assists": 0, "time": "40:20", "quarter": 3, "type": "Field Goal"},
              {"player_id": "p107", "name": "Gurjant Singh", "team": "India", "goals": 1, "assists": 1, "time": "45:10", "quarter": 3, "type": "Field Goal"}
            ],
            "goalkeepers": [
              {"player_id": "p17", "name": "Vincent Vanasch", "team": "Belgium", "saves": 10, "goals_conceded": 2},
              {"player_id": "p2", "name": "PR Sreejesh", "team": "India", "saves": 7, "goals_conceded": 4}
            ]
          }
        },
        "commentary": [
          {"time": "0:00", "quarter": 1, "text": "Match kicks off! Belgium wins pushback."},
          {"time": "12:30", "quarter": 1, "text": "GOAL! Tom Boon scores from PC for Belgium. 1-0"},
          {"time": "18:50", "quarter": 1, "text": "GOAL! Mandeep Singh equalizes for India. 1-1"},
          {"time": "14:20", "quarter": 1, "text": "GOAL! Tom Boon scores his second! Belgium 2-1"},
          {"time": "25:45", "quarter": 2, "text": "GOAL! Cedric Charlier makes it 3-1 for Belgium."},
          {"time": "40:20", "quarter": 3, "text": "GOAL! Florent van Aubel extends lead to 4-1."},
          {"time": "45:10", "quarter": 3, "text": "GOAL! Gurjant Singh pulls one back for India. 4-2"},
          {"time": "60:00", "quarter": 4, "text": "Full Time! Belgium wins 4-2."}
        ],
        "highlights": [
          {"time": "12:30", "description": "Tom Boon fires a powerful drag flick into the top corner."},
          {"time": "18:50", "description": "Mandeep Singh's quick deflection from close range."},
          {"time": "14:20", "description": "Tom Boon completes his brace with another PC conversion."},
          {"time": "25:45", "description": "Cedric Charlier finishes a brilliant team move."},
          {"time": "40:20", "description": "Florent van Aubel's clinical finish in the circle."},
          {"time": "45:10", "description": "Gurjant Singh's late consolation goal for India."}
        ],
        "images": {
          "team1_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/640px-Flag_of_Belgium.svg.png",
          "team2_flag": "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png"
        }
      }
    ]
  }
};

export default LiveHockeyMatchDetail;