import ASCIIText from "../components/AsciiText";

export default function Hero() {
  return (
    <section className="h-[350px] flex flex-col items-center justify-center gap-4 bg-black">
      <ASCIIText
        text="Hey!"
        enableWaves
        asciiFontSize={9}
      />

      <ASCIIText
        text="I'm Arnav Anand!"
        enableWaves
        asciiFontSize={9}
      />

    </section>
    
  );
}