import style from './DetailProduct.module.css';
import styles from '../../components/Button/ButtonGeneral.module.css';
import NavBar from '../../components/NavBar/NavBarLog';
import Footer from '../../components/Footer/Footer';
import getAllProduct from '../../Redux/Actions/actionsFunction/actionsProduct';
import getAllPayMethods from '../../Redux/Actions/actionsFunction/actionsPayMethods';
import postDataInStore from '../../Redux/Actions/actionsFunction/actionsdetailOperation';
import postOperation from '../../Redux/Actions/actionsFunction/actionsPostOperation';
import cleanDetail from '../../Redux/Actions/actionsFunction/actionCleanDetail';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { useAuth0 } from "@auth0/auth0-react";
import { getEmail } from "../../Redux/Actions/actionsFunction/FiltersHome";
import Swal from 'sweetalert2';



const DetailProduct = () => {
 
const { id } = useParams(); 
const dispatch = useDispatch();
const { user, isAuthenticated } = useAuth0();
const navigate = useNavigate();
 const currentUser = useSelector((state) => state.dataEmail[0])
 const product = useSelector((state) => state.Product);
 const payMethods = useSelector((state) => state.PayMethods);
 console.log(product)

useEffect(() => {
 
      const handleUserAuthentication = () => {
          if (isAuthenticated && user) {
              dispatch(getEmail(user.email));
          }
      };
      handleUserAuthentication();
      dispatch( getAllProduct(id));
      dispatch(getAllPayMethods());
      return () =>{
        dispatch(cleanDetail())
      }
    }, [dispatch, isAuthenticated, user, id]);

 const [form, setForm] = useState({
  cost: product?.price,
  detail: product?.name,
  details: product?.details,
  CompanyId: currentUser?.id || null,
  PayMethodId: 0,
  name: currentUser?.name,
  email: currentUser?.email,
  PayMethod: payMethods?.name,
 })

const handleChangeSelect = (event) => {
  const value = event.target.value;
  setForm({ 
    cost: product?.price,
    detail: product?.name,
    details: product?.details,
    CompanyId: currentUser?.id || null,
    PayMethodId: value,
  
    name: currentUser?.name,
    email: currentUser?.email,
    PayMethod: payMethods?.name,
    })
}

const handleSubmit = () => {
  if(form.detail){
    dispatch(postDataInStore(form));
    return dispatch(postOperation(form));
  }else{
    return Swal.fire({
      title: 'Opss..',
      text: `Ocurrió un error`,
      icon: 'error'
    });
  }
   
}

return (
  <div>
     {
    product.name ?
    <div>
        <NavBar/>
         <div className={style.container}>
        
        <div className={style.box} key={product.name}>
              <div className={style.containerDetail}>
             <div className={style.divContenedorInfo}>
               <h2 className={style.nameCard}>Name: {product.name} </h2>
               <p className={style.infoCard}>Detalle:  {product.details} </p>
               <p className={style.infoCard}>Price: {product.price} </p>
               <label htmlFor="PayMethod"></label>
                <select name="PayMethod" onChange={(event) => handleChangeSelect(event)}>
               { payMethods ?
                    (payMethods.map((payMethod) => {
                      return (
                        <option value={payMethod.id} key={payMethod.id}>{payMethod.name}</option>
                      )
                    }))
                 
                :<Loading/>}
                </select>

                <div className={style.containerButton}>
                  <button className={styles.button} onClick={() => handleSubmit()}>Comprar</button>
                </div>
               
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