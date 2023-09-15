
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/Assets/Forms/Login';
import Signup from './Components/Assets/Forms/Signup';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
   <Routes>
    <Route path="/" element ={<Login />}></Route>
    <Route path="/register" element ={<Signup />}></Route>
    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
