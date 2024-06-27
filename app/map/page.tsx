"use client";
import React, { useState, useEffect } from "react";
import HomePage from "@/components/Map/Map";
import Sidebar from "@/components/Map/items/Sidebar";
import Navbar from "../components/Navbar";
// Define the LoadingModal component
const LoadingModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="bg-white p-4 rounded-md">
        <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-gray-800">
          <div className="absolute top-2 end-2">
            <button
              type="button"
              className="flex justify-center items-center size-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-overlay="#hs-task-created-alert"
            >
              <span className="sr-only">Close</span>
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <div className="p-4 sm:p-10 text-center overflow-y-auto">
            <span className="mb-4 inline-flex justify-center items-center size-[46px] rounded-full border-4 border-green-50 bg-green-100 text-green-500 dark:bg-green-700 dark:border-green-600 dark:text-green-100">
              <svg
                className="flex-shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
              </svg>
            </span>

            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">
              Loading The page
            </h3>
            <p className="text-gray-500">
              Please Wait While We Load The Page For You
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define the page component
const Page = () => {
  useEffect(() => {
    document.getElementById("my_modal_1").showModal();
    const iframe = document.querySelector("iframe");
    if (iframe) {
      iframe.addEventListener("load", () => {
        setTimeout(() => {
          document.getElementById("my_modal_1").close();
        }, 4000);
      });
    }
  }, []);

  // Your initial position array
  const position = [51.505, -0.09];

  // Render the page
  return (
    <>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">
            Loading The Map For You
          </h3>
          <p className="py-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4em"
              height="4em"
              viewBox="0 0 24 24"
              className="text-center mx-auto"
            >
              <circle cx={12} cy={2} r={0} fill="#8c00ff">
                <animate
                  attributeName="r"
                  begin={0}
                  calcMode="spline"
                  dur="1s"
                  keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                  repeatCount="indefinite"
                  values="0;2;0;0"
                ></animate>
              </circle>
              <circle
                cx={12}
                cy={2}
                r={0}
                fill="#8c00ff"
                transform="rotate(45 12 12)"
              >
                <animate
                  attributeName="r"
                  begin="0.125s"
                  calcMode="spline"
                  dur="1s"
                  keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                  repeatCount="indefinite"
                  values="0;2;0;0"
                ></animate>
              </circle>
              <circle
                cx={12}
                cy={2}
                r={0}
                fill="#8c00ff"
                transform="rotate(90 12 12)"
              >
                <animate
                  attributeName="r"
                  begin="0.25s"
                  calcMode="spline"
                  dur="1s"
                  keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                  repeatCount="indefinite"
                  values="0;2;0;0"
                ></animate>
              </circle>
              <circle
                cx={12}
                cy={2}
                r={0}
                fill="#8c00ff"
                transform="rotate(135 12 12)"
              >
                <animate
                  attributeName="r"
                  begin="0.375s"
                  calcMode="spline"
                  dur="1s"
                  keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                  repeatCount="indefinite"
                  values="0;2;0;0"
                ></animate>
              </circle>
              <circle
                cx={12}
                cy={2}
                r={0}
                fill="#8c00ff"
                transform="rotate(180 12 12)"
              >
                <animate
                  attributeName="r"
                  begin="0.5s"
                  calcMode="spline"
                  dur="1s"
                  keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                  repeatCount="indefinite"
                  values="0;2;0;0"
                ></animate>
              </circle>
              <circle
                cx={12}
                cy={2}
                r={0}
                fill="#8c00ff"
                transform="rotate(225 12 12)"
              >
                <animate
                  attributeName="r"
                  begin="0.625s"
                  calcMode="spline"
                  dur="1s"
                  keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                  repeatCount="indefinite"
                  values="0;2;0;0"
                ></animate>
              </circle>
              <circle
                cx={12}
                cy={2}
                r={0}
                fill="#8c00ff"
                transform="rotate(270 12 12)"
              >
                <animate
                  attributeName="r"
                  begin="0.75s"
                  calcMode="spline"
                  dur="1s"
                  keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                  repeatCount="indefinite"
                  values="0;2;0;0"
                ></animate>
              </circle>
              <circle
                cx={12}
                cy={2}
                r={0}
                fill="#8c00ff"
                transform="rotate(315 12 12)"
              >
                <animate
                  attributeName="r"
                  begin="0.875s"
                  calcMode="spline"
                  dur="1s"
                  keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                  repeatCount="indefinite"
                  values="0;2;0;0"
                ></animate>
              </circle>
            </svg>
            <br />
            Thank You For Beeing Patient
          </p>
        </div>
      </dialog>
      <div className="container relative h-[98vh] ">
        <div
          className="absolute h-screen top-0 left-0 "
          style={{ zIndex: 10000 }}
        >
          <Sidebar></Sidebar>
        </div>
        <div className="">
          <iframe
            src="https://www.arcgis.com/apps/instant/atlas/index.html?appid=09a961626ff24e80a33a80f3bb555116"
            className="h-screen w-screen pl-16"
            style={{ border: 0 }}
          >
            iFrames are not supported on this page.
          </iframe>
        </div>
      </div>
    </>
  );
};

// Export the component
export default Page;
