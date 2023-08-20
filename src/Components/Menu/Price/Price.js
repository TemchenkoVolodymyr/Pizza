import React, {useState} from "react";
import style from './Price.module.scss'


const Price = (props) => {

  const {data, dataPerPage , paginate ,totalItems} = props
  const [currentPage,setCurrentPage] = useState(1)


  const pageNumber = []

  for (let i = 1; i <= Math.ceil(totalItems / dataPerPage); i++) {
    pageNumber.push(i)

  }
  const changeActiveNum = (number) => {
    paginate(number)
    setCurrentPage(number)
  }
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

              <p>${item.price}</p>
            </div>

            <p className={style.description}>{item.shortDescription}</p>

          </div>

        </div>)}
      </div>
      <div className={style.wrapperPricePaginator}>
      <ul className={style.items}>
        {pageNumber.map(num => <li className={currentPage === num ? style.active : null}
                                    onClick={() => changeActiveNum(num)} key={num}>{num}</li>)}
      </ul>
      </div>
    </>
  )
}
export default Price