import React, {useEffect, useState} from "react";
import style from './Menu.module.scss'
import gb from '../../assets/bg_4.jpg'
import axios from "axios";
import {useSelector} from "react-redux";
import pizzaImage from '../../assets/pizza-1.jpg'
import MenuItems from "../../Pagination/MenuItems";
import Pagination from "../../Pagination/Pagination";
const Menu = () => {

  const dataOfPizzas = useSelector((state) => state.dataOfPizzas)

  const [currentPage,setCurrentPage] = useState(1)
  const [dataPerPage,setDataPerPage] = useState(3)
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    if(!dataOfPizzas){
      setLoading(true)
    }else{
      setLoading(false)
    }
  },[dataOfPizzas])

  // const test = () => {
  //   return axios.post(`http://localhost:3000/api/v1/pizza`, {
  //     name: 'asdasd',
  //     description: 'asdasd',
  //     shortDescription: "asdasd",
  //     price: 44,
  //   })
  // }

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
      </div>
    </>
  )
}
export default Menu;