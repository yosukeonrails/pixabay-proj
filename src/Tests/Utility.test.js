import { parseQueryToURLEncoded, concatQuery, returnPaginationRange } from "../Utility";

test("test parseQueryToURLEncoded function", () => {
    expect(parseQueryToURLEncoded("word1")).toBe("word1");

    expect(parseQueryToURLEncoded("Word1")).toBe("word1");

    expect(parseQueryToURLEncoded("word1 word2")).toBe("word1+word2");

    expect(parseQueryToURLEncoded("word1   word2")).toBe("word1+word2");

    expect(parseQueryToURLEncoded("word1      word2")).toBe("word1+word2");

    expect(parseQueryToURLEncoded("word1 WoRd2")).toBe("word1+word2");

    expect(parseQueryToURLEncoded("word1 word2 word3 word4 word5")).toBe(
        "word1+word2+word3+word4+word5"
    );
    expect(parseQueryToURLEncoded("word1 word2 WoRd3 Word4")).toBe(
        "word1+word2+word3+word4"
    );
});

test("test concatQuery function", () => {
    expect(
        concatQuery(
            "https://pixabay.com/api/",
            ["key", "q", "category"],
            ["apikey", "yellow+flowers", "buildings"]
        )
    ).toBe(
        "https://pixabay.com/api/?key=apikey&q=yellow+flowers&category=buildings"
    );

    expect(
        concatQuery(
            "https://pixabay.com/api/",
            ["key", "q", "category"],
            ["apikey", "yellow+flowers"]
        )
    ).toBe("https://pixabay.com/api/?key=apikey&q=yellow+flowers");
});



test("test returnPaginationRange function", () => {

    expect(returnPaginationRange(1, 3)).toEqual({ start: 1, end: 3 });
    expect(returnPaginationRange(1, 2)).toEqual({ start: 1, end: 2 });
    expect(returnPaginationRange(15, 17)).toEqual({ start: 11, end: 15 });
    expect(returnPaginationRange(16, 18)).toEqual({ start: 16, end: 18 });
    expect(returnPaginationRange(1, 1)).toEqual({ start: 1, end: 1 });

});

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
