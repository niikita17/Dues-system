import React from 'react'
import './teach_comp.css'
import { useNavigate } from 'react-router-dom';

export const Yearwise = () => {
  const navigate=useNavigate();
  function navigatedivision(){
   navigate('/divisionwise')
  }
  return (
    <div className='page'>
    <div className='conatiner'>
        <div className="card">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">Final Year</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button  className="btn btn-primary" onClick={navigatedivision}>Go</button>
  </div>
</div><div className="card">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">Third Year</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button href="#" className="btn btn-primary" onClick={navigatedivision}>Go</button>
  </div>
</div><div className="card">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">Second Year</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button href="#" className="btn btn-primary" onClick={navigatedivision}>Go</button>
  </div>
</div>
    </div></div>
  )
}
