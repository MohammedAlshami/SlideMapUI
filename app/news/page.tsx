"use client";
import React, { useEffect, useState } from "react";

import MainLayout from "@/app/components/MainLayout";
import PaginationComponent from "../components/paginationComponent";
import LoadingModal from "../components/Modal/LoadingModal";

import { useSearchParams } from "next/navigation";
const page = () => {
  return <Blog></Blog>;
};

export default page;

export const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const searchParams = useSearchParams();
  const search = searchParams.get("page");


  const [newsList, setNewsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);
  const [fetchComplete, setFetchComplete] = useState(false);

  useEffect(() => {
    if (search){
      setCurrentPage(search)
    }
    
    document.getElementById("my_modal_1").showModal();
    // Fetch data from Flask backend
    fetch(`http://127.0.0.1:5000/all?page=${search}`)
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched news list
        setNewsList(data.data);
        setFilteredNews(data.data);
        setTotalPages(data.total); // Initialize filtered news with all news articles
        setFetchComplete(true);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);
  useEffect(() => {
    if (fetchComplete) {
      setTimeout(() => {
        document.getElementById("my_modal_1").close();
      }, 1000);
    }
  }, [fetchComplete]);

  // Function to handle search
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleSearchClick = (e) => {
    e.preventDefault(); // Prevent the form from submitting in the traditional way
    // Redirect to another page with the search term
    window.location.href = `http://localhost:3000/news?search=${encodeURIComponent(searchQuery)}`;
  };
  return (
    <>
      <MainLayout>
        <LoadingModal message="News"></LoadingModal>
        <div className="h-32"></div>
        <div className="relative overflow-hidden">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200">
                Landslides
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Stay in the know with insights from industry experts.
              </p>

              <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                <form>
                  <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                    <div className="flex-[1_0_0%]">
                      <label
                        htmlFor="hs-search-article-1"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        <span className="sr-only">Search article</span>
                      </label>
                      <input
                        type="text"
                        name="hs-search-article-1"
                        id="hs-search-article-1"
                        className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Search article"
                        value={searchQuery}
                        onChange={handleSearch}
                      />
                    </div>
                    <div className="flex-[0_0_auto]" onClick={handleSearchClick}>

                      <a
                        className="w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#8A2BE2] text-white hover:bg-[#5E09AD] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </form>

                <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                  <svg
                    className="w-16 h-auto text-[#2BDCE2]"
                    width="121"
                    height="135"
                    viewBox="0 0 121 135"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                  <svg
                    className="w-40 h-auto text-[#8A2BE2]"
                    width="347"
                    height="188"
                    viewBox="0 0 347 188"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                      stroke="currentColor"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <>
              {/* Search bar */}

              {/* Display filtered news */}
              {filteredNews.slice(0, 6).map((news) => (
                <a
                  key={news.index}
                  href={`/news/article?index=${news.index}`}
                  className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <div className="aspect-w-16 aspect-h-11">
                    <img
                      className="w-full object-cover rounded-xl"
                      src={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/pin-s+9ed4bd(${news.lat},${news.lon})/${news.lon},${news.lat},14,0,0/800x600?access_token=pk.eyJ1IjoibXNoYW1pIiwiYSI6ImNsb2ZqMzFkbTBudTMycnFjM3QybW54MnAifQ.8SDg8QedEnsOGHU4AL9L4A`}
                      alt="Image Description"
                    />
                  </div>
                  <div className="my-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                      {news.title}
                    </h3>
                    <p className="mt-5 text-gray-600 dark:text-gray-400">
                      {news.first_sentence}
                    </p>
                  </div>
                </a>
              ))}
            </>
          </div>
          <div className="pt-12">
            <PaginationComponent currentPage={currentPage} totalPages={totalPages} />
          </div>
        </div>
      </MainLayout>
    </>
  );
};
