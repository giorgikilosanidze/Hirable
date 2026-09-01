import Hero from '@/components/landing/Hero';
import HowItWorks from '@/components/landing/HowItWorks';
import InsightsFeature from '@/components/landing/InsightsFeature';
import LandingNav from '@/components/landing/LandingNav';
import LetterFeature from '@/components/landing/LetterFeature';
import MatchFeature from '@/components/landing/MatchFeature';
import SiteFooter from '@/components/landing/SiteFooter';
import SocialProof from '@/components/landing/SocialProof';
import TrackerFeature from '@/components/landing/TrackerFeature';

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
			</main>
			<SiteFooter />
		</div>
	);
}
