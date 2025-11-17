// Handle other common redirects
const redirectRules = [
  // Old insurance paths to new paths
  { from: "/insurance/auto", to: "/car-insurance", code: 301 },
  { from: "/insurance/home", to: "/home-insurance", code: 301 },
  { from: "/insurance/health", to: "/health-insurance", code: 301 },
  // Add more redirect rules as needed
];

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

export default defineNuxtRouteMiddleware((to) => {
  // Early return optimization
  if (!to.path.includes("car-insurance") && !to.path.startsWith("/insurance/")) {
    return;
  }

  // Handle car insurance state code redirects
  if (to.path.includes("car-insurance")) {
    const pathParts = to.path.split("/");
    const stateCode = pathParts[pathParts.length - 1].toUpperCase();

    if (stateMapping[stateCode]) {
      const stateName = stateMapping[stateCode];
      const newPath = `/car-insurance/${stateName}`;
      console.log(`Redirecting: ${to.path} -> ${newPath} (301)`);
      return navigateTo(newPath, { redirectCode: 301 });
    }
  }

  for (const rule of redirectRules) {
    if (to.path === rule.from || to.path.startsWith(rule.from + "/")) {
      const newPath = to.path.replace(rule.from, rule.to);
      console.log(`Redirecting: ${to.path} -> ${newPath} (${rule.code})`);
      return navigateTo(newPath, { redirectCode: rule.code });
    }
  }
});
