import { Link } from "react-router-dom";
import blogPosts from "../data/blogData";

const BlogList = () => {
  // Sort blogs descending (latest first)
  const sortedBlogs = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-10 text-center">Our Blogs</h1>
      
      <div className="grid md:grid-cols-2 gap-10">
        {sortedBlogs.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Blog Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Blog Title */}
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>

              {/* Short Description */}
              <p className="text-gray-600 mb-4">{post.excerpt}</p>

              {/* Read More */}
              <Link
                to={`/blogs/${post.slug}`}
                className="font-bold text-blue-600 hover:underline"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
