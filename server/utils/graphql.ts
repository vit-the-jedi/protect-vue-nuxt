export const getGraphQLApiUrl = () => {
  const config = useRuntimeConfig();
  return config.graphqlApiUrl;
};

export const createGraphQLOptions = (query: string, variables?: Record<string, unknown>) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: variables || {},
    }),
  };
};

export const fetchGraphQL = async (query: string, variables?: Record<string, any>) => {
  const apiUrl = getGraphQLApiUrl();
  const options = createGraphQLOptions(query, variables);
  
  try {
    const { data } = await $fetch(apiUrl, options);
    return data;
  } catch (err) {
    console.error("Error fetching from GraphQL:", err);
    throw createError({
      statusCode: err?.statusCode || 502,
      statusMessage: "Failed to fetch from GraphQL API",
      data: { original: err?.message || String(err) },
    });
  }
};