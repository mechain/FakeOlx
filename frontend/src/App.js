import './App.css';
import { Routes , Route } from 'react-router-dom'
import SignUp from './component/signup.component';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='signup' element={<SignUp />}/>
        </Routes>
    </div>
  );
}

export default App;
