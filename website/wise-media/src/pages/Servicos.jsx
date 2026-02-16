import usePageMeta from "../hooks/usePageMeta";
import Services from "../components/Services";

export default function Servicos() {
  usePageMeta("seo.services.title", "seo.services.description");

  return <Services />;
}
