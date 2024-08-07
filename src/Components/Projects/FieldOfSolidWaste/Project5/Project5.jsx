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

import projectFiveBg from "./../../../../assets/imgs/projects/MBT in EL-Menya/Picture8.jpg";
import projectFivepic1 from "./../../../../assets/imgs/projects/MBT in EL-Menya/Picture9.jpg";
import projectFivepic2 from "./../../../../assets/imgs/projects/MBT in EL-Menya/Picture10.jpg";
import projectFivepic3 from "./../../../../assets/imgs/projects/MBT in EL-Menya/Picture11.jpg";
import projectFivepic4 from "./../../../../assets/imgs/projects/MBT in EL-Menya/Picture12.jpg";
import projectFivepic5 from "./../../../../assets/imgs/projects/MBT in EL-Menya/Picture13.jpg";
import projectFivepic6 from "./../../../../assets/imgs/projects/MBT in EL-Menya/Picture14.jpg";
import projectFivepic7 from "./../../../../assets/imgs/projects/MBT in EL-Menya/Picture15.png";

export default function Project5() {
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
            src={projectFiveBg}
            alt="Design of Mechanical Biological Treatment Plant (MBT) in Dar ElSalam, Sohag Gov., Egypt for Solid Waste Recycling"
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
                  {t("designMbt")} {t("projectswithAl")}{" "}
                </Link>
              ) : (
                <Link className="text-white" to="/SolidWaste Projects">
                  {" "}
                  {t("projectswithAl")} {t("designMbt")}{" "}
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
              <p className="fw-medium">{t("minya")}</p>
            </div>
            <div className="row mb-5">
              <div className="col-lg-5">
                <div className="h-100">
                  <img
                    className="w-100 h-100"
                    src={projectFiveBg}
                    alt="project photo"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div>
                  <h4 className="fw-bold text-capitalize">
                    {t("keyProjectDetails")}:
                  </h4>
                  <p>{t("project4Des")}</p>
                  <p>{t("project4Des2")}</p>
                  <table className="w-100 fs-15px">
                    <tbody>
                      <tr>
                        <td className="text-capitalize fw-bold px-2 text-balance py-2">
                          {t("factoryCapacity")}
                        </td>
                        <td>{t("project1Capacity")}</td>
                      </tr>
                      <tr>
                        <td className="text-capitalize fw-bold px-2 text-balance py-2">
                          {t("areaCoverd")}
                        </td>
                        <td>{t("project5area")}</td>
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
                        <td>{t("project5cost")}</td>
                      </tr>
                      <tr>
                        <td className="text-capitalize fw-bold px-2 text-balance py-2">
                          {t("projectLocation")}
                        </td>
                        <td>{t("minya")}</td>
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
                    href={projectFiveBg}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={projectFiveBg}
                      alt="Gallery Image"
                    />
                  </a>
                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={projectFivepic1}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={projectFivepic1}
                      alt="Gallery Image"
                    />
                  </a>
                  <a
                    className=" col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={projectFivepic2}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={projectFivepic2}
                      alt="Gallery Image"
                    />
                  </a>

                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={projectFivepic3}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={projectFivepic3}
                      alt="Gallery Image"
                    />
                  </a>
                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={projectFivepic4}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={projectFivepic4}
                      alt="Gallery Image"
                    />
                  </a>
                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={projectFivepic5}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={projectFivepic5}
                      alt="Gallery Image"
                    />
                  </a>
                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={projectFivepic6}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={projectFivepic6}
                      alt="Gallery Image"
                    />
                  </a>
                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={projectFivepic7}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={projectFivepic7}
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
