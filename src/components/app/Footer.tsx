import React from "react";
import { Link } from "react-router-dom";

function Footer(): React.ReactElement {
  return (
    <footer className="footer mt-auto py-5 bg-light">
      <div className="container py-3">
        <div className="row">
          <div className="col-4">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              t9<span className="text-warning fw-bold mx-1">:</span>pm
            </a>
            <p className="text-muted small">2021</p>
          </div>
          <div className="col-2"></div>
          <div className="col-3">
            <h6>Links</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-1">
                <Link to="/about" className="nav-link p-0 text-muted">
                  about
                </Link>
              </li>
              <li className="nav-item mb-1">
                <Link to="/rules" className="nav-link p-0 text-muted">
                  rules
                </Link>
              </li>
              <li className="nav-item mb-1">
                <Link to="/api" className="nav-link p-0 text-muted">
                  api
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6>Actions</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-1">
                <Link to="/login" className="nav-link p-0 text-muted">
                  login
                </Link>
              </li>
              <li className="nav-item mb-1">
                <Link to="/registration" className="nav-link p-0 text-muted">
                  registration
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
