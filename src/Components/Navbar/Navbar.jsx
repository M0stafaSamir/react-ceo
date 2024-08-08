import React, { useState, useEffect } from "react";
import { t } from "i18next";
import logo from "./../../assets/imgs/logo/Frame 1 (6).png";
import Cookies from "js-cookie";
import arabicFlag from "./../../assets/imgs/flags/egypt-flag-icon.svg";
import englishFlag from "./../../assets/imgs/flags/united-kingdom-flag-icon.svg";
import i18n from "i18next";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // const handleRefresh = () => {
  //   window.location.reload();
  // };

  const [language, setLanguage] = useState("");
  const lng = Cookies.get("i18next") || "en";

  useEffect(() => {
    setLanguage(lng);
  }, [lng]);

  //nav on scroll
  const [colored, setColored] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 220) {
        setColored(true);
      } else {
        setColored(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={
          colored
            ? "navbar navbar-expand-lg w-100 position-fixed top-0 nav-scrolled"
            : "navbar navbar-expand-lg w-100 position-fixed "
        }>
        <div className="container">
          <a className="navbar-brand" href="/">
            <img width="150" src={logo} alt="Our Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              id="navbarLinks"
              className={
                language === "ar"
                  ? "navbar-nav me-auto mb-2 mb-lg-0"
                  : "navbar-nav ms-auto mb-2 mb-lg-0"
              }>
              <li className="nav-item">
                <NavLink
                  className="nav-link underLine text-capitalize text-white fw-medium "
                  aria-current="page"
                  to="/">
                  {t("home")}
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-capitalize text-white fw-medium"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  {t("services")} <i className="fa-solid fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu border-0 pt-0">
                  <li>
                    <NavLink className="dropdown-item ps-4" to="/serviceFour">
                      {t("service4")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item ps-4" to="/serviceTwo">
                      {t("service2")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item ps-4" to="/serviceThree">
                      {t("service3")}
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="dropdown-item ps-4" to="/serviceOne">
                      {t("service1")}
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="dropdown-item ps-4"
                      to="/HighwaysAndBridges">
                      {t("service5")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item ps-4"
                      data-i18n="service11"
                      to="/LandscapingAndPublicRealm">
                      {t("service6")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item ps-4"
                      data-i18n="service6"
                      to="/UtilitiesAndInfrastructures">
                      {t("service7")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item ps-4"
                      data-i18n="service12"
                      to="/TheUrbanAndMasterPlanning">
                      {t("service8")}
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link text-capitalize dropdown-toggle text-white fw-medium"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-i18n="projects">
                  {t("projects")} <i className="fa-solid fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu border-0 pt-0">
                  <li>
                    <NavLink
                      className="dropdown-item ps-4"
                      data-i18n="projectOne"
                      to="/SolidWaste Projects">
                      {t("designMbt")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item ps-4"
                      to="/transferStation">
                      {t("transferStation")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item ps-4"
                      to="/sanitarylandfillsprojects">
                      {t("sanitaryLandfills")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item ps-4"
                      to="/arch&buildingProjects">
                      {t("service1")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item ps-4"
                      to="/EnvServicesAlternativeEnergy">
                      {t("altEnergy")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item ps-4"
                      to="/ConsultancyServicesProjects">
                      {t("consultancyServices")}
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link text-capitalize underLine text-white fw-medium"
                  to="/aboutUs">
                  {t("aboutUs")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-capitalize underLine text-white fw-medium"
                  to="/contactUs">
                  {t("contactUs")}
                </NavLink>
              </li>
              {language === "ar" ? (
                <li className="nav-item border-0 d-flex align-items-center mx-2">
                  <button
                    onClick={() => {
                      i18n.changeLanguage("en");
                    }}
                    className="btn text-white d-flex align-items-center fw-bold">
                    EN{" "}
                    <img
                      className="me-2 w-20px"
                      src={englishFlag}
                      alt="English"
                    />
                  </button>
                </li>
              ) : (
                <li className="nav-item border-0 d-flex align-items-center mx-2">
                  <button
                    onClick={() => {
                      i18n.changeLanguage("ar");
                    }}
                    className="btn text-white d-flex align-items-center fw-bold">
                    <img
                      className="me-2 w-20px"
                      src={arabicFlag}
                      alt="arabic"
                    />{" "}
                    Ar
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
