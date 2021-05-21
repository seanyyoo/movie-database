import React from 'react';
import PreviewContainer from './PreviewContainer.jsx';
import MoviesContainer from './MoviesContainer.jsx';

// const mapDispatchToProps = dispatch => ({
//   // create functions that will dispatch action creators
//   getMovie: (movieId) => dispatch(actions.getMovie(movieId)),
// });



function BottomContainer(props) {
  
  return (
    <div>
      <PreviewContainer />
      <MoviesContainer />
    </div>
  )
}




export default BottomContainer;