import React from 'react'
import '../stud_components/Login.css'
import logo from '../download.png'
import { useNavigate } from 'react-router-dom';

export const Submissionrequest = () => {
  let sname="Prerna";
  let srollno=46063;
  let sclass="B.tech A";

  return (
    <div className='subcardpage'>
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
      <div className="d-flex justify-content-center"> 
         <h2> Submission Card</h2>  
      </div>   
      <div className="row d-flex justify-content-center">    
          <div className='col-5 block'>
            <div className='container Subcard '>   
              <h4 className="mb-2 row d-flex justify-content-center  ">Name:{sname}</h4>
              <p className=" row d-flex justify-content-center text-muted mb-4">Roll No:{srollno}<span class="mx-2">|</span>Class:{sclass}</p>
            </div>
            <div className='container Subcard  block'>
            <form>  
            <table class="table">
                        <thead>
                            <tr>
                               
                                <th scope="col">section</th>
                                <th scope="col">Dues</th>
                                <th scope="col">status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">HOD</th>
                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <th scope="row">Student Section</th>
                                <td colspan="2"></td>

                            </tr>
                            
                        </tbody>
                    </table>

          </form>
          </div>
          {/* <div className='container Subcard row'>
            <form>
         
          </form>
          </div> */}
          
          </div> 
          <div className='container Subcard col-5 block'>
            <form>  
            <table class="table">
                        <thead>
                            <tr>
                               
                                <th scope="col">section</th>
                                <th scope="col">Dues</th>
                                <th scope="col">status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">HOD</th>
                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <th scope="row">Student Section</th>
                                <td colspan="2"></td>

                            </tr>
                            <tr>
                                <th scope="row">Account Section</th>
                                <td colspan="2"></td>

                            </tr>
                            <tr>
                                <th scope="row">Library</th>
                                <td colspan="2"></td>

                            </tr>
                            <tr>
                                <th scope="row">Extracurricular activities</th>
                                <td colspan="2"></td>

                            </tr>
                        </tbody>
                    </table>

          
             </form>  
             
             
         </div>
         
         
        
      
      </div> 
      <div className="row d-flex justify-content-center">    
          <div className='col-5 block'>
           
            <div className='container  lessMargin Subcard  block'>
            <form>  
            <table class="table">
                        
                        <tbody>
                            <tr>
                                <th scope="row">HOD</th>
                                <td colspan="2"></td>
                            </tr>
                          
                            
                        </tbody>
                    </table>

          </form>
          </div>
         
          
          </div> 
          <div className='container lessMargin Subcard col-5 block'>
            <form>  
            <table class="table">
            <tbody>
                            <tr>
                                <th scope="row">Director</th>
                                <td colspan="2"></td>
                            </tr>
                          
                            
                        </tbody>
                        
                    </table>

          
             </form>  
             
             
         </div>
         
         
        
      
      </div> 
      
      
      <form  className='container moreMargin'>  

        <button type="submit" className="btn btn-primary" >Start the Process</button> </form>         
    </div>
  )
}
