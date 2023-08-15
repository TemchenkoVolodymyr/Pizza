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
    return axios.get(`http://localhost:3000/api/v1/pizza`).then(res => setCurrentProduct(res.data.data.result.splice(0,3)))
  }
  const getDrinks = () => {
    return axios.get(`http://localhost:3000/api/v1/drink`).then(res => setCurrentProduct(res.data.data.result))
  }
  const getBurgers = () => {
    return axios.get(`http://localhost:3000/api/v1/burger`).then(res => setCurrentProduct(res.data.data.result))
  }
  const getPastas = () => {
    return axios.get(`http://localhost:3000/api/v1/pasta`).then(res => setCurrentProduct(res.data.data.result))
  }

  const indexOfLastMenuItem = currentPage * dataPerPage;

  const indexOfFirstMenuItem = indexOfLastMenuItem - dataPerPage

  const currentMenu = dataOfPizzas.slice(indexOfFirstMenuItem,indexOfLastMenuItem)

  const paginate = (numberPage) => setCurrentPage(numberPage)

  return (
    <>
      <div className={style.container} style={{backgroundImage: `url(${gb})`}}>
        <div className={style.headerMenu}>
          <h1>
            HOT PIZZA MEALS
          </h1>
          <p>Far far away,behind the word mountains,far fram the countries Vakalia and Cansonantia,there live the blind
            texts</p>
        </div>
        <MenuItems menuData={currentMenu} loading={loading}></MenuItems>
        <Pagination dataPerPage={dataPerPage} totalItems={dataOfPizzas.length} paginate={paginate}></Pagination>

        <div className={style.containerPrice}>
          <h1>OUR MENU PRICING</h1>
          <img src={romb} alt="image"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aut dolores ducimus earum facere illo itaque libero maxime, mollitia nobis numquam officiis porro quas repellendus sed vel veritatis voluptatem.</p>

        </div>
        <Price data={dataOfPizzas}></Price>
        <OtherProduct getPastas={getPastas} getBurgers={getBurgers} getDrinks={getDrinks} currentProduct={currentProduct} getStartProduct={getPizza}></OtherProduct>
      </div>

    </>
  )
}
export default Menu;