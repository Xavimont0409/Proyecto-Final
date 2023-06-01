import { Form, Row, Col, FormGroup, FormLabel, FormControl, FormSelect} from "react-bootstrap";
import style from "./Step1FormCv.module.css"
import ButtonGeneral from "../Button/ButtonGeneral";
import validation from "./validation";
import Loading from "../Loading/Loading";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Swal from "sweetalert2";
import countries from "countries-list";
import { BsCheckCircleFill, BsFillTrashFill } from 'react-icons/bs'



function Step1FormCv({ cv, setCv, handlerChange, nextStep, currentUser }) {


  const countriesNames = Object.values(countries.countries).map((country) => country);

  const [validated, setValidated] = useState(false);
  const [validatedLinkedin, setValidatedLinkedin] = useState(false);
  const [image, setImage] = useState(null);



  const handleNext = (event) => {
    event.preventDefault();
    console.log(cv)
    if (!validation(cv)) {
      Swal.fire({
			title: "Faltan Datos",
			text: "Completa todos los campos",
			icon: "warning",
		});
    } else if(validatedLinkedin === false){
      Swal.fire({
        title: "Error en campo LinkedIn o sitio web",
        text: "Debe ingresar una URL que inicie por https://, como se muestra en el ejemplo",
        icon: "warning",
      });

    }else {
      setValidated(true)
      nextStep()
    }
  };



  const handleDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

      Swal.fire({
        title: "Info",
        text: `Por favor haz click en confirmar tu imagen o elimínala`,
        icon: "info",
      });

    reader.readAsDataURL(file);
  };

  const handleUpload = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(image);
      const data = await response.blob();

      const formData = new FormData();
      formData.append("file", data);
      formData.append("upload_preset", "portaljobx");

      const uploadResponse = await fetch(
        `https://api.cloudinary.com/v1_1/portaljobx/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const uploadData = await uploadResponse.json();
      setCv({...cv, photo:uploadData.secure_url})
      Swal.fire({
        title: "Éxito",
        text: "Imagen cargada correctamente",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: `${error}`,
        icon: "error",
      });
    }
  };

  const handleRemove = (event) => {
    event.preventDefault()
    setImage(null);
  };




  if (!currentUser) {
    return (
      <Loading></Loading>
    )
  } else {



    return (

      <div className={style.mainContainer}>
        <h2 style={{ 'margin': '40px' }}>Información personal</h2>

        <Form className={style.Form} validated={!validated}>

          <Row className="mb-3 ">

            <FormGroup as={Col} md="6" >
              <Form.Label>DNI</Form.Label>
              <Form.Control
                name="dni"
                placeholder="dni"
                value={cv.dni}
                onChange={(event) => handlerChange(event, cv, setCv)}
                type="number"
                required />
              <Form.Control.Feedback type="invalid">
                Rellena este campo.
              </Form.Control.Feedback>
            </FormGroup>

            <FormGroup as={Col} md="6" >
              <FormLabel>Número de celular</FormLabel>
              <Form.Control
                name="phone"
                placeholder="Número de celular"
                value={cv.phone}
                onChange={(event) => handlerChange(event, cv, setCv)}
                type="number"
                required />
              <Form.Control.Feedback type="invalid">
                Rellena este campo
              </Form.Control.Feedback>
            </FormGroup>

          </Row>





          <Row className="mb-3" >

            <FormGroup as={Col} md="6" >
              <FormLabel>Dirección</FormLabel>
              <FormControl
                name="address"
                placeholder="Dirección"
                value={cv.address}
                onChange={(event) => handlerChange(event, cv, setCv)}
                type="text"
                required />
              <Form.Control.Feedback type="invalid">
                Rellena este campo
              </Form.Control.Feedback>
            </FormGroup>


            <FormGroup as={Col} md="6" >
              <FormLabel>LinkedIn o sitio web</FormLabel>
              <FormControl
                name="linkedin"
                placeholder="ej: https://www.linkedin.com/usuario"
                value={cv.linkedin}
                onChange={(event) => handlerChange(event, cv, setCv, setValidatedLinkedin)}
                type="text"
                required />

              <Form.Control.Feedback type="invalid">
                Rellena este campo
              </Form.Control.Feedback>

                {!validatedLinkedin ? (
                 <div className={style.linkedinError}>Error en Linkedin: la URL debe iniciar por https://</div>
                ): 
                (console.log("ok"))
                }
              
            </FormGroup>

          </Row>





          <Row>
            <Col md={6}>
              <div style={{ display: 'flex', alignItems: 'start', flexDirection: 'column' }}>
                <FormLabel style={{ marginRight: '10px' }}>Foto</FormLabel>

                <div className={!image ? style.dropzone : 'none'}>
                  <Dropzone onDrop={handleDrop}>
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />

                        {!image ? <p style={{ 'color': 'gray', 'textAlign': 'center' }}>Selecciona o arrastra una imagen</p> : <></>}
                      </div>
                    )}
                  </Dropzone>
                </div>

                {image && (
                  <div> 
                    <img className={style.image} src={image} alt="Imagen cargada" />
                    <button style={{ margin: '5px' }} onClick={(event) => handleRemove(event)}>
                      <BsFillTrashFill />
                    </button>
                    <button onClick={(event) => handleUpload(event)}>
                      <BsCheckCircleFill />
                    </button>
                  </div>
                )}
              </div>
            </Col>

            <Col md={6}>
              <FormGroup>
                <FormLabel>Fecha de nacimiento</FormLabel>
                <FormControl
                  name='initial_date'
                  placeholder='Página web'
                  value={cv.initial_date}
                  type="date"
                  onChange={(event) => handlerChange(event, cv, setCv)}
                  required />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo.
                </Form.Control.Feedback>
              </FormGroup>

              <FormGroup  >
                <FormLabel>Nacionalidad</FormLabel>
                <FormSelect
                  name='country'
                  value={cv.country}
                  onChange={(event) => handlerChange(event, cv, setCv)}
                  required>
                  <option disabled></option>
                  {countriesNames.map((count) => <option id={count.emoji} value={count.name}>{count.name}</option>)}
                </FormSelect>
                <Form.Control.Feedback type="invalid">
                  Seleciona una opcion.
                </Form.Control.Feedback>
              </FormGroup>
            </Col>



          </Row>

        </Form>


        <div style={{ margin: '5px', padding: '1' }}>
          <FormGroup as={Col} md="6" className="mb-3 ">
            <ButtonGeneral
              textButton="Siguiente"
              handlerClick={(event) => handleNext(event)}
            />
          </FormGroup>
        </div>

      </div>
    )
  };
}

export default Step1FormCv











  
  
  

//   return (
//     <div>
//       <Dropzone onDrop={handleDrop}>
//         {({ getRootProps, getInputProps }) => (
//           <div {...getRootProps()}>
//             <input {...getInputProps()} />
//             <p>
//               Arrastra y suelta la imagen aquí, o haz clic para seleccionar un archivo
//             </p>
//           </div>
//         )}
//       </Dropzone>
//       {image && (
//         <div>
//           <img src={image} alt="Imagen cargada" />
//           <button onClick={handleRemove}>Eliminar imagen</button>
//           <button onClick={handleUpload}>Subir imagen</button>
//         </div>
//       )}
//     </div>
//   );
// }

