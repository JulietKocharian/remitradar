import React from "react";
//= Components
import Loader from "@/components/Common/Loader";
import Cursor from "@/components/Common/Cursor";
import ProgressScroll from "@/components/Common/ProgressScroll";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Cursor />
      {/* <ProgressScroll /> */}
      {children}
    </>
  );
};

export default DefaultLayout;
