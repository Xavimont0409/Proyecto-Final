import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from "react-router-dom";
import style from "./MiniCardEmpleosRel.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllVacants, getVacantDetail } from '../../Redux/Actions/actionsFunction/axtionsVacants';

function MiniCardEmpleosRel({idEmpleoSelected, title}) {
  
const navigation = useNavigate();

const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getAllVacants());

},[dispatch, getAllVacants])

const empleos = useSelector(state => state.Vacant);

 const wordKeysRaw = title.split(' ');
      const wordKeys = wordKeysRaw.filter((wrd) => wrd.length > 3);
      const empleosRelSelected = empleos.filter((emple) => {
            if(emple.id !== idEmpleoSelected ){
              return wordKeys.some((word) => emple.title.includes(word) ) 
              }
          });

  return (
    <>
    {empleosRelSelected.length === 0 ? <p>No hay empleos relacionados</p> 
    
    :
    
         <div>
                  {empleosRelSelected.map((empleo)=> {
                    return  <Card className="text-center" key={empleo.id}>
                    <Card.Header>Vacante sugerida</Card.Header>
                    <Card.Body>
                      <Card.Title>{empleo.title}</Card.Title>
                      <Card.Text>
                        Jornada: {empleo.Workday.name}
                      </Card.Text>
                      <Card.Text>
                       Método: {empleo.WorkMethod.name}
                      </Card.Text>
                      <Link to={`/empleoDetail/${empleo.id}`}>
                      <Button onClick={() => dispatch(getVacantDetail(empleo.id))} className={style.btn} variant="outline-success">VER DETALLE</Button>{' '}
                      </Link>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                  </Card>
    
                  })}
    
          </div>
    }
    </>
    
  );
}

export default MiniCardEmpleosRel;
