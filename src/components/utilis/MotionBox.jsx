import { motion } from "framer-motion";
const MotionBox = ({ className = "", children }) => (
  <motion.div
    whileHover={{
      y: -7,
      boxShadow: "0 8px 32px 0 rgba(80,40,255,0.20)",
    }}
    transition={{ type: "tween", stiffness: 300, damping: 20 }}
    className={className}
  >
    {children}
  </motion.div>
);
export default MotionBox;
