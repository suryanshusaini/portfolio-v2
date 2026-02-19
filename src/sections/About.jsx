import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center py-20 px-6 relative z-10"
    >
      <div className="max-w-6xl w-full">
        {/* 1. The Header "Arrives" */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-accent mb-2">01. THE SIGNAL</h2>
          <h3 className="text-4xl md:text-6xl font-bold leading-tight">
            Engineering the <br />
            <span className="text-txtSub">Digital Future.</span>
          </h3>
        </motion.div>

        {/* 2. The Grid "Assembles" */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: The Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="md:col-span-2 bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
          >
            <p className="text-txtSub text-lg leading-relaxed">
              I am a Computer Science Engineer at{" "}
              <strong className="text-white">VIT-AP</strong>, driven by the
              intersection of
              <span className="text-accent">
                {" "}
                systems architecture
              </span> and <span className="text-tech">creative design</span>.
              Currently decoding the complexities of Linear Algebra and building
              next-gen web apps.
            </p>
          </motion.div>

          {/* Card 2: The Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-accent/10 border border-accent/20 p-8 rounded-2xl flex flex-col justify-center items-center text-center"
          >
            <h4 className="text-5xl font-bold text-accent mb-2">9.04</h4>
            <p className="text-sm text-txtSub uppercase tracking-widest">
              CGPA (Current)
            </p>
          </motion.div>

          {/* Card 3: The Tech Stack (Scrolling Ticker) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="md:col-span-3 bg-black border border-white/10 p-6 rounded-2xl overflow-hidden flex items-center relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bgMain to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bgMain to-transparent z-10" />

            <div className="flex gap-12 animate-infinite-scroll whitespace-nowrap text-txtSub font-mono text-sm">
              {/* Duplicate list for infinite scroll illusion */}
              {[
                "JAVA",
                "REACT",
                "TAILWIND",
                "LINEAR ALGEBRA",
                "NETWORKS",
                "FRENCH",
                "JAVA",
                "REACT",
                "TAILWIND",
              ].map((tech, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-tech rounded-full" /> {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
