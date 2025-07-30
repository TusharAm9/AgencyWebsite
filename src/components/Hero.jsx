import { motion } from "framer-motion";
import Squares from "./Squares";
import ClickSpark from "./ClickSpark";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#09090b] text-white min-h-[100vh] flex justify-center items-center relative overflow-hidden md:pt-12"
    >
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-[20vh] z-20"
        style={{
          background: "linear-gradient(to top, #09090b 0%, transparent 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <Squares
            speed={0.3}
            squareSize={60}
            direction="diagonal"
            borderColor="#222"
            hoverFillColor="#222"
          />
        </ClickSpark>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-9xl md:tracking-wide font-bold mb-4 drop-shadow-[50px_12px_80px_#8b5cf6]"
        >
          T<span className="text-violet-400">✧</span>STUUDIO
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl max-w-2xl tracking-tight bg-gradient-to-r from-neutral-50 to-zinc-600 bg-clip-text text-transparent drop-shadow-[0_0_52px_#8b5cf6]"
        >
          We build scalable e-commerce & business logic websites for clients
          which are scalable and SEO friendly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex flex-col md:flex-row  gap-4"
        >
          <a
            className="bg-violet-500 items-center text-neutral-300 px-6 py-2 rounded-lg font-semibold hover:bg-violet-600 transition hover:scale-110 flex gap-2"
            href="#contact"
          >
            Work With Us <span aria-hidden="true">🚀</span>
          </a>
          <a
            className="border-2 border-violet-400 px-6 py-2 rounded-lg font-light hover:bg-violet-500 hover:text-white hover:scale-90 transition"
            href="#projects"
          >
            View Projects
          </a>
        </motion.div>
        <p className="text-neutral-700 mt-4 tracking-tighter">
          Tailored for modern Indian tech startups & online businesses.
        </p>
      </div>
    </section>
  );
}
