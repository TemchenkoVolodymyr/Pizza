import React from 'react';
import style from './FooterContact.module.scss'
import bg from '../../assets/bg_4.jpg'
import bg3 from '../../assets/image_1 1.png'
import bg2 from '../../assets/Italian Fried Pasta.jpg'
import BlogSection from "../BlogSection/BlogSection";
import Blog from "../BlogSection/Blog/Blog";
import {BiMapPin} from "react-icons/bi";
import {BsTelephoneForward} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";

const FooterContact = () => {
  return (
    <>
    <div className={style.container} style={{backgroundImage: `url(${bg})`}}>
      <div className={style.wrapperBlog}>
      <div className={style.wrapper}>
        <h1>ABOUT US</h1>
        <p className={style.description}>From that day on, the couple became regulars at the restaurant. They would often bring their friends and family to share in the experience. The restaurant became more than just a place to eat; it was a place where memories were made.</p>
      </div>
      <div className={style.wrapper}>
        <h1>RECENT BLOG</h1>
        <div className={style.wrapperBlogs}>
          <Blog image={bg2} date={'12 July , 2022'} countOfComment={8} title={'You won\'t be able to control your appetite on this catering'}></Blog>
          <Blog image={bg3} date={'10 Sept, 2020'} countOfComment={8} title={'Without this dish, any evening becomes just a regular dinner '}></Blog>
        </div>
      </div>
      <div className={style.wrapper}>
        <h1>SERVICES</h1>
        <ul >
          <li>Cooked</li>
          <li>Deliver</li>
          <li>Quality Foods</li>
          <li>Mixed</li>
        </ul>
      </div>
      <div className={style.wrapper}>

        <div className={style.questions}>
          <h1>HAVE A QUESTIONS?</h1>
          <p><BiMapPin></BiMapPin>Via della Sibilla, 42, Tivoli RM</p>
          <p><BsTelephoneForward></BsTelephoneForward>+39 06 9209 9110</p>
          <p><AiOutlineMail></AiOutlineMail><a href={'#'}>delicious@gmail.fun</a></p>
        </div>

      </div>
      </div>
    </div>
      {/*<p>Copyright</p>*/}
    </>
  );
};

export default FooterContact;