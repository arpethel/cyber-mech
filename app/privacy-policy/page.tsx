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
              Welcome to Cyber Mech (&quot;the App&quot;) and its website
              (&quot;the Site&quot;). We respect your privacy and are committed
              to protecting any information collected while you use our
              application and website. This Privacy Policy explains what data we
              collect, how we use it, and your rights regarding that data.
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
                General device type, operating system version, and app version
                for compatibility and troubleshooting purposes.
              </li>
              <li>
                <span className="text-gray-300">Game Data:</span> Your game
                progress, scores, and settings are stored locally on your device.
              </li>
              <li>
                <span className="text-gray-300">Analytics:</span> We may collect
                anonymous, aggregated usage analytics to improve the game
                experience. This data cannot be used to identify you personally.
              </li>
              <li>
                <span className="text-gray-300">Website Analytics:</span> Our
                website uses Vercel Analytics to collect anonymous page view and
                visitor data. This helps us understand how visitors interact with
                our site. No personally identifiable information is collected
                through this service.
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
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-orbitron text-lg font-bold text-fuchsia-400">
              4. DATA SHARING
            </h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties. We may share anonymous, aggregated
              data with analytics providers solely to improve the App.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-orbitron text-lg font-bold text-fuchsia-400">
              5. DATA STORAGE & SECURITY
            </h2>
            <p>
              Your game data is stored locally on your device. We implement
              reasonable security measures to protect any data processed through
              our services. However, no method of electronic transmission or
              storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-orbitron text-lg font-bold text-fuchsia-400">
              6. CHILDREN&apos;S PRIVACY
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
              7. THIRD-PARTY SERVICES
            </h2>
            <p>
              The App may contain links to or integrate with third-party
              services (such as the Apple App Store or Game Center). These
              services have their own privacy policies, and we encourage you to
              review them. We are not responsible for the privacy practices of
              third-party services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-orbitron text-lg font-bold text-fuchsia-400">
              8. COOKIES & TRACKING
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
                <span className="text-gray-300">Analytics:</span> We use Vercel
                Analytics to collect anonymous, aggregated data about page views
                and site usage. This service does not use cookies to track
                individual users and does not collect personally identifiable
                information.
              </li>
            </ul>
            <p className="mt-3">
              When you first visit our website, a banner will appear asking for
              your consent. You may accept or decline analytics tracking. Your
              preference is stored locally on your device and can be changed at
              any time by clearing your browser&apos;s local storage.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-orbitron text-lg font-bold text-fuchsia-400">
              9. CHANGES TO THIS POLICY
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
              10. CONTACT US
            </h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please
              reach out through our{" "}
              <a
                href="/support"
                className="text-cyan-400 underline transition-colors hover:text-cyan-300"
              >
                Support page
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
