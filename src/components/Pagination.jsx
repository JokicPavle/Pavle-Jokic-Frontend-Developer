import React from "react";

const Pagination = ({
  postsPerPage,
  length,
  currentPage,
  paginate,
  previousPage,
  nextPage,
}) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className="w-[350px] sm:w-[500px] m-auto flex justify-between p-6 mt-10">
      <button onClick={previousPage}>Prev</button>
      {paginationNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => paginate(pageNumber)}
          className={
            currentPage === pageNumber
              ? "active"
              : "p-3 border border-orange-500"
          }
        >
          {pageNumber}
        </button>
      ))}
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Pagination;
