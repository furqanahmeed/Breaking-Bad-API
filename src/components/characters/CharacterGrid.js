import React from "react";
import CharacterItem from "./CharacterItem";
// import Loader from "../ui/Loader";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <span className="loader"></span>
  ) : (
    <section className="cards">
      {items.map((items) => (
        <>
          <CharacterItem key={items.id} item={items}></CharacterItem>
          <CharacterItem key={items.id} item={items}></CharacterItem>
          {/* <img src={items.Poster}/> */}
        </>
      ))}
    </section>
  );
};

export default CharacterGrid;
