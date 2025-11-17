import { stateMapping, redirectRules } from "~/utils/redirect-contants";

export default defineNuxtRouteMiddleware((to) => {
  // Early return optimization
  if (!to.path.includes("car-insurance") && !to.path.startsWith("/insurance/")) {
    return;
  }

  // Handle car insurance state code redirects
  if (to.path.includes("car-insurance")) {
    const pathParts = to.path.split("/");
    const carInsuranceSubPath = pathParts[pathParts.length - 1].toUpperCase();

    //redirect 301 if state code is found -> state name
    //do nothing if state name is found
    //redirect 404 if invalid state code/slug
    if (carInsuranceSubPath.length === 2 && stateMapping[carInsuranceSubPath]) {
      const stateName = stateMapping[carInsuranceSubPath];
      const newPath = `/car-insurance/${stateName}`;
      return navigateTo(newPath, { redirectCode: 301 });
    }
    if (!Object.values(stateMapping).includes(carInsuranceSubPath.toLowerCase())) {
      // Throw error for client-side 404 - this will render error.vue
      throw createError({
        statusCode: 404,
        statusMessage: "Page Not Found",
      });
    }
    return navigateTo(to.path); // No redirect needed for valid state name
  }

  for (const rule of redirectRules) {
    if (to.path === rule.from || to.path.startsWith(rule.from + "/")) {
      const newPath = to.path.replace(rule.from, rule.to);
      return navigateTo(newPath, { redirectCode: rule.code });
    }
  }
});
