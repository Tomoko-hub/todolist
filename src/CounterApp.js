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

    double(){
        this.setState({count:this.state.count *2})
    }

    triple(){
        this.setState({count:this.state.count *3})
    }

    render () {

    

    return (
        <div className="counter">
          <h1>CounterComponent</h1>
          <p>{this.state.count}</p>
          <div>
            <button type="button" className="btn btn-info" onClick={()=> this.minus()}>-</button>
            <button type="button" className="btn btn-primary" onClick={()=> this.plus()}>+</button>
            <button type="button" className="btn btn-danger" onClick={()=> this.double()}>x2</button>
            <button type="button" className="btn btn-success" onClick={()=> this.triple()}>x3</button>
          </div>
        </div> 
        )
    }
}

export default CounterApp;