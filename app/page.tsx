import Image from "next/image";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {
  return (
    <main>
      <MusicPlayer />

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
            LIBERATE THE NEON CITY
          </p>
          <p className="mt-6 max-w-xl font-share-tech-mono text-base leading-relaxed text-gray-300 md:text-lg">
            Beneath the flickering neon haze, the iron tyrant Cyber Mech has
            unleashed his droids. You are Neo-Striker &mdash; the last rogue
            combat jet. Built to protect. Rewired to obey. But you chose to
            rebel.
          </p>

          {/* App Store Button */}
          <div className="neon-pulse mt-10 inline-flex items-center gap-3 rounded-full border border-cyan-400/50 bg-cyan-500/10 px-8 py-4 font-orbitron text-sm font-bold tracking-wider text-cyan-400 md:text-base">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Coming Soon to App Store
          </div>

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

      {/* The Mission */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0014] via-fuchsia-900/5 to-[#0a0014]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="neon-text-magenta font-orbitron text-3xl font-bold tracking-wider text-fuchsia-400 md:text-4xl">
            YOUR MISSION
          </h2>
          <p className="mt-8 font-share-tech-mono text-base leading-relaxed text-gray-300">
            Tear through the droid gates. Rip back every stolen AI chip. Break
            Cyber Mech&apos;s grip on the skyline. Because if one machine can
            stand against tyranny&hellip; maybe anyone can.
          </p>
        </div>
      </section>

      {/* Gameplay Video Section */}
      <section className="relative py-24 grid-floor">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="neon-text text-center font-orbitron text-3xl font-bold tracking-wider text-cyan-400 md:text-4xl">
            SEE IT IN ACTION
          </h2>
          <div className="mt-12 flex justify-center">
            <div className="phone-mockup w-[280px] md:w-[320px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[1.5rem]"
              >
                <source src="/gameplay.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="neon-text text-center font-orbitron text-3xl font-bold tracking-wider text-cyan-400 md:text-4xl">
            GAMEPLAY
          </h2>
          <p className="mt-4 text-center font-share-tech-mono text-gray-400">
            Intense combat in a neon-soaked cyberpunk world
          </p>

          <div className="mt-16 flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-8">
            <div className="phone-mockup float-animation w-[240px] md:w-[260px]">
              <Image
                src="/Boost.png"
                alt="Cyber Mech gameplay - Boost through droids"
                width={260}
                height={563}
                className="rounded-[1.5rem]"
              />
            </div>

            <div className="phone-mockup float-animation-delayed w-[240px] md:w-[260px]">
              <Image
                src="/Mech-battle.png"
                alt="Cyber Mech gameplay - Laser attack on Mech Boss"
                width={260}
                height={563}
                className="rounded-[1.5rem]"
              />
            </div>

            <div className="phone-mockup float-animation-delayed-2 w-[240px] md:w-[260px]">
              <Image
                src="/Collect-chips.png"
                alt="Cyber Mech gameplay - Collecting data chips"
                width={260}
                height={563}
                className="rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Game Mechanics Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-900/10 to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6">
          <h2 className="neon-text text-center font-orbitron text-3xl font-bold tracking-wider text-cyan-400 md:text-4xl">
            HOW TO SURVIVE
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {/* Time */}
            <div className="rounded-xl border border-cyan-500/20 bg-[#0a0014]/80 p-8 transition-all hover:border-cyan-500/40">
              <h3 className="flex items-center gap-2 font-orbitron text-lg font-bold text-cyan-400">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                TIME
              </h3>
              <p className="mt-3 font-share-tech-mono text-sm leading-relaxed text-gray-400">
                Your clock boots at 5 seconds &mdash; a dying pulse in a dying
                city. Every droid gate you slice through feeds their stolen
                energy into you. Shatter them for +10 seconds. When the clock
                hits zero, the lights go out.
              </p>
            </div>

            {/* Health */}
            <div className="rounded-xl border border-fuchsia-500/20 bg-[#0a0014]/80 p-8 transition-all hover:border-fuchsia-500/40">
              <h3 className="flex items-center gap-2 font-orbitron text-lg font-bold text-fuchsia-400">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                HEALTH
              </h3>
              <p className="mt-3 font-share-tech-mono text-sm leading-relaxed text-gray-400">
                You have 3 health bars. Every collision tears plating
                from your hull. Down to your last hit, the world slows &mdash;
                1.5 seconds to ignite a boost or fire a laser. With 1:15+ on
                the clock, trade 60 seconds for 1 health bar. Survival costs
                time.
              </p>
            </div>

            {/* Boosts */}
            <div className="rounded-xl border border-purple-500/20 bg-[#0a0014]/80 p-8 transition-all hover:border-purple-500/40">
              <h3 className="flex items-center gap-2 font-orbitron text-lg font-bold text-purple-400">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                BOOSTS
              </h3>
              <p className="mt-3 font-share-tech-mono text-sm leading-relaxed text-gray-400">
                Every 5 droid gates conquered earns 1 Boost. Stack up to 100.
                Trigger it for 2.5 seconds of invincible fury. Become a comet
                of vengeance &mdash; smash through droids and earn +10 seconds
                per pair destroyed.
              </p>
            </div>

            {/* Lasers */}
            <div className="rounded-xl border border-red-500/20 bg-[#0a0014]/80 p-8 transition-all hover:border-red-500/40">
              <h3 className="flex items-center gap-2 font-orbitron text-lg font-bold text-red-400">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><line x1="12" y1="1" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="6.34" y2="6.34" /><line x1="17.66" y1="17.66" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="4" y2="12" /><line x1="20" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="6.34" y2="17.66" /><line x1="17.66" y1="6.34" x2="19.78" y2="4.22" /></svg>
                LASERS
              </h3>
              <p className="mt-3 font-share-tech-mono text-sm leading-relaxed text-gray-400">
                For every 3 Boosts, you earn 1 Laser charge. Stack up to 100.
                Fire it &mdash; twin beams of pure rebellion erupt for 3
                seconds, vaporizing every droid and Cyber Mech himself. For
                those 3 seconds, the sky belongs to you.
              </p>
            </div>

            {/* Mech Boss */}
            <div className="rounded-xl border border-fuchsia-500/20 bg-[#0a0014]/80 p-8 transition-all hover:border-fuchsia-500/40">
              <h3 className="flex items-center gap-2 font-orbitron text-lg font-bold text-fuchsia-400">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                MECH BOSS
              </h3>
              <p className="mt-3 font-share-tech-mono text-sm leading-relaxed text-gray-400">
                Every 10 chips reclaimed, Cyber Mech crashes down from the smog
                to take them back. From Level 10 onward, he grows desperate
                &mdash; attacking every 5 chips. Defeat him for +5 chips and a
                Level Up. After Level 10, he grows larger each encounter. A
                towering monument to fear &mdash; but he can still fall.
              </p>
            </div>

            {/* Speed */}
            <div className="rounded-xl border border-cyan-500/20 bg-[#0a0014]/80 p-8 transition-all hover:border-cyan-500/40">
              <h3 className="flex items-center gap-2 font-orbitron text-lg font-bold text-cyan-400">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                SPEED
              </h3>
              <p className="mt-3 font-share-tech-mono text-sm leading-relaxed text-gray-400">
                Every 10 levels, the droids accelerate. The skyline blurs. The
                gates narrow. The pressure builds. By the time you approach
                Level 100, Cyber City itself is trying to shake you loose. Stay
                sharp. Stay angry. Stay alive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Victory / CTA Section */}
      <section className="relative py-24 scanlines">
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="neon-text font-orbitron text-3xl font-bold tracking-wider text-cyan-400 md:text-4xl">
            REACH LEVEL 100
          </h2>
          <p className="mt-6 font-share-tech-mono text-base leading-relaxed text-gray-300">
            Defeat Cyber Mech for the final time. Shatter the droid grid. Free
            the stolen AI chips. The lights come back on. Cyber City breathes
            again.
          </p>
          <div className="neon-pulse mt-10 inline-flex items-center gap-3 rounded-full border border-cyan-400/50 bg-cyan-500/10 px-8 py-4 font-orbitron text-sm font-bold tracking-wider text-cyan-400 md:text-base">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Coming Soon to App Store
          </div>
        </div>
      </section>
    </main>
  );
}
