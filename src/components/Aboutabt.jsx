import { VayuBanner, PharmaceuticalAndBiotech } from "../utils/utils";
import Description from "./Description";
import PrimaryButton from "./PrimaryButton";
import PrimaryHeading from "./PrimaryHeading";
import Section from "./Section";
import Abtcard from "./Abtcard";

const Aboutabt = () => {
  return (
    <>
      {/* Hero Section */}
      <Section bgImage={VayuBanner} className="h-[70vh] flex items-center">
        <div className="relative z-20 text-white px-6 sm:px-12 lg:max-w-3xl text-center mx-auto pt-20">
          <PrimaryHeading className="mb-6 text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Redefining Excellence
          </PrimaryHeading>

          <Description className="mb-8 text-lg md:text-xl leading-relaxed drop-shadow-md">
            Built on Quality, Innovation, and Trust
          </Description>

          <PrimaryButton
            to="/categories"
            className="px-8 py-4 text-lg md:text-xl font-semibold hover:bg-primary/90 transition-all"
          >
            Explore Our Products
          </PrimaryButton>
        </div>
      </Section>

      {/* Stats Cards Section */}
      <Abtcard />

      {/* Description Section (No title) */}
      <Section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={PharmaceuticalAndBiotech}
              alt="Cleanroom Manufacturing"
              className="object-cover w-full h-full max-h-[450px] transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right side - Text content */}
          <div className="text-gray-800 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              Since our inception, VayuClean Technologies has emerged as a trusted partner
              for pharmaceutical, biotech, food, chemical, and microelectronics industries.
              Our expertise spans design, manufacturing, installation, and validation of
              world-class cleanroom solutions.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              From laminar airflow systems, bio-safety cabinets, and pass boxes to custom
              stainless steel furniture, we provide turnkey solutions that meet international
              standards. Every product is tailored to deliver maximum reliability, efficiency,
              and compliance in controlled environments.
            </p>

            <PrimaryButton
              to="/contact"
              className="px-6 py-3 text-lg font-semibold hover:bg-primary/90 transition-all"
            >
              Discover More
            </PrimaryButton>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Aboutabt;
