import React from 'react';
import styles from './TermsAndConditions.module.css'
import { useState } from 'react';
import NavBar from '../../components/NavBarUnlog/NavBarUnlog';
import Footer from '../../components/Footer/Footer';


function TermsAndConditions({setValidateState, setCurrentUserStore2 }) {
  const [accepted, setAccepted] = useState(false);

  const handleAcceptance = () => {
    if (accepted) {
      window.history.back();
    } else {
      alert('Debes aceptar los términos y condiciones antes de continuar.');
    }
  };

  const handleCheckboxChange = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <>
    <NavBar setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2}/>
      <div className={styles.container}>
        <h1>Términos y Condiciones de uso de JobPortalX</h1>
        <hr />
        <ol>
          <h2>1. Aceptación de los términos</h2>
          <li>
            Al utilizar el portal de empleos JobPortalX, aceptas los siguientes términos y condiciones en su totalidad. Si no estás de acuerdo con alguno de estos términos, te pedimos que no utilices el sitio.
          </li>
          <h2>2. Propósito del portal</h2>
          <li>
            JobPortalX es un portal de empleos diseñado para ayudar a los usuarios a encontrar oportunidades laborales y a los empleadores a publicar ofertas de trabajo. No garantizamos la obtención de un empleo, ni la calidad de las ofertas publicadas.
          </li>
          <h2>3. Responsabilidad de los usuarios</h2>
          <li>
            Tú eres responsable de la información que proporcionas en JobPortalX. Debes asegurarte de que tus datos personales y profesionales sean precisos y verídicos. No nos hacemos responsables de las consecuencias derivadas de información falsa o engañosa.
          </li>
          <h2>4. Publicación de ofertas de trabajo</h2>
          <li>
            Los empleadores son los únicos responsables del contenido de las ofertas de trabajo publicadas en JobPortalX. No nos hacemos responsables por la veracidad, legalidad o calidad de las mismas. Nos reservamos el derecho de eliminar cualquier oferta que considere inapropiada o que incumpla nuestras políticas.
          </li>
          <h2>5. Privacidad y protección de datos</h2>
          <li>
            Nos comprometemos a proteger tu privacidad y tus datos personales de acuerdo con nuestra Política de Privacidad. Sin embargo, no podemos garantizar la seguridad completa de la información transmitida a través de Internet.
          </li>
          <h2>6. Propiedad intelectual</h2>
          <li>
            Todos los derechos de propiedad intelectual relacionados con JobPortalX, incluyendo el diseño, logotipos, contenido y software, son propiedad exclusiva de sus respectivos dueños. No se permite la reproducción, distribución o modificación sin autorización previa.
          </li>
          <h2>7. Limitación de responsabilidad</h2>
          <li>
            JobPortalX no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso o la incapacidad de uso del sitio. Asimismo, no nos responsabilizamos por cualquier interrupción en el servicio, falla técnica o virus informático que pueda afectar el uso del portal.
          </li>
          <h2>8. Modificaciones y término</h2>
          <li>
            Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. 
          </li>
          <li>
            Te recomendamos revisar regularmente esta sección. Asimismo, nos reservamos el derecho de suspender o terminar el portal de empleos JobPortalX en cualquier momento, sin previo aviso.
          </li>
        </ol>
        <hr />
        <p>
          Al utilizar JobPortalX, aceptas cumplir con estos términos y condiciones. 
        </p>
        <p>Si no estás de acuerdo, te pedimos que no utilices el sitio. Para cualquier duda o consulta, puedes contactarnos a través de nuestros canales de atención al cliente.</p>
      <div className={styles.acceptWrapper}>
        <input
          type="checkbox"
          id="acceptCheckbox"
          className={styles.acceptCheckbox}
          checked={accepted}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="acceptCheckbox" className={styles.acceptLabel}>
          Acepto los términos y condiciones
        </label>
      </div>
      <button className={styles.acceptButton} onClick={handleAcceptance}>
        Aceptar
      </button>
      </div>
      <Footer/>
    </>
  );
}

export default TermsAndConditions;
