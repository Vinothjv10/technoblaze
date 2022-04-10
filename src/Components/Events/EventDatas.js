import React from "react";
import EventData from "./EventData";
import "./EventDatas.css";

function EventDatas() {
  return (
    <div className="eventdatas">
      <div className="event__tecdata">
        <p>Technical Events</p>
        <div className="technical__data">
          <EventData
            p={" create, improve and protect the environment in which we live"}
            name={"Potential Professer"}
            url={"assets/pp.jpg"}
          />
          <EventData
            p={"Bridge the gap with closed minds through careful dissection of ideas"}
            name={"Paper Presentation"}
            url={"assets/pp1.jpg"}
          />
          <EventData p={"The use of computer-based software to aid in design processes"} name={"Pro Analysis"} url={"assets/pa.jpg"} />
          <EventData p={"Responsible for creating, improving, and protecting our immediate environment."} name={"BIS hacker"} url={"assets/bh.jpg"} />
          <EventData p={"Collecting data from a predefined group of respondents to gain information"} name={"The last surveyor"} url={"assets/ls.jpg"} />
          <EventData p={"Planning, financing, and design, and continues until the asset is built and ready for use"} name={"Locality Boss"} url={"assets/lb.jpg"} />
          <EventData p={"Practitioners of engineering, are professionals who invent, design, analyze, build and test machines"} name={"Envision Enforcer"} url={"assets/ee.jpg"} />
        </div>
      </div>

      <div className="event__nontecdata">
        <p>Non Technical Events</p>
        <div className="nontechnical__data">
          <EventData p={"Photography is the art, application, and practice of creating durable images by recording light"} name={"Photography"} url={"assets/pc.jpg"} />
          <EventData p={"Avirally transmitted image embellished with text, usually sharing pointed commentary"} name={"Meme Creation"} url={"assets/mc.jpg"} />
          <EventData p={"Copy that aims to tell your potential attendees what will be happening at the event"} name={"Fun Events"} url={"assets/fe.jpg"} />
        </div>
      </div>
    </div>
  );
}

export default EventDatas;
