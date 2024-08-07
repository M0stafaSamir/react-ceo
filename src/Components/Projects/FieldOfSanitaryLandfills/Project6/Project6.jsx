import React, { useEffect, useState } from "react";
import { t } from "i18next";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";

import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lg-zoom.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lg-thumbnail.css";

import lgFullScreen from "lightgallery/plugins/fullscreen";
import "lightgallery/css/lg-fullscreen.css";

import lgAutoplay from "lightgallery/plugins/autoplay";
import "lightgallery/css/lg-autoplay.css";

import lgShare from "lightgallery/plugins/share";
import "lightgallery/css/lg-share.css";

import projectSixBg from "./../../../../assets/imgs/projects/Baltim landfill/Picture7.jpg";
import projectSixpic1 from "./../../../../assets/imgs/projects/Baltim landfill/Picture1.jpg";
import projectSixpic2 from "./../../../../assets/imgs/projects/Baltim landfill/Picture2.png";
import projectSixpic3 from "./../../../../assets/imgs/projects/Baltim landfill/Picture3.jpg";
import projectSixpic4 from "./../../../../assets/imgs/projects/Baltim landfill/Picture4.jpg";
import projectSixpic5 from "./../../../../assets/imgs/projects/Baltim landfill/Picture5.jpg";
import projectSixpic6 from "./../../../../assets/imgs/projects/Baltim landfill/Picture6.jpg";

export default function Project6() {
  const onInit = () => {
    console.log("LightGallery has been initialized");
  };

  const [language, setLanguage] = useState("");
  const lng = Cookies.get("i18next") || "en";

  useEffect(() => {
    setLanguage(lng);
  }, [lng]);

  return (
    <>
      <div className="projectDetailsPage">
        <div className="service-landing position-relative overflow-hidden">
          <img
            className="object-fit-cover"
            src={projectSixBg}
            alt="Design of Mechanical Biological Treatment Plant (MBT) in  Sandoub, Daqahlia, Egypt  for Solid Waste Recycling"
          />
          <div
            className={
              language === "en"
                ? "pageLocation position-absolute bottom-0 start-0 p-3 text-white border-0 border-end border-4 mainBorderColor"
                : "pageLocation position-absolute bottom-0 end-0 p-3 text-white border-0 border-start border-4 mainBorderColor"
            }>
            <Link className="text-white" to="/">
              {t("home")}{" "}
            </Link>
            {language === "en" ? (
              <i className="fa-solid fa-angle-right"></i>
            ) : (
              <i className="fa-solid fa-angle-left"></i>
            )}
            <span>
              {" "}
              {language === "en" ? (
                <Link className="text-white" to="/sanitarylandfillsprojects">
                  {" "}
                  {t("sanitaryLandfills")} {t("projectswithAl")}{" "}
                </Link>
              ) : (
                <Link className="text-white" to="/sanitarylandfillsprojects">
                  {" "}
                  {t("projectswithAl")} {t("sanitaryLandfills")}{" "}
                </Link>
              )}
            </span>{" "}
            {language === "en" ? (
              <i className="fa-solid fa-angle-right"></i>
            ) : (
              <i className="fa-solid fa-angle-left"></i>
            )}
            <span className="mainColor"> {t("projectDetails")}</span>
          </div>
        </div>
        <div className="service-content py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h4 className="fw-bold">{t("sanitaryLandfills")}</h4>
              <p className="fw-medium">{t("baltim")}</p>
            </div>
            <div className="row mb-5">
              <div className="col-lg-5">
                <div className="h-100">
                  <img
                    className="w-100 h-100"
                    src={projectSixBg}
                    alt="project photo"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div>
                  <h4 className="fw-bold text-capitalize">
                    {t("keyProjectDetails")}:
                  </h4>
                  <p>{t("project6Des")}</p>
                  <p>{t("project6Des2")}</p>
                  <table className="w-100 fs-15px">
                    <tbody>
                      <tr>
                        <td className="text-capitalize fw-bold px-2 text-balance py-2">
                          {t("areaCoverd")}
                        </td>
                        <td>{t("project6area")}</td>
                      </tr>
                      <tr>
                        <td className="text-capitalize fw-bold px-2 text-balance py-2">
                          {t("year")}
                        </td>
                        <td>{t("project6year")}</td>
                      </tr>
                      <tr>
                        <td className="text-capitalize fw-bold px-2 text-balance py-2">
                          {t("totalCost")}
                        </td>
                        <td>{t("project6cost")}</td>
                      </tr>
                      <tr>
                        <td className="text-capitalize fw-bold px-2 text-balance py-2">
                          {t("projectLocation")}
                        </td>
                        <td>{t("baltim")}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="project-gallery">
              <div className="row g-4">
                <LightGallery
                  className="row d-flex"
                  onInit={onInit}
                  speed={500}
                  plugins={[
                    lgThumbnail,
                    lgZoom,
                    lgFullScreen,
                    lgAutoplay,
                    lgShare,
                  ]}>
                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={projectSixBg}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={projectSixBg}
                      alt="Gallery Image"
                    />
                  </a>
                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={projectSixpic1}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={projectSixpic1}
                      alt="Gallery Image"
                    />
                  </a>

                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={projectSixpic3}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={projectSixpic3}
                      alt="Gallery Image"
                    />
                  </a>
                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={projectSixpic4}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={projectSixpic4}
                      alt="Gallery Image"
                    />
                  </a>
                  <a
                    className=" col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={projectSixpic2}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={projectSixpic2}
                      alt="Gallery Image"
                    />
                  </a>
                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={projectSixpic5}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={projectSixpic5}
                      alt="Gallery Image"
                    />
                  </a>
                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={projectSixpic6}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={projectSixpic6}
                      alt="Gallery Image"
                    />
                  </a>
                </LightGallery>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
