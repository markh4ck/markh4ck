import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function BlogArticle() {
  const { slug } = useParams();
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEntry = async () => {
      // Buscar en localStorage
      const savedEntries = localStorage.getItem("blogEntries");
      if (savedEntries) {
        const entries = JSON.parse(savedEntries);
        const found = entries.find((e) => e.slug === slug);
        if (found) {
          setEntry(found);
          setLoading(false);
          return;
        }
      }

      // Buscar en entradas por defecto
      const { defaultBlogEntries } = await import("./BlogDataLoader");
      const defaultEntry = defaultBlogEntries.find(
        (e) => e.slug === slug
      );

      if (defaultEntry) {
        const { loadBlogEntryFromPath } = await import("./BlogDataLoader");
        const loaded = await loadBlogEntryFromPath(
          defaultEntry.path,
          defaultEntry.title
        );
        if (loaded) {
          loaded.slug = slug;
          setEntry(loaded);
        }
      }

      setLoading(false);
    };

    loadEntry();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <p className="text-[#8a8a93] font-mono">Cargando...</p>
      </div>
    );
  }

  if (!entry) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Artículo no encontrado</h1>
          <Link
            to="/blog"
            className="px-6 py-3 bg-[#ff5e1a] hover:bg-[#e14d0f] text-white rounded-lg font-mono transition-colors"
          >
            Volver al Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>{entry.title} | MarkH4ck Blog</title>
        <meta name="description" content={entry.title} />
        <meta property="og:title" content={entry.title} />
        <meta property="og:type" content="article" />
        <meta name="url" content={`${window.location.origin}/blog/${slug}`} />
        <meta
          name="image"
          content={`${window.location.origin}/markh4ck-logo.png`}
        />
      </head>

      <div className="min-h-screen bg-[#0a0a0a]">
        {/* Header */}
        <div className="bg-[#131315] border-b border-white/5 sticky top-0 z-40">
          <div className="max-w-[1240px] mx-auto px-8 py-4 flex justify-between items-center">
            <Link
              to="/blog"
              className="text-[#8a8a93] hover:text-white transition-colors font-mono text-sm"
            >
              ← Volver al Blog
            </Link>
            <h1 className="text-lg font-bold">{entry.title}</h1>
            <div className="w-20"></div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[1200px] mx-auto py-12 px-4">
          <article className="bg-[#131315] rounded-3xl border border-white/5 overflow-hidden">
            <div className="p-8">
              <div className="mb-8 pb-8 border-b border-white/10">
                <h1 className="text-4xl font-bold mb-3">{entry.title}</h1>
                <p className="text-[#8a8a93] font-mono text-sm">
                  {entry.uploadDate}
                </p>
              </div>

              {/* Renderizar contenido HTML */}
              <div className="prose prose-invert max-w-none w-full">
                <iframe
                  srcDoc={entry.content}
                  className="w-full h-auto min-h-[800px] rounded-lg border border-white/10 bg-white text-black"
                  title={entry.title}
                  style={{ display: "block" }}
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default BlogArticle;
