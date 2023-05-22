import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBarLog"
import Step1FormCv from "../../components/Step1FormCv/Step1FormCv";
import Step2FormCv from "../../components/Step2FormCv/Step2FormCv";
import Step3FormCv from "../../components/Step3FormCv/Step3FormCv";
import style from "./FormCv.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getEmail } from "../../Redux/Actions/actionsFunction/FiltersHome";


function FormCv() {

  const { user, isAuthenticated } = useAuth0();

  const [step, setStep] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.email) {
      dispatch(getEmail(user.email));
    }
  }, [dispatch, user]);

  const currentUser = useSelector((state) => state.dataEmail[0])

  const [cv, setCv]= useState({
    dni: '',
    phone: '',
    address:'',
    photo: '',
    linkedin: '',
    skill: '',
    personal_description: '',
    profession: '',
    country: '',
    educational_institution: '',
    state: '',
    initial_date: '',
    finish_date: '',
    ApplicantId: ''
  })



  useEffect(() => {
    if (currentUser) {
      setCv(prevCv => ({
        ...prevCv,
        phone: currentUser.cellphone,
        ApplicantId: currentUser.id
      }));
    }
  }, [currentUser]);



  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };


  const handlerChange = (event, state, setState) => {
    const property = event.target.name;
    const value = event.target.value;
    setState({ ...state, [property]: value });
  }


  return (

    <div className={style.container}>

      <NavBar></NavBar>

      <div className={style.container2} style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>
          {step === 1 &&
            <Step1FormCv
            cv={cv}
            setCv={setCv}
            handlerChange={handlerChange}
            currentUser={currentUser}
            nextStep={nextStep} />
          }

          {step === 2 &&
            <Step2FormCv
              cv={cv}
              setCv={setCv}
              handlerChange={handlerChange}
              previousStep={previousStep}
              nextStep={nextStep} />
          }

          {/* {step === 3 &&
            <Step3FormCv
              cv={cv}
              setCv={setCv}
              experiencia={experiencia}
              setExperiencia={setExperiencia}
              handlerChange={handlerChange}
              previousStep={previousStep}
            />
          } */}
        </div>

        <div style={{ flex: 0.2, marginRight: '100px', marginLeft: '-300px', marginTop: '-300px' }}>
          <h4>Paso {step} de 2</h4>
        </div>
      </div>

    </div>
  );
}

export default FormCv;


