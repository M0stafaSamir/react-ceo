import React from "react";

export default function HeadInfo() {
  return (
    <>
      <div
        dir="ltr"
        className="headInfo z-1 position-fixed top-0 w-100 text-white">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-around">
              <p className="m-0 py-2 px-4 border border-0 border-end boderColor">
                <i className="fa-solid fa-phone pe-2 mainColor"></i>
                +201158844665
              </p>
              <p className="m-0 py-2 px-4 border border-0 border-end boderColor">
                <i className="fa-solid fa-envelope pe-2 mainColor"></i>
                <a className="text-white" href="mailto: CEOeng84@gmail.com">
                  CEOeng84@gmail.com
                </a>
              </p>
              <p className="m-0 py-2 px-4">
                <i className="fa-regular fa-clock mainColor"></i> Open Hours
                09:00 AM - 05:00 PM
              </p>
            </div>
            <div className="d-flex">
              <a className="py-2 pe-3 text-white" href="#">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a className="py-2 pe-3 text-white" href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a className="py-2 pe-3 text-white" href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a className="py-2 pe-3 text-white" href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
