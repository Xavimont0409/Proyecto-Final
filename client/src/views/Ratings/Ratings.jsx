import style from './Ratings.module.css';
import NavBar from '../../components/NavBar/NavBar';
import RatingListDiv from '../../components/RatingList/RatingListDiv';

const Ratings = ({ setValidateState, setCurrentUserStore2 }) => {
    return (
        <div className={style.container}>
            <NavBar setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} />
            <div className='{style.ratingContainer}'>
                <RatingListDiv/>
            </div>
        </div>
    )
};

export default Ratings;