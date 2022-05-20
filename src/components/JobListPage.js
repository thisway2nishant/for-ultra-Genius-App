import React from "react";

export default function JobListPage() {
  return (
    <div>
      <section style={{ backgroundColor: "#5792ba", height: "fit-content" }}>
        <div className="container" style={{ paddingTop: "7rem" }}>
          <span
            style={{
              color: "rgb(33 37 41)",
              fontFamily: "Josefin Sans, sans-serif",
              fontWeight: "700",
              fontSize: "3rem",
            }}
          >
            Find Your Next Dream Remote Job
          </span>
        </div>
        <div
          className="container"
          style={{ paddingBottom: "4em", paddingTop: "2em" }}
        >
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for FrontEnd Developer, Back End Developer..etc."
              aria-label="Search"
            />
            <button className="btn btn-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </section>
      <section
        style={{ backgroundColor: "rgb(87 186 177)", height: "fitContent" }}
      >
        <div className="container" style={{ padding: "2rem" }}>
          <div className="container">
            <h2
              style={{
                fontFamily: "Josefin Sans, sans-serif",
                marginBottom: "1rem",
              }}
            >
              Current Openings
            </h2>
          </div>
          <div className="card " style={{ margin: "2rem" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <div>
                  <img
                    src="./images/ultraGenius-logo.png"
                    className="img-fluid rounded-start"
                    alt="..."
                    style={{}}
                  />
                </div>
                <div style={{ marginTop: "4rem" }}>
                  <a
                    className="btn btn-outline-dark"
                    href="/"
                    target={"_blank"}
                    style={{ margin: "0rem 3rem 0rem 1rem" }}
                  >
                    View Details
                  </a>
                  <a
                    className="btn btn-outline-dark"
                    href="/"
                    target={"_blank"}
                  >
                    Save for Later
                  </a>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: "left" }}>
                    Job Title - Company Name
                  </h5>
                  <div className="container" style={{ textAlign: "left" }}>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Tech
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Tech
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Tech
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Secondary
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Secondary
                    </span>
                  </div>
                  <div className="container my-2">
                    <p className="card-text" style={{ textAlign: "left" }}>
                      Job Description:This is a wider card with supporting text
                      below as a natural lead-in to additional content. This
                      content is a little bit longer.This is a wider card with
                      supporting text below as a natural lead-in to additional
                      content. This content is a little bit longer.This is a
                      wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit
                      longer.
                    </p>
                  </div>
                  <div className="container">
                    <p className="card-text" style={{ textAlign: "left" }}>
                      <small className="text-muted mx-2">
                        <strong>Salary:</strong>10000-40000
                      </small>
                      <small className="text-muted mx-2">
                        <strong>Type:</strong>Permanent
                      </small>
                      <small className="text-muted mx-2">
                        <strong>Location:</strong>Remote
                      </small>
                      <small className="text-muted mx-2">
                        <strong>Category:</strong>Back End Developer
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card " style={{ margin: "2rem" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <div>
                  <img
                    src="./images/ultraGenius-logo.png"
                    className="img-fluid rounded-start"
                    alt="..."
                    style={{}}
                  />
                </div>
                <div style={{ marginTop: "4rem" }}>
                  <a
                    className="btn btn-outline-dark"
                    href="/"
                    target={"_blank"}
                    style={{ margin: "0rem 3rem 0rem 1rem" }}
                  >
                    View Details
                  </a>
                  <a
                    className="btn btn-outline-dark"
                    href="/"
                    target={"_blank"}
                  >
                    Save for Later
                  </a>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: "left" }}>
                    Job Title - Company Name
                  </h5>
                  <div className="container" style={{ textAlign: "left" }}>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Tech
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Tech
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Tech
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Secondary
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Secondary
                    </span>
                  </div>
                  <div className="container my-2">
                    <p className="card-text" style={{ textAlign: "left" }}>
                      Job Description:This is a wider card with supporting text
                      below as a natural lead-in to additional content. This
                      content is a little bit longer.This is a wider card with
                      supporting text below as a natural lead-in to additional
                      content. This content is a little bit longer.This is a
                      wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit
                      longer.
                    </p>
                  </div>
                  <div className="container">
                    <p className="card-text" style={{ textAlign: "left" }}>
                      <small className="text-muted mx-2">
                        <strong>Salary:</strong>10000-40000
                      </small>
                      <small className="text-muted mx-2">
                        <strong>Type:</strong>Permanent
                      </small>
                      <small className="text-muted mx-2">
                        <strong>Location:</strong>Remote
                      </small>
                      <small className="text-muted mx-2">
                        <strong>Category:</strong>Back End Developer
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card " style={{ margin: "2rem" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <div>
                  <img
                    src="./images/ultraGenius-logo.png"
                    className="img-fluid rounded-start"
                    alt="..."
                    style={{}}
                  />
                </div>
                <div style={{ marginTop: "4rem" }}>
                  <a
                    className="btn btn-outline-dark"
                    href="/"
                    target={"_blank"}
                    style={{ margin: "0rem 3rem 0rem 1rem" }}
                  >
                    View Details
                  </a>
                  <a
                    className="btn btn-outline-dark"
                    href="/"
                    target={"_blank"}
                  >
                    Save for Later
                  </a>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: "left" }}>
                    Job Title - Company Name
                  </h5>
                  <div className="container" style={{ textAlign: "left" }}>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Tech
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Tech
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Tech
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Secondary
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Secondary
                    </span>
                  </div>
                  <div className="container my-2">
                    <p className="card-text" style={{ textAlign: "left" }}>
                      Job Description:This is a wider card with supporting text
                      below as a natural lead-in to additional content. This
                      content is a little bit longer.This is a wider card with
                      supporting text below as a natural lead-in to additional
                      content. This content is a little bit longer.This is a
                      wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit
                      longer.
                    </p>
                  </div>
                  <div className="container">
                    <p className="card-text" style={{ textAlign: "left" }}>
                      <small className="text-muted mx-2">
                        <strong>Salary:</strong>10000-40000
                      </small>
                      <small className="text-muted mx-2">
                        <strong>Type:</strong>Permanent
                      </small>
                      <small className="text-muted mx-2">
                        <strong>Location:</strong>Remote
                      </small>
                      <small className="text-muted mx-2">
                        <strong>Category:</strong>Back End Developer
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card " style={{ margin: "2rem" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <div>
                  <img
                    src="./images/ultraGenius-logo.png"
                    className="img-fluid rounded-start"
                    alt="..."
                    style={{}}
                  />
                </div>
                <div style={{ marginTop: "4rem" }}>
                  <a
                    className="btn btn-outline-dark"
                    href="/"
                    target={"_blank"}
                    style={{ margin: "0rem 3rem 0rem 1rem" }}
                  >
                    View Details
                  </a>
                  <a
                    className="btn btn-outline-dark"
                    href="/"
                    target={"_blank"}
                  >
                    Save for Later
                  </a>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: "left" }}>
                    Job Title - Company Name
                  </h5>
                  <div className="container" style={{ textAlign: "left" }}>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Tech
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Tech
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Tech
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Secondary
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Secondary
                    </span>
                  </div>
                  <div className="container my-2">
                    <p className="card-text" style={{ textAlign: "left" }}>
                      Job Description:This is a wider card with supporting text
                      below as a natural lead-in to additional content. This
                      content is a little bit longer.This is a wider card with
                      supporting text below as a natural lead-in to additional
                      content. This content is a little bit longer.This is a
                      wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit
                      longer.
                    </p>
                  </div>
                  <div className="container">
                    <p className="card-text" style={{ textAlign: "left" }}>
                      <small className="text-muted mx-2">
                        <strong>Salary:</strong>10000-40000
                      </small>
                      <small className="text-muted mx-2">
                        <strong>Type:</strong>Permanent
                      </small>
                      <small className="text-muted mx-2">
                        <strong>Location:</strong>Remote
                      </small>
                      <small className="text-muted mx-2">
                        <strong>Category:</strong>Back End Developer
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card " style={{ margin: "2rem" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <div>
                  <img
                    src="./images/ultraGenius-logo.png"
                    className="img-fluid rounded-start"
                    alt="..."
                    style={{}}
                  />
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <a
                    className="btn btn-outline-dark"
                    href="/"
                    target={"_blank"}
                    style={{ margin: "0rem 3rem 0rem 1rem" }}
                  >
                    View Details
                  </a>
                  <a
                    className="btn btn-outline-dark"
                    href="/"
                    target={"_blank"}
                  >
                    Apply Now
                  </a>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: "left" }}>
                    Job Title - Company Name
                  </h5>
                  <div className="container" style={{ textAlign: "left" }}>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Tech
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Tech
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Tech
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Secondary
                    </span>
                    <span className="badge rounded-pill bg-secondary mx-1">
                      Secondary
                    </span>
                  </div>
                  <div className="container my-2">
                    <p className="card-text" style={{ textAlign: "left" }}>
                      Job Description:This is a wider card with supporting text
                      below as a natural lead-in to additional content. This
                      content is a little bit longer.This is a wider card with
                      supporting text below as a natural lead-in to additional
                      content. This content is a little bit longer.This is a
                      wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit
                      longer.
                    </p>
                  </div>
                  <div className="container">
                    <p className="card-text" style={{ textAlign: "left" }}>
                      <small className="text-muted mx-2">
                        <strong>Salary:</strong>10000-40000
                      </small>
                      <small className="text-muted mx-2">
                        <strong>Type:</strong>Permanent
                      </small>
                      <small className="text-muted mx-2">
                        <strong>Location:</strong>Remote
                      </small>
                      <small className="text-muted mx-2">
                        <strong>Category:</strong>Back End Developer
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-dark">&lt; Previous</button>
            <p>10 More to Go</p>
            <button className="btn btn-dark">Next &gt;</button>
          </div>
        </div>
      </section>
    </div>
  );
}
