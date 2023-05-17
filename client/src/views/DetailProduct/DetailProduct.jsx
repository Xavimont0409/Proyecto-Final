import style from './DetailProduct.module.css';
import NavBar from '../../components/NavBar/NavBarLog';
import Footer from '../../components/Footer/Footer';

const DetailProduct = () => {
return (
    <div>
        <NavBar className={style.nav}/>
         <div className={style.container}>
        
        <div className={style.box}>
              <div className={style.containerDetail}>
             <div className={style.divContenedorInfo}>
               <h2 className={style.nameCard}>Name: {/* {product.name} */}</h2>
               <p className={style.infoCard}>Detalle: {/* {product.details} */}</p>
               <p className={style.infoCard}>Price: {/* {product.pice} */}</p>
             </div>
             </div>
           </div>
           <Footer/>
    </div>
    </div>
   
)
}

export default DetailProduct;