import style from './Landing.module.css';
import { Button } from 'react-bootstrap';
import video from '../../assets/video/Fondo.mp4';
import MisionVisión from '../../components/MisionVision/MisionVisión';
import NavBar from '../../components/NavBar/NavBar';
import Loading from "../../components/Loading/Loading";
import CardsEquipo from '../../components/CardEquipo/CardEquipo';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
                <div className={style.videoDiv}>
                    <video loop autoPlay muted>
                        <source src={video} type="video/mp4" />
                    </video>
                    </div>
                    <div className={style.searchDiv}>
                    <div className={style.paragraph}>
                        <h1 className={style.title}>JobPortalX</h1>
                        <p className={style.text}>Somos el nuevo portal de trabajo, con mas dinamismo del mercado, donde encontrarás las mejores oportunidades laborales</p>
                    </div>
                    <div className={style.buttonDiv}>
                        <input className={style.input} placeholder='' />
                        <Link to="/empleos">
                            <Button variant="outline-secondary" className="ms-auto">Busca Tu Trabajo</Button>
                        </Link>
                    </div>
                </div>
            </div>

                <MisionVisión />
                <CardsEquipo />

        </div>
    )
}

export default Landing;
