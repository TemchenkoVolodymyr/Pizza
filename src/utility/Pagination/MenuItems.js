import React, {useState} from "react";
import style from './MenuItems.module.scss'
import {cartDataOrderAC} from "../../Redux/Cart/cartAC";
import {useDispatch} from "react-redux";



const MenuItems = (props) => {
  const {loading, menuData} = props

  const dispatch = useDispatch()

  const setOrderToLocalStorage = (image,price,name,id) => {
    const orderData = {
      image,
      price,
      name,
      ingredients:'Tomato,chess',
      size:'Large',
      quantity:1,
      id
    }
    const isLocalStorage = JSON.parse(localStorage.getItem('order')) || [];
    isLocalStorage.push(orderData)
    localStorage.setItem('order', JSON.stringify(isLocalStorage))
    dispatch(cartDataOrderAC(isLocalStorage))
  }


    return (
      <>
        <div className={style.itemsMenu}>
          {menuData && menuData.map(item => <div className={style.wrapperItems}>
            <div style={{backgroundImage:`url(pizza/${item.image})`}} className={style.container}>
            <div className={style.descriptionItem}>
              <p className={style.name}>{item.name}</p>
              <p className={style.description}>{item.description}</p>
              <div className={style.wrapperPrice}>

                <p className={style.price}><span>$ {item.price}</span></p>
                <button onClick={() => setOrderToLocalStorage(item.image,item.price,item.name,item._id)}>Order</button>

                </div>
            </div>
            </div>
          </div>)}
        </div>
      </>
    )
}

export default MenuItems;