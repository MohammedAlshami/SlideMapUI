"use client";
import React, { useEffect, useState } from "react";
import MainLayout from "@/app/components/MainLayout";
import { checkAccessAndRedirect } from "@/app/components/Controllers/accessControl";
import GetJwtToken from "@/app/components/Controllers/fetchJWT";

const Page = () => {
  const [isPageLoading, setisPageLoading] = useState(true); // Add a loading state
  useEffect(() => {
    const checkAccess = async () => {
      await checkAccessAndRedirect();
      setisPageLoading(false); // Set loading to false after check
    };
    checkAccess();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const [userData, setUserData] = useState([
    {
      id: "asda",
      email: "christina@site.com",
      first_name: "Christina",
      last_name: "Bersh",
    },
    // Add more user data objects as needed
  ]);

  const usersPerPage = 10;

  const fetchData = async () => {
    try {
      const jwtToken = GetJwtToken();
      // Make a GET request to fetch all users
      const response = await fetch("http://127.0.0.1:5000/get_all_users", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      // Parse the response data as JSON
      const userData = await response.json();
      console.log(userData);
      // Update the user data state with the fetched data
      setUserData(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("Failed to fetch user data");
    }
  };

  useEffect(() => {
    if (!isPageLoading) {
      fetchData();
      setisPageLoading(true);
    }
  }, []);


  if (isPageLoading) {
    return <div></div>; // Show loading state
  }

  // }, []);

  // Calculate index of the first and last user of the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);

  const deleteUser = async (email) => {
    try {
      // Make a POST request to the API endpoint
      const jwtToken = GetJwtToken();
      const response = await fetch("http://127.0.0.1:5000/delete_user", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }), // Send user's email in the request body
      });

      if (response.ok) {
        // Show success message if request is successful
        alert("User deleted successfully");
        fetchData(); // Assuming you have a function fetchData() to fetch updated user data
      } else {
        // Show error message if request fails
        throw new Error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user");
    }
  };

  const editUser = (email) => {
    // Function to edit user by email
    console.log(`Editing user with email: ${email}`);
  };

  const openEditModal = (user) => {
    setSelectedUser(user);
    setEditModalOpen(true);
  };
  const openAddModal = () => {
    setAddModalOpen(true);
  };

  // Function to close the add modal
  const closeAddModal = () => {
    setAddModalOpen(false);
  };

  const renderUserRow = (user) => {
    return (
      <tr key={user.email}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900 dark:text-neutral-200">
            {user.email}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900 dark:text-neutral-200">
            {user.first_name}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900 dark:text-neutral-200">
            {user.last_name}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-end">
          <button
            className="text-sm text-white bg-purple-500 p-2 px-6 rounded-lg  dark:text-red-500 ml-2 hover:bg-purple-700"
            onClick={() => openEditModal(user)}
          >
            Edit
          </button>
          <button
            className="text-sm text-white bg-purple-500 p-2 px-6 rounded-lg  dark:text-red-500 ml-2 hover:bg-purple-700"
            onClick={() => deleteUser(user.email)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  const closeEditModal = () => {
    setSelectedUser(null);
    setEditModalOpen(false);
  };
  const isValidEmail = (email) => {
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const saveUserChanges = async ({ user }) => {
    try {
      console.log(user);
      // Make a POST request to the API endpoint to save user changes
      const jwtToken = GetJwtToken();
      const response = await fetch("http://127.0.0.1:5000/edit-profile", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
        }),
      });

      if (response.ok) {
        // Show success message if request is successful
        alert("User changes saved successfully");
        // Fetch updated user data
        fetchData(); // Assuming you have a function fetchData() to fetch updated user data
      } else {
        // Show error message if request fails
        throw new Error("Failed to save user changes");
      }
    } catch (error) {
      console.error("Error saving user changes:", error);
      alert("Failed to save user changes");
    } finally {
      // Close the modal after saving changes or encountering an error
      closeEditModal();
    }
  };

  const EditModal = ({ user }) => {
    const [editedUser, setEditedUser] = useState(null);

    useEffect(() => {
      setEditedUser(user);
    }, [user]);

    const handleEmailChange = (e) => {
      setEditedUser({ ...editedUser, email: e.target.value });
    };

    const handleFirstNameChange = (e) => {
      setEditedUser({ ...editedUser, first_name: e.target.value });
    };

    const handleLastNameChange = (e) => {
      setEditedUser({ ...editedUser, last_name: e.target.value });
    };

    return (
      <div
        className={`fixed inset-0 overflow-y-auto ${
          editModalOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-center min-h-screen ">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeEditModal}
            aria-hidden="true"
          ></div>
          <div className="relative z-10 bg-white p-8 rounded-md w-6/12 border border-purple-600 border-4">
            <h2 className="text-lg font-semibold mb-4 text-center text-purple-600">
              Edit User
            </h2>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2 p-2"
                value={editedUser?.email || ""}
                // onChange={handleEmailChange}
                disabled={true}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-md font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2 p-2"
                value={editedUser?.first_name || ""}
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-md font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2 p-2"
                value={editedUser?.last_name || ""}
                onChange={handleLastNameChange}
              />
            </div>
            <div className="flex justify-end mt-4 space-x-4">
              <button
                onClick={() => saveUserChanges({ user: editedUser })}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Save
              </button>
              <button
                onClick={closeEditModal}
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
  const AddModal = () => {
    const [formData, setFormData] = useState({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
    const handleSubmit = async (e) => {
      e.preventDefault();

      // Reset errors
      setErrors({});

      // Perform validation
      const newErrors = {};
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!isValidEmail(formData.email.trim())) {
        newErrors.email = "Invalid email format";
      }
      if (!formData.firstName.trim()) {
        newErrors.firstName = "First name is required";
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = "Last name is required";
      }
      if (!formData.password.trim()) {
        newErrors.password = "Password is required";
      }

      setErrors(newErrors);

      // If there are no errors, proceed with submission
      if (Object.keys(newErrors).length === 0) {
        try {
          // Call the API to add the user with formData
          console.log("Form data:", formData);
          const jwtToken = GetJwtToken();
          const response = await fetch("http://127.0.0.1:5000/register", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${jwtToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: formData.email,
              password: formData.password,
              firstName: formData.firstName,
              lastName: formData.lastName,
            }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            setErrors({
              form:
                errorData.message ||
                "Email already exists. Perhaps login to your account?",
            });
            return;
          }

          // Reset form data
          setFormData({
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: "",
          });

          // Code for closing the modal goes here
          // Assuming you have a function to close the modal, e.g., closeModal()
          fetchData(); // Assuming you have a function fetchData() to fetch updated user data

          closeAddModal();
        } catch (error) {
          setErrors({
            form: "An error occurred during registration. Please try again later.",
          });
          console.error("Error during registration:", error);
        }
      }
    };

    return (
      <div
        className={`fixed inset-0 overflow-y-auto ${
          addModalOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
          <div className="relative z-10 bg-white p-8 rounded-md w-6/12 border border-purple-600 border-4">
            <h2 className="text-xl font-semibold mb-4 text-center text-purple-600">
              Add User
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-md font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 border-2 p-2 rounded-md"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-md font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2 p-2"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-md font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2 p-2"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <p className="text-red-500 mt-1 text-sm">{errors.lastName}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-md font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2 p-2"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="text-red-500 mt-1 text-sm">{errors.password}</p>
                )}
              </div>

              <div className="flex justify-end mt-4 space-x-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-500 text-white rounded-md"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                  onClick={() => closeAddModal()}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <MainLayout>
      <div className="mt-24 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700 bg-gray-400/40">
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700 bg-gray-500/10">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                      Users
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      Add users, edit and more.
                    </p>
                  </div>
                  <div>
                    <div className="inline-flex gap-x-2">
                      <button
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-purple-500 text-white hover:bg-purple-700 disabled:opacity-50 disabled:pointer-events-none"
                        onClick={() => openAddModal()}
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
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                        Add user
                      </button>
                    </div>
                  </div>
                </div>
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 ">
                  <thead className=" dark:bg-neutral-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-start">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        First Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        Last Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-end">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {currentUsers.map(renderUserRow)}
                  </tbody>
                </table>
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      <span className="font-semibold text-gray-800 dark:text-neutral-200">
                        {userData.length}
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
                        disabled={indexOfLastUser >= userData.length}
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
      {editModalOpen && <EditModal user={selectedUser} />}
      {addModalOpen && <AddModal />}
    </MainLayout>
  );
};

export default Page;
