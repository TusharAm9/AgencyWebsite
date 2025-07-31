import CurvedLoop from "./CarvedLoop";
import { motion } from "framer-motion";
import MotionBox from "./utilis/MotionBox";

export default function Projects() {
  const projects = [
    {
      title: "Artician Craft",
      desc: "A modern, Handcraft E-commerce Website which sells Wooden & Bamboo products",
      tag: "E-Commerce",
      image:
        "https://res.cloudinary.com/dftihiwel/image/upload/v1753856516/Untitled_design_z8kugz.png",
      link: "https://example.com",
      badgeColor: "bg-violet-700/10 text-violet-400",
    },
    {
      title: "Figma Design System",
      desc: "A reusable design system in Figma for rapid prototyping.",
      tag: "Design System",
      image:
        "https://res.cloudinary.com/dftihiwel/image/upload/v1753856516/Untitled_design_z8kugz.png",
      link: "#",
      badgeColor: "bg-orange-700/10 text-orange-400",
    },
    {
      title: "Design System",
      desc: "A reusable design system in Figma for rapid prototyping.",
      tag: "Design System",
      image:
        "https://res.cloudinary.com/dftihiwel/image/upload/v1753856516/Untitled_design_z8kugz.png",
      link: "#",
      badgeColor: "bg-orange-700/10 text-orange-400",
    },
    // ... more projects
  ];

  return (
    <section id="projects" className="md:pt-24 bg-[#09090b]">
      <div className="flex items-center gap-2 md:gap-8 mb-20">
        <div className=" flex-grow border-t border-violet-200"></div>
        <span className="bg-gradient-to-br from-white to-gray-800 bg-clip-text text-transparent font-semibold text-3xl md:text-7xl tracking-wide drop-shadow-[0_0_40px_#8b5cf6]">
          Some Of Our Latest Work
        </span>
        <div className=" flex-grow border-t border-violet-200"></div>
      </div>

      <div className="flex flex-wrap gap-10 justify-center md:mt-32 md:pt-10">
        {projects.map((p) => (
          <MotionBox
            key={p.title}
            className="text-neutral-400 hover:text-white bg-gradient-to-r from-[#0d0d0d] to-[#131324] hover:bg-violet-900/50 rounded-xl w-80 shadow-lg flex flex-col transition-all duration-200 border border-neutral-800 hover:border-violet-500 "
          >
            {/* Image section */}
            <div className="bg-neutral-800 rounded-t-xl flex items-center justify-center overflow-hidden">
              {p.image ? (
                <img
                  alt={p.title}
                  src={p.image}
                  className="h-full w-fit bg-cover"
                />
              ) : (
                <div className="h-40 w-40 bg-neutral-700 rounded-xl" />
              )}
            </div>
            {/* Content */}
            <div className="flex-1 flex flex-col px-6 py-12 gap-1">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium mb-3 w-fit ${p.badgeColor}`}
              >
                {p.tag}
              </span>
              <h3 className="font-extrabold text-lg mb-1 md:text-2xl ">
                {p.title}
              </h3>
              <p className="text-sm flex-1">{p.desc}</p>
            </div>
          </MotionBox>
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
