import React from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../download.png'

export const Subjectwise = () => {
  const navigate=useNavigate();
     function navigaterequest(){
      navigate('/request')
     }
  return (    <div>
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
<div className='divisions'>
<div class="card text-center mb-3 w-50">
<div class="card-body">
  <h5 class="card-title">Subject1</h5>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <button class="btn btn-primary" onClick={navigaterequest}>Go somewhere</button>
</div>
</div><div class="card text-center mb-3 w-50">
<div class="card-body">
  <h5 class="card-title">subject</h5>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <button  class="btn btn-primary" onClick={navigaterequest}>Go somewhere</button>
</div>
</div>
</div>
  </div> );
};
