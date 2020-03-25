import React from "react";
import { result_per_page } from "../contants";
import { returnPaginationRange } from "../Utility";

const PaginationController = props => {
    let { currentPage, changePage, totalHits } = props;

    let howManyPages = Math.ceil(totalHits / result_per_page);

    let paginationNumbers = () => {
        let numbers = [];
        let range = returnPaginationRange(currentPage, howManyPages)

        for (let i = range.start; i <= range.end; i++) {
            let selectedStyle =
                i === currentPage
                    ? {
                        backgroundColor: "#171212",
                        color: "white",
                        border: "2px solid white"
                    }
                    : {};
            numbers.push(
                <div
                    key={i}
                    onClick={() => {
                        changePage(i);
                    }}
                    style={selectedStyle}
                    className="pagination-number"
                >
                    <h3>{i}</h3>
                </div>
            );
        }

        return numbers;
    };

    return (
        <div
            className="pagination-controller"
            style={{
                display:
                    (props.scrollTop > 8 && props.position === "top") ||
                        howManyPages === 0
                        ? "none"
                        : "flex",
                marginTop: props.position === "bottom" ? "2em" : "0"
            }}
        >
            <i
                style={{ visibility: currentPage !== 1 ? "visible" : "hidden" }}
                onClick={() => {
                    changePage(currentPage - 1);
                }}
                className="fas fa-arrow-circle-left"
            ></i>
            <div className="pagination-numbers">{paginationNumbers()}</div>

            <i
                style={{
                    visibility: totalHits > 30 * currentPage ? "visible" : "hidden"
                }}
                onClick={() => {
                    changePage(currentPage + 1);
                }}
                className="fas fa-arrow-circle-right"
            ></i>
        </div>
    );
};

export default PaginationController;
