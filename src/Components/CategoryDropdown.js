import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import keywordArray from "./../keyword.json";

const CategoryDropdown = props => {
  const [dropValue, setDropValue] = useState("Category...");
  const DropdownItems = keywordArray.keywords.map(keyword => {
    return <Dropdown.Item eventKey={keyword}>{keyword}</Dropdown.Item>;
  });
  useEffect(() => {
    DropdownItems.unshift(
      <Dropdown.Item eventKey={"none"}>{"none"}</Dropdown.Item>
    );
  }, [DropdownItems]);

  return (
    <div className="category-dropdown centralized">
      <Dropdown
        onSelect={k => {
          if (k === "none") {
            props.setCategory("");
            setDropValue("Category...");
            return;
          }
          setDropValue(k);
          props.setCategory(k);
        }}
      >
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {dropValue}
        </Dropdown.Toggle>

        <Dropdown.Menu>{DropdownItems}</Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CategoryDropdown;
