import { useParams } from 'react-router-dom';


const Pathname = ({location, id}) => {


 switch (location.pathname) {
    case "/empresa":
        return 'Home';
    case "/registro-vacante":
        return 'Registrar Vacante';
    case "/perfil-company":
        return 'Mi Perfil';
    case "/ratings":
        return 'Mis ratings';
    case "/profiles":
        return 'Perfiles de Aplicantes';
    case "/profiles-company":
        return 'Perfiles de empresas';
    case "/vacantes":
        return 'Mis vacantes';
    case `/product/${id}`:
        return 'Detalle de plan';
    case "/operation":
        return 'Operación'
    case "/applicant":
        return 'Home';
    case "/postulaciones":
        return 'Mis postulaciones';
    case "/registro-cv":
        return 'Crear CV';
    case "/registro-experiencia":
        return 'Registro de experiencia profesional';
    case "/empleos":
        return 'Ver vacantes';
    case "/Miperfil":
        return 'Mi perfil';
    case "/registro-estudio":
        return 'Registrar historial académico';
    case `/empleoDetail/${id}`:
        return 'Detalle de empleo / empresa seleccionadora';
    case "/aboutUs":
        return 'Sobre JobPortalX'
    default:
        break;
 }
}


export default Pathname;