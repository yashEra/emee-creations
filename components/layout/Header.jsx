import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const Header = ({ handleHidden }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={
          scroll
            ? "bg-transparent sticky-bar mt-4 stick"
            : "bg-transparent sticky-bar mt-4"
        }
      >
        <div className="container bg-transparent">
          <nav className="bg-transparent flex justify-between items-center py-3">
            <Link href="/" legacyBehavior>
              <a className="text-3xl font-semibold leading-none">
                <img
                  className="h-10"
                  src="/assets/imgs/logos/monst-logo.svg"
                  alt="Monst"
                />
              </a>
            </Link>
            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
              <li className="group relative pt-4 pb-4">
                <Link href="/" legacyBehavior>
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    Home
                  </a>
                </Link>
                {/* <ul className="drop-down-menu min-w-200">
                                    <li>
                                        <Link href="/" legacyBehavior>
                                            <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                                                Landing page 1
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-2" legacyBehavior>
                                            <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                                                Landing page 2
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-3" legacyBehavior>
                                            <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                                                Landing page 3
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-4" legacyBehavior>
                                            <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                                                Landing page 4
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-5" legacyBehavior>
                                            <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                                                Landing page 5
                                            </a>
                                        </Link>
                                    </li>
                                </ul> */}
              </li>
              <li className="group relative pt-4 pb-4">
                <Link href="/about" legacyBehavior>
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    About Us
                  </a>
                </Link>
                {/* <ul className="drop-down-menu min-w-200">
                  <li>
                    <Link href="/about" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        About Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Team
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonials" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Testimonials
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Pricing
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faqs" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Faqs
                      </a>
                    </Link>
                  </li>
                </ul> */}
              </li>
              <li className="group relative pt-4 pb-4 has-child">
                <Link href="#" legacyBehavior>
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    Services
                  </a>
                </Link>
                <ul className="drop-down-menu min-w-200">
                  <li>
                    <Link href="/web-development" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Web Development
                      </a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/team" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Team
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonials" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Testimonials
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Pricing
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faqs" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Faqs
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/404" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        404
                      </a>
                    </Link>
                  </li> */}
                </ul>
              </li>
              {/* <li className="group relative pt-4 pb-4 has-child">
                <Link href="#" legacyBehavior>
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    Company
                  </a>
                </Link>
                <ul className="drop-down-menu min-w-200">
                                    <li>
                                        <Link href="/portfolio" legacyBehavior>
                                            <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                                                Portfolio
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/team" legacyBehavior>
                                            <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                                                Team
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/testimonials" legacyBehavior>
                                            <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                                                Testimonials
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing" legacyBehavior>
                                            <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                                                Pricing
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faqs" legacyBehavior>
                                            <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                                                Faqs
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/404" legacyBehavior>
                                            <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                                                404
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
              </li> */}
              {/* <li className="group relative pt-4 pb-4 has-child">
                                <Link href="#" legacyBehavior>
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Blog
                                    </a>
                                </Link>
                                <ul className="drop-down-menu min-w-200">
                                    <li>
                                        <Link href="/blog" legacyBehavior>
                                            <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                                                Category 1
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-2" legacyBehavior>
                                            <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                                                Category 2
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-single" legacyBehavior>
                                            <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                                                Single 1
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-single-2" legacyBehavior>
                                            <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                                                Single 2
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}
              <li className="pt-4 pb-4">
                <Link href="/contact" legacyBehavior>
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
            <div className="hidden lg:block">
              {/* <Link href="/login" legacyBehavior>
                <a className="btn-accent hover-up-2">Log In</a>
              </Link> */}
              
              <Link href="#" legacyBehavior>
                <a className="btn-primary hover-up-2">Get a Quote</a>
              </Link>
            </div>
            <div className="lg:hidden">
              <button
                className="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300"
                onClick={handleHidden}
              >
                <svg
                  className="fill-current h-4 w-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
