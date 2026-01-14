// // src/pages/AllTopCricketStories.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import TopStories from '../data/TopStories.js'; // Adjust path if needed

// const AllTopCricketStories = () => {
//   const navigate = useNavigate();
//   const stories = TopStories.data.TopStories;

//   const handleStoryClick = (id) => {
//     navigate(`/details/cricket/${id}`);
//   };

//   const handleBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header Section */}
//       <div className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex items-center justify-between">
//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
//               Top Cricket Stories
//             </h1>
//             <button
//               onClick={handleBack}
//               className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base transition-colors"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//               Back
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Stories Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
//         {stories.length === 0 ? (
//           <div className="text-center py-20">
//             <p className="text-lg text-gray-600">No stories available at the moment.</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
//             {stories.map((story) => (
//               <article
//                 key={story.id}
//                 onClick={() => handleStoryClick(story.id)}
//                 className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
//               >
//                 {/* Image */}
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={story.image || 'https://via.placeholder.com/600x400'}
//                     alt={story.title}
//                     className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>

//                 {/* Content */}
//                 <div className="p-4 sm:p-6">
//                   <h3 className="text-base sm:text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
//                     {story.title}
//                   </h3>

//                   <p className="mt-3 text-sm text-gray-600 line-clamp-3">
//                     {story.description}
//                   </p>

//                   <div className="mt-5 flex items-center justify-between text-xs text-gray-500">
//                     <time>
//                       {new Date(story.date).toLocaleDateString('en-US', {
//                         weekday: 'short',
//                         day: 'numeric',
//                         month: 'long',
//                         year: 'numeric',
//                       })}
//                     </time>
//                     <span className="flex items-center gap-1">
//                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//                         <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
//                       </svg>
//                       Read More
//                     </span>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllTopCricketStories;


// src/pages/AllTopCricketStories.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopStories from '../data/TopStories.js'; // Adjust path if needed
import SEO from '../components/SEO.jsx';

const AllTopCricketStories = () => {
  const navigate = useNavigate();
  const stories = TopStories.data.TopStories;

  const handleStoryClick = (id) => {
    navigate(`/details/cricket/${id}`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Component */}
      <SEO 
        title="Top Cricket Stories | SportlyRadar"
        description="Discover the latest cricket stories, match highlights, player performances, tournament updates, and exclusive cricket content from around the world."
        keywords="cricket stories, cricket news, match highlights, player performances, tournament updates, cricket content, cricket coverage, IPL news, international cricket"
        canonical={window.location.href}
        image="https://sportlyradar.com/cricket-stories-og-image.jpg"
        url={window.location.href}
        type="article"
      />
      
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Top Cricket Stories
            </h1>
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base transition-colors"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {stories.map((story) => (
              <article
                key={story.id}
                onClick={() => handleStoryClick(story.id)}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={story.image || 'https://via.placeholder.com/600x400'}
                    alt={story.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {story.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                    {story.description}
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

export default AllTopCricketStories;