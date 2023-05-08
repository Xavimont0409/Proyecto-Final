import './App.css';
import { Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import EmpleoDetail from './views/EmpleoDetail/EmpleoDetail';
import LandingEmpresa from './views/LandingEmpresa/LandingEmpresa';


function App() {
  return (
    <div className="App">
      <h1>App de empleos</h1>
      <Routes>
        <Route path ="/empleoDetail" element={<EmpleoDetail/>} />
        <Route path='/empresa' element={<LandingEmpresa/>}></Route>
      </Routes>



    </div>
  );
}

export default App;
