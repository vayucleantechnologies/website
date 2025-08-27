// import React, { useRef } from "react";
// import { VayuBanner } from "../utils/utils";
// import Section from "../components/Section";
// import PrimaryHeading from "../components/PrimaryHeading";
// import SectionTitle from "../components/SectionTitle";
// import ContactForm from "../components/ContactForm";

// const ContactUs = () => {
//   return (
//     <>
//       {/* Banner Section */}
//       <Section
//         bgImage={VayuBanner}
//         className="h-screen flex items-center justify-center"
//       >
//         <PrimaryHeading className="text-center text-white">
//           Contact Us
//         </PrimaryHeading>
//       </Section>

//       {/* Form Section */}
//       <Section>
//         <SectionTitle className="mb-12 md:mb-24 text-center">
//           Please fill in the form below
//         </SectionTitle>

//         <div className="form-container md:w-[65%] mx-auto">
//           <ContactForm variant="light" />
//         </div>
//       </Section>
//     </>
//   );
// };

// export default ContactUs;

import React from "react";
import { VayuBanner } from "../utils/utils";
import Section from "../components/Section";
import PrimaryHeading from "../components/PrimaryHeading";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";
import { MapPin, Phone, Mail, Clock, Headphones } from "lucide-react";

const ContactUs = () => {
  return (
    <>
      {/* Banner Section */}
      <Section
        bgImage={VayuBanner}
        className="h-screen flex items-center justify-center"
      >
        <PrimaryHeading className="text-center text-white">
          Contact Us
        </PrimaryHeading>
      </Section>

      {/* Form + Office Section */}
      <Section>
        <SectionTitle className="mb-12 md:mb-24 text-center">
          Please fill in the form below
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left: Office Details */}
          <div className="bg-primary text-white rounded-2xl p-10 md:p-12">
            <h2 className="text-2xl font-semibold mb-8">Main Offices</h2>

            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-white" />
                <span>Mon – Sat 10.00 - 6.00</span>
              </li>

              {/* <li>
                <button className="w-full border border-white rounded-lg py-3 px-6 flex items-center justify-center gap-2 hover:bg-white hover:text-[#1c2244] transition">
                  View Location →
                </button>
              </li> */}

              <li className="flex items-center gap-4">
                <Headphones className="w-6 h-6 text-white" />
                <span>
                  Office: <a href="tel:+917768886667">+91 7768886667</a> /{" "}
                  <a href="tel:+918625870949">8625870949</a>
                </span>
              </li>

              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-white" />
                <span>
                  Mobile: <a href="tel:+918625870949">+91 8625870949</a>
                </span>
              </li>

              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-white" />
                <span>
                  Email:{" "}
                  <a
                    href="mailto:raircleanp@gmail.com"
                    className="hover:underline"
                  >
                    raircleanp@gmail.com
                  </a>
                </span>
              </li>
            </ul>

            {/* Address */}
            <div className="mt-10 flex flex-col items-center text-center">
              <MapPin className="w-12 h-12 text-red-500 mb-4" />
              <p className="max-w-lg">
                Unit No 22, Phase-1 Parmar Techno Centre, Nr-Western Express
                Highway, Vasai Phata, Vasai (E), Dist - Palghar - 401208
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <ContactForm variant="light" />
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactUs;
