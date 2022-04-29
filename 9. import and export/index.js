import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import {books} from "./books"

import Book from "./Book"

import {greeting} from "./testing/testing"

function BookList() {
  console.log(greeting)
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}



const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
//(what is to render , where to render)
