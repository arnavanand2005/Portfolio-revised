import { useEffect } from "react";
import {GridScan} from "./GridScan";

export default function IntroLoad({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[999] bg-black">
      <GridScan
        sensitivity={0.25}
        lineThickness={0.8}
        linesColor="#ffffff"
        scanColor="#00e5ff"
        gridScale={0.22}
        scanOpacity={0.25}
        enablePost={true}
        bloomIntensity={0.2}
        chromaticAberration={0}
        noiseIntensity={0}
        lineJitter={0}
        scanGlow={0.2}
    />

    <div className="absolute inset-0 flex flex-col items-center justify-center">

    <div className="w-20 h-20 border-2 border-cyan-400 rounded-full animate-spin border-t-transparent mb-8" />

    <h2 className="text-cyan-300 text-lg md:text-xl font-mono tracking-[0.4em] uppercase">
        INITIALIZING SYSTEM
    </h2>

    <p className="text-red-400 text-xs font-mono tracking-[0.3em] mt-4 animate-pulse">
        LOADING CONFIGURATION...
    </p>

    <div className="mt-8 w-64 h-[2px] bg-white/10 overflow-hidden rounded-full">
        <div className="h-full w-full bg-linear-to-r from-cyan-400 via-white to-red-500 animate-pulse" />
    </div>

    </div>
    </div>
  );
}