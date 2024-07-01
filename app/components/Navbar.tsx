"use client";
import { useUrl } from "nextjs-current-url";
import { checkSessionAuthCookie } from "../components/Controllers/Cookies";

import React from "react";

const Navbar = () => {
  const isAuthenticated = checkSessionAuthCookie();
  const sessionCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("isAdmin="));
  const isAdmin = sessionCookie
    ? sessionCookie.split("=")[1] === "true"
    : false;
  const { href: currentUrl, pathname } = useUrl() ?? {};

  function handleLogout() {
    // Function to delete a specific cookie
    function deleteCookie(name) {
      document.cookie =
        name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      document.cookie =
        name +
        "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" +
        window.location.hostname;
      document.cookie =
        name +
        "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" +
        window.location.hostname.replace(/^www\./i, "");
    }

    // Delete the session_auth cookie
    deleteCookie("session_auth");
    deleteCookie("session_jwt");

    // Optionally clear local and session storage
    localStorage.clear();
    sessionStorage.clear();

    // Redirect to the home page
    window.location.href = "/";
  }

  return (
    <>
      <header
        className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm fixed top-0"
        style={{ zIndex: 100000 }}
      >
        <nav
          className="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-xl font-semibold dark:text-white"
              href="/home"
              aria-label="Brand"
            >
              {" "}
              SlideMap
            </a>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
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
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
              <a
                className={`font-medium ${
                  pathname === "/"
                    ? "text-[#8A2BE2] hover:text-blue-400"
                    : "text-gray-500 hover:text-[#8A2BE2]"
                } md:py-6`}
                href="/"
                aria-current="page"
              >
                Landing
              </a>
              <a
                className={`font-medium ${
                  pathname === "/map"
                    ? "text-[#8A2BE2] hover:text-blue-400"
                    : "text-gray-500 hover:text-[#8A2BE2]"
                } md:py-6`}
                href="/map"
              >
                Map
              </a>
         

              <a
                className={`font-medium ${
                  pathname === "/reports"
                    ? "text-[#8A2BE2] hover:text-blue-400"
                    : "text-gray-500 hover:text-[#8A2BE2]"
                } md:py-6`}
                href="/reports"
              >
                Reports
              </a>
              <a
                className={`font-medium ${
                  pathname === "/news"
                    ? "text-[#8A2BE2] hover:text-blue-400"
                    : "text-gray-500 hover:text-[#8A2BE2]"
                } md:py-6`}
                href="/news"
              >
                News
              </a>

              {!isAuthenticated && (
                <a
                  className={`flex items-center gap-x-2 font-medium ${
                    pathname === "/login"
                      ? "text-[#8A2BE2] hover:text-blue-400"
                      : "text-gray-500 hover:text-[#8A2BE2]"
                  } md:py-6`}
                  href="/login"
                >
                  <svg
                    className="flex-shrink-0 w-4 h-4"
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
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Log in
                </a>
              )}
            </div>
          </div>

          {isAuthenticated && (
            <div className="dropdown dropdown-end ml-4">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="/assets/profilePIC.avif"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between" href="/profile">
                    Profile
                  </a>
                </li>

                <li>
                  <a className="justify-between" href="/profile/detect">
                    Detect
                  </a>
                </li>
                {isAdmin && (
                  <>
                    <li>
                      <a className="justify-between" href="/profile/all_reports">
                        All Reports
                      </a>
                    </li>
                    <li>
                      <a className="justify-between" href="/profile/all_users">
                        Users
                      </a>
                    </li>
                  </>
                )}
                <li>
                  <a href="/profile/reports">Reports Made</a>
                </li>
                <li onClick={handleLogout}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
