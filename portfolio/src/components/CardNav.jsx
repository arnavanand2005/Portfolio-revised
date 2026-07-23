import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import cv from "../assets/cv.pdf";

const CardNav = ({
  items,
  className = "",
  ease = "power4.out",
  baseColor = "rgba(9, 9, 11, 0.85)", // Glassmorphism backdrop
  buttonBgColor = "#FF3B3B",
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      const contentEl = navEl.querySelector(".card-nav-content");

      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = "visible";
        contentEl.style.pointerEvents = "auto";
        contentEl.style.position = "static";
        contentEl.style.height = "auto";

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }

    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, {
      height: 60,
      overflow: "hidden",
    });

    gsap.set(cardsRef.current, {
      y: 30,
      opacity: 0,
      skewX: -3,
    });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.45,
      ease,
    });

    tl.to(
      cardsRef.current,
      {
        y: 0,
        opacity: 1,
        skewX: 0,
        duration: 0.4,
        ease,
        stagger: 0.06,
      },
      "-=0.2"
    );

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      tlRef.current.kill();

      const newTl = createTimeline();

      if (newTl) {
        if (isExpanded) newTl.progress(1);
        tlRef.current = newTl;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;

    if (!tl) return;

    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);

      tl.eventCallback("onReverseComplete", () =>
        setIsExpanded(false)
      );

      tl.reverse();
    }
  };

  const handleNavClick = (e, href) => {
    // If linking internally via anchor tags (e.g. #contact)
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      
      // Close menu first
      if (isExpanded) {
        toggleMenu();
      }

      // Smooth scroll target into view
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const setCardRef = (i) => (el) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-[9999] top-5 select-none font-mono ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${
          isExpanded ? "open" : ""
        } block h-[60px] rounded-xl relative overflow-hidden backdrop-blur-2xl border transition-colors duration-300`}
        style={{
          backgroundColor: baseColor,
          borderColor: isExpanded ? "rgba(0, 229, 255, 0.4)" : "rgba(39, 39, 42, 0.6)",
          boxShadow: isExpanded 
            ? "0 0 35px rgba(0,229,255,0.15), inset 0 0 15px rgba(0,229,255,0.05)" 
            : "0 10px 30px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.05)",
        }}
      >
        {/* HUD Scanline & Laser Edge Effects */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#00E5FF] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.03),transparent_60%)] pointer-events-none" />

        {/* Micro Tech Details / Bracket Anchors */}
        <div className="absolute top-1 left-1 text-[7px] text-zinc-600 tracking-tighter">SYS_MAPPED // 0x7F</div>
        <div className="absolute bottom-1 right-1 text-[7px] text-zinc-600 tracking-tighter hidden md:block">LOC_INDEX_N0.32</div>

        {/* Top Header Row Panel */}
        <div className="absolute inset-x-0 top-0 h-[60px] flex items-center justify-between px-6 z-[2]">
          
          {/* Cyber Trigger Matrix Hamburger Toggle */}
          <div
            onClick={toggleMenu}
            role="button"
            tabIndex={0}
            className="flex flex-col gap-1.5 cursor-pointer text-cyan-400 hover:text-red-400 group transition-colors duration-300 relative py-2 pr-4"
          >
            <div
              className={`w-6 h-[2px] bg-current transition-all duration-300 shadow-[0_0_6px_currentColor] ${
                isHamburgerOpen ? "translate-y-2 rotate-45 text-red-500" : ""
              }`}
            />
            <div
              className={`w-4 h-[2px] bg-current transition-all duration-300 shadow-[0_0_6px_currentColor] ${
                isHamburgerOpen ? "opacity-0 -translate-x-2" : ""
              }`}
            />
            <div
              className={`w-6 h-[2px] bg-current transition-all duration-300 shadow-[0_0_6px_currentColor] ${
                isHamburgerOpen ? "-translate-y-2 -rotate-45 text-red-500" : ""
              }`}
            />
          </div>

          {/* Holographic Logo Emplacement */}
          <div className="absolute left-1/2 -translate-x-1/2 cursor-pointer" onClick={(e) => handleNavClick(e, "#hero")}>
            <h1 className="font-black text-lg tracking-[0.35em] drop-shadow-[0_0_12px_rgba(0,229,255,0.3)] select-none uppercase">
              <span className="text-cyan-400 hover:text-white transition-colors">ARNAV</span>
              <span className="text-white">.</span>
              <span className="text-red-500">//DEV</span>
            </h1>
          </div>

          {/* Action Trigger Node (Download CV) */}
          <a
            href={cv}
            download="Arnav_Anand_resume.pdf"
            className="hidden md:flex px-4 h-9 items-center rounded-lg font-black text-[11px] tracking-[0.2em] uppercase border relative overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{ 
              backgroundColor: "rgba(255, 59, 59, 0.1)", 
              borderColor: "rgba(255, 59, 59, 0.4)",
              color: "#FFF",
              boxShadow: "0 0 15px rgba(255, 59, 59, 0.15)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 25px rgba(255, 59, 59, 0.5)";
              e.currentTarget.style.backgroundColor = buttonBgColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 15px rgba(255, 59, 59, 0.15)";
              e.currentTarget.style.backgroundColor = "rgba(255, 59, 59, 0.1)";
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white mr-2 animate-ping" />
            LOAD_RESUME.EXE
          </a>
        </div>

        {/* Tactical Sub-Matrix Expansion Deck */}
        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-3 flex flex-col gap-3 transition-all duration-300 ${
            isExpanded ? "visible pointer-events-auto opacity-100" : "invisible pointer-events-none opacity-0"
          } md:flex-row`}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              ref={setCardRef(idx)}
              className="rounded-xl p-5 flex flex-col gap-4 flex-1 border bg-gradient-to-b from-zinc-950/90 to-black/95 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,229,255,0.12),inset_0_0_10px_rgba(0,229,255,0.05)]"
              style={{
                borderColor: "rgba(39, 39, 42, 0.6)",
                boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.02)"
              }}
            >
              {/* Card Corner Tech Decorators */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-800 group-hover:border-cyan-400 transition-colors" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-800 group-hover:border-red-500 transition-colors" />
              
              <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                <h2 className="text-xs font-black tracking-[0.18em] uppercase text-white group-hover:text-cyan-400 transition-colors">
                  // {item.label}
                </h2>
                <span className="text-[8px] text-zinc-600 font-bold tracking-widest group-hover:text-red-500 transition-colors">IDX_0{idx+1}</span>
              </div>

              {/* Data Links Vector Array */}
              <div className="flex flex-col gap-1.5">
                {item.links?.map((lnk, i) => (
                  <a
                    key={i}
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                    onClick={(e) => handleNavClick(e, lnk.href)}
                    className="group/item flex items-center justify-between gap-2 rounded-lg px-3 py-2 border border-transparent text-[11px] font-bold text-zinc-400 tracking-wide transition-all duration-200 hover:bg-zinc-900/60 hover:text-white hover:border-zinc-800 hover:translate-x-1 hover:shadow-[0_0_15px_rgba(0,229,255,0.05)]"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover/item:bg-cyan-400 group-hover/item:shadow-[0_0_8px_#00E5FF] transition-all" />
                      {lnk.label}
                    </span>

                    <GoArrowUpRight className="text-zinc-500 transition-all duration-300 group-hover/item:text-cyan-400 group-hover/item:rotate-45 group-hover/item:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;