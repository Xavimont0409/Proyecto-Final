import React, { useEffect } from "react";
import style from "./PerfilCompany.module.css";
import {
	BsFillEnvelopeAtFill,
	BsShop,
	BsPersonVcardFill,
	BsFillPinMapFill,
	BsFillFileTextFill,
	BsGlobeAmericas,
	BsBuildings,
} from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { getCompanyDetail } from "../../Redux/Actions/actionsFunction/actionsCompanys";
import NavBar from "../../components/NavBar/NavBar";

export default function PerfilCompany({ setValidateState, setCurrentUserStore2 }) {
	const userType = JSON.parse(localStorage.getItem("currentUser2"));

	const companyData = useSelector((state) => state.CompanyDetail);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCompanyDetail(userType.id));
	}, [dispatch, userType]);

	return (
		<div className={style.container}>
			<div className={style.containerNav}>
				<NavBar setValidateState={setValidateState}  setCurrentUserStore2={setCurrentUserStore2}/>
			</div>
			<h1 className={style.title}>Perfil de la Empresa</h1>

			<div className={style.datosCompany}>
				<div>
					<img
						className={style.image}
						src={companyData.photo}
						alt='Profile'
					/>
				</div>

				<div className={style.companyName}>
					<h1>{companyData.name}</h1>
				</div>
				<div className={style.Info}>
					<div className={style.companyData}>
						<BsFillEnvelopeAtFill />
						<p>{companyData.email}</p>
					</div>

					<div className={style.companyData}>
						<BsFillPinMapFill />
						<p>{companyData.country}</p>
					</div>

					<div className={style.companyData}>
						<BsShop />
						<p>{companyData.business_name}</p>
					</div>

					<div className={style.companyData}>
						<BsPersonVcardFill />
						<p>{companyData.cuit}</p>
					</div>

					<div className={style.companyData}>
						<BsFillFileTextFill />
						<p>Plan: {companyData.plan}</p>
					</div>

					<div className={style.companyData}>
						<BsGlobeAmericas />
						<p>{companyData.webPage}</p>
					</div>

					<div className={style.companyData}>
						<BsBuildings />
						<p>{companyData.job_area}</p>
					</div>
				</div>
				<div className={style.description}>
					<h4 style={{ textAlign: "left" }}>Descripción</h4>
					<p style={{ textAlign: "justify" }}>
						{companyData.description}
					</p>
				</div>
			</div>
		</div>
	);
}
