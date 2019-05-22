import React from 'react';

const Image = (props) => {

const handleLikeClick = (event) => {
  props.like(props.imageData.id);
}

const {category, url} = props.imageData;



  return(
    <div className = "ui card">
      <img src = {url}/>
      <h4>Category: {category}</h4>
      <button onClick = {handleLikeClick}>💜</button>
    </div>

  )
}

export default Image;
