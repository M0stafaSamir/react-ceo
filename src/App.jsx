import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next, Translation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Cookies from "js-cookie";
import { t } from "i18next";

import translationEn from "/public/locale/en/translation.json";
import translationAr from "/public/locale/ar/translation.json";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import ServiceOne from "./Components/ServiceOne/ServiceOne";
import ServiceTwo from "./Components/ServiceTwo/ServiceTwo";
import ServiceThree from "./Components/ServiceThree/ServiceThree";
import ServiceFive from "./Components/ServiceFive/ServiceFive";
import ServiceSix from "./Components/ServiceSix/ServiceSix";
import ServiceSeven from "./Components/ServiceSeven/ServiceSeven";
import ServiceEight from "./Components/ServiceEight/ServiceEight";
import ServiceFour from "./Components/ServiceFour/ServiceFour";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import SolidWasteProjects from "./Components/SolidWasteProjects/SolidWasteProjects";
import Project1 from "./Components/Projects/FieldOfSolidWaste/Project1/Project1";

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
        { path: "serviceOne", element: <ServiceOne /> },
        { path: "serviceTwo", element: <ServiceTwo /> },
        { path: "serviceThree", element: <ServiceThree /> },
        { path: "serviceFour", element: <ServiceFour /> },
        { path: "HighwaysAndBridges", element: <ServiceFive /> },
        { path: "LandscapingAndPublicRealm", element: <ServiceSix /> },
        { path: "UtilitiesAndInfrastructures", element: <ServiceSeven /> },
        { path: "TheUrbanAndMasterPlanning", element: <ServiceEight /> },
        { path: "aboutUs", element: <AboutUs /> },
        { path: "contactUs", element: <ContactUs /> },
        { path: "SolidWaste Projects", element: <SolidWasteProjects /> },
        { path: "mahallaProjectMbt", element: <Project1 /> },
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
