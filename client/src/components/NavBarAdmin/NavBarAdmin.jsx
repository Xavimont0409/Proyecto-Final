import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { findPerName } from "../../Redux/Actions/actionsFunction/actionsSearchBar";
import { useLocalStorage } from "../../useLocalStorage/useLocalStorage";
import { login } from '../../Redux/Actions/actionsFunction/actionsLogin';
import style from "./NavBarAdmin.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const NavBarAdmin = ({ setCurrentUserStore }) => {
  const { logout, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [ isNavVisible, setIsNavVisible ] = useState(false);
  
  const abrirNav = () => {
    setIsNavVisible(true);
  }
  const cerrarNav = () => {
    setIsNavVisible(false);
  }



  
  const [ name , setName ] = useLocalStorage('name', '');

  const handlerSearchName = (event) =>{
    setName(event.target.value)
  }
  const searchName = (name) =>{
    navigate("/empleos")
    dispatch(findPerName(name))
  }
  const handlerLogin = () =>{
    dispatch(login(false))
    setCurrentUserStore("")
    logout({ returnTo: window.location.origin })
  }

  console.log(name);

  return (
    <div className={style.fixed}>
      <div className={style.container}>
        <h2 className={style.title}><a href="/applicant">JobPortalX</a></h2>
        <form className={style.SearchBarContainer}>
          <input type="text" placeholder="Empleos..." className={style.Input} onChange={(event)=>handlerSearchName(event)}/>
          <button className={style.Botton} onClick={() => searchName(name)}><i class="bi bi-search"></i></button>
        </form>
        <button className={style.abrirNav} onClick={abrirNav}><i class="bi bi-arrow-bar-right"></i></button>
        <nav className={`${style.nav} ${isNavVisible ? style.navVisible : ""}`} >
          <button className={style.cerrarNav} onClick={cerrarNav}><i class="bi bi-arrow-bar-left"></i></button>
          <ul className={style.navList}>
            <li><a href="#" onClick={handlerLogin}>cerrar sesion</a></li>
            <li><a href="#">Dashboard</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBarAdmin;
