import React, { Component } from 'react';
import './Card.css';



const Card = (props) => {
  const { id, name, imgPath } = props;

    return (
      <div className="artistCard text-center">
        <img src={imgPath} alt={name}/>
        <hr></hr>
      </div>

    );
  }

export default Card;
