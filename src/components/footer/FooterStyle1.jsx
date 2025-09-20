import Image from "next/image";
import React from "react";
import shape7 from "@/assets/img/shape/7.png";
import shape9 from "@/assets/img/shape/9.png";
import logoLight from "@/assets/img/logo.png";
import Link from "next/link";
import SocialShare from "../utilities/SocialShare";
import FooterNewsLetter from "../form/FooterNewsLetter";

const FooterStyle1 = ({ shape, shapeClass, logo, formStyle }) => {
  return (
    <>
      <footer className="bg-dark text-light">
        <div className="footer-shape">
          <div className={`item ${shapeClass}`}>
            {shape ? (
              <Image src={shape} alt="Shape" />
            ) : (
              <Image src={shape7} alt="Shape" />
            )}
          </div>
          <div className="item">
            <Image src={shape9} alt="Shape" />
          </div>
        </div>
        <div className="container">
          <div className="f-items relative pt-70 pb-120 pt-xs-0 pb-xs-50">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15">
                <div className="f-item about">
                  <Link href="/">
                    {logo ? (
                      <Image className="logo" src={logo} alt="Logo" />
                    ) : (
                      <Image className="logo" src={logoLight} alt="Logo" />
                    )}
                  </Link>
                  <p>
                    Building trust since 1983 with creativity, quality, and
                    lasting partnerships.
                  </p>
                  <div className="opening-hours">
                    <h5>Opening Hours</h5>
                    <ul>
                      <li>
                        <div className="working-day">Monday – Sunday:</div>
                        <div className="marker"></div>
                        <div className="working-hour">8am – 6pm</div>
                      </li>
                      <li>
                        <div className="working-day">Sunday:</div>
                        <div className="marker"></div>
                        <div className="working-hour">Off Day</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-item">
                <div className="f-item link">
                  <h4 className="widget-title">Our Company</h4>
                  <ul>
                    <li>
                      <Link href="/about-us">Compnay Profile</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Help Center</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 footer-item">
                <div className="f-item link">
                  <h4 className="widget-title">Our Services</h4>
                  <div className="row">
                    <div className="col-6">
                      <ul>
                        <li>
                          <Link href="/services-details/1">
                            Interior Designers
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details/2">
                            Interior Decorating Contractors
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details/3">
                            Architectural Aluminum
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details/4">Iron Structure</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul>
                        <li>
                          <Link href="/services-details/5">
                            Composite Panel Fabricators
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details/6">
                            General Engineering Contractors
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details/7">
                            All Kinds of Sign Board Manufacturers
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-4 col-md-6 footer-item">
                <h4 className="widget-title">Newsletter</h4>
                <p>
                  Join our subscribers list to get the latest <br /> news and
                  special offers.
                </p>
                <div className={`f-item newsletter ${formStyle}`}>
                  <FooterNewsLetter />
                </div>
                <ul className="footer-social">
                  <SocialShare />
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p>
                  &copy; Copyright {new Date().getFullYear()}. All Rights
                  Reserved by{" "}
                  <a href="https://emeecreations.com" target="_blank">
                    emeecreations
                  </a>
                </p>
              </div>
              <div className="col-lg-6 text-end">
                <ul>
                  <li>
                    <Link href="/services-2">Service</Link>
                  </li>
                  <li>
                    <Link href="/about-us">Privacy</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Support</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterStyle1;
