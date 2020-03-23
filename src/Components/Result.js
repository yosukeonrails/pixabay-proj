import React from "react";

const Result = props => {
  let {
    previewURL,
    previewWidth,
    previewHeight,
    tags,
    webformatURL
  } = props.data;

  let style = {
    backgroundImage: `url(${webformatURL} )`,
    width: previewWidth * 1.5,
    height: previewHeight * 1.5
  };

  let tagArray = tags.split(",").map(tag => {
    return <div className="tag"> {tag} </div>;
  });

  return (
    <div className="result centralized">
      <div className="image-preview" style={style}>
        <div
          className="image-saved"
          style={{ marginTop: style.height - 25, height: 25 }}
        >
          <p>saved</p>
        </div>
      </div>

      <div className="tags">{tagArray}</div>
    </div>
  );
};

export default Result;
