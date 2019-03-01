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

// let bookList = [
//     {"title":"The sun also rises", "author":"Ernest", "pages":150},
//     {"title":"White Teeth", "author":"Zodie Smith", "pages":200},
//     {"title":"Cat's Cradle", "author":"Kurt Vonnegut","pages":500}
// ]

// const Book = ({title, author, pages, freeBookmark}) =>{
//     return(
//         <section>
//             <h2>{title}</h2>
//             <p>by:{author}</p>
//             <p>Pages: {pages} pages</p>
//             <p>Free Bookmark today? {freeBookmark ? 'Yes!' : 'No!'}</p>
//         </section>
//     )
// }

// const Hiring = () =>
// <div>
//     <p>The library is hiring! Visit www.library.com/hiring/</p>
// </div>

// const NotHiring = () =>
// <div>
//     <p>Hiring is closed. Please check back later!</p>
// </div>

// // const Library = ({books}) => {
// class Library extends React.Component{
//     state = {
//         open: true,
//         freeBookmark: true,
//         hiring: true,
//         data: [],
//         loading: false
//     }
//     componentDidMount(){
//         this.setState({loading:true})
//         fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
//         .then(data => data.json())
//         .then(data => this.setState({data, loading:false}))
//     }

//     // componentDidMount() {
//     //     console.log("The component is now mounted.")
//     // }

//     componentDidUpdate() {
//         console.log("Component just updated.")
//     }

//     toggleOpenClosed =() => {
//         this.setState(prevState => ({
//             open: !prevState.open
//         }))
//     }
//     render(){
//         //console.log(this.state)
//         const {books} = this.props
//         return(
//             <div>
//                 <h1>Welcome to the Library!</h1>
//                 <h2>The library is {this.state.open ? 'OPEN' : 'CLOSE'}</h2>
            
//                 {this.state.hiring ? <Hiring/> : <NotHiring/>}
//                 {this.state.loading 
//                     ? "loading ..."
//                     : <div>
//                         {this.state.data.map(product => {
//                             return(
//                                 <div key={product.id}>
//                                     <h3>Library product of the week</h3>
//                                     <h4>{product.name}</h4>
//                                     <img alt={product.name} src={product.image} height={100}/>
//                                     </div>
//                             )
//                         })}
//                     </div>}

//                 <button onClick={this.toggleOpenClosed}>Change</button>
//                 {books.map(
//                     (book,i) => 
//                     <Book
//                     key={i}
//                     title = {book.title} 
//                     author={book.author} 
//                     pages={book.pages}
//                     freeBookmark={this.state.freeBookmark}
//                     />
    
//                 )}
                
//             </div>
//         )
//     }
// }

class FavoriteColorForm extends React.Component{
    state = { value: ''}
    newColor = e => 
    this.setState({value: e.target.value})
    submit = e => {
        console.log('New Color: ${this.state.value}')
        e.preventDefault()
    }
    render(){
        return(
            <form onSubmit={this.submit}>
                <label>Favorite Color:
                    <input type="color"
                    onChange={this.newColor} />
                </label>
                <button>Submit</button>
            </form>
        )
    }
}

render(
    //making dynamic using React props
    <FavoriteColorForm />,
    document.getElementById('root')

)
