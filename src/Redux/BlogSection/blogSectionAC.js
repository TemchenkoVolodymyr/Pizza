import {SET_ARABIC_DATA, SET_BOOKS_DATA, SET_FRIEND_DATA} from "./BlogSectionReducer";

export const blogDataArabicAC = (data) => {
  return{
    type:SET_ARABIC_DATA,
    arabicData:data
  }
}

export const blogDataItalianAC = (data) => {
  return{
    type:SET_FRIEND_DATA,
    data
  }
}
export const blogDataBooksAC = (data) => {
  return{
    type:SET_BOOKS_DATA,
    booksData:data
  }
}