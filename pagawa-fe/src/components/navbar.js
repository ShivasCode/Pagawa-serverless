"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./navbar.module.css";
import Script from "next/script";

import { useRouter } from "next/navigation";

export default function navbar() {
  const router = useRouter();

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container p-4">
          <a className="navbar-brand fs-2 textPrimary fw-bold" href="#">
            Pagawa
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle textPrimary fw-bold"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Browse Job
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="mb-2 mb-lg-0 me-3 textPrimary fw-bold">
              <a onClick={() => router.push("/login")}>Become a freelancer</a>
            </div>
            <div className="mb-2 mb-lg-0 me-3 textPrimary fw-bold">
              <a>Sign in</a>
            </div>
            <div>
              <button className="btn btn-primary px-lg-4 py-lg-2 fw-bold ">
                Join
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      />
    </>
  );
}
