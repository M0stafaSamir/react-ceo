import React from "react";
import logoFooter from "./../../assets/imgs/logo/Frame 1 (6).png";
import { t } from "i18next";

export default function Footer() {
  return (
    <>
      <footer className="d-flex align-items-center py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-3">
              <div className="d-flex align-items-center justify-content-center">
                <img className="w-300px" src={logoFooter} alt="Our Logo" />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="d-flex justify-content-around pt-3">
                <ul className="list-unstyled">
                  <li>
                    <a className="text-capitalize w-100 d-block" href="">
                      {t("home")}
                    </a>
                  </li>
                  <li>
                    <a className="text-capitalize w-100 d-block" href="">
                      {t("services")}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-capitalize w-100 d-block"
                      data-i18n="projects"
                      href="">
                      {t("projects")}
                    </a>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-capitalize w-100 d-block" href="">
                      {t("ourVision")}
                    </a>
                  </li>
                  <li>
                    <a className="text-capitalize w-100 d-block" href="">
                      {t("aboutUs")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-capitalize w-100 d-block"
                      data-i18n="contactus"
                      href="">
                      {t("contactUs")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
              <div className="social h-100 d-flex flex-column pt-3 align-items-center justify-content-center">
                <div className="socialIcons d-flex justify-content-center w-100">
                  <div className="me-3">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f fs-3 text-white-50"></i>
                    </a>
                  </div>
                  <div className="me-3">
                    <a href="#">
                      <i className="fa-brands fa-x-twitter fs-3 text-white-50"></i>
                    </a>
                  </div>
                  <div className="me-3">
                    <a href="#">
                      <i className="fa-brands fa-linkedin fs-3 text-white-50"></i>
                    </a>
                  </div>
                  <div className="me-3">
                    <a href="#">
                      <i className="fa-brands fa-instagram fs-3 text-white-50"></i>
                    </a>
                  </div>
                </div>
                <p className="py-4 text-white-50">{t("copyRights")}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
