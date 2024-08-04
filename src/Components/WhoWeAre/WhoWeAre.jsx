import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { t } from "i18next";
import officePic from "./../../assets/imgs/backgrounds/office.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export default function WhoWeAre() {
  const [language, setLanguage] = useState("");
  const lng = Cookies.get("i18next") || "en";
  useEffect(() => {
    Aos.init({});
    setLanguage(lng);
  }, [lng]);

  return (
    <>
      <section
        className="d-flex align-items-center py-5 overflow-hidden"
        id="aboutUs">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div
                className="layerBehind position-relative z-1 wow animate__animated animate__fadeInLeft"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine">
                <div className="overflow-hidden">
                  <img className="w-100 weImg" src={officePic} alt="office" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow animate__animated animate__fadeInUp">
              <div>
                <h2 className="fw-bold mb-5 lines position-relative">
                  {t("whoWeAre")}
                </h2>
              </div>
              <div>
                <p className="fw-medium lh-lg">{t("whoWeAreParagraph")}</p>
              </div>
              <div className="slideup3">
                <a
                  data-i18n="knowMore"
                  className="text-uppercase fw-bold"
                  href="aboutus.html">
                  {t("readMore")}{" "}
                  {language === "en" ? (
                    <i className="fa-solid fa-angles-right"></i>
                  ) : (
                    <i className="fa-solid fa-angles-left"></i>
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
