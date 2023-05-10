import { Link } from "react-router-dom"
import style from './CardEmpleo.module.css'



const CardEmpleo = (props) => {


    return (


        <Link className={style.words} to={`/empleoDetail/${props.id}`}>
            <div className={style.mainContainer}>
                <div className={style.cardContainer}>
                    <img className={style.image} src={props.logo} alt="logo" />
                    <h2 className={style.temps} >{props.title}</h2>
                </div>
                <p>{props.description}</p>
            </div>

        </Link>
  )
}

export default CardEmpleo