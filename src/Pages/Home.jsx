import SEO from "../components/SEO";
import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Certification from "../components/Certification";
import Cta from "../components/Cta";
import Header from "../components/Header";
import HomeFaqs from "../components/HomeFaqs";
import ProductLine from "../components/ProductLine";
import ProductSlider from "../components/ProductSlider";
import ScrollToTop from "../components/ScrollToTop";
import VayuLogo from "../assets/vayulogo.svg";

const Home = () => {
  return (
    <div>
      {/* ✅ SEO for Home Page */}
      <SEO
        title="Cleanroom Equipment Manufacturer | VayuClean Technologies"
        description="Your trusted partner for high-quality cleanroom equipment: Laminar Air Flow, Pass Boxes, Air Showers, Biosafety Cabinets, and more."
        keywords="cleanroom equipment, laminar air flow, pass box, air shower, biosafety cabinet, cleanroom manufacturer India"
        canonical="https://www.vayucleantechnologies.com/"
        url="https://www.vayucleantechnologies.com/"
        image="https://www.vayucleantechnologies.com/assets/vayulogo-TXXatw3b.svg"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "VayuClean Technologies",
          "url": "https://www.vayucleantechnologies.com",
          "logo": "https://www.vayucleantechnologies.com/assets/vayulogo-TXXatw3b.svg",
          "sameAs": [
            "https://www.facebook.com/vayucleantechnologies",
            "https://www.linkedin.com/company/vayucleantechnologies"
          ]
        }}
      />

      <ScrollToTop />
      <Banner />
      <ProductLine />
      <ProductSlider />
      {/* <Certification /> */}
      <Cta />
      <Brands />
      <HomeFaqs />
    </div>
  );
};

export default Home;
