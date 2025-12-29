// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft, Share2, Calendar, ExternalLink } from 'lucide-react';
// import LatestNews from '../data/LatestNews.js';

// const LatestSportNewsDetails = () => {
//   const { title } = useParams();
//   const navigate = useNavigate();

//   // Decode the title and find the article
//   const decodedTitle = decodeURIComponent(title);
//   const article = LatestNews.data.LatestNews.find(
//     (item) => item.title === decodedTitle
//   );

//   if (!article) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">News Not Found</h2>
//           <button
//             onClick={() => navigate(-1)}
//             className="text-blue-600 hover:underline flex items-center gap-2 mx-auto"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const handleShare = () => {
//     navigator.clipboard.writeText(window.location.href);
//     alert('Link copied to clipboard!'); // You can replace with toast later
//   };

//   const formattedDate = new Date(article.published).toLocaleDateString('en-US', {
//     month: 'long',
//     day: 'numeric',
//     year: 'numeric',
//   });

//   return (
//     <div className="mx-auto max-w-6xl   bg-gray-50">
//       {/* Navbar can be added here if needed */}

//       {/* Hero Image */}
//       <section className="relative h-96 md:h-[500px]  overflow-hidden">
//         <img
//           src={article.image || 'https://via.placeholder.com/1200x600'}
//           alt={article.title}
//           className="w-full h-full object-cover bg-black/50 opacity-80"
//           loading="lazy"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
//       </section>

//       {/* Main Content */}
//       <article className="-mt-20 md:-mt-32 relative z-10 pb-12">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//             <div className="p-6 sm:p-8 md:p-12">
//               {/* Back Button */}
//               <button
//                 onClick={() => navigate(-1)}
//                 className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
//               >
//                 <ArrowLeft className="w-5 h-5" />
//                 <span className="font-medium">Back</span>
//               </button>

//               {/* Title */}
//               <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
//                 {article.title}
//               </h1>

//               {/* Meta Info */}
//               <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
//                 <div className="flex items-center gap-2">
//                   <Calendar className="w-5 h-5" />
//                   <span>{formattedDate}</span>
//                 </div>
//                 <span className="hidden sm:inline">•</span>
//                 <a
//                   href={`https://${article.source}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-blue-600 hover:underline"
//                 >
//                   <ExternalLink className="w-4 h-4" />
//                   <span>Source: {article.source}</span>
//                 </a>
//               </div>

//               {/* Share Button */}
//               <div className="mb-10">
//                 <button
//                   onClick={handleShare}
//                   className="inline-flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
//                 >
//                   <Share2 className="w-5 h-5" />
//                   <span className="font-medium">Share Article</span>
//                 </button>
//               </div>

//               {/* Full Description (as content) */}
//               <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
//                 <p className="text-lg sm:text-xl text-gray-700">{article.description}</p>
//                 {/* Agar future mein full content add karna ho to yahan daal sakte ho */}
//               </div>

//               {/* Optional: Add more sections like related news later */}
//             </div>
//           </div>
//         </div>
//       </article>

//       {/* Footer can be added here */}
//     </div>
//   );
// };

// export default LatestSportNewsDetails;

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft, Share2, ExternalLink } from 'lucide-react';

import LatestNews from '../data/LatestNews.js';

const LatestSportNewsDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const decodedTitle = decodeURIComponent(title || '');
  const article = LatestNews.data.LatestNews.find(
    (item) => item.title === decodedTitle
  );

  // If article not found
  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">News Not Found</h2>
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:underline flex items-center gap-2 mx-auto mt-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
  };

  const formattedDate = new Date(article.published).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

  // Get 4 related articles (excluding current one)
  const relatedArticles = LatestNews.data.LatestNews
    .filter((item) => item.title !== article.title)
    .sort(() => 0.5 - Math.random()) // Random shuffle
    .slice(0, 4);

  const handleRelatedClick = (relatedTitle) => {
    const encodedTitle = encodeURIComponent(relatedTitle);
    navigate(`/news-details/${encodedTitle}`);
  };

  return (
    <div className="mx-auto max-w-6xl">
      {/* Hero Image */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src={article.image || 'https://via.placeholder.com/1200x600'}
          alt={article.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </section>

      {/* Main Content */}
      <article className="-mt-32 relative z-10 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6 sm:p-8 md:p-12">

              {/* Back Button */}
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>

              {/* Source Badge */}
              <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Source: {article.source}
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {article.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formattedDate}</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <a
                  href={`https://${article.source}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Source
                </a>
              </div>

              {/* Share Button */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-full transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                  Share Article
                </button>
              </div>

              {/* Article Content */}
              <div className="mt-10 prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-gray-700">
                  {article.description}
                </p>
              </div>

              {/* Related News - Dynamic from JSON */}
              {relatedArticles.length > 0 && (
                <div className="mt-16 pt-12 border-t border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Related News</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedArticles.map((related) => (
                      <div
                        key={related.title}
                        onClick={() => handleRelatedClick(related.title)}
                        className="border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer bg-gray-50 hover:bg-white"
                      >
                        {/* Small thumbnail */}
                        <img
                          src={related.image || 'https://via.placeholder.com/300x200'}
                          alt={related.title}
                          className="w-full h-40 object-cover rounded-lg mb-4"
                          loading="lazy"
                        />

                        {/* Source tag */}
                        <div className="text-xs font-semibold text-blue-600 mb-2">
                          {related.source}
                        </div>

                        {/* Title */}
                        <h4 className="font-semibold text-gray-800 hover:text-blue-600 transition-colors line-clamp-3">
                          {related.title}
                        </h4>

                        {/* Short description */}
                        <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                          {related.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </article>

      <div className="h-16"></div>
    </div>
  );
};

export default LatestSportNewsDetails;