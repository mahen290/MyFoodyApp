import React from 'react';
import './FoodZone.css';
import FoodData from './FoodData';

function FoodZone() {
  return (
    <div>
        <div className = "foodyHeader"> 
            <div className = "foodySubHeader">
                <h2> F<span>oo</span>dy Z<span>o</span>ne </h2>
                <input placeholder = "Search Food Items" className = "searchFI" />
            </div>
            <div className = "foodyButtons">
                <button className = "btns"> ALL </button>
                <button className = "btns"> Breakfast </button>
                <button className = "btns"> Lunch </button>
                <button className = "btns"> Dinner </button>
            </div> 
        </div>
        <FoodData />
    </div>
  );
}

export default FoodZone;
