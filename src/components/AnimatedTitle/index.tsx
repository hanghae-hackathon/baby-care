import { motion } from "framer-motion";
import { Children } from "react";

function AnimatedTitle({
  children,
  delay = 0,
  duration = 0.5,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}) {
  return Children.map(children, (child, index) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * duration + delay }}
      >
        {child}
      </motion.div>
    );
  });
}

export default AnimatedTitle;
