import React, {useEffect, useState} from "react";
import style from './Menu.module.scss'
import gb from '../../assets/bg_4.jpg'
import {useSelector} from "react-redux";
import MenuItems from "../../utility/Pagination/MenuItems";
import Pagination from "../../utility/Pagination/Pagination";
import Price from "./Price/Price";
import OtherProduct from "../OtherProduct/OtherProduct";
import {getProducts} from "../../ApiRequest/ApiRequest";
import TextPricingMenu from "./TextPricingMenu/TextPricingMenu";

const Menu = () => {

  const dataOfPizzas = useSelector((state) => state.dataOfPizzas)

  const [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage, setDataPerPage] = useState(6)
  const [loading, setLoading] = useState(false)

  const [currentPagePrice, setCurrentPagePrice] = useState(1)
  const [dataPerPagePrice, setDataPerPagePrice] = useState(6)

  const [currentProduct, setCurrentProduct] = useState(null)

  useEffect(() => {
    if (!dataOfPizzas) {
      setLoading(true)
    } else {
      setLoading(false)
    }

    getProducts.getPizza().then(res => setCurrentProduct(res.data.data.result.splice(0, 3)))
  }, [dataOfPizzas])

  const getDataPizzas = () => {
    getProducts.getPizza().then(res => setCurrentProduct(res.data.data.result.splice(0, 3)))
  }
  const getDataDrinks = () => {
    getProducts.getDrink().then(res => setCurrentProduct(res.data.data.result))
  }
  const getDataBurgers = () => {
    getProducts.getBurgers().then(res => setCurrentProduct(res.data.data.result))
  }
  const getDataPastas = () => {
    getProducts.getPastas().then(res => setCurrentProduct(res.data.data.result))
  }

// Menu
  const indexOfLastMenuItem = currentPage * dataPerPage;
  const indexOfFirstMenuItem = indexOfLastMenuItem - dataPerPage
  const currentMenu = dataOfPizzas.slice(indexOfFirstMenuItem, indexOfLastMenuItem)


  //Price
  const indexOfLastPriceItem = currentPagePrice * dataPerPagePrice
  const indexOfFirstPriceItem = indexOfLastPriceItem - dataPerPagePrice
  const currentPrice = dataOfPizzas.slice(indexOfFirstPriceItem, indexOfLastPriceItem)

  const paginate = (numberPage) => setCurrentPage(numberPage)

  const paginatePrice = (num) => setCurrentPagePrice(num)

  return (
    <>

      <div className={style.container} style={{backgroundImage: `url(${gb})`}}>
        <header>
          <div className={style.headerMenu}>
            <h1>
              HOT PIZZA MEALS
            </h1>
            <p>Our masters have been working hard for a long time to create a masterpiece. Finally, you can enjoy it</p>
          </div>
        </header>

        <MenuItems menuData={currentMenu} loading={loading}></MenuItems>

        <Pagination dataPerPage={dataPerPage} totalItems={dataOfPizzas.length} paginate={paginate}></Pagination>

        <section id={'price'}>
          <TextPricingMenu></TextPricingMenu>
        </section>
        <Price paginate={paginatePrice} data={currentPrice} dataPerPage={dataPerPagePrice}
               totalItems={dataOfPizzas.length}></Price>

        <OtherProduct getStartProduct={getDataPizzas}
                      getBurgers={getDataBurgers}
                      getDrinks={getDataDrinks}
                      getPastas={getDataPastas} currentProduct={currentProduct}></OtherProduct>
      </div>

    </>
  )
}
export default Menu;