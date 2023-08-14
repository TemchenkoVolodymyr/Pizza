import initialState from "../initialState";

export const SET_ARABIC_DATA = "SET_ARABIC_DATA"
export const SET_BOOKS_DATA = "SET_BOOKS_DATA"
export const SET_FRIEND_DATA = "SET_ITALIAN_DATA"

const BlogSectionReducer = (blogData = initialState.blogData,action) => {
  switch (action.type) {
    case SET_ARABIC_DATA : {

      return {
        ...blogData,arabicMeet:[...action.arabicData]
      }
    }
    case SET_BOOKS_DATA : {

      return {
        ...blogData,booksPizzaMeet:[...action.booksData]
      }
    }
    case SET_FRIEND_DATA : {

      return {
        ...blogData,italianFriedMeet:[...action.data]
      }
    }

    default : return blogData
  }
}

export default BlogSectionReducer