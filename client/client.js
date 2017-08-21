import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';
import configureStore from '../redux/store';
import {Provider} from 'react-redux';
import './stylesheets/main.scss';

let initialState = {
    todos: [{
        id: 0,
        completed: false,
        text: 'Initial todo for demo purposes'
    }],
    user:{
        id:13,
        username:'mohammad'
    }
}

let store = configureStore(initialState);

render(
    //Define the encompassing components,
    //DOM element want to mount it to
    <Provider store={store}>
      <App/>
    </Provider> ,
    document.getElementById('app')
)