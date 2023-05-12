import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import {EmpleoDetail, Empleos, Landing, LandingEmpresa, IniciarSesion, FormRegister, FormCv, FormEmpresa, FormVacante} from './views';
import 'bootstrap/dist/css/bootstrap.min.css'
import PruebasJuan from './views/PruebasJuan/PruebasJuan';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route path="/empleoDetail/:detailId" element={<EmpleoDetail />} />
        <Route path="/empleos" element={<Empleos/>}></Route>
        <Route path="/empresa" element={<LandingEmpresa />}></Route>
        <Route path="/iniciarSesion" element={<IniciarSesion />}></Route>
        <Route path="/registro-usuario" element={<FormRegister />}></Route>
        <Route path="/registro-cv" element={<FormCv />}></Route>
        <Route path="/registro-empresa" element={<FormEmpresa />}></Route>
        <Route path="/registro-vacante" element={<FormVacante />}></Route>


        <Route path="/PruebasJuan" element={<PruebasJuan />}></Route>
      </Routes>
    </div>
  );
}

export default App;
