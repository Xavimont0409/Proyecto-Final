import style from './RatingList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCompanyDetail } from '../../Redux/Actions/actionsFunction/actionsCompanys';
import Table from 'react-bootstrap/Table';

const RatingListDiv = () => {
    const userType = JSON.parse(localStorage.getItem("currentUser"));
    const companyDetails = useSelector(state => state.CompanyDetail).Stars;
    const dispatch = useDispatch();
    console.log(companyDetails);

    useEffect(() => {
        dispatch(getCompanyDetail(userType.id));
    }, []);

    return (
        <div className={style.table}>
            <div className={style.titles}>
                <div className={style.titleStars}>
                    <p>Stars</p>
                </div>
                <div className={style.titleComments}>
                    <p>Comments</p>
                </div>
            </div>
            {
                companyDetails?.map((company) => {
                    console.log(company.Stars);
                    
                    if (company.Stars.length > 0) {
                        const starsArray = company.Stars.map((review) => parseInt(review.stars));
                        const sum = starsArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                        const average = sum / starsArray.length;
                        const roundedAverage = Math.round(average);

                        return (
                            <div key={company.id} className={style.reviewsColumn}>
                                <div className={style.starRow}>
                                        <p key='{review.id}' className={style.pText}>{roundedAverage}</p>
                                </div>
                                <div className={style.textRow}>
                                    {
                                        company.Stars?.map((description) => {
                                            return (
                                                <p key='{description.id}' className={style.pText}>{description.text}</p>
                                            )
                                        })
                                    }</div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
};

export default RatingListDiv;