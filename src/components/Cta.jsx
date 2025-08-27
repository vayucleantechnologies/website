import { Mail, Phone } from "lucide-react";
import { BgCta, VayuBanner } from "../utils/utils";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Description from "./Description";
import ContactForm from "./ContactForm";

const Cta = () => {
  return (
    <Section bgImage={BgCta}>
      <div className="md:max-w-2xl">
        <div className=" mb-20 text-white">
          <SectionTitle className="mb-3">Get in Touch</SectionTitle>
          <Description>
            Ready to discuss your pharmaceutical equipment needs? Share your
            contact details and our experts will reach out within 24 hours.
          </Description>
        </div>

        {/* <form className="space-y-6">
          <div>
            <label className="block font-semibold mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="SACHIN TIWARI"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1" htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="1234@gamil.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex space-x-2">
            <div className="flex-1">
              <label className="block font-semibold mb-1" htmlFor="mobile">
                Mobile number
              </label>
              <input
                id="mobile"
                type="tel"
                placeholder="123456789"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-400 text-white font-semibold rounded-md px-6 py-2 hover:bg-blue-500 transition"
          >
            Submit
          </button>
        </form> */}

        <ContactForm variant="dark" />

       <div className="mt-10 max-w-md">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    {/* Phone */}
    <div>
      <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
        <Phone size={18} />
        <span>Phone no.</span>
      </div>
      <p className="text-white text-sm sm:text-base">+91 9967696475</p>
      <p className="text-white text-sm sm:text-base">+91 9967640968</p>
    </div>

    {/* Email */}
    <div>
      <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
        <Mail size={18} />
        <span>E-mail</span>
      </div>
      <p className="text-white text-sm sm:text-base">info@vayucleantechnologies.com</p>
      <p className="text-white text-sm sm:text-base">Sachin.tiwari@vayumail.com</p>
    </div>
  </div>
</div>

      </div>
    </Section>
  );
};

export default Cta;
