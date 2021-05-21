import React from "react";
import Styles from "./MovieItem.module.css";
import { Link } from "react-router-dom";

const MovieItem = (props) => {
  const URI = "https://image.tmdb.org/t/p/w500/";
  const images = URI + props.post;
  
  return (
      <div className={Styles.movieItem}>
        <a href="">
        <Link to={`/${props.id}`}>
          <img className={Styles.posters} src={images} alt="" />
          </Link>
        </a>
      </div>
    
  );
};

export default MovieItem;

// https://image.tmdb.org/t/p/w500/
