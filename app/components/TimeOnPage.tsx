"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";

export default function TimeOnPage() {
  const pathname = usePathname();
  const startTime = useRef(Date.now());

  useEffect(() => {
    startTime.current = Date.now();

    const sendDuration = () => {
      const seconds = Math.round((Date.now() - startTime.current) / 1000);
      if (seconds > 0) {
        track("time_on_page", { page: pathname, seconds });
      }
    };

    // Send when user leaves the page or navigates away
    window.addEventListener("beforeunload", sendDuration);

    return () => {
      // Fires on client-side navigation
      sendDuration();
      window.removeEventListener("beforeunload", sendDuration);
    };
  }, [pathname]);

  return null;
}
