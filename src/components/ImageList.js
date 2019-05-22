import React from 'react'
import Image from './Image';

const ImageList = (props) => {

const categories = props.images.map((singleImage,index)=>{
  return singleImage.category;
})

const dropdown = categories.filter((image, index)=>{
  return categories.indexOf(image) === index
})

const dropDownList = dropdown.map((name,index) =>{
  return(
    <option value={name} key={index}>{name}</option>
  )
})
console.log(categories);
console.log(dropdown);


const imageList = props.images.map((singleImage, index) =>{
  return <Image
    imageData = {singleImage}
    category = {singleImage.category}
    key = {index}
    like = {props.like}
    />
})

  return(
    <>
      <select onChange={props.catChange}>
        <option>Choose a Category</option>
          {dropDownList}
      </select>
        <div className ="imagesView">
          {imageList}
        </div>
    </>
  )
}
export default ImageList
