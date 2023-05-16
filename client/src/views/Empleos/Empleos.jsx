import NavBar from "../../components/NavBar/NavBarLog";
import CardsContainerEmpleo from "../../components/CardsContainerEmpleo/CardsContainerEmpleo";
import Filter from "../../components/Filter/Filter";
import Loading from "../../components/Loading/Loading";
import style from "./Empleos.module.css";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllVacants } from '../../Redux/Actions/actionsFunction/axtionsVacants'


const Empleos = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const currentCard = useSelector(state => state.Vacant)

    useEffect(()=>{
        dispatch(getAllVacants())
    },[dispatch])

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
                    <Filter ></Filter>
                </div>
                <div className={style.cardsDiv}>

                    <CardsContainerEmpleo 
                        className={style.cards}
                        vacants={currentCard} />

                </div>
            </div>
        </div>
    )
};


export default Empleos;