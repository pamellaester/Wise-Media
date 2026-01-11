import Hero from "../components/Hero";
import TrustMarkers from "../components/TrustMarkers";
import ServicesOverview from "../components/ServicesOverview";
import WhoWeServe from "../components/WhoWeServe";
import MissionVision from "../components/MissionVision";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactHome from "../components/ContactHome";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarkers />
      <ServicesOverview />
      <WhoWeServe />
      <MissionVision />
      <Testimonials />
      <FAQ />
      <ContactHome />
    </>
  );
}
