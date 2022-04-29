import React from 'react'

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
  
export default Book