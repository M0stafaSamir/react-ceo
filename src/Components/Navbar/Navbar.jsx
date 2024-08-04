import React, { useState, useEffect } from "react";
import { t } from "i18next";
import logo from "./../../assets/imgs/logo/Frame 1 (6).png";
import Cookies from "js-cookie";
import arabicFlag from "./../../assets/imgs/flags/egypt-flag-icon.svg";
import englishFlag from "./../../assets/imgs/flags/united-kingdom-flag-icon.svg";
import i18n from "i18next";

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
          <a className="navbar-brand" href="index.html">
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
                <a
                  className="nav-link underLine text-white fw-medium active"
                  aria-current="page"
                  href="index.html"
                  data-i18n="home">
                  {t("home")}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white fw-medium"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  {t("services")} <i className="fa-solid fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu border-0 pt-0">
                  <li>
                    <a
                      className="dropdown-item ps-4"
                      data-i18n="service1"
                      href="architecture_and_building_service.html">
                      {t("service1")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item ps-4"
                      data-i18n="service3"
                      href="project_and_construction_service.html">
                      {t("service2")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item ps-4"
                      data-i18n="service2"
                      href="Contracts_and_Cost_Consultancy_service.html">
                      {t("service3")}
                    </a>
                  </li>

                  <li>
                    <a
                      className="dropdown-item ps-4"
                      data-i18n="service7"
                      href="Solid_Waste_projects_services.html">
                      {t("service4")}
                    </a>
                  </li>

                  <li>
                    <a
                      className="dropdown-item ps-4"
                      data-i18n="service5"
                      href="Highways_and_Bridges_services.html">
                      {t("service5")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item ps-4"
                      data-i18n="service11"
                      href="Utilities_and_Infrastructures_service.html">
                      {t("service6")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item ps-4"
                      data-i18n="service6"
                      href="Landscaping_and_Public_Realm_service.html">
                      {t("service7")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item ps-4"
                      data-i18n="service12"
                      href="The_Urban_and_Master_Planning_service.html">
                      {t("service8")}
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white fw-medium"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-i18n="projects">
                  {t("projects")} <i className="fa-solid fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu border-0 pt-0">
                  <li>
                    <a
                      className="dropdown-item ps-4"
                      data-i18n="projectOne"
                      href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item ps-4"
                      data-i18n="projectTwo"
                      href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link underLine text-white fw-medium"
                  href="aboutus.html"
                  data-i18n="aboutus">
                  {t("aboutUs")}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link underLine text-white fw-medium"
                  href="contactUs.html"
                  data-i18n="contactus">
                  {t("contactUs")}
                </a>
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
