import React from "react";

const Loading = () => {
  return (
    <>
      <div id="preloader">
        <div id="emee-preloader" className="emee-preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <span data-text-preloader="C" className="letters-loading">
                E
              </span>
              <span data-text-preloader="O" className="letters-loading">
                M
              </span>
              <span data-text-preloader="N" className="letters-loading">
                E
              </span>
              <span data-text-preloader="S" className="letters-loading">
                E
              </span>
            </div>
          </div>
          <div className="loader">
            <div className="row">
              <div className="col-3 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-rix ght">
                <div className="bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
