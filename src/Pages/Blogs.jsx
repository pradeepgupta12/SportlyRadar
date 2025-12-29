import { blogs } from "../data/blogs";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-2">The SportlyInsights</h1>
      <p className="text-gray-500 mb-8">
        Deep analysis, stories and opinions from the world of sports
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blogs/${blog.slug}`}
            className=" rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-white"
          >
            {/* Fixed height thumbnail */}
            <div className="w-full h-48 flex-shrink-0">
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content area - grows equally */}
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-xs text-indigo-600 font-semibold uppercase tracking-wider">
                {blog.categoryLabel}
              </span>

              <h2 className="font-bold text-lg mt-3 line-clamp-2">
                {blog.title}
              </h2>

              <p className="text-sm text-gray-600 mt-2 flex-grow line-clamp-3">
                {blog.excerpt}
              </p>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400">
                  {blog.readTime} • {blog.author}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}