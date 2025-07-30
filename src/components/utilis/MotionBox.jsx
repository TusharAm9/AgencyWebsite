import { useRef } from "react";
import { motion, useAnimation } from "framer-motion";

function MotionBox({ className = "", children }) {
  const controls = useAnimation();
  const ref = useRef(null);

  // Handle hover start
  const handleMouseEnter = () => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const lightX = viewportWidth / 2;
    const lightY = viewportHeight / 4;

    const elCenterX = rect.left + rect.width / 2;
    const elCenterY = rect.top + rect.height / 2;

    let offsetX = elCenterX - lightX;
    let offsetY = elCenterY - lightY;

    const maxOffset = 20;
    offsetX = Math.max(-maxOffset, Math.min(maxOffset, offsetX / 20));
    offsetY = Math.max(-maxOffset, Math.min(maxOffset, offsetY / 20));

    controls.start({
      y: -9,
      boxShadow: `${offsetX}px ${offsetY}px 15px 5px rgba(80,40,255,0.15)`,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    });
  };

  // Reset shadow on hover end
  const handleMouseLeave = () => {
    controls.start({
      y: 0,
      boxShadow: "0px 0px 5px 2px rgba(80,40,255,0.05)",
      transition: { type: "tween", stiffness: 300, damping: 15 },
    });
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={` ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default MotionBox;
