import React from 'react';
import './App.css';
import FoodZone from './components/FoodZone';
import FoodData from './components/FoodData';

function App() {
  return (
    <div className = "mainContainer">
        <h1> My Foody Zone App React Project </h1>
        <FoodZone />
        <FoodData />
    </div>
  );
}

export default App;
