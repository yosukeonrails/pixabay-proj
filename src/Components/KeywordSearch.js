import React from "react";

const KeywordSearch = props => {
  return (
    <div>
      <div className="keyword-search">
        <div class="form-group">
          <input
            onChange={e => {
              const { value } = e.target;
              props.toggleSearch(value);
            }}
            type="search"
            class="form-control"
            placeholder="Keyword..."
          ></input>
        </div>
      </div>
    </div>
  );
};

export default KeywordSearch;
