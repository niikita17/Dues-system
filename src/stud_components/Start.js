// import React from 'react'
// import './Login.css'
// import { useNavigate } from 'react-router-dom';

// export const Start = () => {
//   const navigate=useNavigate();
//      function navigateform(){
//       navigate('/noduesform')
//      }
//   return (

//     <div className='startpage'>
//     <div className="container">  
//         <h2>Start Submission Process</h2>  
//         <form>  
//             <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={navigateform}>Start</button> </form>  
//     </div>        
//     </div>     
//   )
// }
import logo from '../download.png'

import React from 'react'
import './Login.css'
import wave from '../Start-page-wave.svg'

import { useNavigate } from 'react-router-dom';

export const Start = (props) => {
  const navigate=useNavigate();
     function navigatesubcardornot(){
      if(props.defaulter) 
      navigate('/studdefaulter') 
      else
    navigate('/no-duesform')
     }
  return (

    <div className='startpage'>
     
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
    <div className="content row">  
        
        <form>  
          <h1><b>Deogiri Institute of Engineering and Management Studies</b></h1>
            <button type="submit" className="btn btn-primary" onClick={navigatesubcardornot}>Start the Process</button> </form>  
            
    </div>  
    <img src={wave}></img>
    </div>     
       
  )
}
