import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {
  return(
    <div>
      <h3>
        <Link to='/favourites'>Favourites</Link>
      </h3>
    </div>
  )
}

export default NavBar;
