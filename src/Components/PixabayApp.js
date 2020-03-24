import React, { useState } from "react";
import ImageBrowser from "./ImageBrowser";
import "../Styles/PixabayApp.scss";
import SavedLinksList from "./SavedLinksList";

function PixabayApp() {
  const [savedImages, setSavedImages] = useState({});

  return (
    <div className="pixabay-app">
      <ImageBrowser setSavedImages={setSavedImages} savedImages={savedImages} />
      <SavedLinksList savedImages={savedImages} />
    </div>
  );
}

export default PixabayApp;
