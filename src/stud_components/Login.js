import React from 'react'
import './Login.css';
export const Login = () => {
  
  return (
    <div className='Loginpage'>
    <div className="container">  
        <h2>Online Submission SYstem</h2>  
        <form>  
            <div className="form-group"> <label for="email">User Name</label>  
            <input type="email" className="form-control" id="email" placeholder="Enter email"/> </div>  
            <div className="form-group"> <label for="pwd">Password</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password"/> </div>  
            <div className="checkbox"> 
          </div> <button type="submit" className="btn btn-primary">Submit</button> </form>  
    </div>        
    </div>                                                         
  )
}
