import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

// stateless functional component
// always return JSX


function BookList() {
  return(
    <section className='bookList'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
const Book = () =>{
  return(
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => { 
  return(
    <img src="https://images-eu.ssl-images-amazon.com/images/I/51cqlKxd3vL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />
  )
}

const Title = () => <h1>Spot the difference: First fun activity for kids</h1>

const Author = () => <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop:'0.25rem'}}>Joy Townsend</h4>


ReactDom.render(<BookList />, document.getElementById('root'));
                //(what is to render , where to render)