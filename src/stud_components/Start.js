import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

export const Start = () => {
  const navigate=useNavigate();
     function navigatesubcard(){
      navigate('/subcard')
     }
  return (

    <div className='startpage'>
    <div className="container">  
        <h2>Start Submission Process</h2>  
        <form>  
            <button type="submit" className="btn btn-primary" onClick={navigatesubcard}>Start</button> </form>  
    </div>        
    </div>     
  )
}
