import style from './Landing.module.css';
import img from './viejo feliz.jpg';
import NavBar from '../../components/NavBar/NavBar';

const Landing = () => {

    return (
        <div className={style.landingDiv}>
            <div className={style.navDiv}>
                <NavBar/>
            </div>
            <div className={style.containerDiv}>
                <div className={style.imgDiv}>
                    <img src={img} className={style.img}/>
                </div>
                <div className={style.decorationDiv}>
                    <div className={style.searchDiv}>
                        <input className={style.input} placeholder=''/>
                        <button className="btn btn-outline-success me-2" type="button">Busca tu trabajo</button>
                    </div>
                    <div className={style.paragraph}>
                        <p className={style.text}>Somos la mejor aplicacion loco, usanos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;