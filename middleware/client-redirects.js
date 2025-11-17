import { stateMapping, redirectRules } from "~/utils/redirect-contants";

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
    } else {
      return navigateTo("/404", { redirectCode: 404 }); // Redirect to 404 for invalid state codes
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
