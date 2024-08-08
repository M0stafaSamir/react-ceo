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

import project23Bg from "./../../../../assets/imgs/projects/Design and manufacture of a sorting line in Qena/Picture9.jpg";
import project23pic1 from "./../../../../assets/imgs/projects/Design and manufacture of a sorting line in Qena/Picture10.jpg";
import project23pic2 from "./../../../../assets/imgs/projects/Design and manufacture of a sorting line in Qena/Picture11.png";
import project23pic3 from "./../../../../assets/imgs/projects/Design and manufacture of a sorting line in Qena/Picture12.png";
import project23pic4 from "./../../../../assets/imgs/projects/Design and manufacture of a sorting line in Qena/Picture13.png";
import project23pic5 from "./../../../../assets/imgs/projects/Design and manufacture of a sorting line in Qena/Picture14.jpg";
import project23pic6 from "./../../../../assets/imgs/projects/Design and manufacture of a sorting line in Qena/Picture15.png";

export default function Project23() {
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
            src={project23Bg}
            alt="Design and manufacture of a sorting line in Qena"
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
                <Link className="text-white" to="/EnvServicesAlternativeEnergy">
                  {" "}
                  {t("altEnergy")} {t("projectswithAl")}{" "}
                </Link>
              ) : (
                <Link className="text-white" to="/EnvServicesAlternativeEnergy">
                  {" "}
                  {t("projectswithAl")} {t("altEnergy")}{" "}
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
              <h4 className="fw-bold">{t("qenaSortingFactory")}</h4>
              <p className="fw-medium">{t("qena")}</p>
            </div>
            <div className="row mb-5">
              <div className="col-lg-5">
                <div className="h-100">
                  <img
                    className="w-100 h-100"
                    src={project23Bg}
                    alt="project photo"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div>
                  <p>{t("qenaSortingFactoryDesc")}</p>
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
                    href={project23Bg}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={project23Bg}
                      alt="Gallery Image"
                    />
                  </a>
                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={project23pic1}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={project23pic1}
                      alt="Gallery Image"
                    />
                  </a>
                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={project23pic2}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={project23pic2}
                      alt="Gallery Image"
                    />
                  </a>

                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={project23pic3}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={project23pic3}
                      alt="Gallery Image"
                    />
                  </a>
                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={project23pic4}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={project23pic4}
                      alt="Gallery Image"
                    />
                  </a>
                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={project23pic5}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={project23pic5}
                      alt="Gallery Image"
                    />
                  </a>
                  <a
                    className="col-6 col-sm-6 col-md-4 col-lg-3 galleryAtag p-2"
                    href={project23pic6}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={project23pic6}
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
