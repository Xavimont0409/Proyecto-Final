import style from './Landing.module.css';
import { Button } from 'react-bootstrap';
import img from './viejo feliz.jpg';

const Landing = () => {

    return (
        <div className='{style.landingDiv}'>
            <nav></nav>
            <div className='{style.imgDiv}'>
                <img src={img} className='{style.img}'/>
            </div>
            <div className='{style.searchDiv}'>
                <input className='{style.input}' placeholder=''/>
                <Button>Busca Tu Trabajo</Button>
            </div>
            <div>
                <p>Somos la mejor aplicacion loco, usanos</p>
            </div>
        </div>
    )
}

export default Landing;