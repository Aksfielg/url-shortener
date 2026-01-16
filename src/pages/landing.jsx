import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import AnalyticsPreview from "@/components/landing/AnalyticsPreview";
import FinalCTA from "@/components/landing/FinalCTA";

export default function LandingPage() {
  return (
    <main className="snap-y snap-mandatory h-screen w-full overflow-y-auto">
      <Hero />
      <HowItWorks />
      <Features />
      <AnalyticsPreview />
      <FinalCTA />
    </main>
  );
}
