import React from "react";
import { result_per_page } from "./../contants";
const PaginationController = props => {
  let { currentPage, changePage, totalHits } = props;
  let howManyPages = Math.ceil(totalHits / result_per_page);

  let paginationNumbers = () => {
    let numbers = [];
    let lastNumber = Math.ceil(currentPage / 5) * 5;
    let startingNumber = lastNumber - 4;

    if (lastNumber > howManyPages) {
      lastNumber = howManyPages;
    }

    for (let i = startingNumber; i <= lastNumber; i++) {
      let selectedStyle =
        i === currentPage ? { backgroundColor: "#171212", color: "white" } : {};

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
      <div className="pagination-numbers">{paginationNumbers()}</div>

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
