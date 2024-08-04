import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import HeadInfo from "../HeadInfo/HeadInfo";

export default function Layout() {
  return (
    <>
      <HeadInfo />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
