import { useState } from "react";
import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import articlesData from "../data/articles.json";

// Category badge styling map
const categoryStyles = {
  Debate: "bg-amber-50 text-amber-700 border-amber-200",
  Articles: "bg-blue-50 text-blue-700 border-blue-200",
  Case: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

// Category icon map
const categoryIcons = {
  Debate: "MessageSquare",
  Articles: "FileText",
  Case: "Award",
};

// Individual article card
function ArticleCard({ article, lang }) {
  // Extract domain from URL for source display
  const domain = new URL(article.link).hostname.replace("www.", "");
  const title = article.title[lang] || article.title.pt;
  const description = article.description[lang] || article.description.pt;
  const readMore = lang === "en"
    ? (article.category === "Case" ? "View case" : "Read more")
    : (article.category === "Case" ? "Ver case" : "Ler mais");

  return (
    <a
      href={article.link}
      target="_blank"
      rel="noreferrer"
      className="group block bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-accent/30 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Category badge and source */}
      <div className="flex items-center justify-between mb-4">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${categoryStyles[article.category]}`}>
          <Icon name={categoryIcons[article.category]} size={12} />
          {article.category}
        </span>
        <span className="text-xs text-brand-navy/40 truncate max-w-[140px]">
          {domain}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-white mb-2 group-hover:text-brand-accent transition-colors duration-300 line-clamp-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-brand-navy/60 leading-relaxed mb-4 line-clamp-2">
        {description}
      </p>

      {/* Read more indicator */}
      <div className="flex items-center gap-1 text-xs font-medium text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>{readMore}</span>
        <Icon name="ArrowUpRight" size={14} />
      </div>
    </a>
  );
}

export default function ArticlesPage() {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const lang = i18n.language?.substring(0, 2) || "pt";

  // Get unique categories and count articles per category
  const categories = [...new Set(articlesData.articles.map((a) => a.category))];
  const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat] = articlesData.articles.filter((a) => a.category === cat).length;
    return acc;
  }, {});

  // Filter articles based on active category
  const filteredArticles =
    activeCategory === "all"
      ? articlesData.articles
      : articlesData.articles.filter((a) => a.category === activeCategory);

  return (
    <section className="w-full relative overflow-hidden" aria-labelledby="articles-heading">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent via-brand-navy to-brand-accent" aria-hidden="true" />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-bl from-brand-accent/5 to-transparent" aria-hidden="true" />

      <div className="container-content section-spacing relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <div className="accent-line-bold mx-auto mb-8" aria-hidden="true" />
            <h1 id="articles-heading" className="text-h1 text-brand-navy mb-4 heading-primary">
              {t('articles.title')}
            </h1>
            <p className="text-brand-navy/60 max-w-2xl mx-auto">
              {t('articles.description')}
            </p>
          </header>

          {/* Category filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {/* All tab */}
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-brand-navy text-white shadow-md"
                  : "bg-gray-100 text-brand-navy/70 hover:bg-gray-200"
              }`}
            >
              {t('articles.all')} ({articlesData.totalArticles})
            </button>

            {/* Category tabs */}
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 inline-flex items-center gap-1.5 ${
                  activeCategory === cat
                    ? "bg-brand-navy text-white shadow-md"
                    : "bg-gray-100 text-brand-navy/70 hover:bg-gray-200"
                }`}
              >
                <Icon name={categoryIcons[cat]} size={14} />
                {cat} ({categoryCounts[cat]})
              </button>
            ))}
          </div>

          {/* Articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredArticles.map((article, index) => (
              <ArticleCard key={index} article={article} lang={lang} />
            ))}
          </div>

          {/* Bottom info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-brand-navy/50">
              {articlesData.company} — {articlesData.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
