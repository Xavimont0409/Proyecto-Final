import style from './Landing.module.css';
import { Button } from 'react-bootstrap';
import img from './viejo feliz.jpg';
import NavBar from '../../components/NavBar/NavBar';
import Loading from "../../components/Loading/Loading";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';

const Landing = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return <Loading />;
    };

    return (
        <div className={style.landingDiv}>
            <NavBar/>
            <div className={style.container}>
                <div className={style.imgDiv}>
                    <img src={img} className={style.img}/>
                </div>
                <div className={style.searchDiv}>
                    <input className={style.input} placeholder='' />
                    <div className={style.buttonDiv}>
                        <Link to="/empleos">
                            <Button variant="outline-secondary" className="ms-auto">Busca Tu Trabajo</Button>
                        </Link>
                    </div>
                    <div className={style.paragraph}>
                        <p>Somos la mejor aplicacion loco, usanos</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Landing;