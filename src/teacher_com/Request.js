import React from "react";
import "./teach_comp.css";
import { useNavigate } from 'react-router-dom';
import logo from '../download.png'

export const Request = (props) => {
  // const navigate=useNavigate();
  //    function navigatestart(){
  //     navigate('/start')
  //    }
  return (
    <div>
    <nav class="navbar ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src={logo} alt="" width="50" height="34"/>
      </a>
      <form class="d-flex">
       
        <button class="btn btn-outline-success" type="submit">Logout</button>
      </form>
    </div>
  </nav>
  <div className="page">
    <br>
    </br>
   <div className="card w-75 allrequest">
    <div class="card-header">
    All request
  </div>
    <ul class="list-group list-group-flush">
    {props.students.map((student)=>{
        return(

          <li class="list-group-item"> 
          <label className="name">{student.name}</label>
          <button className="btn b" >approved</button>
          </li>
        )
         })}</ul>
   </div></div></div>
  );
};
