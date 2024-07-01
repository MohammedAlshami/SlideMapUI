"use client";
import Navbar from "@/app/components/Navbar";
import Hero1 from "./components/Hero/Hero1";
import { FAQ } from "./home/FAQ";
import Features1 from "./components/Features/Features1";
import Footer1 from "./components/Footers/Footer1";
import Roadmap from "./home/Roadmap";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
        <Navbar></Navbar>

        <div className="h-screen flex flex-col justify-between gap-44 ">
          <div>
            <Hero1></Hero1>
          </div>

          <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-48 lg:px-8 lg:max-w-7xl">
              <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid lg:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                  <div>
                    <img
                      className="rounded-xl max-w-full h-auto object-cover shadow-2xl"
                      src="/assets/about_us.png"
                      alt="Image Description"
                    />
                  </div>

                  <div className="mt-5 sm:mt-10 lg:mt-0" id="About_us">
                    <div className="space-y-6 sm:space-y-8">
                      <div className="space-y-2 md:space-y-4">
                        <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                          What is SlideMap?
                        </h2>
                        <div className="text-gray-900 grid grid-col gap-12 text-lg">
                          <p>
                            SlideMap is an innovative project designed to
                            address the scarcity of landslide incident datasets
                            by leveraging cutting-edge technology. Through web
                            scraping, we gather real-time news data from across
                            the internet, allowing us to swiftly detect and
                            pinpoint landslide occurrences worldwide. Our
                            platform then visualizes these incidents on an
                            interactive map, providing invaluable insights into
                            landslide-prone areas.
                          </p>
                          <p>
                            At SlideMap, we're committed to enhancing awareness
                            and understanding of landslides, empowering
                            communities and authorities to take proactive
                            measures for disaster mitigation. Join us as we
                            revolutionize the landscape of landslide monitoring
                            and mapping, one incident at a time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Features1></Features1>

          <div className="space-y-12">
            <div className="mx-auto">
              <h2 className="text-center text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                Our Roadmap
              </h2>
            </div>
            <Roadmap></Roadmap>
          </div>

          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                Latest Landslide News
              </h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Stay in the know with insights from industry experts.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <a
                className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                    src="https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/pin-s+9ed4bd(3.4601368,101.6550138)/101.6550138,3.4601368,14,0,0/800x600?access_token=pk.eyJ1IjoibXNoYW1pIiwiYSI6ImNsb2ZqMzFkbTBudTMycnFjM3QybW54MnAifQ.8SDg8QedEnsOGHU4AL9L4A"
                    alt="Image Description"
                  />
                  <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                    Sponsored
                  </span>
                </div>

                <div className="mt-7">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                    Tragic Landslide at Unlicensed Campsite in Batang Kali,
                    Malaysia
                  </h3>
                  <p className="mt-3 text-gray-800 dark:text-gray-200">
                    On December 16, 2022, a devastating landslide occurred at an
                    unlicensed campground on an organic farm in Batang Kali,
                    central Selangor state, Malaysia
                  </p>
                  <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                    Read more
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
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </p>
                </div>
              </a>
              <a
                className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                    src="https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/pin-s+9ed4bd(3.1319197,101.6840589)/101.6840589,3.1319197,14,0,0/800x600?access_token=pk.eyJ1IjoibXNoYW1pIiwiYSI6ImNsb2ZqMzFkbTBudTMycnFjM3QybW54MnAifQ.8SDg8QedEnsOGHU4AL9L4A"
                    alt="Image Description"
                  />
                </div>

                <div className="mt-7">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                    Police Refute Viral Video of Supposed Landslide at Genting
                    Sempah Tunnel
                  </h3>
                  <p className="mt-3 text-gray-800 dark:text-gray-200">
                    On November 26, 2023, a video went viral on social media
                    claiming to show a landslide at the Genting Sempah Tunnel in
                    Kuala Lumpur, Malaysia
                  </p>
                  <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                    Read more
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
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </p>
                </div>
              </a>

              <a
                className="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <div className="flex-auto p-4 md:p-6">
                  <h3 className="text-xl text-white/[.9] group-hover:text-white">
                    <span className="font-bold">Landlide News</span>
                    Explore More News On The Latest Landslides Incidents In
                    Malaysia
                  </h3>
                </div>
                <div className="pt-0 p-4 md:p-6">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
                    Visit the site
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
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <FAQ></FAQ>

          <Footer1></Footer1>
        </div>
      </div>
    </>
  );
}

export const Header = () => {
  return (
    <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              The quick, brown fox
              <br className="hidden md:block" />
              jumps over{" "}
              <span className="inline-block text-deep-purple-accent-400">
                a lazy dog
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <img
              alt="daisy"
              src="https://media.licdn.com/dms/image/D4D12AQEMHhdfnoWnJA/article-cover_image-shrink_720_1280/0/1680375976698?e=2147483647&v=beta&t=v-KxaqI8c33TXF5UsZ_s6fxsSsR_1PjHb3PktyHKPUA"
            />
          </div>
          <div className="diff-item-2">
            <img alt="daisy" src="images/landslide_segmented.png" />
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
    </div>
  );
};

export const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{" "}
          What makes SlideMap different than other landslide mapping?
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">The deep ocean</h6>
          <p className="mb-3 text-sm text-gray-900">
            A flower in my garden, a mystery in my panties. Heart attack never
            stopped old Big Bear. I didn't even know we were calling him Big
            Bear. We never had the chance to.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">When has justice</h6>
          <p className="mb-3 text-sm text-gray-900">
            Rough pomfret lemon shark plownose chimaera southern sandfish
            kokanee northern sea robin Antarctic cod. Yellow-and-black triplefin
            gulper South American Lungfish mahi-mahi, butterflyfish glass
            catfish soapfish ling gray mullet!
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Organically grow</h6>
          <p className="mb-3 text-sm text-gray-900">
            A slice of heaven. O for awesome, this chocka full cuzzie is as
            rip-off as a cracker. Meanwhile, in behind the bicycle shed,
            Hercules Morse, as big as a horse and Mrs Falani were up to no good
            with a bunch of crook pikelets.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">
            A slice of heaven
          </h6>
          <p className="mb-3 text-sm text-gray-900">
            Disrupt inspire and think tank, social entrepreneur but preliminary
            thinking think tank compelling. Inspiring, invest synergy capacity
            building, white paper; silo, unprecedented challenge B-corp
            problem-solvers.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export const Statistic = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">
            819
          </h6>
          <p className="mb-2 font-bold text-md">Downloads</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">
            1.3K
          </h6>
          <p className="mb-2 font-bold text-md">Users</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">91</h6>
          <p className="mb-2 font-bold text-md">Subscribers</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">52</h6>
          <p className="mb-2 font-bold text-md">Products</p>
        </div>
      </div>
    </div>
  );
};

export const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-10 border-t border-b divide-y">
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                Books
              </a>
              <p className="text-gray-600">5 Jan 2020</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  Tell them I hate them
                </p>
              </a>
            </div>
            <p className="text-gray-700">
              Well, the way they make shows is, they make one show. That show's
              called a pilot. Then they show that show to the people who make
              shows.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                Inspiration
              </a>
              <p className="text-gray-600">15 Sep 2020</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  A flower in my green garden
                </p>
              </a>
            </div>
            <p className="text-gray-700">
              Chase ball of string eat plants, meow, and throw up because I ate
              plants going to catch the red dot today going.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                Detective
              </a>
              <p className="text-gray-600">28 Dec 2020</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  We never had the love we deserve
                </p>
              </a>
            </div>
            <p className="text-gray-700">
              Sportacus andrew weatherall goose Refined gentlemen super mario
              des lynam alpha trion zap.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          See all articles
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};
