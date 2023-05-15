import { Button } from 'react-bootstrap';
import style from './CardCarousel.module.css'
import { useNavigate } from 'react-router-dom';


const CardCarousel = ({tittle, text, textButton, route}) => {
 
    const navigator = useNavigate();


    return(
        <div className={style.MainContainer}>
            <h1>{tittle}</h1>
            <p>{text}</p>
            
            {
                route === '/profiles' 
                ? <Button onClick={()=>navigator('/profiles')} style={{width:'200px'}}>{textButton}</Button> 
                : (route === '/profiles-company' 
                ?<Button onClick={()=>navigator('/profiles-company')} style={{width:'200px'}}>{textButton}</Button>
                : <Button onClick={()=>navigator('/registro-vacante')} style={{width:'200px'}}>{textButton}</Button>)
                
            }
           

        </div>
    )
}

export default CardCarousel;