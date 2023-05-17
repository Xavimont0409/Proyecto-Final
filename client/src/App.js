import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import {EmpleoDetail, Empleos, Landing, LandingEmpresa, IniciarSesion, FormCv, FormEmpresa, FormVacante, Profiles, ProfilesCompany, MiPerfil, Applicant, Registro, FormRegisterEmpresa, FormRegistroUsuario} from './views';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import Error404 from './components/Error404/Error404';
import TermsAndConditions from './views/TermsAndConditions/TermsAndConditions';
import ServerMaintenance from './components/ServerMaintenance/ServerMaintenance';
import { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


axios.defaults.baseURL = 'http://localhost:3001'

function App() {

  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      id: 1,
      name: "John"
    })
  }

  const logout = () => setUser(null)


  return (
    <div className="App">
      { user ? (<button onClick={logout}>Logout</button>) : (<button onClick={login}>Login</button>)}
      <Routes>
        <Route index element={<Landing />} />
        <Route exact path="/" element={<Landing />}></Route>
        <Route path="/empleos" element={<Empleos/>}></Route>
        <Route path="/iniciarSesion" element={<IniciarSesion />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
        <Route path="/registroini-empresa" element={<FormRegisterEmpresa />}></Route>
        <Route path="/registro-usuario" element={<FormRegistroUsuario />}></Route>
        <Route path="*" element={<Error404 />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions/>} />
        <Route path="/ServerDevelop" element={<ServerMaintenance/>} />
        <Route element={<ProtectedRoute isAllowed={!!user}/>}>
          <Route path="/empleoDetail/:detailId" element={<EmpleoDetail />} />
          <Route path="/empresa" element={<LandingEmpresa />}></Route>
          <Route path="/registro-cv" element={<FormCv />}></Route>
          <Route path="/registro-empresa" element={<FormEmpresa />}></Route>
          <Route path="/registro-vacante" element={<FormVacante />}></Route>
          <Route path='/profiles' element={<Profiles/>} />
          <Route path='/applicant' element={<Applicant/>} />
          <Route path='/profiles-company' element={<ProfilesCompany/>} />
          <Route path="/MiPerfil" element={<MiPerfil/>}></Route>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;