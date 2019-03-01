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

import React from 'react'
import ReactDOM from 'react-dom'

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}

//Using JSX
// const title = React.createElement(
//     'h1',
//     {id: 'title', className: 'header', style: style},
//     'Hello World'
// )

// const table = React.createElement(
//     'ul',
//     {id: 'table', className: 'unordered-table', style:style},
//     React.createElement(
//         'li',
//         {},
//         'items on our list'
//     )
// )

ReactDOM.render(
    <div>
         <h1>Hello World!</h1>
         <p>Hello from React World!</p>
    </div>,
    document.getElementById('root')

)
