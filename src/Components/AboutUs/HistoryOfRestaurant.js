import React from "react";
import style from './HistoryOfRestaurant.module.scss'
import {GiFullPizza} from "react-icons/gi";
import aboutBg from '../../assets/aboutBG.jpg'
import bg from '../../assets/bg_4.jpg'

const HistoryOfRestaurant = () => {
  return(
    <>
<div className={style.container} style={{backgroundImage:`url(${bg})`}}>
  <div className={style.wrapperImage}>
    <img src={aboutBg} alt='image'/>
  </div>
  <div className={style.about} >
    <h2>WELCOME TO <GiFullPizza color={'orange'}></GiFullPizza> <span>PIZZA</span> DELICIOUS RESTAURANT</h2>
    <p>Did you know that the fastest pizzaiolo is from the UK? Pali Grewal, from the UK, won a competition held in Las Vegas in 2014 and was elected the fastest pizza maker in the world: he made and put in the oven three pizzas in just over 32 seconds. 1
      Pizza is also Italian for ‘pie’ and dates back to the 10th century. The word pizza first appeared in a Latin manuscript in the town of Gaeta, in southern Italy in the year 997.
    </p>
  </div>
</div>
    </>
  )
}
export default HistoryOfRestaurant;