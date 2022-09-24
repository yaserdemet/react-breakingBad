import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Characters from "./Characters";
import Search from "./Search";

const Main = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const url =  "https://www.breakingbadapi.com/api/characters"
  const getData = async () => {
    const res = await axios.get(url);
    // ? console.log(res.data);
    setItems(res.data);
    setIsLoading(false);
  };
 console.log(items);

  useEffect(() => {
        setTimeout(() => {
    getData();

        },1000)
}, []);

  return (
    <main className="container">
      <Header />
        <Search query={query} setQuery={setQuery}/>
      <Characters isLoading={isLoading} items={items} query={query} />
    </main>
  );
};

export default Main;
