import React, { useEffect, useState } from "react";
import { t } from "i18next";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

import factorySmoke from "./../../assets/imgs/backgrounds/factorySmoke.jpg";

export default function EnvAndAltEnergyProjects() {
  const [language, setLanguage] = useState("");
  const lng = Cookies.get("i18next") || "en";
  useEffect(() => {
    setLanguage(lng);
  }, [lng]);

  return (
    <>
      <div className="solidWasteProjects">
        <div className="service-landing position-relative overflow-hidden">
          <img
            className="object-fit-cover"
            src={factorySmoke}
            alt="Environmental Services and Alternative Energy"
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
              <i className="fa-solid fa-angle-right"></i>
            ) : (
              <i className="fa-solid fa-angle-left"></i>
            )}

            <span className="mainColor">
              {" "}
              {language === "en"
                ? t("altEnergy") + " " + t("projectswithAl")
                : t("projectswithAl") + " " + t("altEnergy")}
            </span>
          </div>
        </div>
        <div className="service-content py-5">
          <div className="container">
            <h5 className="text-center fw-bold mb-3 mainColor">
              {t("pervWork")}
            </h5>
            <h3 className="text-uppercase fw-bold text-center mb-5">
              {t("altEnergy")}
            </h3>
            <div className="row gy-3 mb-5">
              <div className="col-lg-12">
                <div className="projectItem gap-4 gap-lg-3 d-flex justify-content-center justify-content-lg-between justify-content-sm-center shadow align-items-center flex-wrap p-4 gy-4">
                  <div>
                    <p className="fw-bold fs-5 m-0 w-100">
                      {t("luxorRecyclingWasteFactory")}
                    </p>
                    <p className="m-0">
                      <i className="fa-solid fa-location-dot"></i> {t("luxor")}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="/luxorRecyclingWasteFactory"
                      className="btn detailsBtn mainBg rounded-0 fw-bold">
                      {t("projectDetails")}
                      {"  "}
                      {language === "en" ? (
                        <i className="fa-solid fa-arrow-right"></i>
                      ) : (
                        <i className="fa-solid fa-arrow-left"></i>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="projectItem gap-4 gap-lg-3 d-flex justify-content-center justify-content-lg-between justify-content-sm-center shadow align-items-center flex-wrap p-4 gy-4">
                  <div>
                    <p className="fw-bold fs-5 m-0 w-100">
                      {t("qenaSortingFactory")}
                    </p>
                    <p className="m-0">
                      <i className="fa-solid fa-location-dot"></i> {t("qena")}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="/sortinglineinQena"
                      className="btn detailsBtn mainBg rounded-0 fw-bold">
                      {t("projectDetails")}
                      {"  "}
                      {language === "en" ? (
                        <i className="fa-solid fa-arrow-right"></i>
                      ) : (
                        <i className="fa-solid fa-arrow-left"></i>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="projectItem gap-4 gap-lg-3 d-flex justify-content-center justify-content-lg-between justify-content-sm-center shadow align-items-center flex-wrap p-4 gy-4">
                  <div>
                    <p className="fw-bold fs-5 m-0 w-100">
                      {t("solidWasteCharacterizationGiza")}
                    </p>
                    <p className="m-0">
                      <i className="fa-solid fa-location-dot"></i> {t("giza")}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="/SolidWasteCharacterizationStudyGiza"
                      className="btn detailsBtn mainBg rounded-0 fw-bold">
                      {t("projectDetails")}
                      {"  "}
                      {language === "en" ? (
                        <i className="fa-solid fa-arrow-right"></i>
                      ) : (
                        <i className="fa-solid fa-arrow-left"></i>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="projectItem gap-4 gap-lg-3 d-flex justify-content-center justify-content-lg-between justify-content-sm-center shadow align-items-center flex-wrap p-4 gy-4">
                  <div>
                    <p className="fw-bold fs-5 m-0 w-100">
                      {t("WasteToEnergyPlant")}
                    </p>
                    <p className="m-0">
                      <i className="fa-solid fa-location-dot"></i>{" "}
                      {t("abuRawash")}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="/WastetoEnergyPlantAbuRawash"
                      className="btn detailsBtn mainBg rounded-0 fw-bold">
                      {t("projectDetails")}
                      {"  "}
                      {language === "en" ? (
                        <i className="fa-solid fa-arrow-right"></i>
                      ) : (
                        <i className="fa-solid fa-arrow-left"></i>
                      )}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="projectItem gap-4 gap-lg-3 d-flex justify-content-center justify-content-lg-between justify-content-sm-center shadow align-items-center flex-wrap p-4 gy-4">
                  <div>
                    <p className="fw-bold fs-5 m-0 w-100">
                      {t("solidWasteCharacterization15ofMay")}
                    </p>
                    <p className="m-0">
                      <i className="fa-solid fa-location-dot"></i> {t("15may")}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="/SolidWasteCharacterizationStudy15May"
                      className="btn detailsBtn mainBg rounded-0 fw-bold">
                      {t("projectDetails")}
                      {"  "}
                      {language === "en" ? (
                        <i className="fa-solid fa-arrow-right"></i>
                      ) : (
                        <i className="fa-solid fa-arrow-left"></i>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}