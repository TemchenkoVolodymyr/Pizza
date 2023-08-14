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
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid blanditiis, dolorem earum eligendi error ipsam iste laboriosam minima minus natus repudiandae rerum sequi unde velit veniam veritatis voluptatem. Rerum.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid blanditiis, dolorem earum eligendi error ipsam iste laboriosam minima minus natus repudiandae rerum sequi unde velit veniam veritatis voluptatem. Rerum
    </p>
  </div>
</div>
    </>
  )
}
export default HistoryOfRestaurant;