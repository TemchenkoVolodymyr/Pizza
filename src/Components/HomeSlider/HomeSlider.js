import React from "react";
import style from './HomeSlider.module.scss'
import Slide from "./Slide";
import sliderOne from '../../assets/firstrImage.png'
import sliderTwo from '../../assets/secondIm.png'
import sliderThree from '../../assets/theerdIma.png'
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