import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [Click, setClick] = useState(false);

  const changeToogle = () => {
    setClick(!Click);
  };

  return (

    <div className="home__header">
      <div className="header__logo">
        <img alt="" src="assets/tblogo.jpg" />
      </div>
      <div className="header__nav">
        <Link className="header__p" to="/">
          <p>Home</p>
        </Link>
        <Link className="header__p" to="/events">
          <p>Events</p>
        </Link>
        <Link className="header__p" to="/register">
          <p>Register</p>
        </Link>
        <a className="header__p" href="https://gcesalem.edu.in/">
          <p>About GCE</p>
        </a>
        <Link className="header__p" to="/memories">
          <p>Memories</p>
        </Link>
        <Link className="header__p" to="/contact">
          <p>Contact</p>
        </Link>
        <img
          onClick={changeToogle}
          className="nav__menu"
          alt=""
          src="assets/menu.png"
        />
      </div>

      {Click ? (
        <div className="toggle">
          <Link style={{ textDecoration: "none" }} className="header__t" to="/">
            <p>Home</p>
          </Link>
          <Link style={{ textDecoration: "none" }} className="header__t" to="/events">
            <p>Events</p>
          </Link>
          <Link style={{ textDecoration: "none" }} className="header__t" to="/register">
            <p>Register</p>
          </Link>
          <a style={{ textDecoration: "none" }} className="header__t" href="https://gcesalem.edu.in/">
            <p>About GCE</p>
          </a>
          <Link style={{ textDecoration: "none" }} className="header__t" to="/memories">
            <p>Memories</p>
          </Link>
          <Link style={{ textDecoration: "none" }} className="header__t" to="/contact">
            <p>Contact</p>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
