export default defineSitemapEventHandler(() => {
  const query = `query getAllArticles {
    articles(where: {domain: protectCom}){
      urlSlug
    }
  }`;
  // Fetch all articles and create a sitemap
  // use each url slug found an return
  const routes = async () => {
    const data = await fetch(
      'https://us-west-2.cdn.hygraph.com/content/ckwzg7tk528a001z4e7z0bqi0/master',
      {
        method: 'POST',
        body: JSON.stringify({ query }),
      },
    );
    const dataJson = await data.json();
    const urls = dataJson.data.articles.map(
      (article) => `/article/${article.urlSlug}`,
    );
    const urlMap = urls.map((url) => {
      return { loc: url };
    });
    // add static routes
    urlMap.push({ loc: '/articles' });

    // add verticals
    ['auto-insurance', 'home-insurance', 'health-insurance'].forEach(
      (insuranceType) => {
        urlMap.push({ loc: `/articles/${insuranceType}` });
      },
    );
    return urlMap;
  };
  return routes();
});
