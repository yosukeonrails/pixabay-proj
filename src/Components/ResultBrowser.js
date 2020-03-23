import React from "react";
import Result from "./Result";

const ResultBrowser = props => {
  let results;
  if (props.resultData) {
    console.log(props.resultData);
    results = props.resultData.hits.map(result => {
      return <Result data={result} />;
    });
  }

  return (
    <div className="result-browser centralized">
      <div className="results-container centralized">{results}</div>
    </div>
  );
};

export default ResultBrowser;
