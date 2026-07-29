"use client";

import { Suspense, useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { initGA } from "@/lib/analytics";
import { hasAnalyticsConsent } from "@/lib/consent";
import CookieConsent from "@/components/CookieConsent";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import MetaSEO from "@/components/MetaSEO";
import SkipToContent from "@/components/SkipToContent";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageLoadingFallback from "@/components/PageLoadingFallback";
import ScrollToTop from "@/components/ScrollToTop";
import LegacyHashRedirect from "@/components/LegacyHashRedirect";
import App from "@/App";

export default function ClientShell() {
  useEffect(() => {
    document.documentElement.classList.add("app-mounted");
  }, []);

  useEffect(() => {
    const loadGaIfConsented = () => {
      if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) return;
      if (!hasAnalyticsConsent()) return;
      initGA();
    };
    loadGaIfConsented();
    window.addEventListener("agr-consent-change", loadGaIfConsented);
    return () => window.removeEventListener("agr-consent-change", loadGaIfConsented);
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <LanguageProvider>
            <ErrorBoundary>
              <TooltipProvider>
                <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
                  <SkipToContent />
                  <MetaSEO />
                  <ScrollToTop />
                  <LegacyHashRedirect />
                  <Suspense fallback={<PageLoadingFallback />}>
                    <App />
                  </Suspense>
                  <WhatsAppFloat />
                  <CookieConsent />
                </div>
                <Toaster />
              </TooltipProvider>
            </ErrorBoundary>
          </LanguageProvider>
        </ErrorBoundary>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
