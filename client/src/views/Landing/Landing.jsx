import style from './Landing.module.css';
import UncontrolledExample from "../../components/CarouselLanding/CarouselLanding"
import NavBar from '../../components/NavBar/NavBar';
import Loading from "../../components/Loading/Loading";
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
        <div className={style.container}>
            <div>

                <NavBar></NavBar>
                <UncontrolledExample></UncontrolledExample>
            </div>

        

        </div>
    )
}

export default Landing;