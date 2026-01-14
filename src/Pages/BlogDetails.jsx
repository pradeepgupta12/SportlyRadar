


// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft, Share2, Clock, User, ExternalLink } from 'lucide-react';
// import { blogs } from "../data/blogs";

// const BlogDetails = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();

//   const blog = blogs.find(b => b.slug === slug);

//   // If blog not found
//   if (!blog) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog Not Found</h2>
//           <button
//             onClick={() => navigate(-1)}
//             className="text-blue-600 hover:underline flex items-center gap-2 mx-auto mt-4"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Handle Share
//   const handleShare = () => {
//     navigator.clipboard.writeText(window.location.href);
//     alert('Blog link copied to clipboard!'); // You can replace with toast later
//   };

//   // Format date if available, otherwise show read time
//   const metaText = blog.date 
//     ? new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
//     : blog.readTime;

//   // Get 4 related blogs (excluding current)
//   const relatedBlogs = blogs
//     .filter(b => b.slug !== slug)
//     .sort(() => 0.5 - Math.random())
//     .slice(0, 4);

//   const handleRelatedClick = (relatedSlug) => {
//     navigate(`/blogs/${relatedSlug}`);
//   };

//   return (
//     <div className="mx-auto max-w-7xl">
//       {/* Hero Image */}
//       <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
//         <img
//           src={blog.thumbnail}
//           alt={blog.title}
//           className="w-full h-full object-cover"
//           loading="lazy"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
//       </section>

//       {/* Main Content */}
//       <article className="-mt-24 sm:-mt-32 lg:-mt-40 relative z-10 pb-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//             <div className="p-6 sm:p-8 md:p-12">

//               {/* Back Button */}
//               <button
//                 onClick={() => navigate(-1)}
//                 className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors text-sm font-medium"
//               >
//                 <ArrowLeft className="w-5 h-5" />
//                 Back
//               </button>

//               {/* Category Badge */}
//               <div className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
//                 {blog.categoryLabel}
//               </div>

//               {/* Title */}
//               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
//                 {blog.title}
//               </h1>

//               {/* Meta Info */}
//               <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 text-sm">
//                 <div className="flex items-center gap-2">
//                   <User className="w-4 h-4" />
//                   <span>{blog.author}</span>
//                 </div>
//                 <span className="hidden sm:inline">•</span>
//                 <div className="flex items-center gap-2">
//                   <Clock className="w-4 h-4" />
//                   <span>{blog.readTime}</span>
//                 </div>
//                 {blog.date && (
//                   <>
//                     <span className="hidden sm:inline">•</span>
//                     <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</span>
//                   </>
//                 )}
//               </div>

//               {/* Share Button */}
//               <div className="pt-4 border-t border-gray-200">
//                 <button
//                   onClick={handleShare}
//                   className="inline-flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-full transition-colors"
//                 >
//                   <Share2 className="w-5 h-5" />
//                   Share Blog
//                 </button>
//               </div>

//               {/* Blog Content */}
//               <div className="mt-10 prose prose-lg max-w-none text-gray-700">
//                 <div dangerouslySetInnerHTML={{ __html: blog.content }} />
//               </div>

//               {/* Related Blogs */}
//               {relatedBlogs.length > 0 && (
//                 <div className="mt-16 pt-12 border-t border-gray-200">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Blogs</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {relatedBlogs.map((related) => (
//                       <div
//                         key={related.slug}
//                         onClick={() => handleRelatedClick(related.slug)}
//                         className="border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-indigo-300 transition-all cursor-pointer bg-gray-50 hover:bg-white"
//                       >
//                         {/* Thumbnail */}
//                         <img
//                           src={related.thumbnail}
//                           alt={related.title}
//                           className="w-full h-40 object-cover rounded-lg mb-4"
//                           loading="lazy"
//                         />

//                         {/* Category */}
//                         <div className="text-xs font-semibold text-indigo-600 mb-2">
//                           {related.categoryLabel}
//                         </div>

//                         {/* Title */}
//                         <h4 className="font-semibold text-gray-800 hover:text-indigo-600 transition-colors line-clamp-3">
//                           {related.title}
//                         </h4>

//                         {/* Short excerpt */}
//                         <p className="text-sm text-gray-600 mt-3 line-clamp-2">
//                           {related.excerpt || related.content.replace(/<[^>]*>/g, '').substring(0, 120) + '...'}
//                         </p>

//                         {/* Meta */}
//                         <div className="flex items-center gap-3 text-xs text-gray-500 mt-3">
//                           <span>{related.author}</span>
//                           <span>•</span>
//                           <span>{related.readTime}</span>
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

//       <div className="h-16"></div>
//     </div>
//   );
// };

// export default BlogDetails;


import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Clock, User, ExternalLink } from 'lucide-react';
import { blogs } from "../data/blogs";
import SEO from '../components/SEO.jsx';

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find(b => b.slug === slug);

  // If blog not found
  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog Not Found</h2>
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

  // Handle Share
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Blog link copied to clipboard!'); // You can replace with toast later
  };

  // Format date if available, otherwise show read time
  const metaText = blog.date 
    ? new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
    : blog.readTime;

  // Get 4 related blogs (excluding current)
  const relatedBlogs = blogs
    .filter(b => b.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  const handleRelatedClick = (relatedSlug) => {
    navigate(`/blogs/${relatedSlug}`);
  };

  // Generate dynamic SEO metadata
  const seoTitle = `${blog.title} | Blog | SportlyRadar`;
  // Create description from excerpt or content (remove HTML tags)
  const seoDescription = blog.excerpt || blog.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...';
  const seoKeywords = `${blog.categoryLabel}, ${blog.title.split(' ').slice(0, 5).join(', ')}, sports blog, ${blog.categoryLabel.toLowerCase()} blog, sports articles`;

  return (
    <div className="mx-auto max-w-7xl">
      {/* SEO Component with dynamic blog data */}
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonical={window.location.href}
        image={blog.thumbnail || "https://sportlyradar.com/blog-og-image.jpg"}
        url={window.location.href}
        type="article"
        publishedTime={blog.date ? new Date(blog.date).toISOString() : new Date().toISOString()}
        author={blog.author || "SportlyRadar"}
      />
      
      {/* Hero Image */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </section>

      {/* Main Content */}
      <article className="-mt-24 sm:-mt-32 lg:-mt-40 relative z-10 pb-16">
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

              {/* Category Badge */}
              <div className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {blog.categoryLabel}
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {blog.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
                {blog.date && (
                  <>
                    <span className="hidden sm:inline">•</span>
                    <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</span>
                  </>
                )}
              </div>

              {/* Share Button */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-full transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                  Share Blog
                </button>
              </div>

              {/* Blog Content */}
              <div className="mt-10 prose prose-lg max-w-none text-gray-700">
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </div>

              {/* Related Blogs */}
              {relatedBlogs.length > 0 && (
                <div className="mt-16 pt-12 border-t border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Blogs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedBlogs.map((related) => (
                      <div
                        key={related.slug}
                        onClick={() => handleRelatedClick(related.slug)}
                        className="border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-indigo-300 transition-all cursor-pointer bg-gray-50 hover:bg-white"
                      >
                        {/* Thumbnail */}
                        <img
                          src={related.thumbnail}
                          alt={related.title}
                          className="w-full h-40 object-cover rounded-lg mb-4"
                          loading="lazy"
                        />

                        {/* Category */}
                        <div className="text-xs font-semibold text-indigo-600 mb-2">
                          {related.categoryLabel}
                        </div>

                        {/* Title */}
                        <h4 className="font-semibold text-gray-800 hover:text-indigo-600 transition-colors line-clamp-3">
                          {related.title}
                        </h4>

                        {/* Short excerpt */}
                        <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                          {related.excerpt || related.content.replace(/<[^>]*>/g, '').substring(0, 120) + '...'}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-3">
                          <span>{related.author}</span>
                          <span>•</span>
                          <span>{related.readTime}</span>
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

      <div className="h-16"></div>
    </div>
  );
};

export default BlogDetails;