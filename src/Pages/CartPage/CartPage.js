import React, {useEffect, useState} from 'react';
import style from './CartPage.module.scss'
import {RiShoppingBasketFill} from "react-icons/ri";
import ItemCart from "./ItemCart/ItemCart";
import PromoCode from "./Promocode/PromoCode";
import {useDispatch, useSelector} from "react-redux";
import {cartDataOrderAC} from "../../Redux/Cart/cartAC";
import CartHeader from "./CartHeader/CartHeader";

const CartPage = () => {
  const [totalSum,setTotalSum] = useState(0)

  const [totalPrice,setTotalPrice] = useState(0)

  const [totalQuantity,setTotalQuantity] = useState(0)

  const dispatch = useDispatch()
  const dataOrderCart = useSelector((state) => state.cart.orders)
  const increaseTotalSum = (sum) => {

    setTotalSum(totalSum => totalSum =sum)
  }

  useEffect(() => {
    const localDataOrder = localStorage.getItem('order')
    dispatch(cartDataOrderAC(JSON.parse(localDataOrder)))



  },[])
  let quantities = 0
  useEffect(() => {
    let sum = 0;
    dataOrderCart?.map(item => {
     let total =  item.quantity * item.price
      sum += total
      setTotalPrice(sum.toFixed(1))

      let totalCount = Number(item.quantity)
      quantities += totalCount
      setTotalQuantity(quantities)
    })

  },[dataOrderCart])



  return (
    <div className={style.container}>
      <CartHeader></CartHeader>
      <div className={style.cartName}>
        <RiShoppingBasketFill color="red" fontSize={'40px'}></RiShoppingBasketFill>
        <h1>Pizza Delicious Cart</h1>
      </div>
      <div className={style.wrapper}>
        <div className={style.wrapperItems}>
          {dataOrderCart ? dataOrderCart?.map(item => <ItemCart setQuantity={setTotalQuantity} setPrice={setTotalPrice}  totalSum={totalSum} increaseTotal={increaseTotalSum} data={item}></ItemCart> ) : null}
          <div className={style.total}>
            <p>{totalQuantity} Items</p>
            <p>$ {totalPrice}</p>
          </div>
        </div>
        <PromoCode totalPrice={totalPrice}></PromoCode>
      </div>
    </div>
  );
};

export default CartPage;