import { useEffect, useState } from "react";
import Card from "../CardEmpleo/CardEmpleo";
import style from "./CardsContainerEmploes.module.css";
import Page from "../Paginated/Page";


const CardsContainerEmpleo = ({ vacants }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [vacantsPerPage, /* setVacantsPerPagePerPage */] = useState(5);
    const indexOfLastCharacter = currentPage * vacantsPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - vacantsPerPage;


    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    const currentVacants = vacants.slice(indexOfFirstCharacter, indexOfLastCharacter);

    useEffect(() => {
        if (currentVacants.length === 0 && vacants.length > 0) {
            const newPage = Math.ceil(vacants.length / vacantsPerPage);
            setCurrentPage(newPage);
    }
    }, [currentVacants, vacants, vacantsPerPage]);

    return (
        <div className={style.mainContainer}>
            <Page
                usersPerPage={vacantsPerPage}
                users={vacants}
                paginated={paginated}
            />
            <div className={style.cardsContainer}>
                {
                    currentVacants?.map(vacancy => {
                        return (
                            <Card
                                key={vacancy.id}
                                id={vacancy.id}
                                // logo={vacancy.logo}
                                title={vacancy.title}
                                description={vacancy.description}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardsContainerEmpleo;