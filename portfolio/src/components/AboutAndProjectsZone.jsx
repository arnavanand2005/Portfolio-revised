import React from 'react';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Hyperspeed from './HyperSpeed';

export default function AboutAndProjectsZone() {
  return (
    <div className="relative w-full bg-black">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Hyperspeed />
      </div>

      <section id="about" className="relative z-10 py-24 px-4 sm:px-8 lg:px-12">
        <About />
      </section>

      <section id="projects" className="relative z-10 py-24 px-4 sm:px-8 lg:px-12">
        <Projects />
      </section>
    </div>
  );
}