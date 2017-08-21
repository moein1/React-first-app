import React ,{Component} from 'react';
//import Action from '../redux/actions';

class TodoItem extends Component{
    constructor(props){
        super(props);
        
    };

    handleCompleted(){
       // this.props.dispatch(Action.completeTodo(this.props.todo.id,))
       this.props.completeTodo(this.props.todo.id);
    };

     handleDelete(){
       // this.props.dispatch(Action.deleteTodo(this.props.todo.id))
       this.props.deleteTodo(this.props.todo.id);
     };

    render(){
        return(
            <li>
              <div>{this.props.todo.text}</div>
              <button onClick={this.handleCompleted.bind(this)}>Mark as completed</button>
              <button onClick={this.handleDelete.bind(this)}>Delete todo</button>
            </li>
        )
    }
};

export default TodoItem;