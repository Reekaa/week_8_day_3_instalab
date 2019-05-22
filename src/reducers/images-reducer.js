
const imageReducer = (state, action) => {
  switch(action.type){
    case 'LIST_ALL':
      return state
    case 'LIKE':
      return state.map((image) =>{
        if (image.id === action.imageID){
          return  {...image,liked: true}
        }else{
          return image
        }
      })
    case 'LIST_BY_CAT':
    return state.filter((image)=>{
      if(image.category === action.category){
        return image
      }
    })
    default:
      return state
  }
}

export default imageReducer;
