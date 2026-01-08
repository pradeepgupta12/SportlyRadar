// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import TopBasketballStories from '../data/TopBasketballStories.js';

// const AllTopBasketballStories = () => {
//   const navigate = useNavigate();

//   const handleStoryCardClick = (type, id) => {
//     navigate(`/details/${type}/${id}`);
//   };

//   return (
//     <main className="w-full max-w-full lg:max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen overflow-x-hidden pt-8">
//       <h3 className="text-lg sm:text-xl font-bold mb-4 text-black p-2 rounded">
//         All Top Basketball Stories
//       </h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {TopBasketballStories.data.TopBasketballStories?.map((story) => (
//           <div
//             key={story.id}
//             className="flex flex-col sm:flex-row items-stretch bg-white rounded-lg shadow-lg p-4 w-full max-w-full gap-4 cursor-pointer hover:shadow-xl transition-shadow-md"
//             onClick={() => handleStoryCardClick('basketball', story.id)}
//           >
//             <div className="w-full sm:w-32 h-32 sm:h-auto flex-shrink-0">
//               <img
//                 src={story.image || "https://via.placeholder.com/150"}
//                 alt={story.title}
//                 className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//             <div className="flex-1">
//               <h4 className="text-base sm:text-lg font-semibold text-gray-800 min-h-[3.2rem]">{story.title}</h4>
//               <p className="text-sm sm:text-base text-gray-600 mt-2 line-clamp-2">{story.description}</p>
//               <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-3 gap-2">
//                 <p className="text-xs sm:text-sm text-gray-500">
//                   Date: {new Date(story.date).toLocaleDateString('en-US', {
//                     month: 'short',
//                     day: '2-digit',
//                     year: 'numeric'
//                   })}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };

// export default AllTopBasketballStories;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopBasketballStories from '../data/TopBasketballStories.js';

const AllTopBasketballStories = () => {
  const navigate = useNavigate();
  const stories = TopBasketballStories.data.TopBasketballStories || [];

  const handleStoryClick = (id) => {
    navigate(`/details/basketball/${id}`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Top Basketball Stories
            </h1>
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-orange-600 hover:text-orange-800 font-medium text-sm sm:text-base transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {stories.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-gray-600">No stories available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
            {stories.map((story) => (
              <article
                key={story.id}
                onClick={() => handleStoryClick(story.id)}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleStoryClick(story.id)}
                aria-label={`Read story: ${story.title}`}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={story.image || 'https://via.placeholder.com/600x400'}
                    alt={story.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {story.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                    {story.description || 'No description available.'}
                  </p>

                  <div className="mt-5 flex items-center justify-between text-xs text-gray-500">
                    <time>
                      {new Date(story.date).toLocaleDateString('en-US', {
                        weekday: 'short',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      Read More
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTopBasketballStories;