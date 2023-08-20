import React from "react";
import style from './OtherProduct.module.scss'
import bg from '../../assets/about.jpg'
import {cartDataOrderAC} from "../../Redux/Cart/cartAC";
import {useDispatch} from "react-redux";

const OtherProduct = (props) => {

  const {currentProduct,getStartProduct,getBurgers, getDrinks, getPastas} = props

const dispatch = useDispatch()
  const setOrderToLocalStorage = (image,price,name,id) => {
    const orderData = {
      image,
      price,
      name,
      ingredients:'Tomato,chess',
      size:'Large',
      quantity:1,
      id
    }
    const isLocalStorage = JSON.parse(localStorage.getItem('order')) || [];
    isLocalStorage.push(orderData)
    localStorage.setItem('order', JSON.stringify(isLocalStorage))
    dispatch(cartDataOrderAC(isLocalStorage))
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.wrapperImage}>
          <img src={bg} alt={'image'}/>
        </div>

        <div className={style.wrapperLists}>
          <div className={style.lists}>
            <ul>
              <li onClick={getStartProduct}>Pizza</li>
              <li onClick={getDrinks}>Drinks</li>
              <li onClick={getBurgers}>Burgers</li>
              <li onClick={getPastas}>Pasta</li>
            </ul>
          </div>

          <div className={style.containerProducts}>
            {currentProduct && currentProduct.map(item => <div className={style.wrapper}>
              <img src={`otherProducts/${item.image}`} alt="image"/>
              <div>
                <h1>{item.name}</h1>
                <p className={style.description}>{item.shortDescription}</p>
              </div>

              <p className={style.price}>$ {item.price}</p>
              <button onClick={() => setOrderToLocalStorage(item.image,item.price,item.id)}>Add to cart</button>
            </div>)}
          </div>
        </div>

      </div>
    </>
  )
}
export default OtherProduct

