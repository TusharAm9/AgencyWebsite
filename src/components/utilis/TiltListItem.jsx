import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";

function TiltListItem({ className = "", children }) {
  const controls = useAnimation();
  const ref = useRef(null);

  // Mouse moves: calculate relative position, set tilt
  const handleMouseMove = (event) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Adjust the multipliers for more/less tilt
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    controls.start({
      rotateX,
      rotateY,
      transition: { type: "spring", stiffness: 150, damping: 20, mass: 1 },
    });
  };

  // Reset tilt on leave
  const handleMouseLeave = () => {
    controls.start({
      rotateX: 0,
      rotateY: 0,
      transition: { type: "spring", stiffness: 150, damping: 20, mass: 1 },
    });
  };

  return (
    <motion.li
      ref={ref}
      animate={controls}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 900 }}
      className={`shadow-lg cursor-pointer ${className}`}
    >
      {children}
    </motion.li>
  );
}

export default TiltListItem;
