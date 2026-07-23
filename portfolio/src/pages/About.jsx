
import React, { memo } from 'react';
import DecryptedText from '../components/DecryptedText';
import BorderGlow from '../components/BorderGlow';
import Hyperspeed from "../components/HyperSpeed";

import { FaReact, FaHtml5, FaNodeJs, FaPython, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiJavascript, SiFirebase, SiExpress, SiMysql } from 'react-icons/si';

// Memoizing Hyperspeed prevents re-render triggers from killing/restarting the WebGL loop
const PermanentHyperspeed = memo(() => {
  return (
    <div className="absolute inset-0 z-0 opacity-80 pointer-events-none w-full h-full overflow-hidden">
      <Hyperspeed
        effectOptions={{
          onSpeedUp: () => {},
          onSlowDown: () => {},
          distortion: 'turbulentDistortion',
          length: 400,
          roadWidth: 12,
          islandWidth: 2,
          lanesPerRoad: 3,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 3,
          carLightsFade: 0.1,
          totalSideLightSticks: 30,
          lightPairsPerRoad: 50,
          shoulderLinesWidth: 1.5,
          brokenLinesWidth: 1,
          brokenLinesLength: 12,
          shoulderLinesColor: 0x00f0ff,
          brokenLinesColor: 0x00f0ff,
          leftCarsColor: [0x00f0ff, 0x06b6d4, 0x3b82f6],
          rightCarsColor: [0xff007f, 0xec4899, 0xa855f7],
          sticksColor: 0x00f0ff,
        }}
      />
    </div>
  );
});

PermanentHyperspeed.displayName = "PermanentHyperspeed";

export default function About() {
  const technicalSkills = [
    { label: "REACT", icon: <FaReact className="text-cyan-400" /> },
    { label: "EXPRESS", icon: <SiExpress className="text-zinc-100" /> },
    { label: "NODE.JS", icon: <FaNodeJs className="text-emerald-400" /> },
    { label: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { label: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
    { label: "TAILWIND", icon: <SiTailwindcss className="text-cyan-400" /> },
    { label: "JAVASCRIPT", icon: <SiJavascript className="text-yellow-400" /> },
    { label: "PYTHON", icon: <FaPython className="text-blue-400" /> },
    { label: "MONGODB", icon: <SiMongodb className="text-green-500" /> },
    { label: "MYSQL", icon: <SiMysql className="text-sky-400" /> },
    { label: "FIREBASE", icon: <SiFirebase className="text-amber-500" /> }
  ];

  const loopingSkills = [...technicalSkills, ...technicalSkills];

  return (
    <section 
      id="about" 
      className="min-h-screen py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden font-mono select-none z-10 bg-[#030303] text-zinc-100"
    >
      {/* PERSISTENT HYPERSPEED CANVAS */}
      <PermanentHyperspeed />

      {/* VIGNETTE GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_90%)] pointer-events-none z-[1]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
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
          <div className="relative mx-auto mt-4 h-[1px] w-56 bg-gradient-to-r from-cyan-500 via-zinc-800 to-red-500" />
          <p className="mt-3 text-zinc-500 tracking-[0.4em] uppercase text-[9px] font-bold">
            [ IDENTITY REGISTRY // CORE SKILLS MANIFEST ]
          </p>
        </div>

        {/* BIO & PROFILE CARD */}
        <div className="mb-24">
          <BorderGlow glowColor="0, 229, 255" glowRadius={60} className="w-full">
            <div className="p-6 sm:p-10 bg-zinc-950/60 rounded-[16px] border border-zinc-800/80 relative backdrop-blur-2xl grid lg:grid-cols-[1fr_340px] gap-10 items-center shadow-2xl shadow-black">
              
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-[10px] text-cyan-400 font-bold tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  BIOGRAPHICAL_STREAM_INIT
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                  ARCHITECTING <span className="text-cyan-400">HIGH-PERFORMANCE</span> DIGITAL SYSTEMS
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed tracking-wide">
                  I am a passionate software architecture builder specialized in developing full-stack environments and optimizing interactive computational vectors. I bridge mathematical precision with dynamic structural aesthetics.
                </p>
                
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed tracking-wide border-l-2 border-cyan-500/50 pl-4 italic bg-cyan-950/20 py-2 rounded-r-lg">
                  Currently engineered toward researching neural computing networks, automated interface deployments, and production-ready architectures that deliver absolute user optimization under extreme scale.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2 font-mono">
                  <div className="p-3 bg-black/50 border border-zinc-800/80 rounded-lg backdrop-blur-md">
                    <span className="text-[9px] text-zinc-500 uppercase block font-bold">OPERATOR</span>
                    <span className="text-sm font-black text-white tracking-wider uppercase">ARNAV ANAND</span>
                  </div>
                  <div className="p-3 bg-black/50 border border-zinc-800/80 rounded-lg backdrop-blur-md">
                    <span className="text-[9px] text-zinc-500 uppercase block font-bold">DEPLOYMENT</span>
                    <span className="text-sm font-black text-cyan-400 tracking-wider uppercase">FULL STACK // AI</span>
                  </div>
                </div>
              </div>

              {/* PROFILE IMAGE BADGE */}
              <div className="relative group mx-auto w-full max-w-[300px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-70 transition duration-500" />
                
                <div className="relative rounded-2xl bg-black/80 border border-zinc-800 p-4 space-y-4 backdrop-blur-xl">
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-zinc-800/80 group-hover:border-cyan-500/50 transition-colors duration-500 bg-zinc-900">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" 
                      alt="Arnav Anand" 
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-2 left-2 text-[8px] font-mono font-bold text-cyan-400 bg-black/70 px-1.5 py-0.5 rounded border border-cyan-500/30 backdrop-blur-sm">
                      IMG_REF // 001
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono pt-1">
                    <span className="text-zinc-500 text-[10px] tracking-wider uppercase font-bold">STATUS</span>
                    <span className="text-emerald-400 font-bold tracking-tight text-[11px] uppercase flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      OPTIMAL_ONLINE
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </BorderGlow>
        </div>

        {/* LOGO MARQUEE */}
        <div className="relative w-full">
          <div className="flex items-center gap-4 mb-8 px-4">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-zinc-800" />
            <h3 className="text-xs font-black tracking-[0.3em] text-zinc-500 uppercase whitespace-nowrap">
              // CORE ENGINE INTEGRATIONS
            </h3>
            <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-zinc-800" />
          </div>

          <div className="relative w-full overflow-hidden bg-zinc-950/30 border-y border-zinc-900/60 py-8 backdrop-blur-md [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <div className="flex w-max gap-16 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
              {loopingSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-zinc-900/40 border border-zinc-800/60 py-2.5 px-5 rounded-xl backdrop-blur-md transition-colors duration-300 hover:border-cyan-500/40"
                >
                  <span className="text-2xl flex items-center justify-center">
                    {skill.icon}
                  </span>
                  <span className="text-xs font-bold tracking-wider text-zinc-300 font-mono">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
