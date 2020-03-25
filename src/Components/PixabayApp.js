import React, { useState, useEffect } from "react";
import ImageBrowser from "./ImageBrowser";
import "../Styles/PixabayApp.scss";
import SavedLinksList from "./SavedLinksList";

function PixabayApp() {
    const [savedImages, setSavedImages] = useState({});
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [savedLinkToggeled, setSavedLinkToggeled] = useState(false);
    const handleResize = () => {
        setWindowSize(window.innerWidth);
    };

    useEffect(() => {

        window.addEventListener("resize", () => {
            handleResize();
        });

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    let showSaveLinkWindow = windowSize > 600 || savedLinkToggeled;

    return (
        <div className="pixabay-app">
            <ImageBrowser setSavedImages={setSavedImages} savedImages={savedImages} />
            <div
                style={{ display: showSaveLinkWindow ? "none" : "block" }}
                className="saved-side-tag"
                onClick={() => {
                    setSavedLinkToggeled(true);
                }}
            >
                <p>{`( ${Object.keys(savedImages).length} )  Saved`} </p>
            </div>
            <SavedLinksList
                showSaveLinkWindow={showSaveLinkWindow}
                windowSize={windowSize}
                savedImages={savedImages}
                setSavedLinkToggeled={setSavedLinkToggeled}
            />
        </div>
    );
}

export default PixabayApp;
