import React from "react";
import style from './HomeSlider.module.scss'
import Slide from "./Slide";
import sliderOne from '../../assets/sliderBg.png'
import sliderTwo from '../../assets/sliderPizza1.png'
import sliderThree from '../../assets/sliderPizza2.png'
import Header from "../Header/Header";

const HomeSlider = () => {

  const arrayOfSliderItems = [sliderOne,sliderTwo,sliderThree]

  return (
    <>
      <div className={style.container}>
        {/*<Header></Header>*/}
        <Slide image={arrayOfSliderItems}></Slide>
      </div>
    </>
  )
}
// const {text,numberOfDots, textTitle, textDescription}
export default HomeSlider;