import React from 'react';
import style from "../OtherProduct.module.scss";

const ProductItems = ({getStartProduct,getDrinks,getBurgers,getPastas}) => {
  return (
    <div className={style.lists}>
      <ul>
        <li onClick={getStartProduct}>Pizza</li>
        <li onClick={getDrinks}>Drinks</li>
        <li onClick={getBurgers}>Burgers</li>
        <li onClick={getPastas}>Pasta</li>
      </ul>
    </div>
  );
};

export default ProductItems;