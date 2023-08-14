import React, {useEffect, useState} from "react";
import style from './BlogSection.module.scss'
import italianFried from '../../assets/Italian Fried Pasta.jpg'
import TheArabic from '../../assets/image_1 1.png'
import BooksPizza from '../../assets/image_3 1.png'
import bg from '../../assets/bg_4.jpg'
import bg2 from '../../assets/image_1 1.png'
import bg3 from '../../assets/romb.png'
import {TfiCommentAlt} from "react-icons/tfi";
import axios from "axios";
import CustomModal from "../CustomModal/CustomModal";
import Blog from "./Blog/Blog";
import {useDispatch, useSelector} from "react-redux";
import {blogDataArabicAC, blogDataBooksAC, blogDataItalianAC} from "../../Redux/BlogSection/blogSectionAC";

const BlogSection = () => {

  const [italianMeetData, setItalianMeetData] = useState(null)
  const [arabicMeet, setArabicMeet] = useState(null)
  const [booksPizzaMeet, setBooksPizzaMeet] = useState(null)
  const [modal, setModal] = useState(false)
  const handleOpen = () => setModal(true);
  const dispatch = useDispatch()

  useEffect(() => {
    getBlogComment("italianMeet", blogDataItalianAC)
    getBlogComment("arabicMeet", blogDataArabicAC)
    getBlogComment("booksPizzaMeet", blogDataBooksAC)
  }, [])


  const dataBlogComments = useSelector((state) => state.blogData)

  const arabicMeetData = dataBlogComments.arabicMeet
  const italianMeet = dataBlogComments.italianFriedMeet
  const booksPizzaMeetData = dataBlogComments.booksPizzaMeet


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
  const handleClose = () => {
    setModal(false)
    setItalianMeetData(null)
    setArabicMeet(null)
    setBooksPizzaMeet(null)

  };


  const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur cum debitis distinctio dolorum ducimus facilis, magnam placeat quaerat quam quisquam rem rerum tempora, tempore unde vel velit voluptatem voluptatum"
  return (
    <>
      <div className={style.container} style={{backgroundImage: `url(${bg})`}}>
        <div className={style.header}>
          <h1>RECENT FROM BLOG</h1>
          <p>{description}</p>
        </div>

        <div className={style.main}>

          <Blog setData={setItalianMeetData}
                openComment={setModal}
                image={italianFried}
                date={'10 Sept , 2020'}
                countOfComment={dataBlogComments ? italianMeet.length : 0}
                title="Italian Fried Meet" description={description}
                callback={getBlogComment}
                valueRequest={"italianMeet"}
                modal={modal}
                data={italianMeet}
                handleClose={handleClose}
                addComment={addCommentBlog}
                action={blogDataItalianAC}

          ></Blog>
          <Blog setData={setArabicMeet} openComment={setModal} image={bg2} date={'12 July , 2022'}
                countOfComment={dataBlogComments ? arabicMeetData.length : 0} title="Arabic Meet" description={description}
                callback={getBlogComment} valueRequest={"arabicMeet"}
                data={arabicMeetData}
                handleClose={handleClose}
                addComment={addCommentBlog}
                action={blogDataArabicAC}
          ></Blog>
          <Blog setData={setBooksPizzaMeet} openComment={setModal} image={bg2} date={'1 Sept , 2023'}
                countOfComment={dataBlogComments ? booksPizzaMeetData.length : 0} title="Books Pizza Meet"
                description={description} callback={getBlogComment} valueRequest={"booksPizzaMeet"}
                data={booksPizzaMeetData}
                handleClose={handleClose}
                addComment={addCommentBlog}
                action={blogDataBooksAC}
          ></Blog>
        </div>
      </div>

    </>
  )
}
export default BlogSection