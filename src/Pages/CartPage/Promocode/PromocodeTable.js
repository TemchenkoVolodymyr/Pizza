import React from 'react';
import style from "./PromoCode.module.scss";

const PromoCodeTable = ({totalPrice}) => {
  return (
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
  );
};

export default PromoCodeTable;