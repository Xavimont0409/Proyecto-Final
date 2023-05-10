import style from "./FormCv.module.css"
import { useState } from "react";

export default function FormCv ()  {


    const [newCv, setNewCv] = useState({
        title: "",
        description: "",
    });

 

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setNewCv({ ...newCv, [property]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
       
    }




    
    return (
        <div className={style.container}>

            <div >
                <form onSubmit={handleSubmit} className={style.Form}>

                    <div>
                        <div>
                            <label htmlFor="title"
                                className={style.label}>titulo de tu vacante:</label>
                            <input className={style.inputEmail}
                                name="email"
                                type="text"
                                value={newCv.title}
                                placeholder="titulo de la vacante"
                                onChange={handleInputChange}
                                required />
                        </div>
         
                    </div>


                    <div>
                        <div>
                            <label htmlFor="descrition"
                                className={style.label}>Descripcion de la vacante:</label>
                            <input name="description"
                                type="textArea"
                                value={newCv.description}
                                placeholder="Descripcion de la vacante"
                                onChange={handleInputChange}
                                className={style.input}
                                required />
                        </div>
                     
                    </div>


                    <div className={style.buttonContainer}>
                        <button className={style.button}> Crear CV </button>
        
                    </div>

                </form>

            </div>

        </div>
    )
}

