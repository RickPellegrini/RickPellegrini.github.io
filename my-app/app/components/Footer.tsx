export default function Footer() {
  return (
    <footer className="min-h-screen bg-green-950 flex flex-col justify-between p-16">
      {/* Giant Name at Top */}
      <div className="w-full">
        <h2
          className="text-[400px] font-bold text-amber-50 leading-none"
          style={{ fontFamily: "var(--font-poiret-one)" }}
        >
          Ricardo Pellegrini
        </h2>
      </div>

      {/* Bottom Section with Email and Buttons */}
      <div className="w-full flex justify-between items-end">
        {/* Left - Send Email */}
        <div>
          <a
            href="mailto:ricardo@example.com"
            className="text-4xl text-amber-50 hover:text-amber-200 transition-all duration-300 hover:translate-x-2 inline-block"
            style={{ fontFamily: "var(--font-poiret-one)" }}
          >
            Send Email
          </a>
        </div>

        {/* Right - Social Media & Links */}
        <div className="flex flex-col items-end gap-4">
          <a
            href="#projects"
            className="text-3xl text-amber-50 hover:text-amber-200 transition-all duration-300 hover:translate-x-2"
            style={{ fontFamily: "var(--font-poiret-one)" }}
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-3xl text-amber-50 hover:text-amber-200 transition-all duration-300 hover:translate-x-2"
            style={{ fontFamily: "var(--font-poiret-one)" }}
          >
            About Me
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-amber-50 hover:text-amber-200 transition-all duration-300 hover:translate-x-2"
            style={{ fontFamily: "var(--font-poiret-one)" }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-amber-50 hover:text-amber-200 transition-all duration-300 hover:translate-x-2"
            style={{ fontFamily: "var(--font-poiret-one)" }}
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-amber-50 hover:text-amber-200 transition-all duration-300 hover:translate-x-2"
            style={{ fontFamily: "var(--font-poiret-one)" }}
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

