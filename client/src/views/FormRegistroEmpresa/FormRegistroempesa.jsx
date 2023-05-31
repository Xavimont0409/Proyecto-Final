import Form from 'react-bootstrap/Form';
import { FormGroup, FormLabel, FormSelect, FormControl, Row, Col } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { postCompany } from '../../Redux/Actions/actionsFunction/actionsCompanys';
import Loading from '../../components/Loading/Loading';
import style from './FormRegistroEmpesa.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import countries from "countries-list";
import { getEmail } from '../../Redux/Actions/actionsFunction/FiltersHome'
import Dropzone from "react-dropzone";
import Swal from "sweetalert2";
import { BsCheckCircleFill, BsFillTrashFill } from 'react-icons/bs'
import { validate } from './validation'


const FormRegisterEmpresa = ({ Company, setCurrentUserStore, setValidateState }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const [image, setImage] = useState(null);

  const [newEmpresa, setNewEmpresa] = useState({
    business_name: "",
    cuit: "",
    country: "",
    registed: true,
    name: "",
    email: Company ? Company.email : "",
    password: Company ? Company.contraseña : "",
    photo: "",
    description: "",
    job_area: "",
    webPage: "",
  });
  const [ errors, setErrors ] = useState({
	business_name: "",
    cuit: "",
    country: "",
    registed: true,
    name: "",
    email: Company ? Company.email : "",
    password: Company ? Company.contraseña : "",
    photo: "",
    description: "",
    job_area: "",
    webPage: "",
  })


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
      setNewEmpresa({ ...newEmpresa, photo: uploadData.secure_url })
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


  const countriesNames = Object.values(countries.countries).map(
    (country) => country
  );
  
  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setNewEmpresa({ ...newEmpresa, [property]: value });
    setErrors(validate({ ...newEmpresa, [property]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (
      newEmpresa.business_name &&
      newEmpresa.cuit &&
      newEmpresa.country &&
      newEmpresa.name &&
      newEmpresa.email
    ) {
      dispatch(postCompany(newEmpresa))
      setTimeout(() => {
        dispatch(getEmail(newEmpresa.email))
      }, 1000)
      setCurrentUserStore(newEmpresa)
      setValidateState(true)
      setTimeout(() => {
        navigate("/empresa")
      }, 1500)
    }
  };


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
		<div className={style.mainContainer}>
			<div className={style.containerFirst}>{/* no quitar */}</div>
			<div className={style.containerSecond}>
				<div className={style.title}>
					<h2 style={{ margin: "20px" }}>Registro Empresa</h2>
				</div>
				<Form className={style.Form}>
					<Row>
						<FormGroup as={Col} md='6'>
							<FormLabel>Nombre</FormLabel>
							<FormControl
								name='name'
								placeholder='Nombre del reclutador'
								value={newEmpresa.name}
								type='text'
								onChange={handleInputChange}
								required
							/>
            <p className={style.errors}>{errors.name}</p>
						</FormGroup>
						<FormGroup as={Col} md='6'>
							<FormLabel>Nombre comercial</FormLabel>
							<FormControl
								name='business_name'
								placeholder='Nombre de la empresa'
								value={newEmpresa.business_name}
								type='text'
								onChange={handleInputChange}
								required
							/>
              <p className={style.errors}>{errors.business_name}</p>
						</FormGroup>
					</Row>
					<Row>
						<Form.Group as={Col} md='6' className='mb-3'>
							<FormLabel>CUIT</FormLabel>
							<FormControl
								name='cuit'
								placeholder='Cuit'
								value={newEmpresa.cuit}
								type='text'
								onChange={handleInputChange}
								required
							/>
              <p className={style.errors}>{errors.cuit}</p>
						</Form.Group>
						<FormGroup as={Col} md='6'>
							<FormLabel>País</FormLabel>
							<FormSelect
								name='country'
								value={newEmpresa.country}
								onChange={handleInputChange}
								required
							>
								<option disabled></option>
								{countriesNames.map((count) => (
									<option
										key={count.emoji}
										id={count.emoji}
										value={count.name}
									>
										{count.name}
									</option>
								))}
							</FormSelect>
						</FormGroup>
					</Row>

					<Row>
						<Col md={6}>
							<div
								style={{
									display: "flex",
									alignItems: "start",
									flexDirection: "column",
								}}
							>
								<FormLabel style={{ marginRight: "10px" }}>
									Logo
								</FormLabel>

								<div
									className={!image ? style.dropzone : "none"}
								>
									<Dropzone onDrop={handleDrop}>
										{({ getRootProps, getInputProps }) => (
											<div {...getRootProps()}>
												<input {...getInputProps()} />

												{!image ? (
													<p style={{'color':'gray'}}>
														Selecciona o arrastra
														una imagen
													</p>
												) : (
													<></>
												)}
											</div>
										)}
									</Dropzone>
								</div>

								{image && (
									<div>
										<img
											className={style.image}
											src={image}
											alt='Imagen cargada'
										/>
										<button
											style={{ margin: "10px" }}
											onClick={(event) =>
												handleRemove(event)
											}
										>
											<BsFillTrashFill />
										</button>
										<button
											onClick={(event) =>
												handleUpload(event)
											}
										>
											<BsCheckCircleFill />
										</button>
									</div>
								)}
							</div>
						</Col>

						<Col md={6}>
							<FormGroup>
								<FormLabel>Página web</FormLabel>
								<FormControl
									name='webPage'
									placeholder='Página web'
									value={newEmpresa.webPage}
									type='text'
									onChange={handleInputChange}
									required
								/>
                <p className={style.errors}>{errors.webPage}</p>
							</FormGroup>

							<FormGroup>
								<FormLabel>Área de trabajo</FormLabel>
								<FormControl
									name='job_area'
									placeholder='Área de trabajo'
									value={newEmpresa.job_area}
									type='text'
									onChange={handleInputChange}
									required
								/>
                <p className={style.errors}>{errors.job_area}</p>
							</FormGroup>
						</Col>
					</Row>

					<FormGroup as={Col} md='12'>
						<FormLabel>Descripción</FormLabel>
						<Form.Control
							name='description'
							placeholder='Escribe una breve descripcion de tu empresa (max. 200 caracteres)'
							value={newEmpresa.description}
							onChange={handleInputChange}
							as='textarea'
							rows={5}
							maxLength={200}
							required
						/>
						<Form.Control.Feedback type='invalid'>
							Rellena este campo
						</Form.Control.Feedback>
					</FormGroup>

					<Row>
						<FormGroup as={Col} md='6' className='mb-3'>
							<FormLabel>Email</FormLabel>
							<FormControl
								name='email'
								placeholder='Email'
								value={newEmpresa.email}
								type='text'
								onChange={handleInputChange}
								required
								disabled={
									newEmpresa.email === Company?.email
										? true
										: false
								}
							/>
              {Company ? <p></p>: <p className={style.errors}>{errors.email}</p>}
						</FormGroup>
						<FormGroup as={Col} md='6'>
							<FormLabel>Contraseña</FormLabel>
							<FormControl
								name='password'
								placeholder='Password'
								value={newEmpresa.password}
								type='password'
								onChange={handleInputChange}
								required
								disabled={
									newEmpresa.password === Company?.contraseña
										? true
										: false
								}
							/>
              {Company ? <p></p> : <p className={style.errors}>{errors.password}</p>}
						</FormGroup>
					</Row>
				</Form>
				<button className={style.button} type='submit' onClick={(event) => handleSubmit(event)}>
					{" "}
					Registrate
				</button>
			</div>
		</div>
  );
};

export default FormRegisterEmpresa;