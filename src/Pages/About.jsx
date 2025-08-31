import Aboutabt from '../components/Aboutabt'
import Abtcard from '../components/Abtcard'
import Abtchoose from '../components/Abtchoose'
import Cta from '../components/Cta'
import SEO from "../components/SEO";

const About = () => {
  return (
    <>
    <SEO
        title="About Us | VayuClean Technologies"
        description="Learn about VayuClean Technologies, a trusted manufacturer of cleanroom equipment including Laminar Air Flow, Pass Boxes, Air Showers, and Biosafety Cabinets."
        keywords="about VayuClean, cleanroom manufacturer, laminar air flow, pass box, air shower, cleanroom equipment India"
        canonical="https://www.vayucleantechnologies.com/about"
        url="https://www.vayucleantechnologies.com/about"
        image="https://www.vayucleantechnologies.com/assets/vayulogo-TXXatw3b.svg"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "VayuClean Technologies",
          "url": "https://www.vayucleantechnologies.com/about",
          "logo": "https://www.vayucleantechnologies.com/assets/vayulogo-TXXatw3b.svg",
          "description":
            "VayuClean Technologies is a leading manufacturer of cleanroom equipment with a focus on quality, safety, and innovation.",
        }}
      />

    <div>
      <Aboutabt />
      {/* <Abtcard /> Abtcard added in Aboutabt component for better UI */}
      <Abtchoose />
      <Cta />
    </div>
    </>
  )
}

export default About
