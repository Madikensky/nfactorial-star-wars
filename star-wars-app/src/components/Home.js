import React from 'react';
import VideoComponent from './VideoComponent';
import StarWarsEntity from './StarWarsEntity';

function Home() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <VideoComponent />
        <h1>
          Welcome to the STAR WARS web app! Here you can find planets,
          characters, and starships from all over the STAR Wars world!
        </h1>
        <div className="entities-wrapper">
          <StarWarsEntity entityType="characters" />
          <StarWarsEntity entityType="starships" />
          <StarWarsEntity entityType="planets" />
        </div>
      </div>
    </div>
  );
}

export default Home;
