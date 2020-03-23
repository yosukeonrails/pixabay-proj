export const parseQueryToURLEncoded = searchQuery => {
  return searchQuery
    .toLowerCase()
    .replace(/\s+/g, "+")
    .trim();
};
