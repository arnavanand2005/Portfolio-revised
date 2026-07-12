import React from 'react';
import GlassIcons from '../components/GlassIcons';
import DecryptedText from '../components/DecryptedText';
import BorderGlow from '../components/BorderGlow';

import { FaReact, FaHtml5, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiJavascript, SiFirebase } from 'react-icons/si';

export default function About() {
  const technicalSkills = [
    { label: "REACT", color: "cyan", icon: <FaReact className="text-cyan-400" /> },
    { label: "HTML5", color: "red", icon: <FaHtml5 className="text-red-500" /> },
    { label: "JAVASCRIPT", color: "white", icon: <SiJavascript className="text-yellow-400" /> },
    { label: "TAILWIND", color: "cyan", icon: <SiTailwindcss className="text-cyan-400" /> },
    { label: "NODE.JS", color: "zinc", icon: <FaNodeJs className="text-green-400" /> },
    { label: "MONGODB", color: "zinc", icon: <SiMongodb className="text-green-500" /> },
    { label: "FIREBASE", color: "red", icon: <SiFirebase className="text-orange-400" /> },
    { label: "PYTHON", color: "white", icon: <FaPython className="text-blue-400" /> }
  ];

  return (
    <section 
      id="about" 
      className="min-h-screen py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden font-mono select-none z-10 bg-[#030303] text-zinc-100"
    >
      {/* Structural Tech Grid Lines Accent (Matches Hyperspeed alignment) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f15_1px,transparent_1px),linear-gradient(to_bottom,#0f0f15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        
        {/* SECTION HEADER BLOCK */}
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <DecryptedText
              text="ABOUT_ME.SYS"
              animateOn="view"
              speed={20}
              sequential
              className="text-white"
              encryptedClassName="text-cyan-400 font-bold"
              parentClassName="text-4xl sm:text-6xl font-black tracking-[-0.03em] uppercase"
            />
          </div>
          {/* Cyan to Red Laser Divider line */}
          <div className="relative mx-auto mt-4 h-[1px] w-56 bg-gradient-to-r from-cyan-500 via-zinc-800 to-red-500" />
          <p className="mt-3 text-zinc-500 tracking-[0.4em] uppercase text-[9px] font-bold">
            [ IDENTITY REGISTRY // CORE SKILLS MANIFEST ]
          </p>
        </div>

        {/* BIO & METRICS DECK */}
        <div className="mb-20">
          <BorderGlow glowColor="0, 229, 255" glowRadius={60} className="w-full">
            <div className="p-6 sm:p-10 bg-zinc-950/90 rounded-[16px] border border-zinc-800/50 relative backdrop-blur-xl grid md:grid-cols-[1fr_300px] gap-10 items-center shadow-2xl shadow-black">
              
              {/* Neon Cyber-Spec Bracket Corners */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan-500" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-zinc-700" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-zinc-700" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-red-500" />

              {/* Bio Narrative Container */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[10px] text-cyan-400 font-bold tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  BIOGRAPHICAL_STREAM_INIT
                </div>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed tracking-wide">
                  I am a passionate software architecture builder specialized in developing full-stack environments and optimizing interactive computational vectors. I bridge mathematical precision with dynamic structural aesthetics.
                </p>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed tracking-wide border-l border-zinc-800 pl-4 italic">
                  Currently engineered toward researching neural computing networks, automated interface deployments, and production-ready architectures that deliver absolute user optimization under extreme scale.
                </p>
              </div>

              {/* Core Terminal Stats Registry (HUD Panel Look) */}
              <div className="border border-zinc-800/80 bg-black/80 p-5 rounded-xl space-y-4 font-mono text-xs divide-y divide-zinc-800/60 shadow-inner">
                <div>
                  <span className="text-zinc-500 block text-[9px] tracking-wider uppercase font-bold mb-0.5">OPERATOR</span>
                  <span className="text-white font-bold tracking-tight text-sm uppercase">ARNAV ANAND</span>
                </div>
                <div className="pt-3">
                  <span className="text-zinc-500 block text-[9px] tracking-wider uppercase font-bold mb-0.5">DEPLOYMENT_ROLE</span>
                  <span className="text-cyan-400 font-bold tracking-tight text-sm uppercase">FULL STACK // AI</span>
                </div>
                <div className="pt-3">
                  <span className="text-zinc-500 block text-[9px] tracking-wider uppercase font-bold mb-0.5">SYSTEM_STATUS</span>
                  <span className="text-emerald-400 font-bold tracking-tight text-sm uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    OPTIMAL_ONLINE
                  </span>
                </div>
              </div>

            </div>
          </BorderGlow>
        </div>

        {/* INTEGRATED SKILLS ARRAY SUB-PANEL */}
        <div className="relative">
          <div className="flex items-center gap-4 mb-12 px-4">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-zinc-800" />
            <h3 className="text-xs font-black tracking-[0.3em] text-zinc-500 uppercase whitespace-nowrap">
              // DEPLOYED_CAPABILITIES.EXE
            </h3>
            <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-zinc-800" />
          </div>

          {/* Icon Grid Area */}
          <div className="relative z-20">
            <GlassIcons items={technicalSkills} />
          </div>
        </div>

      </div>
    </section>
  );
}