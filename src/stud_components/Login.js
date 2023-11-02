// import React from 'react'
// import './Login.css';
// import { useNavigate } from 'react-router-dom';
// export const Login = (props) => {
//     const navigate=useNavigate();

//      function navigatestart(){
      
//       props.user?navigate('/start'):navigate('/yearwise')
//      }
//   return (
//     <div className='wrapper'>
     
//     <div className='Loginpage'>
//     <ul class="circles">
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//     </ul>
//     <div className="containers">  
//         <h2>Online Submission System</h2>  
//         <form>  
//             <div className="form-group"> <label for="email">User Name</label>  
//             <input type="email" className="form-control" id="email" placeholder="Enter email" /> </div>  
//             <div className="form-group"> <label for="pwd">Password</label>
//             <input type="password" className="form-control" id="pwd" placeholder="Enter password"/> </div>  
            
//             <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={navigatestart}>Submit</button> </form>  
//     </div>        
//     </div>          </div>                                               
//   )
// }
import React, { useState } from 'react'
import './Login.css';
import logo from '../download.png'
import { useNavigate } from 'react-router-dom';

export const Login  = (props) => {
//  use history
  // const history= useHisory();

// login credentials
  const [username,setUsername]=useState("");
  const[password,setPassword]=useState("");

 //check credentials



   const navigate=useNavigate();

   function navigatestart(){
    
    props.user?navigate('/start'):navigate('/yearwise')
   }
  return (
    <div className='Loginpage'>
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <div className="container login-form"> 
    <div >
      <img className="collage_logo" src={logo} alt='DIEMS'/>
      </div> 
        <h3 className='lessMargintopbottom'>Online Submission System</h3>  
        <h3 className='lessMargintopbottom'>Login</h3>

        <form>  
        <div className='d-flex justify-content-end'>
        <select class="form-select form-select-sm mt-3 ">
            <option>Student</option>
            <option>Administration</option>          
         </select>
       </div>
            <div className="form-group"> 
            <label for="username">Username</label>  
            <input type="text " onChange={(e)=>setUsername(e.target.value)} className="form-control" id="username" placeholder="Enter email"/> </div>  
            <div className="form-group"> 
            <label for="pwd">Password</label>
            <input type="password" className="form-control"onChange={(e)=>setPassword(e.target.value)} id="pwd" placeholder="Enter password"/> </div>  
            <div className="checkbox"> 
          </div> <button type="submit" className="btn btn-primary" onClick={navigatestart}>Submit</button> </form>  
    </div> 
      
    </div>                                                         
  )
  }