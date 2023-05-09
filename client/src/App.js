import './App.css';
import { Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import {EmpleoDetail, Empleos, Landing, LandingEmpresa} from './views';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route  exact path="/" element={<Landing/>}></Route>
        <Route path ="/empleoDetail" element={<EmpleoDetail/>} />
        <Route path='/empleos' element={<Empleos></Empleos>}></Route>
        <Route path="/empresa" element={<LandingEmpresa/>}></Route>
        <Route path="/navbar" element={<NavBar/>}></Route>
      </Routes>


    </div>
  );
}

export default App;
