import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer1 from "./Footers/Footer1";

interface LayoutProps {
  children: ReactNode;
}
const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <div>
          <Navbar></Navbar>
          <div className="">{children}</div>
        </div>

        <Footer1></Footer1>
      </div>
    </>
  );
};

export default MainLayout;
