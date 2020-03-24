import React, { useState } from "react";
import ImageBrowser from "./Components/ImageBrowser";
import "./App.scss";

function App() {
  const [savedImages, setSavedImages] = useState([]);
  console.log(savedImages);
  return (
    <div className="App">
      <ImageBrowser setSavedImages={setSavedImages} savedImages={savedImages} />
    </div>
  );
}

export default App;
