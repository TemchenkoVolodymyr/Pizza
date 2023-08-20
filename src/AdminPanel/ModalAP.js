import React, {useState} from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CustomInput from "./CustomInput/CustomInput";
import axios from "axios";
import {useDispatch} from "react-redux";
import {getPizzas} from "../Pages/HomePage/HomePage";


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


const ModalAP = (props) => {

  const {modal, setModal} = props

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [shortDescription, setShortDescription] = useState("")
  const [price, setPrice] = useState('')

  const dispatch = useDispatch()
  const handleClose = () => {
    setModal(false)
  }


  const createNewPizza = (e) => {
    e.preventDefault()

    axios.post(`https://delicious-pizza-50bbb34e6fdd.herokuapp.com/api/v1/pizza`, {
      name,
      image,
      description,
      shortDescription,
      price
    }).then(res => {
      if (res.status === 200) {
        getPizzas(dispatch)
      }
    })

  }
  return (
    <>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <div>
            <form>
              <CustomInput name='Name' value={name} changeValue={setName} type={'input'}></CustomInput>
              <CustomInput name='Image' value={image} changeValue={setImage} type={'input'}></CustomInput>
              <CustomInput name='Description' value={description} changeValue={setDescription}
                           type={'input'}></CustomInput>
              <CustomInput name='Short Description' value={shortDescription} changeValue={setShortDescription}
                           type={'input'}></CustomInput>
              <CustomInput name='Price' value={price} changeValue={setPrice} type={'input'}></CustomInput>
              <button onClick={createNewPizza}>Add new pizza</button>
            </form>
          </div>
        </Box>
      </Modal>

    </>
  )
}
export default ModalAP;
