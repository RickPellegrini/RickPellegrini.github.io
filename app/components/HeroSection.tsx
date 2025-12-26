export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-amber-50">
      <div>
        <h1
          className="text-9xl font-bold text-green-950 mb-4 pb-20"
          style={{ fontFamily: "var(--font-poiret-one)" }}
        >
          Crafting experiences beyond the expected.
        </h1>
        <p
          className="text-6xl font text-green-950 whitespace-pre-line"
          style={{ fontFamily: "var(--font-poiret-one)" }}
        >
          {`A place where creativity meets precision.
              Where every project tells a story.
              Where design and functionality merge seamlessly.
            I build digital experiences you won't find on any map.
            
            Welcome to my portfolio — explore the unseen.`}
        </p>
      </div>
    </div>
  );
}
