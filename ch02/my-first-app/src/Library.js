import React from 'react'
import{Book} from './Book'
import{Hiring} from './Hiring'
import{NotHiring} from './NotHiring'

class Library extends React.Component{
    static defaultProps = {
        books: [
            {"title" : "Tahoe Tales", "author":"Chet Whitley", "pages": 1000}
        ]
    }

    state = {
        open: true,
        freeBookmark: true,
        hiring: true,
        data: [],
        loading: false
    }
    componentDidMount(){
        this.setState({loading:true})
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
        .then(data => data.json())
        .then(data => this.setState({data, loading:false}))
    }

    // componentDidMount() {
    //     console.log("The component is now mounted.")
    // }

    componentDidUpdate() {
        console.log("Component just updated.")
    }

    toggleOpenClosed =() => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    render(){
        //console.log(this.state)
        const {books} = this.props
        return(
            <div>
                <h1>Welcome to the Library!</h1>
                <h2>The library is {this.state.open ? 'OPEN' : 'CLOSE'}</h2>
            
                {this.state.hiring ? <Hiring/> : <NotHiring/>}
                {this.state.loading 
                    ? "loading ..."
                    : <div>
                        {this.state.data.map(product => {
                            return(
                                <div key={product.id}>
                                    <h3>Library product of the week</h3>
                                    <h4>{product.name}</h4>
                                    <img alt={product.name} src={product.image} height={100}/>
                                    </div>
                            )
                        })}
                    </div>}

                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(
                    (book,i) => 
                    <Book
                    key={i}
                    title = {book.title} 
                    author={book.author} 
                    pages={book.pages}
                    freeBookmark={this.state.freeBookmark}
                    />
    
                )}
                
            </div>
        )
    }
}
export default Library