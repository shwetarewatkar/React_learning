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

let skiData ={
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}

const getPercent = decimal => {
    return decimal * 100 + '%'
}
const calcGoalProgress = (total,goal) =>{
    return getPercent(total/goal)
}

const SkiDayCounter = ({total,powder,backcountry,goal}) =>{
    return(
        <section>
                <div>
                    <p>Total Days ={total}</p>
                </div>
                <div>
                    <p>Powder Days ={powder}</p>
                </div>
                <div>
                    <p>Backcountry Days ={backcountry}</p>
                </div>
                <div>
                    <p>Goal Progress={calcGoalProgress(total,goal)}</p>
                </div>
            </section>
    )
}


render(
    //making dynamic using React props
    <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal} 
    />,
    document.getElementById('root')

)
