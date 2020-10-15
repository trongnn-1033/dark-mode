import React, { useState } from "react";
import Content from "./Content";

import ContentExplore from "./ContentExplore";
import ToggleSwitch from "../ToggleSwitch";
import PopularContent from "./PopularContent";
import MoodContent from "./MoodContent";

function ContentComponent() {
  const [value, setValue] = useState("");

  return (
    <Content length={value}>
      <div className="content-header">
        <i className="fas fa-chevron-left"></i>
        <i className="fas fa-chevron-right"></i>
        <div className="content-header__search">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search music"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="content-header__right">
          <i className="fas fa-cloud-moon"></i>
          <ToggleSwitch />
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <ContentExplore />
      <div className="content-center">
        <div className="content-center__popular">
          <PopularContent />
        </div>
        <div className="content-center__mood">
          <MoodContent />
        </div>
      </div>
    </Content>
  );
}

export default ContentComponent;
