import React, {useState} from "react";
import style from './Blog.module.scss'
import {TfiCommentAlt} from "react-icons/tfi";
import CustomModal from "../../CustomModal/CustomModal";
import axios from "axios";

const Blog = (props) => {
  const {image , description , date ,title , countOfComment , valueRequest , data ,addComment,action} = props
  const [modal, setModal] = useState(false)

  const [comment, setComment] = useState("");

  const openComments = () => {
    setModal(true)
  }



  return(
    <>
      <div className={style.wrapper}>
        <img src={image} alt='image'/>
        <div className={style.wrapperDate}>
          <p>{date}</p>
          <p onClick={() => openComments()} className={style.comment}>{countOfComment}<TfiCommentAlt></TfiCommentAlt></p>
        </div>
        <h3>{title}</h3>
        <p className={style.description}>{description}</p>
      </div>

      {modal ? <CustomModal callback={addComment}
                            data={data}
                            handleClose={() => setModal(false)}
                            modal={modal}
                            comment={comment}
                            changeComment={setComment}
                            value={valueRequest}
                            action={action}
                            image={image}
                            title={title}
      ></CustomModal> : null}
    </>
  )
}
export default Blog