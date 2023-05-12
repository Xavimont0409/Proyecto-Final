import style from './CardEquipo.module.css';


const CardsEquipo = () => {

    const arrayEquipo = [
        { name: "Joel",
        lastname: "Dupraz",
        github: "https://github.com/JoelDUAR",
        linkedin: "https://www.linkedin.com/in/joel-dupraz-ardiles/",
        photo:"https://avatars.githubusercontent.com/u/85464395?v=4"
    },
    { name: "Leandro",
    lastname: "Martinez",
    github: "https://github.com/Lean0mar",
    linkedin: "https://www.linkedin.com/in/lean0mar/",
    photo:"https://avatars.githubusercontent.com/u/122496170?v=4"
    },
    { name: "Xavier",
    lastname: "Montero",
    github: "https://github.com/Xavimont0409",
    linkedin: "https://www.linkedin.com/in/xavier-montero-b343b8231/",
    photo:"https://avatars.githubusercontent.com/u/122754733?v=4"
    },
    { name: "Augusto",
    lastname: "Viggiano",
    github: "https://github.com/AugusViggia",
    linkedin: "https://www.linkedin.com/in/augusto-viggiano-195134213/",
    photo:"https://avatars.githubusercontent.com/u/112136936?v=4"
    },
    { name: "Juan",
    lastname: "Genovese",
    github: "https://github.com/JuanGenovese",
    linkedin: "https://www.linkedin.com/in/juancruzgenovese/",
    photo:"https://avatars.githubusercontent.com/u/107717991?v=4"
    },
    { name: "Andrés",
    lastname: "Rojas Pérez",
    github: "https://github.com/AndresFelipeRojasPerez",
    linkedin: "https://www.linkedin.com/in/andr%C3%A9s-felipe-rojas-p%C3%A9rez-500491262/",
    photo:"https://avatars.githubusercontent.com/u/109153596?v=4"
    },
    { name: "Victor",
    lastname: "Rua Montalvo",
    github: "https://github.com/henryrua079",
    linkedin: "https://www.linkedin.com/in/victor-rua/",
    photo:"https://avatars.githubusercontent.com/u/110183477?v=4"
    },
    { name: "Gaspar",
    lastname: "Almaraz",
    github: "https://github.com/GasparAlmaraz",
    linkedin: "https://www.linkedin.com/in/gaspar-almaraz-b12840209/",
    photo:"https://avatars.githubusercontent.com/u/69637544?v=4"
    },
    ]

    return (
        <div className={style.containerPadre}>
            {arrayEquipo.map((integrante) => {
                return(
                    <div className={style.container}>
                        <img src={integrante.photo} alt={integrante.name} className={style.img} />
                        <h3 className={style.title}>{integrante.name}{integrante.lastname}</h3>
                        <p className={style.text}>{integrante.linkedin}</p>
                        <p className={style.text}>{integrante.github}</p>
                    </div>
                )
            })}
        </div>
    )

}


export default CardsEquipo;