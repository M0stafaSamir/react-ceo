import React from "react";
import clients from ".//../../assets/imgs/backgrounds/clients.png";
import { t } from "i18next";

export default function OurClients() {
  return (
    <>
      <section dir="ltr" id="ourClients" className="py-5">
        <h2 className="text-center fw-bold text-uppercase mb-5">
          <span className="position-relative our-clients-en fs-2">
            {t("ourClients")}
          </span>
        </h2>

        <div className="logos">
          <div className="logos-slide">
            <img src={clients} alt="Our Clients" />
          </div>
          <div className="logos-slide">
            <img src={clients} alt="Our Clients" />
          </div>
        </div>
      </section>
    </>
  );
}
