import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-eu.ssl-images-amazon.com/images/I/513RCC-dLPL._AC_SX184_.jpg",
    title: "Dragon Legend",
    author: "Katie Tsang",
  },

  {
    id: 2,
    img: "https://images-eu.ssl-images-amazon.com/images/I/51qTHM32pfL._AC_SX184_.jpg",
    title: "Harry potter",
    author: "J.K. Rowling",
  },

  {
    id: 3,
    img: "https://images-eu.ssl-images-amazon.com/images/I/51H-dWl-dHL._AC_SX184_.jpg",
    title: "Good Night Stories for rebel Girls",
    author: "Elena Favilli",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;

  // console.log(props)

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Button Clicked");
  };

  const complexExample = (author) => {
    alert(author);
  };

  return (
    <article className="book" onMouseOver={() => console.log(title)}>
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        complex Example
      </button>
    </article>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
//(what is to render , where to render)
