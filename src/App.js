import React from "react";
import { Component } from "react";
import CounterApp  from "./CounterApp";
import TodoList from "./TodoList";

import 'bootstrap/dist/css/bootstrap.min.css';

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
