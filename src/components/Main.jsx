import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Characters from "./Characters";
import Search from "./Search";
import Paginationn from "./Pagination";


const Main = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  //! pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

 

  const paginate = (pageNUmber) => {
    
  
    setCurrentPage(pageNUmber);
    if(pageNUmber == "Next Page"){
      setCurrentPage(currentPage  + 1)
    }
    else if (pageNUmber == "Previous Page"){
      setCurrentPage(currentPage - 1)
    }
      if(currentPage == pageNumbers.length-1) {
        pageNumbers.unshift()
      }
  };



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

const lastPost = currentPage * perPage
const firstPost = lastPost - perPage
const currentPost = items.slice(firstPost , lastPost)
const pageNumbers = [];

  return (
    <main className="container">
      <Header />
         {/* <Paginationn
          perPage={perPage}
          totalPosts={items.length}
          paginate={paginate}
          pageNumbers={ pageNumbers}
          items={items.length}
        /> */}
        <Search query={query} setQuery={setQuery}/>
      <Characters isLoading={isLoading} currentPost={items} query={query} />
    </main>
  );
};

export default Main;
