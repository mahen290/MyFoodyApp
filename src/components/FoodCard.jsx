import React from 'react';
import './FoodCard.css';

function FoodCard( { foodData } ) {
  return (
    <div>
        <div className = "foodCard">
            <span className = "id"> { foodData.id } </span>
            <h2 className = "name"> { foodData.name } </h2>
            <img className = "foodImg" src = { foodData.img } alt = "Foody_Img" width = "200px" height = "200px" />
            <p className = "desc"> { foodData.desc } </p>
              <div className = "price">
                <h3> Price In INR : </h3>
                <h3 style = {{ color: "red" }}> { foodData.price + " Rs." } </h3>
              </div>
              <div className = "category">
                <h3> Food Category : </h3>
                <h3 style = {{ color: "red" }}> { foodData.category } </h3>
              </div>
              <div className = "rating">
                <h3> Rating : </h3>
                <h3 style = {{ color: "red" }}> { "O O O O O " +foodData.rating } </h3>
              </div>
        </div>
    </div>
  );
}

export default FoodCard;
