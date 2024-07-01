"use client";
import ProfileLayout from "../components/ProfileLayout/ProfileLayout";
import Footer1 from "../components/Footers/Footer1";
import MainLayout from "../components/MainLayout";
import GetJwtToken from "../components/Controllers/fetchJWT";
import React, { useEffect, useState } from "react";
import { checkAccessAndRedirect } from "../components/Controllers/accessControl";
import { useRouter } from "next/navigation";

const page = () => {
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

  const sessionCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("session_auth="));
  const sessionValue = sessionCookie ? sessionCookie.split("=")[1] : "";
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    oldPassword: "", // Add a new state for old password
    newPassword: "", // Add a new state for new password
  });
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const dummyUserId = sessionValue; // Replace with the actual user ID
        const jwtToken = GetJwtToken();

        const response = await fetch("http://127.0.0.1:5000/get-profile", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: dummyUserId }),
        });
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (!isAuthenticated) {
      fetchUserProfile();
    }
  }, []);


  if (!isAuthenticated) {
    return <></>;
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData((prevState) => ({
      ...prevState,
      oldPassword: prevState.password,
      newPassword: "",
    }));
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      password: "dummy_password", // Reset the password to an empty string
      oldPassword: "", // Reset the oldPassword to an empty string
      newPassword: "", // Reset the newPassword to an empty string
    });
  };

  const handleSaveChanges = async () => {
    try {
      const jwtToken = GetJwtToken();
      const response = await fetch("http://127.0.0.1:5000/edit-profile", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <MainLayout>
      <form id="login" className="px-24 py-12">
        <div className="dark:bg-gray-800 ">
          <div className="container mx-auto  dark:bg-gray-800 rounded">
            <div className="xl:w-full dark:border-gray-700 py-5 dark:bg-gray-800">
              <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center"></div>
            </div>
            <div className="mx-auto">
              <div className=" w-full mx-auto xl:mx-0">
                <div className="bg-white border border-4 rounded-lg shadow relative my-12 ">
                  <div className="flex items-start justify-between p-5 border-b rounded-t">
                    <h3 className="text-xl font-semibold">Edit Profile</h3>
                  </div>

                  <div className="p-6 space-y-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first_name"
                          className="text-sm font-medium text-gray-900 block mb-2"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="first_name"
                          id="firstName"
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                          placeholder="First Name"
                          value={formData.first_name}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last_name"
                          className="text-sm font-medium text-gray-900 block mb-2"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="last_name"
                          id="lastName"
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                          placeholder="Last Name"
                          value={formData.last_name}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-900 block mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled={true}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3 space-y-6">
                        {isEditing ? (
                          <>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="oldPassword"
                                className="text-sm font-medium text-gray-900 block mb-2"
                              >
                                Old Password
                              </label>
                              <input
                                type="password"
                                name="oldPassword"
                                id="oldPassword"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder="Old Password"
                                value={formData.oldPassword}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="newPassword"
                                className="text-sm font-medium text-gray-900 block mb-2"
                              >
                                New Password
                              </label>
                              <input
                                type="password"
                                name="newPassword"
                                id="newPassword"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder="New Password"
                                value={formData.newPassword}
                                onChange={handleInputChange}
                              />
                            </div>
                          </>
                        ) : (
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="password"
                              className="text-sm font-medium text-gray-900 block mb-2"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              id="password"
                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                              placeholder="Password"
                              value={formData.password}
                              onChange={handleInputChange}
                              disabled={!isEditing}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border-t border-gray-200 rounded-b">
                    {isEditing ? (
                      <>
                        <button
                          className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
                          type="button"
                          onClick={handleSaveChanges}
                        >
                          Save Changes
                        </button>
                        <button
                          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                          type="button"
                          onClick={handleCancelClick}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        type="button"
                        onClick={handleEditClick}
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </MainLayout>
  );
};
export default page;
