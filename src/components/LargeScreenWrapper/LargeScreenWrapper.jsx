import React from "react";
import { Footer } from "../common";

const LargeScreenWrapper = ({ children }) => {
  return (
    <div className="mt-20">
      <div className="  w-screen flex justify-center ">
        <div className="max-w-screen-2xl relative w-full flex justify-center ">
          {children}
        </div>
      </div>
      {/* <div className="px-[2%] md:px-[6%] bg-footer border border-footer">
        <div className="mt-20">
          <Footer />
        </div>
      </div> */}
    </div>
  );
};

export default LargeScreenWrapper;
