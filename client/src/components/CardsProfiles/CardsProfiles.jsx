import style from './CardsProfiles.module.css';

const CardProfile = ({id, name, email, skills, experience}) => {
    return (
        <div className="" key={id}>
            <div className="">
                <p>{name}</p>
            </div>
            <div className=""> 
                <p>{email}</p>
            </div>
            <div className="">
                <p>{skills?.map(skill => { return <div className="">{skill}</div> })}</p>
            </div>
            <div className="">
                <p>{experience}</p>
            </div>
        </div>
    )
};

export default CardProfile;