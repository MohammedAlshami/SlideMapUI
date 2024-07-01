import React from "react";

const Hero1 = () => {
  return (
    <>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-44">
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="text-center lg:text-left block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
              Landslide Mapping Like No Before
            </h1>
            <p className="text-center lg:text-left mt-3 text-lg text-gray-800 dark:text-gray-400">
              Find out more about landslides with amazing accuracy. Learn about
              the fascinating world of landslides!
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start mt-12">
              <a href="/map">
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
                >
                  Check Map
                </button>
              </a>
              <a href="#About_us">
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900"
                >
                  About Us
                </button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <div className="w-full rounded-xl  dark:bg-gray-500 ">
              <div className="diff aspect-[16/9]">
                <div className="diff-item-1">
                  <img
                    alt="daisy"
                    src="/assets/map_poly.png"
                    className="rounded-3xl"
                  />
                </div>
                <div className="diff-item-2">
                  <img
                    className="rounded-3xl"
                    alt="daisy"
                    src="/assets/map_raw.png"
                  />
                </div>
                <div className="diff-resizer"></div>
              </div>
            </div>
            {/*             
            <img
              className="w-full rounded-xl"
              src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
              alt="Image Description"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero1;
