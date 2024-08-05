import React, { useEffect, useState } from "react";
import { t } from "i18next";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

import solidWastedrop from "./../../assets/imgs/services/solidwastedrop.png";

export default function SolidWasteProjects() {
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
            src={solidWastedrop}
            alt="solid waste projects"
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
                ? t("service4") + " " + t("projectswithAl")
                : t("projectswithAl") + " " + t("service4")}
            </span>
          </div>
        </div>
        <div className="service-content py-5">
          <div className="container">
            <h5 className="text-center fw-bold mb-3 mainColor">
              {t("pervWork")}
            </h5>
            <h3 className="text-uppercase fw-bold text-center mb-5">
              {t("service4")}
            </h3>
            <div className="row gy-3 mb-5">
              <div className="col-lg-12">
                <div className="projectItem gap-4 gap-lg-3 d-flex justify-content-center justify-content-lg-between justify-content-sm-center shadow align-items-center flex-wrap p-4 gy-4">
                  <div>
                    <p className="fw-bold fs-5 m-0 w-100">{t("mbtProject")}</p>
                    <p className="m-0">
                      <i className="fa-solid fa-location-dot"></i>{" "}
                      {t("mahalla")}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="/mahallaProjectMbt"
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
                    <p className="fw-bold fs-5 m-0 w-100">{t("mbtProject")}</p>
                    <p className="m-0">
                      <i className="fa-solid fa-location-dot"></i>{" "}
                      {t("Sandoub")}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="/mahalla project"
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
                    <p className="fw-bold fs-5 m-0 w-100">{t("mbtProject")}</p>
                    <p className="m-0">
                      <i className="fa-solid fa-location-dot"></i>{" "}
                      {t("manzalla")}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="/mahalla project"
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
                    <p className="fw-bold fs-5 m-0 w-100">{t("mbtProject")}</p>
                    <p className="m-0">
                      <i className="fa-solid fa-location-dot"></i> {t("salam")}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="/mahalla project"
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
                    <p className="fw-bold fs-5 m-0 w-100">{t("mbtProject")}</p>
                    <p className="m-0">
                      <i className="fa-solid fa-location-dot"></i> {t("minya")}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="/mahalla project"
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

            <h4 className="fw-bold text-center">{t("otherProjOnMbt")}</h4>
            <table className="w-100 my-5 projectsTable">
              <tbody>
                <tr>
                  <th className="mainBg w-20 p-3 m- fs-5 fw-bold">
                    {t("projectName")}
                  </th>
                  <th className="mainBg p-3 m- fs-5 fw-bold">
                    {t("keyProjectDetails")}
                  </th>
                  <th className="mainBg w-20 p-3 m- fs-5 fw-bold">
                    <i className="fa-solid fa-location-dot"></i>{" "}
                    {t("projectLocation")}
                  </th>
                </tr>

                <tr>
                  <td>MBT plant in Kafer Elsheikh Gov.(2022)</td>
                  <td>
                    <ul>
                      <li>
                        {t("yearOfImplementation")} 2022 {t("Ad")}
                      </li>

                      <li>
                        {t("projectCost")} 140 {t("millionEgp")}
                      </li>
                      <li>{t("fundingSource")}</li>
                      <li>{t("designCapacity")}</li>
                    </ul>
                  </td>
                  <td>{t("metops")}</td>
                </tr>
                <tr>
                  <td>Obour Factory for Recycling Waste Tires (2016)</td>
                  <td>
                    <ul>
                      <li>
                        {t("yearOfImplementation")} 2016 {t("Ad")}
                      </li>
                      <li>{t("oburUnits")}</li>
                      <li>{t("unitsDetails")}</li>
                    </ul>
                  </td>
                  <td>{t("SocietyofEngineers")}</td>
                </tr>
                <tr>
                  <td>Hebil - Luxor Factory for Recycling Plant (2018)</td>
                  <td>
                    <ul>
                      <li>
                        {t("yearOfImplementation")} 2018 {t("Ad")}
                      </li>
                      <li>{t("hebilCapacity")}</li>
                    </ul>
                  </td>
                  <td>{t("AlHabil")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
