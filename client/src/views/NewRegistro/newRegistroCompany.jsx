import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { useEffect, useState } from "react";
import FormRegisterEmpresa from "../FormRegistroEmpresa/FormRegistroempesa";

const NewRegistroCompany = ({ setCurrentUserStore2, setValidateState, setCurrentUserStore }) => {
  const clientID =
    "970075390910-oaut1poeo5kbmti73j5fm8t3mrpi8jk7.apps.googleusercontent.com";
  const [Company, setCompany] = useState({
    imagen: "",
    email: "",
    nombre: "",
    apellido: "",
    contraseña: "",
  });
  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response) => {
    const newUserCompany = response.profileObj;
    setCompany({
      imagen: newUserCompany.imageUrl,
      email: newUserCompany.email,
      nombre: newUserCompany.name,
      apellido: newUserCompany.familyName,
      contraseña: newUserCompany.googleId
    });
  };
  const onFailure = () => {
    console.log("Something went wrong");
  };

  return (
    <div>
      <h1>Registro Company</h1>
      <div>
        <GoogleLogin
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_policy"}
        />
      </div>
      {
        Company.nombre.length > 1 ? <FormRegisterEmpresa setCurrentUserStore2={setCurrentUserStore2} Company={Company} setCurrentUserStore={setCurrentUserStore} setValidateState={setValidateState} /> : <div></div>
      }
    </div>
  );
};

export default NewRegistroCompany;
