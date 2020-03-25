import React from "react";

const KeywordSearch = props => {
    return (
        <div >
            <div className="keyword-search">
                <div className="form-group">
                    <input
                        onChange={e => {
                            const { value } = e.target;
                            props.toggleSearch(value);
                        }}
                        type="search"
                        className="form-control"
                        placeholder="Keyword..."
                    ></input>
                </div>
            </div>
        </div>
    );
};

export default KeywordSearch;
