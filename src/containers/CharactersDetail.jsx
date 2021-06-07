import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "../components/PreviewList.module.css";
import CharacterList from "../components/CharacterList.jsx";
import Styles2 from "../components/MovieList.module.css";

function CharactersDetail({ match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}/credits?api_key=2824910ce318ceabd50d2661187c1b9e`,
      requestOptions
    )
      .then((response) => response.json())
      .then((cast) => {
        dispatch({ type: "GET_CAST", payload: cast });
      })
      .catch((error) => console.log("error fetching", error));
  }, [dispatch]);

  const movies = useSelector((state) => state.movies.filteredList);
  const casts = useSelector((state) => state.movies.castList);
  console.log("casts", casts);
  const URI = "https://image.tmdb.org/t/p/original/";
  const currentMovie = movies.filter((movie) => movie.id == match.params.id);
  const images = URI + currentMovie[0]?.backdrop_path;


  return (
    <>
      <div className={Styles.previewContainer}>
        <div className={Styles.previewList}>
          <img className={Styles.previewImg} src={images} alt="" />
          <div className={Styles.previewDetail}>
            <h1 className={Styles.previewTitle}>{currentMovie[0]?.title}</h1>
            <p>{currentMovie[0]?.overview}</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className={Styles2.popular}>Casts</h3>
      </div>
      <div className={Styles2.movieList}>
        {casts.length > 0 ? (
          casts.map((cast) => (
            <CharacterList
              id={cast.id}
              name={cast.name}
              profile={cast.profile_path}
              character={cast.character}
              key={cast.id}
            />
          ))  
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default CharactersDetail;
