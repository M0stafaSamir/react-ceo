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

import projectTwopic2 from "./../../../../assets/imgs/projects/MBT in Manzalla/Picture1.png";
import projectTwopic1 from "./../../../../assets/imgs/projects/MBT in Manzalla/Picture2.jpg";
import projectTwoBg from "./../../../../assets/imgs/projects/MBT in Manzalla/Picture3.jpg";
import projectTwopic4 from "./../../../../assets/imgs/projects/MBT in Manzalla/Picture6.jpg";

export default function Project2() {
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
            src={projectTwoBg}
            alt="Design of Mechanical Biological Treatment Plant (MBT) in in Manzalla, Dakahlya, Egypt  for Solid Waste Recycling"
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
                <Link className="text-white" to="/SolidWaste Projects">
                  {" "}
                  {t("service4")} {t("projectswithAl")}{" "}
                </Link>
              ) : (
                <Link className="text-white" to="/SolidWaste Projects">
                  {" "}
                  {t("projectswithAl")} {t("service4")}{" "}
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
              <h4 className="fw-bold">{t("mbtProject")}</h4>
              <p className="fw-medium">{t("manzalla")}</p>
            </div>
            <div className="row mb-5">
              <div className="col-lg-5">
                <div className="h-100">
                  <img
                    className="w-100 h-100"
                    src={projectTwoBg}
                    alt="project photo"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div>
                  <h4 className="fw-bold text-capitalize">
                    {t("keyProjectDetails")}:
                  </h4>
                  <p>{t("project2Des")}</p>
                  <p>{t("project2Des2")}</p>
                  <table className="w-100 fs-15px">
                    <tbody>
                      <tr>
                        <td className="text-capitalize fw-bold px-2 text-balance py-2">
                          {t("factoryCapacity")}
                        </td>
                        <td>{t("project2Capacity")}</td>
                      </tr>
                      <tr>
                        <td className="text-capitalize fw-bold px-2 text-balance py-2">
                          {t("areaCoverd")}
                        </td>
                        <td>{t("project2area")}</td>
                      </tr>
                      <tr>
                        <td className="text-capitalize fw-bold px-2 text-balance py-2">
                          {t("year")}
                        </td>
                        <td>{t("project1year")}</td>
                      </tr>
                      <tr>
                        <td className="text-capitalize fw-bold px-2 text-balance py-2">
                          {t("totalCost")}
                        </td>
                        <td>{t("project2cost")}</td>
                      </tr>
                      <tr>
                        <td className="text-capitalize fw-bold px-2 text-balance py-2">
                          {t("projectLocation")}
                        </td>
                        <td>{t("manzalla")}</td>
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
                    href={projectTwoBg}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={projectTwoBg}
                      alt="Gallery Image"
                    />
                  </a>
                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={projectTwopic1}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={projectTwopic1}
                      alt="Gallery Image"
                    />
                  </a>
                  <a
                    className=" col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={projectTwopic2}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={projectTwopic2}
                      alt="Gallery Image"
                    />
                  </a>

                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={projectTwopic4}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={projectTwopic4}
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
