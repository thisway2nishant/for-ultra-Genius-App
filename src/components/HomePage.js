import React from "react";

export default function HomePage() {
  return (
    <div>
      <section style={{ backgroundColor: "#5792ba", height: "100vh" }}>
        <div className="container" style={{ paddingTop: "12rem" }}>
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
          style={{ paddingBottom: "8em", paddingTop: "2em" }}
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
      <section style={{backgroundColor: "rgb(87 186 177)", height: "fitContent" }}>
        <div className="row mx-4">
          <div className="col-sm-6" style={{margin: '8rem 0rem 8rem 0rem'}}>
            <div className="card" style={{border: '2px solid black', background: 'lightblue'}}>
              <div className="card-body">
                <h5 className="card-title" style={{fontFamily:'Odibee Sans, cursive', fontSize: '3rem'}}>I'm looking for Job</h5>
                <h6 className="card-subtitle">Open yourself to huge amount of opportunities. Apply with one click and Get Hired. Follow the steps below</h6>
                <hr></hr>
                <ul style={{textAlign: 'left'}}>
                  <li>Click on <strong>Join as Talent</strong> button below</li>
                  <li>After joinig, complete your profile with all the necessary details.</li>
                  <li>You are good to go and ready to apply.</li>
                  <li>Take Skill Assesments to increase your chances of getting hired.</li>
                </ul>
                <a href="/" className="btn btn-outline-primary" style={{marginTop: '1rem'}}>
                  <strong>Join as Talent</strong> 
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6" style={{margin: '8rem 0rem 8rem 0rem'}}>
            <div className="card" style={{border: '2px solid black', background: 'lightblue'}}>
              <div className="card-body">
                <h5 className="card-title" style={{fontFamily:'Odibee Sans, cursive', fontSize: '3rem'}}>I'm looking for Talent</h5>
                <h6 className="card-subtitle mb-2">Get the best talent out there. Post your Jobs. <em>Zero commission fees.</em>Follow the steps below.</h6>
                <hr></hr>
                <ul style={{textAlign: 'left'}}>
                  <li>Click on <strong>Join as Recruiter</strong> button below</li>
                  <li>After joining, fill the necessary details and complete your profile.</li>
                  <li>Post your jobs</li>
                  <li>Hore the talent you want.</li>
                </ul>
                <a href="/" className="btn btn-outline-primary" style={{marginTop: '1rem'}}>
                  <strong>Join as Recruiter</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
