import React ,{Component} from 'react';

class UserInfo extends Component{
    constructor(props){
        super(props);
    }

    handleNewId(){
        this.props.actions.createNewUserId();
    };
    handleNewIdIfOdd(){
        this.props.actions.createNewUserIfOdd();
    };
    handleNewIdAsync(){
        this.props.actions.createNewUserIdAsync();
    }

    render(){
        return(
            <li>
                <div className="container">username: {this.props.user.username}</div>
                <div>userid {this.props.user.id}</div>
                <button onClick={this.handleNewId.bind(this)}>Update with random ID</button>
                <button onClick={this.handleNewIdIfOdd.bind(this)}>Update if ID is Odd</button>
                <button onClick={this.handleNewIdAsync.bind(this)}>Update async with delay of 1000ms</button>
            </li>
        )
    }
};

export default UserInfo;