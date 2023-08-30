import React from "react";
import style from '../RestaurantStuff.module.scss'
import underBg from '../../../../assets/stuff/bg_2.jpg'
import {SiCodechef} from "react-icons/si";
import {CiPizza} from "react-icons/ci";
import {SlPeople} from "react-icons/sl";
import {LiaAwardSolid} from "react-icons/lia";
import WorkStaffPhotos from "../WorkStaffPhotos/WorkStaffPhotos";
import ListOfTowards from "./ListOfTowards/ListOfTowards";

const RestaurantStuff = () => {

  const arrayOfRestaurantAwards = [{
    icon: <SiCodechef style={{fontSize: "80px", color: 'red'}}></SiCodechef>,
    number: 100,
    text: "Pizza Branches"
  },
    {
    icon : <CiPizza style={{fontSize: "80px", color: 'red'}}></CiPizza>,
      number: 85,
      text: "Number of Awards"
    },
    {
      icon : <SlPeople style={{fontSize: "80px", color: 'red'}}></SlPeople>,
      number: "10,576",
      text: "Happy Customer"
    } ,
    {
      icon : <LiaAwardSolid style={{fontSize: "80px", color: 'red'}}></LiaAwardSolid>,
      number: "900",
      text: "Work Staff"
    }
  ]
  return (
    <>
      <div className={style.container}>
        <section>
          <WorkStaffPhotos></WorkStaffPhotos>
        </section>
        <div className={style.underBg} style={{backgroundImage: `url(${underBg})`}}>
          <div className={style.wrapperUnderBg}>
            <div className={style.wrapperIcons}>
              {arrayOfRestaurantAwards.map(item => <ListOfTowards icon={item.icon} number={item.number} text={item.text}></ListOfTowards>)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RestaurantStuff