import React, {useState} from "react";
import style from './Pagination.module.scss'
import ModalAP from "../AdminPanel/ModalAP";

const Pagination = (props) => {
  const {dataPerPage, totalItems, paginate} = props
  const [currentPage, setCurrentPage] = useState(1)
  const pageNumbers = []

  const [modal,setModal] = useState(false)

  const [isAdmin,setIsAdmin] = useState(true)

  for (let i = 1; i <= Math.ceil(totalItems / dataPerPage); i++) {
    pageNumbers.push(i)

  }

  const changeActiveNum = (number) => {
    paginate(number)
    setCurrentPage(number)
  }
  return (
    <>
      <div>
        <ul className={style.items}>
          {pageNumbers.map(num => <li className={currentPage === num ? style.active : null}
                                      onClick={() => changeActiveNum(num)} key={num}>{num}</li>)}
        </ul>
        {isAdmin ? <button onClick={() => setModal(true)}>Admin Panel</button> : null }
      </div>
      <ModalAP modal={modal} setModal={setModal}></ModalAP>
    </>
  )
}

export default Pagination