import NavBar from "../../components/NavBar/NavBarUnlog";
import CardsContainerEmpleo from "../../components/CardsContainerEmpleo/CardsContainerEmpleo";
import Filter from "../../components/Filter/Filter";
import Loading from "../../components/Loading/Loading";
import style from "./Empleos.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


const Empleos = () => {

    const [isLoading, setIsLoading] = useState(true);
    const currentCard = useSelector(state => state.publications)
    console.log(currentCard);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className={style.mainContainer}>
            <NavBar></NavBar>
            <div className={style.filterAndCardsContainer}>
                <div className={style.filters}>
                    <Filter></Filter>
                </div>
                <div className={style.cardsDiv}>

                    <CardsContainerEmpleo
                        currentCard={currentCard} />

                </div>
            </div>
        </div>
    )
};


export default Empleos;