import React, {Component} from 'react';
import './CounterApp.css';

class CounterApp extends Component {

    constructor(){
        super()
        this.state={
            count:0,
        }
    }

    plus(){
        this.setState({count: this.state.count +1})
    }

    minus() {
        this.setState({count:this.state.count -1})
    }

    render () {

    

    return (
        <div className="counter">
          <h1>CounterComponent</h1>
          <p>{this.state.count}</p>
          <div>
            <button onClick={()=> this.minus()}>-</button>
            <button onClick={()=> this.plus()}>+</button>
          </div>
        </div> 
        )
    }
}

export default CounterApp;