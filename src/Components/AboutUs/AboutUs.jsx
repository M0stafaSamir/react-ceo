import React, { useEffect, useState } from "react";
import { t } from "i18next";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

import aboutBG from "./../../assets/imgs/backgrounds/dam_dejvice_9.jpg";
import office from "./../../assets/imgs/backgrounds/office.jpeg";
import toolsPic from "./../../assets/imgs/backgrounds/output-onlinepngtools.png";
import OurClients from "../OurClients/OurClients";

export default function AboutUs() {
  const [language, setLanguage] = useState("");
  const lng = Cookies.get("i18next") || "en";
  useEffect(() => {
    setLanguage(lng);
  }, [lng]);
  return (
    <>
      <div className="servicePage w-100 overflow-hidden">
        <div className="service-landing position-relative overflow-hidden">
          <img
            className="object-fit-cover"
            src={aboutBG}
            alt="steel building"
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

            <span className="mainColor"> {t("aboutUs")}</span>
          </div>
        </div>
        <div className="service-content py-5">
          <div className="container">
            <h1 className="text-uppercase fw-bold text-center mb-5">
              {t("aboutUs")}
            </h1>
            <div className="row flex-sm-row-reverse g-5 py-5">
              <div className="col-lg-6">
                <div className="h-100 shadow">
                  <img
                    className="w-100 h-100 object-fit-cover animate__animated animate__slideInUp"
                    src={office}
                    alt="office"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="fw-medium lh-lg">
                  <p>{t("whoWeAreParagraph")}</p>
                  <p>{t("whoWeAreParagraph2")}</p>
                  <div className="d-flex">
                    <ol>
                      <li>{t("whoWeAreService1")}</li>
                      <li>{t("whoWeAreService2")}</li>
                      <li>{t("whoWeAreService3")}</li>
                      <li>{t("whoWeAreService4")}</li>
                      <li>{t("whoWeAreService5")}</li>
                      <li>{t("whoWeAreService6")}</li>
                      <li>{t("whoWeAreService7")}</li>
                    </ol>
                    <ol start={8}>
                      <li>{t("whoWeAreService8")}</li>
                      <li>{t("whoWeAreService9")}</li>
                      <li>{t("whoWeAreService10")}</li>
                      <li>{t("whoWeAreService11")}</li>
                      <li>{t("whoWeAreService12")}</li>
                      <li>{t("whoWeAreService13")}</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section id="aboutusInfo" className="py-5">
            <div className="container">
              <h2 className="text-center text-uppercase fw-bolder mb-5">
                {t("experiencelegend")}
              </h2>

              <div className="row g-5">
                <div className="col-lg-4">
                  <div className="about-item p-3 text-center d-flex flex-column justify-content-center align-items-center">
                    <div>
                      <i className="fa-solid fa-user-tie fs-1 p-3"></i>
                    </div>
                    <h4 className="text-capitalize fw-bold">{t("experts")}</h4>
                    <p>{t("expertsContent")}</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="about-item p-3 text-center d-flex flex-column justify-content-center align-items-center">
                    <div>
                      <i className="fa-solid fa-globe fs-1 p-3"></i>
                    </div>
                    <h4 className="text-capitalize fw-bold">{t("global")}</h4>
                    <p> {t("globalContent")}</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="about-item p-3 text-center d-flex flex-column justify-content-center align-items-center">
                    <div>
                      <i className="fa-solid fa-handshake fs-2 p-3"></i>
                    </div>
                    <h4 className="text-capitalize fw-bold">{t("services")}</h4>
                    <p>{t("ServiceSpectrumcontent")}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="coreValues" className="py-5">
            <div className="container">
              <h2 className="fw-bold text-center text-capitalize mb-5">
                {t("coreValues")}
              </h2>
              <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                  <div>
                    <img
                      className="w-100"
                      src={toolsPic}
                      alt="consultant engineering office"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item bg-transparent border-0">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button d-flex justify-content-between text-capitalize fw-bold rounded-pill border border-1 mb-3"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne">
                          <span className="corevls">{t("clients")}</span>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          {t("clientsContent")}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item bg-transparent border-0">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button d-flex justify-content-between collapsed fw-bold rounded-pill border border-1 mb-3"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo">
                          <span className="corevls">{t("integrity")}</span>
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          {t("integrityContent")}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item bg-transparent border-0">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button d-flex justify-content-between collapsed fw-bold rounded-pill border border-1 mb-3"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree">
                          <span className="corevls">{t("innovation")}</span>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          {t("innovationContent")}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item bg-transparent border-0">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button d-flex justify-content-between collapsed fw-bold rounded-pill border border-1 mb-3"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour">
                          <span className="corevls">{t("agility")}</span>
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          {t("agilityContent")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <OurClients />
        </div>
      </div>
    </>
  );
}
