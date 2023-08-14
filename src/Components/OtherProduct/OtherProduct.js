import React from "react";
import style from './OtherProduct.module.scss'
import bg from '../../assets/about.jpg'
import test from '../../assets/pizzaNoBg.png'

const OtherProduct = (props) => {

  const {currentProduct,getStartProduct,getBurgers, getDrinks, getPastas} = props


  return (
    <>
      <div className={style.container}>
        <div className={style.wrapperImage}>
          <img src={bg} alt={'image'}/>
        </div>

        <div>
          <div className={style.lists}>
            <ul>
              <li onClick={getStartProduct}>Pizza</li>
              <li onClick={getDrinks}>Drinks</li>
              <li onClick={getBurgers}>Burgers</li>
              <li onClick={getPastas}>Pasta</li>
            </ul>
          </div>

          <div className={style.containerProducts}>
            {currentProduct && currentProduct.map(item => <div className={style.wrapper}>
              <img src={test} alt="image"/>
              <div>
                <h1>{item.name}</h1>
                <p className={style.description}>{item.shortDesciption}</p>
              </div>

              <p className={style.price}>$ {item.price}</p>
              <button>Add to cart</button>
            </div>)}
          </div>
        </div>

      </div>
    </>
  )
}
export default OtherProduct