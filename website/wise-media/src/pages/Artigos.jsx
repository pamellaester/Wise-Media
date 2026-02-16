import usePageMeta from "../hooks/usePageMeta";
import ArticlesPage from "../components/ArticlesPage";

export default function Artigos() {
  usePageMeta("seo.articles.title", "seo.articles.description");

  return <ArticlesPage />;
}
