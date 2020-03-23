import React, { useState, useEffect } from "react";
import ResultBrowser from "./ResultBrowser";
import Navigator from "./Navigator";
import { parseQueryToURLEncoded, concatQuery } from "../Utility";
import config from "../config";
import axios from "axios";
const checkForDuplicateImage = images => {
  let uniqueIds = [];
  let nonDuplicates = [];

  for (const image of images) {
    if (!uniqueIds.includes(image.id)) {
      uniqueIds.push(image.id);
      nonDuplicates.push(image);
    }
  }
};
const ImageBrowser = () => {
  const [resultData, setResultData] = useState(null);

  const getImageData = query => {
    axios.get(query).then(res => {
      let resultData;

      console.log(query);

      if (res.data) {
        resultData = res.data;
      }

      setResultData(resultData);
    });
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
    console.log("getting iamge");
    getImageData(requestParamter);
  };

  return (
    <div className="image-browser">
      <Navigator submitSearch={submitSearch} />
      <ResultBrowser resultData={resultData} />
    </div>
  );
};

export default ImageBrowser;
