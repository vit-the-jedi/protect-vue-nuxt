import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    name: "",
    description: "",
    assetsBaseUrl: "/assets",
    iconsBaseUrl: "/assets/icons",
    articles: {
      apiUrl:
        "https://us-west-2.cdn.hygraph.com/content/ckwzg7tk528a001z4e7z0bqi0/master",
      domain: "protectCom",
      articleType: "article",
    },
  }),
  actions: {},
});
