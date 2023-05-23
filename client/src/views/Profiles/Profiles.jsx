import styles from './Profiles.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Page from '../../components/Paginated/Page';
import CardProfile from '../../components/CardsProfiles/CardsProfiles';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import { getAllUsers } from '../../Redux/Actions/actionsFunction/actionsUsers';

const Profiles = ({ setCurrentUserStore }) => {
    const usersRaw = useSelector(state => state.Users);
    const users = usersRaw.filter((user) => user.Cv !== null);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setusersPerPage] = useState(6);
    const indexOfLastCharacter = currentPage * usersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - usersPerPage;
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();


    useEffect(()=> {
        dispatch(getAllUsers())
    },[dispatch, getAllUsers]);
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);
    
    console.log(users);
    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    const currentUsers = users.slice(indexOfFirstCharacter, indexOfLastCharacter);

    useEffect(() => {
        if (currentUsers.length === 0 && users.length > 0) {
            const newPage = Math.ceil(users.length / usersPerPage);
            setCurrentPage(newPage);
    }
    }, [currentUsers, users, usersPerPage]);

    console.log(currentUsers);

    return (
        <div className={styles.container}>
            <NavBar setCurrentUserStore={setCurrentUserStore}/>
            <Page
                usersPerPage={usersPerPage}
                users={users}
                paginated={paginated}
            />
            {  isLoading ? (
                <Loading/>
            ) : (
                    <div className={styles.cardsContainer}>
                        {
                            currentUsers?.map(user => {
                                return ( 
                                    <div key={user.id} className={styles.cardDiv}>
                                        <CardProfile
                                        key={user.id}
                                        id={user.id}
                                        photo={user.Cv.photo}
                                        name={user.name}
                                        lastName={user.lastName}
                                        profession={user.Cv.profession}
                                        personal_description={user.Cv.personal_description}
                                        skills={user.Cv.skill}
                                        dni={user.Cv.dni}
                                        phone={user.cellphone}
                                        email={user.email}
                                        // seniority={user.seniority}
                                        linkedin={user.Cv.linkedin}
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

export default Profiles;

