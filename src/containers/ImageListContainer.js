import { connect } from 'react-redux'
import ImageList from '../components/ImageList';

const mapStateToProps = (state) =>{
  return{
    images: state
  };
};

const mapDispatchToProps = (dispatch) =>{
  return{
    like: (imageID)=>{
      dispatch({
        type:'LIKE',
        imageID: imageID
      })
    },

    catChange: (category)=>{
      dispatch({
        type:'LIST_BY_CAT',
        category
      })
    }
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
