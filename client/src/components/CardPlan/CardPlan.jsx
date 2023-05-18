import { Button } from 'react-bootstrap';
import style from './CardPlan.module.css';
import { useNavigate } from 'react-router-dom';

const CardPlan = ({id, tittle, text, price }) => {

    const navigator = useNavigate();


    return (
        <div className={style.MainContainer}>
            <h3>{tittle}</h3>
            <h2>$ {price}</h2>
            <p>{text}</p>

            {
                id === '1' 
                ?<Button onClick={()=>navigator(`/product/1`)} style={{width:'200px'}}>Más Info</Button> 
                : (id === '2' 
                ? <Button onClick={()=>navigator(`/product/2`)} style={{width:'200px'}}>Más Info</Button>
                : <Button onClick={()=>navigator(`/product/3`)} style={{width:'200px'}}>Más Info</Button>)
                
            }
        </div>
    )
}



export default CardPlan