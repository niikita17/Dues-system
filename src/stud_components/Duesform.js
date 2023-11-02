// import React from 'react'

// export const Duesform = () => {
//      let classteacher=false;
//      let librarteacher=false;
//      let extracircular=false;
 
// return (
//     <div className='nodues-page'>
//        <div className='nodues-form'>
   
//        <form>
//           <form>
//            <h1>Nodues form</h1>
//   <div class="input-group mb-3">
//  <input type="text" class="form-control" placeholder="class teacher" aria-label="Recipient's username" aria-describedby="button-addon2"/>
//  <div className="btn btn-outline-secondary">signature</div>

//  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
// </div>
// </form> 

// <form  > 
// <div class="input-group mb-3"  >
//  <input type="text" class="form-control" placeholder="library teacher" aria-label="Recipient's username" aria-describedby="button-addon2"/>
//  <div className="btn btn-outline-secondary">signature</div>

//  <button class="btn btn-outline-secondary" type="button" id="button-addon2" disabled={!classteacher}>Button</button>
// </div>
// </form> 
// <form >
// <div class="input-group mb-3">
//  <input type="text" class="form-control" placeholder="extracircular activity teacher" aria-label="Recipient's username" aria-describedby="button-addon2"/>
//  <div className="btn btn-outline-secondary">signature</div>

//  <button class="btn btn-outline-secondary" type="button" id="button-addon2" disabled={!librarteacher}>Button</button>
// </div>
// </form> 
// <form>
// <div class="input-group mb-3">
//  <input type="text" class="form-control" placeholder="Hod sir" aria-label="Recipient's username" aria-describedby="button-addon2"/>
//  <div className="btn btn-outline-secondary">signature</div>

//  <button class="btn btn-outline-secondary" type="button" id="button-addon2" disabled={!extracircular}>Button</button>
// </div></form> 
// <button type="submit" className="btn btn-primary btn-lg btn-block" >Submit</button> 

//        </form>

//        </div>
//     </div>
//    )
// }
import React from 'react'
import { useNavigate } from 'react-router-dom'; 
export const Duesform = (props) => {
    const navigate=useNavigate();
    function navigatesubcard(){
     navigate('/subcard')
    }
    let sname="Prerna";
    let srollno=46063;
    let sclass="B.tech A";

   
    let value=props.library_status;
    const library=(prop)=>{
        return prop.value?"clear":"clear"
    }
  return (
    <div className='subcardpage'>
      <nav class="navbar ">
       <div class="container-fluid">
         <a class="navbar-brand" href="#">
           <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"/>
         </a>
         <form class="d-flex">
           <button class="btn btn-outline-success" type="submit">Logout</button>
         </form>
       </div>
      </nav>
      <div className="d-flex justify-content-center"> 
         <h2> No_Dues</h2>  
      </div>   
      <div className="row d-flex justify-content-center">    
    
            <div className='container lessMargin Subcard '>   
              <h4 className="mb-2 row d-flex justify-content-center  ">Name:{sname}</h4>
              <p className=" row d-flex justify-content-center text-muted mb-4">Roll No:{srollno}<span class="mx-2">|</span>Class:{sclass}</p>
            </div>
            <div className='container Subcard lessMargin block'>
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
         
         
      
      
      <form  className='container moreMargin'>  

        <button type="submit" className="btn btn-primary" onClick={navigatesubcard} >Start the Process</button> </form>         
    </div>      
  )
}