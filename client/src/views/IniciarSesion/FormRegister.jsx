import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import style from './FormRegister.module.css';
import { useState, useEffect } from 'react';


const FormRegister = () => {

      const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return <Loading/>;
    }

    return (
      <div className={style["form-wrapper"]}>
        <form>
          <div className={style["nav-wrapper"]}>
            <nav>CAMBIAR ESTE TAG DE NAV POR LA NAVBAR QUE CORRESPONDE</nav>
          </div>
          <div className={style["input-wrapper"]}>
            <div>
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" />
              <span></span>
            </div>
            <div>
              <label htmlFor="apellido">Apellido:</label>
              <input type="text" id="apellido" name="apellido" />
              <span></span>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
              <span></span>
            </div>
            <div>
              <label htmlFor="confirmar-email">Confirmar Email:</label>
              <input type="email" id="confirmar-email" name="confirmar-email" />
              <span></span>
            </div>
            <div>
              <label htmlFor="contrasena">Contraseña:</label>
              <input type="password" id="contrasena" name="contrasena" />
              <span></span>
            </div>
            <div>
              <label htmlFor="confirmar-contrasena">Confirmar Contraseña:</label>
              <input type="password" id="confirmar-contrasena" name="confirmar-contrasena" />
              <span></span>
            </div>
            <div>
              <label htmlFor="otro">Algo mas</label>
              <input type="text" id="otro" name="otro" />
              <span></span>
            </div>
          </div>
          <div className={style["button-wrapper"]}>
            <button type="submit">Iniciar Sesion</button>
            <Link to="/" >
              <button className={style.buttonGoogle}>HOME</button>
            </Link>
            <button type="button" className={style.buttonGoogle}>Iniciar Sesion con Google</button>
          </div>
        </form>
      </div>
    )
};

export default FormRegister;