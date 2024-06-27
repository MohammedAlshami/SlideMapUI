"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import MainLayout from "@/app/components/MainLayout";

const Article = () => {
  const searchParams = useSearchParams();

  const [article, setArticle] = useState(null);
  const search = searchParams.get("index");
  
  const [fetchComplete, setFetchComplete] = useState(false);


  useEffect(() => {
    document.getElementById("my_modal_1").showModal();
  }, []);
  useEffect(() => {
  

    // Fetch data from API endpoint
    fetch(`http://127.0.0.1:5000?index=${search}`)
      .then((response) => response.json())
      .then((data) => {
        // Check if the data is an object
        if (typeof data === "object" && data !== null) {
          // Set the article data
          setArticle(data);
          setFetchComplete(true);
        } else {
          console.error("Data is not in the expected format:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    if (fetchComplete) {
      setTimeout(() => {
        document.getElementById("my_modal_1").close();
      }, 1000);
    }
  }, [fetchComplete]);

  return (
    <>
      <MainLayout>
      <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">
             Loading The News For You
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
        {article && (
          <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-2xl">
              <div className="space-y-5 md:space-y-8">
                <h2 className="text-2xl font-bold md:text-3xl dark:text-white pt-24">
                  {article.title}
                </h2>
                {article.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-gray-800 dark:text-gray-200"
                  >
                    {paragraph}
                  </p>
                ))}

            

                <div className="mt-4">
                  <h2 className="text-1xl font-bold md:text-3xl dark:text-white pt-8">
                    Location
                  </h2>
                  <p className="text-lg text-gray-800 dark:text-gray-200 pt-4">
                    {article.location}
                  </p>
                  <div style={{ width: "100%" }}>
                    <iframe
                      width="100%"
                      height="600"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${article.coordinates[0]},${article.coordinates[1]}&t=&z=14&ie=UTF8&iwloc=B&output=embed&maptype=satellite`}
                      >
                      <a
                        href={`https://www.google.com/maps/@${article.coordinates[0]},${article.coordinates[1]},14z`}
                      >
                        View Larger Map
                      </a>
                    </iframe>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold dark:text-white">
                    Sources:
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    {article.urls.map((url, index) => (
                      <li key={index}>
                        <a href={url} className="text-blue-600 hover:underline">
                          {url}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </MainLayout>
    </>
  );
};

export default Article;
