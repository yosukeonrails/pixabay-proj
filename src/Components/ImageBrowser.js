import React, { useState, useEffect } from "react";
import ResultBrowser from "./ResultBrowser";
import Navigator from "./Navigator";
import { parseQueryToURLEncoded, concatQuery } from "../Utility";
import config from "../config";
import axios from "axios";

const ImageBrowser = props => {
  const [resultData, setResultData] = useState(null);

  const getImageData = query => {
    axios.get(query).then(res => {
      let resultData;

      if (res.data) {
        resultData = res.data;
      }

      setResultData(resultData);
    });
  };

  const saveImage = savedImageId => {
    let imagesIds = [...props.savedImages];

    if (imagesIds.includes(savedImageId)) {
      imagesIds = imagesIds.filter(id => {
        return id !== savedImageId;
      });
    } else {
      imagesIds.push(savedImageId);
    }

    props.setSavedImages(imagesIds);
  };

  useEffect(() => {
    getImageData(
      `https://pixabay.com/api/?key=${config.PIXABAY_API_KEY}&per_page=30`
    );
  }, []);

  const submitSearch = (searchQuery, category) => {
    let requestParamter = concatQuery(
      "https://pixabay.com/api/",
      ["key", "q", "category", "per_page"],
      [
        config.PIXABAY_API_KEY,
        parseQueryToURLEncoded(searchQuery),
        category,
        "30"
      ]
    );

    getImageData(requestParamter);
  };

  return (
    <div className="image-browser">
      <Navigator submitSearch={submitSearch} />
      <ResultBrowser
        savedImages={props.savedImages}
        saveImage={saveImage}
        resultData={resultData}
      />
    </div>
  );
};

export default ImageBrowser;
