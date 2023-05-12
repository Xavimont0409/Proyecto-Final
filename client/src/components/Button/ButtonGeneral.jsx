import style from "./ButtonGeneral.module.css"

const ButtonGeneral = ({ textButton, handlerClick, tipo }) => {
    return (
        <button
            className={style.button}
            type={tipo}
            oncliCk={event=>handlerClick(event)}
            
        >
            {textButton}
        </button>
    )
}


export default ButtonGeneral;