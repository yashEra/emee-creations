import React from "react";

const HeaderTopStyle2 = () => {
  return (
    <>
      <div className="top-bar-area top-bar-style-two">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-8">
              <ul className="item-flex">
                <li>
                  <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info">
                    <strong>Address</strong>
                    No. 30/3, Gangarama Road, Thumbowila Piliyandala
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-user-headset"></i>
                  </div>
                  <div className="info">
                    <strong>Phone</strong>
                    <a href="tel: +94 77 011 5710">+ +94 77 011 5710</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 text-end">
              <div className="call-entry">
                <div className="icon">
                  <i className="fas fa-comments-alt-dollar"></i>
                </div>
                <div className="info">
                  <p>Have any Questions?</p>
                  <h5>
                    <a href="mailto:info@crysta.com">info@bestup.com</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTopStyle2;
