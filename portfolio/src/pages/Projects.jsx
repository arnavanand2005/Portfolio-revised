import { useState } from "react";
import DecryptedText from "../components/DecryptedText";
import BorderGlow from "../components/BorderGlow";
import santos1 from "../assets/santos-1.png";
import santos2 from "../assets/santos-2.png";
import santos3 from "../assets/santos-3.png";
import santos4 from "../assets/santos-4.png";

const projects = [
  {
    title: "LOS SANTOS ESTATES",
    category: "FULL STACK MERN",
    images: [santos1, santos2, santos3, santos4],
    image: santos1,
    description:
      "Modern real estate platform featuring authentication, property listings, image uploads, search filters and responsive design.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/arnavanand2005/Mern-stack-estate",
    demo: "https://mern-stack-estate-b5hs.onrender.com",
    loc: "1,240 LINES",
    status: "DEPLOYED",
    hash: "0x8F3A2",
  },
  {
    title: "AMCS",
    category: "RESEARCH PROJECT",
    image: "/placeholder-project.png",
    description:
      "Adaptive Multi-Criteria Search for autonomous delivery bots with multi-objective path planning and optimization.",
    tech: ["Python", "AI", "Optimization"],
    github: "#",
    demo: "#",
    loc: "3,820 LINES",
    status: "STABLE",
    hash: "0x3C9B1",
  },
  {
    title: "SQAC WEBSITE",
    category: "WEB DEVELOPMENT",
    image: "/placeholder-project.png",
    description: "Official student club website built with modern frontend frameworks.",
    tech: ["React", "Tailwind"],
    github: "#",
    demo: "#",
    loc: "840 LINES",
    status: "LIVE",
    hash: "0x91A4E",
  },
  {
    title: "BRUNO'S PIZZERIA",
    category: "REACT PROJECT",
    image: "/placeholder-project.png",
    description: "Modern restaurant landing page and responsive ordering client.",
    tech: ["React", "CSS"],
    github: "#",
    demo: "#",
    loc: "450 LINES",
    status: "COMPLETED",
    hash: "0x55B2F",
  },
  {
    title: "SKYSENSE",
    category: "WEATHER APPLICATION",
    image: "/placeholder-project.png",
    description: "Dynamic weather application with live contextual API integration and location rendering.",
    tech: ["React", "OpenWeather API"],
    github: "#",
    demo: "#",
    loc: "610 LINES",
    status: "OPERATIONAL",
    hash: "0x77X1C",
  },
  {
    title: "EDUSITY",
    category: "EDTECH WEBSITE",
    image: "/placeholder-project.png",
    description: "Responsive higher-education university landing architecture.",
    tech: ["React", "Tailwind"],
    github: "#",
    demo: "#",
    loc: "1,100 LINES",
    status: "ARCHIVED",
    hash: "0x22D9M",
  },
  {
    title: "MINEVERSE",
    category: "GAME PLATFORM",
    image: "/placeholder-project.png",
    description: "Minecraft-inspired immersive vector web experience and user routing hubs.",
    tech: ["React"],
    github: "#",
    demo: "#",
    loc: "920 LINES",
    status: "MAINTENANCE",
    hash: "0x44P6K",
  },
  {
    title: "RESEARCH.LOG",
    category: "CURRENTLY EXPLORING",
    image: "/placeholder-project.png",
    description:
      "Machine Learning, Deep Learning, Computer Vision, Intelligent Systems and advanced AI research logs.",
    tech: ["Python", "TensorFlow", "PyTorch"],
    github: "#",
    demo: "#",
    loc: "ACTIVE DATA",
    status: "COMPILING",
    hash: "0x99Z7Z",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(projects[0]);
  const [activeImage, setActiveImage] = useState(0);

  // Helper to resolve current picture feed source accurately
  const getActiveImageSrc = () => {
    if (selected.images && selected.images.length > 0) {
      return selected.images[activeImage];
    }
    return selected.image;
  };

  const hasValidImage = selected.image && selected.image !== "/placeholder-project.png";

  return (
    <section
      id="projects"
      className="min-h-screen bg-black py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden font-mono select-none"
    >
      {/* Laser Scanning Tech Backdrop Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_95%)] pointer-events-none" />

      {/* Extreme Neon Bleeds */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-red-500/5 blur-[160px] rounded-full pointer-events-none animate-pulse" />

      {/* Global Interface Bounding Corners */}
      <div className="absolute top-4 left-4 text-zinc-800 text-[10px] tracking-widest hidden md:block">SYS_REF // 409-NX</div>
      <div className="absolute top-4 right-4 text-zinc-800 text-[10px] tracking-widest hidden md:block">LOC_0x7FFF</div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ========================================== */}
        {/* HEADER SECTION */}
        {/* ========================================== */}
        <div className="text-center mb-20 relative">
          <div className="react-bits-glitch inline-block">
            <DecryptedText
              text="PROJECTS.EXE"
              animateOn="view"
              speed={25}
              sequential
              revealDirection="center"
              className="text-white"
              encryptedClassName="text-cyan-400"
              parentClassName="text-5xl sm:text-7xl font-black tracking-[-0.03em] uppercase"
            />
          </div>

          <div className="relative mx-auto mt-6 h-[2px] w-72 bg-gradient-to-r from-cyan-500 via-white to-red-500 shadow-[0_0_20px_rgba(0,229,255,0.6)]">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rotate-45 border border-black" />
          </div>

          <p className="mt-5 text-zinc-500 tracking-[0.45em] uppercase text-[10px] font-bold">
            [ MEMORY CORE REGISTRY ALLOCATION INDEX ]
          </p>
        </div>


        {/* ========================================== */}
        {/* WORKSPACE LAYOUT CONTAINER */}
        {/* ========================================== */}
        <div className="grid lg:grid-cols-[360px_1fr] gap-8 items-stretch">

          {/* LEFT SECTION: HIGH-DENSITY DIRECTORY LIST */}
          <BorderGlow
            glowColor="190 100 70"
            glowRadius={40}
            className="h-full w-full"
          >
            <div className="p-5 h-full bg-zinc-950/90 rounded-[20px] border border-zinc-900/80 flex flex-col justify-between relative backdrop-blur-md">
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-cyan-500/30 via-transparent to-red-500/20" />
              
              <div>
                <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-4">
                  <p className="text-red-500 text-xs font-black tracking-widest uppercase flex items-center gap-2">
                    <span className="w-1.5 h-3 bg-red-500 rounded-sm animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                    CORE_REGISTRY
                  </p>
                  <span className="text-[10px] text-zinc-600 font-mono tracking-tighter">DATA_POOL: {projects.length}</span>
                </div>

                {/* Cyberpunk Selection Buttons */}
                <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-zinc-800">
                  {projects.map((project, index) => {
                    const isSelected = selected.title === project.title;
                    return (
                      <button
                        key={project.title}
                        onClick={() => {
                          setSelected(project);
                          setActiveImage(0);
                        }}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-200 relative group border cursor-pointer overflow-hidden
                        ${
                          isSelected
                            ? "bg-zinc-900/40 border-cyan-400/60 shadow-[inset_0_0_15px_rgba(0,229,255,0.05)]"
                            : "bg-black/40 border-zinc-900/60 hover:border-zinc-800 hover:bg-zinc-900/20"
                        }`}
                      >
                        {/* Selected Indicator Bar */}
                        {isSelected && (
                          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 to-red-500 shadow-[0_0_10px_rgba(0,229,255,1)]" />
                        )}

                        <div className="flex justify-between items-center mb-1">
                          <p className={`text-[9px] tracking-widest font-bold ${isSelected ? "text-cyan-400" : "text-zinc-600 group-hover:text-zinc-500"}`}>
                            LN_{String(index + 1).padStart(2, "0")} // {project.hash}
                          </p>
                          <span className={`text-[8px] font-black px-1.5 py-0.5 rounded border tracking-wide uppercase transition-all duration-300
                            ${isSelected ? "border-cyan-500/30 text-cyan-400 bg-cyan-950/30 shadow-[0_0_8px_rgba(0,229,255,0.2)]" : "border-zinc-900 text-zinc-600 bg-transparent"}`}>
                            {project.status}
                          </span>
                        </div>

                        <h3 className={`font-black tracking-wide text-sm uppercase transition-colors duration-200
                          ${isSelected ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"}`}>
                          {project.title}
                        </h3>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar Terminal Status Baseline */}
              <div className="mt-6 pt-4 border-t border-zinc-900 text-[9px] text-zinc-600 flex justify-between items-center">
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-green-500 animate-ping" />
                  SECTOR_0X889A
                </span>
                <span>SYS_READY_</span>
              </div>
            </div>
          </BorderGlow>


          {/* RIGHT SECTION: MAIN DISPLAY CONSOLE TERMINAL */}
          <BorderGlow
            glowColor="190 100 70"
            glowRadius={60}
            glowIntensity={1.4}
            className="h-full w-full"
          >
            <div className="p-6 sm:p-10 bg-zinc-950/90 rounded-[20px] border border-zinc-900/80 relative overflow-hidden backdrop-blur-md flex flex-col justify-between h-full">
              
              {/* Tactical Blueprint Grid Crosshairs */}
              <div className="absolute top-4 right-4 text-[9px] text-zinc-700 tracking-tighter hidden sm:block">
                SYS_LOC // [X: 104.22 // Y: 490.11]
              </div>
              <div className="absolute top-3 left-3 w-1.5 h-1.5 border-t border-l border-zinc-800" />
              <div className="absolute bottom-3 left-3 w-1.5 h-1.5 border-b border-l border-zinc-800" />
              <div className="absolute bottom-3 right-3 w-1.5 h-1.5 border-b border-r border-zinc-800" />

              <div>
                {/* Console Panel Header Layout Block */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-900 pb-6 mb-8 gap-4">
                  <div className="flex items-start gap-4">
                    <span className="w-1.5 h-12 rounded-sm bg-gradient-to-b from-cyan-400 via-white to-red-500 shadow-[0_0_15px_rgba(0,229,255,0.4)]" />
                    <div>
                      <p className="text-red-500 text-[10px] font-black tracking-[0.35em] uppercase">
                        // PROTOCOL: {selected.category}
                      </p>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter mt-1 uppercase">
                        {selected.title}
                      </h2>
                    </div>
                  </div>

                  {/* Telemetry Status Grid Blocks */}
                  <div className="grid grid-cols-2 gap-4 border border-zinc-900 bg-black/60 p-3 rounded-xl text-xs min-w-[200px] relative">
                    <div className="absolute top-0 right-2 w-1 h-1 bg-red-500" />
                    <div>
                      <p className="text-zinc-600 text-[8px] tracking-wider uppercase font-bold">METRIC_SIZE</p>
                      <p className="text-zinc-300 font-bold mt-0.5 tracking-tight">{selected.loc || "UNKNOWN"}</p>
                    </div>
                    <div>
                      <p className="text-zinc-600 text-[8px] tracking-wider uppercase font-bold">NODE_STATE</p>
                      <p className="text-cyan-400 font-bold mt-0.5 tracking-tight">{selected.status}</p>
                    </div>
                  </div>
                </div>

                {/* Component Body Content Splitting Grid */}
                <div className="grid xl:grid-cols-[1.25fr_0.75fr] gap-8 items-start">
                  
                  {/* Left Column Component Layout: Media Streams / Interactive Handles */}
                  <div className="space-y-5">
                    <div className="h-[340px] sm:h-[400px] rounded-xl border border-zinc-800 bg-black flex flex-col items-center justify-center p-2 relative overflow-hidden group">
                      
                      {/* Neon Tactical View Box Bracket Crosshairs */}
                      <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-cyan-400/40 group-hover:border-cyan-400 transition-colors" />
                      <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-cyan-400/40 group-hover:border-cyan-400 transition-colors" />
                      <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-cyan-400/40 group-hover:border-cyan-400 transition-colors" />
                      <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-cyan-400/40 group-hover:border-cyan-400 transition-colors" />
                      
                      {/* Interactive Visual Scanning Laser Beam Line Overlay Animation */}
                      <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent top-0 animate-[bounce_4s_infinite_ease-in-out] pointer-events-none shadow-[0_0_10px_rgba(0,229,255,1)]" />

                      {hasValidImage ? (
                        <img
                          src={getActiveImageSrc()}
                          alt={selected.title}
                          className="w-full h-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      ) : (
                        <div className="text-center space-y-2 z-10">
                          <span className="text-cyan-400 tracking-[0.4em] text-xs font-black uppercase flex items-center justify-center gap-2">
                            <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                            VISUAL_STREAM_LINK_NULL
                          </span>
                          <p className="text-zinc-600 text-[10px] tracking-wide">
                            BUFFER_FEED_FALLBACK_ACTIVE // {selected.hash}
                          </p>
                        </div>
                      )}

                      {selected.images && selected.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/60 px-3 py-1.5 rounded-full border border-zinc-900 backdrop-blur-md">
                          {selected.images.map((img, index) => (
                            <button
                              key={index}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveImage(index);
                              }}
                              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                activeImage === index
                                  ? "bg-cyan-400 w-4 shadow-[0_0_12px_rgba(0,229,255,0.8)]"
                                  : "bg-zinc-700 hover:bg-zinc-500"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                      
                      <div className="absolute bottom-2 left-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[8px] text-zinc-500 bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-800">SCAN_FREQUENCY_OK</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <a
                        href={selected.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="relative group py-4 rounded-xl overflow-hidden font-black text-xs tracking-[0.2em] text-center text-black bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                      >
                        LAUNCH_LIVE_CLIENT →
                      </a>

                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noreferrer"
                        className="relative group py-4 rounded-xl overflow-hidden font-black text-xs tracking-[0.2em] text-center border border-red-500/40 text-red-400 bg-red-950/10 hover:border-red-500 hover:bg-red-500 hover:text-white hover:shadow-[0_0_25px_rgba(239,68,68,0.3)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                      >
                        SOURCE_FILE [GIT]
                      </a>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="border border-zinc-900 bg-black/40 p-5 rounded-xl relative">
                      <div className="absolute top-0 right-4 w-6 h-[1px] bg-cyan-400" />
                      <p className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest mb-3 border-b border-zinc-900/60 pb-2">
                        // CORE_MANIFEST_DATA
                      </p>
                      <p className="text-zinc-400 text-xs font-medium leading-relaxed tracking-wide">
                        {selected.description}
                      </p>
                    </div>

                    <div className="border border-zinc-900 bg-black/40 p-5 rounded-xl relative">
                      <div className="absolute bottom-0 left-4 w-6 h-[1px] bg-red-500" />
                      <p className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest mb-3">
                        // INTEGRATED_ENVIRONMENT_DEPENDENCIES
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selected.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg border border-zinc-900 bg-zinc-950 text-[11px] font-bold text-zinc-300 flex items-center gap-2 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] hover:border-zinc-700 transition-colors"
                          >
                            <span className="w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_6px_rgba(0,229,255,1)] animate-pulse" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="pt-4 mt-8 border-t border-zinc-900 flex justify-between items-center text-[9px] text-zinc-600 tracking-wider">
                <span>DAT_LINK: //LOCALHOST:3000</span>
                <span className="hidden sm:inline">TRANS_STREAM_STATUS_OK // 200</span>
              </div>

            </div>
          </BorderGlow>

        </div>
      </div>
    </section>
  );
}