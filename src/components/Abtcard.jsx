import Section from "./Section";

const stats = [
  {
    value: "150+",
    title: "Projects Delivered",
    description:
      "Delivered world-class cleanroom and stainless steel solutions across pharma, biotech, and electronics.",
  },
  {
    value: "98%",
    title: "Client Satisfaction",
    description:
      "Trusted by industry leaders for our commitment to quality, compliance, and timely delivery.",
  },
  {
    value: "85%",
    title: "Repeat Clients",
    description:
      "Most of our clients return for expansions, upgrades, and long-term partnerships.",
  },
  {
    value: "20+",
    title: "Industries Served",
    description:
      "Proudly catering to pharma, food, healthcare, chemicals, and life sciences worldwide.",
  },
];

const Abtcard = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group bg-gray rounded-2xl p-10 h-full min-h-[300px] transition-all duration-300 hover:bg-[#00B8D9] hover:text-white flex flex-col justify-between shadow-md hover:shadow-lg"
          >
            <h2 className="text-5xl text-primary font-semibold mb-6 group-hover:text-white transition-colors duration-300">
              {stat.value}
            </h2>

            <div className="flex flex-col flex-grow justify-between">
              <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
              <p className="text-sm leading-relaxed">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Abtcard;
