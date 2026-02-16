import usePageMeta from "../hooks/usePageMeta";
import About from "../components/About";

export default function Sobre() {
  usePageMeta("seo.about.title", "seo.about.description");

  return <About />;
}
