import React, {useEffect, useState} from "react";
import './Slide.module.scss'
import style from './Slide.module.scss'
import {FaRegDotCircle} from "react-icons/fa";
import {SiThreedotjs} from "react-icons/si";
import Header from "../Header/Header";

const Slide = (props) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const {image , dataSlider} = props

  const sliderStyles = {
    backgroundImage: `url(${image[currentIndex]}`
  }

  const clickOnDot = (index) => {
    setCurrentIndex(index)
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.carousel} style={sliderStyles}>
          <Header></Header>

          <div className={style.wrapperHome}>
            <div className={style.homeMessage}>
              <h2 className={style.welcome}>{dataSlider[currentIndex].title}</h2>
              <h1>{dataSlider[currentIndex].header}</h1>
              <p className={style.description}>{dataSlider[currentIndex].description}</p>
            </div>
            <div className={style.btns}>
              <button className={style.order}>Order Now</button>
              <button className={style.view}>View Menu</button>
            </div>

          </div>
          <div className={style.dots}>
            {image.map((slide, slideIndex) => <div onClick={() => clickOnDot(slideIndex)} key={slideIndex}>
              <SiThreedotjs
                className={currentIndex === slideIndex ? style.active : style.dot} style={{fontSize: "50px"}}></SiThreedotjs></div>)}
          </div>
        </div>
      </div>


    </>
  )
}
export default Slide