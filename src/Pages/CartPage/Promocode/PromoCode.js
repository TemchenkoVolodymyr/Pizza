import React from 'react';
import style from './PromoCode.module.scss'
import {BsShieldLockFill} from "react-icons/bs";

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
        <table>
          <tbody>
          <tr>
            <td>Shipping cost</td>
            <td>TBD</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>- $0</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>TBD</td>
          </tr>
          <tr className={style.total}>
            <td>Estimated Total</td>
            <td>${totalPrice}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className={style.checkoutBtnWrapper}>
        <p>You`re <span>$10.01</span> away from free shipping!</p>
        <button><BsShieldLockFill></BsShieldLockFill>Checkout</button>
      </div>
    </div>
  );
};

export default PromoCode;