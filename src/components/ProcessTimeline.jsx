import TiltListItem from "./utilis/TiltListItem";

const processSteps = [
  {
    title: "Consultation",
    description:
      "We discuss your goals, vision, and requirements to lay the foundation.",
    icon: "💡",
  },
  {
    title: "Planning & Strategy",
    description:
      "Research, propose solutions, and plot milestones on a project roadmap.",
    icon: "🗺️",
  },
  {
    title: "Design & Prototype",
    description:
      "Create UI mockups, iterate designs, and review user flows with you.",
    icon: "🎨",
  },
  {
    title: "Development",
    description:
      "Build scalable, high-performance apps using the MERN stack & best practices.",
    icon: "💻",
  },
  {
    title: "Launch & Support",
    description:
      "Deployment, SEO, and continuous support to ensure long-term results.",
    icon: "🚀",
  },
];

export default function ProcessTimeline() {
  return (
    <section id="services" className="py-20 bg-[#09090b]">
      <h2 className="text-3xl md:text-7xl text-center font-extrabold bg-gradient-to-br from-white to-violet-300 bg-clip-text text-transparent mb-16">
        How We Work
      </h2>
      <ol className="relative border-l-4 border-violet-700/50 max-w-2xl mx-auto">
        {processSteps.map((step, idx) => (
          <TiltListItem
            key={step.title}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.75, delay: idx * 0.2 }}
            className="mb-12 ml-8 relative"
          >
            {/* Icon */}
            <span
              className="absolute -left-12 flex items-center justify-center w-10 h-10 rounded-full bg-violet-800/80 border-4 border-violet-400 text-2xl text-white shadow-lg"
              style={{ top: 0 }}
            >
              {step.icon}
            </span>
            {/* Content */}
            <div className="bg-gradient-to-br from-[#141425] via-[#171834] to-[#18172b] rounded-xl shadow-xl p-6 border border-violet-900/30">
              <h3 className="text-lg md:text-xl font-bold text-violet-100">
                {step.title}
              </h3>
              <p className="text-neutral-300 text-sm md:text-base mt-2">
                {step.description}
              </p>
            </div>
          </TiltListItem>
        ))}
      </ol>
    </section>
  );
}
