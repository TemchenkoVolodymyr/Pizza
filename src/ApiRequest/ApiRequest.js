import axios from "axios";
import {reset} from "redux-form";
import {cartDataOrderAC} from "../Redux/Cart/cartAC";

export const blogRequest = {
  getComment(value, actionCreator) {
    return (dispatch) => {
      return axios.get(`https://delicious-pizza-50bbb34e6fdd.herokuapp.com/api/v1/${value}`).then(res => dispatch(actionCreator(res.data.data.result)))
    }

  },
  createComment(value, comment, action) {
    return (dispatch) => {
      return axios.post(`https://delicious-pizza-50bbb34e6fdd.herokuapp.com/api/v1/${value}`, {

        author: "Quest",
        comment: comment,
        date: new Date().toLocaleDateString()

      }).then(res => {

        if (res.status === 200) {
          dispatch(blogRequest.getComment(value, action))

        }
      })
    }
  }
}

export const contactFormRequest = {

  submitForm(dataForm, isSucceed) {
    return (dispatch) => {
      return axios.post(`https://delicious-pizza-50bbb34e6fdd.herokuapp.com/api/v1/form`, {

        name: dataForm.contact.values.firstName,
        message: dataForm.contact.values.message,
        email: dataForm.contact.values.email,
        date: new Date().toLocaleDateString()

      }).then(res => {
        if (res.status === 200) {
          isSucceed(true)
          dispatch(reset('contact'))
        }
      })
    }
  }
}

export const getProducts = {

  getPizza() {
    return axios.get(`https://delicious-pizza-50bbb34e6fdd.herokuapp.com/api/v1/pizza`)
  },
  getDrink() {
    return axios.get(`https://delicious-pizza-50bbb34e6fdd.herokuapp.com/api/v1/drink`)
  },
  getBurgers() {
    return axios.get(`https://delicious-pizza-50bbb34e6fdd.herokuapp.com/api/v1/burger`)
  },
  getPastas() {
    return axios.get(`https://delicious-pizza-50bbb34e6fdd.herokuapp.com/api/v1/pasta`)
  }

}


 export const createPizzaItem = (name, image, description, shortDescription, price) => {
    return (dispatch) => {
      return axios.post(`https://delicious-pizza-50bbb34e6fdd.herokuapp.com/api/v1/pizza`, {
        name,
        image,
        description,
        shortDescription,
        price
      }).then(res => {
        if (res.status === 200) {
          dispatch(getProducts.getPizza())
        }
      })
    }
  }


export const setOrderToLocalStorage = (image, price, name, id) => {
  return (dispatch) => {

    const isLocalStorage = JSON.parse(localStorage.getItem('order')) || [];

    const orderData = {
      image,
      price,
      name,
      ingredients: 'Tomato,chess',
      size: 'Large',
      quantity: 1,
      id
    }

    isLocalStorage.push(orderData)
    localStorage.setItem('order', JSON.stringify(isLocalStorage))
    dispatch(cartDataOrderAC(isLocalStorage))
  }
}

export const deleteCartItemThunkCreator = (itemId, localDataOrder, setPrice, setQuantity) => {
  return (dispatch) => {

    const newArrayOrder = localDataOrder.filter((item) => item.id !== itemId)
    localStorage.setItem('order', JSON.stringify(newArrayOrder))

    dispatch(cartDataOrderAC(newArrayOrder))

    setPrice(0)

    setQuantity(0)

  }
}
