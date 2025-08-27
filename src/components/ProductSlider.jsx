import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Description from "./Description";
import SectionTitle from "./SectionTitle";
import PrimaryButton from "./PrimaryButton";
import Section from "./Section";
import ProductCard from "./ProductCard";
import { products } from "../utils/products"; // ✅ use products
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const ProductSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Section className="bg-gray overflow-hidden">
      <div className="text-center mb-10">
        <SectionTitle className="mb-6 text-center">
          Our Products
        </SectionTitle>
        <Description className="lg:max-w-3xl mx-auto mb-5">
          Comprehensive solutions covering every aspect of pharmaceutical
          manufacturing, from raw materials to finished products.
        </Description>
      </div>

      {/* Swiper */}
      <Swiper
        className="overflow-visible"
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
          1280: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="h-auto flex">
            <Link
            key={product.id}
            to={`/category/${product.category}/${product.slug}`}
            className="w-full"
          >
            <ProductCard key={product.id} product={product} className="h-full" />
          </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between mt-5 md:mt-12">
        <PrimaryButton to="/categories"> View more</PrimaryButton>
        <div className="flex items-center gap-2">
          <button
            ref={prevRef}
            className="px-3 py-3 rounded-[7px] bg-primary hover:text-blue-500 flex items-center justify-center"
          >
            <ArrowLeft className="text-white" />
          </button>
          <button
            ref={nextRef}
            className="px-3 py-3 rounded-[7px] bg-primary hover:text-blue-500 flex items-center justify-center"
          >
            <ArrowRight className="text-white" />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default ProductSlider;
