import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Download, Mail, Phone } from "lucide-react";
import { HomeHeroBannerImg } from "../utils/utils";
import PrimaryButton from "./PrimaryButton";
import PrimaryHeading from "./PrimaryHeading";
import Description from "./Description";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <section className="relative w-full h-[95vh] overflow-hidden text-center flex items-center justify-center">
      {/* Swiper Background */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="absolute inset-0 h-[95vh]"
        style={{ zIndex: 0 }}
      >
        {HomeHeroBannerImg.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-[95vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10 h-[95vh]"></div>

      {/* Main Content */}
      <div className="relative z-20 text-white px-4 max-w-4xl">
        <PrimaryHeading className="mb-4 text-4xl md:text-4xl lg:text-5xl">
          VayuClean Technologies
        </PrimaryHeading>
        <Description className="text-white mb-5 lg:max-w-2xl mx-auto text-sm md:text-base lg:text-lg">
          Delivering cleanroom solutions engineered for safety, compliance, and efficiency.
        </Description>
        
        <div className="flex justify-center items-center gap-8 max-md:flex-col max-md:gap-4">
          <PrimaryButton to="/categories">Explore Products</PrimaryButton>
          <a
            href="/catalogue.pdf"
            download
            className="inline-flex items-center justify-center gap-2 text-primary hover:text-[#009dbb] font-semibold transition duration-200 text-sm sm:text-base"
          >
            {/* <Download className="w-4 h-4" />
            Download Catalogue */}
          </a>
        </div>
      </div>

      {/* Bottom Info */}
      <div>
        <div className="absolute text-start bottom-6 left-4 sm:left-10 flex flex-col md:flex-row gap-2 sm:gap-6 text-xs sm:text-sm text-primary z-20">
          <h6>ISO 9001 Certified</h6>
          <h6>500+ Clients</h6>
          <h6>5+ Years</h6>
        </div>

        <div className="absolute text-start bottom-6 right-4 sm:right-10 flex flex-col md:flex-row gap-3 sm:gap-6 text-xs sm:text-sm text-primary z-20">
          <a
            href="tel:+919967696475"
            className="flex items-center gap-2 hover:underline cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            +91 9967696475 / 9967640968
          </a>

          <a
            href="mailto:Sachin.tiwari@vayumail.com"
            className="flex items-center gap-2 hover:underline cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            info@vayucleantechnologies.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
