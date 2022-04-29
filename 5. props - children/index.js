import React from "react";
import {createRoot} from "react-dom/client";

import "./index.css";

const firstBook = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/513RCC-dLPL._AC_SX184_.jpg",
  title: "Dragon Legend",
  author: "Katie Tsang",
};

const secondBook = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/51qTHM32pfL._AC_SX184_.jpg",
  title: "Harry potter",
  author: "J.K. Rowling",
};

function BookList() {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius voluptates reprehenderit tempore? Rerum, eaque id.</p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}


const Book = (props) => {
   const {img, title, author, children} = props;

  console.log(props)

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BookList/>);
//(what is to render , where to render)
