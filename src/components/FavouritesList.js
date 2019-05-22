import React from 'react';
import FavouriteImages from './FavouriteImages'

const FavouritesList = (props) => {

  const favourites = props.images.filter((image) => {
    return image.liked
  })

  const favouriteImageList = favourites.map((singleImage, index) =>{
    return <FavouriteImages
      imageData = {singleImage}
      key = {index}
      />
  })

    return(
      <div>
        {favouriteImageList}
      </div>
    )
  }


export default FavouritesList;
