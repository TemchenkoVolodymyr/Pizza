import React from "react";
import style from './AboutUs.module.scss'
import {BsFillTelephoneFill} from "react-icons/bs";
import {MdPlace} from "react-icons/md";
import {AiOutlineClockCircle, AiOutlineInstagram} from "react-icons/ai";
import {SlSocialFacebook, SlSocialTwitter} from "react-icons/sl";
import {NavLink} from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.info}>
          <section>
            <div>
              <a href="https://wa.me/3272885492" target="_blank" rel="noopener noreferrer"><BsFillTelephoneFill
                style={{color: 'orange', fontSize: "20px"}}></BsFillTelephoneFill> +39 06 9209 9110</a>
              <p>Typical Roman Cooking and traditional roman pizza!</p>
            </div>
          </section>
          <section>
            <div>
              <h3><MdPlace style={{color: 'orange', fontSize: "20px"}}></MdPlace> 198 West 21th Street</h3>
              <p>Via Bari 9-11, 00161 Rome Italy</p>
            </div>
          </section>
          <section>
            <div>
              <h3><AiOutlineClockCircle style={{color: 'orange', fontSize: "20px"}}></AiOutlineClockCircle> Open
                Monday-Friday</h3>
              <p>8:00 am - 9:00 pm</p>
            </div>
          </section>
        </div>

        <div className={style.social}>
          <nav>
            <NavLink to={'#'}>
              <SlSocialTwitter></SlSocialTwitter>
            </NavLink>
            <NavLink to={'#'}>
              <SlSocialFacebook></SlSocialFacebook>
            </NavLink>
            <NavLink to={'#'}>
              <AiOutlineInstagram/>
            </NavLink>
          </nav>
        </div>

      </div>
    </>
  )
}

export default AboutUs