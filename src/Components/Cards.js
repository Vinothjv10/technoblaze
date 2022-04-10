import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <Link to="/register" style={{textDecoration:"none",color:"black"}} className="cards">
      <div className="cards__img">
        <img
          alt=""
          src={props.url}
        />
      </div>
      <p>{props.name}</p>
    </Link>
  );
}

export default Cards;
