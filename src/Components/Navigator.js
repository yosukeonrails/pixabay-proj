import React from "react";
import KeywordSearch from "./KeywordSearch";
import CategoryDropdown from "./CategoryDropdown";

const Navigator = props => {
  const toggleSearch = query => {
    props.dispatchCurrentSearchParams({ type: "QUERY", query: query });
    props.submitSearch({ ...props.currentSeachParams, query: query });
  };
  const toggleCategory = category => {
    props.dispatchCurrentSearchParams({ type: "CATEGORY", category: category });
    props.submitSearch({ ...props.currentSeachParams, category: category });
  };

  return (
    <div className="navigator-container">
      <div className="navigator centralized">
        <KeywordSearch toggleSearch={toggleSearch} />

        <CategoryDropdown setCategory={toggleCategory} />

        <button
          onClick={() => {
            props.submitSearch({ ...props.currentSeachParams });
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
