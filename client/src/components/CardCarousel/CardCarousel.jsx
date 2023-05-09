import { Button } from 'react-bootstrap';
import style from './CardCarousel.module.css'


const CardCarousel = ({tittle, text, textButton}) => {



    return(
        <div className={style.MainContainer}>
            <h1>{tittle}</h1>
            <p>{text}</p>
           <Button style={{width:'200px'}}>{textButton}</Button>

        </div>
    )
}

export default CardCarousel;