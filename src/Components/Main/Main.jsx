import { t } from "i18next";
import React from "react";

export default function Main() {
  return (
    <>
      <main id="home" className="d-flex align-items-center text-center">
        <div className="container">
          <h1 data-i18n="homeH1" className="text-white">
            {t("ceo")}
          </h1>
          <legend className="mb-3">{t("experiencelegend")}</legend>
          <p className="homeDescription text-white-50 mb-5 mx-auto w-70">
            {t("homeParagraph")}
          </p>
          <div id="homeBtns">
            <a
              data-i18n="homeBtnService"
              href="#services"
              className="btn mian-btn rounded-0 text-uppercase me-3">
              {t("exploarServices")}
            </a>
            <a
              data-i18n="homeBtnContact"
              href="contactUs.html"
              className="btn second-btn rounded-0 text-uppercase px-4 me-3">
              {t("contactUs")}
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
