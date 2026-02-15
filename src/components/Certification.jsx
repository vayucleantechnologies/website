import {
  BadgeCheck,
  Headset,
  Lightbulb,
  SquareCheckBig,
} from "lucide-react";

import SectionTitle from "./SectionTitle";
import Section from "./Section";
import Description from "./Description";

const Certification = () => {

  // ⭐ ADD ALL FUTURE CERTIFICATES HERE ONLY
  const certificates = [
    {
      name: "ISO 9001:2015",
      subtitle: "Quality Management System",
      valid: "Valid till Feb 2029",
      file: "/certificates/iso-9001-2015.pdf",
    },

    // FUTURE EXAMPLES (just uncomment later)

    /*
    {
      name: "CE Certified",
      subtitle: "European Conformity",
      valid: "Valid till 2030",
      file: "/certificates/ce.pdf",
    },
    */

  ];

  return (
    <Section>

      {/* HEADING */}
      <div className="text-center mb-10">
        <SectionTitle className="mb-3">Our Commitment</SectionTitle>
        <Description>
          Delivering certified cleanroom solutions with precision engineering,<br />
          regulatory compliance, and dependable service support.
        </Description>
        {/* <Description>
          Committed to success through quality and trust.
        </Description> */}
      </div>


      {/* TOP FEATURE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center mb-12 md:px-24">

        <div className="p-8 rounded-xl hover:bg-gray transition">
          <BadgeCheck className="w-16 h-16 mx-auto text-primary" />
          <h3 className="text-[24px] py-5 font-medium">Quality Assurance</h3>
          <p>Manufactured under ISO-certified processes with strict quality inspection ensuring pharmaceutical-grade reliability and compliance.</p>
          {/* <p>Every product meets stringent pharmaceutical standards</p> */}
        </div>

        <div className="p-8 rounded-xl hover:bg-gray transition">
          <Lightbulb className="w-16 h-16 mx-auto text-primary" />
          <h3 className="text-[24px] py-5 font-medium">Innovation Focus</h3>
          <p>Advanced engineering design and continuous R&D enable us to deliver energy-efficient, high-performance cleanroom equipment.</p>
          {/* <p>Continuous R&amp;D investment in cutting-edge technology</p> */}
        </div>

        <div className="p-8 rounded-xl hover:bg-gray transition">
          <Headset className="w-16 h-16 mx-auto text-primary" />
          <h3 className="text-[24px] py-5 font-medium">Customer Success</h3>
          <p>From consultation to installation and after-sales service, our experts provide complete lifecycle support for every project.</p>
          {/* <p>24/7 support and comprehensive service programs</p> */}
        </div>

      </div>


      {/* CERTIFICATE TITLE */}
      <div className="text-center mb-10 mt-24">
        <h3 className="text-2xl font-semibold">
          Certificate and Compliance
        </h3>
      </div>


      {/* ⭐ AUTO-CENTER RESPONSIVE CERT GRID */}
      <div className="flex justify-center">

        <div
          className="
            grid gap-6 w-full max-w-5xl
            grid-cols-[repeat(auto-fit,minmax(260px,1fr))]
          "
        >

          {certificates.map((cert, i) => (

            <div
              key={i}
              className="bg-gray rounded-xl py-8 px-6 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition"
            >

              <SquareCheckBig className="text-blue-500 w-10 h-10" />

              <p className="font-semibold text-lg text-center">
                {cert.name}
              </p>

              <p className="text-sm text-gray-600 text-center">
                {cert.subtitle}
              </p>

              <p className="text-xs text-gray-500">
                {cert.valid}
              </p>

              {/* VIEW */}
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 bg-primary text-white px-5 py-2 rounded-lg text-sm hover:opacity-90 transition"
              >
                View Certificate
              </a>

              {/* DOWNLOAD */}
              <a
                href={cert.file}
                download
                className="text-sm text-primary underline hover:opacity-80"
              >
                Download PDF
              </a>

            </div>
            

          ))}

        </div>

      </div>

    </Section>
  );
};

export default Certification;
