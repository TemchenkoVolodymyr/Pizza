import React from "react";
import style from './Blog.module.scss'
import italianFried from '../../assets/Italian Fried Pasta.jpg'
import TheArabic from '../../assets/image_1 1.png'
import BooksPizza from '../../assets/image_3 1.png'
import bg from '../../assets/bg_4.jpg'
import {TfiCommentAlt} from "react-icons/tfi";

const Blog = () => {

  const styleImage = {
    backgroundImage: `url(${italianFried})`
  }
  return (


    <>
      <div className={style.container} style={{backgroundImage: `url(${bg})`}}>
        <div className={style.header}>
          <h1>RECENT FROM BLOG</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda commodi, cumque eos laboriosam
            quam quis tempore! Deserunt nobis pariatur quae tenetur? Iusto, possimus, quam! Laboriosam neque nulla
            pariatur rerum?</p>
        </div>

        <div className={style.main}>
          <div className={style.wrapper}>
            <img src={italianFried} alt='image'/>
            <div className={style.wrapperDate}>
              <p>Sept 10,2020</p>
              <p className={style.comment}>3 <TfiCommentAlt></TfiCommentAlt></p>
            </div>
            <h3>Italian Fried Meet</h3>
            <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur cum debitis distinctio
              dolorum ducimus facilis, magnam placeat quaerat quam quisquam rem rerum tempora, tempore unde vel velit
              voluptatem voluptatum.</p>
          </div>
          <div className={style.wrapper}>
            <img src={italianFried} alt='image'/>
            <div className={style.wrapperDate}>
              <p>Aug 5,2020</p>
              <p className={style.comment}>3 <TfiCommentAlt></TfiCommentAlt></p>
            </div>
            <h3>The Arabic Friends</h3>
            <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda autem, beatae blanditiis
              consequuntur, culpa deleniti eius error et eveniet, explicabo incidunt nisi nobis perspiciatis quia quidem
              repudiandae similique totam.</p>
          </div>
          <div className={style.wrapper}>
            <img src={italianFried} alt='image'/>
            <div className={style.wrapperDate}>
              <p>Sept 21,2023</p>
              <p className={style.comment}>3 <TfiCommentAlt></TfiCommentAlt></p>
            </div>
            <h3>Books and Pizza</h3>
            <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloremque inventore nostrum.
              Architecto consectetur consequuntur culpa cumque, deserunt distinctio, dolorum eaque ipsa itaque labore
              maxime odit quo sequi tempora unde?</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Blog