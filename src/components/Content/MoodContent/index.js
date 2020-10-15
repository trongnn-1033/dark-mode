import React from "react";
import MoodContent from "./MoodContent";

function index(props) {
  const listMoodContent = [
    "ghetto rap",
    "twerk baby",
    "party breaker",
    "valentine vibe",
  ];
  return (
    <MoodContent>
      <h1 className="content-title">Mood</h1>
      <div className="content-mood">
        {listMoodContent.map((item, index) => (
          <div key={index + item}>
            <h2>{item}</h2>
          </div>
        ))}
      </div>
    </MoodContent>
  );
}

export default index;
