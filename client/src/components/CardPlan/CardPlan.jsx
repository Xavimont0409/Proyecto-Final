import { Button } from 'react-bootstrap';
import style from './CardPlan.module.css'

const CardPlan = ({ tittle, text, price }) => {

    return (
        <div className={style.MainContainer}>
            <h3>{tittle}</h3>
            <h2>$ {price}</h2>
            <p>{text}</p>

            <Button style={{ width: '100px' }}>Adquirir</Button>

        </div>
    )
}



export default CardPlan