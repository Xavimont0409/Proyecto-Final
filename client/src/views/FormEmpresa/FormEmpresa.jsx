import style from "./FormEmpresa.module.css"
import { useState } from "react";



export default function FormEmpresa ({setAccess})  {



    const [newempresa, setNewEmpresa] = useState({
        title: "",
        description: "",
    });

    

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setNewEmpresa({ ...newempresa, [property]: value });
        // setErrors(validate({ ...newUser, [property]: value }));
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
                                value={newempresa.title}
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
                                value={newempresa.description}
                                placeholder="Descripcion de la vacante"
                                onChange={handleInputChange}
                                className={style.input}
                                required />
                        </div>
                        {/* <div>
                            {errors.username && <span className={style.danger}>...{errors.username}</span>}
                        </div> */}
                    </div>


                    <div className={style.buttonContainer}>
                        <button className={style.button}> Crear empresa </button>
        
                    </div>

                </form>

            </div>

        </div>
    )
}


