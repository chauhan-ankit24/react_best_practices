import React from 'react';

const PaginationControls = React.memo(({ currentPage, totalPages, handlePreviousPage, handleNextPage }) => {
  return (
    <div className="flex items-center">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 rounded-l disabled:opacity-50 hover:bg-gray-400"
      >
        Previous
      </button>
      <span className="px-4 py-2 bg-gray-100">
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-300 rounded-r disabled:opacity-50 hover:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
});

export default PaginationControls;
