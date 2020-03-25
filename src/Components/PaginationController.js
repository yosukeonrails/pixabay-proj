import React from "react";

const PaginationController = props => {
  let { currentPage, changePage } = props;

  let paginate = page => {
    changePage(page);
  };

  return (
    <div className="pagination-controller">
      <i
        style={{ visibility: currentPage !== 1 ? "visible" : "hidden" }}
        onClick={() => {
          paginate(currentPage - 1);
        }}
        class="fas fa-arrow-circle-left"
      ></i>
      <i
        //    style={{ display: currentPage !== 1 ? "display" : "none" }}
        onClick={() => {
          paginate(currentPage + 1);
        }}
        class="fas fa-arrow-circle-right"
      ></i>
    </div>
  );
};

export default PaginationController;
