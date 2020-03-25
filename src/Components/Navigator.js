import React, { useState, useReducer } from "react";
import KeywordSearch from "./KeywordSearch";
import CategoryDropdown from "./CategoryDropdown";

const Navigator = props => {
  const [category, setCategory] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const toggleSearch = query => {
    //TODO: add dispatcher to change current searchquery
    setSearchQuery(query);
  };

  const toggleCategory = category => {
    //TODO: add dispatcher to change current category
    setCategory(category);
    props.submitSearch(searchQuery, category);
  };

  return (
    <div className="navigator-container">
      <div className="navigator centralized">
        <KeywordSearch toggleSearch={toggleSearch} />

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
