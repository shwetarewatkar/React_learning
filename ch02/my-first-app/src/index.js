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

//component creation
class Message extends React.Component{
    render(){
        return(
            <div>
                <h1 style={{color:this.props.color}}>
                {this.props.msg}
                </h1>
                <p>I'll get back to you in {this.props.minutes} minutes.</p>
            </div>
        )
    }
}

ReactDOM.render(
    //making dynamic using React props
    <Message color="blue" msg="How are you?" minutes={5}/>,
    document.getElementById('root')

)
