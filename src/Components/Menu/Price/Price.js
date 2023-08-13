import React from "react";
import style from './Price.module.scss'
import pizzaImage from "../../../assets/pizzaNoBg.png";

const Price = (props) => {

  const {data} = props

  return (
    <>
      <div className={style.container}>
        {data && data.map(item => <div className={style.main}>
          <div className={style.wrapperImage}>
            <img src={pizzaImage} alt="image"/>
          </div>
          <div className={style.wrapperText}>
            <div className={style.wrapperPrice}>

              <p>{item.name}</p>

              <p>{item.price}</p>
            </div>

            <p className={style.description}>{item.shortDesciption}</p>

          </div>

        </div>)}
      </div>
    </>
  )
}
export default Price