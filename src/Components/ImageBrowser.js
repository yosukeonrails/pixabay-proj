import React, { useState, useEffect } from "react";
import ResultBrowser from "./ResultBrowser";
import Navigator from "./Navigator";
import { parseQueryToURLEncoded, concatQuery } from "../Utility";
import config from "../config";
import axios from "axios";
import { result_per_page } from "../contants";

const initialcurrentSeachParameters = {
  query: "",
  category: "",
  page: 1
};

const currentSearchParametersReducer = (state, action) => {
  switch (action.type) {
    case "QUERY":
      return {
        ...state,
        // here we reset page to 1 when a new search happens
        page: 1,
        query: action.query
      };

    case "CATEGORY":
      return {
        ...state,
        // here we reset page to 1 when a new search happens
        page: 1,
        category: action.category
      };
    case "PAGE":
      return {
        ...state,
        page: action.page
      };

    default:
      return state;
  }
};

const ImageBrowser = props => {
  const [resultData, setResultData] = useState(null);

  const [currentSeachParams, dispatchCurrentSearchParams] = React.useReducer(
    currentSearchParametersReducer,
    initialcurrentSeachParameters
  );

  const changePage = page => {
    dispatchCurrentSearchParams({ type: "PAGE", page: page });
    submitSearch({ ...currentSeachParams, page: page });
  };

  const getImageData = query => {
    axios.get(query).then(res => {
      let resultData;

      if (res.data) {
        resultData = res.data;
      }

      setResultData(resultData);
    });
  };

  const saveImage = (savedImageId, imageData) => {
    let imagesIds = { ...props.savedImages };

    if (imagesIds[savedImageId]) {
      delete imagesIds[savedImageId];
    } else {
      imagesIds[savedImageId] = imageData;
    }

    props.setSavedImages(imagesIds);
  };

  useEffect(() => {
    getImageData(
      `https://pixabay.com/api/?key=${config.PIXABAY_API_KEY}&per_page=30`
    );
  }, []);

  const submitSearch = data => {
    let requestParamter = concatQuery(
      "https://pixabay.com/api/",
      ["key", "q", "category", "per_page", "page"],
      [
        config.PIXABAY_API_KEY,
        parseQueryToURLEncoded(data.query),
        data.category,
        result_per_page,
        data.page
      ]
    );

    getImageData(requestParamter);
  };

  return (
    <div className="image-browser">
      <Navigator
        dispatchCurrentSearchParams={dispatchCurrentSearchParams}
        currentSeachParams={currentSeachParams}
        submitSearch={submitSearch}
      />
      <ResultBrowser
        savedImages={props.savedImages}
        saveImage={saveImage}
        resultData={resultData}
        changePage={changePage}
        currentPage={currentSeachParams.page}
      />
    </div>
  );
};

export default ImageBrowser;
