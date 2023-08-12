import React from "react";
import style from './Menu.module.scss'
import gb from '../../assets/bg_4.jpg'
import axios from "axios";
import {useSelector} from "react-redux";
import pizzaImage from '../../assets/pizza-1.jpg'
const Menu = () => {

  const dataOfPizzas = useSelector((state) => state.dataOfPizzas)
  const test = () => {
    return axios.post(`http://localhost:3000/api/v1/pizza`, {
      name: 'asdasd',
      description: 'asdasd',
      shortDescription: "asdasd",
      price: 44,
    })
  }

  console.log(dataOfPizzas)
  return (
    <>
      <div className={style.container} style={{backgroundImage: `url(${gb})`}}>
        <div>
          <h1>
            HOT PIZZA MEALS
          </h1>
          <p>Far far away,behind the word mountains,far fram the countries Vakalia and Cansonantia,there live the blind
            texts</p>
        </div>
        <div>
          {dataOfPizzas && dataOfPizzas.map(item => <div>
            <div>
              <img src={pizzaImage} alt="image"/>
            </div>

            <div>
              <p>{item.name}</p>
              <p>{item.description}</p>
              <div>
                <p>{item.price}</p>
                <button>Order</button>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </>
  )
}
export default Menu;