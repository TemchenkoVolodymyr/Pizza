import React from 'react';
import style from './CustomSelect.module.scss'

const CustomSelect = ({increaseQuantity , increaseTotal,currentPrice,currentNumOfItems , currentItemTotalPrice,changeQuantity}) => {

  const test = (e) => {
    increaseQuantity(e.target.value)
    currentItemTotalPrice(currentPrice * e.target.value)
    changeQuantity(e.target.value)
  }

  const numbers = [];

  for(let i = 1; i <= 10; i++){
    numbers.push(i)
  }


  return (
    <div className={style.container}>
      <select onChange={test}>
        {numbers.map(item => <option key={item} value={item}>{item}</option>)}
      </select>
    </div>
  );
};

export default CustomSelect;