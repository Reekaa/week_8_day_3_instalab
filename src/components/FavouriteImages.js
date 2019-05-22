import React from 'react';

const Image = (props) => {

const {category, url} = props.imageData;

  return(
    <div className = "ui card">
      <img src = {url}/>
      <h4>Category: {category}</h4>
    </div>
  )
}

export default Image;
