import React, {useEffect, useState} from "react";
import style from './Menu.module.scss'
import gb from '../../assets/bg_4.jpg'
import axios from "axios";
import {useSelector} from "react-redux";
import pizzaImage from '../../assets/pizza-1.jpg'
import MenuItems from "../../Pagination/MenuItems";
import Pagination from "../../Pagination/Pagination";
import romb from '../../assets/romb.png'
import Price from "./Price/Price";
import OtherProduct from "../OtherProduct/OtherProduct";
import BlogSection from "../BlogSection/BlogSection";
const Menu = () => {

  const dataOfPizzas = useSelector((state) => state.dataOfPizzas)

  const [currentPage,setCurrentPage] = useState(1)
  const [dataPerPage,setDataPerPage] = useState(6)
  const [loading,setLoading] = useState(false)

  const [currentPagePrice,setCurrentPagePrice] = useState(1)
  const [dataPerPagePrice,setDataPerPagePrice] = useState(4)

  const [currentProduct,setCurrentProduct] = useState(null)

  useEffect(() => {
    if(!dataOfPizzas){
      setLoading(true)
    }else{
      setLoading(false)
    }

    getPizza()
  },[dataOfPizzas])

  const getPizza = () => {
    return axios.get(`https://delicious-pizza-50bbb34e6fdd.herokuapp.com/api/v1/pizza`).then(res => setCurrentProduct(res.data.data.result.splice(0,3)))
  }
  const getDrinks = () => {
    return axios.get(`https://delicious-pizza-50bbb34e6fdd.herokuapp.com/api/v1/drink`).then(res => setCurrentProduct(res.data.data.result))
  }
  const getBurgers = () => {
    return axios.get(`https://delicious-pizza-50bbb34e6fdd.herokuapp.com/api/v1/burger`).then(res => setCurrentProduct(res.data.data.result))
  }
  const getPastas = () => {
    return axios.get(`https://delicious-pizza-50bbb34e6fdd.herokuapp.com/api/v1/pasta`).then(res => setCurrentProduct(res.data.data.result))
  }
// Menu
  const indexOfLastMenuItem = currentPage * dataPerPage;
  const indexOfFirstMenuItem = indexOfLastMenuItem - dataPerPage
  const currentMenu = dataOfPizzas.slice(indexOfFirstMenuItem,indexOfLastMenuItem)


  //Price
  const indexOfLastPriceItem = currentPagePrice * dataPerPagePrice
  const indexOfFirstPriceItem = indexOfLastPriceItem - dataPerPagePrice
  const currentPrice = dataOfPizzas.slice(indexOfFirstPriceItem,indexOfLastPriceItem)

  const paginate = (numberPage) => setCurrentPage(numberPage)

  const paginatePrice = (num) => setCurrentPagePrice(num)

  return (
    <>

      <div className={style.container} style={{backgroundImage: `url(${gb})`}}>
        <div className={style.headerMenu}>
          <h1>
            HOT PIZZA MEALS
          </h1>
          <p>Our masters have been working hard for a long time to create a masterpiece. Finally, you can enjoy it</p>
        </div>
        <MenuItems menuData={currentMenu} loading={loading}></MenuItems>
        <Pagination dataPerPage={dataPerPage} totalItems={dataOfPizzas.length} paginate={paginate}></Pagination>
        <section id={'price'}>
        <div className={style.containerPrice}>
          <h1>OUR MENU PRICING</h1>
          <img src={romb} alt="image"/>
          <p>Did you know that the size of a restaurant kitchen doesn’t necessarily matter, but smart, high-functioning design does? A clean, attractive dining room is a must-have, but we all know the real magic starts in the kitchen. The size of your kitchen doesn’t necessarily matter, but smart, high-functioning design does, especially for frazzled staff on a busy night when the online orders are piling up in the POS and the line is stretching out the door</p>

        </div>
        </section>
        <Price paginate={paginatePrice} data={currentPrice} dataPerPage={dataPerPagePrice} totalItems={dataOfPizzas.length}></Price>

        <OtherProduct getPastas={getPastas} getBurgers={getBurgers} getDrinks={getDrinks} currentProduct={currentProduct} getStartProduct={getPizza}></OtherProduct>
      </div>

    </>
  )
}
export default Menu;