import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";

function home() {
  return (
    <div className="home">
      {/* header */}
      <Header />

      {/* body */}

      <div className="home__info" style={{ color: "white" }}>
        <h4>GOVERNMENT COLLEGE OF ENGINEERING, SALEM-11.</h4>
        <h5 className="">DEPARTMENT OF CIVIL ENGINEERING</h5>
        <div className="info__logos">
          <img
            // className="remove"
            alt=""
            src="assets/cilogo.png"
            style={{ height: "150px", width: "150px" }}
          />
          <div className="info__button">
            <p>TECHNOBLAZE 22.0</p>
            <button>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/register"
              >
                Register Now
              </Link>
            </button>
          </div>
          <img
            className="remove"
            alt=""
            src="assets/gcesalem.png"
            style={{ height: "170px", width: "170px" }}
          />
        </div>
        <p>
          Registeration Ends On <span>19th April</span>
        </p>
      </div>

      {/* TECHNOBLAZE */}

      <div className="technoblaze">
        <div className="technoblaze__title">
          <p>TECHNOBLAZE 22.0</p>
        </div>
        <p>
          Technoblaze 22.0 is an inter college technical and non- technical
          carnival which is organised by the Society for the Advancement of
          Civil Engineering of Government College of Engineering, Salem. It
          takes you on a complete ride to technical extravaganza. It provides
          the perfect platform to expose the technical acumen and compete with
          peers from various institutes. Above all synergy serves well in
          synchronizing the energy of electrical engineers to light up the
          world. The destined date is April 22. We invite the students from
          various colleges to expose their skills.
        </p>
      </div>

      {/* EVENTS */}
      <div className="technical">
        <div className="technical__title">
          <p>Technical</p>
          <div className="technical__list">
            <Cards name={"Paper Presentation"} url={"assets/pp1.jpg"} />
            <Cards name={"Potential Professer"} url={"assets/pp.jpg"} />
            <Cards name={"Pro Analysis"} url={"assets/pa.jpg"} />
            <Cards name={"BIS hacker"} url={"assets/bh.jpg"} />
            <Cards name={"The last surveyor"} url={"assets/ls.jpg"} />
            <Cards name={"Locality Boss"} url={"assets/lb.jpg"} />
            <Cards name={"Envision Enforcer"} url={"assets/ee.jpg"} />
          </div>
        </div>
      </div>

      <div className="nontechnical">
        <div className="nontechnical__title">
          <p>Non-Technical</p>
        </div>
        <div className="nontechnical__data">
          <Cards name={"Photography"} url={"assets/pc.jpg"} />
          <Cards name={"Meme Creation"} url={"assets/mc.jpg"} />
          <Cards name={"Fun Events"} url={"assets/fe.jpg"} />
        </div>
      </div>

      {/* footer */}

      <Footer />
    </div>
  );
}

export default home;
