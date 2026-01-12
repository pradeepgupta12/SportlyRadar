// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { ArrowRight, DollarSign, Calendar, FileText, TrendingUp, Users, Trophy, CheckCircle } from 'lucide-react';

// const FootballTransferDetail = () => {
//   const { transferId } = useParams();

//   // Mock transfer data
//   const transfer = {
//     id: 1,
//     player: {
//       name: 'Kylian Mbappé',
//       age: 25,
//       position: 'Forward',
//       nationality: '🇫🇷',
//       nationalityName: 'France',
//       photo: '👤'
//     },
//     from: {
//       team: 'Paris Saint-Germain',
//       league: 'Ligue 1',
//       country: '🇫🇷',
//       yearsAtClub: 7,
//       appearances: 308,
//       goals: 256,
//       assists: 108
//     },
//     to: {
//       team: 'Real Madrid',
//       league: 'La Liga',
//       country: '🇪🇸',
//       shirtNumber: 9
//     },
//     transfer: {
//       fee: '€180M',
//       feeBreakdown: {
//         baseTransfer: '€150M',
//         addOns: '€30M',
//         agentFee: '€15M',
//         total: '€195M'
//       },
//       contractLength: '5 years',
//       weeklyWage: '€35M/year',
//       weeklyWageAmount: '€675,000/week',
//       signingBonus: '€50M',
//       releaseClause: '€1B',
//       date: '2026-01-02',
//       status: 'Completed',
//       type: 'Permanent Transfer'
//     },
//     timeline: [
//       { date: '2025-12-15', event: 'Initial contact between clubs', status: 'completed' },
//       { date: '2025-12-20', event: 'Personal terms agreed with player', status: 'completed' },
//       { date: '2025-12-27', event: 'Transfer fee agreed between clubs', status: 'completed' },
//       { date: '2026-01-01', event: 'Medical examination passed', status: 'completed' },
//       { date: '2026-01-02', event: 'Contract signed - Transfer completed', status: 'completed' }
//     ],
//     impact: {
//       playerMotivation: 'Opportunity to win Champions League and Ballon d\'Or',
//       clubReason: 'Galactico signing to replace aging squad',
//       marketImpact: 'Second highest transfer fee in history'
//     },
//     comparisons: [
//       { player: 'Neymar to PSG', fee: '€222M', year: 2017 },
//       { player: 'Cristiano Ronaldo to Real Madrid', fee: '€94M', year: 2009 },
//       { player: 'Gareth Bale to Real Madrid', fee: '€100M', year: 2013 }
//     ],
//     expertOpinions: [
//       {
//         expert: 'Guillem Balague',
//         role: 'Football Journalist',
//         opinion: 'This is the perfect move for Mbappé. Real Madrid has always been his dream destination.'
//       },
//       {
//         expert: 'Gary Neville',
//         role: 'Former Manchester United Defender',
//         opinion: 'The fee is astronomical, but Mbappé is worth every penny. He will become the face of Real Madrid.'
//       }
//     ]
//   };

//   const getStatusColor = (status) => {
//     return status === 'completed' ? 'bg-green-500' : 'bg-gray-300';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-3 mb-6">
//             <span className={`px-4 py-2 rounded-full text-sm font-bold ${
//               transfer.transfer.status === 'Completed' ? 'bg-green-500' :
//               transfer.transfer.status === 'In Progress' ? 'bg-yellow-500' :
//               'bg-blue-500'
//             }`}>
//               {transfer.transfer.status}
//             </span>
//             <span className="text-lg">• {transfer.transfer.type}</span>
//           </div>

//           <div className="grid md:grid-cols-[1fr,auto,1fr] items-center gap-8">
//             {/* From Club */}
//             <div className="text-right">
//               <span className="text-6xl mb-3 block">{transfer.from.country}</span>
//               <h2 className="text-4xl font-bold mb-2">{transfer.from.team}</h2>
//               <p className="text-purple-100 text-xl">{transfer.from.league}</p>
//               <div className="mt-4 grid grid-cols-3 gap-2">
//                 <div className="bg-white/20 backdrop-blur rounded-lg p-2">
//                   <p className="text-2xl font-bold">{transfer.from.yearsAtClub}</p>
//                   <p className="text-purple-100 text-xs">Years</p>
//                 </div>
//                 <div className="bg-white/20 backdrop-blur rounded-lg p-2">
//                   <p className="text-2xl font-bold">{transfer.from.goals}</p>
//                   <p className="text-purple-100 text-xs">Goals</p>
//                 </div>
//                 <div className="bg-white/20 backdrop-blur rounded-lg p-2">
//                   <p className="text-2xl font-bold">{transfer.from.assists}</p>
//                   <p className="text-purple-100 text-xs">Assists</p>
//                 </div>
//               </div>
//             </div>

//             {/* Player Card */}
//             <div className="bg-white text-gray-800 rounded-2xl p-8 shadow-2xl">
//               <div className="text-center mb-6">
//                 <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white mb-4">
//                   <span className="text-5xl">{transfer.player.nationality}</span>
//                 </div>
//                 <h1 className="text-3xl font-bold mb-1">{transfer.player.name}</h1>
//                 <p className="text-gray-600">{transfer.player.position} • {transfer.player.age} years</p>
//               </div>

//               <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-6 text-center">
//                 <p className="text-sm mb-2">Transfer Fee</p>
//                 <p className="text-5xl font-bold">{transfer.transfer.fee}</p>
//               </div>

//               <div className="mt-6">
//                 <ArrowRight className="w-16 h-16 mx-auto text-purple-600 animate-pulse" />
//               </div>
//             </div>

//             {/* To Club */}
//             <div className="text-left">
//               <span className="text-6xl mb-3 block">{transfer.to.country}</span>
//               <h2 className="text-4xl font-bold mb-2">{transfer.to.team}</h2>
//               <p className="text-purple-100 text-xl">{transfer.to.league}</p>
//               <div className="mt-4">
//                 <div className="bg-white/20 backdrop-blur rounded-lg p-4">
//                   <p className="text-purple-100 text-sm mb-1">Shirt Number</p>
//                   <p className="text-6xl font-bold">#{transfer.to.shirtNumber}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Contract Details */}
//         <div className="grid md:grid-cols-2 gap-6 mb-8">
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
//               <FileText className="w-6 h-6 text-purple-600" />
//               Contract Details
//             </h3>
//             <div className="space-y-4">
//               <div className="flex justify-between items-center border-b border-gray-200 pb-3">
//                 <span className="text-gray-600">Contract Length:</span>
//                 <span className="font-bold text-gray-800">{transfer.transfer.contractLength}</span>
//               </div>
//               <div className="flex justify-between items-center border-b border-gray-200 pb-3">
//                 <span className="text-gray-600">Annual Wage:</span>
//                 <span className="font-bold text-green-600">{transfer.transfer.weeklyWage}</span>
//               </div>
//               <div className="flex justify-between items-center border-b border-gray-200 pb-3">
//                 <span className="text-gray-600">Weekly Wage:</span>
//                 <span className="font-bold text-green-600">{transfer.transfer.weeklyWageAmount}</span>
//               </div>
//               <div className="flex justify-between items-center border-b border-gray-200 pb-3">
//                 <span className="text-gray-600">Signing Bonus:</span>
//                 <span className="font-bold text-blue-600">{transfer.transfer.signingBonus}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-600">Release Clause:</span>
//                 <span className="font-bold text-red-600">{transfer.transfer.releaseClause}</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
//               <DollarSign className="w-6 h-6 text-green-600" />
//               Fee Breakdown
//             </h3>
//             <div className="space-y-4">
//               <div className="flex justify-between items-center border-b border-gray-200 pb-3">
//                 <span className="text-gray-600">Base Transfer Fee:</span>
//                 <span className="font-bold text-gray-800">{transfer.transfer.feeBreakdown.baseTransfer}</span>
//               </div>
//               <div className="flex justify-between items-center border-b border-gray-200 pb-3">
//                 <span className="text-gray-600">Performance Add-ons:</span>
//                 <span className="font-bold text-gray-800">{transfer.transfer.feeBreakdown.addOns}</span>
//               </div>
//               <div className="flex justify-between items-center border-b border-gray-200 pb-3">
//                 <span className="text-gray-600">Agent Fees:</span>
//                 <span className="font-bold text-gray-800">{transfer.transfer.feeBreakdown.agentFee}</span>
//               </div>
//               <div className="flex justify-between items-center pt-3 bg-purple-50 rounded-lg p-3">
//                 <span className="text-gray-800 font-semibold">Total Package:</span>
//                 <span className="font-bold text-2xl text-purple-600">{transfer.transfer.feeBreakdown.total}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Timeline */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
//             <Calendar className="w-6 h-6 text-blue-600" />
//             Transfer Timeline
//           </h3>
//           <div className="space-y-4">
//             {transfer.timeline.map((item, idx) => (
//               <div key={idx} className="flex items-center gap-4">
//                 <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(item.status)}`}>
//                   {item.status === 'completed' ? (
//                     <CheckCircle className="w-6 h-6 text-white" />
//                   ) : (
//                     <span className="text-white font-bold">{idx + 1}</span>
//                   )}
//                 </div>
//                 <div className="flex-1 bg-gray-50 rounded-lg p-4">
//                   <p className="font-bold text-gray-800">{item.event}</p>
//                   <p className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString('en-US', { 
//                     weekday: 'long', 
//                     year: 'numeric', 
//                     month: 'long', 
//                     day: 'numeric' 
//                   })}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Impact Analysis */}
//         <div className="grid md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl shadow-lg p-6">
//             <Trophy className="w-8 h-8 mb-3" />
//             <h4 className="text-xl font-bold mb-2">Player Motivation</h4>
//             <p className="text-blue-100">{transfer.impact.playerMotivation}</p>
//           </div>
//           <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl shadow-lg p-6">
//             <Users className="w-8 h-8 mb-3" />
//             <h4 className="text-xl font-bold mb-2">Club's Reason</h4>
//             <p className="text-purple-100">{transfer.impact.clubReason}</p>
//           </div>
//           <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl shadow-lg p-6">
//             <TrendingUp className="w-8 h-8 mb-3" />
//             <h4 className="text-xl font-bold mb-2">Market Impact</h4>
//             <p className="text-pink-100">{transfer.impact.marketImpact}</p>
//           </div>
//         </div>

//         {/* Historical Comparisons */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <h3 className="text-2xl font-bold mb-6">Historical Transfer Comparisons</h3>
//           <div className="space-y-3">
//             {transfer.comparisons.map((comp, idx) => (
//               <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
//                 <div>
//                   <p className="font-bold text-gray-800">{comp.player}</p>
//                   <p className="text-sm text-gray-500">{comp.year}</p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-2xl font-bold text-purple-600">{comp.fee}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Expert Opinions */}
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <h3 className="text-2xl font-bold mb-6">Expert Analysis</h3>
//           <div className="space-y-6">
//             {transfer.expertOpinions.map((expert, idx) => (
//               <div key={idx} className="border-l-4 border-purple-600 pl-4 py-2">
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
//                     {expert.expert.split(' ').map(n => n[0]).join('')}
//                   </div>
//                   <div>
//                     <p className="font-bold text-gray-800">{expert.expert}</p>
//                     <p className="text-sm text-gray-500">{expert.role}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 italic">"{expert.opinion}"</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FootballTransferDetail;

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { ArrowRight, DollarSign, Calendar, FileText, TrendingUp, Trophy, CheckCircle, Users } from 'lucide-react';

// const FootballTransferDetail = () => {
//   const { transferId } = useParams();

//   // Mock data updated for early January 2026 - no major transfers yet in real world
//   const transfer = {
//     id: 1,
//     player: {
//       name: 'Brennan Johnson',
//       age: 24,
//       position: 'Winger',
//       nationality: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
//       nationalityName: 'Wales',
//     },
//     from: {
//       team: 'Tottenham Hotspur',
//       league: 'Premier League',
//       country: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
//       goals: 8,
//       assists: 10
//     },
//     to: {
//       team: 'Crystal Palace',
//       league: 'Premier League',
//       country: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
//       shirtNumber: 7
//     },
//     transfer: {
//       fee: '€45M',
//       contractLength: '5 years',
//       annualWage: '€8M/year',
//       weeklyWage: '€154,000/week',
//       date: '2026-01-02',
//       status: 'Completed',
//       type: 'Permanent Transfer'
//     },
//     timeline: [
//       { date: '2025-12-20', event: 'Initial bid accepted', status: 'completed' },
//       { date: '2025-12-25', event: 'Personal terms agreed', status: 'completed' },
//       { date: '2026-01-01', event: 'Medical completed', status: 'completed' },
//       { date: '2026-01-02', event: 'Official announcement', status: 'completed' }
//     ],
//     impact: {
//       playerMotivation: 'More regular playing time and development',
//       clubReason: 'Add pace and creativity to attack',
//       marketImpact: 'Significant intra-league deal early in window'
//     },
//     comparisons: [
//       { player: 'Jack Grealish (Aston Villa → Man City)', fee: '€117M', year: 2021 },
//       { player: 'Anthony Gordon (Everton → Newcastle)', fee: '€45M', year: 2022 },
//       { player: 'Mykhailo Mudryk (Shakhtar → Chelsea)', fee: '€100M', year: 2023 }
//     ]
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
//       {/* Super Compact Hero Section */}
//       <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-center gap-4 mb-3">
//             <span className="text-4xl">{transfer.from.country}</span>
//             <ArrowRight className="w-10 h-10 animate-pulse" />
//             <span className="text-4xl">{transfer.to.country}</span>
//           </div>

//           <div className="text-center">
//             <h1 className="text-3xl md:text-4xl font-bold mb-1">{transfer.player.name}</h1>
//             <p className="text-purple-100 text-base mb-3">
//               {transfer.from.team} → {transfer.to.team}
//             </p>

//             <div className="bg-white text-gray-800 rounded-lg inline-block px-6 py-4 shadow-lg">
//               <p className="text-xs text-gray-600 mb-1">Transfer Fee</p>
//               <p className="text-3xl font-bold text-purple-600">{transfer.transfer.fee}</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-6 text-center text-sm">
//             <div className="bg-white/20 backdrop-blur rounded-lg py-2">
//               <p className="text-xl font-bold">{transfer.from.goals}G + {transfer.from.assists}A</p>
//               <p className="text-xs text-purple-100">Stats at {transfer.from.team}</p>
//             </div>
//             <div className="bg-white/20 backdrop-blur rounded-lg py-2">
//               <p className="text-xl font-bold">#{transfer.to.shirtNumber}</p>
//               <p className="text-xs text-purple-100">Shirt Number</p>
//             </div>
//             <div className="bg-white/20 backdrop-blur rounded-lg py-2">
//               <p className="text-xl font-bold">{transfer.transfer.contractLength}</p>
//               <p className="text-xs text-purple-100">Contract</p>
//             </div>
//             <div className="bg-white/20 backdrop-blur rounded-lg py-2 hidden md:block">
//               <p className="text-xl font-bold">{transfer.transfer.weeklyWage}</p>
//               <p className="text-xs text-purple-100">Weekly Wage</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Contract & Stats */}
//         <div className="grid md:grid-cols-2 gap-5 mb-8">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
//               <FileText className="w-5 h-5 text-purple-600" />
//               Contract Details
//             </h3>
//             <div className="space-y-2 text-sm">
//               <div className="flex justify-between"><span className="text-gray-600">Length:</span><span className="font-semibold">{transfer.transfer.contractLength}</span></div>
//               <div className="flex justify-between"><span className="text-gray-600">Annual Wage:</span><span className="font-semibold text-green-600">{transfer.transfer.annualWage}</span></div>
//               <div className="flex justify-between"><span className="text-gray-600">Announced:</span><span className="font-semibold">{new Date(transfer.transfer.date).toLocaleDateString()}</span></div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
//               <DollarSign className="w-5 h-5 text-green-600" />
//               Transfer Info
//             </h3>
//             <div className="space-y-2 text-sm">
//               <div className="flex justify-between"><span className="text-gray-600">Type:</span><span className="font-semibold">{transfer.transfer.type}</span></div>
//               <div className="flex justify-between"><span className="text-gray-600">Status:</span><span className="font-semibold text-green-600">{transfer.transfer.status}</span></div>
//             </div>
//           </div>
//         </div>

//         {/* Timeline */}
//         <div className="bg-white rounded-xl shadow-md p-5 mb-8">
//           <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
//             <Calendar className="w-5 h-5 text-blue-600" />
//             Timeline
//           </h3>
//           <div className="grid md:grid-cols-2 gap-3">
//             {transfer.timeline.map((item, idx) => (
//               <div key={idx} className="flex items-center gap-3">
//                 <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
//                   <CheckCircle className="w-4 h-4 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium">{item.event}</p>
//                   <p className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Impact */}
//         <div className="grid md:grid-cols-3 gap-4 mb-8">
//           <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4">
//             <Trophy className="w-6 h-6 mb-2" />
//             <h4 className="font-bold text-sm mb-1">Player Motivation</h4>
//             <p className="text-xs text-blue-100">{transfer.impact.playerMotivation}</p>
//           </div>
//           <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-4">
//             <Users className="w-6 h-6 mb-2" />
//             <h4 className="font-bold text-sm mb-1">Club Strategy</h4>
//             <p className="text-xs text-purple-100">{transfer.impact.clubReason}</p>
//           </div>
//           <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl p-4">
//             <TrendingUp className="w-6 h-6 mb-2" />
//             <h4 className="font-bold text-sm mb-1">Market Impact</h4>
//             <p className="text-xs text-pink-100">{transfer.impact.marketImpact}</p>
//           </div>
//         </div>

//         {/* Comparisons */}
//         <div className="bg-white rounded-xl shadow-md p-5">
//           <h3 className="text-lg font-bold mb-3">Similar Transfers</h3>
//           <div className="grid md:grid-cols-3 gap-3">
//             {transfer.comparisons.map((comp, idx) => (
//               <div key={idx} className="bg-gray-50 rounded-lg p-3 text-center">
//                 <p className="font-bold text-sm text-gray-800">{comp.player}</p>
//                 <p className="text-xs text-gray-500">{comp.year}</p>
//                 <p className="text-xl font-bold text-purple-600 mt-1">{comp.fee}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FootballTransferDetail;


// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowRight, DollarSign, Calendar, FileText, TrendingUp, Trophy, CheckCircle, Users } from 'lucide-react';
// import TopFootballStories from '../../data/TopFootballStories.js';
// import LatestNews from '../../data/LatestNews.js';

// const FootballTransferDetail = () => {
//   const { transferId } = useParams();
//   const navigate = useNavigate();

//   // Mock data updated for early January 2026 - no major transfers yet in real world
//   const transfer = {
//     id: 1,
//     player: {
//       name: 'Brennan Johnson',
//       age: 24,
//       position: 'Winger',
//       nationality: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
//       nationalityName: 'Wales',
//     },
//     from: {
//       team: 'Tottenham Hotspur',
//       league: 'Premier League',
//       country: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
//       goals: 8,
//       assists: 10
//     },
//     to: {
//       team: 'Crystal Palace',
//       league: 'Premier League',
//       country: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
//       shirtNumber: 7
//     },
//     transfer: {
//       fee: '€45M',
//       contractLength: '5 years',
//       annualWage: '€8M/year',
//       weeklyWage: '€154,000/week',
//       date: '2026-01-02',
//       status: 'Completed',
//       type: 'Permanent Transfer'
//     },
//     timeline: [
//       { date: '2025-12-20', event: 'Initial bid accepted', status: 'completed' },
//       { date: '2025-12-25', event: 'Personal terms agreed', status: 'completed' },
//       { date: '2026-01-01', event: 'Medical completed', status: 'completed' },
//       { date: '2026-01-02', event: 'Official announcement', status: 'completed' }
//     ],
//     impact: {
//       playerMotivation: 'More regular playing time and development',
//       clubReason: 'Add pace and creativity to attack',
//       marketImpact: 'Significant intra-league deal early in window'
//     },
//     comparisons: [
//       { player: 'Jack Grealish (Aston Villa → Man City)', fee: '€117M', year: 2021 },
//       { player: 'Anthony Gordon (Everton → Newcastle)', fee: '€45M', year: 2022 },
//       { player: 'Mykhailo Mudryk (Shakhtar → Chelsea)', fee: '€100M', year: 2023 }
//     ]
//   };

//   const handleStoryClick = (id) => {
//     navigate(`/details/football/${id}`);
//   };

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
//       {/* Main Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

//           {/* Main Content */}
//           <div className="lg:col-span-8 space-y-6">

//             {/* Super Compact Hero Section */}
//             <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8 rounded-xl shadow-xl">
//               <div className="max-w-7xl mx-auto px-4">
//                 <div className="flex items-center justify-center gap-4 mb-3">
//                   <span className="text-4xl">{transfer.from.country}</span>
//                   <ArrowRight className="w-10 h-10 animate-pulse" />
//                   <span className="text-4xl">{transfer.to.country}</span>
//                 </div>

//                 <div className="text-center">
//                   <h1 className="text-3xl md:text-4xl font-bold mb-1">{transfer.player.name}</h1>
//                   <p className="text-purple-100 text-base mb-3">
//                     {transfer.from.team} → {transfer.to.team}
//                   </p>

//                   <div className="bg-white text-gray-800 rounded-lg inline-block px-6 py-4 shadow-lg">
//                     <p className="text-xs text-gray-600 mb-1">Transfer Fee</p>
//                     <p className="text-3xl font-bold text-purple-600">{transfer.transfer.fee}</p>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-6 text-center text-sm">
//                   <div className="bg-white/20 backdrop-blur rounded-lg py-2">
//                     <p className="text-xl font-bold">{transfer.from.goals}G + {transfer.from.assists}A</p>
//                     <p className="text-xs text-purple-100">Stats at {transfer.from.team}</p>
//                   </div>
//                   <div className="bg-white/20 backdrop-blur rounded-lg py-2">
//                     <p className="text-xl font-bold">#{transfer.to.shirtNumber}</p>
//                     <p className="text-xs text-purple-100">Shirt Number</p>
//                   </div>
//                   <div className="bg-white/20 backdrop-blur rounded-lg py-2">
//                     <p className="text-xl font-bold">{transfer.transfer.contractLength}</p>
//                     <p className="text-xs text-purple-100">Contract</p>
//                   </div>
//                   <div className="bg-white/20 backdrop-blur rounded-lg py-2 hidden md:block">
//                     <p className="text-xl font-bold">{transfer.transfer.weeklyWage}</p>
//                     <p className="text-xs text-purple-100">Weekly Wage</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="max-w-7xl mx-auto px-4 py-8">
//               {/* Contract & Stats */}
//               <div className="grid md:grid-cols-2 gap-5 mb-8">
//                 <div className="bg-white rounded-xl shadow-md p-5">
//                   <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
//                     <FileText className="w-5 h-5 text-purple-600" />
//                     Contract Details
//                   </h3>
//                   <div className="space-y-2 text-sm">
//                     <div className="flex justify-between"><span className="text-gray-600">Length:</span><span className="font-semibold">{transfer.transfer.contractLength}</span></div>
//                     <div className="flex justify-between"><span className="text-gray-600">Annual Wage:</span><span className="font-semibold text-green-600">{transfer.transfer.annualWage}</span></div>
//                     <div className="flex justify-between"><span className="text-gray-600">Announced:</span><span className="font-semibold">{new Date(transfer.transfer.date).toLocaleDateString()}</span></div>
//                   </div>
//                 </div>

//                 <div className="bg-white rounded-xl shadow-md p-5">
//                   <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
//                     <DollarSign className="w-5 h-5 text-green-600" />
//                     Transfer Info
//                   </h3>
//                   <div className="space-y-2 text-sm">
//                     <div className="flex justify-between"><span className="text-gray-600">Type:</span><span className="font-semibold">{transfer.transfer.type}</span></div>
//                     <div className="flex justify-between"><span className="text-gray-600">Status:</span><span className="font-semibold text-green-600">{transfer.transfer.status}</span></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Timeline */}
//               <div className="bg-white rounded-xl shadow-md p-5 mb-8">
//                 <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
//                   <Calendar className="w-5 h-5 text-blue-600" />
//                   Timeline
//                 </h3>
//                 <div className="grid md:grid-cols-2 gap-3">
//                   {transfer.timeline.map((item, idx) => (
//                     <div key={idx} className="flex items-center gap-3">
//                       <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
//                         <CheckCircle className="w-4 h-4 text-white" />
//                       </div>
//                       <div>
//                         <p className="text-sm font-medium">{item.event}</p>
//                         <p className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Impact */}
//               <div className="grid md:grid-cols-3 gap-4 mb-8">
//                 <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4">
//                   <Trophy className="w-6 h-6 mb-2" />
//                   <h4 className="font-bold text-sm mb-1">Player Motivation</h4>
//                   <p className="text-xs text-blue-100">{transfer.impact.playerMotivation}</p>
//                 </div>
//                 <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-4">
//                   <Users className="w-6 h-6 mb-2" />
//                   <h4 className="font-bold text-sm mb-1">Club Strategy</h4>
//                   <p className="text-xs text-purple-100">{transfer.impact.clubReason}</p>
//                 </div>
//                 <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl p-4">
//                   <TrendingUp className="w-6 h-6 mb-2" />
//                   <h4 className="font-bold text-sm mb-1">Market Impact</h4>
//                   <p className="text-xs text-pink-100">{transfer.impact.marketImpact}</p>
//                 </div>
//               </div>

//               {/* Comparisons */}
//               <div className="bg-white rounded-xl shadow-md p-5">
//                 <h3 className="text-lg font-bold mb-3">Similar Transfers</h3>
//                 <div className="grid md:grid-cols-3 gap-3">
//                   {transfer.comparisons.map((comp, idx) => (
//                     <div key={idx} className="bg-gray-50 rounded-lg p-3 text-center">
//                       <p className="font-bold text-sm text-gray-800">{comp.player}</p>
//                       <p className="text-xs text-gray-500">{comp.year}</p>
//                       <p className="text-xl font-bold text-purple-600 mt-1">{comp.fee}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Sidebar - Desktop Only */}
//           <div className="hidden lg:block lg:col-span-4">
//             <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-5">Top Football Stories</h3>
//               <div className="space-y-4">
//                 {TopFootballStories.data.TopFootballStories.slice(0, 5).map((story) => (
//                   <div
//                     key={story.id}
//                     onClick={() => handleStoryClick(story.id)}
//                     className="flex gap-3 cursor-pointer group hover:bg-gray-50 rounded-lg p-3 -mx-3 transition-colors"
//                   >
//                     <div className="flex-shrink-0">
//                       <img
//                         src={story.image || 'https://via.placeholder.com/100'}
//                         alt={story.title}
//                         className="w-20 h-20 object-cover rounded-lg"
//                       />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-purple-600 transition-colors">
//                         {story.title}
//                       </h4>
//                       <p className="text-xs text-gray-500 mt-1">
//                         {new Date(story.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <button
//                 onClick={() => navigate('/all-top-football-stories')}
//                 className="mt-6 w-full text-center text-purple-600 font-medium hover:underline text-sm"
//               >
//                 View All Stories →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Top Football Stories */}
//       <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-5">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Top Football Stories</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {TopFootballStories.data.TopFootballStories.slice(0, 4).map((story) => (
//                 <div
//                   key={story.id}
//                   onClick={() => handleStoryClick(story.id)}
//                   className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
//                 >
//                   <img
//                     src={story.image || 'https://via.placeholder.com/300'}
//                     alt={story.title}
//                     className="w-full h-40 object-cover"
//                   />
//                   <div className="p-3">
//                     <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
//                       {story.title}
//                     </h4>
//                     <p className="text-xs text-gray-500 mt-1">
//                       {new Date(story.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button
//               onClick={() => navigate('/all-top-football-stories')}
//               className="mt-4 w-full text-center text-purple-600 font-medium hover:underline text-sm"
//             >
//               View All Stories →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Latest Sports News */}
//       <div className="mt-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
//                 Latest Sports News
//               </h3>
//               <button
//                 onClick={() => navigate('/all-latest-news')}
//                 className="text-purple-600 hover:underline font-medium text-sm sm:text-base"
//               >
//                 View All →
//               </button>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {LatestNews.data.LatestNews.slice(0, 6).map((article) => (
//                 <div
//                   key={article.title}
//                   onClick={() => handleNewsCardClick(article.title)}
//                   className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
//                 >
//                   <img
//                     src={article.image || "https://via.placeholder.com/400x250"}
//                     alt={article.title}
//                     className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="p-4">
//                     <h4 className="text-base font-semibold text-gray-800 line-clamp-2 mb-2">
//                       {article.title}
//                     </h4>
//                     <p className="text-sm text-gray-600 line-clamp-2 mb-3">
//                       {article.description}
//                     </p>
//                     <div className="flex justify-between text-xs text-gray-500">
//                       <span>Source: {article.source}</span>
//                       <span>
//                         {new Date(article.published).toLocaleDateString('en-US', {
//                           month: 'short',
//                           day: '2-digit',
//                           year: 'numeric',
//                         })}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FootballTransferDetail;


import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Trophy, 
  Target, 
  Calendar, 
  Award, 
  ArrowRight, 
  FileText, 
  DollarSign, 
  CheckCircle, 
  Users, 
  TrendingUp 
} from 'lucide-react';
import TopFootballStories from '../../data/TopFootballStories.js';
import LatestNews from '../../data/LatestNews.js';
import { footballTransferDetails } from '../../data/FootballTransferDetail.js';

const FootballTransferDetail = () => {
  const { transferId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('standings');

  // Data ab external file se aa raha hai
  const transfer = footballTransferDetails[transferId] || footballTransferDetails["1"];

  const getFormColor = (result) => {
    const colors = { 'W': 'bg-green-500', 'D': 'bg-yellow-500', 'L': 'bg-red-500' };
    return colors[result] || 'bg-gray-500';
  };

  const handleStoryClick = (id) => {
    navigate(`/details/football/${id}`);
  };

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Left/Main Content */}
          <div className="lg:col-span-8 space-y-6">

            {/* Super Compact Hero Section */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8 rounded-xl shadow-xl">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-center gap-4 mb-3">
                  <span className="text-4xl">{transfer.from.country}</span>
                  <ArrowRight className="w-10 h-10 animate-pulse" />
                  <span className="text-4xl">{transfer.to.country}</span>
                </div>

                <div className="text-center">
                  <h1 className="text-3xl md:text-4xl font-bold mb-1">{transfer.player.name}</h1>
                  <p className="text-purple-100 text-base mb-3">
                    {transfer.from.team} → {transfer.to.team}
                  </p>

                  <div className="bg-white text-gray-800 rounded-lg inline-block px-6 py-4 shadow-lg">
                    <p className="text-xs text-gray-600 mb-1">Transfer Fee</p>
                    <p className="text-3xl font-bold text-purple-600">{transfer.transfer.fee}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-6 text-center text-sm">
                  <div className="bg-white/20 backdrop-blur rounded-lg py-2">
                    <p className="text-xl font-bold">{transfer.from.goals}G + {transfer.from.assists}A</p>
                    <p className="text-xs text-purple-100">Stats at {transfer.from.team}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-lg py-2">
                    <p className="text-xl font-bold">#{transfer.to.shirtNumber}</p>
                    <p className="text-xs text-purple-100">Shirt Number</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-lg py-2">
                    <p className="text-xl font-bold">{transfer.transfer.contractLength}</p>
                    <p className="text-xs text-purple-100">Contract</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-lg py-2 hidden md:block">
                    <p className="text-xl font-bold">{transfer.transfer.weeklyWage}</p>
                    <p className="text-xs text-purple-100">Weekly Wage</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
              {/* Contract & Stats */}
              <div className="grid md:grid-cols-2 gap-5 mb-8">
                <div className="bg-white rounded-xl shadow-md p-5">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-600" />
                    Contract Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-600">Length:</span><span className="font-semibold">{transfer.transfer.contractLength}</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Annual Wage:</span><span className="font-semibold text-green-600">{transfer.transfer.annualWage}</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Announced:</span><span className="font-semibold">{new Date(transfer.transfer.date).toLocaleDateString()}</span></div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    Transfer Info
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-600">Type:</span><span className="font-semibold">{transfer.transfer.type}</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Status:</span><span className="font-semibold text-green-600">{transfer.transfer.status}</span></div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-xl shadow-md p-5 mb-8">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Timeline
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {transfer.timeline.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{item.event}</p>
                        <p className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4">
                  <Trophy className="w-6 h-6 mb-2" />
                  <h4 className="font-bold text-sm mb-1">Player Motivation</h4>
                  <p className="text-xs text-blue-100">{transfer.impact.playerMotivation}</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-4">
                  <Users className="w-6 h-6 mb-2" />
                  <h4 className="font-bold text-sm mb-1">Club Strategy</h4>
                  <p className="text-xs text-purple-100">{transfer.impact.clubReason}</p>
                </div>
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl p-4">
                  <TrendingUp className="w-6 h-6 mb-2" />
                  <h4 className="font-bold text-sm mb-1">Market Impact</h4>
                  <p className="text-xs text-pink-100">{transfer.impact.marketImpact}</p>
                </div>
              </div>

              {/* Comparisons */}
              <div className="bg-white rounded-xl shadow-md p-5">
                <h3 className="text-lg font-bold mb-3">Similar Transfers</h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {transfer.comparisons.map((comp, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-3 text-center">
                      <p className="font-bold text-sm text-gray-800">{comp.player}</p>
                      <p className="text-xs text-gray-500">{comp.year}</p>
                      <p className="text-xl font-bold text-purple-600 mt-1">{comp.fee}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Desktop Only */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Top Football Stories</h3>
              <div className="space-y-4">
                {TopFootballStories.data.TopFootballStories.slice(0, 5).map((story) => (
                  <div
                    key={story.id}
                    onClick={() => handleStoryClick(story.id)}
                    className="flex gap-3 cursor-pointer group hover:bg-gray-50 rounded-lg p-3 -mx-3 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={story.image || 'https://via.placeholder.com/100'}
                        alt={story.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-purple-600 transition-colors">
                        {story.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(story.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/all-top-football-stories')}
                className="mt-6 w-full text-center text-purple-600 font-medium hover:underline text-sm"
              >
                View All Stories →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Top Football Stories */}
      <div className="lg:hidden mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Football Stories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TopFootballStories.data.TopFootballStories.slice(0, 4).map((story) => (
                <div
                  key={story.id}
                  onClick={() => handleStoryClick(story.id)}
                  className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
                >
                  <img
                    src={story.image || 'https://via.placeholder.com/300'}
                    alt={story.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3">
                    <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                      {story.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(story.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('/all-top-football-stories')}
              className="mt-4 w-full text-center text-purple-600 font-medium hover:underline text-sm"
            >
              View All Stories →
            </button>
          </div>
        </div>
      </div>

      {/* Latest Sports News */}
      <div className="mt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Latest Sports News
              </h3>
              <button
                onClick={() => navigate('/all-latest-news')}
                className="text-purple-600 hover:underline font-medium text-sm sm:text-base"
              >
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LatestNews.data.LatestNews.slice(0, 6).map((article) => (
                <div
                  key={article.title}
                  onClick={() => handleNewsCardClick(article.title)}
                  className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <img
                    src={article.image || "https://via.placeholder.com/400x250"}
                    alt={article.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h4 className="text-base font-semibold text-gray-800 line-clamp-2 mb-2">
                      {article.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {article.description}
                    </p>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Source: {article.source}</span>
                      <span>
                        {new Date(article.published).toLocaleDateString('en-US', {
                          month: 'short',
                          day: '2-digit',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootballTransferDetail;