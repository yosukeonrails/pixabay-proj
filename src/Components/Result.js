import React from "react";

const Result = props => {
  let { previewURL, previewWidth, previewHeight, tags } = props.data;

  let style = {
    backgroundImage: `url(${previewURL} )`,
    width: previewWidth,
    height: previewHeight
  };
  let tagArray = tags.split(",").map(tag => {
    return <div> {tag} </div>;
  });

  return (
    <div className="result">
      <div style={style}></div>
      <div>{tagArray}</div>
    </div>
  );
};

export default Result;
