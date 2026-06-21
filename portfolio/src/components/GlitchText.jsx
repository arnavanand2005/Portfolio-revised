const GlitchText = ({
  children,
  speed = 1,
  enableShadows = true,
  enableOnHover = false,
  className = "",
}) => {
  const style = {
    "--after-duration": `${speed * 3}s`,
    "--before-duration": `${speed * 2}s`,
    "--after-shadow": enableShadows
      ? "-4px 0 #ff3b3b"
      : "none",
    "--before-shadow": enableShadows
      ? "4px 0 #00E5FF"
      : "none",
  };

  const alwaysGlitch = `
    after:content-[attr(data-text)]
    after:absolute
    after:top-0
    after:left-[4px]
    after:text-white
    after:overflow-hidden
    after:[text-shadow:var(--after-shadow)]
    after:animate-glitch-after

    before:content-[attr(data-text)]
    before:absolute
    before:top-0
    before:left-[-4px]
    before:text-white
    before:overflow-hidden
    before:[text-shadow:var(--before-shadow)]
    before:animate-glitch-before
  `;

  const hoverGlitch = `
    hover:after:content-[attr(data-text)]
    hover:after:absolute
    hover:after:top-0
    hover:after:left-[4px]
    hover:after:text-white
    hover:after:[text-shadow:var(--after-shadow)]
    hover:after:animate-glitch-after

    hover:before:content-[attr(data-text)]
    hover:before:absolute
    hover:before:top-0
    hover:before:left-[-4px]
    hover:before:text-white
    hover:before:[text-shadow:var(--before-shadow)]
    hover:before:animate-glitch-before
  `;

  return (
    <span
      data-text={children}
      style={style}
      className={`
        relative
        inline-block
        font-black
        text-white
        select-none
        ${enableOnHover ? hoverGlitch : alwaysGlitch}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default GlitchText;