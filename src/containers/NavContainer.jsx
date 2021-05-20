import React from 'react';
import Styles from './NavContainer.module.css';



function NavContainer() {
  return (
    <div className={Styles.navbar}>
      <a className={Styles.log_container} href="">
        <span className={Styles.moviedb}>Movie DB</span>
      </a>
      <img className={Styles.logo} src="" alt="" />
      <img className={Styles.tmdb} src="../../public/tmdb.svg" alt="" />
    </div>
  )
}




export default NavContainer;
