import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { t } from "i18next";
import Cookies from "js-cookie";

export default function States() {
  const [counterOn, setCounterOn] = useState(false);

  const [language, setLanguage] = useState("");
  const lng = Cookies.get("i18next") || "en";
  useEffect(() => {
    setLanguage(lng);
  }, [lng]);

  return (
    <>
      <ScrollTrigger
        onEnter={() => {
          setCounterOn(true);
        }}
        onExit={() => {
          setCounterOn(false);
        }}>
        <section
          className="d-flex text-center align-items-center py-4"
          id="states"
          dir="ltr">
          <div className="container">
            <div className="row g-4">
              <div className="col-sm-6 col-lg-3">
                <div className="stat d-lg-flex px-lg-3 text-lg-start">
                  <p className="m-0 fs-1 fw-bold text-white">
                    <span className="squareBefore position-relative">
                      {counterOn && <CountUp start={0} end={15} duration={3} />}
                    </span>
                  </p>
                  <div className="statsText text-white fw-medium fs-5 text-capitalize d-flex justify-content-center d-sm-flex d-lg-block">
                    <p className="m-0 px-1">{t("yearsOf")}</p>
                    <p className="m-0">{t("experience")}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="stat d-lg-flex px-lg-3 text-lg-start">
                  <p className="m-0 fs-1 fw-bold text-white position-relative">
                    <span className="squareBefore position-relative">
                      {" "}
                      {counterOn && <CountUp start={0} end={80} duration={3} />}
                    </span>
                  </p>
                  <div className="statsText text-white fw-medium fs-5 text-capitalize d-flex justify-content-center d-sm-flex d-lg-block">
                    <p className="m-0 px-1">{t("projectswithAl")}</p>
                    <p className="m-0">{t("completed")}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="stat d-lg-flex px-lg-3 text-lg-start align-items-center">
                  <p className="m-0 fs-1 fw-bold text-white position-relative">
                    <span className="squareBefore position-relative">
                      {" "}
                      {counterOn && <CountUp start={0} end={21} duration={3} />}
                    </span>
                  </p>
                  <div className="statsText text-white fw-medium fs-5 text-capitalize d-flex justify-content-center d-sm-flex d-lg-block">
                    <p className="m-0 px-1">{t("projectswithAl")}</p>
                    <p className="m-0">{t("ongoing")}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="stat d-lg-flex px-lg-3 text-lg-start align-items-center">
                  <p className="m-0 fs-1 fw-bold text-white position-relative">
                    <span className="squareBefore position-relative">
                      {" "}
                      {counterOn && <CountUp start={0} end={17} duration={3} />}
                    </span>
                  </p>
                  <div className="statsText text-white fw-medium fs-5 text-capitalize d-flex justify-content-center d-sm-flex d-lg-block">
                    <p className="m-0 px-1">{t("clients")}</p>
                    <p className="m-0">{t("trustUs")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>
    </>
  );
}
