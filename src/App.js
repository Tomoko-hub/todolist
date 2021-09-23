import React from "react";
import { Component } from "react";


class App extends Component {

  constructor() {
    super()
    this.state={
      count:0,
    }
    this.state={
      todoList:[],
      value:"",
    }
  }

  plus () {
    this.setState({count: this.state.count +1})
  }

  minus () {
    this.setState({count: this.state.count -1})
  }

  onChange(event) {
    this.setState({value: event.target.value})
  }

  add() {
    this.setState({
      todoList:this.state.todoList.concat(this.state.value),
      value:"",
    })
  }

  render () {

    const todoListCatalog = this.state.todoList.map((todo, index) => {
      return <li key={index}>{todo}</li>
    })


    return (
      <div>
        <div>
          <h1>Counter</h1>
          <p>{this.state.count}</p>
          <div>
            <button onClick={()=> this.minus()}>-</button>
            <button onClick={()=> this.plus()}>+</button>
          </div>
        </div>
        <div>
          <h4>ToDoList</h4>
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
