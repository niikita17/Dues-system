import './App.css';
import { SubCard } from './stud_components/SubCard';
import { Login } from './stud_components/Login';
import { Start } from './stud_components/Start';
import { Yearwise } from './teacher_com/Yearwise';
import { Divsionwise } from './teacher_com/Divsionwise';
import { Subjectwise } from './teacher_com/Subjectwise';
import { Request } from './teacher_com/Request';
import { BrowserRouter , Router, Routes, Route, Link} from "react-router-dom";
import React, { Component } from "react";

const user=true;//
class App extends Component {
  
  render() {
    return (
      <div>
         { user?//
      <div>
       <Routes>
        <Route path='/' element={<Login user={user}/>}/>
        <Route path='/start' element={<Start/>}/>
        <Route path='/subcard' element={<SubCard library_status={true}/>}/>
       
       </Routes>
       </div>:
       <div>
       <Routes>
        <Route path='/' element={<Login user={user}/>}/>
        <Route path='/yearwise' element={<Yearwise/>}/>
        <Route path='/divisionwise' element={<Divsionwise/>}/>
        <Route path='/subjectwise' element={<Subjectwise/>}/>
        <Route path='/request' element={<Request/>}/>


       </Routes>
       </div>}
      </div>
    );
  }
}


export default App;
