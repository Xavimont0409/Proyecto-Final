import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import {DetailProduct, EmpleoDetail, Empleos, Landing, LandingEmpresa, FormCv, FormEmpresa, FormVacante, Profiles, ProfilesCompany, MiPerfil, Applicant, Registro, FormRegisterEmpresa, FormRegistroUsuario, Operation, Success, FormRegistroExperincia} from './views';
import {Error404, ProtectedRoute, ServerMaintenance, TermsAndConditions, Footer} from './components';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage/useLocalStorage';
import { FaBullseye } from 'react-icons/fa';
import { login } from './Redux/Actions/actionsFunction/actionsLogin'



axios.defaults.baseURL = 'http://localhost:3001'

function App() {
  const currentUser = useSelector(state => state.dataEmail[0]);
  const confirmacion = useSelector(state => state.login)
  const dispatch = useDispatch()
  const [currentUserStore, setCurrentUserStore] = useLocalStorage('currentUser', '');
  const { logout, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (currentUser) {
      setCurrentUserStore(currentUser);
      if(currentUserStore)dispatch(login(true))
    }
    return () => {
      localStorage.removeItem("redirectTo");

    };
  }, [currentUser, currentUserStore]);

  return (  
    <div className="App">
      <Routes>
        <Route index element={<Landing setCurrentUserStore= {setCurrentUserStore}/>} />
        <Route exact path="/" element={<Landing />} />
        <Route path="/empleos" element={<Empleos setCurrentUserStore={setCurrentUserStore}/>} />
        <Route path="/registro" element={<Registro />}/>
        <Route path="/registroini-empresa" element={<FormRegisterEmpresa />} />
        <Route path="/registro-usuario" element={<FormRegistroUsuario />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions setCurrentUserStore={setCurrentUserStore}/>} />
        <Route path="/ServerDevelop" element={<ServerMaintenance/>} />
        <Route path="/product/:id" element={<DetailProduct setCurrentUserStore={setCurrentUserStore}/>} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
          <Route path="/empleoDetail/:detailId" element={<EmpleoDetail setCurrentUserStore={setCurrentUserStore} />} />
          <Route path='/profiles' element={<Profiles setCurrentUserStore={setCurrentUserStore}/>} />
          <Route path='/profiles-company' element={<ProfilesCompany setCurrentUserStore={setCurrentUserStore}/>} />
          <Route path="/MiPerfil" element={<MiPerfil setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/operation" element={<Operation setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/success" element={<Success/>} />

          <Route path="/registro-cv" element={<FormCv setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/registro-vacante" element={<FormVacante setCurrentUserStore={setCurrentUserStore} />} />
          <Route path='/applicant' element={
            <ProtectedRoute >
              <Applicant setCurrentUserStore={setCurrentUserStore} />
            </ProtectedRoute>
          } />
          <Route path="/empresa" element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAllowed={!!currentUserStore && currentUserStore.profile === "Company"}>
              <LandingEmpresa setCurrentUserStore={setCurrentUserStore} />
            </ProtectedRoute>
          } />
          <Route path="/registro-empresa" element={<FormEmpresa setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/registro-experiencia" element={<FormRegistroExperincia setCurrentUserStore={setCurrentUserStore} />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
