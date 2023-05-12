import styles from './Profiles.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Page from '../../components/Paginated/Page';
import CardProfile from '../../components/CardsProfiles/CardsProfiles';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';

const Profiles = () => {
    const users = useSelector(state => state.users);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setusersPerPage] = useState(4);
    const indexOfLastCharacter = currentPage * usersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - usersPerPage;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    const currentUsers = users.slice(indexOfFirstCharacter, indexOfLastCharacter);

    useEffect(() => {
        if (currentUsers.length === 0 && users.length > 0) {
            const newPage = Math.ceil(users.length / usersPerPage);
            setCurrentPage(newPage);
    }
    }, [currentUsers, users]);

    return (
        <div className={styles.container}>
            <NavBar />
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
                                        name={user.name}
                                        email={user.email}
                                        skills={user.skills}
                                        experience={user.experience}
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

