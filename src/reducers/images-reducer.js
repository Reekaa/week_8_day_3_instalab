
const imageReducer = (state , action) => {
  switch(action.type){
    case 'LIST_ALL':
      return state
    case 'LIKE':
      return state.map((image) =>{
        console.log(action.imageID);
        if (image.id === action.imageID){
          return  {...image,liked: true}
        }else{
          return image
        }
      })
    default:
      return state

  }
}

export default imageReducer;
