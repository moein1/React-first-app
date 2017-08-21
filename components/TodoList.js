import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
           <ul>
               {this.props.todos.map((todo)=>{
                   return <TodoItem deleteTodo ={this.props.deleteTodo}  completeTodo={this.props.completeTodo} key={todo.id} todo={todo}/>
               })}
           </ul>
        )
    }
};

export default TodoList;