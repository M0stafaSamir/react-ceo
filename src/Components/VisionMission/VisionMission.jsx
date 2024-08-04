import React, { useEffect } from "react";
import { t } from "i18next";
import visionPic from "./../../assets/imgs/backgrounds/vision.webp";
import Aos from "aos";
import "aos/dist/aos.css";

export default function VisionMission() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <section
        id="vision-mission"
        className="py-5 d-flex align-items-center min-vh-100">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-12 col-lg-6 ">
              <div
                data-aos="fade-right"
                className="layerBehind position-relative z-1">
                <img className="w-100" src={visionPic} alt="our vision" />
              </div>
            </div>
            <div className="col-md-12 col-lg-6 ">
              <div data-aos="fade-up">
                <h2 className="fw-bold text-capitalize mb-4">
                  {t("ourVision")}
                </h2>
                <p className="fs-5 lh-lg">{t("ourVisionParagraph")}</p>
                <h2 className="fw-bold text-capitalize mb-4">
                  {t("ourMission")}
                </h2>
                <p className="fs-5 lh-lg">{t("ourMissionParagraph")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
