import React, { useState } from 'react';

const MovieContainer = (props): JSX.Element => {
  const [value, setValue] = useState<any | undefined>('INITIAL VALUE');
  const [movie, setMovie] = useState<string | undefined>('Marvel');

  return (
    <div className="MovieContainer" style={props.style}>
      <div id="1">
        Test
        <foo id="3"></foo>
        <img src="" id="2" />
      </div>
    </div>
  );
};

export default MovieContainer;
