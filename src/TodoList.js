import React, {Component} from 'react';
import './TodoList.css';

class TodoList extends Component {

    constructor(){
        super()
        this.state={
            todoList:[],
            value:"",
        }
    }
    onChange(event) {
        this.setState({value:event.target.value})
    }
    add(){
        this.setState({
            todoList:this.state.todoList.concat(this.state.value),
            value:""
        })
    }

    render(){
        const todoListCatalog = this.state.todoList.map((todo, index)=>{
            return <li key={index}>{todo}</li>
        })

        return(
            <div className="todoList">
                <h3>TodoList Component</h3>
                <p>{this.state.value}</p>
                <input type="text"
                       value={this.state.value}
                       onChange={event => this.onChange(event)}
                 ></input>
                <button onClick={() => this.add}>ADD</button>
                <ul>{todoListCatalog}</ul>
            </div>
        )

    }
}

export default TodoList;