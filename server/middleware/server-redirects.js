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

    // State code to state name mapping
    const stateMapping = {
      AL: "alabama",
      AK: "alaska",
      AZ: "arizona",
      AR: "arkansas",
      CA: "california",
      CO: "colorado",
      CT: "connecticut",
      DE: "delaware",
      FL: "florida",
      GA: "georgia",
      HI: "hawaii",
      ID: "idaho",
      IL: "illinois",
      IN: "indiana",
      IA: "iowa",
      KS: "kansas",
      KY: "kentucky",
      LA: "louisiana",
      ME: "maine",
      MD: "maryland",
      MA: "massachusetts",
      MI: "michigan",
      MN: "minnesota",
      MS: "mississippi",
      MO: "missouri",
      MT: "montana",
      NE: "nebraska",
      NV: "nevada",
      NH: "new-hampshire",
      NJ: "new-jersey",
      NM: "new-mexico",
      NY: "new-york",
      NC: "north-carolina",
      ND: "north-dakota",
      OH: "ohio",
      OK: "oklahoma",
      OR: "oregon",
      PA: "pennsylvania",
      RI: "rhode-island",
      SC: "south-carolina",
      SD: "south-dakota",
      TN: "tennessee",
      TX: "texas",
      UT: "utah",
      VT: "vermont",
      VA: "virginia",
      WA: "washington",
      WV: "west-virginia",
      WI: "wisconsin",
      WY: "wyoming",
    };

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
    }
  }

  // Handle other common redirects
  const redirectRules = [
    { from: "/insurance/auto", to: "/car-insurance", code: 301 },
    { from: "/insurance/home", to: "/home-insurance", code: 301 },
    { from: "/insurance/health", to: "/health-insurance", code: 301 },
  ];

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
