import React, {useState} from "react";
import './Slide.module.scss'
import style from './Slide.module.scss'
import Header from "../../Header/Header";
import LinkItemsSlider from "./LinkItemsSlider/LinkItemsSlider";
import SliderDots from "./SliderDots/SliderDots";

const Slide = (props) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const {image, dataSlider} = props

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
              <section>
              <h2 className={style.welcome}>{dataSlider[currentIndex]?.title}</h2>
              <h1>{dataSlider[currentIndex]?.header}</h1>
              <p className={style.description}>{dataSlider[currentIndex]?.description}</p>
              </section>
            </div>
            <nav>
              <LinkItemsSlider></LinkItemsSlider>
            </nav>
          </div>
          <SliderDots currentIndex={currentIndex} image={image} callback={clickOnDot} ></SliderDots>
        </div>
      </div>


    </>
  )
}
export default Slide