import { Link } from "react-router-dom"
import { Button, FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import style from "./SearchBar.module.css"


const SearchBar = () => {
    return (
        <div className={style.searchDiv}>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="busca por palabra clave"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <div className={style.buttonDiv}>
                <Link to="/empleos">
                    <Button className="ms-auto">Busca Tu Trabajo</Button>
                </Link>
            </div>
        </div>
    )
}


export default SearchBar;