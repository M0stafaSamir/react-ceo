import React from "react";
import { t } from "i18next";
export default function ProjectFields() {
  return (
    <>
      <section id="projects" className="min-vh-100 py-5">
        <div className="container">
          <h2 className="text-center fw-bold text-uppercase mb-5">
            <span className="position-relative projects-en fs-2">
              {t("projectSection")}
            </span>
          </h2>
          <div className="row g-4">
            <div className="col-md-4 col-lg-3">
              <div className="projectField position-relative shadow">
                <span className="linewidth"></span>
                <div className="text-center text-capitalize p-3">
                  <p className="mainColor fw-medium">{t("fieldOf")} </p>
                  <h5 className="fw-bold">{t("service1")}</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center bg-secondary-subtle">
                  <p className="m-0 mainBg py-1 px-3 text-white fs-3">01</p>
                  <p className="m-0 py-1 px-3">
                    <a href="#">{t("seeProjects")}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="projectField position-relative shadow">
                <span className="linewidth"></span>
                <div className="text-center text-capitalize p-3">
                  <p className="mainColor fw-medium"> {t("fieldOf")}</p>
                  <h5 className="fw-bold" data-i18n="service2">
                    {t("service2")}
                  </h5>
                </div>
                <div className="d-flex justify-content-between align-items-center bg-secondary-subtle">
                  <p className="m-0 mainBg py-1 px-3 text-white fs-3">02</p>
                  <p className="m-0 py-1 px-3">
                    <a href="#">{t("seeProjects")}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="projectField position-relative shadow">
                <span className="linewidth"></span>
                <div className="text-center text-capitalize p-3">
                  <p className="mainColor fw-medium">{t("fieldOf")}</p>
                  <h5 className="fw-bold" data-i18n="service3">
                    {t("service3")}
                  </h5>
                </div>
                <div className="d-flex justify-content-between align-items-center bg-secondary-subtle">
                  <p className="m-0 mainBg py-1 px-3 text-white fs-3">03</p>
                  <p className="m-0 py-1 px-3">
                    <a href="#">{t("seeProjects")}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="projectField position-relative shadow">
                <span className="linewidth"></span>
                <div className="text-center text-capitalize p-3">
                  <p className="mainColor fw-medium">{t("fieldOf")}</p>
                  <h5 className="fw-bold" data-i18n="service11">
                    {t("service4")}
                  </h5>
                </div>
                <div className="d-flex justify-content-between align-items-center bg-secondary-subtle">
                  <p className="m-0 mainBg py-1 px-3 text-white fs-3">04</p>
                  <p className="m-0 py-1 px-3">
                    <a href="#">{t("seeProjects")}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="projectField position-relative shadow">
                <span className="linewidth"></span>
                <div className="text-center text-capitalize p-3">
                  <p className="mainColor fw-medium">{t("fieldOf")}</p>
                  <h5 className="fw-bold" data-i18n="service5">
                    {t("service5")}
                  </h5>
                </div>
                <div className="d-flex justify-content-between align-items-center bg-secondary-subtle">
                  <p className="m-0 mainBg py-1 px-3 text-white fs-3">05</p>
                  <p className="m-0 py-1 px-3">
                    <a href="#">{t("seeProjects")}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="projectField position-relative shadow">
                <span className="linewidth"></span>
                <div className="text-center text-capitalize p-3">
                  <p className="mainColor fw-medium">{t("fieldOf")}</p>
                  <h5 className="fw-bold" data-i18n="service6">
                    {t("service6")}
                  </h5>
                </div>
                <div className="d-flex justify-content-between align-items-center bg-secondary-subtle">
                  <p className="m-0 mainBg py-1 px-3 text-white fs-3">06</p>
                  <p className="m-0 py-1 px-3">
                    <a href="#">{t("seeProjects")}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="projectField position-relative shadow">
                <span className="linewidth"></span>
                <div className="text-center text-capitalize p-3">
                  <p className="mainColor fw-medium">{t("fieldOf")}</p>
                  <h5 className="fw-bold" data-i18n="service7">
                    {t("service7")}
                  </h5>
                </div>
                <div className="d-flex justify-content-between align-items-center bg-secondary-subtle">
                  <p className="m-0 mainBg py-1 px-3 text-white fs-3">07</p>
                  <p className="m-0 py-1 px-3">
                    <a href="#">{t("seeProjects")}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="projectField position-relative shadow">
                <span className="linewidth"></span>
                <div className="text-center text-capitalize p-3">
                  <p className="mainColor fw-medium">{t("fieldOf")}</p>
                  <h5 className="fw-bold" data-i18n="service12">
                    {t("service8")}
                  </h5>
                </div>
                <div className="d-flex justify-content-between align-items-center bg-secondary-subtle">
                  <p className="m-0 mainBg py-1 px-3 text-white fs-3">08</p>
                  <p className="m-0 py-1 px-3">
                    <a href="#">{t("seeProjects")}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
