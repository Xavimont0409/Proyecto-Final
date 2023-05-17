import style from './DetailProduct.module.css';
import NavBar from '../../components/NavBar/NavBarLog';
import Footer from '../../components/Footer/Footer';
import getAllProduct from '../../Redux/Actions/actionsFunction/actionsProduct'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Loading from '../../components/Loading/Loading'


const DetailProduct = () => {
const id = useParams();
const dispatch = useDispatch();
  const product = useSelector((state) => state.product)
useEffect(() => {
dispatch( getAllProduct(id))
},[])
return (
  <div>
     {
    product.name ?
    <div>
        <NavBar/>
         <div className={style.container}>
        
        <div className={style.box}>
              <div className={style.containerDetail}>
             <div className={style.divContenedorInfo}>
               <h2 className={style.nameCard}>Name: {product.name}</h2>
               <p className={style.infoCard}>Detalle: {product.details}</p>
               <p className={style.infoCard}>Price: {product.price}</p>
             </div>
             </div>
           </div>
           <Footer/>
    </div>
    </div> :
<Loading/>
  }
  </div>
 
    
   
)
}

export default DetailProduct;