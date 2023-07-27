import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import "./App.css";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        // "https://dummyapi.online/api/movies" //dummy movies ki
        `https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies?name=${query}`
        // `https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies`
      );

      // console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
