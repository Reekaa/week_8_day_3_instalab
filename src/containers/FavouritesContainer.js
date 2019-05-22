import { connect } from 'react-redux'
import FavouritesList from '../components/FavouritesList';

const mapStateToProps = (state) =>{
  return{
    images: state
  };
};

export default connect(mapStateToProps)(FavouritesList);
