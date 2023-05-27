import style from './Operation.module.css';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import {NavBar} from '../../components/';

const Operation = ({ setValidateState, setCurrentUserStore2 }) => {
    const info = useSelector((state) => state.Information);
    const preferenceId = useSelector((state) => state.PreferenceId);

    // useEffect(() => {
        initMercadoPago(process.env.REACT_APP_PUBLIC_KEY);
    // }, []);

    return (
        <>
        <NavBar setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2}/>
        <div className={style.container}>
            {info ? (
                <div className={style.innerContainer}>
                    <form>
                        <div className={style.Texto}>
                            <div>
                                <label htmlFor="name">Plan:</label>
                                <input name="name" value={info.detail} type="text" disabled />
                            </div>
                            <div>
                                <label htmlFor="name">Detalle:</label>
                                <input name="name" value={info.details} type="text" disabled />
                            </div>
                            <div>
                                <label htmlFor="name">Precio:</label>
                                <input name="name" value={info.cost} type="text" disabled />
                            </div>
                            <div>
                                <label htmlFor="name">Metodo de Pago:</label>
                                <input name="name" value={info.PayMethodId} type="text" disabled />
                            </div>
                        </div>
                    </form>
                    <div className={style.botonpago}>
                            <Wallet className={style.btnPagar} initialization={{ preferenceId: preferenceId }} />
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
        </>
    );
};

export default Operation;
