import React , {Component} from 'react';
///import actions from '../redux/actions';

class TodoInput extends Component{
  constructor(props,context){  
    super(props,context);
    this.state={
        InputText:''
    }   
  };

  handleChange(event){      
        this.setState({
            InputText:event.target.value
        })
    };
    handleSubmit(event){
        event.preventDefault();
      // this.props.dispatch(actions.addTodo(this.state.InputText));
      this.props.addTodo(this.state.InputText);         
    }  
    
render(){
    return(<form onSubmit={this.handleSubmit.bind(this)}>
            <input 
            type="text"  
            placeholder="Type in your todo"
            value={this.state.InputText}
             onChange={this.handleChange.bind(this)}/>
             <input type="submit" value="submit" />
            </form>)
    }
}

export default TodoInput;