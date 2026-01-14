// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import LatestNews from '../data/LatestNews.js'; // Adjust path if needed

// const LatestSportsNews = () => {
//   const navigate = useNavigate();

//   const handleNewsCardClick = (articleTitle) => {
//     navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
//   };

//   return (
//     <div className="w-full max-w-full lg:max-w-7xl mx-auto py-8 px-2 sm:px-4 lg:px-6 bg-gray-50">
//       {/* Latest Sport News */}
//       <div id="latest-sports-news">
//         <h3 className="text-lg sm:text-xl font-bold mb-4 text-black p-2 rounded">
//           Latest Sports News
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {LatestNews.data.LatestNews.slice(0, 6).map((article) => (
//             <div
//               key={article.title}
//               className="flex flex-col bg-white rounded-lg shadow-lg p-4 w-full max-w-full cursor-pointer hover:shadow-xl transition-shadow"
//               onClick={() => handleNewsCardClick(article.title)}
//             >
//               <div className="w-full h-48 sm:h-56">
//                 <img
//                   src={article.image || "https://via.placeholder.com/150"}
//                   alt={article.title}
//                   className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
//                 />
//               </div>
//               <div className="mt-4">
//                 <h4 className="text-base sm:text-lg font-semibold text-gray-800 min-h-15">
//                   {article.title}
//                 </h4>
//                 <p className="text-sm sm:text-base text-gray-600 mt-2 line-clamp-2">
//                   {article.description}
//                 </p>
//                 <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-3 gap-2">
//                   <p className="text-xs sm:text-sm text-gray-500">
//                     Source: {article.source}
//                   </p>
//                   <p className="text-xs sm:text-sm text-gray-500">
//                     {new Date(article.published).toLocaleDateString('en-US', {
//                       month: 'short',
//                       day: '2-digit',
//                       year: 'numeric',
//                     })}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {LatestNews.data.LatestNews.length > 4 && (
//           <div className="mt-6 text-right">
//             <button
//               onClick={() => navigate('/all-latest-news')}
//               className="text-blue-600 text-sm sm:text-base font-medium hover:underline hover:text-blue-800 cursor-pointer"
//             >
//               View All
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LatestSportsNews;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import LatestNews from '../data/LatestNews.js'; // Adjust path if needed
import SEO from '../components/SEO.jsx';

const LatestSportsNews = () => {
  const navigate = useNavigate();

  const handleNewsCardClick = (articleTitle) => {
    navigate(`/news-details/${encodeURIComponent(articleTitle)}`);
  };

  return (
    <div className="w-full max-w-full lg:max-w-7xl mx-auto py-8 px-2 sm:px-4 lg:px-6 bg-gray-50">
      {/* SEO Component for Latest Sports News section */}
      <SEO 
        title="Latest Sports News | Breaking Updates & Headlines | SportlyRadar"
        description="Stay updated with the latest sports news, breaking updates, match analysis, and exclusive stories from football, cricket, basketball, tennis, hockey and more."
        keywords="latest sports news, breaking sports updates, sports headlines, match analysis, football news, cricket updates, basketball news, tennis coverage, hockey news"
        canonical={window.location.href}
        image="https://sportlyradar.com/latest-sports-news-og-image.jpg"
        url={window.location.href}
        type="website"
      />
      
      {/* Latest Sport News */}
      <div id="latest-sports-news">
        <h3 className="text-lg sm:text-xl font-bold mb-4 text-black p-2 rounded">
          Latest Sports News
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LatestNews.data.LatestNews.slice(0, 6).map((article) => (
            <div
              key={article.title}
              className="flex flex-col bg-white rounded-lg shadow-lg p-4 w-full max-w-full cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => handleNewsCardClick(article.title)}
            >
              <div className="w-full h-48 sm:h-56">
                <img
                  src={article.image || "https://via.placeholder.com/150"}
                  alt={article.title}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 min-h-15">
                  {article.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mt-2 line-clamp-2">
                  {article.description}
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-3 gap-2">
                  <p className="text-xs sm:text-sm text-gray-500">
                    Source: {article.source}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {new Date(article.published).toLocaleDateString('en-US', {
                      month: 'short',
                      day: '2-digit',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {LatestNews.data.LatestNews.length > 4 && (
          <div className="mt-6 text-right">
            <button
              onClick={() => navigate('/all-latest-news')}
              className="text-blue-600 text-sm sm:text-base font-medium hover:underline hover:text-blue-800 cursor-pointer"
            >
              View All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestSportsNews;