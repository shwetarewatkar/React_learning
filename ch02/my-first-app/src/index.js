// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React,{Component} from 'react'
import {render} from 'react-dom'

let bookList = [
    {"title":"The sun also rises", "author":"Ernest", "pages":150},
    {"title":"White Teeth", "author":"Zodie Smith", "pages":200},
    {"title":"Cat's Cradle", "author":"Kurt Vonnegut","pages":500}
]

const Book = ({title, author, pages}) =>{
    return(
        <section>
            <h2>{title}</h2>
            <p>by:{author}</p>
            <p>Pages: {pages} pages</p>
        </section>
    )
}

const Library = ({books}) => {
    return(
        <div>
            Welcome to the Library!
            {books.map(
                book => 
                <Book 
                title = {book.title} 
                author={book.author} 
                pages={book.pages}>
                </Book>

            )}
        </div>
    )
}


render(
    //making dynamic using React props
    <Library books={bookList}/>,
    document.getElementById('root')

)
