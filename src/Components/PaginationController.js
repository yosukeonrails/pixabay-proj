import React from "react";
import { result_per_page } from "./../contants";
const PaginationController = props => {
  let { currentPage, changePage, totalHits } = props;
  let howManyPages = Math.ceil(totalHits / result_per_page);
  console.log(howManyPages);
  let paginationNumbers = pages => {
    let numbers = [];

    let lastNumber = Math.ceil(currentPage / 5) * 5;

    for (let i = 1; i <= pages; i++) {
      let selectedStyle =
        i === currentPage ? { backgroundColor: "#171212", color: "white" } : {};
      console.log(i);
      numbers.push(
        <div style={selectedStyle} className="pagination-number">
          <h3>{i}</h3>
        </div>
      );
    }

    return numbers;
  };

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
      <div className="pagination-numbers">
        {paginationNumbers(howManyPages < 5 ? howManyPages : 5)}
      </div>

      <i
        style={{
          visibility: totalHits > 30 * currentPage ? "visible" : "hidden"
        }}
        onClick={() => {
          paginate(currentPage + 1);
        }}
        class="fas fa-arrow-circle-right"
      ></i>
    </div>
  );
};

export default PaginationController;
