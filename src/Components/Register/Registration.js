import React, { useState } from "react";
import "./Registration.css";
import { initializeApp } from "firebase/app";
import { collection,addDoc } from "firebase/firestore/lite";
import { getFirestore } from "firebase/firestore/lite";

function Registration() {

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [College, setCollege] = useState("");
  const [Department, setDepartment] = useState("");
  const [Year, setYear] = useState("");
  const [Event, setEvent] = useState("");

  const firebaseConfig = {
    apiKey: "AIzaSyCvh298NyoIYRVUXv9OsFsJXm6BxEt67ak",
    authDomain: "technoblaze-cac79.firebaseapp.com",
    projectId: "technoblaze-cac79",
    storageBucket: "technoblaze-cac79.appspot.com",
    messagingSenderId: "826572779613",
    appId: "1:826572779613:web:ea3ffa1322949b172f9db4",
    measurementId: "G-BQPEX3VT9J",
  };

  const app = initializeApp(firebaseConfig);
  const db=getFirestore(app);

  const postIt=()=>{
   if(Email.includes("@gmail.com")){
    if(Name!=="" && Email!=="" &&Phone!=="" &&College!=="" &&Department!=="" &&Year!=="" &&Event!=="" ){
      sendIt();
    }else{
        alert("Some datas are missing")
    }
   }else{
     alert("Enter valid email id")
   }
  }

  const sendIt=async()=>{
    await addDoc(collection(db,"technoblaze"),{
      college:College,
      department:Department,
      email:Email,
      events:Event,
      name:Name,
      phone:Phone,
      year:Year
    }).then(function(res){
      alert("Data is sucessfully added")
    }).catch(function(err){
      console.log(err)
      alert("Data can not be stored")
    })
  }

  return (
    <div className="registration">
      <div className="register__background">
        <div className="register__card">
          <p>Register</p>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email"
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="Enter phone Number"
          />
          <input
            onChange={(e) => setCollege(e.target.value)}
            type="text"
            placeholder="Enter College"
          />
          <input
            onChange={(e) => setDepartment(e.target.value)}
            type="text"
            placeholder="Enter Department"
          />
          <input
            onChange={(e) => setYear(e.target.value)}
            type="text"
            placeholder="Enter Year"
          />
          <input
            onChange={(e) => setEvent(e.target.value)}
            type="text"
            placeholder="Enter Events"
          />
          <span>( Events may Technical,Non-Technical,Project,PPT )</span>
          <div className="radio">
            <p>Accommodation</p>
            <div className="radio1">
              <input name="accommodation" type="radio" />
              <label>Yes</label>
            </div>
            <div className="radio2">
              <input name="accommodation" type="radio" />
              <label>No</label>
            </div>
          </div>
          <h4 onClick={postIt}>Submit</h4>
        </div>
        <p className="pay__amount" style={{color:"white"}}>Spot Payment : <span> 250rs</span></p>
      </div>
    </div>
  );
}

export default Registration;
