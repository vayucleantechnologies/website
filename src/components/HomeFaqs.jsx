import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const faqData = [
  {
    question:
      "What types of pharmaceutical machines does VayuClean Technologies offer?",
    answer:
      "VayuClean Technologies offers laminar air flow units, biosafety cabinets, air showers, pass boxes, fume hoods, and more for pharmaceutical environments.",
  },
  {
    question: "How does VayuClean ensure equipment quality?",
    answer:
      "All our equipment complies with ISO standards and undergoes rigorous testing and quality checks.",
  },
  {
    question: "Can I request a custom machine design?",
    answer:
      "Yes, we provide tailored solutions based on your lab or facility requirements. Contact us to discuss your needs.",
  },
  {
    question: "What is the typical delivery time?",
    answer:
      "Delivery times vary by product but generally range from 2 to 6 weeks depending on specifications and quantity.",
  },
  {
    question: "What kind of after-sales service do you offer?",
    answer:
      "We provide maintenance contracts, on-site servicing, and spare part support to keep your equipment running reliably.",
  },
  {
    question: "Are your machines energy efficient?",
    answer:
      "Yes, our systems are designed with low power consumption motors and HEPA filters, ensuring both efficiency and compliance.",
  },
  {
    question: "Do you help with regulatory compliance documentation?",
    answer:
      "Absolutely. We provide validation protocols (DQ, IQ, OQ, PQ) and compliance documents required by GMP, ISO, and FDA standards.",
  },
];

const HomeFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section className="bg-gray">
      <SectionTitle className="text-center mb-8 sm:mb-10">FAQ</SectionTitle>

      <div className="px-4 sm:px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
        {faqData.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className={`rounded-lg border px-3 sm:px-4 py-3 mb-4 transition-all duration-200 ${
                isOpen ? "border-blue-400" : "border-gray-300"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left font-medium text-gray-800 text-sm sm:text-base md:text-lg"
              >
                <span className="pr-4">{item.question}</span>
                {isOpen ? (
                  <Minus className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Plus className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>

              {isOpen && (
                <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default HomeFaqs;
