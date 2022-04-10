import React from "react";
import { Link,useHistory } from "react-router-dom";
import "./EventData.css";

function EventData(props) {
  const history=useHistory();

  const toGuide=()=>{
    history.push("/guidelines");
  }
  return (
    <div className="eventdata">
      <div className="data__body">
        <img alt="" src={props.url} />
        <h5>{props.name}</h5>
        <p>{props.p}</p>
      </div>
      <div className="data__footer">
        <h5 onClick={toGuide}>Guideliness</h5>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <p className="participate">Participate</p>
        </Link>
      </div>
    </div>
  );
}

export default EventData;
