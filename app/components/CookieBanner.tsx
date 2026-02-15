"use client";

import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    setConsent(stored);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setConsent("declined");
    setVisible(false);
  };

  return (
    <>
      {consent === "accepted" && <Analytics />}

      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-cyan-500/20 bg-[#0a0014]/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-5 sm:flex-row sm:justify-between">
            <p className="font-share-tech-mono text-xs leading-relaxed text-gray-400 sm:text-sm">
              We use cookies and analytics to understand how visitors interact
              with this site.{" "}
              <Link
                href="/privacy-policy"
                className="text-cyan-400 underline transition-colors hover:text-cyan-300"
              >
                Privacy Policy
              </Link>
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={decline}
                className="rounded-full border border-gray-600 px-5 py-2 font-orbitron text-xs tracking-wider text-gray-400 transition-all hover:border-gray-400 hover:text-gray-200"
              >
                DECLINE
              </button>
              <button
                onClick={accept}
                className="rounded-full border border-cyan-400/50 bg-cyan-500/10 px-5 py-2 font-orbitron text-xs tracking-wider text-cyan-400 transition-all hover:bg-cyan-500/20"
              >
                ACCEPT
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
