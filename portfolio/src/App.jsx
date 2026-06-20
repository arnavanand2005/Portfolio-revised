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
    <>
      {loading ? (
        <IntroLoad onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />

          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}

export default App;