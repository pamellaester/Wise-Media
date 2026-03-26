import usePageMeta from "../hooks/usePageMeta";
import Hero from "../components/Hero";
import AuthorityHook from "../components/home/AuthorityHook";
import ProblemSection from "../components/home/ProblemSection";
import SolutionSection from "../components/home/SolutionSection";
import WiseMethod from "../components/home/WiseMethod";
import SocialProof from "../components/home/SocialProof";
import OfferSection from "../components/home/OfferSection";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  usePageMeta("seo.home.title", "seo.home.description");

  return (
    <>
      <Hero />
      <AuthorityHook />
      <ProblemSection />
      <SolutionSection />
      <WiseMethod />
      <SocialProof />
      <OfferSection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
