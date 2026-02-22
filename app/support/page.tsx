import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - Cyber Mech",
  description:
    "Get help and support for the Cyber Mech iOS application.",
};

export default function Support() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="neon-text font-orbitron text-3xl font-bold tracking-wider text-cyan-400 md:text-4xl">
          SUPPORT
        </h1>
        <p className="mt-4 font-share-tech-mono text-gray-400">
          Need help with Cyber Mech? We&apos;ve got you covered.
        </p>

        <div className="mt-12 space-y-10">
          {/* FAQ Section */}
          <section>
            <h2 className="neon-text-magenta mb-8 font-orbitron text-xl font-bold text-fuchsia-400">
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <div className="space-y-6">
              <div className="rounded-xl border border-cyan-500/20 bg-[#0a0014]/80 p-6">
                <h3 className="font-orbitron text-sm font-bold text-cyan-400">
                  HOW DO I CONTROL MY MECH?
                </h3>
                <p className="mt-3 font-share-tech-mono text-sm text-gray-400">
                  Tap and swipe on the screen to move your mech and dodge enemy
                  attacks. Use the Boost button at the bottom of the screen to
                  activate your special ability.
                </p>
              </div>

              <div className="rounded-xl border border-cyan-500/20 bg-[#0a0014]/80 p-6">
                <h3 className="font-orbitron text-sm font-bold text-cyan-400">
                  WHAT ARE CHIPS AND HOW DO I COLLECT THEM?
                </h3>
                <p className="mt-3 font-share-tech-mono text-sm text-gray-400">
                  Chips are collectible items scattered throughout each level.
                  Fly your ship into them to collect them and increase your
                  score. Keep an eye on the Chips counter at the top of the
                  screen to track your progress.
                </p>
              </div>

              <div className="rounded-xl border border-cyan-500/20 bg-[#0a0014]/80 p-6">
                <h3 className="font-orbitron text-sm font-bold text-cyan-400">
                  HOW DOES THE HEALTH SYSTEM WORK?
                </h3>
                <p className="mt-3 font-share-tech-mono text-sm text-gray-400">
                  Your health is displayed as a segmented bar at the top of the
                  screen. Taking damage from enemies reduces your health. When
                  all health segments are depleted, the game is over.
                </p>
              </div>

              <div className="rounded-xl border border-cyan-500/20 bg-[#0a0014]/80 p-6">
                <h3 className="font-orbitron text-sm font-bold text-cyan-400">
                  HOW DO I LEVEL UP?
                </h3>
                <p className="mt-3 font-share-tech-mono text-sm text-gray-400">
                  Complete each level by surviving the enemy waves within the
                  time limit. As you advance, enemies become tougher but the
                  rewards are greater. Your current level is shown in the top
                  right corner.
                </p>
              </div>

              <div className="rounded-xl border border-cyan-500/20 bg-[#0a0014]/80 p-6">
                <h3 className="font-orbitron text-sm font-bold text-cyan-400">
                  THE APP IS CRASHING OR NOT LOADING
                </h3>
                <p className="mt-3 font-share-tech-mono text-sm text-gray-400">
                  Try closing the app completely and reopening it. Make sure your
                  device is running the latest version of iOS and that the app is
                  updated to the latest version. If the issue persists, please
                  contact us below.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="neon-text-magenta mb-6 font-orbitron text-xl font-bold text-fuchsia-400">
              CONTACT US
            </h2>
            <div className="rounded-xl border border-fuchsia-500/20 bg-[#0a0014]/80 p-8">
              <p className="font-share-tech-mono text-sm text-gray-400">
                If you couldn&apos;t find an answer to your question above, or
                if you&apos;re experiencing a bug or issue, feel free to reach
                out to us.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <a
                    href="mailto:support@cybermech.app"
                    className="font-share-tech-mono text-sm text-cyan-400 transition-colors hover:text-cyan-300"
                  >
                    support@cybermech.app
                  </a>
                </div>
              </div>
              <p className="mt-6 font-share-tech-mono text-xs text-gray-500">
                We typically respond within 48 hours. Please include your device
                model and iOS version when reporting bugs.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
