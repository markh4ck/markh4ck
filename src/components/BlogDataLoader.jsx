export const loadBlogEntryFromPath = async (htmlPath, title) => {
  try {
    const response = await fetch(htmlPath);
    let htmlContent = await response.text();

    // Obtener la ruta base del archivo
    const basePath = htmlPath.substring(0, htmlPath.lastIndexOf("/"));

    // Convertir rutas relativas a absolutas (CSS, imágenes, etc.)
    // Reemplaza src="images/..." con src="/blogs/AD/images/..."
    htmlContent = htmlContent.replace(
      /src="(?!(?:https?:|\/|data:))/g,
      `src="${basePath}/`
    );
    // Reemplaza href="..." para CSS (pero no URLs externas)
    htmlContent = htmlContent.replace(
      /href="(?!(?:https?:|\/|#|mailto:|data:))/g,
      `href="${basePath}/`
    );
    // Reemplaza url() en CSS
    htmlContent = htmlContent.replace(
      /url\(['"](?!(?:https?:|\/|data:))/g,
      `url('${basePath}/`
    );

    const entry = {
      id: Date.now(),
      title: title,
      content: htmlContent,
      uploadDate: new Date().toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      fileName: htmlPath.split("/").pop(),
      isPublic: true,
    };

    return entry;
  } catch (error) {
    console.error(`Error loading blog entry from ${htmlPath}:`, error);
    return null;
  }
};

export const defaultBlogEntries = [
  {
    path: "/blogs/AD/Active_Directory - copia.html",
    title: "Active Directory",
    slug: "active-directory",
  },
];
