import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  const [textFinished, setTextFinished] = useState(false);

  useEffect(() => {
    // Wait for the "Zoom Out" to finish, then tell App.jsx we are done
    const timer = setTimeout(() => {
      setTextFinished(true);
      setTimeout(() => onComplete(), 500); // Small buffer for smoothness
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!textFinished && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-bgMain"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }} // The black background fades out
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* The Name Animation */}
          <motion.div
            initial={{ scale: 2, y: 0, x: 0 }}
            animate={{
              scale: 0.5, // Shrinks to logo size
              y: "-45vh", // Moves up
              x: "-40vw", // Moves left
            }}
            transition={{
              duration: 2,
              ease: [0.6, 0.01, -0.05, 0.95], // Premium "Bezier" curve
              delay: 0.5,
            }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
          >
            Suryanshu <span className="text-accent">Saini</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
