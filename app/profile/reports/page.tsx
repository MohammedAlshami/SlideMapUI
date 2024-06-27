"use client";

import React, { useEffect, useState } from "react";
import MainLayout from "@/app/components/MainLayout";
import GetJwtToken from "@/app/components/Controllers/fetchJWT";
import { checkAccessAndRedirect } from "@/app/components/Controllers/accessControl";
const Page = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isPageLoading, setisPageLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const checkAccess = async () => {
      await checkAccessAndRedirect();
      setisPageLoading(false); // Set loading to false after check
    };

    checkAccess();
  }, []);

  const fetchData = async () => {
    const sessionCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("session_auth="));
    const sessionValue = sessionCookie ? sessionCookie.split("=")[1] : "";

    const jwtToken = GetJwtToken();
    const apiUrl = "http://127.0.0.1:5000/personal_reports";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${jwtToken}`,

          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: sessionValue }),
      });

      if (!response.ok) throw new Error("Failed to fetch data");

      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isPageLoading) {
      fetchData();
    }
  }, [isPageLoading]);

  const handleDelete = async (reportId) => {
    const sessionCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("session_auth="));
    const sessionValue = sessionCookie ? sessionCookie.split("=")[1] : "";
    const jwtToken = GetJwtToken();
    try {
      const response = await fetch("http://127.0.0.1:5000/delete_report", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ report_id: reportId, email: sessionValue }),
      });

      if (!response.ok) throw new Error("Failed to delete report");

      // Remove the deleted report from the state
      setData((prevData) =>
        prevData.filter((report) => report.id !== reportId)
      );
    } catch (error) {
      console.error("Error deleting report:", error);
    }
  };
  const [showModal, setShowModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  const handleEdit = (report) => {
    setSelectedReport(report);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedReport(null);
  };

  const handleSaveReport = async (editedReport) => {
    // Send request to update report using editedReport
    try {
      // Example code for sending request to update report
      const jwtToken = GetJwtToken();
      const response = await fetch("http://127.0.0.1:5000/edit_report", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedReport),
      });

      if (response.ok) {
        // Update reports on the frontend after successful update
        // Example: fetchData();
        fetchData(); // Refresh data immediately after successful update

        closeModal();
      } else {
        throw new Error("Failed to edit report");
      }
    } catch (error) {
      console.error("Error editing report:", error);
      alert("Failed to edit report");
    }
  };

  const EditModal = ({ report }) => {
    const [editedReport, setEditedReport] = useState(null);

    useEffect(() => {
      const fetchReportDetails = async () => {
        try {
          const jwtToken = GetJwtToken();
          const response = await fetch(
            `http://127.0.0.1:5000/fetch_report?uuid=${report.id}`,
            {
              method: "POST",
              headers: {
                'Authorization': `Bearer ${jwtToken}`,
              },
            }
          );
          if (response.ok) {
            const data = await response.json();
            setEditedReport(data);
          } else {
            throw new Error("Failed to fetch report details");
          }
        } catch (error) {
          console.error("Error fetching report details:", error);
          alert("Failed to fetch report details");
        }
      };

      fetchReportDetails();
    }, [report.id]);

    const handleSave = async () => {
      if (!editedReport.title || !editedReport.details) {
        alert("Please fill out all fields");
        return;
      }

      // Call handleSave function from the parent component
      handleSaveReport(editedReport);
    };

    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen ">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeModal}
            aria-hidden="true"
          ></div>
          <div className="relative z-10 bg-white p-8 rounded-md w-6/12 border border-purple-600 border-4">
            <h2 className="text-xl font-semibold mb-4 text-center text-purple-600">
              Edit Report
            </h2>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-md font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 border-2 p-2 rounded-md"
                value={editedReport?.title || ""}
                onChange={(e) =>
                  setEditedReport({ ...editedReport, title: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="details"
                className="block text-md font-medium text-gray-700"
              >
                Details
              </label>
              <textarea
                id="details"
                name="details"
                rows="3"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 border-2 p-2 rounded-md"
                value={editedReport?.details || ""}
                onChange={(e) =>
                  setEditedReport({ ...editedReport, details: e.target.value })
                }
              ></textarea>
            </div>
            <div className="flex justify-end mt-4 space-x-4">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-purple-500 text-white rounded-md "
              >
                Save
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ReportCard = ({ report }) => (
    <a>
      <div className="relative transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg group flex flex-col h-full border border-purple-600 border-4 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        <div className="flex justify-end mb-4 space-x-2">
          <button
            className="bg-purple-500 text-white p-2 rounded-md"
            onClick={() => handleEdit(report)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536M9 12.414l6-6m-2 2h5v5M9 21v-3.586l11-11L15.586 2 4.586 13H2v5h5v-2.586l11-11z"
              />
            </svg>
          </button>
          <button
            className="bg-purple-500 text-white p-2 rounded-md"
            onClick={() => handleDelete(report.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 0V5a2 2 0 114 0v2m-7 0h10"
              />
            </svg>
          </button>
        </div>
        {report.images && report.images[0] && (
          <a
            href={`/reports/report?index=${report.id}`}
            className="aspect-w-16 aspect-h-11 "
          >
            <img
              className="w-full object-cover rounded-xl"
              src={report.images[0]}
              alt="Image Description"
            />
          </a>
        )}
        <div className="my-6">
          <div className="flex w-full justify-between">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
              {report.title}
            </h3>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
              {report.landslide_size}kmsq
            </h3>
          </div>
          <p className="mt-5 text-gray-600 dark:text-gray-400">
            {report.details}
          </p>
        </div>
      </div>
    </a>
  );

  if (isPageLoading) {
    return <div></div>; // Show loading state
  }

  if (error) {
    return (
      <MainLayout>
        <p>Error: {error}</p>
      </MainLayout>
    );
  }

  if (isLoading) {
    return (
      <MainLayout>
        <p></p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2 className="pt-24 text-3xl mb-12">Reports Made By You</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="/report"
            className="transform transition-transform duration-300 justify-center gap-4 hover:-translate-y-2 hover:shadow-lg flex flex-col h-full border border-purple-600 border-4 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer"
          >
            <div className="flex justify-center items-center">
              <button className="bg-purple-500 text-white text-3xl  px-14 py-12 rounded-full">
                +
              </button>
            </div>
            <p className="text-center mt-4 text-lg font-semibold">
              Add New Report
            </p>
          </a>
          {data.length > 0 ? (
            data.map((report, index) => (
              <ReportCard key={index} report={report} />
            ))
          ) : (
            <p className="pt-12">You haven't made any reports</p>
          )}
        </div>
        {showModal && <EditModal report={selectedReport} />}
      </div>
    </MainLayout>
  );
};

export default Page;
