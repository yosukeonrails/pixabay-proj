import { parseQueryToURLEncoded, concatQuery } from "../Utility";

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

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
