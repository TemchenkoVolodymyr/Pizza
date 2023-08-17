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
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {blogDataArabicAC, blogDataItalianAC} from "../../Redux/BlogSection/blogSectionAC";

const FooterContact = () => {

  const dataBlogComments = useSelector((state) => state.blogData)

  const arabicMeetData = dataBlogComments.arabicMeet
  const italianMeet = dataBlogComments.italianFriedMeet

const dispatch = useDispatch()
  const getBlogComment = (value, actionCreator) => {

    return axios.get(`http://localhost:3000/api/v1/${value}`).then(res => dispatch(actionCreator(res.data.data.result)))
  }
  const addCommentBlog = (value, comment, action) => {
    axios.post(`http://localhost:3000/api/v1/${value}`, {

      author: "Quest",
      comment: comment,
      date: new Date().toLocaleDateString()
    }).then(res => {
      if (res.status === 200) {
        getBlogComment(value, action)
      }
    })
  }

  return (
    <>
    <div className={style.container} style={{backgroundImage: `url(${bg})`}}>
      <div className={style.wrapperBlog}>
      <div className={style.wrapper}>
        <h1 className={style.header}>RECENT BLOG</h1>
        <div className={style.wrapperBlogs}>
          <Blog   valueRequest={"italianMeet"}  action={blogDataItalianAC}   addComment={addCommentBlog} data={italianMeet} image={bg2} date={'12 July , 2022'} countOfComment={italianMeet ? italianMeet.length : 0} title={'You won\'t be able to control your appetite on this catering'}></Blog>
          <Blog  valueRequest={"arabicMeet"}   action={blogDataArabicAC}  addComment={addCommentBlog} countOfComment={arabicMeetData ? arabicMeetData.length : 0} data={arabicMeetData} image={bg3} date={'10 Sept, 2020'}  title={'Without this dish, any evening becomes just a regular dinner '}></Blog>
        </div>
      </div>
      <div className={style.wrapper}>
        <h1>SERVICES</h1>
        <ul>
          <li>Cooked</li>
          <li>Deliver</li>
          <li>Quality Foods</li>
          <li>Mixed</li>
        </ul>
      </div>
        <div className={style.wrapper}>
          <h1>ABOUT US</h1>
          <p className={style.description}>From that day on, the couple became regulars at the restaurant. They would often bring their friends and family to share in the experience. The restaurant became more than just a place to eat; it was a place where memories were made.</p>
        </div>
        <div className={style.questions}>
          <h1>HAVE A QUESTIONS?</h1>
          <p><BiMapPin></BiMapPin>Via della Sibilla, 42, Tivoli RM</p>
          <p><BsTelephoneForward></BsTelephoneForward><a href="https://wa.me/3272885492" target="_blank" rel="noopener noreferrer">+39 06 9209 9110</a></p>
          <p><AiOutlineMail></AiOutlineMail><a href={'#'}>delicious@gmail.fun</a></p>
        </div>
      {/*<div className={style.wrapper}>*/}

        {/*<div className={style.questions}>*/}
        {/*  <h1>HAVE A QUESTIONS?</h1>*/}
        {/*  <p><BiMapPin></BiMapPin>Via della Sibilla, 42, Tivoli RM</p>*/}
        {/*  <p><BsTelephoneForward></BsTelephoneForward><a href="https://wa.me/3272885492" target="_blank" rel="noopener noreferrer">+39 06 9209 9110</a></p>*/}
        {/*  <p><AiOutlineMail></AiOutlineMail><a href={'#'}>delicious@gmail.fun</a></p>*/}
        {/*</div>*/}

      {/*</div>*/}
      </div>
    </div>
      {/*<p>Copyright</p>*/}
    </>
  );
};

export default FooterContact;