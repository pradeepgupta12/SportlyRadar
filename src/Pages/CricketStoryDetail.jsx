// // src/pages/CricketStoryDetail.js
// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft, Share2, Calendar, Clock } from 'lucide-react';
// import TopStories from '../data/TopStories.js';

// const CricketStoryDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const story = TopStories.data.TopStories.find(
//     (s) => s.id === parseInt(id) || s.id === id
//   );

//   // Handle Share
//   const handleShare = () => {
//     navigator.clipboard.writeText(window.location.href);
//     alert('Story link copied to clipboard!');
//   };

//   // If story not found
//   if (!story) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Story Not Found</h2>
//           <button
//             onClick={() => navigate(-1)}
//             className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mt-6"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Format date
//   const formattedDate = new Date(story.date).toLocaleDateString('en-US', {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   });

//   // Get 4 related stories (randomized, excluding current)
//   const relatedStories = TopStories.data.TopStories
//     .filter(s => s.id !== story.id)
//     .sort(() => 0.5 - Math.random())
//     .slice(0, 4);

//   const handleRelatedClick = (relatedId) => {
//     navigate(`/details/cricket/${relatedId}`);
//   };

//   return (
//     <div className="mx-auto max-w-7xl">
//       {/* Hero Image Section */}
//       <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
//         <img
//           src={story.image || 'https://via.placeholder.com/1400x800'}
//           alt={story.title}
//           className="w-full h-full object-cover"
//           loading="lazy"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
//       </section>

//       {/* Main Article Content */}
//       <article className="-mt-20 sm:-mt-32 lg:-mt-40 relative z-10 pb-20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

//             <div className="p-6 sm:p-8 lg:p-12">

//               {/* Back Button */}
//               <button
//                 onClick={() => navigate(-1)}
//                 className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 font-medium text-sm transition-colors"
//               >
//                 <ArrowLeft className="w-5 h-5" />
//                 Back to Stories
//               </button>

//               {/* Category Badge */}
//               <div className="inline-block bg-green-100 text-green-800 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
//                 CRICKET NEWS
//               </div>

//               {/* Title */}
//               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
//                 {story.title}
//               </h1>

//               {/* Meta Information */}
//               <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-10 text-sm">
//                 <div className="flex items-center gap-2">
//                   <Calendar className="w-4 h-4" />
//                   <time>{formattedDate}</time>
//                 </div>
//                 <span className="hidden sm:inline">•</span>
//                 <div className="flex items-center gap-2">
//                   <Clock className="w-4 h-4" />
//                   <span>5 min read</span>
//                 </div>
//               </div>

//               {/* Share Button */}
//               <div className="pb-8 border-b border-gray-200">
//                 <button
//                   onClick={handleShare}
//                   className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-full transition-all duration-200"
//                 >
//                   <Share2 className="w-5 h-5" />
//                   Share Story
//                 </button>
//               </div>

//               {/* Main Story Content */}
//               <div className="mt-10 prose prose-lg max-w-none text-gray-700 leading-relaxed">
//                 {story.fullContent ? (
//                   <div dangerouslySetInnerHTML={{ __html: story.fullContent }} />
//                 ) : story.content ? (
//                   <div>{story.content}</div>
//                 ) : (
//                   <>
//                     <p className="text-lg italic text-gray-600 mb-8">{story.description}</p>
                    
//                     {/* Placeholder rich content if no full article */}
//                     <div className="space-y-6 text-base">
//                       <p>
//                         {story.description}
//                       </p>
//                       <p>
//                         This is a developing story in the world of cricket. The impact of this event is being felt across teams, fans, and the cricketing fraternity worldwide.
//                       </p>
//                       <p>
//                         Stay tuned for more updates as the situation evolves. Our team is closely monitoring all official statements and reactions from players and boards.
//                       </p>
//                       <blockquote className="border-l-4 border-green-600 pl-6 italic text-gray-700 py-2">
//                         Cricket is more than just a game — it's a passion that unites millions.
//                       </blockquote>
//                       <p>
//                         Follow us for the latest cricket news, live scores, and in-depth analysis from around the globe.
//                       </p>
//                     </div>
//                   </>
//                 )}
//               </div>

//               {/* Related Stories Section */}
//               {relatedStories.length > 0 && (
//                 <div className="mt-16 pt-12 border-t-2 border-gray-200">
//                   <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
//                     Related Cricket Stories
//                   </h3>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {relatedStories.map((related) => (
//                       <div
//                         key={related.id}
//                         onClick={() => handleRelatedClick(related.id)}
//                         className="group cursor-pointer bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl hover:bg-white transition-all duration-300 border border-gray-200 hover:border-green-500"
//                       >
//                         <img
//                           src={related.image || 'https://via.placeholder.com/600x400'}
//                           alt={related.title}
//                           className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
//                           loading="lazy"
//                         />
//                         <div className="p-5">
//                           <h4 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-3 mb-3">
//                             {related.title}
//                           </h4>
//                           <p className="text-sm text-gray-600 line-clamp-2 mb-3">
//                             {related.description}
//                           </p>
//                           <div className="flex items-center text-xs text-gray-500">
//                             <Calendar className="w-3.5 h-3.5 mr-1" />
//                             {new Date(related.date).toLocaleDateString('en-US', {
//                               month: 'short',
//                               day: 'numeric',
//                             })}
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//             </div>
//           </div>
//         </div>
//       </article>
//     </div>
//   );
// };

// export default CricketStoryDetail;

// src/pages/CricketStoryDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Calendar, Clock } from 'lucide-react';
import TopStories from '../data/TopStories.js';
import SEO from '../components/SEO.jsx';

const CricketStoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const story = TopStories.data.TopStories.find(
    (s) => s.id === parseInt(id) || s.id === id
  );

  // Handle Share
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Story link copied to clipboard!');
  };

  // If story not found
  if (!story) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Story Not Found</h2>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mt-6"
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

  // Get 4 related stories (randomized, excluding current)
  const relatedStories = TopStories.data.TopStories
    .filter(s => s.id !== story.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  const handleRelatedClick = (relatedId) => {
    navigate(`/details/cricket/${relatedId}`);
  };

  // Generate dynamic SEO metadata
  const seoTitle = `${story.title} | Cricket News | SportlyRadar`;
  const seoDescription = story.description || `Read the latest cricket story: ${story.title}. Get insights, analysis and updates from the world of cricket.`;
  const seoKeywords = `cricket, ${story.title}, cricket news, sports story, ${story.title.split(' ').slice(0, 5).join(', ')}, cricket updates, cricket analysis`;

  return (
    <div className="mx-auto max-w-7xl">
      {/* SEO Component with dynamic story data */}
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonical={window.location.href}
        image={story.image || "https://sportlyradar.com/cricket-story-og-image.jpg"}
        url={window.location.href}
        type="article"
        publishedTime={new Date(story.date).toISOString()}
        author="SportlyRadar Cricket Team"
      />
      
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
              <div className="inline-block bg-green-100 text-green-800 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
                CRICKET NEWS
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
                    
                    {/* Placeholder rich content if no full article */}
                    <div className="space-y-6 text-base">
                      <p>
                        {story.description}
                      </p>
                      <p>
                        This is a developing story in the world of cricket. The impact of this event is being felt across teams, fans, and the cricketing fraternity worldwide.
                      </p>
                      <p>
                        Stay tuned for more updates as the situation evolves. Our team is closely monitoring all official statements and reactions from players and boards.
                      </p>
                      <blockquote className="border-l-4 border-green-600 pl-6 italic text-gray-700 py-2">
                        Cricket is more than just a game — it's a passion that unites millions.
                      </blockquote>
                      <p>
                        Follow us for the latest cricket news, live scores, and in-depth analysis from around the globe.
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Related Stories Section */}
              {relatedStories.length > 0 && (
                <div className="mt-16 pt-12 border-t-2 border-gray-200">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                    Related Cricket Stories
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {relatedStories.map((related) => (
                      <div
                        key={related.id}
                        onClick={() => handleRelatedClick(related.id)}
                        className="group cursor-pointer bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl hover:bg-white transition-all duration-300 border border-gray-200 hover:border-green-500"
                      >
                        <img
                          src={related.image || 'https://via.placeholder.com/600x400'}
                          alt={related.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="p-5">
                          <h4 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-3 mb-3">
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

export default CricketStoryDetail;