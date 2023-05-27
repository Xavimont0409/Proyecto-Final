import style from './Ratings.module.css';
import NavBar from '../../components/NavBar/NavBar';
import RatingListDiv from '../../components/RatingList/RatingListDiv';

const Ratings = () => {
    return (
        <div className={style.container}>
            <NavBar/>
            <div className='{style.ratingContainer}'>
                <h2>Ratings</h2>
                <RatingListDiv/>
            </div>
        </div>
    )
};

export default Ratings;