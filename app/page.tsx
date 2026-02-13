import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/cyber-city.png"
            alt="Cyberpunk city skyline"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0014]/60 via-[#0a0014]/30 to-[#0a0014]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
          <h1 className="neon-text font-orbitron text-5xl font-black tracking-widest text-cyan-400 md:text-7xl">
            CYBER MECH
          </h1>
          <p className="neon-text-magenta mt-4 font-orbitron text-lg font-semibold tracking-wide text-fuchsia-400 md:text-2xl">
            DEFEND THE NEON CITY
          </p>
          <p className="mt-6 max-w-lg font-share-tech-mono text-base text-gray-300 md:text-lg">
            Pilot your mech through a cyberpunk battlefield. Battle enemies,
            collect chips, and power up to survive the neon onslaught.
          </p>

          {/* App Store Button */}
          <a
            href="#"
            className="neon-pulse mt-10 inline-flex items-center gap-3 rounded-full border border-cyan-400/50 bg-cyan-500/10 px-8 py-4 font-orbitron text-sm font-bold tracking-wider text-cyan-400 transition-all hover:bg-cyan-500/20 md:text-base"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 animate-bounce">
            <svg
              className="h-6 w-6 text-cyan-400/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="relative py-24 grid-floor">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="neon-text-magenta text-center font-orbitron text-3xl font-bold tracking-wider text-fuchsia-400 md:text-4xl">
            GAMEPLAY
          </h2>
          <p className="mt-4 text-center font-share-tech-mono text-gray-400">
            Intense mech combat in a neon-soaked cyberpunk world
          </p>

          <div className="mt-16 flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-8">
            {/* Screenshot 1 */}
            <div className="phone-mockup float-animation w-[240px] md:w-[260px]">
              <Image
                src="/Boost.png"
                alt="Cyber Mech gameplay - Level 2 battle"
                width={260}
                height={563}
                className="rounded-[1.5rem]"
              />
            </div>

            {/* Screenshot 2 */}
            <div className="phone-mockup float-animation-delayed w-[240px] md:w-[260px]">
              <Image
                src="/Mech-battle.png"
                alt="Cyber Mech gameplay - Mech laser attack"
                width={260}
                height={563}
                className="rounded-[1.5rem]"
              />
            </div>

            {/* Screenshot 3 */}
            <div className="phone-mockup float-animation-delayed-2 w-[240px] md:w-[260px]">
              <Image
                src="/Collect-chips.png"
                alt="Cyber Mech gameplay - Collecting chips"
                width={260}
                height={563}
                className="rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-900/10 to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6">
          <h2 className="neon-text text-center font-orbitron text-3xl font-bold tracking-wider text-cyan-400 md:text-4xl">
            FEATURES
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl border border-cyan-500/20 bg-[#0a0014]/80 p-8 transition-all hover:border-cyan-500/40">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 text-2xl">
                <span className="text-cyan-400">&#9876;</span>
              </div>
              <h3 className="font-orbitron text-lg font-bold text-cyan-400">
                MECH COMBAT
              </h3>
              <p className="mt-3 font-share-tech-mono text-sm leading-relaxed text-gray-400">
                Battle waves of enemies with your powerful mech. Use boosts and
                special attacks to dominate the battlefield.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl border border-fuchsia-500/20 bg-[#0a0014]/80 p-8 transition-all hover:border-fuchsia-500/40">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-fuchsia-500/10 text-2xl">
                <span className="text-fuchsia-400">&#9733;</span>
              </div>
              <h3 className="font-orbitron text-lg font-bold text-fuchsia-400">
                LEVEL UP
              </h3>
              <p className="mt-3 font-share-tech-mono text-sm leading-relaxed text-gray-400">
                Progress through increasingly challenging levels. Each stage
                brings tougher enemies and bigger rewards.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl border border-purple-500/20 bg-[#0a0014]/80 p-8 transition-all hover:border-purple-500/40">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-2xl">
                <span className="text-purple-400">&#9670;</span>
              </div>
              <h3 className="font-orbitron text-lg font-bold text-purple-400">
                COLLECT CHIPS
              </h3>
              <p className="mt-3 font-share-tech-mono text-sm leading-relaxed text-gray-400">
                Gather chips throughout each mission to rack up your score and
                unlock powerful upgrades for your mech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 scanlines">
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="neon-text font-orbitron text-3xl font-bold tracking-wider text-cyan-400 md:text-4xl">
            READY TO FIGHT?
          </h2>
          <p className="mt-6 font-share-tech-mono text-gray-400">
            Download Cyber Mech now and start your mission.
          </p>
          <a
            href="#"
            className="neon-pulse mt-10 inline-flex items-center gap-3 rounded-full border border-cyan-400/50 bg-cyan-500/10 px-8 py-4 font-orbitron text-sm font-bold tracking-wider text-cyan-400 transition-all hover:bg-cyan-500/20 md:text-base"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>
        </div>
      </section>
    </main>
  );
}
