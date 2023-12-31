import React, {useEffect, useState} from 'react';
import style from './ItemCart.module.scss'
import CustomSelect from "./CustomSelect/CustomSelect";
import {useDispatch} from "react-redux";
import { changeQuantityCartAC } from "../../../Redux/Cart/cartAC";
import {RiDeleteBin7Line} from "react-icons/ri";
import { deleteCartItemThunkCreator } from "../../../ApiRequest/ApiRequest";

const ItemCart = (props) => {

  const [currentNumOfItems,setCurrentNumOfItems] = useState(1)
  const [currentItemTotal,setCurrentItemTotal] = useState(0)

  const {data , increaseTotal,totalSum,setPrice,setQuantity} = props

  const dispatch = useDispatch()
  const changeCountOfItem = (currentCount) => {
    setCurrentNumOfItems(currentCount)
  }
  const localDataOrder = JSON.parse(localStorage.getItem('order')) || []

  useEffect(() => {
    increaseTotal(totalSum + currentItemTotal)
  },[currentItemTotal])

  const changeQuantity = (num) => {

    dispatch(changeQuantityCartAC(num,data.id))
  }

  const deletePizzaCart = (itemId) => {
    dispatch(deleteCartItemThunkCreator(itemId,localDataOrder,setPrice,setQuantity))
  }

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.wrapperProduct}>
          <img alt='image' src={`pizza/${data?.image}`}/>
          <div>
            <p className={style.name}>{data?.name}</p>
            <p className={style.ingredients}>Ingredients : {data?.ingredients}</p>
            <p className={style.size}>Size : {data?.size}</p>
          </div>
          <div className={style.wrapperCount}>
            <p className={style.name}>Each</p>
            <p className={style.price}>$ {data?.price}</p>
          </div>
          <div>
            <p className={style.name}>Quantity</p>
            <CustomSelect changeQuantity={changeQuantity} currentItemTotalPrice={setCurrentItemTotal} currentNumOfItems={currentNumOfItems} currentPrice={data?.price} increaseTotal={increaseTotal} increaseQuantity={changeCountOfItem}></CustomSelect>
          </div>
          <div className={style.totalCurrentPizzaPrice}>
            <p className={style.name}>Total</p>
            <p  className={style.totalPrice}>$ {currentItemTotal.toFixed(1)}</p>
          </div>
        </div>
        <div className={style.wrapperUnderList}>
          <ul>
            <li onClick={() => deletePizzaCart(data.id)}>Remove <RiDeleteBin7Line></RiDeleteBin7Line></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;