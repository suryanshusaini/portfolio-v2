import StarBackground from "../components/ui/StarBackground";

const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      <StarBackground />

      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-tech/10 rounded-full blur-[100px]" />

      <div className="z-10 text-center px-4 mt-20">
        {/* We removed the Name from here because it's now in the Navbar */}

        <h2 className="text-txtSub text-xl md:text-2xl tracking-wide max-w-2xl mx-auto">
          Building the{" "}
          <span className="text-white font-semibold">Extraordinary</span>{" "}
          through code and design.
        </h2>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <div className="w-[30px] h-[55px] rounded-3xl border-2 border-txtSub flex justify-center p-2 opacity-50">
          <div className="w-2 h-2 rounded-full bg-accent animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
