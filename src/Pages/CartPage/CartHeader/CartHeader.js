import React from 'react';
import {FiArrowLeftCircle} from "react-icons/fi";
import style from './CartHeader.module.scss'
import {NavLink} from "react-router-dom";

const CartHeader = () => {
  return (
    <div>
      <div className={style.wrapper}>
        <NavLink to={'/'}>
        <FiArrowLeftCircle fontSize={"50px"}></FiArrowLeftCircle>
        <p>BACK TO THE RESTAURANT</p>
        </NavLink>
      </div>
    </div>
  );
};

export default CartHeader;