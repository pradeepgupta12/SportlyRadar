// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import LatestNews from '../data/LatestNews.js';

// const AllLatestNews = () => {
//   const navigate = useNavigate();

//   const handleNewsCardClick = (articleId) => {
//     navigate(`/news-details/${encodeURIComponent(articleId)}`);
//   };

//   // Log data to debug
//   console.log('LatestNews.data.LatestNews:', LatestNews.data.LatestNews);

//   return (
//     <main className="w-full max-w-full lg:max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8  min-h-screen overflow-x-hidden pt-8">
//       <h3 className="text-lg sm:text-xl font-bold mb-4 text-black p-2 rounded">
//         All Latest Sports News
//       </h3>
//       {LatestNews.data.LatestNews?.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {LatestNews.data.LatestNews.map((article) => (
//             <div
//               key={article.title}
//               className="flex flex-col bg-white rounded-lg shadow-lg p-4 w-full max-w-full cursor-pointer hover:shadow-xl transition-shadow-md"
//               onClick={() => handleNewsCardClick(article.title)}
//             >
//               <div className="w-full h-48 sm:h-56">
//                 <img
//                   src={article.image || "https://via.placeholder.com/150"}
//                   alt={article.title}
//                   className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
//                 />
//               </div>
//               <div className="mt-4">
//                 <h4 className="text-base sm:text-lg font-semibold text-gray-800 min-h-[3.2rem]">{article.title}</h4>
//                 <p className="text-sm sm:text-base text-gray-600 mt-2 line-clamp-2">{article.description}</p>
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
//       ) : (
//         <p className="text-center text-gray-500">No news articles available.</p>
//       )}
//     </main>
//   );
// };

// export default AllLatestNews;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import LatestNews from '../data/LatestNews.js';
import SEO from '../components/SEO.jsx';

const AllLatestNews = () => {
  const navigate = useNavigate();

  const handleNewsCardClick = (articleId) => {
    navigate(`/news-details/${encodeURIComponent(articleId)}`);
  };

  // Log data to debug
  console.log('LatestNews.data.LatestNews:', LatestNews.data.LatestNews);

  return (
    <main className="w-full max-w-full lg:max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8  min-h-screen overflow-x-hidden pt-8">
      {/* SEO Component */}
      <SEO 
        title="All Latest Sports News | SportlyRadar"
        description="Stay updated with all the latest sports news, breaking updates, match analysis, and exclusive stories from football, cricket, basketball, tennis, hockey and more."
        keywords="sports news, latest sports updates, breaking sports news, match analysis, football news, cricket news, basketball news, tennis news, hockey news"
        canonical={window.location.href}
        image="https://sportlyradar.com/news-og-image.jpg"
        url={window.location.href}
        type="article"
      />
      
      <h3 className="text-lg sm:text-xl font-bold mb-4 text-black p-2 rounded">
        All Latest Sports News
      </h3>
      {LatestNews.data.LatestNews?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LatestNews.data.LatestNews.map((article) => (
            <div
              key={article.title}
              className="flex flex-col bg-white rounded-lg shadow-lg p-4 w-full max-w-full cursor-pointer hover:shadow-xl transition-shadow-md"
              onClick={() => handleNewsCardClick(article.title)}
            >
              <div className="w-full h-48 sm:h-56">
                <img
                  src={article.image || "https://via.placeholder.com/150"}
                  alt={article.title}
                  className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 min-h-[3.2rem]">{article.title}</h4>
                <p className="text-sm sm:text-base text-gray-600 mt-2 line-clamp-2">{article.description}</p>
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
      ) : (
        <p className="text-center text-gray-500">No news articles available.</p>
      )}
    </main>
  );
};

export default AllLatestNews;