import React, { memo, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import DecryptedText from '../components/DecryptedText';
import BorderGlow from '../components/BorderGlow';
import DotField from '../components/DotField';

import profileImg from '../assets/img.jpeg';

import { FaReact, FaHtml5, FaNodeJs, FaPython, FaCss3Alt, FaFileDownload, FaExternalLinkAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiJavascript, SiFirebase, SiExpress, SiMysql } from 'react-icons/si';

const FullscreenDotFieldBg = memo(() => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
      <DotField
        dotRadius={2.5}
        dotSpacing={22}
        gradientFrom="rgba(255, 49, 90, 1.0)"  
        gradientTo="rgba(255, 0, 50, 0.6)"    
        glowColor="rgba(255, 49, 90, 0.5)"      
        bulgeStrength={50}
        cursorRadius={250}
      />
    </div>
  );
});

FullscreenDotFieldBg.displayName = "FullscreenDotFieldBg";

export default function About() {
  const [isLocked, setIsLocked] = useState(false);

  // ==========================================
  // PARALLAX MOUSE EFFECT
  // ==========================================
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Layer Offsets
  const bgX = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);
  const bgY = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8]);
  
  const hudX = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);
  const hudY = useTransform(smoothMouseY, [-0.5, 0.5], [-20, 20]);

  const cardX = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);
  const cardY = useTransform(smoothMouseY, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const technicalSkills = [
    { label: "REACT", icon: <FaReact className="text-[#00E5FF]" /> },
    { label: "EXPRESS", icon: <SiExpress className="text-[#F5F5F5]" /> },
    { label: "NODE.JS", icon: <FaNodeJs className="text-emerald-400" /> },
    { label: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { label: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
    { label: "TAILWIND", icon: <SiTailwindcss className="text-[#00E5FF]" /> },
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
      onMouseMove={handleMouseMove}
      className="min-h-screen py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden font-mono select-none bg-[#030305] text-[#F5F5F5] z-10"
    >
      {/* 1. LIGHTWEIGHT DOTFIELD BACKGROUND */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 z-0">
        <FullscreenDotFieldBg />
      </motion.div>

      {/* OVERLAYS & GRADIENTS */}
      <div className="absolute inset-0 bg-[#030305]/50 backdrop-blur-[1px] pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#030305_90%)] pointer-events-none z-[2]" />

      {/* FLOATING HUD CORNER WIDGETS */}
      <motion.div style={{ x: hudX, y: hudY }} className="absolute inset-0 pointer-events-none z-[4] hidden lg:block">
        <div className="absolute top-12 left-12 flex flex-col gap-1 text-[10px] text-[#8B8B8B] bg-[#09090B]/80 p-3 rounded border border-[#00E5FF]/20 backdrop-blur-md">
          <div className="flex items-center gap-2 text-[#00E5FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping" />
            <span>SYSTEM // ONLINE</span>
          </div>
          <span>FPS: 60.00</span>
          <span>LATENCY: 14ms</span>
          <span>MEM_ALLOC: 42.8%</span>
        </div>

        <div className="absolute top-12 right-12 flex flex-col items-end gap-1 text-[10px] text-[#8B8B8B] bg-[#09090B]/80 p-3 rounded border border-[#FF315A]/20 backdrop-blur-md">
          <span className="text-[#FF315A] font-bold">// CYBERNETIC_NODE</span>
          <span>GPU_LOAD: 2.1%</span>
          <span>LOC: [35.6895° N, 139.6917° E]</span>
          <span>BUILD: v2.8.4_PROD</span>
        </div>

        <div className="absolute bottom-12 left-12 text-[9px] text-[#8B8B8B]/60 tracking-widest uppercase">
          [NEO_TOKYO_INTERFACE_CORE]
        </div>

        <div className="absolute bottom-12 right-12 text-[9px] text-[#8B8B8B]/60 tracking-widest uppercase">
          SECURE_STREAM // 256-BIT
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ==========================================
            MASSIVE HUD HEADING WITH ROTATING TEXT
        ========================================== */}
        <motion.div style={{ x: hudX, y: hudY }} className="text-center mb-20 relative flex flex-col items-center justify-center">
          
          <div className="relative inline-flex items-center justify-center">
            
            {/* ROTATING SVG HUD RING */}
            <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] pointer-events-none animate-[spin_24s_linear_infinite] opacity-75">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <path
                  id="textPath"
                  d="M 100, 100 m -82, 0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
                  fill="none"
                />
                <text className="text-[9px] font-bold fill-[#00E5FF] uppercase tracking-[0.32em] drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">
                  <textPath href="#textPath" startOffset="0%">
                    SYSTEM OPERATOR // FULL STACK ENGINEER // AI DEVELOPER // CYBERNETIC INTERFACE //
                  </textPath>
                </text>
              </svg>
            </div>

            <div className="absolute w-[210px] h-[210px] sm:w-[280px] sm:h-[280px] rounded-full border border-[#00E5FF]/20 shadow-[0_0_30px_rgba(0,229,255,0.15)] pointer-events-none animate-pulse" />
            
            <div className="relative z-10 py-16 px-10 flex flex-col items-center">
              
              <span className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
              <span className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
              <span className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#FF315A] shadow-[0_0_8px_#FF315A]" />
              <span className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#FF315A] shadow-[0_0_8px_#FF315A]" />

              <DecryptedText
                text="ABOUT"
                animateOn="view"
                speed={25}
                sequential
                className="text-[#F5F5F5] drop-shadow-[0_0_20px_rgba(0,229,255,0.9)]"
                encryptedClassName="text-[#00E5FF] font-bold"
                parentClassName="text-5xl sm:text-7xl font-black tracking-[0.1em] uppercase"
              />

              <div className="flex items-center gap-2 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF315A] animate-ping" />
                <span className="text-[10px] tracking-[0.4em] text-[#00E5FF] uppercase font-bold">
                  SYS_OPERATOR // MANIFEST
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping" />
              </div>

            </div>

          </div>

          <div className="relative mx-auto mt-4 h-[2px] w-72 bg-gradient-to-r from-[#FF315A] via-[#F5F5F5] to-[#00E5FF] shadow-[0_0_12px_#00E5FF]" />
        </motion.div>

        {/* ==========================================
            TERMINAL BIO CARD & SCANNING PROFILE HUD
        ========================================== */}
        <motion.div style={{ x: cardX, y: cardY }} className="mb-12">
          <BorderGlow glowColor="0, 229, 255" glowRadius={80} className="w-full">
            <div className="p-6 sm:p-10 bg-[#09090B]/85 rounded-2xl border border-[#00E5FF]/30 relative backdrop-blur-xl grid lg:grid-cols-[1fr_320px] gap-10 items-center shadow-[0_0_50px_rgba(3,3,5,0.95)]">
              
              {/* TERMINAL BIO STREAM */}
              <div className="space-y-6 relative">
                
                {/* HUD Header Strip */}
                <div className="flex items-center justify-between border-b border-[#8B8B8B]/20 pb-3">
                  <div className="flex items-center gap-2 text-[10px] text-[#00E5FF] font-bold tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse shadow-[0_0_8px_#00E5FF]" />
                    BIO_STREAM // ONLINE
                  </div>
                  <div className="flex items-center gap-2 text-[9px] text-[#8B8B8B] tracking-wider">
                    <span>CLASS: FULL_STACK</span>
                    <span>|</span>
                    <span className="text-[#FF315A]">AI_SYSTEMS</span>
                  </div>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black text-[#F5F5F5] tracking-tight uppercase leading-snug">
                  ARCHITECTING <span className="text-[#FF315A] drop-shadow-[0_0_10px_rgba(255,49,90,0.8)]">HIGH-PERFORMANCE</span> DIGITAL SYSTEMS
                </h3>

                <p className="text-[#F5F5F5]/90 text-sm sm:text-base leading-relaxed tracking-wide">
                  I am a passionate software architecture builder specialized in developing full-stack environments and optimizing interactive computational vectors. I bridge mathematical precision with dynamic structural aesthetics.
                </p>
                
                <div className="relative p-4 bg-[#030305]/80 border-l-2 border-[#00E5FF] rounded-r-xl backdrop-blur-md">
                  <span className="absolute top-2 right-3 text-[8px] text-[#8B8B8B] font-mono">// RESEARCH_FOCUS</span>
                  <p className="text-[#8B8B8B] text-xs sm:text-sm leading-relaxed italic">
                    Currently engineered toward researching neural computing networks, automated interface deployments, and production-ready architectures that deliver absolute user optimization under extreme scale.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 font-mono text-xs">
                  <div className="p-3 bg-[#030305] border border-[#8B8B8B]/20 rounded-lg relative group transition-all duration-300 hover:border-[#00E5FF]/60 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#FF315A]" />
                    <span className="text-[9px] text-[#8B8B8B] uppercase block font-bold">OPERATOR</span>
                    <span className="font-bold text-[#F5F5F5] tracking-wider uppercase">ARNAV ANAND</span>
                  </div>
                  <div className="p-3 bg-[#030305] border border-[#8B8B8B]/20 rounded-lg relative group transition-all duration-300 hover:border-[#00E5FF]/60 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00E5FF]" />
                    <span className="text-[9px] text-[#8B8B8B] uppercase block font-bold">DEPLOYMENT</span>
                    <span className="font-bold text-[#00E5FF] tracking-wider uppercase">FULL STACK // AI</span>
                  </div>
                </div>
              </div>

              {/* TARGET SCANNING PROFILE INTERFACE */}
              <div 
                className="relative group mx-auto w-full max-w-[290px] cursor-crosshair"
                onMouseEnter={() => setIsLocked(true)}
                onMouseLeave={() => setIsLocked(false)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF315A] via-[#F5F5F5] to-[#00E5FF] rounded-2xl blur-md opacity-30 group-hover:opacity-90 transition duration-500" />
                
                <div className="relative rounded-2xl bg-[#09090B] border border-[#00E5FF]/40 p-4 space-y-4 backdrop-blur-2xl">
                  
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-[#8B8B8B]/30 group-hover:border-[#00E5FF] transition-colors duration-500 bg-[#030305]">
                    
                    <img 
                      src={profileImg} 
                      alt="Arnav Anand" 
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />

                    {/* Scanning Laser */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E5FF]/40 to-transparent w-full h-[25%] -translate-y-full group-hover:animate-[scan_2.5s_ease-in-out_infinite] pointer-events-none" />

                    {/* Radar Target overlay on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="w-36 h-36 border border-[#00E5FF]/60 rounded-full animate-spin [animation-duration:9s] flex items-center justify-center relative">
                        <div className="w-28 h-28 border border-dashed border-[#FF315A]/80 rounded-full animate-spin [animation-duration:4s] [animation-direction:reverse]" />
                        {/* Crosshair lines */}
                        <div className="absolute w-full h-[1px] bg-[#00E5FF]/40" />
                        <div className="absolute h-full w-[1px] bg-[#00E5FF]/40" />
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent pointer-events-none" />
                    
                    <span className="absolute top-2 left-2 text-[8px] font-mono font-bold text-[#00E5FF] bg-[#030305]/90 px-2 py-0.5 rounded border border-[#00E5FF]/40">
                      SYS_ID // 8820
                    </span>

                    {/* HUD Corner Accents */}
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#FF315A]" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#00E5FF]" />
                  </div>

                  {/* Dynamic Hover HUD Information */}
                  <div className="space-y-1.5 pt-1 text-[9px] font-mono">
                    <div className="flex items-center justify-between text-[#8B8B8B]">
                      <span>TARGET VERIFIED</span>
                      <span className="text-[#00E5FF]">LOCK: {isLocked ? '98%' : 'STANDBY'}</span>
                    </div>
                    <div className="flex items-center justify-between text-[#8B8B8B]">
                      <span>SIGNAL: STABLE</span>
                      <span className="text-[#FF315A]">BIOMETRIC: OK</span>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-[#8B8B8B]/20">
                      <span className="text-[#8B8B8B] text-[10px] font-bold">STATUS</span>
                      <span className={`font-bold tracking-tight text-[10px] uppercase flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border transition-all duration-300 ${
                        isLocked 
                          ? 'text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.4)]' 
                          : 'text-[#FF315A] bg-[#FF315A]/10 border-[#FF315A]/40'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${isLocked ? 'bg-[#00E5FF] animate-ping' : 'bg-[#FF315A] animate-pulse'}`} />
                        {isLocked ? 'ENGAGED // ONLINE' : 'STANDBY'}
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </BorderGlow>
        </motion.div>

        {/* ==========================================
            CYBERPUNK RESUME DIRECTIVE MODULE
        ========================================== */}
        <motion.div style={{ x: cardX, y: cardY }} className="mb-20">
          <div className="p-6 sm:p-8 bg-[#09090B]/90 rounded-2xl border border-[#FF315A]/30 relative backdrop-blur-xl shadow-[0_0_30px_rgba(255,49,90,0.1)]">
            
            {/* HUD Corner Accents */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#FF315A]" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00E5FF]" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00E5FF]" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#FF315A]" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              
              {/* Left Side: Directives Info */}
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2 text-[10px] text-[#FF315A] font-bold tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#FF315A] animate-ping" />
                  <span>SYSTEM_ARCHIVE // RESUME_DIRECTIVE</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-[#F5F5F5] uppercase tracking-wide">
                  DOWNLOAD FULL <span className="text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]">TECHNICAL PROFILE</span>
                </h4>
                <p className="text-[#8B8B8B] text-xs sm:text-sm leading-relaxed">
                  Access comprehensive documentation detailing software architecture experience, engineering achievements, and technical stack implementations.
                </p>
              </div>

              {/* Right Side: Interactive Action Buttons */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 w-full md:w-auto">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-5 py-3 bg-[#030305] border border-[#00E5FF]/40 text-[#00E5FF] rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:border-[#00E5FF] hover:bg-[#00E5FF]/10 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:-translate-y-0.5"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  <span>PREVIEW</span>
                </a>

                <a
                  href="/resume.pdf"
                  download="Arnav_Anand_Resume.pdf"
                  className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-6 py-3 bg-[#FF315A] text-[#F5F5F5] rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#FF315A]/90 hover:shadow-[0_0_25px_rgba(255,49,90,0.6)] hover:-translate-y-0.5"
                >
                  <FaFileDownload className="text-sm animate-bounce" />
                  <span>DOWNLOAD PDF</span>
                </a>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ==========================================
            CYBERPUNK CHIP CONVEYOR SKILLS MARQUEE
        ========================================== */}
        <div className="relative w-full">
          <div className="flex items-center gap-4 mb-8 px-4">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#00E5FF]/40 to-transparent" />
            <h3 className="text-xs font-black tracking-[0.3em] text-[#00E5FF] uppercase whitespace-nowrap drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]">
              // CORE ENGINE INTEGRATIONS
            </h3>
            <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#00E5FF]/40 to-transparent" />
          </div>

          <div className="relative w-full overflow-hidden bg-[#09090B]/80 border-y border-[#00E5FF]/20 py-8 backdrop-blur-xl [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <div className="flex w-max gap-8 animate-[marquee_32s_linear_infinite] hover:[animation-play-state:paused]">
              {loopingSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="group relative flex items-center gap-3.5 bg-[#030305] border border-[#8B8B8B]/20 py-3 px-6 rounded-xl backdrop-blur-md transition-all duration-300 hover:border-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,229,255,0.35)] hover:-translate-y-1 hover:rotate-1"
                >
                  {/* Chip Scan Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E5FF]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl pointer-events-none" />
                  
                  {/* Top Right Red Tech Accent */}
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#FF315A] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <span className="text-2xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    {skill.icon}
                  </span>
                  <span className="text-xs font-bold tracking-wider text-[#F5F5F5] font-mono group-hover:text-[#00E5FF] transition-colors">
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
        @keyframes scan {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(350%); }
          100% { transform: translateY(-100%); }
        }
      `}</style>
    </section>
  );
}