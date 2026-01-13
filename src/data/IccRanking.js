

// const IccRanking = {
//   status: "success",
//   data: {
//     IccRanking: [
//       {
//         TestRankings: [
//           { position: 1, team: { name: "Australia", logo: "https://flagcdn.com/w320/au.png" }, matches: 30, points: 3732, rating: 124 },
//           { position: 2, team: { name: "South Africa", logo: "https://flagcdn.com/w320/za.png" }, matches: 31, points: 3581, rating: 116 },
//           { position: 3, team: { name: "England", logo: "https://flagcdn.com/w320/gb-eng.png" }, matches: 40, points: 4469, rating: 112 },
//           { position: 4, team: { name: "India", logo: "https://flagcdn.com/w320/in.png" }, matches: 39, points: 4064, rating: 104 },
//           { position: 5, team: { name: "New Zealand", logo: "https://flagcdn.com/w320/nz.png" }, matches: 29, points: 2839, rating: 98 },
//           { position: 6, team: { name: "Sri Lanka", logo: "https://flagcdn.com/w320/lk.png" }, matches: 27, points: 2364, rating: 88 },
//           { position: 7, team: { name: "Pakistan", logo: "https://flagcdn.com/w320/pk.png" }, matches: 25, points: 2050, rating: 82 },
//           { position: 8, team: { name: "West Indies", logo: "https://upload.wikimedia.org/wikipedia/en/9/9b/Cricket_West_Indies_Logo_2017.png" }, matches: 33, points: 2270, rating: 69 },
//           { position: 9, team: { name: "Bangladesh", logo: "https://flagcdn.com/w320/bd.png" }, matches: 30, points: 1888, rating: 63 },
//           { position: 10, team: { name: "Ireland", logo: "https://flagcdn.com/w320/ie.png" }, matches: 8, points: 185, rating: 23 },
//           { position: 11, team: { name: "Zimbabwe", logo: "https://flagcdn.com/w320/zw.png" }, matches: 18, points: 208, rating: 12 },
//           { position: 12, team: { name: "Afghanistan", logo: "https://flagcdn.com/w320/af.png" }, matches: 6, points: 62, rating: 10 },
//         ],
//         ODIRankings: [
//           { position: 1, team: { name: "India", logo: "https://flagcdn.com/w320/in.png" }, matches: 42, points: 5089, rating: 121 },
//           { position: 2, team: { name: "New Zealand", logo: "https://flagcdn.com/w320/nz.png" }, matches: 44, points: 4956, rating: 113 },
//           { position: 3, team: { name: "Australia", logo: "https://flagcdn.com/w320/au.png" }, matches: 38, points: 4134, rating: 109 },
//           { position: 4, team: { name: "Pakistan", logo: "https://flagcdn.com/w320/pk.png" }, matches: 41, points: 4294, rating: 105 },
//           { position: 5, team: { name: "Sri Lanka", logo: "https://flagcdn.com/w320/lk.png" }, matches: 44, points: 4392, rating: 100 },
//           { position: 6, team: { name: "South Africa", logo: "https://flagcdn.com/w320/pk.png" }, matches: 41, points: 4022, rating: 98 },
//           { position: 7, team: { name: "Afghanistan", logo: "https://flagcdn.com/w320/af.png" }, matches: 28, points: 2657, rating: 95 },
//           { position: 8, team: { name: "England", logo: "https://flagcdn.com/w320/pk.png" }, matches: 40, points: 3432, rating: 86 },
//           { position: 9, team: { name: "Bangladesh", logo: "https://flagcdn.com/w320/bd.png" }, matches: 38, points: 2882, rating: 76 },
//           { position: 10, team: { name: "Ireland", logo: "https://flagcdn.com/w320/ie.png" }, matches: 28, points: 1778, rating: 64 },
//           { position: 11, team: { name: "Scotland", logo: "https://flagcdn.com/w320/gb-sct.png" }, matches: 35, points: 1902, rating: 54 },
//         ],
//         T20Rankings: [
//           { position: 1, team: { name: "India", logo: "https://flagcdn.com/w320/in.png" }, matches: 71, points: 19312, rating: 272 },
//           { position: 2, team: { name: "Australia", logo: "https://flagcdn.com/w320/au.png" }, matches: 42, points: 11199, rating: 267 },
//           { position: 3, team: { name: "England", logo: "https://flagcdn.com/w320/gb-eng.png" }, matches: 45, points: 11609, rating: 258 },
//           { position: 4, team: { name: "New Zealand", logo: "https://flagcdn.com/w320/nz.png" }, matches: 53, points: 13318, rating: 251 },
//           { position: 5, team: { name: "South Africa", logo: "https://flagcdn.com/w320/za.png" }, matches: 53, points: 12739, rating: 240 },
//           { position: 6, team: { name: "West Indies", logo: "https://upload.wikimedia.org/wikipedia/en/9/9b/Cricket_West_Indies_Logo_2017.png" }, matches: 61, points: 14424, rating: 236 },
//           { position: 7, team: { name: "Pakistan", logo: "https://flagcdn.com/w320/pk.png" }, matches: 73, points: 17149, rating: 235 },
//           { position: 8, team: { name: "Sri Lanka", logo: "https://flagcdn.com/w320/lk.png" }, matches: 48, points: 10951, rating: 228 },
//           { position: 9, team: { name: "Bangladesh", logo: "https://flagcdn.com/w320/bd.png" }, matches: 67, points: 14925, rating: 223 },
//           { position: 10, team: { name: "Afghanistan", logo: "https://flagcdn.com/w320/af.png" }, matches: 45, points: 9895, rating: 220 },
//           { position: 11, team: { name: "Ireland", logo: "https://flagcdn.com/w320/ie.png" }, matches: 55, points: 11550, rating: 210 },
//           { position: 12, team: { name: "Namibia", logo: "https://flagcdn.com/w320/na.png" }, matches: 48, points: 9552, rating: 199 },
//         ],
//         lastUpdated: "Updated: December 29, 2025",
//         methodology: {
//           summary: "The ICC Team Rankings are calculated using a sophisticated points-based system developed by statistician David Kendix. The system takes into account all matches played over a rolling period (typically 3-4 years), with recent results weighted more heavily to reflect current team form.",
//           points: [
//             {
//               title: "Match Results",
//               desc: "Teams earn points based on the outcome of matches. A win against a stronger opponent yields more points than against a weaker one. Draws (in Test cricket) and ties earn partial points."
//             },
//             {
//               title: "Strength of Opposition",
//               desc: "The system adjusts points based on the relative ratings of the teams. Beating a higher-ranked team gives significantly more points, while losing to a lower-ranked team deducts more."
//             },
//             {
//               title: "Series Results (Test only)",
//               desc: "In Test cricket, bonus points are awarded for winning a series, encouraging competitive multi-match contests."
//             },
//             {
//               title: "Rolling Time Period",
//               desc: "All matches from the past 3-4 years are included. Results older than 3 years are gradually phased out (dropped annually in May). This ensures rankings reflect current performance."
//             },
//             {
//               title: "Weighting System",
//               desc: "Matches played in the last 12-24 months carry full weight. Matches from 24-36 months ago are weighted at 50%. This gives greater importance to recent form."
//             },
//             {
//               title: "Rating Formula",
//               desc: "Final Rating = Total Points Earned ÷ Total Matches Played (with applied weighting). The rating is rounded to the nearest whole number."
//             },
//             {
//               title: "Format-Specific Adjustments",
//               desc: "Minor variations exist across formats. Test rankings emphasize series outcomes, while ODI and T20I focus more on individual match results."
//             },
//             {
//               title: "No Human Intervention",
//               desc: "The entire calculation is automated using a mathematical model. There is no subjective input from panels or committees."
//             }
//           ],
//           note: "The system is transparent and objective. Full technical details and historical data are available on the official ICC website."
//         }
//       }
//     ]
//   }
// };

// export default IccRanking;


const IccRanking = {
  status: "success",
  data: {
    IccRanking: [
      {
        TestRankings: [
          { position: 1, team: { name: "Australia", logo: "https://flagcdn.com/w320/au.png" }, matches: 30, points: 3732, rating: 124 },
          { position: 2, team: { name: "South Africa", logo: "https://flagcdn.com/w320/za.png" }, matches: 31, points: 3581, rating: 116 },
          { position: 3, team: { name: "England", logo: "https://flagcdn.com/w320/gb-eng.png" }, matches: 40, points: 4469, rating: 112 },
          { position: 4, team: { name: "India", logo: "https://flagcdn.com/w320/in.png" }, matches: 39, points: 4064, rating: 104 },
          { position: 5, team: { name: "New Zealand", logo: "https://flagcdn.com/w320/nz.png" }, matches: 29, points: 2839, rating: 98 },
          { position: 6, team: { name: "Sri Lanka", logo: "https://flagcdn.com/w320/lk.png" }, matches: 27, points: 2364, rating: 88 },
          { position: 7, team: { name: "Pakistan", logo: "https://flagcdn.com/w320/pk.png" }, matches: 25, points: 2050, rating: 82 },
          { position: 8, team: { name: "West Indies", logo: "https://upload.wikimedia.org/wikipedia/en/9/9b/Cricket_West_Indies_Logo_2017.png" }, matches: 33, points: 2270, rating: 69 },
          { position: 9, team: { name: "Bangladesh", logo: "https://flagcdn.com/w320/bd.png" }, matches: 30, points: 1888, rating: 63 },
          { position: 10, team: { name: "Ireland", logo: "https://flagcdn.com/w320/ie.png" }, matches: 8, points: 185, rating: 23 },
          { position: 11, team: { name: "Zimbabwe", logo: "https://flagcdn.com/w320/zw.png" }, matches: 18, points: 208, rating: 12 },
          { position: 12, team: { name: "Afghanistan", logo: "https://flagcdn.com/w320/af.png" }, matches: 6, points: 62, rating: 10 },
        ],
        ODIRankings: [
          { position: 1, team: { name: "India", logo: "https://flagcdn.com/w320/in.png" }, matches: 42, points: 5089, rating: 121 },
          { position: 2, team: { name: "New Zealand", logo: "https://flagcdn.com/w320/nz.png" }, matches: 44, points: 4956, rating: 113 },
          { position: 3, team: { name: "Australia", logo: "https://flagcdn.com/w320/au.png" }, matches: 38, points: 4134, rating: 109 },
          { position: 4, team: { name: "Pakistan", logo: "https://flagcdn.com/w320/pk.png" }, matches: 41, points: 4294, rating: 105 },
          { position: 5, team: { name: "Sri Lanka", logo: "https://flagcdn.com/w320/lk.png" }, matches: 44, points: 4392, rating: 100 },
          { position: 6, team: { name: "South Africa", logo: "https://flagcdn.com/w320/za.png" }, matches: 41, points: 4022, rating: 98 },
          { position: 7, team: { name: "Afghanistan", logo: "https://flagcdn.com/w320/af.png" }, matches: 28, points: 2657, rating: 95 },
          { position: 8, team: { name: "England", logo: "https://flagcdn.com/w320/gb-eng.png" }, matches: 40, points: 3432, rating: 86 },
          { position: 9, team: { name: "Bangladesh", logo: "https://flagcdn.com/w320/bd.png" }, matches: 38, points: 2882, rating: 76 },
          { position: 10, team: { name: "Ireland", logo: "https://flagcdn.com/w320/ie.png" }, matches: 28, points: 1778, rating: 64 },
          { position: 11, team: { name: "Scotland", logo: "https://flagcdn.com/w320/gb-sct.png" }, matches: 35, points: 1902, rating: 54 },
        ],
        T20Rankings: [
          { position: 1, team: { name: "India", logo: "https://flagcdn.com/w320/in.png" }, matches: 71, points: 19312, rating: 272 },
          { position: 2, team: { name: "Australia", logo: "https://flagcdn.com/w320/au.png" }, matches: 42, points: 11199, rating: 267 },
          { position: 3, team: { name: "England", logo: "https://flagcdn.com/w320/gb-eng.png" }, matches: 45, points: 11609, rating: 258 },
          { position: 4, team: { name: "New Zealand", logo: "https://flagcdn.com/w320/nz.png" }, matches: 53, points: 13318, rating: 251 },
          { position: 5, team: { name: "South Africa", logo: "https://flagcdn.com/w320/za.png" }, matches: 53, points: 12739, rating: 240 },
          { position: 6, team: { name: "West Indies", logo: "https://upload.wikimedia.org/wikipedia/en/9/9b/Cricket_West_Indies_Logo_2017.png" }, matches: 61, points: 14424, rating: 236 },
          { position: 7, team: { name: "Pakistan", logo: "https://flagcdn.com/w320/pk.png" }, matches: 73, points: 17149, rating: 235 },
          { position: 8, team: { name: "Sri Lanka", logo: "https://flagcdn.com/w320/lk.png" }, matches: 48, points: 10951, rating: 228 },
          { position: 9, team: { name: "Bangladesh", logo: "https://flagcdn.com/w320/bd.png" }, matches: 67, points: 14925, rating: 223 },
          { position: 10, team: { name: "Afghanistan", logo: "https://flagcdn.com/w320/af.png" }, matches: 45, points: 9895, rating: 220 },
          { position: 11, team: { name: "Ireland", logo: "https://flagcdn.com/w320/ie.png" }, matches: 55, points: 11550, rating: 210 },
          { position: 12, team: { name: "Namibia", logo: "https://flagcdn.com/w320/na.png" }, matches: 48, points: 9552, rating: 199 },
        ],
        PlayerRankings: {
          Batting: {
            Test: [
              { position: 1, player: { name: "Joe Root", country: "England", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Joe_Root_in_2023.jpg/220px-Joe_Root_in_2023.jpg" }, rating: 867, careerBest: 932 },
              { position: 2, player: { name: "Harry Brook", country: "England", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Harry_Brook_2023.jpg/220px-Harry_Brook_2023.jpg" }, rating: 846, careerBest: 898 },
              { position: 3, player: { name: "Kane Williamson", country: "New Zealand", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Kane_Williamson_in_New_Zealand_colours.jpg/220px-Kane_Williamson_in_New_Zealand_colours.jpg" }, rating: 822, careerBest: 919 },
              { position: 4, player: { name: "Travis Head", country: "Australia", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Travis_Head_in_2023.jpg/220px-Travis_Head_in_2023.jpg" }, rating: 816, careerBest: 884 },
              { position: 5, player: { name: "Steve Smith", country: "Australia", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Steve_Smith_in_2023.jpg/220px-Steve_Smith_in_2023.jpg" }, rating: 811, careerBest: 947 },
              { position: 6, player: { name: "Kamindu Mendis", country: "Sri Lanka", avatar: "https://flagcdn.com/w320/lk.png" }, rating: 781, careerBest: 784 },
              { position: 7, player: { name: "Temba Bavuma", country: "South Africa", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Temba_Bavuma.jpg/220px-Temba_Bavuma.jpg" }, rating: 775, careerBest: 806 },
              { position: 8, player: { name: "Yashasvi Jaiswal", country: "India", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Yashasvi_Jaiswal_in_2024.jpg/220px-Yashasvi_Jaiswal_in_2024.jpg" }, rating: 750, careerBest: 858 },
              { position: 9, player: { name: "Saud Shakeel", country: "Pakistan", avatar: "https://flagcdn.com/w320/pk.png" }, rating: 734, careerBest: 764 },
              { position: 10, player: { name: "Shubman Gill", country: "India", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Shubman_Gill_in_2023.jpg/220px-Shubman_Gill_in_2023.jpg" }, rating: 730, careerBest: 807 }
            ],
            ODI: [
              { position: 1, player: { name: "Rohit Sharma", country: "India", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Rohit_Sharma_in_PMO_New_Delhi.jpg/220px-Rohit_Sharma_in_PMO_New_Delhi.jpg" }, rating: 781, careerBest: 882 },
              { position: 2, player: { name: "Virat Kohli", country: "India", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Virat_Kohli_in_PMO_New_Delhi.jpg/220px-Virat_Kohli_in_PMO_New_Delhi.jpg" }, rating: 773, careerBest: 909 },
              { position: 3, player: { name: "Daryl Mitchell", country: "New Zealand", avatar: "https://flagcdn.com/w320/nz.png" }, rating: 766, careerBest: 782 },
              { position: 4, player: { name: "Ibrahim Zadran", country: "Afghanistan", avatar: "https://flagcdn.com/w320/af.png" }, rating: 764, careerBest: 764 },
              { position: 5, player: { name: "Shubman Gill", country: "India", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Shubman_Gill_in_2023.jpg/220px-Shubman_Gill_in_2023.jpg" }, rating: 723, careerBest: 847 },
              { position: 6, player: { name: "Babar Azam", country: "Pakistan", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Babar_Azam_in_Pakistan_national_cricket_team_cap_%28cropped%29.jpg/220px-Babar_Azam_in_Pakistan_national_cricket_team_cap_%28cropped%29.jpg" }, rating: 722, careerBest: 898 },
              { position: 7, player: { name: "Harry Tector", country: "Ireland", avatar: "https://flagcdn.com/w320/ie.png" }, rating: 708, careerBest: 767 },
              { position: 8, player: { name: "Shai Hope", country: "West Indies", avatar: "https://flagcdn.com/w320/bb.png" }, rating: 701, careerBest: 802 },
              { position: 9, player: { name: "Charith Asalanka", country: "Sri Lanka", avatar: "https://flagcdn.com/w320/lk.png" }, rating: 690, careerBest: 725 },
              { position: 10, player: { name: "Shreyas Iyer", country: "India", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Shreyas_Iyer_in_2022.jpg/220px-Shreyas_Iyer_in_2022.jpg" }, rating: 679, careerBest: 710 }
            ],
            T20I: [
              { position: 1, player: { name: "Abhishek Sharma", country: "India", avatar: "https://flagcdn.com/w320/in.png" }, rating: 908, careerBest: 931 },
              { position: 2, player: { name: "Phil Salt", country: "England", avatar: "https://flagcdn.com/w320/gb-eng.png" }, rating: 849, careerBest: 881 },
              { position: 3, player: { name: "Tilak Varma", country: "India", avatar: "https://flagcdn.com/w320/in.png" }, rating: 805, careerBest: 845 },
              { position: 4, player: { name: "Pathum Nissanka", country: "Sri Lanka", avatar: "https://flagcdn.com/w320/lk.png" }, rating: 779, careerBest: 794 },
              { position: 5, player: { name: "Jos Buttler", country: "England", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Jos_Buttler_in_2021.jpg/220px-Jos_Buttler_in_2021.jpg" }, rating: 770, careerBest: 794 },
              { position: 6, player: { name: "Sahibzada Farhan", country: "Pakistan", avatar: "https://flagcdn.com/w320/pk.png" }, rating: 752, careerBest: 776 },
              { position: 7, player: { name: "Travis Head", country: "Australia", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Travis_Head_in_2023.jpg/220px-Travis_Head_in_2023.jpg" }, rating: 713, careerBest: 885 },
              { position: 8, player: { name: "Mitchell Marsh", country: "Australia", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mitchell_Marsh.jpg/220px-Mitchell_Marsh.jpg" }, rating: 684, careerBest: 694 },
              { position: 9, player: { name: "Tim Seifert", country: "New Zealand", avatar: "https://flagcdn.com/w320/nz.png" }, rating: 683, careerBest: 727 },
              { position: 10, player: { name: "Dewald Brevis", country: "South Africa", avatar: "https://flagcdn.com/w320/za.png" }, rating: 680, careerBest: 685 }
            ]
          },
          Bowling: {
            Test: [
              { position: 1, player: { name: "Jasprit Bumrah", country: "India", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Jasprit_Bumrah_in_2022.jpg/220px-Jasprit_Bumrah_in_2022.jpg" }, rating: 879, careerBest: 908 },
              { position: 2, player: { name: "Mitchell Starc", country: "Australia", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Mitchell_Starc_2015.jpg/220px-Mitchell_Starc_2015.jpg" }, rating: 843, careerBest: 853 },
              { position: 3, player: { name: "Noman Ali", country: "Pakistan", avatar: "https://flagcdn.com/w320/pk.png" }, rating: 843, careerBest: 843 },
              { position: 4, player: { name: "Pat Cummins", country: "Australia", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Pat_Cummins_in_2023.jpg/220px-Pat_Cummins_in_2023.jpg" }, rating: 841, careerBest: 914 },
              { position: 5, player: { name: "Matt Henry", country: "New Zealand", avatar: "https://flagcdn.com/w320/nz.png" }, rating: 836, careerBest: 836 },
              // और players add कर सकते हैं अगर ज्यादा चाहिए
            ],
            ODI: [
              { position: 1, player: { name: "Rashid Khan", country: "Afghanistan", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Rashid_Khan_in_2023.jpg/220px-Rashid_Khan_in_2023.jpg" }, rating: 710, careerBest: 806 },
              { position: 2, player: { name: "Jofra Archer", country: "England", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jofra_Archer_in_2020.jpg/220px-Jofra_Archer_in_2020.jpg" }, rating: 670, careerBest: 733 },
              { position: 3, player: { name: "Kuldeep Yadav", country: "India", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Kuldeep_Yadav_in_2022.jpg/220px-Kuldeep_Yadav_in_2022.jpg" }, rating: 655, careerBest: 765 },
              // और top players
            ],
            T20I: [
              { position: 1, player: { name: "Varun Chakaravarthy", country: "India", avatar: "https://flagcdn.com/w320/in.png" }, rating: 804, careerBest: 804 },
              { position: 2, player: { name: "Jacob Duffy", country: "New Zealand", avatar: "https://flagcdn.com/w320/nz.png" }, rating: 699, careerBest: 699 },
              { position: 3, player: { name: "Rashid Khan", country: "Afghanistan", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Rashid_Khan_in_2023.jpg/220px-Rashid_Khan_in_2023.jpg" }, rating: 694, careerBest: 806 },
              { position: 4, player: { name: "Abrar Ahmed", country: "Pakistan", avatar: "https://flagcdn.com/w320/pk.png" }, rating: 691, careerBest: 691 },
              { position: 5, player: { name: "Wanindu Hasaranga", country: "Sri Lanka", avatar: "https://flagcdn.com/w320/lk.png" }, rating: 687, careerBest: 804 },
              // और add कर सकते हैं
            ]
          },
          AllRounder: {
            Test: [
              { position: 1, player: { name: "Ravindra Jadeja", country: "India", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Ravindra_Jadeja_in_2022.jpg/220px-Ravindra_Jadeja_in_2022.jpg" }, rating: 455, careerBest: 497 },
              { position: 2, player: { name: "Marco Jansen", country: "South Africa", avatar: "https://flagcdn.com/w320/za.png" }, rating: 344, careerBest: 344 },
              { position: 3, player: { name: "Ben Stokes", country: "England", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ben_Stokes_in_2023.jpg/220px-Ben_Stokes_in_2023.jpg" }, rating: 316, careerBest: 497 },
              { position: 4, player: { name: "Mehidy Hasan Miraz", country: "Bangladesh", avatar: "https://flagcdn.com/w320/bd.png" }, rating: 300, careerBest: 345 },
              // और players
            ],
            ODI: [
              // Top ODI all-rounders: Rashid Khan, Mohammad Nabi, etc. (exact latest add कर सकते हैं, लेकिन structure ready)
              { position: 1, player: { name: "Rashid Khan", country: "Afghanistan", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Rashid_Khan_in_2023.jpg/220px-Rashid_Khan_in_2023.jpg" }, rating: 750, careerBest: 820 },
              // ... add more as per need
            ],
            T20I: [
              // Top T20 all-rounders: Mohammad Nabi, Hardik Pandya, etc.
              { position: 1, player: { name: "Mohammad Nabi", country: "Afghanistan", avatar: "https://flagcdn.com/w320/af.png" }, rating: 320, careerBest: 355 },
              // ... 
            ]
          }
        },
        lastUpdated: "Updated: December 29, 2025",
        methodology: {
          summary: "The ICC Team Rankings are calculated using a sophisticated points-based system developed by statistician David Kendix. The system takes into account all matches played over a rolling period (typically 3-4 years), with recent results weighted more heavily to reflect current team form.",
          points: [
            {
              title: "Match Results",
              desc: "Teams earn points based on the outcome of matches. A win against a stronger opponent yields more points than against a weaker one. Draws (in Test cricket) and ties earn partial points."
            },
            {
              title: "Strength of Opposition",
              desc: "The system adjusts points based on the relative ratings of the teams. Beating a higher-ranked team gives significantly more points, while losing to a lower-ranked team deducts more."
            },
            {
              title: "Series Results (Test only)",
              desc: "In Test cricket, bonus points are awarded for winning a series, encouraging competitive multi-match contests."
            },
            {
              title: "Rolling Time Period",
              desc: "All matches from the past 3-4 years are included. Results older than 3 years are gradually phased out (dropped annually in May). This ensures rankings reflect current performance."
            },
            {
              title: "Weighting System",
              desc: "Matches played in the last 12-24 months carry full weight. Matches from 24-36 months ago are weighted at 50%. This gives greater importance to recent form."
            },
            {
              title: "Rating Formula",
              desc: "Final Rating = Total Points Earned ÷ Total Matches Played (with applied weighting). The rating is rounded to the nearest whole number."
            },
            {
              title: "Format-Specific Adjustments",
              desc: "Minor variations exist across formats. Test rankings emphasize series outcomes, while ODI and T20I focus more on individual match results."
            },
            {
              title: "No Human Intervention",
              desc: "The entire calculation is automated using a mathematical model. There is no subjective input from panels or committees."
            }
          ],
          note: "The system is transparent and objective. Full technical details and historical data are available on the official ICC website."
        }
      }
    ]
  }
};

export default IccRanking;