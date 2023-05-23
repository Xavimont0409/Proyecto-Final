import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import {DetailProduct, EmpleoDetail, Empleos, Landing, LandingEmpresa, FormCv, FormEmpresa, FormVacante, Profiles, ProfilesCompany, MiPerfil, Applicant, Registro, FormRegisterEmpresa, FormRegistroUsuario, Operation, Success, FormRegistroExperincia} from './views';
import {Error404, ProtectedRoute, ServerMaintenance, TermsAndConditions, Footer} from './components';
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

  return (  
    <div className="App">
      <Routes>
        <Route index element={<Landing />} />
        <Route exact path="/" element={<Landing />} />
        <Route path="/empleos" element={<Empleos/>} />
        <Route path="/registro" element={<Registro />}/>
        <Route path="/registroini-empresa" element={<FormRegisterEmpresa />} />
        <Route path="/registro-usuario" element={<FormRegistroUsuario />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions/>} />
        <Route path="/ServerDevelop" element={<ServerMaintenance/>} />
        <Route path="/product/:id" element={<DetailProduct/>} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
          <Route path="/empleoDetail/:detailId" element={<EmpleoDetail />} />
          <Route path='/profiles' element={<Profiles/>} />
          <Route path='/profiles-company' element={<ProfilesCompany/>} />
          <Route path="/MiPerfil" element={<MiPerfil/>} />
          <Route path="/operation" element={<Operation/>} />
          <Route path="/success" element={<Success/>} />

          <Route path="/registro-cv" element={<FormCv />} />
          <Route path="/registro-vacante" element={<FormVacante />} />
          <Route path='/applicant' element={
            <ProtectedRoute >
              <Applicant />
            </ProtectedRoute>
          } />
          <Route path="/empresa" element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAllowed={!!currentUserStore && currentUserStore.profile === "Company"}>
              <LandingEmpresa />
            </ProtectedRoute>
          } />
          <Route path="/registro-empresa" element={<FormEmpresa />} />
          <Route path="/registro-experiencia" element={<FormRegistroExperincia/>} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
