import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.Poster} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.dd}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.Title}
            </li>
            <li>
              <strong>Nickname:</strong> {item.Title}
            </li>
            <li>
              <strong>Birthday:</strong> {item.Year}
            </li>
            <li>
              <strong>Status:</strong> {item.Runtime}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
