import React, {useEffect, useState} from "react";
import style from './OtherProduct.module.scss'
import bg from '../../assets/about.jpg'
import axios from "axios";
import test from '../../assets/pizzaNoBg.png'

const OtherProduct = () => {

  const [currentProduct,setCurrentProduct] = useState(null)

  // useEffect(() => {
  //   getPizza()
  // })
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

  console.log(currentProduct)

  return (
    <>
      <div className={style.container}>
        <div className={style.wrapperImage}>
          <img src={bg} alt={'image'}/>
        </div>

        <div>
          <div className={style.lists}>
            <ul>
              <li onClick={getPizza}>Pizza</li>
              <li onClick={getDrinks}>Drinks</li>
              <li onClick={getBurgers}>Burgers</li>
              <li onClick={getPastas}>Pasta</li>
            </ul>
          </div>

          <div className={style.containerProducts}>
            {currentProduct && currentProduct.map(item => <div>
              <img src={test} alt="image"/>
              <p>{item.name}</p>
              <p>{item.shortDesciption}</p>
              <p>{item.price}</p>
              <button>Add to cart</button>
            </div>)}
          </div>
        </div>

      </div>
    </>
  )
}
export default OtherProduct