import { Form, Row, Col, FormGroup, FormLabel, FormControl, FormFile } from "react-bootstrap";
import style from "./Step1FormCv.module.css"
import ButtonGeneral from "../Button/ButtonGeneral";
import validateFormInputs from "../../views/FormVacante/validation";
import Loading from "../Loading/Loading";
import { ImageUploader } from 'cloudinary-react';
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Cloudinary } from "cloudinary-core";

const cloudinary = new Cloudinary({ cloud_name: "portaljobx" });



function Step1FormCv({ infoPersonal, setInfoPersonal, handlerChange, nextStep, currentUser }) {


  const [validated, setValidated] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  
  
  const handleNext = (event) => {
    event.preventDefault();
    if(!validateFormInputs(infoPersonal)){
      alert('Completa todos los campos')
    }else{
      setValidated(true)
      nextStep()
    }
  };






  const [image, setImage] = useState(null);

  const handleDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
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
      console.log(uploadData);

      // Realiza las acciones necesarias con la respuesta de Cloudinary aquí

    } catch (error) {
      console.error(error);
    }
  };

  const handleRemove = () => {
    setImage(null);
  };









  if(!currentUser ){
    return(
      <Loading></Loading>
    )
  }else{

  

  return (

    <div className={style.mainContainer}>
      <h2 style={{ 'margin': '30px' }}>Información personal</h2>

      <Form className={style.Form}  validated={!validated}>

        <Row className="mb-3 ">

          <FormGroup as={Col} md="6" >
            <Form.Label>DNI</Form.Label>
            <Form.Control
              name="dni"
              placeholder="dni"
              value={infoPersonal.dni}
              onChange={(event) => handlerChange(event, infoPersonal, setInfoPersonal)}
              type="number"
              required />
            <Form.Control.Feedback type="invalid">
              Rellena este campo.
            </Form.Control.Feedback>
          </FormGroup>

          <FormGroup as={Col} md="6" >
            <FormLabel>Número de celular</FormLabel>
            <Form.Control
              name="telefono"
              placeholder="Número de celular"
              value={currentUser.cellphone}
              onChange={(event) => handlerChange(event, infoPersonal, setInfoPersonal)}
              type="number"
              required />
            <Form.Control.Feedback type="invalid">
              Rellena este campo
            </Form.Control.Feedback>
          </FormGroup>

        </Row>



        <Row className="mb-3" >

          <FormGroup as={Col} md="6" >
            <FormLabel>LinkedIn o sitio web</FormLabel>
            <FormControl
              name="linkedin"
              placeholder="LinkedIn o sitio web"
              value={infoPersonal.linkedin}
              onChange={(event) => handlerChange(event, infoPersonal, setInfoPersonal)}
              type="text"
              required />

            <Form.Control.Feedback type="invalid">
              Rellena este campo
            </Form.Control.Feedback>
          </FormGroup>

        






          <FormGroup as={Col} md="6" >
            <FormLabel>Foto</FormLabel>

            <Dropzone onDrop={handleDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />

                  < p>
                    Seleccionar imagen
                  </p>

                </div>
              )}
            </Dropzone>
      {image && (
        <div>
          <img src={image} alt="Imagen cargada" />
          <button style={{'marginRight':'10px'}} onClick={handleRemove}>Eliminar</button>
          <button onClick={handleUpload}>Confirmar</button>
        </div>
      )}
         </FormGroup>
        </Row>
        <FormGroup as={Col} md="12" >
          <FormLabel className="custom-label">Skills</FormLabel>
          <Form.Control
            name="skills"
            placeholder="Escribe los skills que consideres"
            value={infoPersonal.skills}
            onChange={(event) => handlerChange(event, infoPersonal, setInfoPersonal)}
            as="textarea"
            rows={3}
            required />
          <Form.Control.Feedback type="invalid">
            Rellena este campo
          </Form.Control.Feedback>
        </FormGroup>

        <FormGroup as={Col} md="12" >
          <FormLabel>Descripción</FormLabel>
          <Form.Control
            name="descripcion"
            placeholder="Escribe una breve descripcion de tu perfil profesional"
            value={infoPersonal.descripcion}
            onChange={(event) => handlerChange(event, infoPersonal, setInfoPersonal)}
            as="textarea" rows={5}
            required />
          <Form.Control.Feedback type="invalid">
            Rellena este campo
          </Form.Control.Feedback>
        </FormGroup>
      </Form>

      <FormGroup as={Col} md="6" className="mb-3 ">
        <ButtonGeneral
          textButton="Siguiente"
          handlerClick={handleNext}
        />
      </FormGroup>

    </div>
  )};
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

