import React from "react";
import KeywordSearch from "./KeywordSearch";
import CategoryDropdown from "./CategoryDropdown";

const Navigator = props => {
  const toggleSearch = query => {
    props.dispatchCurrentSearchParams({ type: "QUERY", query: query });
    //  props.submitSearch({ ...props.currentSeachParams, query: query });
  };
  const toggleCategory = category => {
    props.dispatchCurrentSearchParams({ type: "CATEGORY", category: category });
    props.submitSearch({
      ...props.currentSeachParams,
      category: category,
      page: 1
    });
  };

  return (
    <div className="navigator-container">
      <div className="navigator centralized">
        <KeywordSearch toggleSearch={toggleSearch} />

        <CategoryDropdown setCategory={toggleCategory} />

        <button
          onClick={() => {
            // here we reset page to 1
            props.dispatchCurrentSearchParams({ type: "PAGE", page: 1 });
            props.submitSearch({ ...props.currentSeachParams, page: 1 });
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
