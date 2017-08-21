import React, { Component } from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../redux/actions';
import UserInfo from './UserInfo';

class App extends Component{
    render(){
        return(
            <div className="app">
              <h1>Todo List</h1>
              <UserInfo user={this.props.user} actions ={this.props.actions}/>
              {/*<TodoInput dispatch={this.props.dispatch}/>*/}
              <TodoInput addTodo={this.props.actions.addTodo}/>
              <TodoList deleteTodo={this.props.actions.deleteTodo}  completeTodo={this.props.actions.completeTodo} todos={this.props.todos}/>
         </div>
        )
    }
}

function mapStateToProps(state){
    return state;
};

function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators(actions,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);