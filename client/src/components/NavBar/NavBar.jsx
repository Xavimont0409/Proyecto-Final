import NavBarLog from "../NavBarLog/NavBarLog";
import NavbarUnlog from "../NavBarUnlog/NavBarUnlog";

const NavBar = ({ setValidateState, setCurrentUserStore2 }) => {
  const validacion = JSON.parse(localStorage.getItem("state"));
  
  return (
    <div>
      {validacion === true ? (
        <NavBarLog
          setValidateState={setValidateState}
          setCurrentUserStore2={setCurrentUserStore2}
        />
      ) : (
        <NavbarUnlog />
      )}
    </div>
  );
};

export default NavBar;
