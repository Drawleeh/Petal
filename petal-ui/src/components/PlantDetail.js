import React, { useState } from "react";
import "../styles/plant-detail.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PlantDetail = ({ plant }) => {
  return (
    <div className="container"> 
      <div className="search-results-container">


         <div styles={{}}>
         <ArrowBackIcon sx={{fontSize:35}}/>
         </div>


        <h3>{plant.name}</h3>
      </div>
      <div className="plantcare-title">
        <h3>Plant Care</h3>
      </div>
      <div className="plant-care-container">
        <ul>
          <li>
            <img src={require("../styles/leaf.png")} />
            Every 3 weeks
          </li>
          <li>
            <img src={require("../styles/sun.png")} />
            Moderate Sunlight
          </li>
          <li>
            <img src={require("../styles/water.png")} />
            Water every 7 days
          </li>
        </ul>
      </div>
      <div className="overview-container">
        <h3>Overview</h3>
        <p>{plant.description}</p>
      </div>
    </div>
  );
};

export default PlantDetail;
