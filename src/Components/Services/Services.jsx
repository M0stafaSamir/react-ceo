import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { t } from "i18next";
import service1 from "./../../assets/imgs/services/arch.jpg";
import service2 from "./../../assets/imgs/services/paperwork_1098-18063.jpg";
import service3 from "./../../assets/imgs/services/construction.jpg";
import service4 from "./../../assets/imgs/services/mbt.jpg";
import service5 from "./../../assets/imgs/services/highway.webp";
import service6 from "./../../assets/imgs/services/landscape.jpg";
import service7 from "./../../assets/imgs/services/Infrastructures.webp";
import service8 from "./../../assets/imgs/services/city1.webp";
import { Link } from "react-router-dom";

export default function Services() {
  const [language, setLanguage] = useState("");
  const lng = Cookies.get("i18next") || "en";

  useEffect(() => {
    setLanguage(lng);
  }, [lng]);

  const options = {
    loop: true,
    margin: 5,
    nav: true,
    center: true,

    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
      <section
        dir="ltr"
        id="services"
        className="text-center position-relative py-5">
        <div className="container">
          <h2 className="text-center fw-bold text-uppercase mb-5">
            <span className="position-relative our-services-en fs-2">
              {t("services")}
            </span>
          </h2>
          <div className="slider">
            <ReactOwlCarousel {...options} className="owl-theme">
              <div className="slider-card shadow">
                <div className="srv-img-container overflow-hidden position-relative rounded-1">
                  <img src={service4} alt="service" />
                  <div className="servicesLayerHov position-absolute w-100 h-100 p-3 text-start">
                    <p className="text-white ellipsis-multiline">
                      {t("service4_Desc")}
                    </p>
                    <Link
                      className="text-uppercase fw-bold mainColor"
                      to="/serviceFour">
                      {t("readMore")}
                    </Link>
                  </div>
                </div>
                <h5 className="mb-0 text-center p-3 h5 flex-column">
                  <b data-i18n="service7"> {t("service4")} </b>
                  {language === "en" ? (
                    <span dir="rtl" className="chDir fs-6">
                      {t("service4_fields")}
                    </span>
                  ) : (
                    <span className="chDir fs-6">{t("service4_fields")}</span>
                  )}
                </h5>
              </div>
              <div className="slider-card shadow">
                <div className="srv-img-container overflow-hidden position-relative rounded-1">
                  <img src={service1} alt="service" />
                  <div className="servicesLayerHov position-absolute w-100 h-100 p-3 text-start">
                    <p className="text-white ellipsis-multiline">
                      {t("service1_Desc")}
                    </p>
                    <Link
                      className="text-uppercase fw-bold mainColor"
                      to="/serviceOne">
                      {" "}
                      {t("readMore")}
                    </Link>
                  </div>
                </div>
                <h5 className="mb-0 text-center p-3 h4">
                  <b>{t("service1")}</b>
                </h5>
              </div>
              <div className="slider-card shadow">
                <div className="srv-img-container overflow-hidden position-relative rounded-1">
                  <img src={service2} alt="service" />
                  <div className="servicesLayerHov position-absolute w-100 h-100 p-3 text-start">
                    <p className="text-white ellipsis-multiline">
                      {t("service2_Desc")}
                    </p>
                    <Link
                      className="text-uppercase fw-bold mainColor"
                      to="/serviceTwo">
                      {t("readMore")}
                    </Link>
                  </div>
                </div>
                <h5 className="mb-0 text-center p-3 h4">
                  <b>{t("service2")} </b>
                </h5>
              </div>
              <div className="slider-card shadow">
                <div className="srv-img-container overflow-hidden position-relative rounded-1">
                  <img src={service3} alt="service" />
                  <div className="servicesLayerHov position-absolute w-100 h-100 p-3 text-start">
                    <p className="text-white ellipsis-multiline">
                      {t("service3_Desc")}
                    </p>
                    <Link
                      className="text-uppercase fw-bold mainColor"
                      to="/serviceThree">
                      {t("readMore")}
                    </Link>
                  </div>
                </div>
                <h5 className="mb-0 text-center p-3 h4">
                  <b>{t("service3")}</b>
                </h5>
              </div>

              <div className="slider-card shadow">
                <div className="srv-img-container overflow-hidden position-relative rounded-1">
                  <img src={service5} alt="service" />
                  <div className="servicesLayerHov position-absolute w-100 h-100 p-3 text-start">
                    <p className="text-white ellipsis-multiline">
                      {t("service5_Desc")}
                    </p>
                    <Link
                      data-i18n="knowMore"
                      className="text-uppercase fw-bold mainColor"
                      to="/HighwaysAndBridges">
                      {t("readMore")}
                    </Link>
                  </div>
                </div>
                <h5 className="mb-0 text-center p-3 h4">
                  <b>{t("service5")}</b>
                </h5>
              </div>
              <div className="slider-card shadow">
                <div className="srv-img-container overflow-hidden position-relative rounded-1">
                  <img src={service6} alt="service" />
                  <div className="servicesLayerHov position-absolute w-100 h-100 p-3 text-start">
                    <p className="text-white ellipsis-multiline">
                      {t("service6_Desc")}
                    </p>
                    <Link
                      data-i18n="knowMore"
                      className="text-uppercase fw-bold mainColor"
                      to="/LandscapingAndPublicRealm">
                      {t("readMore")}
                    </Link>
                  </div>
                </div>
                <h5 className="mb-0 text-center p-3 h4">
                  <b data-i18n="service6"> {t("service6")}</b>
                </h5>
              </div>
              <div className="slider-card shadow">
                <div className="srv-img-container overflow-hidden position-relative rounded-1">
                  <img src={service7} alt="service" />
                  <div className="servicesLayerHov position-absolute w-100 h-100 p-3 text-start">
                    <p className="text-white ellipsis-multiline">
                      {t("service7_Desc")}
                    </p>
                    <Link
                      className="text-uppercase fw-bold mainColor"
                      to="/UtilitiesAndInfrastructures">
                      {t("readMore")}
                    </Link>
                  </div>
                </div>
                <h5 className="mb-0 text-center p-3 h4">
                  <b>{t("service7")} </b>
                </h5>
              </div>
              <div className="slider-card shadow">
                <div className="srv-img-container overflow-hidden position-relative rounded-1">
                  <img src={service8} alt="service" />
                  <div className="servicesLayerHov position-absolute w-100 h-100 p-3 text-start">
                    <p className="text-white ellipsis-multiline">
                      {t("service8_Desc")}
                    </p>
                    <Link
                      data-i18n="knowMore"
                      className="text-uppercase fw-bold mainColor"
                      to="/TheUrbanAndMasterPlanning">
                      {t("readMore")}
                    </Link>
                  </div>
                </div>
                <h5 className="mb-0 text-center p-3 h4">
                  <b> {t("service8")}</b>
                </h5>
              </div>
            </ReactOwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
}
