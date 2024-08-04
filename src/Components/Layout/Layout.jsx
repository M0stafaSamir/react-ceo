import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Head from "../Head/Head";
export default function Layout() {
  return (
    <>
      <Head />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
