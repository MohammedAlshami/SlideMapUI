"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import MainLayout from "@/app/components/MainLayout";
// import { useRouter } from "next/navigation";
import { redirect, useRouter } from "next/navigation";
import { checkSessionAuthCookie } from "../components/Controllers/Cookies";

// import signInWithGoogle from "../components/Controllers/Firebase"
import signInWithGoogle from "../components/Controllers/Firebase/GmailLogin";
import {checkAccessAndRedirect} from "../components/Controllers/accessControl";

const page = () => {
  interface CreateAccountProps {
    email: string;
    password: string;
  }
  

  const [isPageLoading, setisPageLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const checkAccess = async () => {
      await checkAccessAndRedirect();
      setisPageLoading(false); // Set loading to false after check
    };

    checkAccess();
  }, []);
  
 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setAuthentication] = useState(false);

  const router = useRouter();
  // const router = useRouter();


  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, []);
 
  if (isPageLoading) {
    return <div></div>; // Show loading state
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    try {
      const response = await fetch(
        " http://127.0.0.1:5000/login",
        requestOptions
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      // Handle the response data
      document.cookie = `session_auth=${email}`;
      document.cookie = `session_jwt=${data.access_token}`;
      document.cookie = `isAdmin=${data.isAdmin}`;
      router.push("/");
      console.log(data);
    } catch (error) {
      console.error("Error creating account:", error);
      setError("Either your email or password is wrong. try again");
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const user = await signInWithGoogle();
    document.cookie = `session_auth=${user["email"]}`;
    setAuthentication(true);
    router.push("/");
    // if (user) {

    // }
  };
  return (
    <>
      <MainLayout>
        <section className="px-4 py-24 mx-auto  mt-12">
          <div className="w-full mx-auto space-y-5 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
            <h1 className="text-4xl font-semibold text-center text-gray-900">
              Log In
            </h1>

            <div className="pb-6 space-y-2 border-b border-gray-200">
              <a
                href="#"
                className="w-full py-3 btn btn-icon btn-google"
                onClick={handleClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-1"
                >
                  <path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
                </svg>
                Continue with Google
              </a>
         
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="block w-full">
                <span className="block mb-1 text-md font-medium text-gray-700">
                  Email
                </span>
                <input
                  className="form-input w-full px-2 py-4 rounded-lg border-gray-200 border-2"
                  type="email"
                  placeholder="Ex. james@bond.com"
                  inputMode="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="block">
                <span className="block mb-1 text-md font-medium text-gray-700">
                  Password
                </span>
                <input
                  className="form-input w-full px-2 py-4 rounded-lg border-gray-200 border-2"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <input
                type="submit"
                className="w-full btn btn-primary btn-lg"
                value="Sign In"
              />
              {error && <p className="text-red-500">{error}</p>}
            </form>

            {/* Put this part before </body> tag */}
     
            {/* <p className="my-8 text-xs font-medium text-center text-gray-700">
              By clicking "Sign Up" you agree to our
              <a
                className="text-purple-700 hover:text-purple-900"
                href="#my_modal_8"
              >
                Terms of Service and Privacy Policy
              </a>
            </p> */}
            <p className="my-8 text-xs font-medium text-right text-gray-700">
              Already Have an account?  
              <a
                className="pl-2 text-purple-700 hover:text-purple-900"
                href="/register"
              >
                 Sign up
              </a>
            </p>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default page;
