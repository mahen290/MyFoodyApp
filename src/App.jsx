import React from 'react';
import './App.css';
import FoodZone from './components/FoodZone';
import foodImg from './assets/Indian_Vegetarian_Food.jpg';

function App() {
  return (
    <div className = "mainContainer">
        <h1> My Foody Zone App React Project </h1>
        <FoodZone />
        <img src = { foodImg } alt = "food_Image" className = "Food_Img" />
    </div>
  );
}

export default App;
