// import React, { useLayoutEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import TopBasketballStories from '../data/TopBasketballStories';

// const BasketballStoryDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Reset scroll position synchronously before painting
//   useLayoutEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]);

//   const article = TopBasketballStories.data.TopBasketballStories.find(
//     (item) => String(item.id) === id
//   );

//   if (!article) {
//     return (
//       <div className="w-full max-w-5xl mx-auto py-8 px-4 text-center">
//         <h2 className="text-2xl font-semibold text-gray-800">Article Not Found</h2>
//         <p className="text-gray-600 mt-4">The article you are looking for does not exist.</p>
//         <button
//           className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
//           onClick={() => navigate('/')}
//         >
//           Back to Home
//         </button>
//       </div>
//     );
//   }

//   const relatedStories = TopBasketballStories.data.TopBasketballStories
//     .filter((item) => String(item.id) !== id)
//     .sort((a, b) => new Date(b.date) - new Date(a.date))
//     .slice(0, 3);

//   return (
//     <div className="w-full max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
//       <h2 className="text-lg sm:text-xl font-bold text-black p-2 rounded mb-4">
//         Top Basketball Stories
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-4">
//         <article className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
//           <img
//             src={article.image || 'https://via.placeholder.com/150'}
//             alt={article.title}
//             className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg mb-6"
//           />
//           <h1 className="text-lg sm:text-xl font-bold mb-4 text-black">
//             {article.title}
//           </h1>
//           <div className="flex flex-col sm:flex-row sm:justify-between text-gray-500 text-sm sm:text-base mb-6">
//             <p>
//               {new Date(article.date).toLocaleDateString('en-US', {
//                 month: 'long',
//                 day: '2-digit',
//                 year: 'numeric'
//               })}
//             </p>
//           </div>
//           <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
//             {article.description}
//           </p>
//           <button
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm sm:text-base"
//             onClick={() => navigate('/')}
//           >
//             Back to Home
//           </button>
//         </article>

//         <aside className="hidden md:block">
//           <div className="sticky top-20 flex flex-col gap-4">
//             <div className="bg-gray-200 rounded-lg p-4 text-center h-[250px] flex items-center justify-center">
//               <p className="text-gray-600 text-sm">Advertisement (250x250)</p>
//             </div>
//             <div className="flex flex-col gap-2">
//               <h3 className="text-sm font-semibold text-gray-800">Related Stories</h3>
//               {relatedStories.map((story) => (
//                 <div
//                   key={story.id}
//                   className="bg-white rounded-lg shadow-sm p-3 flex gap-2 cursor-pointer hover:bg-blue-50 transition-colors"
//                   onClick={() => navigate(`/details/basketball/${story.id}`)}
//                 >
//                   <img
//                     src={story.image || 'https://via.placeholder.com/150'}
//                     alt={story.title}
//                     className="w-16 h-16 object-cover rounded flex-shrink-0"
//                   />
//                   <div className="flex flex-col gap-1 flex-1">
//                     <p className="text-sm font-medium text-gray-700 line-clamp-2">{story.title}</p>
//                     <p className="text-xs text-gray-500">
//                       {new Date(story.date).toLocaleDateString('en-US', {
//                         month: 'short',
//                         day: '2-digit',
//                         year: 'numeric'
//                       })}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="bg-gray-200 rounded-lg p-4 text-center h-[250px] flex items-center justify-center">
//               <p className="text-gray-600 text-sm">Advertisement (250x250)</p>
//             </div>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default BasketballStoryDetails;


import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Calendar, Clock } from 'lucide-react';
import TopBasketballStories from '../data/TopBasketballStories.js';

const BasketballStoryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const story = TopBasketballStories.data.TopBasketballStories.find(
    (s) => String(s.id) === id
  );

  // Handle Share
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Story link copied to clipboard!');
  };

  // If story not found
  if (!story) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Story Not Found</h2>
          <p className="text-gray-600 mb-8">The article you are looking for does not exist.</p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Format date
  const formattedDate = new Date(story.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Get 4 related stories (latest first, excluding current)
  const relatedStories = TopBasketballStories.data.TopBasketballStories
    .filter(s => String(s.id) !== id)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  const handleRelatedClick = (relatedId) => {
    navigate(`/details/basketball/${relatedId}`);
  };

  return (
    <div className="mx-auto max-w-7xl">
      {/* Hero Image Section */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src={story.image || 'https://via.placeholder.com/1400x800'}
          alt={story.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </section>

      {/* Main Article Content */}
      <article className="-mt-20 sm:-mt-32 lg:-mt-40 relative z-10 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

            <div className="p-6 sm:p-8 lg:p-12">

              {/* Back Button */}
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 font-medium text-sm transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Stories
              </button>

              {/* Category Badge */}
              <div className="inline-block bg-orange-100 text-orange-800 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
                BASKETBALL NEWS
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                {story.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-10 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time>{formattedDate}</time>
                </div>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
              </div>

              {/* Share Button */}
              <div className="pb-8 border-b border-gray-200">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-full transition-all duration-200"
                >
                  <Share2 className="w-5 h-5" />
                  Share Story
                </button>
              </div>

              {/* Main Story Content */}
              <div className="mt-10 prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {story.fullContent ? (
                  <div dangerouslySetInnerHTML={{ __html: story.fullContent }} />
                ) : story.content ? (
                  <div>{story.content}</div>
                ) : (
                  <>
                    <p className="text-lg italic text-gray-600 mb-8">{story.description}</p>
                    
                    {/* Placeholder rich content */}
                    <div className="space-y-6 text-base">
                      <p>{story.description}</p>
                      <p>
                        This is a major moment in basketball. The news has created massive buzz across the NBA community, with fans, analysts, and players reacting instantly.
                      </p>
                      <p>
                        The impact of this story will be felt throughout the season. Stay with us as we bring you reactions, expert analysis, and updates.
                      </p>
                      <blockquote className="border-l-4 border-orange-600 pl-6 italic text-gray-700 py-2">
                        "Basketball is more than a game — it's a lifestyle, a culture, a passion." — Legend
                      </blockquote>
                      <p>
                        Follow for the latest NBA trades, game highlights, player interviews, and in-depth coverage.
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Related Stories Section */}
              {relatedStories.length > 0 && (
                <div className="mt-16 pt-12 border-t-2 border-gray-200">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                    Related Basketball Stories
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {relatedStories.map((related) => (
                      <div
                        key={related.id}
                        onClick={() => handleRelatedClick(related.id)}
                        className="group cursor-pointer bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl hover:bg-white transition-all duration-300 border border-gray-200 hover:border-orange-500"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleRelatedClick(related.id)}
                      >
                        <img
                          src={related.image || 'https://via.placeholder.com/600x400'}
                          alt={related.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="p-5">
                          <h4 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-3 mb-3">
                            {related.title}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                            {related.description}
                          </p>
                          <div className="flex items-center text-xs text-gray-500">
                            <Calendar className="w-3.5 h-3.5 mr-1" />
                            {new Date(related.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BasketballStoryDetails;