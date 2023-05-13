import style from "./ButtonGeneral.module.css"

const ButtonGeneral = ({ textButton, handlerClick, clase, type = 'button', disabled = false }) => {
    return (
        <button
            className={`${style.button} ${clase}`}
            type={type}
            onClick={handlerClick}
            disabled={disabled}
        >
            {textButton}
        </button>
    )
}

export default ButtonGeneral;