import React from "react";
import style from './HomeSlider.module.scss'
import Slide from "./Slide/Slide";
import sliderOne from '../../assets/firstHomeItemSlider.png'
import sliderTwo from '../../assets/secondHomeItemSlider.png'
import sliderThree from '../../assets/thirdHomeItemSlider.png'

const HomeSlider = () => {

  const arrayOfSliderItems = [sliderOne, sliderTwo, sliderThree]

  const dataSlider = [
    {
      title: "Welcome",
      header:"WE COOKED YOUR DESIRED PIZZA RECIPE",
      description:"Would you like to taste the authentic flavor of pizza?"
    },
    {
      title: "Delicious",
      header:"ITALIAN CUIZINE",
      description:"Pizza contains many ingredients that make it delicious"
    },
    {
      title: "Cruncly",
      header:"ITALIAN PIZZA",
      description:"Pizza cooked according to the best quality of Italy"
    }
  ]

  return (
    <>
      <div className={style.container}>
        <Slide image={arrayOfSliderItems} dataSlider={dataSlider}></Slide>
      </div>
    </>
  )
}
export default HomeSlider;