import React, {useState} from "react";
import style from './MenuItems.module.scss'
import pizzaImage from "../assets/pizza-1.jpg";

const MenuItems = (props) => {
  const {loading, menuData} = props

  if (loading) {
    return <h1>loading...</h1>
  }
    return (
      <>
        <div className={style.itemsMenu}>
          {menuData && menuData.map(item => <div className={style.wrapperItems}>
            <div>
              <img src={pizzaImage} alt="image"/>
            </div>

            <div className={style.descriptionItem}>
              <p className={style.name}>{item.name}</p>
              <p className={style.description}>{item.description}</p>
              <div className={style.wrapperPrice}>
                <p className={style.price}><span>$ {item.price}</span></p>
                <button>Order</button>
              </div>
            </div>
          </div>)}
        </div>
      </>
    )
}

export default MenuItems;