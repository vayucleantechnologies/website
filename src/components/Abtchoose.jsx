import { Check } from "lucide-react";
import { Card1 } from "../utils/utils";
import SectionTitle from "./SectionTitle";
import Description from "./Description";
import Section from "./Section";

const points = [
  "10+ years of industry-leading expertise",
  "Custom cleanroom furniture & equipment solutions",
  "Turnkey design, manufacturing, and installation",
  "Global presence with international quality standards",
  "Trusted by pharmaceutical, biotech, and food industries",
];

const Abtchoose = () => {
  return (
    <Section className="bg-gray">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Right side - Text content */}
        <div className="max-w-5xl mx-auto text-left py-16 px-6">
          <SectionTitle className="mb-5"> Why Choose Us</SectionTitle>

          <Description className="mb-6">
            With a decade of expertise, we go beyond supplying equipment — we
            design and deliver complete cleanroom ecosystems. Our solutions
            combine advanced technology with uncompromising quality standards to
            help industries achieve operational excellence.
          </Description>

          <ul className="space-y-3">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-primary mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Left side - Image */}
        <div>
          <img
            src={Card1}
            alt="Cleanroom Manufacturing"
            className="rounded-lg shadow-lg object-cover w-full h-full max-h-[450px]"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 pt-16 px-4 sm:px-6 md:px-8">
        {/* Mission Box */}
        <div className="bg-primary text-white p-6 sm:p-8 rounded-lg shadow-md flex flex-col justify-between">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">Our Mission</h3>
          <p className="text-sm sm:text-base leading-relaxed">
            To engineer world-class cleanroom equipment and furniture that
            deliver safety, compliance, and performance across industries.
          </p>
        </div>

        {/* Vision Box */}
        <div className="bg-primary text-white p-6 sm:p-8 rounded-lg shadow-md flex flex-col justify-between">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">Our Vision</h3>
          <p className="text-sm sm:text-base leading-relaxed">
            To be the global leader in cleanroom technology, setting benchmarks
            for quality, innovation, and customer trust.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Abtchoose;
