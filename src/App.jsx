import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next, Translation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Cookies from "js-cookie";
import { t } from "i18next";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Head from "./Components/Head/Head";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import Services from "./Components/Services/Services";
import OurClients from "./Components/OurClients/OurClients";
import ProjectFields from "./Components/ProjectFields/ProjectFields";
import VisionMission from "./Components/VisionMission/VisionMission";
import Footer from "./Components/Footer/Footer";
import States from "./Components/States/States";

import translationEn from "/public/locale/en/translation.json";
import translationAr from "/public/locale/ar/translation.json";
import Layout from "./Components/Layout/Layout";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    resources: {
      en: {
        translation: translationEn,
      },
      ar: {
        translation: translationAr,
      },
    },
    fallbackLng: "en",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    // backend: {
    //   loadPath: "/locale/{{lng}}/translation.json",
    // },
  });

function App() {
  const { t } = useTranslation();

  const lng = Cookies.get("i18next") || "en";

  useEffect(() => {
    window.document.dir = i18n.dir();
    if (window.document.dir === "rlt") {
      window.document.body.classList.add("ar-font");
    }
  }, [lng]);

  if (lng === "ar") {
    document.body.classList.add("ar-font");
    document.body.classList.remove("en-font");
  } else {
    document.body.classList.add("en-font");
    document.body.classList.remove("ar-font");
  }

  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "we", element: <WhoWeAre /> },
        { path: "services", element: <Services /> },
        { path: "vision", element: <VisionMission /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
