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
import Project1 from "./Components/Projects/FieldOfSolidWaste/Project1/Project1";
import Project2 from "./Components/Projects/FieldOfSolidWaste/Project2/Project2";
import Project3 from "./Components/Projects/FieldOfSolidWaste/Projcet3/Projcet3";
import Project4 from "./Components/Projects/FieldOfSolidWaste/Project4/Project4";
import Project5 from "./Components/Projects/FieldOfSolidWaste/Project5/Project5";
import SolidWasteMbtProjects from "./Components/SolidWasteMbtProjects/SolidWasteMbtProjects";
import SanitaryLandfillsProjects from "./Components/SanitaryLandfillsProjcets/SanitaryLandfillsProjcets";
import Project6 from "./Components/Projects/FieldOfSanitaryLandfills/Project6/Project6";
import TransferStationProjects from "./Components/TransferStationProjects/TransferStationProjects";
import Project7 from "./Components/Projects/FieldOfTransferStation/Project7/Project7";
import Project8 from "./Components/Projects/FieldOfTransferStation/Project8/Project8";
import Project9 from "./Components/Projects/FieldOfTransferStation/Project9/Project9";
import Project10 from "./Components/Projects/FieldOfTransferStation/Project10/Project10";
import Project11 from "./Components/Projects/FieldOfTransferStation/Project11/Project11";
import Project12 from "./Components/Projects/FieldOfTransferStation/Project12/Project12";
import Project13 from "./Components/Projects/FieldOfTransferStation/Project13/Project13";
import Project14 from "./Components/Projects/FieldOfTransferStation/Project14/Project14";

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
        { path: "SolidWaste Projects", element: <SolidWasteMbtProjects /> },
        { path: "mahallaProjectMbt", element: <Project1 /> },
        { path: "manzallaProjectMbt", element: <Project2 /> },
        { path: "sandoubProjectMbt", element: <Project3 /> },
        { path: "salamProjectMbt", element: <Project4 /> },
        { path: "minyaProjectMbt", element: <Project5 /> },
        {
          path: "sanitarylandfillsprojects",
          element: <SanitaryLandfillsProjects />,
        },
        { path: "Baltimlandfill", element: <Project6 /> },
        { path: "transferStation", element: <TransferStationProjects /> },
        { path: "manshiyetNasserTs", element: <Project7 /> },
        { path: "damanhourTs", element: <Project8 /> },
        { path: "YoussefAl_SiddiqTs", element: <Project9 /> },
        { path: "Al_QanaterTs", element: <Project10 /> },
        { path: "KafrEl-DawwarTs", element: <Project11 /> },
        { path: "portsaidStTs", element: <Project12 /> },
        { path: "Al_QurainTs", element: <Project13 /> },
        { path: "TallaTs", element: <Project14 /> },
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
