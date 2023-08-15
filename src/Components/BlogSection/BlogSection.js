import React, {useEffect, useState} from "react";
import style from './BlogSection.module.scss'
import italianFried from '../../assets/Italian Fried Pasta.jpg'
import bg from '../../assets/bg_4.jpg'
import bg2 from '../../assets/image_1 1.png'
import bg3 from '../../assets/Books and Pizzas.jpg'
import axios from "axios";
import Blog from "./Blog/Blog";
import {useDispatch, useSelector} from "react-redux";
import {blogDataArabicAC, blogDataBooksAC, blogDataItalianAC} from "../../Redux/BlogSection/blogSectionAC";

const BlogSection = () => {

  const [modal, setModal] = useState(false)
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
  };



  const description = "Because if someone asks \"where to eat a good Neapolitan pizza\" I can not accept that someone else shows me a place where the pizza appears flat like a sole and then tells me \"because I don't like the pizza with the swollen crust, in my opinion the real good pizza is the low one"
  const descriptionFirstBlog = 'I discovered that in many cities of Europe the Neapolitan pizza has firmly established itself as a cultural product. In the United Kingdom you go beyond London: you can find it in Manchester, Bristol, Kent, Glasgow. In Germany, between Berlin, Cologne, Munich is slowly conquering its spaces. And it doesn\'t stop here: Paris, Madrid, Brussels, Prague'
  const descriptionSecondBlog = 'But there\'s more: because Neapolitan pizza is conquering the world! I discovered that in the United States the culture has spread even earlier than in Europe (with all the hybridizations of the case). I\'ve been to New York and I\'ve eaten in three pizzerias, only a paltry percentage of those in the Big Apple. And we want to talk about the nascent market of Asia, Japan in the lead '
  const descriptionThirdBlog = 'I preferred to devote my energies to emerging realities, still little known, to draw a picture of what is an increasingly growing phenomenon outside Italy, but paradoxically still ignored by the Italian experts themselves. My range of action goes beyond the boundaries of the boot, which I prefer to leave to the pen of many other professionals.'

  return (
    <>
      <div className={style.container} style={{backgroundImage: `url(${bg})`}}>
        <div className={style.header}>
          <h1>RECENT FROM BLOG</h1>
          <p>{description}</p>
        </div>

        <div className={style.main}>

          <Blog
                openComment={setModal}
                image={italianFried}
                date={'10 Sept , 2020'}
                countOfComment={dataBlogComments ? italianMeet.length : 0}
                title="Italian Fried Meet" description={descriptionFirstBlog}
                callback={getBlogComment}
                valueRequest={"italianMeet"}
                modal={modal}
                data={italianMeet}
                handleClose={handleClose}
                addComment={addCommentBlog}
                action={blogDataItalianAC}

          ></Blog>
          <Blog openComment={setModal} image={bg2} date={'12 July , 2022'}
                countOfComment={dataBlogComments ? arabicMeetData.length : 0} title="Arabic Meet" description={descriptionSecondBlog}
                callback={getBlogComment} valueRequest={"arabicMeet"}
                data={arabicMeetData}
                handleClose={handleClose}
                addComment={addCommentBlog}
                action={blogDataArabicAC}
          ></Blog>
          <Blog  openComment={setModal} image={bg3} date={'1 Sept , 2023'}
                countOfComment={dataBlogComments ? booksPizzaMeetData.length : 0} title="Books Pizza Meet"
                description={descriptionThirdBlog} callback={getBlogComment} valueRequest={"booksPizzaMeet"}
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