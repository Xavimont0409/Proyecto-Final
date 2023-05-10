import './App.css';
import { Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import {EmpleoDetail, Empleos, FormRegister, Landing, LandingEmpresa} from './views';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBarUnlog';
import NavBarCliente from './components/NavBar/NavBarLog';


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route  exact path="/" element={<Landing/>}></Route>
        <Route path ="/empleoDetail/:detailId" element={<EmpleoDetail/>} />
        <Route path='/empleos' element={<Empleos></Empleos>}></Route>
        <Route path="/empresa" element={<LandingEmpresa/>}></Route>
        <Route path="/navbar" element={<NavBar/>}></Route>
        <Route path="/navbarCliente" element={<NavBarCliente />}></Route>
        <Route path='/inicioSesion' element={<FormRegister />}></Route>
      </Routes>


    </div>
  );
}

export default App;
