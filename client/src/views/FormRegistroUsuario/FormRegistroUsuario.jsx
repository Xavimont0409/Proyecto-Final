import Form from 'react-bootstrap/Form';
import { FormLabel, FormControl, Row, Col } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import Loading from '../../components/Loading/Loading';
import style from './FormRegistroUsuario.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postUser } from '../../Redux/Actions/actionsFunction/actionsUsers';
import { getEmail } from '../../Redux/Actions/actionsFunction/FiltersHome';
import { validation } from './validation';


const FormRegistroUsuario = ({setCurrentUserStore2, Applicant, setValidateState, setCurrentUserStore}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [newUserApplicant, setNewUserApplicant] = useState({
    name: Applicant ? Applicant.nombre : "",
    lastName:Applicant ? Applicant.apellido : "",
    email:Applicant ? Applicant.email : "",
    cellphone: "",
    registed: true,
    password:Applicant ? Applicant.contraseña : "",
  })
  const [ errors, setErrors ] = useState({
	name: "",
    lastName:"",
    email:"",
    cellphone: "",
    registed: true,
    password:"",
  })

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setNewUserApplicant({ ...newUserApplicant, [property]: value });
	setErrors(validation({ ...newUserApplicant, [property]: value }))
  }

console.log(errors);
  const handleSubmit = (event) => {
    event.preventDefault()
    if(
      newUserApplicant.lastName &&
      newUserApplicant.cellphone &&
      newUserApplicant.name &&
      newUserApplicant.email
    ){
      dispatch(postUser(newUserApplicant))
      setTimeout(()=>{
        dispatch(getEmail(newUserApplicant.email))
      },500)
      setCurrentUserStore(newUserApplicant)
      setCurrentUserStore2(newUserApplicant)
      setValidateState(true)
      return setTimeout(()=>{
      navigate("/applicant")
      },1500)
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
		<div className={style.mainContainer}>
			<div className={style.containerFirst}>{/* no quitar */}</div>
			<div className={style.containerSecond}>
					<div className={style.title}>
						<h2>Completa tu Registro como Postulante</h2>
					</div>
					<Form>
						<Row>
							<Form.Group as={Col} md='6' className='mb-3'>
								<FormLabel>Nombre</FormLabel>
								<FormControl
									name='name'
									placeholder='Nombre'
									value={newUserApplicant.name}
									type='text'
									onChange={handleInputChange}
									required
									disabled={
										newUserApplicant.name ===
										Applicant?.nombre
											? true
											: false
									}
								/>
								<p className={style.errors}>{errors.name}</p>
							</Form.Group>

							<Form.Group as={Col} md='6' className='mb-3'>
								<FormLabel>Apellido</FormLabel>
								<FormControl
									name='lastName'
									placeholder='Apellido'
									value={newUserApplicant.lastName}
									type='text'
									onChange={handleInputChange}
									required
									disabled={
										newUserApplicant.lastName ===
										Applicant?.apellido
											? true
											: false
									}
								/>
								<p className={style.errors}>{errors.lastName}</p>
							</Form.Group>
						</Row>

						<Row>
							<Form.Group as={Col} md='6' className='mb-3'>
								<FormLabel>Email</FormLabel>
								<FormControl
									name='email'
									placeholder='Email'
									value={newUserApplicant.email}
									type='text'
									onChange={handleInputChange}
									required
									disabled={
										newUserApplicant.email ===
										Applicant?.email
											? true
											: false
									}
								/>
								<p className={style.errors}>{errors.email}</p>
							</Form.Group>

							<Form.Group as={Col} md='6' className='mb-3'>
								<FormLabel>Celular</FormLabel>
								<FormControl
									name='cellphone'
									placeholder='Numero de celular'
									value={newUserApplicant.cellphone}
									type='text'
									onChange={handleInputChange}
									required
								/>
								<p className={style.errors}>{errors.cellphone}</p>
							</Form.Group>

							<Form.Group as={Col} md='6' className='mb-3'>
								<FormLabel>Password</FormLabel>
								<FormControl
									name='password'
									placeholder='Password'
									value={newUserApplicant.password}
									type='password'
									onChange={handleInputChange}
									required
									disabled={
										newUserApplicant.password ===
										Applicant?.contraseña
											? true
											: false
									}
								/>
								{Applicant ? <p></p> : <p className={style.errors}>{errors.password}</p>}
							</Form.Group>
						</Row>
					</Form>
					<button
            className={style.button}
						type='submit'
						onClick={(event) => handleSubmit(event)}
					>
						{" "}
						Registrate
					</button>
			</div>
		</div>
  );
};

export default FormRegistroUsuario;