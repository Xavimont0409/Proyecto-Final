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
                ?<Button onClick={()=>navigator(`/product/${id= 1}`)} style={{width:'200px'}}>Adquirir</Button> 
                : (id === '2' 
                ? <Button onClick={()=>navigator(`/product/${id = 2}`)} style={{width:'200px'}}>Adquirir</Button>
                : <Button onClick={()=>navigator(`/product/${id = 3}`)} style={{width:'200px'}}>Adquirir</Button>)
                
            }
        </div>
    )
}



export default CardPlan