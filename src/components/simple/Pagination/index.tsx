import React from "react";
import { maxPagination } from "@config/siteConfig";

const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  handlePageClick: (pageNumber: number) => void;
}> = ({ currentPage, totalPages, handlePageClick }) => {
  const visiblePages = totalPages > maxPagination ? maxPagination : totalPages;
  const pageNumbers = Array.from({ length: visiblePages }, (_, i) => i + 1);

  const renderPageNumbers = pageNumbers.map((pageNumber) => {
    const active = pageNumber === currentPage ? "active disabled" : "";

    return (
      <li className={`page-item ${active}`} key={pageNumber}>
        <button
          className="page-link"
          key={pageNumber}
          active={pageNumber === currentPage}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </button>
      </li>
    );
  });

  return (
    <nav aria-label="Page navigation" className="my-3">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => handlePageClick(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {renderPageNumbers}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => handlePageClick(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
