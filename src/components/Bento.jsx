import MotionBox from "./utilis/MotionBox";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import GlassIcons from "./Customdesign/GlassIcons";

const items = [
  {
    icon: <FaGithub className="w-10 h-10" />,
    color: "#222222",
    label: "Github",
  },
  {
    icon: <FaReact className="w-10 h-10" />,
    color: "#00d8ff",
    label: "React.js",
  },
  {
    icon: <FaNodeJs className="w-10 h-10" />,
    color: "#68A063",
    label: "Node.js",
  },
  {
    icon: <BiLogoMongodb className="w-10 h-10" />,
    color: "#66BB6A",
    label: "MongoDB",
  },
  {
    icon: <SiExpress className="w-10 h-10" />,
    color: "#FFFF00",
    label: "Express.js",
  },
  {
    icon: <RiNextjsFill className="w-10 h-10" />,
    color: "#708090",
    label: "Next.js",
  },
];

export default function Bento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-none md:grid-rows-4 gap-4 max-w-7xl mx-auto p-6 bg-[#09090b]">
      {/* Box 1: Insights */}
      <MotionBox className="md:col-span-2 md:row-span-1 transition-all duration-200 rounded-2xl p-6 flex flex-col justify-between">
        <span className="text-neutral-100 font-bold text-lg flex justify-center">
          Insights
        </span>
      </MotionBox>

      {/* Box 2: Overview */}
      <MotionBox className="md:col-span-2 md:row-span-1 rounded-2xl p-6 flex flex-col justify-between ">
        <span className="text-neutral-100 font-bold text-lg flex justify-center">
          Overview
        </span>
        <div></div>
      </MotionBox>

      {/* Box 3: Teamwork (Large) */}
      <MotionBox className="md:col-start-5 md:col-span-2 md:row-start-1 md:row-span-2 rounded-2xl p-6 flex flex-col justify-between">
        <span className="text-3xl font-bold text-neutral-50 flex justify-center mt-4 mb-1">
          Tech stack
        </span>
        <div className="mt-auto">
          <GlassIcons items={items} />
        </div>
      </MotionBox>

      {/* Box 4: Efficiency (Large) */}
      <MotionBox className="md:col-span-4 md:row-start-2 md:row-span-2 bg-amber-900/80 rounded-2xl p-6 flex flex-col justify-between">
        <span className="text-neutral-950 font-bold text-lg">Efficiency</span>
        <div className="mt-auto">
          <span className="block font-semibold text-neutral-800 mt-4 mb-1">
            Automation
          </span>
          <span className="text-neutral-700 text-sm">Streamline workflows</span>
        </div>
      </MotionBox>

      {/* Box 5: Connectivity */}
      <MotionBox className="md:col-start-5 md:col-span-1 md:row-start-3 md:row-span-1 bg-cyan-900/80 rounded-2xl p-6 flex flex-col justify-between">
        <span className="text-neutral-100 font-bold text-lg">Connectivity</span>
        <div>
          <span className="block font-semibold text-neutral-50 mt-4 mb-1">
            Integration
          </span>
          <span className="text-neutral-400 text-sm">
            Connect favorite tools
          </span>
        </div>
      </MotionBox>

      {/* Box 6: Protection */}
      <MotionBox className="md:col-start-6 md:col-span-1 md:row-start-3 md:row-span-1 bg-lime-900/80 rounded-2xl p-6 flex flex-col justify-between">
        <span className="text-neutral-100 font-bold text-lg">Protection</span>
        <div>
          <span className="block font-semibold text-neutral-50 mt-4 mb-1">
            Security
          </span>
          <span className="text-neutral-400 text-sm">
            Enterprise-grade protection
          </span>
        </div>
      </MotionBox>
    </div>
  );
}
