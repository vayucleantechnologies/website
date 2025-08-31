import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

import { 
  AFRICURE_PHARMACEUTICALS_INDIA_PVT_LTD,
  AKUMS_DRUGS_PHARMACEUTICALS_LTD,AURINKO_HEALTHCARE_PRIVATE_LIMITED,BAROQUE_PHARMACEUTICALS_PVT_LTD,
  c28,
  c42,
  c56,
  c67,
  c69,
  CADILA_PHARMACEUTICALS_LTD,
  CENTECH_ENGINEERING_GROUP,
  CIRON_DRUGS_PHARMACEUTICALS_PVT_LTD,
  EAMON_DRUGS_PRIVATE_LIMITED,
  Farmson_Basic_Drugs_Pvt_Ltd,
  ERAWAT_PHARMA_LIMITED,
  FUTURA_HEALTHCARE_REMEDIES_PRIVATE_LIMITED,
  HALEWOOD_LABORATORIES_PVT_LTD,
  SANCTUS_DRUGS_PHARMACEUTICALS_PVT_LTD,
  SILVER_LINE_LABORATORIES,
  ULTRA_DRUGS_PVT_LTD,
  WAY_2_INNOVATIONS_HEALTHCARE_PVT_LTD,
  ZENITH_DRUGS_PVT_LTD,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
  client16,
  client17,
  client18,
  client19,
  client20,
  client21,
  client22,
  client23,
  client24,
  client25,
  client26,
  client27,
  client28,
 } from "../utils/utils";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Description from "./Description";
import PrimaryButton from "./PrimaryButton";

const logos = [
  AFRICURE_PHARMACEUTICALS_INDIA_PVT_LTD,
  AKUMS_DRUGS_PHARMACEUTICALS_LTD,AURINKO_HEALTHCARE_PRIVATE_LIMITED,BAROQUE_PHARMACEUTICALS_PVT_LTD,
  c28,
  c42,
  c56,
  c67,
  c69,
  CADILA_PHARMACEUTICALS_LTD,
  CENTECH_ENGINEERING_GROUP,
  CIRON_DRUGS_PHARMACEUTICALS_PVT_LTD,
  EAMON_DRUGS_PRIVATE_LIMITED,
  Farmson_Basic_Drugs_Pvt_Ltd,
  ERAWAT_PHARMA_LIMITED,
  FUTURA_HEALTHCARE_REMEDIES_PRIVATE_LIMITED,
  HALEWOOD_LABORATORIES_PVT_LTD,
  SANCTUS_DRUGS_PHARMACEUTICALS_PVT_LTD,
  SILVER_LINE_LABORATORIES,
  ULTRA_DRUGS_PVT_LTD,
  WAY_2_INNOVATIONS_HEALTHCARE_PVT_LTD,
  ZENITH_DRUGS_PVT_LTD,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
  client16,
  client17,
  client18,
  client19,
  client20,
  client21,
  client22,
  client23,
  client24,
  client25,
  client26,
  client27,
  client28,
];
// const logos = [
//   Card1,
//   Card1,
//   Card1,
//   Card1,
//   Card1,
//   Card1,
//   Card1,
//   Card1,
//   Card1,
//   Card1,
// ];

const Brands = () => {
  return (
    <Section className="text-center">
      <div className="text-center mb-10">
        <SectionTitle className="mb-3">Brands Who Rely on Us</SectionTitle>
        <Description>
          Comprehensive solutions covering every aspect of pharmaceutical
          manufacturing, from raw materials to finished products.
        </Description>
      </div>

      {/* Swiper Logos with 2 Rows */}
      <Swiper
        modules={[Autoplay, Navigation, Grid]}
        slidesPerView={5} // default desktop
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        breakpoints={{
          320: { slidesPerView: 2, grid: { rows: 2 } }, // mobile
          640: { slidesPerView: 3, grid: { rows: 2 } }, // tablet
          768: { slidesPerView: 4, grid: { rows: 2 } }, // small desktop
          1024: { slidesPerView: 5, grid: { rows: 2 } }, // large desktop
        }}
        className="mb-10"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100 rounded-md h-20 flex items-center justify-center p-4">
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="max-h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Button */}
      <PrimaryButton to="/coming-soon">Learn More</PrimaryButton>
    </Section>
  );
};

export default Brands;
