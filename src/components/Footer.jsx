import Section from "./Section";
import { Blacklogo, NavLinks } from "../utils/utils";
import { categories } from "../utils/products";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white rounded-t-3xl">
      <Section>
        {/* Logo */}
        <div className="flex justify-center lg:justify-start mb-8">
          <img
            src={Blacklogo}
            alt="VayuClean Logo"
            className="w-44"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-base">
              {NavLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Product Categories</h4>
            <ul className="space-y-2 text-base">
              {categories.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`category/${item.slug}`}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-base text-gray-300">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mr-2 mt-1 text-primary"></i>
                <span>
                  Unit No 22, Phase-1 Parmar Techno Centre, Nr-Western Express Highway, Vasai (East), Maharashtra - 401208, India
                </span>
              </li>
              <li>
                <a href="tel:+919876543210" className="hover:text-primary transition-colors duration-200">
                  <i className="fas fa-phone-alt mr-2"></i> +91-9876543210 | +91-9123456789
                </a>
              </li>
              <li>
                <a href="mailto:info@vayucleantechnologies.com" className="hover:text-primary transition-colors duration-200">
                  <i className="fas fa-envelope mr-2"></i> info@vayucleantechnologies.com
                </a>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Locate Us</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.4431999709072!2d72.8725941!3d19.4364493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9236062c8a1%3A0xc2bd6793412764f4!2sR%20AIR%20CLEAN%20PHARMA%20EQUIPMENT!5e0!3m2!1sen!2sin!4v1755286968731!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
              title="VayuClean Location"
            />
          </div>
        </div>
      </Section>

      {/* Bottom Bar */}
      <div className="border-t border-[#ffffff2c] flex flex-col md:flex-row justify-between items-center w-full px-6 py-6 text-sm text-gray-400">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} VayuClean Technologies. All rights reserved.
        </p>
        <div className="space-x-3 mt-3 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors duration-200">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-primary transition-colors duration-200">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
