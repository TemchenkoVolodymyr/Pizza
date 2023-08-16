import React from 'react';
import style from './CartPage.module.scss'
import {RiShoppingBasketFill} from "react-icons/ri";
import ItemCart from "./ItemCart/ItemCart";
import PromoCode from "./Promocode/PromoCode";

const CartPage = () => {
  return (
    <div className={style.container}>
      <div className={style.cartName}>
        <RiShoppingBasketFill color="red" fontSize={'40px'}></RiShoppingBasketFill>
        <h1>Pizza Delicious Cart</h1>
      </div>
      <div className={style.wrapper}>
        <ItemCart></ItemCart>
        <PromoCode></PromoCode>
      </div>
    </div>
  );
};

export default CartPage;