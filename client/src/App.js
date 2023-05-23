import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import {DetailProduct, EmpleoDetail, Empleos, Landing, LandingEmpresa, IniciarSesion, FormCv, FormEmpresa, FormVacante, Profiles, ProfilesCompany, MiPerfil, Applicant, Registro, FormRegisterEmpresa, FormRegistroUsuario, Operation, Success, FormRegistroExperincia} from './views';
import {Error404, ProtectedRoute, ServerMaintenance, TermsAndConditions} from './components';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage/useLocalStorage';


axios.defaults.baseURL = 'http://localhost:3001'

function App() {
  const currentUser = useSelector(state => state.dataEmail[0]);
  const [currentUserStore, setCurrentUserStore] = useLocalStorage('currentUser', '');
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (currentUser) {
      setCurrentUserStore(currentUser);
    } else {
      setCurrentUserStore('');
    }
    
    return () => {
      localStorage.removeItem("redirectTo");
    };
  }, [currentUser]);

  console.log(currentUserStore.profile);

  return (  
    <div className="App">
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
        <Route path="/product/:id" element={<DetailProduct/>}></Route>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
          <Route path="/empleoDetail/:detailId" element={<EmpleoDetail />} />
          <Route path='/profiles' element={<Profiles/>} />
          <Route path='/profiles-company' element={<ProfilesCompany/>} />
          <Route path="/MiPerfil" element={<MiPerfil/>}></Route>

          <Route path="/registro-cv" element={<FormCv />}></Route>
          <Route path="/registro-vacante" element={<FormVacante />}></Route>
          <Route path='/applicant' element={
            <ProtectedRoute >
              <Applicant />
            </ProtectedRoute>
          } />
          <Route path="/empresa" element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAllowed={!!currentUserStore && currentUserStore.profile === "Company"}>
              <LandingEmpresa />
            </ProtectedRoute>
          }></Route>
          <Route path="/registro-empresa" element={<FormEmpresa />}></Route>
          <Route path="/registro-experiencia" element={<FormRegistroExperincia/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;