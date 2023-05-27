import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { useEffect, useState } from "react";
import { getCompany } from '../../Redux/Actions/actionsFunction/actionLogin2'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginCompany = ({setValidateState, setCurrentUserStore}) => {
  const clientID = "970075390910-oaut1poeo5kbmti73j5fm8t3mrpi8jk7.apps.googleusercontent.com";
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
  //103227077001918393252
  //103227077001918393252

  const onSuccess = (response) => {
    const {email, googleId } = response.profileObj;
    dispatch(getCompany({email, password: googleId}))
    setCurrentUserStore({email, password: googleId})
    setValidateState(true)
    setTimeout(()=>{
      navigate("/empresa")
    },1500)
  };
  const onFailure = () => {
    console.log("Something went wrong");
  };
  const handlerSumit = () =>{
    dispatch(getCompany(company))
    setCurrentUserStore(company)
    setValidateState(true)
    setTimeout(()=>{
      navigate("/empresa")
    },2000)
  }

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
        <button onClick={handlerSumit}>Iniciar sesion</button>
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
