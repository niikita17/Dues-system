import React from 'react'
import './teach_comp.css'
import { useNavigate } from 'react-router-dom';
import logo from '../download.png'

export const Yearwise = () => {
  const navigate=useNavigate();
  function navigatedivision(){
   navigate('/divisionwise')
  }
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
<div className='yearwise'>
<div class='Allyears'>
<div className='yearcard'>
<div class="card-body ">
    <h5 class="card-title">First Year</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button class="btn btn-primary" onClick={navigatedivision}>Next</button>
  </div>
</div>
<div className='yearcard'>
<div class="card-body">
    <h5 class="card-title">Second Year</h5>
    <button  class="btn btn-primary">Next</button>
  </div>
</div>
</div>
<div class='Allyears'>
<div className='yearcard'>
<div class="card-body">
    <h5 class="card-title">Third year</h5>
    <button class="btn btn-primary">Next</button>
  </div>
</div>
<div className='yearcard'>
<div class="card-body">
    <h5 class="card-title text-center ">Final year</h5>
    <button class="btn btn-primary">Next</button>
  </div>
</div>
</div>
</div>
  </div>
  
  )
}
