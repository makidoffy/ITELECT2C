import React from 'react';
import './index.css';
import Navbar from './Navbar';

const MoviePlaylist = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="banner">
        <div className="banner__contents">
          <h1 className="banner__title">Under the Red Hood</h1>
          <div className="banner__buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">Others</button>
          </div>
          <div className="banner__description">
            There's a mystery afoot in Gotham City, and Batman must go
            toe-to-toe with a mysterious vigilante, who goes by the name of
            Red Hood. Subsequently, old wounds reopen and old, once buried
            memories come into the light.
          </div>
        </div>
      </div>

      <div className="row">
        <h2>DC MOVIES</h2>
        <div className="row__posters">
          <img
            src="large-movies1.jpg"
            alt=""
            className="row__poster row__posterLarge"
          />
          <img
            src="large-movies2.jpg"
            alt=""
            className="row__poster row__posterLarge"
          />
          <img
            src="large-movies3.jpg"
            alt=""
            className="row__poster row__posterLarge"
          />
          <img
            src="large-movies4.jpg"
            alt=""
            className="row__poster row__posterLarge"
          />
          <img
            src="large-movies5.jpg"
            alt=""
            className="row__poster row__posterLarge"
          />
          <img
            src="large-movies6.jpg"
            alt=""
            className="row__poster row__posterLarge"
          />
          <img
            src="large-movies8.jpg"
            alt=""
            className="row__poster row__posterLarge"
          />
          <img
            src="large-movies9.jpg"
            alt=""
            className="row__poster row__posterLarge"
          />
        </div>
      </div>

      <div className="row">
        <h2>ANIME</h2>
        <div className="row__posters">
          <img src="anime1.jpg" alt="" className="row__poster " />
          <img src="anime2.jpg" alt="" className="row__poster " />
          <img src="anime3.jpg" alt="" className="row__poster " />
          <img src="anime4.jpg" alt="" className="row__poster " />
          <img src="anime5.jpg" alt="" className="row__poster " />
          <img src="anime6.jpg" alt="" className="row__poster " />
          <img src="anime7.jpg" alt="" className="row__poster " />
          <img src="anime8.jpg" alt="" className="row__poster " />
          <img src="anime9.jpg" alt="" className="row__poster " />
        </div>
      </div>
    </div>
  );
};

export default MoviePlaylist;