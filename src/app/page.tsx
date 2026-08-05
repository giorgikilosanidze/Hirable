import FaqSection from "@/components/landing/FaqSection";
import FinalCta from "@/components/landing/FinalCta";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import InsightsFeature from "@/components/landing/InsightsFeature";
import LandingNav from "@/components/landing/LandingNav";
import LetterFeature from "@/components/landing/LetterFeature";
import MatchFeature from "@/components/landing/MatchFeature";
import Pricing from "@/components/landing/Pricing";
import SiteFooter from "@/components/landing/SiteFooter";
import SocialProof from "@/components/landing/SocialProof";
import Testimonials from "@/components/landing/Testimonials";
import TrackerFeature from "@/components/landing/TrackerFeature";

export default function LandingPage() {
  return (
    <div className="flex-1 overflow-x-hidden bg-canvas">
      <LandingNav />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <MatchFeature />
        <LetterFeature />
        <TrackerFeature />
        <InsightsFeature />
        <Testimonials />
        <Pricing />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
