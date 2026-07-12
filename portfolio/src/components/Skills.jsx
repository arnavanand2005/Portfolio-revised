import React from 'react';
import GlassIcons from '../components/GlassIcons';

// Import target tech icons from react-icons repository
import { FaReact, FaHtml5, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiJavascript, SiFirebase } from 'react-icons/si';

export default function Skills() {
  const technicalSkills = [
    {
      label: "REACT",
      color: "cyan", 
      icon: <FaReact className="text-cyan-400" />
    },
    {
      label: "HTML5",
      color: "red",
      icon: <FaHtml5 className="text-red-500" />
    },
    {
      label: "JAVASCRIPT",
      color: "white", 
      icon: <SiJavascript className="text-yellow-400" />
    },
    {
      label: "TAILWIND",
      color: "cyan",
      icon: <SiTailwindcss className="text-cyan-400" />
    },
    {
      label: "NODE.JS",
      color: "zinc",
      icon: <FaNodeJs className="text-green-400" />
    },
    {
      label: "MONGODB",
      color: "zinc",
      icon: <SiMongodb className="text-green-500" />
    },
    {
      label: "FIREBASE",
      color: "red",
      icon: <SiFirebase className="text-orange-400" />
    },
    {
      label: "PYTHON",
      color: "white",
      icon: <FaPython className="text-blue-400" />
    }
  ];

  return (
    <section className="bg-black min-h-screen py-20 px-6 font-mono">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-black text-white tracking-tighter uppercase">
          TECH_<span className="text-cyan-400">STACK</span>.SYS
        </h2>
        <p className="text-xs text-zinc-500 tracking-widest uppercase mt-2">
          [ Core Engine Capabilities & Environment Dependencies ]
        </p>
      </div>

      <GlassIcons items={technicalSkills} />
    </section>
  );
}