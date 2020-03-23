import React, { useState } from "react";
import KeywordSearch from "./KeywordSearch";
import CategoryDropdown from "./CategoryDropdown";

const Navigator = () => {
  const [category, setCategory] = useState(null);
  const [query, setQuery] = useState("");

  const submitSearch = () => {
    console.log(category);
    console.log(query);
  };

  return (
    <div>
      <div className="navigator">
        <KeywordSearch />

        <CategoryDropdown setCategory={setCategory} />

        <button type="submit" class="btn btn-primary">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navigator;
