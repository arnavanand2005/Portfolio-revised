import React, { useState } from "react";
import GlitchText from "../components/GlitchText";
import BorderGlow from "../components/BorderGlow";
import DotField from "../components/DotField";
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal, FaShieldAlt, FaCircleNotch } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isFocused, setIsFocused] = useState("");
  const [transmissionStatus, setTransmissionStatus] = useState("STANDBY");

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTransmissionStatus("ENCRYPTING");
    setTimeout(() => {
      setTransmissionStatus("TRANSMITTING");
      setTimeout(() => {
        setTransmissionStatus("SUCCESS");
      }, 1500);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="bg-black min-h-screen py-24 px-4 sm:px-8 lg:px-12 flex items-center justify-center relative overflow-hidden font-sans select-none z-10"
    >
      {/* ========================================== */}
      {/* REACT BITS INTERACTIVE DOTFIELD BACKGROUND */}
      {/* ========================================== */}
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-auto">
        <DotField
          dotRadius={1.5}
          dotSpacing={16}
          bulgeStrength={80}
          glowRadius={180}
          sparkle={true}
          waveAmplitude={0.5}
          gradientFrom="#00E5FF"
          gradientTo="#FF003C"
          glowColor="rgba(0, 229, 255, 0.25)"
        />
      </div>

      {/* BACKGROUND OVERLAYS & VIGNETTE */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_90%)] pointer-events-none z-[2]" />
      
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none animate-pulse z-[2]" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[160px] pointer-events-none animate-pulse z-[2]" />

      {/* HUD CORNER BRACKETS */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-zinc-800 pointer-events-none z-[3]" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-zinc-800 pointer-events-none z-[3]" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-zinc-800 pointer-events-none z-[3]" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-zinc-800 pointer-events-none z-[3]" />

      <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col items-center">

        {/* HEADER SECTION */}
        <div className="text-center mb-16 relative w-full max-w-4xl">
          <div className="absolute top-0 left-0 text-[10px] font-mono text-zinc-600 tracking-widest hidden md:block">
            SYS.LOC // TERMINAL_CONNECT
          </div>
          <div className="absolute top-0 right-0 text-[10px] font-mono text-zinc-600 tracking-widest hidden md:block">
            VERSION 4.0.0-BETA
          </div>

          <div className="react-bits-glitch inline-block mt-4 md:mt-0">
            <GlitchText
              speed={0.4}
              enableShadows={true}
              enableOnHover={false}
              className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white uppercase"
            >
              CONTACT
            </GlitchText>
          </div>

          <div className="relative mx-auto mt-6 h-0.5 w-64 bg-gradient-to-r from-cyan-400 via-white to-red-500 shadow-[0_0_20px_rgba(0,229,255,0.6)]">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border border-black" />
          </div>

          <p className="mt-6 text-zinc-500 text-xs sm:text-sm font-bold tracking-[0.4em] uppercase">
            ESTABLISHING SECURE PROTOCOL LINKED COMM_CHANNEL
          </p>
        </div>

        {/* ========================================== */}
        {/* MAIN MASTER TWO-COLUMN GRID SYSTEM */}
        {/* ========================================== */}
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-8 w-full items-stretch">

          {/* ------------------------------------------ */}
          {/* LEFT INTERACTION TERMINAL (FORM CONSOLE)   */}
          {/* ------------------------------------------ */}
          <BorderGlow
            className="h-full w-full"
            glowColor="190 100 70"
            glowRadius={50}
            glowIntensity={1.3}
            borderRadius={24}
            colors={["#00E5FF", "#FFFFFF", "#FF003C"]}
          >
            <div className="p-6 sm:p-10 md:p-12 h-full bg-black/85 backdrop-blur-md rounded-[23px] flex flex-col justify-between border border-zinc-900 relative overflow-hidden">
              {/* Matrix Sub-Grid Lines Layer */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500/20 via-transparent to-red-500/20" />
              
              <div className="space-y-8">
                {/* HUD Header Bar */}
                <div className="flex items-center justify-between border-b border-zinc-900 pb-5">
                  <div className="flex items-start gap-4">
                    <span className="w-2 h-10 rounded-sm bg-gradient-to-b from-cyan-400 to-red-500 shadow-[0_0_15px_rgba(0,229,255,0.5)] animate-pulse" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-red-500 bg-red-950/50 px-2 py-0.5 rounded border border-red-900/40 font-bold tracking-widest animate-pulse">
                          CRITICAL LINK
                        </span>
                        <p className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase">
                          UPLINK: ENCRYPTED
                        </p>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide mt-1 uppercase">
                        COMMS CONSOLE
                      </h3>
                    </div>
                  </div>
                  
                  <div className="hidden sm:block text-right font-mono text-[10px] text-zinc-600 space-y-0.5">
                    <p>PORT: 443 // SECURE</p>
                    <p>STATUS: {transmissionStatus}</p>
                  </div>
                </div>

                {/* Form Elements */}
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  
                  {/* Row 1: Name and Email Inputs */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <span className={`absolute left-4 top-1/2 -translate-y-1/2 font-mono text-xs transition-colors duration-300 ${isFocused === "name" ? "text-cyan-400" : "text-zinc-600"}`}>
                        [01]
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="IDENT_NAME"
                        onFocus={() => setIsFocused("name")}
                        onBlur={() => setIsFocused("")}
                        value={formData.name}
                        onChange={(e) => handleInputChange(e, "name")}
                        className="w-full pl-14 pr-5 py-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white text-sm font-mono placeholder:text-zinc-700 outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-black focus:shadow-[0_0_20px_rgba(0,229,255,0.1)]"
                      />
                    </div>

                    <div className="relative">
                      <span className={`absolute left-4 top-1/2 -translate-y-1/2 font-mono text-xs transition-colors duration-300 ${isFocused === "email" ? "text-cyan-400" : "text-zinc-600"}`}>
                        [02]
                      </span>
                      <input
                        type="email"
                        required
                        placeholder="SECURE_EMAIL"
                        onFocus={() => setIsFocused("email")}
                        onBlur={() => setIsFocused("")}
                        value={formData.email}
                        onChange={(e) => handleInputChange(e, "email")}
                        className="w-full pl-14 pr-5 py-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white text-sm font-mono placeholder:text-zinc-700 outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-black focus:shadow-[0_0_20px_rgba(0,229,255,0.1)]"
                      />
                    </div>
                  </div>

                  {/* Row 2: Subject Input */}
                  <div className="relative">
                    <span className={`absolute left-4 top-1/2 -translate-y-1/2 font-mono text-xs transition-colors duration-300 ${isFocused === "subject" ? "text-cyan-400" : "text-zinc-600"}`}>
                      [03]
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="MESSAGE_SUBJECT_LINE"
                      onFocus={() => setIsFocused("subject")}
                      onBlur={() => setIsFocused("")}
                      value={formData.subject}
                      onChange={(e) => handleInputChange(e, "subject")}
                      className="w-full pl-14 pr-5 py-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white text-sm font-mono placeholder:text-zinc-700 outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-black focus:shadow-[0_0_20px_rgba(0,229,255,0.1)]"
                    />
                  </div>

                  {/* Row 3: Message Input */}
                  <div className="relative">
                    <span className={`absolute left-4 top-5 font-mono text-xs transition-colors duration-300 ${isFocused === "message" ? "text-cyan-400" : "text-zinc-600"}`}>
                      [04]
                    </span>
                    <textarea
                      rows={6}
                      required
                      placeholder="ENTER CORE TRANSMISSION DATA DESCR..."
                      onFocus={() => setIsFocused("message")}
                      onBlur={() => setIsFocused("")}
                      value={formData.message}
                      onChange={(e) => handleInputChange(e, "message")}
                      className="w-full pl-14 pr-5 py-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white text-sm font-mono placeholder:text-zinc-700 resize-none outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-black focus:shadow-[0_0_20px_rgba(0,229,255,0.1)]"
                    />
                    <div className="absolute bottom-3 right-4 font-mono text-[10px] text-zinc-600">
                      CHARS: {formData.message.length}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={transmissionStatus !== "STANDBY" && transmissionStatus !== "SUCCESS"}
                    className="w-full relative group py-4 rounded-xl font-black text-sm tracking-[0.25em] uppercase overflow-hidden transition-all duration-300 cursor-pointer active:scale-[0.99]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-white to-red-500 transition-all duration-300 group-hover:opacity-90" />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-all duration-200" />
                    
                    <span className="relative z-10 flex items-center justify-center gap-3 text-black">
                      {transmissionStatus === "STANDBY" && (
                        <>
                          <FaTerminal className="text-xs text-black" />
                          <span>INITIALIZE DATA COUPLING</span>
                          <span className="font-bold">→</span>
                        </>
                      )}
                      {transmissionStatus === "ENCRYPTING" && (
                        <>
                          <FaShieldAlt className="animate-bounce text-black" />
                          <span>PACKING PACKETS...</span>
                        </>
                      )}
                      {transmissionStatus === "TRANSMITTING" && (
                        <>
                          <FaCircleNotch className="animate-spin text-black" />
                          <span>BROADCASTING TO SPACE</span>
                        </>
                      )}
                      {transmissionStatus === "SUCCESS" && (
                        <span>✓ TRANSMISSION LOGGED SUCCESSFULLY</span>
                      )}
                    </span>
                  </button>

                </form>
              </div>

              {/* Data Status Bottom Footnote */}
              <div className="pt-6 mt-6 border-t border-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-600">
                <div className="flex items-center gap-4">
                  <p>&gt;_ STATUS: READY_TO_LINK</p>
                  <p className="hidden sm:block">ENC: RSA_4096</p>
                </div>
                <p className="tracking-widest">© 2026 ARNAV ANAND. ALL RIGHTS SECURED.</p>
              </div>

            </div>
          </BorderGlow>

          {/* ------------------------------------------ */}
          {/* RIGHT METRICS CONTROLLER (SOCIALS & HUD)   */}
          {/* ------------------------------------------ */}
          <BorderGlow
            className="h-full w-full"
            glowColor="350 100 70"
            glowRadius={50}
            glowIntensity={1.3}
            borderRadius={24}
            colors={["#FF003C", "#FFFFFF", "#00E5FF"]}
          >
            <div className="p-6 sm:p-10 md:p-12 flex flex-col justify-between gap-10 h-full bg-black/85 backdrop-blur-md rounded-[23px] border border-zinc-900 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500/20 via-transparent to-cyan-500/20" />
              
              <div className="space-y-6">
                <h3 className="text-red-500 text-xs font-black tracking-[0.35em] flex items-center gap-3 uppercase">
                  <span className="w-2 h-4 bg-red-500 rounded-sm animate-pulse shadow-[0_0_10px_rgba(255,0,60,0.6)]" />
                  EXTERNAL_NODES
                </h3>

                <div className="space-y-3">
                  
                  <a
                    href="https://github.com/arnavanand2005"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-zinc-900 transition-all duration-300 hover:border-cyan-400 hover:bg-zinc-900/20 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 text-zinc-500 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                        <FaGithub className="text-2xl cyber-icon text-cyan-400 group-hover:shadow-[0_0_35px_rgba(0,229,255,0.35)]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold font-mono text-zinc-400 group-hover:text-white transition-colors">NET_NODE // GITHUB</p>
                        <p className="text-xs text-zinc-600 font-mono mt-0.5">github.com/arnavanand2005</p>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-700 group-hover:text-cyan-400 transition-colors mr-2">[LINK]</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/arnav-anand-056710315/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-zinc-900 transition-all duration-300 hover:border-red-500 hover:bg-zinc-900/20 hover:shadow-[0_0_30px_rgba(255,0,60,0.08)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 text-zinc-500 group-hover:text-red-400 group-hover:border-red-500/30 transition-colors">
                        <FaLinkedin className="text-2xl cyber-icon text-red-400 group-hover:shadow-[0_0_35px_rgba(0,229,255,0.35)]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold font-mono text-zinc-400 group-hover:text-white transition-colors">NET_NODE // LINKEDIN</p>
                        <p className="text-xs text-zinc-600 font-mono mt-0.5">Connect professionally</p>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-700 group-hover:text-red-400 transition-colors mr-2">[LINK]</span>
                  </a>

                  <a
                    href="mailto:arnavanand2005@gmail.com"
                    className="group flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-zinc-900 transition-all duration-300 hover:border-white hover:bg-zinc-900/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 text-zinc-500 group-hover:text-white group-hover:border-zinc-700 transition-colors">
                        <FaEnvelope className="text-2xl cyber-icon text-white group-hover:shadow-[0_0_35px_rgba(0,229,255,0.25)]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold font-mono text-zinc-400 group-hover:text-white transition-colors">DIRECT_UPLINK // MAIL</p>
                        <p className="text-xs text-zinc-600 font-mono mt-0.5">arnavanand2005@gmail.com</p>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-700 group-hover:text-white transition-colors mr-2">[LINK]</span>
                  </a>

                </div>
              </div>

              <div className="p-5 rounded-xl border border-zinc-900 bg-zinc-950/50 space-y-5 relative">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] tracking-[0.25em] text-zinc-500 font-mono font-bold uppercase">
                    SYS_ENVIRONMENT_METRICS
                  </p>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                </div>

                {/* Animated simulated server audio waveform status lines */}
                <div className="h-6 flex items-end gap-1 px-1 border-b border-zinc-900 pb-2">
                  <div className="w-full bg-cyan-500/40 h-2 animate-[pulse_1s_infinite_100ms]" />
                  <div className="w-full bg-cyan-400/60 h-4 animate-[pulse_1.2s_infinite_300ms]" />
                  <div className="w-full bg-white/40 h-1 animate-[pulse_0.8s_infinite_500ms]" />
                  <div className="w-full bg-red-400/60 h-5 animate-[pulse_1.4s_infinite_200ms]" />
                  <div className="w-full bg-red-500/30 h-3 animate-[pulse_0.9s_infinite_400ms]" />
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)] animate-pulse" />
                      <span className="text-zinc-400 tracking-wide">FULL_STACK_DEV</span>
                    </div>
                    <span className="text-[10px] text-zinc-600 font-bold">ONLINE</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)] animate-pulse" />
                      <span className="text-zinc-400 tracking-wide">OPEN_SOURCE</span>
                    </div>
                    <span className="text-[10px] text-zinc-600 font-bold">ACTIVE</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)] animate-pulse" />
                      <span className="text-zinc-400 tracking-wide">AI_ML_MODELS</span>
                    </div>
                    <span className="text-[10px] text-red-500/70 font-bold animate-pulse">ENGAGED</span>
                  </div>
                </div>
              </div>

            </div>
          </BorderGlow>

        </div>
      </div>
    </section>
  );
}