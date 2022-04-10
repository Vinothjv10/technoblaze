import React from "react";
import "./ContactCard.css";

function ContactCard() {
  return (
    <div className="contactdetails">
      <div className="contactus">
        <h3>Contact Us</h3>
        <p>Any questions or remarks? Just write us a message!</p>
      </div>
      <div className="contactcard">
        <h3>Contact Information</h3>
        <h4>Student Co-Ordinator</h4>
        <div className="contact__phone">
          <img alt="" src="assets/phone.png" />
          <div className="sc1">
            <span>6374006612</span>
            <p>(M.Ganesh)</p>
          </div>
          <div className="sc1">
            <span>8098632860</span>
            <p>(M.Dinesh)</p>
          </div>
          <div className="sc1" style={{marginRight:"-12px"}}>
            <span>7339535750</span>
            <p>(R.Pravin)</p>
          </div>
        </div>
        <div className="contact__mail">
          <img alt="" src="assets/mail1.png" />
          <p>technoblaze22.0@gmail.com</p>
        </div>
        <div className="contact__location">
          <img alt="" src="assets/location.png" />
          <p>GCE, Salem-11.</p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
