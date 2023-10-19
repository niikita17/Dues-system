import React from 'react'
import './Login.css'
export const SubCard = (props) => {
    let value=props.library_status;
    const library=(prop)=>{
        return prop.value?"unclear":"unclear"
    }
  return (
    <div className='Loginpage'>
    <div className="container">  
        <h2> Submission Card</h2>  
        <form>  
        <div className="librarydue">
            <div className="subjectList">
              <label> library due</label>
              <div className="signature">{library(value)}</div>
            </div>
          </div>

          { props.library_status?
           <div> 
          <div className="subject-info">
            <div className="subjectList">
              <label>Subject1</label>
              <button className="btn">Request</button>
            </div>
            <div className="subjectList">
              <label>Subject2</label>
              <button className="btn">Request</button>
            </div>

            <div className="subjectList">
              <label>Subject2</label>
              <button className="btn">Request</button>
            </div>

            <div className="subjectList">
              <label>Subject2</label>
              <button className="btn">Request</button>
            </div>

            <div className="subjectList">
              <label>Subject2</label>
              <button className="btn">Request</button>
            </div></div>
            <br></br>
             <button type="submit" className="btn">Submit</button>
            </div> 
            : <div className="message"> <h3>complete libraray due first</h3></div>} 
             </form>  
    </div>        
    </div>      
  )
}
