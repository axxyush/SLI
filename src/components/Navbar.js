import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // let location = useLocation();
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar ${
          sticky ? "navbar-dark" : ""
        } fixed-top navbar-expand-lg ${sticky ? "bg-dark" : "bg-transparent"} `}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            Auspex Medix
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }  `}
                  aria-current="page"
                  to="/"
                >
                  Team
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/course" ? "active" : ""
                }  `}
              >
                <Link className="nav-link" to="/">
                  News
                </Link>
              </li>

              <li
                className={`nav-item ${
                  location.pathname === "/contact" ? "active" : ""
                }  `}
              >
                <Link className="nav-link" to="/contact">
                  Research
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/about" ? "active" : ""
                }  `}
              >
                <a className="nav-link" href="/">
                  Products
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
