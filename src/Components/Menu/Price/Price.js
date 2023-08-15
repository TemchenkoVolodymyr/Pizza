import React from "react";
import style from './Price.module.scss'


const Price = (props) => {

  const {data} = props
  return (
    <>
      <div className={style.container}>
        {data && data.map(item => <div className={style.main}>
          <div className={style.wrapperImage}>
            <img src={`pizza/${item.image}`} alt="image"/>

          </div>
          <div className={style.wrapperText}>
            <div className={style.wrapperPrice}>

              <p className={style.name}>{item.name}</p>

              <p>{item.price}</p>
            </div>

            <p className={style.description}>{item.shortDescription}</p>

          </div>

        </div>)}
      </div>
    </>
  )
}
export default Price