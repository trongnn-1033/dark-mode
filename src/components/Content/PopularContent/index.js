import React from "react";
import PopularContent from "./PopularContent";

function index(props) {
  const listPopularSong = [1, 2, 3, 4, 5];
  return (
    <PopularContent>
      <h1 className="content-title">Popular</h1>
      <div className="content-popular">
        {listPopularSong.map((item, index) => (
          <div
            key={index + (Math.floor(Math.random() * 999) + 1)}
            className="content-popular__item"
          >
            <img
              src="https://allaroundnewmusic.com/wp-content/uploads/2016/05/zak.jpg"
              alt=""
            />
            <p> {index + 1} </p>
            <p>Love song</p>
            <div className="content-popular__right">
              <p>3:23</p>
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
        ))}
      </div>
    </PopularContent>
  );
}

export default index;
