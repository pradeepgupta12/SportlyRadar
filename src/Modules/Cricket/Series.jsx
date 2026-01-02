import React from 'react';
import { useNavigate } from 'react-router-dom';

const Series = () => {
  const navigate = useNavigate();

  // Series data from Navbar
  const cricketSeries = [
    {
      title: 'ICC Mens T20 World Cup 2026',
      slug: 'icc-mens-t20-world-cup-2026',
      format: 'T20',
      year: '2026',
      status: 'Upcoming',
    },
    {
      title: 'The Ashes, 2025-26',
      slug: 'the-ashes-2025-26',
      format: 'Test',
      year: '2025-26',
      status: 'Ongoing',
    },
    {
      title: 'Indian Premier League 2026',
      slug: 'ipl-2026',
      format: 'T20',
      year: '2026',
      status: 'Upcoming',
    },
  ];

  const handleSeriesClick = (slug) => {
    navigate(`/cricket/series/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cricket Series & Tournaments</h1>

        {/* Series List */}
        <div className="space-y-4">
          {cricketSeries.map((series) => (
            <div
              key={series.slug}
              onClick={() => handleSeriesClick(series.slug)}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer p-6"
            >
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      series.status === 'Ongoing' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {series.status}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                      {series.format}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    {series.title}
                  </h2>
                  
                  <div className="text-sm text-gray-600">
                    Season: {series.year}
                  </div>
                </div>

                <div className="text-right">
                  <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium text-sm">
                    View Schedule
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Series;