import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { DetailProduct, EmpleoDetail, Empleos, Landing, LandingEmpresa, FormCv, FormEmpresa, FormVacante, Profiles, ProfilesCompany, MiPerfil, Applicant, Registro, FormRegisterEmpresa, FormRegistroUsuario, Operation, Success, FormRegistroExperincia } from './views';
import { Error404, ProtectedRoute, ServerMaintenance, TermsAndConditions, Footer } from './components';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage/useLocalStorage';
import { login } from './Redux/Actions/actionsFunction/actionsLogin'
import NewRegistroCompany from './views/NewRegistro/newRegistro';
import Loading from './components/Loading/Loading';




//axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.baseURL = "https://proyecto-final-production-9e7e.up.railway.app/"


function App() {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.dataEmail);
  const [currentUserStore, setCurrentUserStore] = useLocalStorage('currentUser', '');
  const [ validateState, setValidateState ] = useLocalStorage('state', '')
  const [isLoading, setIsLoading] = useState(true);
  
  console.log(currentUser);


  useEffect(() => {
    if (validateState === true) {
      setCurrentUserStore(currentUser);
      setValidateState(true)
    }
    else {
      setCurrentUserStore("");
      setValidateState(false)
    }
  }, [currentUser]);

  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  };

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing setCurrentUserStore= {setCurrentUserStore}/>} />
        <Route path="/empleos" element={<Empleos setCurrentUserStore={setCurrentUserStore}/>} />
        <Route path="/registro" element={<Registro />}/>
        <Route path='/newRegistroCompany' element={<NewRegistroCompany setValidateState={setValidateState} setCurrentUserStore={setCurrentUserStore} />} />
        <Route exact path="/" element={<Landing currentUserStore={currentUserStore} setCurrentUserStore={setCurrentUserStore} />} />
        <Route path="/empleos" element={<Empleos setCurrentUserStore={setCurrentUserStore} />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions setCurrentUserStore={setCurrentUserStore} />} />
        <Route path="/ServerDevelop" element={<ServerMaintenance />} />
        <Route path="/product/:id" element={<DetailProduct currentUserStore={currentUserStore} setCurrentUserStore={setCurrentUserStore} />} />
        <Route element={<ProtectedRoute validateState={validateState} />/*Todos*/}>
          <Route path="/empleoDetail/:detailId" element={<EmpleoDetail currentUserStore={currentUserStore} setCurrentUserStore={setCurrentUserStore} />} />

          <Route path='/profiles' element={<Profiles setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/MiPerfil" element={<MiPerfil setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/operation" element={<Operation setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/success" element={<Success />} />
        </Route>
        <Route element={<ProtectedRoute validateState={validateState}  />/*Empresa*/}>
          <Route path='/profiles-company' element={<ProfilesCompany setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/registro-vacante" element={<FormVacante setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/empresa" element={<LandingEmpresa setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/registro-empresa" element={<FormEmpresa setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/registroini-empresa" element={<FormRegisterEmpresa />} />
        </Route>
        <Route element={<ProtectedRoute isAuthenticated={validateState} />/*Empleado*/}>
          <Route path="/registro-cv" element={<FormCv setCurrentUserStore={setCurrentUserStore} />} />
          <Route path='/applicant' element={<Applicant setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/registro-experiencia" element={<FormRegistroExperincia setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/registro-usuario" element={<FormRegistroUsuario />} />
        </Route>
      </Routes>
      {isLoading ? <></> : <Footer />}
    </div>
  );
}

export default App;
