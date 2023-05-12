import style from './CardsProfiles.module.css';

const CardProfileCompany = ({id, business_name, email, country}) => {
    return (
        <div className="" key={id}>
            <div className="">
                <p>{business_name}</p>
            </div>
            <div className=""> 
                <p>{country}</p>
            </div>
            <div className="">
                <p>{email}</p>
            </div>
        </div>
    )
};

export default CardProfileCompany;