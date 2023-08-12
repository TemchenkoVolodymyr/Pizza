import React from "react";
import style from './Menu.module.scss'
import gb from '../../assets/bg_4.jpg'

const Menu = () => {
  return (
    <>
      <div className={style.container} style={{backgroundImage:`url(${gb})`}}>
        <h1>
          HOT PIZZA MEALS
        </h1>
        <p>Far far away,behind the word mountains,far fram the countries Vakalia and Cansonantia,there live the blind
          texts</p>

      </div>
    </>
  )
}
export default Menu;