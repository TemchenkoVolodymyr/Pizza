import React, {useEffect, useState} from "react";
import style from './Modal.module.scss'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CommentSection from "./CommentSection/CommentSection";
import {blogRequest} from "../../ApiRequest/ApiRequest";
import {useDispatch} from "react-redux";


const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const styleModalPhone = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "auto",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  padding: 10,
  p: 2,
};


const CustomModal = (props) => {

  const dispatch = useDispatch()

  const {handleClose, modal, data, comment, changeComment, action, value, image, title} = props

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const addNewComment = () => {
    dispatch(blogRequest.createComment(value, comment, action))
    changeComment("")
  }

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, [])

  return (
    <>
      <div className={style.container}>
        <Modal
          open={modal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={screenWidth > 768 ? styleModal : styleModalPhone}>
            <div>

              <header>
                <div className={style.wrapperHeader}>
                  <img src={image} alt={'image-party'}/>
                  <p>{title}</p>
                </div>
              </header>

              <div className={style.containerModal}>

                <section>
                {data && data.map((item, index) => <div key={index} className={style.wrapper}>
                    <div>
                      <p>{item.author}</p>
                      <p>{item.date}</p>
                    </div>

                    <p className={style.comment}>{item.comment}</p>
                  </div>
                )}
                </section>

              </div>
            </div>

            <section>
              <CommentSection comment={comment} changeComment={changeComment} callback={addNewComment}
                              action={action}></CommentSection>
            </section>

          </Box>
        </Modal>
      </div>
    </>
  )
}
export default CustomModal;
