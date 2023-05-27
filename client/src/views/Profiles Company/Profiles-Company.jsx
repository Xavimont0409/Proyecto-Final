import styles from './Profiles-Company.module.css';
import NavBar from '../../components/NavBarUnlog/NavBarUnlog';
import Page from '../../components/Paginated/Page';
import CardProfileCompany from '../../components/CardsProfilesCompany/CardsProfilesCompany';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import { getAllCompanys } from '../../Redux/Actions/actionsFunction/actionsCompanys';

const ProfilesCompany = ({setValidateState, setCurrentUserStore2}) => {
    const company = useSelector(state => state.Company);
    const [currentPage, setCurrentPage] = useState(1);
    const [companiesPerPage, setcompaniesPerPage] = useState(4);
    const indexOfLastCharacter = currentPage * companiesPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - companiesPerPage;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            getAllCompanys();
        }, 2000);
    }, []);

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    const currentCompanies = company.slice(indexOfFirstCharacter, indexOfLastCharacter);

    useEffect(() => {
        if (currentCompanies.length === 0 && company.length > 0) {
            const newPage = Math.ceil(company.length / companiesPerPage);
            setCurrentPage(newPage);
    }
    }, [companiesPerPage, company.length, currentCompanies]);

    return (
        <div className={styles.container}>
            <NavBar setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2}/>
            <Page
                usersPerPage={companiesPerPage}
                users={company}
                paginated={paginated}
            />
            {  isLoading ? (
                <Loading/>
            ) : (
                    <div className={styles.cardsContainer}>
                        {
                            currentCompanies?.map(company => {
                                return (
                                    <div key={company.id} className={styles.cardDiv}>
                                        <CardProfileCompany
                                        key={company.id}
                                        id={company.id}
                                        business_name={company.business_name}
                                        email={company.email}
                                        country={company.country}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            <footer></footer>
        </div>
    )
};

export default ProfilesCompany;

