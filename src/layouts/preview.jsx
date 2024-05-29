import React, { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Components
import Loader from "@/components/Common/Loader";
import Cursor from "@/components/Common/Cursor";
import ProgressScroll from "@/components/Common/ProgressScroll";

const PreviewLayout = ({ children }) => {
  return (
    <>
      <Cursor />
      {/* <ProgressScroll /> */}
      {children}
    </>
  );
};

export default PreviewLayout;
