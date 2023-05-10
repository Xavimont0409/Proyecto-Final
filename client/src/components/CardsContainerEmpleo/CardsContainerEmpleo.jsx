import Card from "../CardEmpleo/CardEmpleo";
import style from "./CardsContainerEmploes.module.css";


const CardsContainerEmpleo = ({ currentCard }) => {
    return (
        <div className={style.mainContainer}>
            <div className={style.cardsContainer}>
                {currentCard?.map(vacancy => {
                    return <Card
                        key={vacancy.id}
                        id={vacancy.id}
                        logo={vacancy.logo}
                        title={vacancy.title}
                        description={vacancy.description} />
                })}
            </div>
        </div>
    )
}

export default CardsContainerEmpleo;