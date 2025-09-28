import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/blogData"; 
import Cards from "../components/Cards";
import PrimaryButton from "../components/PrimaryButton"; 

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-20 px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Blog not found</h1>
        <Link
          to="/blogs"
          className="mt-4 inline-block text-primary underline"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  const latestPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const whatsappNumber = "9654778889"; 
  const blogUrl = window.location.href; 
  const blogTitle = post.title;
  const message = `Hi! I’m interested in your blog "${blogTitle}". I found it here: ${blogUrl}. Can I know more about this?`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;


  return (
    <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* Sticky Social Icons */}
      <div className="hidden lg:flex flex-col fixed left-4 top-1/3 space-y-4 z-50">
        <a
          // href={`https://www.facebook.com/sharer/sharer.php?u=${blogUrl}`}
          href={`https://www.facebook.com/`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaFacebookF />
        </a>

        <a
          href={`https://twitter.com/`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaTwitter />
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Left Side Blog Content */}
      <article className="lg:col-span-2">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover rounded-xl mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">{post.content}</p>
        
      </article>

      {/* Right Side Sidebar */}
      <aside className="space-y-8">
        {/* Get a Quote Section */}
        {/* <div className="bg-primary text-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Get a Quote</h3>
          <p className="text-sm mb-6">
            Need a custom solution? Contact us today for a free consultation
            and quote.
          </p>
          <PrimaryButton to="/contact">Request Quote</PrimaryButton>
        </div> */}

        {/* Latest Blogs */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Latest Blogs
          </h3>
          <div className="flex flex-col gap-6 mb-8">
            {latestPosts.map((blog, index) => (
              <Link key={index} to={`/blogs/${blog.slug}`}>
                <Cards
                  image={blog.image}
                  title={blog.title}
                  description={blog.description.substring(0, 80) + "..."}
                  features={[]} // no features needed
                  buttonText="Read More"
                />
              </Link>
            ))}
          </div>
        </div>  
      </aside>
    </div>
  );
};

export default BlogDetail;
