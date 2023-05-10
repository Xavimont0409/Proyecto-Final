import style from './FormRegister.module.css';

const FormRegister = () => {

    return (
<div className={style["form-wrapper"]}>
  <form>
    <div className={style["nav-wrapper"]}>
      <nav>SOY LA NAV</nav>
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
      <button type="button">Iniciar Sesion con Google</button>
    </div>
  </form>
</div>

    )
};

export default FormRegister;