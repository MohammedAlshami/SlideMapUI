import React, { useEffect, useState } from "react";


export default function News() {
const [newsList, setNewsList] = useState([]);
const [searchQuery, setSearchQuery] = useState("");
const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    // Fetch data from Flask backend
    fetch("http://localhost:5000/all")
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched news list
        setNewsList(data);
        setFilteredNews(data); // Initialize filtered news with all news articles
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  // Function to handle search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = newsList.filter(
      (news) =>
        news.title.toLowerCase().includes(query) ||
        news.first_sentence.toLowerCase().includes(query)
    );
    setFilteredNews(filtered);
  };

  return (
    <>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search news..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Display filtered news */}
      {filteredNews.map((news) => (
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
  );
}
