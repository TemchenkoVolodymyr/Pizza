import React from "react";
import style from './OtherProduct.module.scss'
import bg from '../../assets/about.jpg'
import {useDispatch} from "react-redux";
import {setOrderToLocalStorage} from "../../ApiRequest/ApiRequest";
import ProductItems from "./ProductItems/ProductItems";
import ProductContent from "./ProductContent/ProductContent";

const OtherProduct = (props) => {

  const {currentProduct, getStartProduct, getBurgers, getDrinks, getPastas} = props

  const dispatch = useDispatch()

  const setStorageData = (image, price, name, id) => {

    dispatch(setOrderToLocalStorage(image, price, name, id))
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.wrapperImage}>
          <img src={bg} alt={'image'}/>
        </div>

        <div className={style.wrapperLists}>

          <section>
          <ProductItems getStartProduct={getStartProduct} getPastas={getPastas} getBurgers={getBurgers } getDrinks={getDrinks}></ProductItems>

          <ProductContent currentProduct={currentProduct} setStorageData={setStorageData}></ProductContent>
          </section>
        </div>

      </div>
    </>
  )
}
export default OtherProduct

