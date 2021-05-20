import React from 'react';
import Styles from './PreviewList.module.css';
import { useDispatch, useSelector } from 'react-redux';


function PreviewList(props) {
  const dispatch = useDispatch();
  
  const handleTextChange = (e) => dispatch({type: 'SEARCH_MOVIE', payload: e.target.value});

  const movies = useSelector(state => state.movies.filteredList);
  const URI = 'https://image.tmdb.org/t/p/original/'
  const images = URI + movies[0]?.backdrop_path;

  return (
    <div className={Styles.previewContainer}>
      <div className={Styles.previewList}>
        <img className={Styles.previewImg} src={images} alt="" />
        <div className={Styles.previewDetail}>
          <h1 className={Styles.previewTitle}>{movies[0]?.title}</h1>
          <p>{movies[0]?.overview}</p>
        </div>
      </div>
      <div className={Styles.searchContainer}>
        <input onChange={e=>handleTextChange(e)} className={Styles.search} type="text" placeHolder="   Search Movie" />
      </div>
    </div>
  )
}

export default PreviewList;

