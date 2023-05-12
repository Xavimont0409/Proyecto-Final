import styles from './Profiles-Company.module.css';
import NavBar from '../../components/NavBar/NavBarUnlog';
import Page from '../../components/Paginated/Page';
import CardProfileCompany from '../../components/CardsProfilesCompany/CardsProfilesCompany';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';

const ProfilesCompany = () => {
    //const company = useSelector(state => state.company);
    const [currentPage, setCurrentPage] = useState(1);
    const [companiesPerPage, setusersPerPage] = useState(4);
    const indexOfLastCharacter = currentPage * companiesPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - companiesPerPage;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    const currentCompanies = users.slice(indexOfFirstCharacter, indexOfLastCharacter);

    useEffect(() => {
        if (currentCompanies.length === 0 && users.length > 0) {
            const newPage = Math.ceil(users.length / companiesPerPage);
            setCurrentPage(newPage);
    }
    }, [currentCompanies, ]);

    return (
        <div className={styles.container}>
            <NavBar />
            <Page
                companiesPerPage={companiesPerPage}
                //companies={}
                paginated={paginated}
            />
            {  isLoading ? (
                <Loading/>
            ) : (
                    <div className={styles.cardsContainer}>
                        {
                            currentCompanies?.map(company => {
                                // return (
                                    // <div key={company.id} className={styles.cardDiv}>
                                    //     <CardProfileCompany
                                    //     key={company.id}
                                    //     id={company.id}
                                    //     business_name={company.business_name}
                                    //     email={company.email}
                                    //     country={company.country}
                                    //     />
                                    // </div>
                                // )
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

