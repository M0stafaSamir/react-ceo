// SearchPage.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { data } from "./../../searchData";
import { t } from "i18next";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

import searchPic from "./../../assets/imgs/backgrounds/search.jpg";
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const [language, setLanguage] = useState("");
  const lng = Cookies.get("i18next") || "en";
  useEffect(() => {
    setLanguage(lng);
  }, [lng]);
  ////////////
  const query = useQuery().get("s");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (query) {
      const filtered = data.filter((item) =>
        item.names.some((name) =>
          name.toLowerCase().includes(query.toLowerCase())
        )
      );
      setFilteredData(filtered);
    }
  }, [query]);

  return (
    <>
      <div className="servicePage">
        <div className="service-landing position-relative overflow-hidden w-100">
          <img
            className="object-fit-cover"
            src={searchPic}
            alt="Contracts and Cost Consultancy"
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

            <span className="mainColor"> {t("search")}</span>
          </div>
        </div>
        <div className="search-content  py-5">
          <div className="container">
            <h1 className="h4 mb-5 fw-bold text-capitalize text-center">
              {t("searchResultFor")} "{query}"
            </h1>
            {filteredData.length > 0 ? (
              <div className="row gy-4">
                {filteredData.map((item) => (
                  <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card shadow-lg">
                      <div className="card-body">
                        <h5 className="card-title mainColor fw-bold">
                          {t(item.names[0])}
                        </h5>

                        <p className="card-text ellipsis-multiline">
                          {t(item.category)}
                        </p>
                        <Link
                          className="text-capitalize mainColor fw-medium"
                          to="/">
                          {t("readMore")}{" "}
                          {language === "en" ? (
                            <i className="fa-solid fa-angles-right"></i>
                          ) : (
                            <i className="fa-solid fa-angles-left"></i>
                          )}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center fw-bold text-uppercase text-danger">
                {t("noResultFound")}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
