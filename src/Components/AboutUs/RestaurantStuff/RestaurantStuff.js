import React from "react";

import style from './RestaurantStuff.module.scss'

import underBg from '../../../assets/stuff/bg_2.jpg'
import imageOne from '../../../assets/stuff/gallery-1.jpg'
import imageTwo from '../../../assets/stuff/gallery-4.jpg'
import imageThree from '../../../assets/stuff/gallery-3.jpg'
import imageFour from '../../../assets/stuff/gallery-2.jpg'
import {SiCodechef} from "react-icons/si";
import {CiPizza} from "react-icons/ci";
import {SlPeople} from "react-icons/sl";
import {LiaAwardSolid} from "react-icons/lia";

const RestaurantStuff = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.wrapperImages}>
          <img src={imageOne} alt={'image'}/>
          <img src={imageTwo} alt={'image'}/>
          <img src={imageThree} alt={'image'}/>
          <img src={imageFour} alt={'image'}/>
        </div>
        <div className={style.underBg} style={{backgroundImage: `url(${underBg})`}}>
          <div className={style.test}>
            <div className={style.wrapperIcons}>
              <div>
                <SiCodechef style={{fontSize: "80px", color: 'red'}}></SiCodechef>
                <p className={style.number}>100</p>
                <p className={style.text}>Pizza Branches</p>
              </div>
              <div>
                <CiPizza style={{fontSize: "80px", color: 'red'}}></CiPizza>
                <p className={style.number}>85</p>
                <p className={style.text}>Number of Awards</p>
              </div>
              <div>
                <SlPeople style={{fontSize: "80px", color: 'red'}}></SlPeople>
                <p className={style.number}>10,576</p>
                <p className={style.text}>Happy Customer</p>
              </div>

              <div>
                <LiaAwardSolid style={{fontSize: "80px", color: 'red'}}></LiaAwardSolid>
                <p className={style.number}>900</p>
                <p className={style.text}>Staff</p>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RestaurantStuff