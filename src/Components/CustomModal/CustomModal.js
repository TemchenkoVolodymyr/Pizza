import React from "react";
import style from './Modal.module.scss'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

  const {handleClose,modal,data} = props

  return(
    <>
      <div>
        <Modal
          open={modal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <div>
              {data && data.map(item => <div>
                <p>{item.author}</p>
                <p>{item.comment}</p>
                </div>
                )}
            </div>
            <div>

              <input type={"text"}/>
              <button>send</button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  )
}
export default CustomModal;
