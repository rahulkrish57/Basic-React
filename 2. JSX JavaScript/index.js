import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

// stateless functional component
// always return JSX


function BookList() {
  return(
    <section className='bookList'>
      <Book />
      
    </section>
  )
}
const author = 'Joy Townsend'
const Book = () =>{
  const title = 'Spot the difference: First fun activity for kids'
  return(
    <article className='book'>
        <img src="https://images-eu.ssl-images-amazon.com/images/I/51cqlKxd3vL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <p>{6 + 6}</p>
    </article>
  )
}


ReactDom.render(<BookList />, document.getElementById('root'));
                //(what is to render , where to render)