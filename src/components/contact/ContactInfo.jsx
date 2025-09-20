import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-style-one-info">
        <h2>Reach us anytime — your trusted partner for over four decades.</h2>
        <p>
          Always here to support your needs with reliable service and quick
          response.
        </p>
        <ul>
          <li className="wow fadeInUp">
            <div className="icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="content">
              <h5 className="title">Hotline</h5>
              <a href=""> +94 77 011 5710</a>
            </div>
          </li>
          <li className="wow fadeInUp" data-wow-delay="300ms">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info">
              <h5 className="title">Our Location</h5>
              <p>
                No. 30/3, Gangarama Road, <br />
                Thumbowila Piliyandala
              </p>
            </div>
          </li>
          <li className="wow fadeInUp" data-wow-delay="500ms">
            <div className="icon">
              <i className="fas fa-envelope-open-text"></i>
            </div>
            <div className="info">
              <h5 className="title">Official Email</h5>
              <a href="mailto:info@agrul.com.com"> info@emeecreations.com</a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
