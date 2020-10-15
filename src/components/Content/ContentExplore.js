import React from "react";
import ContentExploreStyle from "./ContentExploreStyle";

function ContentExplore() {
  const listNews = [1, 2, 3, 3, 4, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
  return (
    <ContentExploreStyle>
      <h1 className="content-title">Explore New</h1>
      <div className="content-explore">
        {listNews.map((item, index) => (
          <div key={index} className="content-explore__item">
            <img
              src="https://allaroundnewmusic.com/wp-content/uploads/2016/05/zak.jpg"
              alt=""
            />
            <h2> zak abel </h2>
            <h3> Love song </h3>
          </div>
        ))}
      </div>
    </ContentExploreStyle>
  );
}

export default ContentExplore;
