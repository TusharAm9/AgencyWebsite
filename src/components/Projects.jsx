import CurvedLoop from "./CarvedLoop";
import MotionBox from "./utilis/MotionBox";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "Artician Craft",
      desc: "A modern, Handcraft E-commerce Website which sells Wooden & Bamboo products.",
      tag: "E-Commerce",
      image:
        "https://res.cloudinary.com/dftihiwel/image/upload/v1753856516/Untitled_design_z8kugz.png",
      badgeColor: "bg-violet-700/10 text-violet-400",
      link: "https://artician-craft.onrender.com/",
    },
    {
      title: "HotailBNB",
      desc: "A Hotail Booking Site where user can come, browse and book their rooms from anywhere.",
      tag: "Hotail Booking",
      image:
        "https://res.cloudinary.com/dftihiwel/image/upload/v1753941229/Untitled_design_1_zrrtyx.png",
      badgeColor: "bg-red-700/10 text-red-400",
      link: "https://hotelbnb.onrender.com/listings",
    },
    {
      title: "Obsidan Bloom",
      desc: "A Mordern salon website that gives comfort to book their special day from anywhere anytime.",
      tag: "Beauty Paurlor",
      image:
        "https://res.cloudinary.com/dftihiwel/image/upload/v1753983177/Untitled_design_2_dmouv8.png",
      badgeColor: "bg-pink-600/10 text-pink-400",
      link: "https://obsidian-bloom.onrender.com/",
    },
  ];

  return (
    <section id="projects" className="md:pt-24 bg-[#09090b]  ">
      <h2 className="text-3xl md:text-7xl text-center font-extrabold bg-gradient-to-br from-white to-violet-300 bg-clip-text text-transparent mb-16">
        Recent Works
      </h2>

      <div className="flex flex-wrap gap-10 justify-center md:mt-12 md:pt-10">
        {projects.map((p) => (
          <a href={p.link} key={p.title}>
            <MotionBox className="text-neutral-400 hover:text-white bg-gradient-to-r from-[#0d0d0d] to-[#131324] hover:bg-violet-900/50 rounded-xl w-80 shadow-lg flex flex-col transition-all duration-200 border border-neutral-800 hover:border-violet-500 ">
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
          </a>
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
