import React from "react";
import {createRoot} from "react-dom/client";

import "./index.css";

const books = [
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/513RCC-dLPL._AC_SX184_.jpg",
    title: "Dragon Legend",
    author: "Katie Tsang",
  },
  
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/51qTHM32pfL._AC_SX184_.jpg",
    title: "Harry potter",
    author: "J.K. Rowling",
  }
]



function BookList() {
  return (
    <section className="bookList">
      {books.map((book) =>{
        const {img, title, author} = book;
        return <Book book={book}/>
      })}
    </section>
  );
}


const Book = (props) => {
   const {img, title, author} = props.book;

  console.log(props)

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BookList/>);
//(what is to render , where to render)
