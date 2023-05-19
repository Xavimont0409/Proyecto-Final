import style from './Operation.module.css';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import {Footer, NavBar} from '../../components/';

const Operation = () => {
    const info = useSelector((state) => state.Information);
    const preferenceId = useSelector((state) => state.PreferenceId);

    // useEffect(() => {
        initMercadoPago(process.env.REACT_APP_PUBLIC_KEY);
    // }, []);

    return (
        <>
        <NavBar />
        <div className={style.container}>
            {info ? (
                <div className={style.innerContainer}>
                    <form>
                        <div className={style.Texto}>
                            <div>
                                <label htmlFor="name">Detail:</label>
                                <input name="name" value={info.detail} type="text" disabled />
                            </div>
                            <div>
                                <label htmlFor="name">Details:</label>
                                <input name="name" value={info.details} type="text" disabled />
                            </div>
                            <div>
                                <label htmlFor="name">Cost:</label>
                                <input name="name" value={info.cost} type="text" disabled />
                            </div>
                            <div>
                                <label htmlFor="name">PayMethodId:</label>
                                <input name="name" value={info.PayMethodId} type="text" disabled />
                            </div>
                        </div>
                    </form>
                    <div className={style.botonpago}>
                        <button className={style.btnPagar}>
                            Pagar
                            <Wallet className={style.btnPagar} initialization={{ preferenceId: preferenceId }} />
                        </button>

                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
        <Footer/>
        </>
    );
};

export default Operation;
