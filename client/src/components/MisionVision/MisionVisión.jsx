import style from './MisionVisión.module.css'


const MisionVisión = () => {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.containerInfo}>
                    <h2 className={style.title}>Nuestra Misión</h2>
                    <p className={style.text}>Aportar al mercado laboral, un portal de empleo que permita tener las mayores oportunidades, con las mejores actualizaciones para contribir a un futuro sustentable y socialmente responsable </p>
                </div>
            </div>
            <div className={style.box}>
                <div className={style.containerInfo}>
                    <h2 className={style.title}>Nuestra Visión</h2>
                    <p className={style.text}>JobPortalX podrá posicionarse como un gigante de empleabilidad para empoderar a empresas y postulantes para que puedan crear los mejores vinculos laborales, constribuyendo a mejorar el mercado laboral</p>
                </div> 
            </div>            
        </div>
    )
}


export default MisionVisión;