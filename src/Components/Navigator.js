import React, { useState, useReducer } from "react";
import KeywordSearch from "./KeywordSearch";
import CategoryDropdown from "./CategoryDropdown";
import { parseQueryToURLEncoded, concatQuery } from "../Utility";
import config from "../config";
const Navigator = () => {
  const [category, setCategory] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const submitSearch = () => {
    console.log("submitting search");
    let query = concatQuery(
      "https://pixabay.com/api/",
      ["key", "q", "category"],
      [config.PIXABAY_API_KEY, parseQueryToURLEncoded(searchQuery), category]
    );
    console.log(query);
  };

  return (
    <div>
      <div className="navigator">
        <KeywordSearch setQuery={setSearchQuery} />

        <CategoryDropdown setCategory={setCategory} />

        <button
          onClick={() => {
            submitSearch();
          }}
          class="btn btn-primary"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Navigator;
