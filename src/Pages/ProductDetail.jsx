// src/pages/ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/products";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom"; 
import { categories } from "../utils/products";
const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const category = categories.find((cat) => cat.name === product.category);

  if (!product) {
    return (
      <Section>
        <SectionTitle className="text-red-600 text-center md:pt-32 pt-28">
          Product Not Found
        </SectionTitle>
        <p className="text-center text-gray-600">
          The product you are looking for does not exist.
        </p>
      </Section>
    );
  }

  return (
    <>
      <Section className="bg-white md:pt-32 pt-28">
        {/* ✅ Back Button */}
        <div className="mb-6">
            
            {category ? (
              <Link
                to={`/category/${category.slug}`}
                className="inline-block px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
              >
                ← Back to {product.category}
                
              </Link>
            ) : (
              product.category
            )}
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* ✅ Product Image Slider */} 
          <div className="w-full h-[500px] relative">
            {Array.isArray(product.imagesslide) && product.imagesslide.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                style={{
                  "--swiper-navigation-color": "#fff",  // arrow color (white)
                  "--swiper-pagination-color": "#000",  // pagination dot color
                }}
                className="w-full h-full rounded-lg shadow-md bg-white"
              >
                {product.imagesslide.map((img, idx) => (
                  <SwiperSlide key={idx} className="flex items-center justify-center">
                    <img
                      src={img}
                      alt={`${product.name} - ${idx + 1}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-lg shadow-md"
              />
            )}

            {/* Custom Style for Arrows */}
            <style jsx>{`
              .swiper-button-next,
              .swiper-button-prev {
                background: rgba(0, 0, 0, 0.6); /* dark background */
                color: #fff !important;          /* arrow color white */
                padding: 20px;
                border-radius: 50%;
              }
              .swiper-button-next::after,
              .swiper-button-prev::after {
                font-size: 20px !important;      /* arrow size */
                font-weight: bold;
              }
            `}</style>
          </div>


          {/* Product Info */}
          <div>
            <SectionTitle className="mb-4">{product.name}</SectionTitle>
            <div className="text-gray-700 mb-4 whitespace-pre-line">
              {product.description2}
            </div>

            <p className="text-sm text-gray-500">
              Category:{" "}
              {category ? (
                <Link
                  to={`/category/${category.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {product.category}
                </Link>
              ) : (
                product.category
              )}
            </p>
          </div>
        </div>
      </Section>

      {/* Product List */}
      {Array.isArray(product.list) && product.list.length > 0 && (
        <Section className="bg-white lg:pt-0">
          <SectionTitle className="mb-6 text-center text-base font-semibold">
            {product.listdesc}
          </SectionTitle>

          <ul className="p-4 sm:p-6 md:p-10 bg-gray rounded-lg">
            {product.list.map((item, index) => (
              <li
                key={index}
                className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-4 p-2 border-b border-[#c3c3c3]"
              >
                {/* Title column */}
                <h6 className="text-base sm:text-lg font-semibold text-gray-800">
                  {item.title}
                </h6>

                {/* Description column */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          {/* ✅ Optional Accessories Section */} 
          {Array.isArray(product.optional) && product.optional.length > 0 && (
            <div className="bg-yellow-50 rounded-lg p-6 mt-4">
              {/* Small Title */}
              <h6 className="mb-4 text-sm font-semibold text-gray-800">
                Optional Accessories
              </h6>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
                {product.optional.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* ✅ applications Section */} 
          {Array.isArray(product.features) && product.features.length > 0 && (
            <div className="bg-yellow-50 rounded-lg p-6 mt-4">
              {/* Small Title */}
              <h6 className="mb-4 text-sm font-semibold text-gray-800">
               Features
              </h6>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
                {product.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* ✅ applications Section */} 
          {Array.isArray(product.applications) && product.applications.length > 0 && (
            <div className="bg-yellow-50 rounded-lg p-6 mt-4">
              {/* Small Title */}
              <h6 className="mb-4 text-sm font-semibold text-gray-800">
               Applications
              </h6>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
                {product.applications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {/* ✅ Operation Sequence */} 
          {Array.isArray(product.operation) && product.operation.length > 0 && (
            <div className="bg-yellow-50 rounded-lg p-6 mt-4">
              {/* Small Title */}
              <h6 className="mb-4 text-sm font-semibold text-gray-800">
               operation Sequence
              </h6>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
                {product.operation.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {/* ✅ Capacity Section */} 
          {Array.isArray(product.capacity) && product.capacity.length > 0 && (
            <div className="bg-yellow-50 rounded-lg p-6 mt-4">
              {/* Small Title */}
              <h6 className="mb-4 text-sm font-semibold text-gray-800">
               Capacity
              </h6>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
                {product.capacity.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </Section>
      )}
    </>
  );
};

export default ProductDetail;
