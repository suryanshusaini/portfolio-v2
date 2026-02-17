const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/30 rounded-full blur-[120px]" />

      <div className="z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
          Suryanshu <span className="text-accent">Saini</span>
        </h1>
        <p className="mt-4 text-txtSub text-xl tracking-wide">
          Building the Extraordinary.
        </p>
      </div>
    </section>
  );
};

export default Hero;
