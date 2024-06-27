import React from "react";

const Footer1 = () => {
  return (
    <>
      <footer className="w-full  py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-[#9747FF] text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center  gap-5 text-center">
          <div>
            <a
              className="flex-none text-xl font-semibold text-whitee dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
              aria-label="Brand"
            >
              SlideMap
            </a>
          </div>

          <ul className="text-end">
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <a
                className="inline-flex gap-x-2 text-sm  text-white hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/home"
              >
                Landing
              </a>
            </li>
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <a
                className="inline-flex gap-x-2 text-sm  text-white hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/map"
              >
                Map
              </a>
            </li>
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <a
                className="inline-flex gap-x-2 text-sm  text-white hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/report"
              >
                Report Landslide
              </a>
            </li>
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <a
                className="inline-flex gap-x-2 text-sm  text-white hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/news"
              >
                News
              </a>
            </li>
          </ul>

       
        </div>
        
      </footer>
    </>
  );
};

export default Footer1;
