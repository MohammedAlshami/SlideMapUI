import React from "react";

const PaginationComponent = ({ currentPage, totalPages }) => {
  var currentPageInt = parseInt(currentPage, 10);


  return (
    <nav className="flex justify-between items-center gap-x-1">
      <a
        href={`http://localhost:3000/news?page=${currentPageInt - 1}`}
        className={`min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ${currentPageInt <= 1 ? 'opacity-50 pointer-events-none' : ''}`}
        aria-disabled={currentPageInt <= 1}
      >
        <svg
          className="flex-shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        <span aria-hidden="true" className="hidden sm:block">
          Previous
        </span>
      </a>
      <div className="flex items-center gap-x-1">
        <span className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:focus:bg-white/10">
          {currentPageInt}
        </span>
        <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">
          of
        </span>
        <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">
          {totalPages}
        </span>
      </div>
      <a
        href={`http://localhost:3000/news?page=${currentPageInt + 1}`}
        className={`min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ${currentPageInt >= totalPages ? 'opacity-50 pointer-events-none' : ''}`}
        aria-disabled={currentPageInt >= totalPages}
      >
        <span aria-hidden="true" className="hidden sm:block">
          Next
        </span>
        <svg
          className="flex-shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </a>
    </nav>
  );
};

export default PaginationComponent;
