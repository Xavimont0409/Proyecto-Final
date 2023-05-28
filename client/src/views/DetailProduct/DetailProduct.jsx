import style from "./DetailProduct.module.css";
import styles from "../../components/Button/ButtonGeneral.module.css";
import NavBar from "../../components/NavBarLog/NavBarLog";
import Footer from "../../components/Footer/Footer";
import getAllProduct from "../../Redux/Actions/actionsFunction/actionsProduct";
import getAllPayMethods from "../../Redux/Actions/actionsFunction/actionsPayMethods";
import postDataInStore from "../../Redux/Actions/actionsFunction/actionsdetailOperation";
import postOperation from "../../Redux/Actions/actionsFunction/actionsPostOperation";
import cleanDetail from "../../Redux/Actions/actionsFunction/actionCleanDetail";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { getEmail } from "../../Redux/Actions/actionsFunction/FiltersHome";
import Swal from "sweetalert2";

const DetailProduct = ({ setValidateState, setCurrentUserStore2 }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userType2 = JSON.parse(localStorage.getItem("currentUser2"));
  const validate = JSON.parse(localStorage.getItem("state"));
  const navigate = useNavigate();
  const product = useSelector((state) => state.Product);
  const payMethods = useSelector((state) => state.PayMethods);
  console.log(userType2);
  useEffect(() => {
    const handleUserAuthentication = () => {
      if (validate && userType2) {
        dispatch(getEmail(userType2.email));
      }
    };
    handleUserAuthentication();
    dispatch(getAllProduct(id));
    dispatch(getAllPayMethods());
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, validate, userType2, id]);

  const [form, setForm] = useState({
    cost: product?.price,
    detail: product?.name,
    details: product?.details,
    CompanyId: userType2?.id || null,
    PayMethodId: 0,
    name: userType2?.name,
    email: userType2?.email,
    PayMethod: "",
  });

  const handleChangeSelect = (event) => {
    const value = event.target.value;
    setForm({
      cost: product?.price,
      detail: product?.name,
      details: product?.details,
      CompanyId: userType2?.id || null,
      PayMethodId: value,
      name: userType2?.name,
      email: userType2?.email,
      PayMethod: payMethods.find(
        (payMethod) => payMethod.id === parseInt(value)
      ).name,
    });
  };

  const handleSubmit = async () => {
    if (userType2.name) {
      dispatch(postDataInStore(form));
      dispatch(postOperation(form));
      console.log(form);
      await Swal.fire({
        title: "Éxito",
        text: "Operación creada correctamente",
        icon: "success",
      });
      return navigate("/operation");
    } else {
      return Swal.fire({
        title: "Opss..",
        text: `Ocurrió un error`,
        icon: "error",
      });
    }
  };

  return (
    <div>
      {product.name ? (
        <div>
          <NavBar
            setValidateState={setValidateState}
            setCurrentUserStore2={setCurrentUserStore2}
          />
          <div className={style.container}>
            <div className={style.box} key={product.name}>
              <div className={style.containerDetail}>
                <div className={style.divContenedorInfo}>
                  <h2 className={style.nameCard}>Name: {product.name} </h2>
                  <p className={style.infoCard}>Detalle: {product.details} </p>
                  <p className={style.infoCard}>Price: {product.price} </p>
                  <label htmlFor="PayMethod"></label>
                  <select
                    name="PayMethod"
                    onChange={(event) => handleChangeSelect(event)}
                  >
                    {payMethods ? (
                      payMethods.map((payMethod) => {
                        return (
                          <option value={payMethod.id} key={payMethod.id}>
                            {payMethod.name}
                          </option>
                        );
                      })
                    ) : (
                      <Loading />
                    )}
                  </select>

                  <div className={style.containerButton}>
                    <button
                      className={styles.button}
                      onClick={() => handleSubmit()}
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default DetailProduct;
