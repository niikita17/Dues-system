import React from "react";
import { useNavigate } from 'react-router-dom';

export const Subjectwise = () => {
  const navigate=useNavigate();
     function navigatrequest(){
      navigate('/request')
     }
  return (
    <div className='page'>
    <div className='conatiner'>
  <div class="card text-center">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">Subject2</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary" onClick={navigatrequest}>Go </a>
    </div>
    {/* <div class="card-footer text-body-secondary">
      2 days ago
    </div> */}
  </div>
  <div class="card text-center">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">Subject2</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary" onClick={navigatrequest}>Go </a>
    </div>
    {/* <div class="card-footer text-body-secondary">
      2 days ago
    </div> */}
  </div>
  </div>
      </div>
  );
};
