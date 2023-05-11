import NavBar from "../../components/NavBar/NavBarUnlog"
import CardsContainerEmpleo from "../../components/CardsContainerEmpleo/CardsContainerEmpleo";
import Filter from "../../components/Filter/Filter"
import style from "./Empleos.module.css"
import { useSelector } from "react-redux";



const Empleos = () => {

    const currentCard = useSelector(state => state.publications)
    console.log(currentCard);
    
    
 


    return (
        <div className={style.mainContainer}>
            <NavBar></NavBar>
            <div className={style.filterAndCardsContainer}>
                <Filter></Filter>
                <div>

                    <CardsContainerEmpleo
                        currentCard={currentCard} />

                </div>
            </div>
        </div>
    )
}


export default Empleos;