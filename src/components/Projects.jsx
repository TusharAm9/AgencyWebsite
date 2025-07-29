import CurvedLoop from "./CarvedLoop";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Practical UI",
      desc: "A modern, accessible UI design book for developers & designers.",
      tag: "Book",
      image: "/images/practical-ui.png", // replace with your image
      link: "https://example.com",
      badgeColor: "bg-violet-700/10 text-violet-400",
    },
    {
      title: "Figma Design System",
      desc: "A reusable design system in Figma for rapid prototyping.",
      tag: "Design System",
      image: "/images/figma-design.png",
      link: "#",
      badgeColor: "bg-orange-700/10 text-orange-400",
    },
    {
      title: "Figma Design System",
      desc: "A reusable design system in Figma for rapid prototyping.",
      tag: "Design System",
      image: "/images/figma-design.png",
      link: "#",
      badgeColor: "bg-orange-700/10 text-orange-400",
    },
    // ... more projects
  ];

  return (
    <section id="projects" className="pt-16 bg-[#09090b] text-white">
      <div className="flex items-center gap-2 md:gap-4 mb-20">
        <div className=" flex-grow border-t border-violet-200"></div>
        <span className="whitespace-nowrap font-semibold text-2xl md:text-3xl drop-shadow-[0_0_40px_#8b5cf6]">
          Some of my Latest Work
        </span>
        <div className=" flex-grow border-t border-violet-200"></div>
      </div>

      <div className="flex flex-wrap gap-10 justify-center ">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{
              y: -5,
              boxShadow: "0 8px 32px 0 rgba(80,40,255,0.20)",
            }}
            className="bg-[#18181c] rounded-xl w-80 shadow-lg flex flex-col transition-all duration-200 border border-neutral-800 hover:border-violet-500"
          >
            {/* Image section */}
            <div className="h-52 bg-neutral-800 rounded-t-xl flex items-center justify-center overflow-hidden">
              {p.image ? (
                <img
                  alt={p.title}
                  src={p.image}
                  className="w-28 h-32 object-contain"
                />
              ) : (
                <div className="h-28 w-28 bg-neutral-700 rounded-xl" />
              )}
            </div>
            {/* Content */}
            <div className="flex-1 flex flex-col px-6 py-6">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium mb-3 w-fit ${p.badgeColor}`}
              >
                {p.tag}
              </span>
              <h3 className="font-extrabold text-lg mb-1">{p.title}</h3>
              <p className="text-neutral-400 text-sm flex-1">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <CurvedLoop
        marqueeText="HTML ✦ CSS ✦ TailWindCSS ✦ React.js ✦ Node.js ✦ MongoDB ✦ Express.js ✦"
        speed={5}
        curveAmount={0}
        direction="right"
        interactive={true}
      />
    </section>
  );
}
