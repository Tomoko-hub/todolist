import React from "react";
import { Component } from "react";
import CounterApp  from "./CounterApp";
import TodoList from "./TodoList";

class App extends Component {

  render () {

    return (
      <>
        
        <CounterApp />
        <TodoList />
        
      </>

    )
  }
}

export default App;
