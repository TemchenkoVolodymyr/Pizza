import React from "react";
import style from './Modal.module.scss'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CommentSection from "./CommentSection/CommentSection";
import {addCommentBlog, getBlogComment} from "../BlogSection/BlogSection";

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const CustomModal = (props) => {

  const {handleClose, modal, data, callback, comment, changeComment,action,value} = props

  const addNewComment = () => {
    callback(value,comment,action)
  }

  return (
    <>
      <div className={style.container}>
        <Modal
          open={modal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <div className={style.test}>
              <div>dasdasd</div>
              <div className={style.containerModal}>
                {data && data.map(item => <div className={style.wrapper}>
                    <div>
                      <p>{item.author}</p>
                      <p>{item.date}</p>
                    </div>

                    <p className={style.comment}>{item.comment}</p>
                  </div>
                )}
              </div>
            </div>
              <div>
                <CommentSection comment={comment} changeComment={changeComment} callback={addNewComment} action={action}></CommentSection>
              </div>
          </Box>
        </Modal>
      </div>
    </>
)
}
export default CustomModal;
