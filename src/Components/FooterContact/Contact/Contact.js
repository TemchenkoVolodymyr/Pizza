import React from 'react';
import style from "../FooterContact.module.scss";
import {BiMapPin} from "react-icons/bi";
import {BsTelephoneForward} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";

const Contact = () => {
  return (
    <div className={style.questions}>
      <h1>HAVE ANY QUESTIONS?</h1>
      <p><BiMapPin></BiMapPin>Via della Sibilla, 42, Tivoli RM</p>
      <p><BsTelephoneForward></BsTelephoneForward><a href="https://wa.me/3272885492" target="_blank"
                                                     rel="noopener noreferrer">+39 06 9209 9110</a></p>
      <p><AiOutlineMail></AiOutlineMail><a href={'#'}>delicious@gmail.fun</a></p>
    </div>
  );
};

export default Contact;