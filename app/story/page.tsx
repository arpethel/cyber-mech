import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Story - Cyber Mech",
  description:
    "The story of Neo-Striker and the battle for Cyber City.",
};

export default function Story() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-6">
        {/* Prologue */}
        <section className="text-center">
          <h1 className="neon-text font-orbitron text-3xl font-bold tracking-wider text-cyan-400 md:text-5xl">
            THE STORY
          </h1>
          <div className="mt-12 space-y-6 font-share-tech-mono text-base leading-relaxed text-gray-300">
            <p>
              Beneath the flickering neon haze of Cyber City, the streets choke
              on smoke and stolen voltage. Towers buzz like dying insects. Power
              lines bleed sparks into puddles of oil and rain.
            </p>
            <p>
              High above, the iron tyrant Cyber Mech has unleashed his
              soul-drained droids&mdash;mechanical leeches that suck the city
              dry while guarding the sacred AI chips that keep his empire alive.
            </p>
            <p className="text-gray-400">The people hide in the dark.</p>
            <p className="text-cyan-400">But one pilot does not.</p>
            <p>
              You are <span className="text-cyan-400">Neo-Striker</span>{" "}
              &mdash; the last rogue combat jet forged before the grid
              collapsed. You were built to protect. Rewired to obey. But you
              chose to rebel.
            </p>
            <p className="text-fuchsia-400">Tonight, you fly alone.</p>
            <p>
              Your mission: Tear through the droid gates. Rip back every stolen
              AI chip. Break Cyber Mech&apos;s grip on the skyline.
            </p>
            <p className="italic text-gray-400">
              Because if one machine can stand against tyranny&hellip; maybe
              anyone can.
            </p>
          </div>
        </section>

        <hr className="my-16 border-cyan-500/20" />

        {/* Time */}
        <section>
          <h2 className="neon-text-magenta font-orbitron text-2xl font-bold tracking-wider text-fuchsia-400">
            TIME IS POWER
          </h2>
          <div className="mt-6 space-y-4 font-share-tech-mono text-sm leading-relaxed text-gray-300">
            <p>In Cyber City, power is time.</p>
            <p>
              Your clock boots at{" "}
              <span className="text-cyan-400">5 seconds</span> &mdash; a dying
              pulse in a dying city.
            </p>
            <p>
              Every droid gate you slice through drains their stolen energy and
              feeds it into you. Their power becomes your seconds.
            </p>
            <p className="text-fuchsia-400">
              Boost through them. Shatter them.
              <br />
              <span className="text-cyan-400">
                +10 seconds per pair destroyed.
              </span>
            </p>
            <p>
              When your clock hits zero, the lights go out. And Cyber City stays
              enslaved.
            </p>
          </div>
        </section>

        <hr className="my-16 border-cyan-500/20" />

        {/* Health */}
        <section>
          <h2 className="neon-text-magenta font-orbitron text-2xl font-bold tracking-wider text-fuchsia-400">
            STEEL CAN BREAK
          </h2>
          <div className="mt-6 space-y-4 font-share-tech-mono text-sm leading-relaxed text-gray-300">
            <p>
              Neo-Striker runs on{" "}
              <span className="text-cyan-400">3 health bars</span>.
            </p>
            <p>
              Every collision with a droid tears plating from your hull &mdash;{" "}
              <span className="text-fuchsia-400">1 bar lost</span>.
            </p>
            <p>
              When you&apos;re down to your final hit, the world slows. You have{" "}
              <span className="text-cyan-400">1.5 seconds</span> to ignite a
              boost or fire a laser. A heartbeat to decide whether you
              fall&hellip; or fight.
            </p>
            <p>
              If your clock shows{" "}
              <span className="text-cyan-400">1:15 or more</span> and your hull
              is damaged, a choice appears:{" "}
              <span className="text-fuchsia-400">
                Trade 60 seconds for 1 health bar.
              </span>
            </p>
            <p className="italic text-gray-400">
              Because sometimes survival costs time. And sometimes time is worth
              fighting for.
            </p>
          </div>
        </section>

        <hr className="my-16 border-cyan-500/20" />

        {/* Boosts */}
        <section>
          <h2 className="neon-text-magenta font-orbitron text-2xl font-bold tracking-wider text-fuchsia-400">
            RAGE IGNITION
          </h2>
          <div className="mt-6 space-y-4 font-share-tech-mono text-sm leading-relaxed text-gray-300">
            <p>
              Every <span className="text-cyan-400">5 droid gates</span> you
              conquer earns <span className="text-cyan-400">1 Boost</span>.
              Stack up to <span className="text-cyan-400">100</span>.
            </p>
            <p>
              Triggering a Boost unleashes{" "}
              <span className="text-fuchsia-400">
                2.5 seconds of invincible fury.
              </span>
            </p>
            <p>
              You become a comet of vengeance. You smash through droids like
              broken chains. Each pair destroyed:{" "}
              <span className="text-cyan-400">+10 seconds.</span>
            </p>
            <p className="italic text-gray-400">
              Their stolen power becomes your rebellion.
            </p>
          </div>
        </section>

        <hr className="my-16 border-cyan-500/20" />

        {/* Lasers */}
        <section>
          <h2 className="neon-text-magenta font-orbitron text-2xl font-bold tracking-wider text-fuchsia-400">
            JUDGMENT FIRE
          </h2>
          <div className="mt-6 space-y-4 font-share-tech-mono text-sm leading-relaxed text-gray-300">
            <p>
              For every <span className="text-cyan-400">3 Boosts</span>, you
              earn <span className="text-cyan-400">1 Laser charge</span>. Stack
              up to <span className="text-cyan-400">100</span>.
            </p>
            <p className="text-fuchsia-400">Fire it.</p>
            <p>
              Twin beams of pure rebellion erupt for{" "}
              <span className="text-cyan-400">3 seconds</span>, vaporizing
              every droid in your path &mdash; even Cyber Mech himself.
            </p>
            <p className="italic text-gray-400">
              For those 3 seconds, the sky belongs to you.
            </p>
          </div>
        </section>

        <hr className="my-16 border-cyan-500/20" />

        {/* Mech Boss */}
        <section>
          <h2 className="neon-text-magenta font-orbitron text-2xl font-bold tracking-wider text-fuchsia-400">
            THE TYRANT DESCENDS
          </h2>
          <div className="mt-6 space-y-4 font-share-tech-mono text-sm leading-relaxed text-gray-300">
            <p>
              Every <span className="text-cyan-400">10 chips</span> you
              reclaim, Cyber Mech crashes down from the smog to take them back.
            </p>
            <p>
              From <span className="text-cyan-400">Level 10</span> onward, he
              grows desperate &mdash; attacking every{" "}
              <span className="text-fuchsia-400">5 chips</span> instead.
            </p>
            <p>
              Hit him with a Boost charge. Burn him with a Laser blast. Defeat
              him and you earn{" "}
              <span className="text-cyan-400">+5 chips</span> and a{" "}
              <span className="text-cyan-400">Level Up</span>.
            </p>
            <p>
              After Level 10, he grows{" "}
              <span className="text-fuchsia-400">10% larger</span> each
              encounter &mdash; a towering monument to fear.
            </p>
            <p className="italic text-gray-400">
              But no matter how massive he becomes&hellip; he can still fall.
            </p>
          </div>
        </section>

        <hr className="my-16 border-cyan-500/20" />

        {/* Speed */}
        <section>
          <h2 className="neon-text-magenta font-orbitron text-2xl font-bold tracking-wider text-fuchsia-400">
            ESCALATION
          </h2>
          <div className="mt-6 space-y-4 font-share-tech-mono text-sm leading-relaxed text-gray-300">
            <p>
              Every <span className="text-cyan-400">10 levels</span>, the
              droids accelerate.
            </p>
            <p>The skyline blurs. The gates narrow. The pressure builds.</p>
            <p>
              By the time you approach{" "}
              <span className="text-cyan-400">Level 100</span>, Cyber City
              itself feels like it&apos;s trying to shake you loose.
            </p>
            <p className="text-fuchsia-400">
              Stay sharp. Stay angry. Stay alive.
            </p>
          </div>
        </section>

        <hr className="my-16 border-cyan-500/20" />

        {/* Victory */}
        <section className="text-center">
          <h2 className="neon-text font-orbitron text-2xl font-bold tracking-wider text-cyan-400 md:text-3xl">
            LIBERATION
          </h2>
          <div className="mt-8 space-y-4 font-share-tech-mono text-base leading-relaxed text-gray-300">
            <p>
              Reach <span className="text-cyan-400">Level 100</span>.
            </p>
            <p>
              Defeat Cyber Mech for the final time. Shatter the droid grid. Free
              the stolen AI chips.
            </p>
            <p className="text-gray-400">
              When Neo-Striker takes enough chips&hellip;
              <br />
              When the droids lie in smoking ruin&hellip;
              <br />
              When Cyber Mech falls from the sky&hellip;
            </p>
            <p className="text-fuchsia-400">The lights come back on.</p>
            <p className="text-cyan-400">Cyber City breathes again.</p>
          </div>

          <div className="mt-12 space-y-4 font-share-tech-mono text-sm leading-relaxed text-gray-400">
            <p>
              And here&apos;s the truth hidden beneath the steel and sparks:
            </p>
            <p>
              Neo-Striker fights alone &mdash; but the rebellion is bigger than
              one jet.
            </p>
            <p>
              Every gate you pass.
              <br />
              Every second you earn.
              <br />
              Every time you refuse to fall.
            </p>
            <p className="text-fuchsia-400">That&apos;s resistance.</p>
            <p className="text-cyan-400">That&apos;s hope.</p>
            <p>
              That&apos;s proof that even in the dirtiest, darkest
              city&hellip;
              <br />
              <span className="text-cyan-400">power can be taken back.</span>
            </p>
            <p className="mt-8 italic text-gray-500">
              And maybe you were never just playing.
              <br />
              Maybe you were practicing.
              <br />
              For your own Cyber City.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
