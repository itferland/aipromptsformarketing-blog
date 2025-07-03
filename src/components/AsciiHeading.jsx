import { motion, useReducedMotion } from "framer-motion";

/**
 * ASCII logotype that fades in + rises from 20 px, unless the user prefers
 * reduced motion (then it just renders).
 */
export default function AsciiHeading({ children, className = "" }) {
  const reduce = useReducedMotion();   // true  → avoid motion

  return (
    <motion.pre
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={reduce ? false : { opacity: 1, y: 0 }}
      transition={reduce ? undefined : { duration: 1.2, ease: "easeOut" }}
      className={className}
      aria-label="AI Solutions Consulting"
    >
      {children}
    </motion.pre>
  );
} 