import React from "react";

export default function UserNavbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="./images/ultraGenius-logo.png"
              alt="ultraGenius Logo"
              style={{ height: "50px" }}
            ></img>
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
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Jobs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Your Applications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Skill Assessment
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Profile
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      View Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Settings
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                     Invite a Friend
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <button className="btn btn-outline-success mx-3">Sign Out</button>
            <p className="text-light my-3">Logged in as</p>
            <span className="badge rounded-pill bg-secondary mx-1">
              thisway2nishant
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
