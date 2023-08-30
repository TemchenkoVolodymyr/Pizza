import React from 'react';
import style from './FooterContact.module.scss'
import bg from '../../assets/bg_4.jpg'
import bg3 from '../../assets/image_1 1.png'
import bg2 from '../../assets/Italian Fried Pasta.jpg'
import Blog from "../BlogSection/Blog/Blog";
import {useDispatch, useSelector} from "react-redux";
import {blogDataArabicAC, blogDataItalianAC} from "../../Redux/BlogSection/blogSectionAC";
import {blogRequest} from "../../ApiRequest/ApiRequest";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";

const FooterContact = () => {

  const dataBlogComments = useSelector((state) => state.blogData)

  const arabicMeetData = dataBlogComments.arabicMeet
  const italianMeet = dataBlogComments.italianFriedMeet

  const dispatch = useDispatch()
  const addCommentBlog = (value, comment, action) => {
    dispatch(blogRequest.createComment(value, comment, action))
  }


  return (
    <>
      <div className={style.container} style={{backgroundImage: `url(${bg})`}}>
        <div className={style.wrapperBlog}>
          <div className={style.wrapper}>
            <h1 className={style.header}>RECENT BLOG</h1>
            <div className={style.wrapperBlogs}>
              <Blog valueRequest={"italianMeet"} action={blogDataItalianAC} addComment={addCommentBlog}
                    data={italianMeet} image={bg2} date={'12 July , 2022'}
                    countOfComment={italianMeet ? italianMeet.length : 0}
                    title={'You won\'t be able to control your appetite on this catering'}></Blog>
              <Blog valueRequest={"arabicMeet"} action={blogDataArabicAC} addComment={addCommentBlog}
                    countOfComment={arabicMeetData ? arabicMeetData.length : 0} data={arabicMeetData} image={bg3}
                    date={'10 Sept, 2020'}
                    title={'Without this dish, any evening becomes just a regular dinner '}></Blog>
            </div>
          </div>
          <Services></Services>
          <Contact></Contact>
        </div>
      </div>
    </>
  );
};

export default FooterContact;