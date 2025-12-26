"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollRevealAnimation";

export default function AboutMe() {
  return (
    <div
      className="min-h-screen flex items-center justify-between p-16 pl-32 pr-32 bg-amber-50"
      style={{ fontFamily: "var(--font-poiret-one)" }}
    >
      <div className="max-w-3xl">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={2}
          blurStrength={4}
          containerClassName="mb-8"
          textClassName="text-green-950 text-8xl"
        >
          About Me
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={2}
          blurStrength={4}
          textClassName="text-green-950 text-4xl"
        >
          I&apos;m a designer/developer who believes in crafting work that feels
          alive — not just seen. Driven by curiosity, grounded in strategy, and
          always asking, &quot;What&apos;s next?&quot;
        </ScrollReveal>
      </div>

      <div className="shrink-0 ml-16">
        <Image
          src="/monkeycat.png"
          alt="Monkey Cat"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
