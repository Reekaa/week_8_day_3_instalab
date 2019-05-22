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
    }
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
