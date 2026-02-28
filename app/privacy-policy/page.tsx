import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Cyber Mech",
  description: "Privacy Policy for the Cyber Mech iOS application.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="neon-text font-orbitron text-3xl font-bold tracking-wider text-cyan-400 md:text-4xl">
          PRIVACY POLICY
        </h1>
        <p className="mt-2 font-share-tech-mono text-sm text-gray-500">
          Last updated: February 2026
        </p>

        <div className="mt-12 space-y-10 font-share-tech-mono text-sm leading-relaxed text-gray-300">
          <section>
            <h2 className="mb-4 font-orbitron text-lg font-bold text-fuchsia-400">
              1. INTRODUCTION
            </h2>
            <p>
              Welcome to Cyber Mech (&quot;the App&quot;) and its website at
              cybermech.app (&quot;the Site&quot;). We respect your privacy and
              are committed to protecting any information collected while you use
              our application and website. This Privacy Policy explains what data
              we collect, how we use it, and your rights regarding that data.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-orbitron text-lg font-bold text-fuchsia-400">
              2. INFORMATION WE COLLECT
            </h2>
            <p className="mb-3">
              Cyber Mech is designed to minimize data collection. We may collect
              the following:
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-400">
              <li>
                <span className="text-gray-300">Device Information:</span>{" "}
                General device type, operating system version, app version, and
                an anonymous device identifier for analytics purposes.
              </li>
              <li>
                <span className="text-gray-300">Game Data:</span> Your game
                progress, scores, settings, and in-game currency balance are
                stored locally on your device.
              </li>
              <li>
                <span className="text-gray-300">Gameplay Analytics:</span> We
                use Firebase Analytics (provided by Google) to collect anonymous
                gameplay data such as game starts and completions, scores,
                difficulty level, and feature usage (e.g., boosts, challenges,
                shop interactions). This data is not linked to your identity and
                cannot be used to identify you personally.
              </li>
              <li>
                <span className="text-gray-300">Advertising Data:</span> Our
                ad provider, Google AdMob, may collect device identifiers, ad
                interaction data, and general location information to serve and
                measure advertisements. See Section 6 for more details.
              </li>
              <li>
                <span className="text-gray-300">Website Analytics:</span> Our
                website uses Vercel Analytics to collect anonymous page view and
                visitor data. This helps us understand how visitors interact with
                our site. No personally identifiable information is collected
                through this service.
              </li>
              <li>
                <span className="text-gray-300">Feedback (Optional):</span> If
                you choose to send feedback via the in-app feedback form, you may
                provide your name (optional), a message, star ratings, and
                screenshot attachments. This information is sent via your
                device&apos;s email client to support@cybermech.app and is not
                stored within the App.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-orbitron text-lg font-bold text-fuchsia-400">
              3. HOW WE USE YOUR INFORMATION
            </h2>
            <ul className="list-inside list-disc space-y-2 text-gray-400">
              <li>To provide and maintain the App</li>
              <li>To improve game performance and user experience</li>
              <li>To fix bugs and troubleshoot issues</li>
              <li>To understand how players interact with the game</li>
              <li>
                To serve advertisements and measure ad performance (see Section
                6)
              </li>
              <li>To respond to feedback and support requests</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-orbitron text-lg font-bold text-fuchsia-400">
              4. DATA SHARING
            </h2>
            <p className="mb-3">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties. We may share anonymous, aggregated
              data with the following service providers solely to operate and
              improve the App:
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-400">
              <li>
                <span className="text-gray-300">Google (Firebase Analytics):</span>{" "}
                Anonymous gameplay and usage analytics.
              </li>
              <li>
                <span className="text-gray-300">Google (AdMob):</span>{" "}
                Device and ad interaction data for serving advertisements.
              </li>
              <li>
                <span className="text-gray-300">Apple (Game Center):</span>{" "}
                Leaderboard scores and achievements linked to your Apple Game
                Center profile.
              </li>
              <li>
                <span className="text-gray-300">Apple (StoreKit):</span>{" "}
                In-app purchase transactions are processed entirely by Apple. We
                do not receive or store your payment information.
              </li>
              <li>
                <span className="text-gray-300">
                  Apple (SKAdNetwork):
                </span>{" "}
                Used for privacy-preserving ad attribution measurement.
              </li>
              <li>
                <span className="text-gray-300">Vercel Analytics:</span>{" "}
                Anonymous website usage data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-orbitron text-lg font-bold text-fuchsia-400">
              5. DATA STORAGE & SECURITY
            </h2>
            <p>
              Your game data (progress, scores, settings, and purchase status) is
              stored locally on your device. Analytics data is processed by
              Google&apos;s Firebase servers in accordance with{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline transition-colors hover:text-cyan-300"
              >
                Google&apos;s Privacy Policy
              </a>
              . We implement reasonable security measures to protect any data
              processed through our services. However, no method of electronic
              transmission or storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-orbitron text-lg font-bold text-fuchsia-400">
              6. ADVERTISING
            </h2>
            <p className="mb-3">
              Cyber Mech displays advertisements through Google AdMob. The
              following ad formats may be shown:
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-400">
              <li>
                <span className="text-gray-300">Banner Ads:</span> Displayed at
                the bottom of the screen during gameplay.
              </li>
              <li>
                <span className="text-gray-300">Interstitial Ads:</span>{" "}
                Full-screen ads shown during transitions.
              </li>
              <li>
                <span className="text-gray-300">Rewarded Ads:</span> Optional
                video ads you can watch to earn in-game rewards.
              </li>
            </ul>
            <p className="mt-3">
              Google AdMob may use device identifiers and ad interaction data to
              serve relevant advertisements. For more information on how Google
              uses this data, see{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline transition-colors hover:text-cyan-300"
              >
                How Google uses information from sites or apps that use our
                services
              </a>
              . You may remove all advertisements by purchasing the &quot;Remove
              Ads&quot; option available within the App.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-orbitron text-lg font-bold text-fuchsia-400">
              7. YOUR CHOICES
            </h2>
            <p className="mb-3">
              You have the following options to control your data:
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-400">
              <li>
                <span className="text-gray-300">Analytics Opt-Out:</span> You
                can disable Firebase Analytics data collection in the
                App&apos;s settings. When opted out, no gameplay analytics will
                be sent to our servers.
              </li>
              <li>
                <span className="text-gray-300">Remove Ads:</span> You can
                purchase the ad-free option to remove all advertisements and the
                associated ad data collection.
              </li>
              <li>
                <span className="text-gray-300">Website Analytics:</span> When
                you first visit our website, a banner will appear asking for your
                consent. You may accept or decline analytics tracking. Your
                preference is stored locally and can be changed at any time by
                clearing your browser&apos;s local storage.
              </li>
              <li>
                <span className="text-gray-300">Game Center:</span> You can
                manage your Game Center participation through your device&apos;s
                system settings.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-orbitron text-lg font-bold text-fuchsia-400">
              8. CHILDREN&apos;S PRIVACY
            </h2>
            <p>
              Cyber Mech does not knowingly collect personal information from
              children under the age of 13. If you are a parent or guardian and
              believe your child has provided us with personal information,
              please contact us so we can take appropriate action.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-orbitron text-lg font-bold text-fuchsia-400">
              9. THIRD-PARTY SERVICES
            </h2>
            <p className="mb-3">
              The App integrates with the following third-party services, each
              governed by their own privacy policies:
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-400">
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 underline transition-colors hover:text-cyan-300"
                >
                  Google (Firebase Analytics & AdMob)
                </a>
              </li>
              <li>
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 underline transition-colors hover:text-cyan-300"
                >
                  Apple (App Store, Game Center & StoreKit)
                </a>
              </li>
              <li>
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 underline transition-colors hover:text-cyan-300"
                >
                  Vercel Analytics
                </a>
              </li>
            </ul>
            <p className="mt-3">
              We are not responsible for the privacy practices of these
              third-party services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-orbitron text-lg font-bold text-fuchsia-400">
              10. COOKIES & TRACKING
            </h2>
            <p className="mb-3">
              Our website uses cookies and similar technologies to enhance your
              experience:
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-400">
              <li>
                <span className="text-gray-300">Essential Cookies:</span> Used
                to remember your cookie consent preference. These are stored
                locally on your device and are necessary for the website to
                function properly.
              </li>
              <li>
                <span className="text-gray-300">Vercel Analytics:</span> Collects
                anonymous, aggregated data about page views and site usage. This
                service does not use cookies to track individual users and does
                not collect personally identifiable information.
              </li>
            </ul>
            <p className="mt-3">
              The App does not track users across other companies&apos; apps or
              websites. As declared in our App Privacy details, the App collects
              Product Interaction data and Device Identifiers for analytics
              purposes only. This data is not linked to your identity.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-orbitron text-lg font-bold text-fuchsia-400">
              11. CHANGES TO THIS POLICY
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date. Your
              continued use of the App after changes are posted constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-orbitron text-lg font-bold text-fuchsia-400">
              12. CONTACT US
            </h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please
              reach out through our{" "}
              <a
                href="/support"
                className="text-cyan-400 underline transition-colors hover:text-cyan-300"
              >
                Support page
              </a>{" "}
              or email us at{" "}
              <a
                href="mailto:support@cybermech.app"
                className="text-cyan-400 underline transition-colors hover:text-cyan-300"
              >
                support@cybermech.app
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
