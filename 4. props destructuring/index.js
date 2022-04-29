import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

const firstBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/513RCC-dLPL._AC_SX184_.jpg',
  title: 'Dragon Legend',
  author: 'Katie Tsang'
}

const secondBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/51qTHM32pfL._AC_SX184_.jpg',
  title: 'Harry potter',
  author: 'J.K. Rowling'
}

function BookList() {
  return(
    <section className='bookList'>

      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>

    </section>
  )
}

const img="https://images-eu.ssl-images-amazon.com/images/I/51cqlKxd3vL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
const title = 'Spot the difference: First fun activity for kids'
const author = 'Joy Townsend';

const Book = ({img, title, author}) =>{

  // const {img, title, author} = props;

  //console.log(props)

  return(
    <article className='book'>
        <img src={img} alt=''/>
        <h1>{title}</h1>
        <h4>{author}</h4>
    </article>
  )
}


ReactDom.render(<BookList />, document.getElementById('root'));
                //(what is to render , where to render)