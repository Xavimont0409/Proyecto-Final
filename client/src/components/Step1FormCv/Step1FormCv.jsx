import { Form, Row, Col, FormGroup, FormLabel, FormControl} from "react-bootstrap";
import style from "./Step1FormCv.module.css"
import ButtonGeneral from "../Button/ButtonGeneral";
import validation from "./validation";
import Loading from "../Loading/Loading";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Swal from "sweetalert2";



function Step1FormCv({ cv, setCv, handlerChange, nextStep, currentUser }) {


  const [validated, setValidated] = useState(false);
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
    } else {
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
      // setImage(null)

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
              placeholder="LinkedIn o sitio web"
              value={cv.linkedin}
              onChange={(event) => handlerChange(event, cv, setCv)}
              type="text"
              required />
            <Form.Control.Feedback type="invalid">
              Rellena este campo
            </Form.Control.Feedback>
          </FormGroup>

        </Row>





        <Row>
  <FormGroup md="6"className="mb-3" >
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FormLabel style={{ marginRight: '10px' }}>Foto</FormLabel>

      <div className={!image ? style.dropzone : 'none'}>
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />

              {!image ? <p>Selecciona o arrastra una imagen</p> : <></>}
            </div>
          )}
        </Dropzone>
      </div>

      {image && (
        <div>
          <img className={style.image} src={image} alt="Imagen cargada" />
          <button style={{ margin: '10px' }} onClick={(event)=>handleRemove(event)}>
            Eliminar
          </button>
          <button onClick={(event)=>handleUpload(event)}>Confirmar</button>
        </div>
      )}
    </div>
  </FormGroup>
</Row>



        <FormGroup as={Col} md="12" >
          <FormLabel className="custom-label">Skills</FormLabel>
          <Form.Control
            name="skill"
            placeholder="Escribe tus skills (max. 60 caracteres)"
            value={cv.skill}
            onChange={(event) => handlerChange(event, cv, setCv)}
            as="textarea"
            rows={3}
            maxLength={60}
            required />
          <Form.Control.Feedback type="invalid">
            Rellena este campo
          </Form.Control.Feedback>
        </FormGroup>

        <FormGroup as={Col} md="12" >
          <FormLabel>Descripción</FormLabel>
          <Form.Control
            name="personal_description"
            placeholder="Escribe una breve descripcion de tu perfil profesional (max. 200 caracteres)"
            value={cv.personal_description}
            onChange={(event) => handlerChange(event, cv, setCv)}
            as="textarea" rows={5}
            maxLength={200}
            required />
          <Form.Control.Feedback type="invalid">
            Rellena este campo
          </Form.Control.Feedback>
        </FormGroup>
      </Form>


<div style={{margin: '5px', padding:'1'}}>

      <FormGroup as={Col} md="6" className="mb-3 ">
        <ButtonGeneral
          textButton="Siguiente"
          handlerClick={(event)=>handleNext(event)}
          />
      </FormGroup>
          </div>

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

