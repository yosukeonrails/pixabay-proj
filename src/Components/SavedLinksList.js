import React from "react";

const SavedLinksList = props => {
  let links = [];

  for (let link in props.savedImages) {
    console.log(link);
    links.push(
      <div className="saved-link">
        <p>{`#${link}`}</p>
        <i class="fas fa-external-link-alt"></i>
      </div>
    );
  }

  return (
    <div className="saved-links">
      <h3> Saved</h3>
      {links}
    </div>
  );
};

export default SavedLinksList;
