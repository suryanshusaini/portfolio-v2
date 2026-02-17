import useScroll from "./hooks/useScroll";
import Hero from "./sections/Hero";

const App = () => {
  // Activate the smooth scroll
  useScroll();

  return (
    <main className="w-full min-h-screen bg-bgMain text-txtMain selection:bg-accent selection:text-white">
      <Hero />
    </main>
  );
};

export default App;
