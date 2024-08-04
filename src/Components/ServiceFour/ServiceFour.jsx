import React, { useEffect, useState } from "react";
import { t } from "i18next";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

import serviceFourPic from "./../../assets/imgs/services/solid waste.webp";
import soldWasteMbt from "./../../assets/imgs/services/mbtsecond.jpg";
import chart from "./../../assets/imgs/services/chart.jpeg";
import waterWaste from "./../../assets/imgs/services/water waste.png";
import station from "./../../assets/imgs/services/soildWasteStation.jpg";
import solidWasteDrop from "./../../assets/imgs/services/solidwastedrop.png";

export default function ServiceFour() {
  const [language, setLanguage] = useState("");
  const lng = Cookies.get("i18next") || "en";
  useEffect(() => {
    setLanguage(lng);
  }, [lng]);
  return (
    <>
      <div className="servicePage">
        <div className="service-landing position-relative overflow-hidden">
          <img
            className="object-fit-cover"
            src={serviceFourPic}
            alt="solid waste service"
          />
          <div
            className={
              language === "en"
                ? "pageLocation position-absolute  bottom-0 start-0 p-3 text-white border-0 border-end border-4 mainBorderColor"
                : "pageLocation position-absolute  bottom-0 end-0 p-3 text-white border-0 border-start border-4 mainBorderColor"
            }>
            <Link className="text-white" to="/">
              {t("home")}{" "}
            </Link>
            {language === "en" ? (
              <i id="angleIcon" className="fa-solid fa-angle-right"></i>
            ) : (
              <i id="angleIcon" className="fa-solid fa-angle-left"></i>
            )}

            <span className="mainColor"> {t("service4")}</span>
          </div>
        </div>
        <div className="service-content py-5">
          <div className="container">
            <h3 className="text-uppercase fw-bold text-center mb-5">
              {t("service4")}
            </h3>
            <p className="fw-medium lh-lg mb-4">{t("service4_Desc")}</p>
            <p className="fw-medium lh-lg mb-4">{t("service4_Desc2")}</p>
            <p className="mb-5 pb-5 fw-medium">{t("konwAboutService")}</p>
            <div className="row g-5">
              <div className="col-lg-6 wow animate__animated animate__fadeInLeft">
                <div className="layerBehind position-relative">
                  <img
                    className="w-100 object-fit-cover h-300px"
                    src={soldWasteMbt}
                    alt="service details"
                  />
                </div>
              </div>
              <div className="col-lg-6 wow animate__animated animate__fadeInRight">
                <div className="fw-medium lh-lg">
                  <h4 className="fw-bold mb-3">{t("service4_head1")}</h4>
                  <p>{t("service4_head1_desc")}</p>
                </div>
              </div>

              <div className="col-lg-6 wow animate__animated animate__fadeInRight">
                <div className="fw-medium lh-lg">
                  <h4 className="fw-bold mb-3">{t("service4_head2")}</h4>
                  <p>{t("service4_head2_desc")}</p>
                </div>
              </div>
              <div className="col-lg-6 wow animate__animated animate__fadeInLeft">
                <div className="position-relative">
                  <img
                    className="w-100 object-fit-contain h-300px sc-12"
                    src={chart}
                    alt="service details"
                  />
                </div>
              </div>

              <div className="col-lg-6 wow animate__animated animate__fadeInLeft">
                <div className="layerBehind position-relative">
                  <img
                    className="w-100 object-fit-cover h-300px"
                    src={waterWaste}
                    alt="service details"
                  />
                </div>
              </div>
              <div className="col-lg-6 wow animate__animated animate__fadeInRight">
                <div className="fw-medium lh-lg">
                  <h4 className="fw-bold mb-3">{t("service4_head3")}</h4>
                  <p>{t("service4_head3_desc")}</p>
                </div>
              </div>

              <div className="col-lg-6 wow animate__animated animate__fadeInRight">
                <div className="fw-medium lh-lg">
                  <h4 className="fw-bold mb-3">{t("service4_head4")}</h4>
                  <p>{t("service4_head4_desc")}</p>
                </div>
              </div>
              <div className="col-lg-6 wow animate__animated animate__fadeInLeft">
                <div className="position-relative layerBehind">
                  <img
                    className="w-100 object-fit-cover h-300px"
                    src={station}
                    alt="service details"
                  />
                </div>
              </div>

              <div className="col-lg-6 wow animate__animated animate__fadeInLeft">
                <div className="layerBehind position-relative">
                  <img
                    className="w-100 object-fit-cover h-300px"
                    src={solidWasteDrop}
                    alt="service details"
                  />
                </div>
              </div>
              <div className="col-lg-6 wow animate__animated animate__fadeInRight">
                <div className="fw-medium lh-lg">
                  <h4 className="fw-bold mb-3">{t("service4_head5")}</h4>
                  <p>{t("service4_head5_desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
