import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider";

function Product({id,title,image,price,rating}) {

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    // toast("Added item to basket!");
  };



  return (
    <div className='product'>
     <img src={image} alt=""/>
     <div className="product__rating">
          {Array(rating)
            .fill()
            .map((rate) => (
              <p>⭐</p>
            ))}
        </div>
    <div className='product__info'>
        <p>{title}</p>
        <small>$</small>
        <strong>{price}</strong>
    </div>
    <button onClick={addToBasket}>Add to Basket</button> 
      
    </div>
  )
}

export default Product
