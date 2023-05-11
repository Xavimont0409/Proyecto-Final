import { Button } from 'react-bootstrap';
import style from './CardCarousel.module.css'
import { useNavigate } from 'react-router-dom';


const CardCarousel = ({tittle, text, textButton}) => {
 
    const navigator = useNavigate();


    return(
        <div className={style.MainContainer}>
            <h1>{tittle}</h1>
            <p>{text}</p>
           <Button onClick={()=>navigator('/registro-vacante')} style={{width:'200px'}}>{textButton}</Button>

        </div>
    )
}

export default CardCarousel;