import React from "react";
import { maxPagination } from "@config/siteConfig";

const Pagination: React.FC = ({ currentPage, totalPages, handlePageClick }) => {
  totalPages = totalPages > maxPagination ? maxPagination : totalPages;

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => ++i).map((pageNumber) => (
        <button
          key={pageNumber}
          disabled={currentPage === pageNumber}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
