import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';  
import logo from '../download.png'


export const StudDefaulter = () => {
   
        const navigate=useNavigate();
           function navigateNo_Dues(){
            navigate('/no_dues')
           }
          let sname="Prerna";
          let srollno=46063;
          let sclass="B.tech A";
          let defaulter=67;
      
         
       
        return (
          <div className='subcardpage'>
            <nav class="navbar ">
             <div class="container-fluid">
               <a class="navbar-brand" href="#">
                 <img src={logo} alt="" width="60" height="34"/>
               </a>
               <form class="d-flex">
                 <button class="btn btn-outline-success" type="submit">Logout</button>
               </form>
             </div>
            </nav>
            <div className="d-flex justify-content-center"> 
               <h2>Defaulter</h2>  
            </div>   
            <div className="row d-flex justify-content-center">    
                <div className='col-7 block'>
                  <div className='container Subcard '>  
                    < form>
                    <h4 className="mb-2 row d-flex justify-content-center  ">Name:{sname}</h4>
                    <p className=" row d-flex justify-content-center text-muted mb-4">Roll No:{srollno}<span class="mx-2">|</span>Class:{sclass}</p>
                    <p className='row d-flex justify-content-center text-muted'>Defaulter:{defaulter}</p>
                    <div className='block d-flex justify-content-center'>
                      
                     <div className='container'><p>  <pre></pre><input className='pdf container d-flex justify-content-center' type="file" id="defaulter" name="defaulter"/></p></div>
                     
                     
      
                     </div>
                    <button type="submit" className="btn btn-primary" onClick={navigateNo_Dues} >Submit</button> 
                    </form>
                  </div>
                
                </div> 
                <div className='container Subcard col-3 block'>
                  
                  <h4>Instruction</h4>
                  <div className='container'>
                    <p  className='text-danger'>You are in Defaulter. So, To continue with No_Dues and Submission prosecc complete the follwoing steps </p>
      
                  <ol>
                    <li>
                      Download the <b>Defaulter Form</b> provied here, fill it without any mistakes.
                    </li>
                    <li>
                      Get <b>signature</b> of respective authority mentioned there.
                    </li>
                    <li>
                     <b>Uplode</b>  the pdf of filled defaulter form.
                    </li>
                    <li>After getting verified by class Teacher, you will be directed to No_Dues page.</li>
                  </ol>
                  </div>
                     
                   
               </div>
                
            
            </div> 
           
            
            
                   
          </div>      
        )
      }
