import React from "react";

const SavedLinksList = props => {
    let links = [];

    for (let link in props.savedImages) {
        links.push(
            <div className="saved-link">
                <p>{`#${link}`}</p>
                <a href={props.savedImages[link].pageURL}>
                    <i className="fas fa-external-link-alt"></i>
                </a>
            </div>
        );
    }

    return (
        <div
            className="saved-links"
            style={{ display: props.showSaveLinkWindow ? "block" : "none" }}
        >
            <i
                onClick={() => {
                    props.setSavedLinkToggeled(false);
                }}
                style={{ display: props.windowSize > 600 ? "none" : "block" }}
                className="fas fa-minus-circle"
            ></i>
            <div></div>
            <h3> Saved</h3>
            {links}
        </div>
    );
};

export default SavedLinksList;
