import './App.css';
import { SubCard } from './stud_components/SubCard';
import { Login } from './stud_components/Login';

import { Start } from './stud_components/Start';
import { Yearwise } from './teacher_com/Yearwise';
import { Divsionwise } from './teacher_com/Divsionwise';
import { Subjectwise } from './teacher_com/Subjectwise';
import { Request } from './teacher_com/Request';
import { Duesform } from './stud_components/Duesform';
import { Requestforms  } from './Hod_com/Requestforms';
import { Allsubmissioncard } from './Hod_com/Allsubmissioncard';
import { BrowserRouter , Router, Routes, Route, Link} from "react-router-dom";
import React, { Component } from "react";
import { Allsubmissionforms } from './classTeach_com/Allsubmissionforms';
import { StudDefaulter } from './stud_components/StudDefaulter';
import { Forms } from './classTeach_com/Forms';
import { Allnoduesforms } from './classTeach_com/Allnoduesforms';
import { Allnodues } from './Hod_com/Allnodues';
import { Submissionrequest } from './Hod_com/Submissionrequest';
import { Noduesrequest } from './Hod_com/Noduesrequest';
const user="student";
class App extends Component {
 
  render() {
    const students=[
      {
        name:"nikita",
      },
      {
        name:"abhijeet"
      },
      {
        name:"nikita",
      },
      {
        name:"abhijeet"
      } ,{
        name:"nikita",
      }
      ,
      {
        name:"abhijeet"
      }
      ,
      {
        name:"abhijeet"
      }
    ]
    let defaulter=true;
    return (
      <div>
         <Routes>
        {/* //class teacher */}
        {/* <Route path='/forms' element={<Forms/>}/>

        <Route path='/allnoduesform' element={<Allnoduesforms students={students}/>}/>
        <Route path='/allsubmissioncard' element={<Allsubmissionforms students={students}/>}/> */}

        {/* //Hod */}
        <Route path='/requestforms' element={<Requestforms/>}/>
        <Route path='/allnodues' element={<Allnodues students={students}/>}/>
        <Route path='/allsubmissions' element={<Allsubmissioncard students={students}/>}/>
        <Route path='/submissioncardrequest' element={<Submissionrequest/>}/>
        <Route path='/noduesrequest' element={<Noduesrequest/>}/>

        
        </Routes>

         {/* { user?
      <div>
       <Routes>
        <Route path='/' element={<Login user={user}/>}/>
        <Route path='/start' element={<Start  defaulter={defaulter}/>}/>
        <Route path='/studdefaulter' element={<StudDefaulter/>}/>

        <Route path='/no-duesform' element={<Duesform/>}/>
         <Route path='/subcard' element={<SubCard/>}/>
         
        
       
       </Routes>
       </div>:
       <div>
       <Routes>
        <Route path='/' element={<Login user={user}/>}/>
        <Route path='/yearwise' element={<Yearwise/>}/>
        <Route path='/divisionwise' element={<Divsionwise/>}/>
        <Route path='/subjectwise' element={<Subjectwise/>}/>
        <Route path='/request' element={<Request students={students}/>}/>


       </Routes>
       </div>} */}



      </div>
    );
  }
}


export default App;
