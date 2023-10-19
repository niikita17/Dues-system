import './App.css';
import { SubCard } from './stud_components/SubCard';
import { Login } from './stud_components/Login';
import { Start } from './stud_components/Start';
function App() {
  return (
    <div >
      
      <Login/>
      <Start/>
      <SubCard library_status={true}/>
    </div>
  );
}

export default App;
