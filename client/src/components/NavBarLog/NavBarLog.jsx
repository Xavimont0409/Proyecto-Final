import { useDispatch } from "react-redux";
import { findPerName } from "../../Redux/Actions/actionsFunction/actionsSearchBar";
import { useLocalStorage } from "../../useLocalStorage/useLocalStorage";
import style from "./NavBarLog.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavBarCliente = ({ setValidateState, setCurrentUserStore2 }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useLocalStorage("name", "");
  const currentURL = window.location.href;

  useEffect(() => {
    dispatch(findPerName(name));
    if (location.pathname !== "/empleos") {
      window.localStorage.setItem("name", "");
    }
  }, [dispatch]);

  const [isNavVisible, setIsNavVisible] = useState(false);

  const abrirNav = () => {
    setIsNavVisible(true);
  };
  const cerrarNav = () => {
    setIsNavVisible(false);
  };

  const handlerSearchName = (event) => {
    setName(event.target.value);
  };

  const searchName = async (name) => {
    dispatch(findPerName(name));
    if(location.pathname === "/empleos") {
      setName("")
    }
  };



  const handlerLogin = () => {
    setValidateState(false);
    setCurrentUserStore2("");
    navigate("/");
  };

  const userLocalStorage = JSON.parse(localStorage.getItem("currentUser2"));

  return (
    <div className={`${style.fixed} ${isNavVisible ? style.fixedOpen : ""}`}>
      <div className={style.container}>
        <h2 className={style.title}>
          {
          userLocalStorage?.profile === "Admin" 
          ? (<a href="/">JobPortalX</a>) 
          : userLocalStorage?.profile === "applicant" 
            ? (<a href="/Applicant">JobPortalX</a>) 
            : (<a href="/empresa">JobPortalX</a>)
          }
        </h2>
        <form className={style.SearchBarContainer}>
          <input
            type="text"
            placeholder="Empleos..."
            className={style.Input}
            onChange={(event) => handlerSearchName(event)}
          />
          { 
          currentURL === "http://localhost:3000/empleos"
            ?<button className={style.Botton} type="button" onClick={() =>searchName(name)}>
              <i className="bi bi-search"></i>
             </button>
            :<Link to="/empleos">
              <button className={style.Botton} type="button" onClick={() =>searchName(name)}>
              <i className="bi bi-search"></i>
              </button>
             </Link>
          }
        </form>
        <button className={style.abrirNav} onClick={abrirNav}>
          <i className="bi bi-arrow-bar-right"></i>
        </button>
        <nav className={`${style.nav} ${isNavVisible ? style.navVisible : ""}`}>
          <button className={style.cerrarNav} onClick={cerrarNav}>
            <i className="bi bi-arrow-bar-left"></i>
          </button>
          <ul className={style.navList}>
            <li>
              <h3 onClick={handlerLogin}>
                Cerrar sesion
              </h3>
            </li>
            {userLocalStorage?.profile === "Admin" ? (
              <li>
                {<a
                  href="https://jobportalx-adminpanel.vercel.app"
                  target="_blank"
                >
                  Dashboard
                </a>}
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBarCliente;
