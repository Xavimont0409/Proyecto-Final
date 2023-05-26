import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { useEffect, useState } from "react";

const LoginCompany = () => {
  const clientID =
    "970075390910-oaut1poeo5kbmti73j5fm8t3mrpi8jk7.apps.googleusercontent.com";
  const [company, setCompany] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      });
    };
    gapi.load("client:auth2", start);
  }, []);
  const handlerChange = (event) => {
    setCompany({
      ...company,
      [event.target.name]: event.target.value,
    });
  };
  const onSuccess = (response) => {
    const {email, googleId } = response.profileObj;

  };
  const onFailure = () => {
    console.log("Something went wrong");
  };

  return (
    <div>
      <h1>Login Empresa</h1>
      <div>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={company.email}
          onChange={handlerChange}
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={company.password}
          onChange={handlerChange}
        />
        <button>Iniciar sesion</button>
        <div>
          <GoogleLogin
            clientId={clientID}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_policy"}
          />
        </div>
      </div>
    </div>
  );
};
export default LoginCompany;
