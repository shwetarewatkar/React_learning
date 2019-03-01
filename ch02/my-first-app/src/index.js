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
import Library from './Library'

let bookList = [
    {"title":"The sun also rises", "pages":150},
    {"title":"White Teeth", "author":"Zodie Smith", "pages":200},
    {"title":"Cat's Cradle", "author":"Kurt Vonnegut","pages":500}
]


// const Library = ({books}) => {

// class FavoriteColorForm extends React.Component{
//     state = { value: ''}
//     newColor = e => 
//     this.setState({value: e.target.value})
//     submit = e => {
//         console.log('New Color: ${this.state.value}')
//         e.preventDefault()
//     }
//     render(){
//         return(
//             <form onSubmit={this.submit}>
//                 <label>Favorite Color:
//                     <input type="color"
//                     onChange={this.newColor} />
//                 </label>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }

render(
    //making dynamic using React props
    <Library books={bookList} />,
    document.getElementById('root')

)
