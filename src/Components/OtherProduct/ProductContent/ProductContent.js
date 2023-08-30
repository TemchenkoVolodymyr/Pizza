import React from 'react';
import style from "../OtherProduct.module.scss";

const ProductContent = ({currentProduct,setStorageData}) => {
  return (
    <div className={style.containerProducts}>
      {currentProduct && currentProduct.map(item => <div className={style.wrapper}>
        <img src={`otherProducts/${item.image}`} alt="image"/>
        <div>
          <h1>{item.name}</h1>
          <p className={style.description}>{item.shortDescription}</p>
        </div>

        <p className={style.price}>$ {item.price}</p>
        <button onClick={() => setStorageData(item.image, item.price, item.id)}>Add to cart</button>
      </div>)}
    </div>
  );
};

export default ProductContent;