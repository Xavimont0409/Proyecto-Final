import style from './RatingList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCompanyDetail } from '../../Redux/Actions/actionsFunction/actionsCompanys';
import Table from 'react-bootstrap/Table';

const RatingList = () => {
    const userType = JSON.parse(localStorage.getItem("currentUser"));
    const companyDetails = useSelector(state => state.CompanyDetail);
    const dispatch = useDispatch();
    console.log(companyDetails);

    useEffect(() => {
        dispatch(getCompanyDetail(userType));
    }, [dispatch]);

    return (
        <Table striped="columns">
        <thead>
            <tr>
            <th>Stars</th>
            <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {
                companyDetails?.map((company) => {
                    console.log(company.Stars);
                    return (
                        <tr key={company.id}>
                            <td>{company.Stars?.map((review) => {
                                console.log(review.stars);
                                return (
                                    <p key='{review.id}'>{review.stars}</p>
                                )
                            })}</td>
                            <td>{company.Stars?.map((description) => {
                                return (
                                    <p key='{description.id}'>{description.text}</p>
                                )
                            })}</td>
                        </tr>
                    )
                })
            }
        </tbody>
        </Table>
    )
};

export default RatingList;