import React, { useEffect, useRef, useState } from "react";
import Result from "./Result";
import PaginationController from "./PaginationController";

const ResultBrowser = props => {
  let results;
  let totalHits = 0;
  const [scrollTop, setScrollTop] = useState(0);
  const myRef = useRef(0);

  if (props.resultData) {
    totalHits = props.resultData.totalHits;

    results = props.resultData.hits.map(result => {
      let saved;
      let savedImage = props.savedImages[result.id];
      if (savedImage) {
        saved = true;
      }

      return <Result saved={saved} saveImage={props.saveImage} data={result} />;
    });
  }

  const renderPaginator = position => {
    return (
      <PaginationController
        scrollTop={scrollTop}
        changePage={props.changePage}
        currentPage={props.currentPage}
        data={props.resultData}
        totalHits={totalHits}
        position={position}
      />
    );
  };
  return (
    <div className="result-browser centralized">
      {renderPaginator("top")}
      <div
        ref={myRef}
        className="results-container centralized"
        onScroll={e => {
          const scrollTop = myRef.current.scrollTop;
          setScrollTop(scrollTop);
        }}
      >
        {results}

        {renderPaginator("bottom")}
      </div>
    </div>
  );
};

export default ResultBrowser;
