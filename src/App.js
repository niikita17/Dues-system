import './App.css';
import { SubCard } from './stud_components/SubCard';
import { Login } from './stud_components/Login';
import { Start } from './stud_components/Start';
import { Yearwise } from './teacher_com/Yearwise';
import { Divsionwise } from './teacher_com/Divsionwise';
import { Subjectwise } from './teacher_com/Subjectwise';
import { Request } from './teacher_com/Request';
function App() {
  return (
    <div >
      
      <Login/>
      <Start/>
      <SubCard library_status={true}/>
      <Yearwise/>
      <Divsionwise/>
      <Subjectwise/>
      <Request/>
    </div>
  );
}

export default App;
