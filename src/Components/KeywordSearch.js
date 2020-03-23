import React from "react";

const KeywordSearch = () => {
  return (
    <div>
      <div className="keyword-search">
        <div class="form-group">
          <input
            onChange={e => {
              console.log(e.target.value);
            }}
            type="search"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Keyword..."
          ></input>
        </div>
      </div>
    </div>
  );
};

export default KeywordSearch;
