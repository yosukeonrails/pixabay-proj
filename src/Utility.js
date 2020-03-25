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

export const returnPaginationRange = (currentPage, numberOfPages) => {

    let lastNumber = Math.ceil(currentPage / 5) * 5;
    let startingNumber = lastNumber - 4;

    if (lastNumber > numberOfPages) {
        lastNumber = numberOfPages;
    }

    return { start: startingNumber, end: lastNumber }
}

