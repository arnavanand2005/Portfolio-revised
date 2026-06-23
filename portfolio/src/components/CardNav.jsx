import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";

const CardNav = ({
  items,
  className = "",
  ease = "power3.out",
  baseColor = "#050505",
  menuColor = "#00E5FF",
  buttonBgColor = "#FF3B3B",
  buttonTextColor = "#FFFFFF",
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
      y: 50,
      opacity: 0,
    });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease,
    });

    tl.to(
      cardsRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease,
        stagger: 0.08,
      },
      "-=0.1"
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

  const setCardRef = (i) => (el) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] max-w-225 z-99 top-6 ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${
          isExpanded ? "open" : ""
        } block h-15 rounded-2xl relative overflow-hidden backdrop-blur-xl`}
        style={{
          backgroundColor: baseColor,
          border: "1px solid rgba(0,229,255,0.2)",
          boxShadow: "0 0 30px rgba(0,229,255,0.15), 0 0 60px rgba(255,59,59,0.08)",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />

        <div className="absolute inset-x-0 top-0 h-15 flex items-center justify-between px-4 z-2">
          <div
            onClick={toggleMenu}
            role="button"
            tabIndex={0}
            className="flex flex-col gap-1.5 cursor-pointer"
            style={{ color: menuColor }}
          >
            <div
              className={`w-7.5 h-0.5 bg-current transition-all duration-300 ${
                isHamburgerOpen
                  ? "translate-y-1 rotate-45"
                  : ""
              }`}
            />

            <div
              className={`w-7.5 h-[2px] bg-current transition-all duration-300 ${
                isHamburgerOpen
                  ? "-translate-y-1 -rotate-45"
                  : ""
              }`}
            />
          </div>


          <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="font-black text-xl tracking-[0.25em]">
            <span className="text-cyan-400">ARNAV</span>
            <span className="text-red-500">.</span>
            <span className="text-white">//DEV</span>
          </h1>
          </div>


          <button
          className="
hidden md:flex
px-5
h-10
items-center
rounded-xl
font-black
tracking-[0.15em]
transition-all
duration-300
hover:scale-105
hover:shadow-[0_0_25px_rgba(255,59,59,0.4)]
"
            style={{
              backgroundColor: buttonBgColor,
              color: buttonTextColor,
            }}
          >
            DOWNLOAD CV
          </button>
        </div>


        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-3 flex flex-col gap-3 ${
            isExpanded
              ? "visible pointer-events-auto"
              : "invisible pointer-events-none"
          } md:flex-row`}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              ref={setCardRef(idx)}
              className="rounded-2xl p-5 flex flex-col gap-4 flex-1 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:rotate--[0.5deg]  hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.25)]"
              style={{
                backgroundColor: item.bgColor,
                color: item.textColor,
              }}
            >
              <h2 className="text-xl font-semibold">
                {item.label}
              </h2>

              <div className="flex flex-col gap-2">
                {item.links?.map((lnk, i) => (
                  <a
                    key={i}
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                    className=" group flex items-center justify-between gap-2 rounded-lg px-3 py-2 transition-all duration-300 hover:bg-black/20 hover:translate-x-1"
                  >
                    <GoArrowUpRight
                    className="transition-transform duration-300 group-hover:rotate-45 group-hover:scale-125 "/>
                    <span>{lnk.label}</span>

              <GoArrowUpRight
  className="transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1"/>
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