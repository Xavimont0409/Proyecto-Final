import { useEffect, useState } from "react";
import Card from "../CardEmpleo/CardEmpleo";
import style from "./CardsContainerEmploes.module.css";
import Page from "../Paginated/Page";


const CardsContainerEmpleo = ({ vacants }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [vacantsPerPage, /* setVacantsPerPagePerPage */] = useState(20);
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
console.log(vacants);
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
                        let truncatedDescription = vacancy.description.slice(0, 200);
                            if (vacancy.description.length > 200) {
                                 truncatedDescription += ' . . . ';
                                 }
                        return (
                            <Card
                                key={vacancy.id}
                                id={vacancy.id}
                                // logo={vacancy.logo}
                                title={vacancy.title}
                                description={truncatedDescription}
                                Workday={vacancy.Workday.name}
                                WorkMethod={vacancy.WorkMethod.name}
                                Seniority={vacancy.Seniority.name}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardsContainerEmpleo;