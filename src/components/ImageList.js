import React from 'react'
import Image from './Image';

const ImageList = (props) => {

const imageList = props.images.map((singleImage, index) =>{
  return <Image
    imageData = {singleImage}
    key = {index}
    like = {props.like}
    />
})

  return(
    <div className ="imagesView">
      {imageList}
    </div>
  )
}
export default ImageList
