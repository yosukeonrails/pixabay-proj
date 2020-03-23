import React, { useState, useReducer } from "react";
import KeywordSearch from "./KeywordSearch";
import CategoryDropdown from "./CategoryDropdown";

const Navigator = props => {
  const [category, setCategory] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = category => {
    props.submitSearch(searchQuery, category);
  };

  return (
    <div>
      <div className="navigator centralized">
        <KeywordSearch setSearchQuery={setSearchQuery} />

        <CategoryDropdown setCategory={toggleCategory} />

        <button
          onClick={() => {
            props.submitSearch(searchQuery, category);
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
