import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import LoadingScreen from "./components/ui/LoadingScreen";
import useScroll from "./hooks/useScroll";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useScroll();

  return (
    <main className="w-full min-h-screen bg-bgMain text-txtMain selection:bg-accent selection:text-white">
      {/* 1. The Opening Act */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      {/* 2. The Main Site (Revealed after loader) */}
      <div
        className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <Navbar />
        <Hero />
        <About />
        <div className="h-screen" /> {/* Spacer */}
      </div>
    </main>
  );
};

export default App;
