import style from './CardCarousel.module.css'
import SearchBar from '../SearchBar/SearchBar';


const CardCarouselAplicant = ({ tittle, text }) => {



    return (
        <div className={style.MainContainer}>
            <h1>{tittle}</h1>
            <p>{text}</p>
            <SearchBar></SearchBar>

        </div>
    )
}

export default CardCarouselAplicant;