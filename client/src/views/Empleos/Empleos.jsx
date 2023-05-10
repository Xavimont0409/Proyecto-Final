import NavBar from "../../components/NavBar/NavBar"
import CardsContainerEmpleo from "../../components/CardsContainerEmpleo/CardsContainerEmpleo";
import Filter from "../../components/Filter/Filter"
import style from "./Empleos.module.css"
import logo1 from "../../assets/img/logo1.png"
import logo2 from "../../assets/img/logo2.png"
import logo3 from "../../assets/img/logo3.png"



const Empleos = () => {

    const currentCard = [
        {
            id: 1,
            title: 'Desarrollador Junior',
            logo:logo1,
            description: 'Nos encontramos en la búsqueda de profesionales con experiencia en el puesto de jefe de mantenimiento critico',
        },
        {
            id: 2,
            title: 'Asistente Técnico de Soporte de SW y Hardware - Pisco',
            logo:logo2,
            description: 'En Protiviti estamos buscando un Asistente Técnico de Soporte de SW y Hardware para nuestro cliente del rubo portuario.',
        },

        {
            id: 3,
            title: 'Desarrollador sin experiencia',
            logo: logo3,
            description: 'En google estamos buscando un programdor sin experiencia para pagarle 4K USD por mes',
        }
]


    return (
        <div className={style.mainContainer}>
            <NavBar></NavBar>
            <div className={style.filterAndCardsContainer}>
                <Filter></Filter>
                <CardsContainerEmpleo
                    currentCard={currentCard} />
                  
            </div>
        </div>
    )
}


export default Empleos;