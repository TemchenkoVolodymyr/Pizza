import React from 'react';
import style from './PromoCode.module.scss'
import {BsShieldLockFill} from "react-icons/bs";
import PromoCodeTable from "./PromocodeTable";

const PromoCode = ({totalPrice}) => {
  return (
    <div className={style.container}>
      <div className={style.promoCode}>
        <div>
          <label>ENTER PROMO CODE</label>
          <input placeholder={'Promo Code'}/>
        </div>
        <button>SUBMIT</button>
      </div>
      <div>
        <PromoCodeTable totalPrice={totalPrice}></PromoCodeTable>
      </div>
      <div className={style.checkoutBtnWrapper}>
        <p>You`re <span>$10.01</span> away from free shipping!</p>
        <button><BsShieldLockFill></BsShieldLockFill>Checkout</button>
      </div>
    </div>
  );
};

export default PromoCode;