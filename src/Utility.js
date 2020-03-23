export const parseQueryToURLEncoded = searchQuery => {
  return searchQuery
    .toLowerCase()
    .replace(/\s+/g, "+")
    .trim();
};

export const concatQuery = (siteAddress, keyArray, valueArray) => {
  let result = `${siteAddress}?`;

  for (const [index, key] of keyArray.entries()) {
    let start = "";

    let value = valueArray[index];
    console.log(key);
    console.log(value);
    if (!value) {
      continue;
    }

    let end = `${key}=${value}`;

    if (index !== 0) {
      start = "&";
    }

    result = result + start + end;
  }

  return result;
};
