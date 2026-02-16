import usePageMeta from "../hooks/usePageMeta";
import Hero from "../components/Hero";
import TrustMarkers from "../components/TrustMarkers";
import ServicesOverview from "../components/ServicesOverview";
import WhoWeServe from "../components/WhoWeServe";
import MissionVision from "../components/MissionVision";
import TeamBanner from "../components/TeamBanner";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import ContactHome from "../components/ContactHome";

export default function Home() {
  usePageMeta("seo.home.title", "seo.home.description");

  return (
    <>
      <Hero />
      <TrustMarkers />
      <ServicesOverview />
      <WhoWeServe />
      <MissionVision />
      <TeamBanner />
      <Reviews />
      <FAQ />
      <ContactHome />
    </>
  );
}
