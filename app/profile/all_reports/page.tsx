"use client";
import React, { useEffect, useState } from "react";
import MainLayout from "@/app/components/MainLayout";
import { checkAccessAndRedirect } from "../../components/Controllers/accessControl";
import { useRouter } from "next/navigation";

const Page = () => {
  const [isAuthenticated, setAuthentication] = useState(false);
  const router = useRouter();

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

  const [currentPage, setCurrentPage] = useState(1);
  const [reports, setReports] = useState([
    {
      id: "report1",
      reporter: "John Doe",
      title: "Sample Report 1",
      details: "This is a sample report with detailed information...",
      size: "2MB",
      images: ["img1.jpg", "img2.jpg"],
    },
    // Add more report data objects as needed
  ]);

  const reportsPerPage = 10;

  const fetchData = async () => {
    try {
      // Make a GET request to fetch all reports
      const response = await fetch("http://127.0.0.1:5000/reports", {});

      if (!response.ok) {
        throw new Error("Failed to fetch report data");
      }

      // Parse the response data as JSON
      const reportData = await response.json();
      console.log(reportData);
      // Update the report data state with the fetched data
      setReports(reportData.data);
    } catch (error) {
      console.error("Error fetching report data:", error);
      alert("Failed to fetch report data");
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      fetchData();
    }
  }, []);

  if (!isAuthenticated) {
    return <></>;
  }
  // Calculate index of the first and last report of the current page
  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = reports.slice(indexOfFirstReport, indexOfLastReport);

  const deleteReport = async (id, reporter) => {
    try {
      // Make a POST request to the API endpoint
      const response = await fetch("http://127.0.0.1:5000/delete_report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ report_id: id, email: reporter }), // Send report's id in the request body
      });

      if (response.ok) {
        // Show success message if request is successful
        alert("Report deleted successfully");
        fetchData(); // Assuming you have a function fetchData() to fetch updated report data
      } else {
        // Show error message if request fails
        throw new Error("Failed to delete report");
      }
    } catch (error) {
      console.error("Error deleting report:", error);
      alert("Failed to delete report");
    }
  };

  const renderReportRow = (report) => {
    return (
      <tr key={report.id}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900 dark:text-neutral-200">
            {report.reporter}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900 dark:text-neutral-200">
            {report.title}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900 dark:text-neutral-200">
            {report.details
              ? report.details.substring(0, 50) + "..."
              : "No details available"}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900 dark:text-neutral-200">
            {report.size}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex space-x-1">
            {report.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`img${index}`}
                className="w-6 h-6 cursor-pointer"
                onClick={() => window.open(img, "_blank")}
              />
            ))}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-end">
          <a
            href={`/reports/report?index=${report.id}`} // Replace 'report/' with your actual report page URL
            className="text-blue-600 hover:underline dark:text-blue-500 ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-end">
          <button
            className="text-sm text-red-600 hover:underline dark:text-red-500 ml-2"
            onClick={() => deleteReport(report.id, report.reporter)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  return (
    <MainLayout>
      <div className="mt-24 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                      Reports
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      View and manage reports.
                    </p>
                  </div>
                </div>
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead className="bg-gray-50 dark:bg-neutral-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-start">
                        Reporter
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        Details
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        Size
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        Images
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        Link
                      </th>
                      <th scope="col" className="px-6 py-3 text-end">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {currentReports.map(renderReportRow)}
                  </tbody>
                </table>
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      <span className="font-semibold text-gray-800 dark:text-neutral-200">
                        {reports.length}
                      </span>{" "}
                      results
                    </p>
                  </div>
                  <div>
                    <div className="inline-flex gap-x-2">
                      <button
                        type="button"
                        className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <svg
                          className="flex-shrink-0 size-4"
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
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                        Prev
                      </button>
                      <button
                        type="button"
                        className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={indexOfLastReport >= reports.length}
                      >
                        Next
                        <svg
                          className="flex-shrink-0 size-4"
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
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
