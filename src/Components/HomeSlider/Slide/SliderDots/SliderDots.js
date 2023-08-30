import React from 'react';
import style from "../Slide.module.scss";
import {SiThreedotjs} from "react-icons/si";

const SliderDots = ({image,callback,currentIndex}) => {
  return (
    <div className={style.dots}>
      {image.map((slide, slideIndex) => <div onClick={() => callback(slideIndex)} key={slideIndex}>
        <SiThreedotjs
          className={currentIndex === slideIndex ? style.active : style.dot}
          style={{fontSize: "60px"}}></SiThreedotjs></div>)}
    </div>
  );
};

export default SliderDots;