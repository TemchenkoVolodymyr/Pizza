import axios from "axios";

export const blogRequest = {
  getComment(value, actionCreator) {
    return (dispatch) => {
     return  axios.get(`https://delicious-pizza-50bbb34e6fdd.herokuapp.com/api/v1/${value}`).then(res => dispatch(actionCreator(res.data.data.result)))
    }

  },
  createComment(value, comment, action) {
    return ( dispatch) => {
      return  axios.post(`https://delicious-pizza-50bbb34e6fdd.herokuapp.com/api/v1/${value}`, {

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