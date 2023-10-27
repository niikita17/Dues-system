import React from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';
export const Login = (props) => {
    const navigate=useNavigate();

     function navigatestart(){
      
      props.user?navigate('/start'):navigate('/yearwise')
     }
  return (
    <div className='wrapper'>
     
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
    <div className="containers">  
        <h2>Online Submission System</h2>  
        <form>  
            <div className="form-group"> <label for="email">User Name</label>  
            <input type="email" className="form-control" id="email" placeholder="Enter email"/> </div>  
            <div className="form-group"> <label for="pwd">Password</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password"/> </div>  
            <div className="checkbox"> 
          </div> <button type="submit" className="btn btn-primary" onClick={navigatestart}>Submit</button> </form>  
    </div>        
    </div>          </div>                                               
  )
}
