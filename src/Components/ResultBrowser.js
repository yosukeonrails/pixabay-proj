import React from "react";
import Result from "./Result";
import PaginationController from "./PaginationController";

const ResultBrowser = props => {
  let results;

  if (props.resultData) {
    results = props.resultData.hits.map(result => {
      let saved;
      let savedImage = props.savedImages[result.id];
      if (savedImage) {
        saved = true;
      }

      return <Result saved={saved} saveImage={props.saveImage} data={result} />;
    });
  }

  let paginator = (
    <PaginationController
      changePage={props.changePage}
      currentPage={props.currentPage}
      data={props.resultData}
    />
  );
  return (
    <div className="result-browser centralized">
      {paginator}
      <div className="results-container centralized">
        {results}

        {paginator}
      </div>
    </div>
  );
};

export default ResultBrowser;
