// const companyData = {
// 	name: "Innovatech Solutions S.A",
// 	country: "Argentina",
// 	business_name: "Innovatech Solutions",
// 	cuit: "20445678902",
// 	email: "bocajunior2026@gmail.com",
// };
import React, { useEffect } from "react";
import style from "./PerfilCompany.module.css";
import {
	BsFillEnvelopeAtFill,
	BsShop,
	BsPersonVcardFill,
	BsFillPinMapFill,
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

			<div className={style.container2}>
				<div className={style.container1}>
					<h1>{companyData.name}</h1>

					<div className={style.container4}>
						<div className={style.container3}>
							<BsFillEnvelopeAtFill />
							<p>{companyData.email}</p>
						</div>

						<div className={style.container3}>
							<BsFillPinMapFill />
							<p>{companyData.country}</p>
						</div>

						<div className={style.container3}>
							<BsShop />
							<p>{companyData.business_name}</p>
						</div>

						<div className={style.container3}>
							<BsPersonVcardFill />
							<p>{companyData.cuit}</p>
						</div>
					</div>
				</div>

				<div className={style.container5}>
					<h4 style={{ textAlign: "left" }}>Descripción</h4>
					<p style={{ textAlign: "justify" }}>
						{companyData.description}
					</p>
				</div>
			</div>
		</div>
	);
}
