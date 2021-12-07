import React from 'react';
import '../style.css';

const Movies = (props) => {
  //console.log(original_title);
  // console.log('hi');
  // console.log(props);
  return (
    <div className="Movie-Container">
      <img src={props.poster}></img>
      <div className="movie-info">
        <h4 className="Movie-title">{props.movieName}</h4>
        <h5>{props.rating}</h5>
      </div>
    </div>
  );
};

export default Movies;
