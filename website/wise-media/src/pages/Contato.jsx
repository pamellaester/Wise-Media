import usePageMeta from "../hooks/usePageMeta";
import Contact from "../components/Contact";

export default function Contato() {
  usePageMeta("seo.contact.title", "seo.contact.description");

  return <Contact />;
}
