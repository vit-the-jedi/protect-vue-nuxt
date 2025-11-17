import { stateMapping, redirectRules } from "~/utils/redirect-contants";

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event);
  const path = url.pathname;

  // Early return for non-relevant paths
  if (!path.includes("car-insurance") && !path.startsWith("/insurance/")) {
    return;
  }
  // Handle car insurance state code redirects
  if (path.includes("car-insurance")) {
    const pathParts = path.split("/");
    const stateCode = pathParts[pathParts.length - 1].toUpperCase();

    if (stateMapping[stateCode]) {
      const stateName = stateMapping[stateCode];
      const newPath = `/car-insurance/${stateName}`;

      // Set SEO-friendly headers for state redirects
      setHeader(event, "Cache-Control", "public, max-age=86400"); // Cache for 24 hours
      setHeader(event, "X-Redirect-Reason", "state-code-to-name");
      setHeader(event, "X-Redirect-Type", "permanent");
      setHeader(event, "Vary", "User-Agent");

      await sendRedirect(event, newPath, 301);
      return;
    } else {
      return sendRedirect(event, "/not-found", 404); // Redirect to 404 for invalid state codes
    }
  }

  for (const rule of redirectRules) {
    if (path === rule.from || path.startsWith(rule.from + "/")) {
      const newPath = path.replace(rule.from, rule.to);

      // Set SEO-friendly headers for URL structure redirects
      setHeader(event, "Cache-Control", "public, max-age=86400"); // Cache for 24 hours
      setHeader(event, "X-Redirect-Reason", "url-structure-change");
      setHeader(event, "X-Redirect-Type", "permanent");
      setHeader(event, "Vary", "User-Agent");

      await sendRedirect(event, newPath, rule.code);
      return;
    }
  }
});
