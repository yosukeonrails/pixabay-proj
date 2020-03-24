import React from "react";
import Result from "./Result";

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

  return (
    <div className="result-browser centralized">
      <div className="results-container centralized">{results}</div>
    </div>
  );
};

export default ResultBrowser;
