import React from "react";
import style from './HomeSlider.module.scss'
import Slide from "./Slide";
import sliderOne from '../../assets/tt.png'
import sliderTwo from '../../assets/bg3Slider.png'
import sliderThree from '../../assets/qeqw.png'

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