import NavBar from "../../components/NavBar/NavBarLog";
import CardsContainerEmpleo from "../../components/CardsContainerEmpleo/CardsContainerEmpleo";
import Filter from "../../components/Filter/Filter";
import Loading from "../../components/Loading/Loading";
import style from "./Empleos.module.css";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllVacants } from '../../Redux/Actions/actionsFunction/axtionsVacants'
import { useLocalStorage } from "../../useLocalStorage/useLocalStorage";


const Empleos = () => {
    const currentCard = useSelector(state => state.Vacant)
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [ currentCard2, setCurrendCard2 ] = useLocalStorage('cards', [])

    useEffect(()=>{
        if(currentCard.length === 0 && currentCard2.length === 0){
            dispatch(getAllVacants())           
        }
        if(currentCard.length !== 0 && currentCard2.length !== 0) setCurrendCard2(currentCard)
    },[dispatch, setCurrendCard2, currentCard ])

  
    function setAlgo (){
        setCurrendCard2(currentCard)
    }

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
                    <Filter currentCard={currentCard} setCurrendCard2={setCurrendCard2} setAlgo={setAlgo}></Filter>
                </div>
                <div className={style.cardsDiv}>

                    <CardsContainerEmpleo 
                        className={style.cards}
                        vacants={currentCard2.length === 0 ? currentCard : currentCard2} />
                        currentCard={currentCard} />

                </div>
            </div>
        </div>
    )
};


export default Empleos;