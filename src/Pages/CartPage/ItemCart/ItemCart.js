import React from 'react';
import style from './ItemCart.module.scss'

const ItemCart = (props) => {

  const {name,ingredients,size,price} = props
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div>
          <img alt='image'/>
          <div>
            <p>{name}</p>
            <p>{ingredients}</p>
            <p>{size}</p>
          </div>
          <div>
            <p>Each</p>
            <p>$ {price}</p>
          </div>
          <div>
            <p>Quantity</p>
            <p>select quantity</p>
          </div>
          <div>
            <p>Total</p>
            <p>$5</p>
          </div>
        </div>
        <div>
          <ul>
            <li>Remove</li>
            <li>Edit</li>
          </ul>
        </div>
      </div>
      <div>
        <p>count of items</p>
        <p>total price</p>
      </div>
    </div>
  );
};

export default ItemCart;