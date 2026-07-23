import { useState } from "react";

import IntroLoad from "./components/IntroLoad";
import Navbar from "./components/Navbar";

import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-[#030303] text-white min-h-screen w-full overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {loading ? (
        <IntroLoad onComplete={() => setLoading(false)} />
      ) : (
        <>
          {/* Navbar sits fixed on top of all sections */}
          <Navbar />

          <main className="relative w-full">
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;