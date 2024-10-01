import { motion } from "framer-motion";

const LineMotion: React.FC = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 15"
      initial={{ pathLength: 0 }}
      transition={{ duration: 2 }}
    >
      <motion.path
        d="M0 10 Q 25 10, 50 10 T 100 10"
        stroke="#E78F81"
        strokeWidth="1.3"
        strokeLinecap="round"
        animate={{
          d: [
            "M0 10 Q 25 5, 50 10 T 100 10", // Wave shape when hovered
            "M0 10 Q 25 15, 50 10 T 100 10", // Return to original shape
          ],
          transition: {
            repeat: Infinity,
            duration: 2,
            repeatType: "reverse",
          },
        }}
      />
    </motion.svg>
  );
};

export default LineMotion;
