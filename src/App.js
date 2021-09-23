import React from "react";
import { Component } from "react";
import CounterApp  from "./CounterApp";

class App extends Component {

  constructor() {
    super()
    /* //counter
    this.state={
      count:0,
    } */
    //todoList
    this.state={
      todoList:[],
      value:"",
    }

  }
  /* //counter
  plus () {
    this.setState({count: this.state.count +1})
  }

  //counter
  minus () {
    this.setState({count: this.state.count -1})
  } */

  //todolist
  onChange(event) {
    this.setState({value: event.target.value})
  }
  //todolist
  add() {
    this.setState({
      todoList:this.state.todoList.concat(this.state.value),
      value:"",
    })
  }

  render () {
    //todolist
    const todoListCatalog = this.state.todoList.map((todo, index) => {
      return <li key={index}>{todo}</li>
    })


    return (
      <div>
        {/* <div className="counter">
          <h1>CounterConponent</h1>
          <p>{this.state.count}</p>
          <div>
            <button onClick={()=> this.minus()}>-</button>
            <button onClick={()=> this.plus()}>+</button>
          </div>
        </div> */}
        <CounterApp />
        <div className="todoList">
          <h4>ToDoListComponent</h4>
          <p>{this.state.value}</p>
          <input
            type="text"
            value={this.state.value}
            onChange={event => this.onChange(event)}>
          </input>
          <button onClick={() => this.add}>ADD</button>
          <ul>
            {todoListCatalog}
          </ul>
        </div>
      </div>

    )
  }
}

export default App;
