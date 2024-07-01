"use client";
import "intro.js/introjs.css";

import { useEffect, useState } from "react";
import MainLayout from "@/app/components/MainLayout";
import dynamic from "next/dynamic";
import submitFormData from "../components/Controllers/SubmitForm";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import OperationStatusModal from "../components/Modal/OperationStatusModal";
import { Steps, Hints } from "intro.js-react";
import Joyride from "react-joyride";
import { checkAccessAndRedirect } from "../components/Controllers/accessControl";

const DynamicHeader = dynamic(() => import("../components/Map/Map"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const MapPage = () => {
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
 
  const [runTour, setRunTour] = useState(false); // Set to true to start the tour
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const router = useRouter();
  const [geoJSON, setGeoJSON] = useState(null);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [isAuthenticated, setAuthentication] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      const isUserAuthenticated = await checkAccessAndRedirect();
      setAuthentication(isUserAuthenticated);
      console.log("is user authenticated", isAuthenticated);
      if (!isUserAuthenticated) {
        router.push("/");
      }
    };
    checkAccess();
  }, []);

  const steps = [
    {
      target: "#step1",
      content: "This is the map where you select the landslide features",
      disableBeacon: true,
      placement: "left",
    },
    {
      target: "#step2",
      content: "Here is where you enter the landslide info",
      placement: "right",
    },
    {
      target: "#step3",
      content: "Fill in the report details here!",
    },
    {
      target: "#step4",
      content: "Upload images related to the report!",
    },
    {
      target: "#step5",
      content: "Submit the report by clicking this button!",
    },
  ];


  const handleCreate = (data) => {
    setGeoJSON(data);
    // Update form data with GeoJSON (optional, can be done in handleChange)
    setFormData((prevData) => ({
      ...prevData,
      geoJSON: data,
    }));
  };

  const [formData, setFormData] = useState({
    landslideName: "",
    incidentDate: "",
    size: "",
    casualties: "",
    images: [],
    geoJSON: "",
    email: "",
  });
  const validateForm = () => {
    const { landslideName, incidentDate, size, casualties, images, geoJSON } = formData;

    console.log(formData);
    if (!landslideName || !incidentDate || !size || !casualties || uploadedFiles.length === 0 || !geoJSON) {
      alert("Please fill in all required fields and upload at least one image.");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const sessionCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("session_auth="));
    const sessionValue = sessionCookie ? sessionCookie.split("=")[1] : "";

    const { name, type } = e.target;
    const value = type === "file" ? e.target.files : e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      email: sessionValue,
    }));

    if (type === "file") {
      setUploadedFiles(Array.from(e.target.files).map((file) => file.name));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Handle form submission here
    console.log("before sending", formData);
    // alert(formData);
    document.getElementById("my_modal_1").showModal();
    const response = await submitFormData({ formData });
    console.log("Response:", response);

    setTimeout(() => {
      router.push("/reports");
    }, 3000);
    // router.push("/");
  };
  const onExit = () => {};
  const handleRemoveFile = (index) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images].filter((_, i) => i !== index),
    }));
  };

  return (
    //  <div>
    <MainLayout>
      <Joyride
        steps={steps}
        run={runTour}
        continuous
        showSkipButton
        styles={{
          options: {
            overlayColor: "rgba(0, 0, 0, 0)",
          },
        }}
        callback={(data) => {
          const { status } = data;
          if (["finished", "skipped"].includes(status)) {
            setRunTour(false);
          }
        }}
      />

      {/* <Steps
            enabled={true}
            steps={steps}
            initialStep={0}
            onExit={() => steps = []}
          /> */}

      <div className="flex justify-center pt-36 flex flex-col items-center p-24">
        <h1 className="text-center lg:text-left block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
          Report Landslide Incidents
        </h1>
        <button
          onClick={() => {
            setRunTour(true);
          }}
          className="mt-8 px-6 py-3 bg-purple-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Tour Guide
        </button>
      </div>
      <div className="flex justify-center py-22 pb-24 px-12">
        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">
              Awesome, You've just made a report
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
              You're Being Redirect To Reports Page <br /> Hold ON..........{" "}
            </p>
          </div>
        </dialog>
        <div className="flex flex-col lg:flex-row justify-center items-center md:space-x-8 space-y-12 my-first-step ">
          <div id="step1">
            <DynamicHeader onCreate={handleCreate}></DynamicHeader>
          </div>
          <div className="w-full lg:w-5/12 px-4">
            <form onSubmit={handleSubmit} id="step2">
              <input
                type="text"
                name="landslideName"
                value={formData.landslideName}
                onChange={handleChange}
                placeholder="Report Title"
                className="input mb-4 border-4 border-gray-200 w-full"
              />
              <input
                type="date"
                name="incidentDate"
                value={formData.incidentDate}
                onChange={handleChange}
                placeholder="Incident Date"
                className="input mb-4 border-4 border-gray-200 w-full"
              />
              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                placeholder="Size (if known)"
                className="input mb-4 border-4 border-gray-200 w-full"
              />
              <textarea
                name="casualties"
                value={formData.casualties}
                onChange={handleChange}
                placeholder="Details"
                className="input mb-4 border-4 border-gray-200 w-full pt-4 px-4 h-44"
              ></textarea>

              <div
                className="flex flex-col items-center justify-center  mb-6"
                id="step4"
              >
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleChange}
                    accept=".png, .jpg, .jpeg, .webp"
                    // accept=
                    multiple
                  />
                </label>
                <div className="mt-4 w-full">
                  {uploadedFiles.length > 0 && (
                    <ul className="flex flex-col gap-4">
                      {uploadedFiles.map((fileName, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center text-gray-700 dark:text-gray-300"
                        >
                          <span>{fileName}</span>
                          <button
                            className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
                            onClick={() => handleRemoveFile(index)}
                          >
                            Delete
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="btn w-full bg-purple-400 text-white "
                id="step5"
              >
                Submit Report
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MapPage;
