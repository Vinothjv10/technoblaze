import React from "react";
import "./Guide.css";

function Guide(props) {
  return (
    <div className="guide">
      <h5>{props.t}</h5>
      <p>
        {props.p1}
      </p>
      <div className="guide__data">
        <h5>GUIDELINES</h5>
        <p>	• Maximum number of participants in a team is: {props.p2}</p>
        <p>	• {props.p3}</p>
        <p>
        • {props.p4}
        </p>
      </div>
    </div>
  );
}

export default Guide;
