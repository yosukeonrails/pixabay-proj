import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import keywordArray from "./../keyword.json";

const CategoryDropdown = props => {
  const DropdownItems = keywordArray.keywords.map(keyword => {
    return <Dropdown.Item eventKey={keyword}>{keyword}</Dropdown.Item>;
  });
  return (
    <div>
      <Dropdown
        onSelect={k => {
          props.setCategory(k);
        }}
      >
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Category...
        </Dropdown.Toggle>

        <Dropdown.Menu>{DropdownItems}</Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CategoryDropdown;
