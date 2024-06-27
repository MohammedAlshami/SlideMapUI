import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="h-fit relative" style={{ zIndex: 1000 }}>
        <div className="px-2 text-white flex flex-col space-y-6 items-center absolute w-26 bg-white  h-screen pt-8">
          <div className="space-y-6">
            <div className="border-gray-300 border rounded-md p-2 hover:shadow-xl">
              <Navitem to="/home">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Navitem>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import { ReactNode } from "react";

interface NavitemProps {
  children: ReactNode;
  to: string;
}

const Navitem = ({ children, to }: NavitemProps) => {
  const handleClick = () => {
    window.location.href = to;
  };
  return (
    <div className="cursor-pointer w-6 fill-[#8A2BE2]" onClick={handleClick}>
      {children}
    </div>
  );
};

export const HistoryItem = () => {
  return (
    <div className="w-10 space-y-2 cursor-pointer text-[#858A8E] hover:text-[#000000]">
      <div className="">
        <img
          className="rounded-lg object-cover h-10 max-w-full"
          src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ntomlcr0yv3audvlzghp/Farm%20In%20The%20City%20Discount%20Ticket%20in%20Malaysia.jpg"
          alt=""
        />
      </div>
      <p className=" text-xs">Farm in the city</p>
    </div>
  );
};
import { useState } from "react";

export const Searchbar = () => {
  const [searchHistory, setSearchHistory] = useState([
    "Landslide one",
    "Search History Item 2",
    "Search History Item 3",
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: any) => {
    setSearchQuery(event.target.value);
    // Add your logic here to fetch and update search history based on user input
  };

  return (
    <div className="relative mt-4">
      <div className="flex flex-col items-center bg-white p-4 px-6 rounded-xl w-90 relative">
        <div className="flex items-center justify-between space-x-4 w-full fill-[#8A2BE2]">
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              className="border-none focus:outline-none w-full"
              placeholder="Search..."
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z" />
          </svg>
        </div>
        {searchQuery && (
          <>
            <div className="w-full border-t my-2"></div>
            <div
              className={`w-full mt-2 transition-all ${
                searchQuery ? "opacity-100" : "opacity-0"
              }`}
            >
              <ul className="list-none p-2 bg-white rounded-xl shadow">
                {searchHistory.map((item, index) => (
                  <li
                    key={index}
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const SideItem = () => {
  return (
    <>
      <div className="dropdown dropdown-right">
        {/* <div tabIndex={0} role="button" className="btn m-0">Click</div> */}

        <div
          tabIndex={0}
          role="button"
          className="w-6 fill-[#8A2BE2] cursor-pointer hover:border hover:border-2 hover:border-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z" />
          </svg>
        </div>

        <div
          tabIndex={0}
          className="dropdown-content z-[1] scrollbar-hide p-4 shadow bg-base-100 rounded-lg w-96 h-[300px] overflow-y-scroll ml-12 bg-white space-y-4"
        >
          <h1 className="text-black font-bold text-lg">BaseMaps</h1>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex justify-center items-center flex-col gap-2 w-fit cursor-pointer">
              <div className="h-20 w-30 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://media.istockphoto.com/id/1478068139/photo/united-states-topographic-map-horizontal-3d-render-dark-ocean-neutral.webp?b=1&s=170667a&w=0&k=20&c=VEwBt48xdOAT8ofTGg2gVqtnMEQm7gFcyF9o_442ojg="
                  className="shadow-xl	 hover:scale-110 transition duration-500  w-full h-full object-cover  rounded-lg"
                  alt=""
                />
              </div>
              <h2 className="text-black text-sm">Blueprint</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
