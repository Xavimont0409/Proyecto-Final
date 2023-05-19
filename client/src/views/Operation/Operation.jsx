import style from './Operation.module.css';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';

const Operation = () =>{
    const info = useSelector( (state) => state.Information);
    const preferenceId = useSelector( (state) => state.PreferenceId);

    initMercadoPago(process.env.REACT_APP_PUBLIC_KEY);

    return (
        <div>{
                info ? 
                <div>
                   <form >
                <div>
                          <label htmlFor="name"></label>
                <input name="name" value={info.detail} type="text" disabled/>
                </div>
                <div>
                          <label htmlFor="name"></label>
                <input name="name" value={info.details} type="text" disabled/>
                </div>
                <div>
                          <label htmlFor="name"></label>
                <input name="name" value={info.cost} type="text" disabled/>
                </div>
                <div>
                          <label htmlFor="name"></label>
                <input name="name" value={info.PayMethodId} type="text" disabled/>
                </div>
            </form>
            <Wallet initialization={{ preferenceId: preferenceId }} /> 
                </div>
                 :
                <Loading />
            }
            
        </div>
    )
}


export default Operation;