import { useState } from "react";
import { galleryCategories, galleryImages } from "../utils/galleryData";
import { FiSearch } from "react-icons/fi"; // Import search icon

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="pt-28 pb-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {galleryCategories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              activeCategory === cat
                ? "bg-primary text-white"
                : "bg-gray-100 hover:bg-primary hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
            onClick={() => openModal(index)}
          >
            <img
              src={img.src}
              alt={img.category}
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover Search Icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity">
              <FiSearch className="text-white text-4xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full px-4 flex items-center">
            {/* Left Arrow */}
            <button
  onClick={prevImage}
  className="absolute left-2 md:left-[-60px] text-white text-6xl md:text-7xl font-extrabold hover:text-primary transition"
>
  ‹
</button>

            {/* Image */}
            <img
              src={filteredImages[selectedIndex].src}
              alt="Selected"
              className="max-w-full max-h-[90vh] w-auto h-auto mx-auto rounded-lg shadow-lg"
            />

            {/* Right Arrow */}
            <button
  onClick={nextImage}
  className="absolute right-2 md:right-[-60px] text-white text-6xl md:text-7xl font-extrabold hover:text-primary transition"
>
  ›
</button>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-red-400"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
