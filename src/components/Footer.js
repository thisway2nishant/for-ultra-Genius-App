import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-dark text-light">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="/" className="me-4 text-reset">
              
            </a>
            <a href="/" className="me-4 text-reset">
             
            </a>
            <a href="/" className="me-4 text-reset">
              
            </a>
            <a href="/" className="me-4 text-reset">
              
            </a>
            <a href="/" className="me-4 text-reset">
              
            </a>
            <a href="/" className="me-4 text-reset">
              
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>ultraGenius
                </h6>
                <p>
                  We are a platform where talent and recruiters meet from all over the globe.
                  We highly promote remote work and all our job opportunities here are mostly remote.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Talent</h6>
                <p>
                  <a href="/" className="text-reset">
                    Join as Talent
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Sign in
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    See Latest Jobs
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Take Skill Assesments
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Recruiters</h6>
                <p>
                  <a href="/" className="text-reset">
                    Join as Recruiter
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Sign in
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Post a Job
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    See Previous Jobs
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i>
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i>
                </p>
                <p>
                  <i className="fas fa-print me-3"></i>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="/">
             ultraGenius
          </a>
        </div>
      </footer>
    </div>
  );
}
