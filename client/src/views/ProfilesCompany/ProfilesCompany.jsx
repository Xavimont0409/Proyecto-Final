import styles from './ProfilesCompany.module.css';
import NavBar from '../../components/NavBarUnlog/NavBarUnlog';
import Page from '../../components/Paginated/Page';
import CardProfileCompany from '../../components/CardsProfilesCompany/CardsProfilesCompany';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import { getAllCompanys } from '../../Redux/Actions/actionsFunction/actionsCompanys';

<<<<<<< HEAD:client/src/views/Profiles Company/Profiles-Company.jsx
const ProfilesCompany = ({ setCurrentUserStore }) => {
    const companies = useSelector(state => state.Company);
    const [currentPage, setCurrentPage] = useState(1);
    const [companiesPerPage, setCompaniesPerPage] = useState(6);
=======
const ProfilesCompany = ({setValidateState, setCurrentUserStore2}) => {
    const company = useSelector(state => state.Company);
    const [currentPage, setCurrentPage] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [companiesPerPage, setcompaniesPerPage] = useState(4);
>>>>>>> 2ae2a0e729920d7bfe41619f846301e449106501:client/src/views/ProfilesCompany/ProfilesCompany.jsx
    const indexOfLastCharacter = currentPage * companiesPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - companiesPerPage;
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    
   
  
    useEffect(()=> {
        dispatch(getAllCompanys())
  
    },[dispatch, getAllCompanys]);
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);
    

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    const currentCompanies = companies.slice(indexOfFirstCharacter, indexOfLastCharacter);

    useEffect(() => {
        if (currentCompanies.length === 0 && companies.length > 0) {
            const newPage = Math.ceil(companies.length / companiesPerPage);
            setCurrentPage(newPage);
    }
    }, [currentCompanies, companies, companiesPerPage]);


    return (
        <div className={styles.container}>
            <NavBar setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2}/>
            <Page
                usersPerPage={companiesPerPage}
                users={companies}
                paginated={paginated}
            />
            {  isLoading ? (
                <Loading/>
            ) : (
                    <div className={styles.cardsContainer}>
                        {
                            currentCompanies?.map(compan => {
                                return ( 
                                    <div key={compan.id} className={styles.cardDiv}>
                                        <CardProfileCompany
                                        key={compan.id}
                                        id={compan.id}
                                        // logo={compan.logo}
                                        business_name={compan.business_name}
                                        // description={compan.description}
                                        // work_sector={compan.work_sector}
                                        name={compan.name}
                                        country={compan.country}
                                        cuit={compan.cuit}
                                        email={compan.email}
                                        // web={compan.web}
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
