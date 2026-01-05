import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, DollarSign, Calendar, ArrowRight, Search, Filter, Clock } from 'lucide-react';

const FootballTransfers = () => {
  const [activeTab, setActiveTab] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLeague, setSelectedLeague] = useState('all');

  const transfers = [
    {
      id: 1,
      player: 'Kylian Mbappé',
      position: 'Forward',
      age: 25,
      from: 'Paris Saint-Germain',
      fromLeague: 'Ligue 1',
      fromLogo: '🇫🇷',
      to: 'Real Madrid',
      toLeague: 'La Liga',
      toLogo: '🇪🇸',
      fee: '€180M',
      feeAmount: 180000000,
      type: 'Transfer',
      status: 'Completed',
      date: '2026-01-02',
      contractLength: '5 years',
      wage: '€35M/year',
      breaking: true
    },
    {
      id: 2,
      player: 'Jude Bellingham',
      position: 'Midfielder',
      age: 22,
      from: 'Real Madrid',
      fromLeague: 'La Liga',
      fromLogo: '🇪🇸',
      to: 'Manchester City',
      toLeague: 'Premier League',
      toLogo: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
      fee: '€150M',
      feeAmount: 150000000,
      type: 'Transfer',
      status: 'Rumor',
      date: '2026-01-02',
      contractLength: '6 years',
      wage: '€30M/year',
      breaking: false
    },
    {
      id: 3,
      player: 'Victor Osimhen',
      position: 'Forward',
      age: 25,
      from: 'Napoli',
      fromLeague: 'Serie A',
      fromLogo: '🇮🇹',
      to: 'Chelsea',
      toLeague: 'Premier League',
      toLogo: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
      fee: '€120M',
      feeAmount: 120000000,
      type: 'Transfer',
      status: 'In Progress',
      date: '2026-01-01',
      contractLength: '5 years',
      wage: '€20M/year',
      breaking: true
    },
    {
      id: 4,
      player: 'Erling Haaland',
      position: 'Forward',
      age: 25,
      from: 'Manchester City',
      fromLeague: 'Premier League',
      fromLogo: '🏴󐁧󐁢󐁥󐁮󐁧󐁿',
      to: 'Real Madrid',
      toLeague: 'La Liga',
      toLogo: '🇪🇸',
      fee: '€200M',
      feeAmount: 200000000,
      type: 'Transfer',
      status: 'Rumor',
      date: '2026-01-01',
      contractLength: '6 years',
      wage: '€40M/year',
      breaking: false
    },
    {
      id: 5,
      player: 'Vinicius Junior',
      position: 'Forward',
      age: 23,
      from: 'Real Madrid',
      fromLeague: 'La Liga',
      fromLogo: '🇪🇸',
      to: 'Al-Nassr',
      toLeague: 'Saudi Pro League',
      toLogo: '🇸🇦',
      fee: '€300M',
      feeAmount: 300000000,
      type: 'Transfer',
      status: 'Rumor',
      date: '2025-12-30',
      contractLength: '3 years',
      wage: '€100M/year',
      breaking: false
    },
    {
      id: 6,
      player: 'Florian Wirtz',
      position: 'Midfielder',
      age: 21,
      from: 'Bayer Leverkusen',
      fromLeague: 'Bundesliga',
      fromLogo: '🇩🇪',
      to: 'Bayern Munich',
      toLeague: 'Bundesliga',
      toLogo: '🇩🇪',
      fee: '€130M',
      feeAmount: 130000000,
      type: 'Transfer',
      status: 'In Progress',
      date: '2025-12-29',
      contractLength: '5 years',
      wage: '€18M/year',
      breaking: true
    }
  ];

  const topTransfers = [
    { player: 'Vinicius Junior', from: 'Real Madrid', to: 'Al-Nassr', fee: '€300M', logo: '🇸🇦' },
    { player: 'Erling Haaland', from: 'Man City', to: 'Real Madrid', fee: '€200M', logo: '🇪🇸' },
    { player: 'Kylian Mbappé', from: 'PSG', to: 'Real Madrid', fee: '€180M', logo: '🇪🇸' },
    { player: 'Jude Bellingham', from: 'Real Madrid', to: 'Man City', fee: '€150M', logo: '🏴󐁧󐁢󐁥󐁮󐁧󐁿' }
  ];

  const leagues = ['all', 'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1', 'Saudi Pro League'];

  const getStatusColor = (status) => {
    const colors = {
      'Completed': 'bg-green-100 text-green-700',
      'In Progress': 'bg-yellow-100 text-yellow-700',
      'Rumor': 'bg-blue-100 text-blue-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const filteredTransfers = transfers.filter(transfer => {
    const matchesSearch = transfer.player.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         transfer.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         transfer.to.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLeague = selectedLeague === 'all' || 
                         transfer.fromLeague === selectedLeague || 
                         transfer.toLeague === selectedLeague;
    const matchesTab = activeTab === 'latest' || 
                      (activeTab === 'completed' && transfer.status === 'Completed') ||
                      (activeTab === 'rumors' && transfer.status === 'Rumor');
    return matchesSearch && matchesLeague && matchesTab;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-3">💰 Transfer News</h1>
          <p className="text-purple-100 text-lg">Latest football transfer updates and rumors</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search players or clubs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <select
                  value={selectedLeague}
                  onChange={(e) => setSelectedLeague(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  {leagues.map(league => (
                    <option key={league} value={league}>
                      {league === 'all' ? 'All Leagues' : league}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-2 overflow-x-auto">
                {['latest', 'completed', 'rumors'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap ${
                      activeTab === tab
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Transfers List */}
            <div className="space-y-4">
              {filteredTransfers.map(transfer => (
                <Link
                  key={transfer.id}
                  to={`/football/transfer/${transfer.id}`}
                  className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                          {transfer.player.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{transfer.player}</h3>
                          <p className="text-sm text-gray-500">{transfer.position} • {transfer.age} years</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(transfer.status)}`}>
                          {transfer.status}
                        </span>
                        {transfer.breaking && (
                          <span className="block mt-1 text-xs text-red-600 font-bold">🔥 BREAKING</span>
                        )}
                      </div>
                    </div>

                    {/* Transfer Route */}
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-2xl">{transfer.fromLogo}</span>
                            <span className="font-semibold text-gray-800">{transfer.from}</span>
                          </div>
                          <p className="text-xs text-gray-500">{transfer.fromLeague}</p>
                        </div>
                        
                        <div className="px-4">
                          <ArrowRight className="w-6 h-6 text-purple-600" />
                        </div>
                        
                        <div className="flex-1 text-right">
                          <div className="flex items-center justify-end gap-2 mb-1">
                            <span className="font-semibold text-gray-800">{transfer.to}</span>
                            <span className="text-2xl">{transfer.toLogo}</span>
                          </div>
                          <p className="text-xs text-gray-500">{transfer.toLeague}</p>
                        </div>
                      </div>
                    </div>

                    {/* Transfer Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Transfer Fee</p>
                        <p className="font-bold text-purple-600">{transfer.fee}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Contract</p>
                        <p className="font-bold text-gray-800">{transfer.contractLength}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Wage</p>
                        <p className="font-bold text-gray-800">{transfer.wage}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Date</p>
                        <p className="font-bold text-gray-800">{new Date(transfer.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              {filteredTransfers.length === 0 && (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <p className="text-gray-500 text-lg">No transfers found</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Transfers */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="text-purple-600" />
                Top Transfers 2026
              </h3>
              <div className="space-y-3">
                {topTransfers.map((transfer, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                    <span className="text-2xl">{transfer.logo}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-gray-800">{transfer.player}</p>
                      <p className="text-xs text-gray-500">{transfer.from} → {transfer.to}</p>
                    </div>
                    <span className="font-bold text-purple-600 text-sm">{transfer.fee}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transfer Window Info */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Transfer Window</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-purple-100">Status:</span>
                  <span className="font-bold">Open</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-100">Closes:</span>
                  <span className="font-bold">Jan 31, 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-100">Days Left:</span>
                  <span className="font-bold">29 Days</span>
                </div>
              </div>
              <div className="mt-4 w-full bg-purple-400 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{width: '70%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootballTransfers;