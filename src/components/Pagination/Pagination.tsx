import classNames from "classnames";
import React from "react";
import { PaginationResult } from "../../hooks/usePagination";

import styles from "./Pagination.module.scss";

const Pagination = ({
  currentPage,
  totalPages,
  pageNumbers,
  goTo,
  previousPage,
  nextPage,
  previous,
  next
}: Omit<PaginationResult<null>, "data">) => {
  return (
    <>
      <div
        className={classNames(styles.pagination, {
          [styles.disabled]: totalPages === 1
        })}
      >
        <button
          onClick={previous}
          disabled={!previousPage}
          className={classNames(styles.paginationBtn, {[styles.disabled]: !previousPage})}
        >
          Previous
        </button>
        {pageNumbers.map((pageNumber, index) => (
          <button
            key={index}
            onClick={() => goTo(pageNumber as number)}
            disabled={pageNumber === currentPage}
            className={classNames(styles.paginationBtn, {[styles.active]: pageNumber === currentPage})}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={next}
          disabled={!nextPage}
          className={classNames(styles.paginationBtn, {[styles.disabled]: !nextPage})}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Pagination