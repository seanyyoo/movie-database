import React from "react";
import Styles from "./MovieItem.module.css";


const CharacterList = (props) => {
  console.log('check', props.profile)
  const URI = "https://image.tmdb.org/t/p/w500/";
  const images = URI + props.profile;
  
  return (
      <div className={Styles.movieItem}>
        <a href="">
          <img className={Styles.posters} src={images} alt="" />
        </a>
        <span className={Styles.name}>{props.name}</span>
        <span className={Styles.character}>{props.character}</span>
      </div>
    
  );
};

export default CharacterList;

// https://image.tmdb.org/t/p/w500/
