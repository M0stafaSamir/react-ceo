import React, { useEffect, useState } from "react";
import { t } from "i18next";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import conatctBg from "./../../assets/imgs/backgrounds/contactUsBg.jpg";

export default function ContactUs() {
  const [language, setLanguage] = useState("");
  const lng = Cookies.get("i18next") || "en";
  useEffect(() => {
    setLanguage(lng);
  }, [lng]);

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const clearInputs = () => {
    setInput1("");
    setInput2("");
    setInput3("");
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "48c84f9b-c9f5-412f-9154-6f55c9ec7b93");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      clearInputs();
      Swal.fire({
        title: t("success"),
        text: t("MessageSent"),
        icon: "success",
      });
    }
  };
  return (
    <>
      <div className="servicePage w-100 overflow-hidden">
        <div className="service-landing position-relative overflow-hidden">
          <img
            className="object-fit-cover"
            src={conatctBg}
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
              <i className="fa-solid fa-angle-right"></i>
            ) : (
              <i className="fa-solid fa-angle-left"></i>
            )}
            <span className="mainColor"> {t("contactUs")}</span>
          </div>
        </div>
        <div className="contact-content py-5">
          <div className="container">
            <h1 className="text-uppercase fw-bold text-center mb-5">
              {t("contactUs")}
            </h1>
            <div id="contactInfo" className="contact-info ">
              <div className="row">
                <div className="col-lg-3">
                  <div className="p-3 d-flex flex-column justify-content-center align-items-center text-white">
                    <p>
                      <i className="fa-solid fa-map-location-dot fs-3"></i>
                    </p>
                    <p className="fs-5 m-0 text-capitalize fw-bold">
                      {t("location")}
                    </p>
                    <p className="text-center">
                      13 Ahmed Orbi Street, Cairo, Egypt
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="p-3 d-flex flex-column justify-content-center align-items-center text-white">
                    <p>
                      <i className="fa-solid fa-phone fs-3"></i>
                    </p>
                    <p className="fs-5 m-0 text-capitalize fw-bold">
                      {t("callOn")}
                    </p>

                    <ul dir="ltr" className="list-unstyled">
                      <li>+201158844665</li>
                      <li>+201002448890</li>
                      <li>+18195801685</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="p-3 d-flex flex-column justify-content-center align-items-center text-white">
                    <p>
                      <i className="fa-solid fa-envelope fs-3"></i>
                    </p>
                    <p className="fs-5 m-0 text-capitalize fw-bold">
                      {t("ouremail")}
                    </p>
                    <ul dir="ltr" className="list-unstyled">
                      <li>CEOeng84@gmail.com</li>
                      <li>Engkareem73@gmail.com</li>
                      <li>Ahmed.ali@usherbrooke.ca</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="p-3 d-flex flex-column justify-content-center align-items-center text-white">
                    <p>
                      <i className="fa-regular fa-clock fs-3"></i>
                    </p>
                    <p
                      data-i18n="hours"
                      className="fs-5 m-0 text-capitalize fw-bold">
                      {t("hours")}
                    </p>
                    <p className="text-center">
                      Open Hours 09:00 AM - 06:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.2504368082185!2d31.259410632308455!3d30.065484401395462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458408118dd3df1%3A0xe53eb54f0c1aca4d!2z2LHZhdiz2YrYs9iMINin2YTZgtio2YrYs9mK2Iwg2K3ZiiDYp9mE2LjYp9mH2LHYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1722091857700!5m2!1sar!2seg"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <div className="container">
          <p className="mainColor text-center fw-bold">{t("writeMessage")}</p>
          <h2 className="text-capitalize text-center fw-bold">
            {t("ouestions")}
          </h2>
          <p className="text-center w-75 mx-auto text-black-50 mb-3">
            {t("tankMessage")}
          </p>
          <form dir="ltr" onSubmit={onSubmit} className="py-5">
            <div className="row">
              <input
                type="hidden"
                name="access_key"
                value="48c84f9b-c9f5-412f-9154-6f55c9ec7b93"
              />

              <div className="mb-4 col-md-12 col-lg-6">
                <input
                  value={input1}
                  type="text"
                  className="form-control rounded-0 border border-2 py-2"
                  id="exampleFormControlInput1"
                  name="name"
                  required
                  placeholder="Your Name"
                  onChange={(e) => setInput1(e.target.value)}
                />
              </div>
              <div className="mb-4 col-md-12 col-lg-6">
                <input
                  value={input2}
                  type="email"
                  className="form-control rounded-0 border border-2 py-2"
                  name="email"
                  id="exampleFormControlInput2"
                  required
                  placeholder="Your Email"
                  onChange={(e) => setInput2(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <textarea
                value={input3}
                className="form-control rounded-0 border border-2"
                id="textArea"
                placeholder="Your Message"
                name="message"
                required
                onChange={(e) => setInput3(e.target.value)}
                rows="6"></textarea>
            </div>
            <div>
              <button
                type="submit"
                data-i18n="sendMessage"
                className="text-uppercase mx-auto d-block ContactBtn btn mainBg rounded-0 text-white mt-4">
                {t("sendMessage")} <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
