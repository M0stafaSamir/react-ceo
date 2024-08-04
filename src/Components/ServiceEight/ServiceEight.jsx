import React, { useEffect, useState } from "react";
import { t } from "i18next";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

import serviceEightPic from "./../../assets/imgs/services/city1.webp";
import city from "./../../assets/imgs/services/city2.png";

export default function ServiceEight() {
  const [language, setLanguage] = useState("");
  const lng = Cookies.get("i18next") || "en";
  useEffect(() => {
    setLanguage(lng);
  }, [lng]);
  return (
    <>
      <div className="servicePage">
        <div className="service-landing position-relative overflow-hidden w-100">
          <img
            className="object-fit-cover"
            src={serviceEightPic}
            alt="The Urban and Master Planning"
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

            <span className="mainColor"> {t("service8")}</span>
          </div>
        </div>
        <div className="service-content py-5">
          <div className="container">
            <h3 className="text-uppercase fw-bold text-center mb-5">
              {" "}
              {t("service8")}
            </h3>
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <img className="w-100 dropShadow" src={city} alt="city" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="fw-medium lh-lg">
                  <p> {t("service8_Desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
