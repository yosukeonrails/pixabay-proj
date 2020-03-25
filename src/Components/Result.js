import React from "react";

const Result = props => {
    let {
        previewWidth,
        previewHeight,
        tags,
        previewURL,
        likes,
        favorites
    } = props.data;

    let style = {
        backgroundImage: `url(${previewURL} )`,
        width: previewWidth * 1.5,
        height: previewHeight * 1.5
    };

    let tagArray = tags.split(",").map((tag, i) => {
        return <div key={i} className="tag"> {tag} </div>;
    });

    return (
        <div className="result centralized">
            <div
                onClick={() => {
                    props.saveImage(props.data.id, props.data);
                }}
                className="image-preview"
                style={style}
            >
                <div
                    className="image-saved"
                    style={{
                        display: props.saved ? "block" : "none",
                        marginTop: style.height - 25,
                        height: 25
                    }}
                >
                    <p>saved</p>
                </div>
            </div>

            <div className="image-info">
                <div className="tags">{tagArray}</div>
                <div className="likes">
                    <p>{likes}</p>
                    <i className="fas fa-thumbs-up"></i>
                    <p>{favorites}</p> <i className="fas fa-star"></i>
                </div>
            </div>
        </div>
    );
};

export default Result;
