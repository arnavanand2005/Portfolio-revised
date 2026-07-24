import React from "react";
import PlasmaWave from "../components/PlasmaWave";
import RotatingText from "../components/RotatingText";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black select-none">

      <div className="absolute inset-0">
        <PlasmaWave
          colors={["#00E5FF", "#FF2E63"]}
          speed1={0.09}
          speed2={0.12}
          focalLength={0.95}
          bend1={0.8}
          bend2={0.55}
          dir2={-1}
          rotationDeg={7}
        />
      </div>

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute right-1/4 bottom-1/3 h-96 w-96 rounded-full bg-red-500/10 blur-[140px]" />

      <div className="relative z-10 w-full max-w-5xl px-6">

        <div className="relative overflow-hidden rounded-[28px] border border-cyan-500/20 bg-black/40 backdrop-blur-xl shadow-[0_0_70px_rgba(0,229,255,0.08)]">

          <div className="absolute top-4 left-4 w-5 h-5 border-l-2 border-t-2 border-cyan-400" />
          <div className="absolute top-4 right-4 w-5 h-5 border-r-2 border-t-2 border-red-400" />
          <div className="absolute bottom-4 left-4 w-5 h-5 border-l-2 border-b-2 border-cyan-400" />
          <div className="absolute bottom-4 right-4 w-5 h-5 border-r-2 border-b-2 border-red-400" />

          <div className="flex items-center justify-between border-b border-zinc-800 px-8 py-5">

            <div className="flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.35em] text-red-400 uppercase">
                SYSTEM INITIALIZED
              </span>

            </div>

            <span className="font-mono text-[10px] tracking-[0.25em] text-zinc-500">
              USER://ARNAV
            </span>

          </div>

          <div className="px-10 py-16">

            <p className="mb-3 text-xs uppercase tracking-[0.45em] text-zinc-500">
              PORTFOLIO_INTERFACE
            </p>

            <h1 className="leading-none">

              <span className="block text-5xl font-black uppercase text-white md:text-7xl">
                Hi, I'm
              </span>

              <span className="mt-3 block bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-clip-text text-6xl font-black uppercase text-transparent md:text-8xl">
                Arnav Anand
              </span>

            </h1>

            <div className="mt-12 flex flex-wrap items-center gap-4">

              <span className="font-mono text-sm font-bold uppercase tracking-[0.35em] text-red-400">
                EXEC_ROLE:
              </span>

              <RotatingText
                texts={[
                  "FULL STACK DEVELOPER",
                  "AI ENGINEER",
                  "MACHINE LEARNING ENTHUSIAST",
                  "RESEARCHER",
                  "PROBLEM SOLVER",
                  "REACT DEVELOPER",
                ]}
                mainClassName="rounded-xl border border-cyan-400/30 bg-zinc-900 px-5 py-3 font-mono font-black tracking-[0.2em] text-cyan-400 shadow-[0_0_30px_rgba(0,229,255,0.18)] text-sm sm:text-base !whitespace-nowrap overflow-hidden inline-flex items-center"
                staggerFrom="last"
                staggerDuration={0.02}
                splitBy="characters"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 inline-flex"
                transition={{
                  type: "spring",
                  damping: 24,
                  stiffness: 280,
                }}
                rotationInterval={2600}
                auto
                loop
              />

            </div>

            <p className="mt-10 max-w-3xl text-lg leading-8 text-zinc-400">
              B.Tech Computer Science (AIML) student passionate about building
              scalable full-stack applications, exploring artificial
              intelligence, and designing interactive digital experiences that
              combine performance with modern aesthetics.
            </p>

          </div>

          <div className="flex items-center justify-between border-t border-zinc-800 px-8 py-5 font-mono text-[10px] tracking-[0.25em] text-zinc-500">

            <span>
              STATUS:
              <span className="ml-2 text-cyan-400">ONLINE</span>
            </span>

            <span>BUILD v2.4.1</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;