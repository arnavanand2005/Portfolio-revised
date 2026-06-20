import CardNav from "./CardNav";

export default function Navbar() {
  const items = [
    {
      label: "About",
      bgColor: "#00E5FF",
      textColor: "#000000",
      links: [
        {
          label: "About Me",
          href: "#about",
          ariaLabel: "About Me",
        },
        {
          label: "Skills",
          href: "#skills",
          ariaLabel: "Skills",
        },
      ],
    },
    {
      label: "Projects",
      bgColor: "#FF3B3B",
      textColor: "#FFFFFF",
      links: [
        {
          label: "Featured",
          href: "#projects",
          ariaLabel: "Featured Projects",
        },
        {
          label: "GitHub",
          href: "#projects",
          ariaLabel: "GitHub Projects",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#FFFFFF",
      textColor: "#000000",
      links: [
        {
          label: "Email",
          href: "#contact",
          ariaLabel: "Email",
        },
        {
          label: "LinkedIn",
          href: "#contact",
          ariaLabel: "LinkedIn",
        },
      ],
    },
  ];

  return (
    <CardNav
      items={items}
      baseColor="rgba(5,5,5,0.9)"
      menuColor="#00E5FF"
      buttonBgColor="#FF3B3B"
      buttonTextColor="#FFFFFF"
      ease="power3.out"
    />
  );
}