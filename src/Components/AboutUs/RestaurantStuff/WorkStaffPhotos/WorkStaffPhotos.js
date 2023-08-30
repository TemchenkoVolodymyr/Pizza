import React from 'react';
import style from "../RestaurantStuff.module.scss";
import imageOne from "../../../../assets/stuff/gallery-1.jpg";
import imageTwo from "../../../../assets/stuff/gallery-4.jpg";
import imageThree from "../../../../assets/stuff/gallery-3.jpg";
import imageFour from "../../../../assets/stuff/gallery-2.jpg";

const WorkStaffPhotos = () => {
  return (
    <>
    <div className={style.wrapperImages}>
      <img src={imageOne} alt={'image'}/>
      <img src={imageTwo} alt={'image'}/>
      <img src={imageThree} alt={'image'}/>
      <img src={imageFour} alt={'image'}/>
    </div>
    </>
  );
};

export default WorkStaffPhotos;