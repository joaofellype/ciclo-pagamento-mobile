/**
 * @format
 */
import React,{Component} from 'react'
import {AppRegistry} from 'react-native';
import promise from "redux-promise";
import {createStore,applyMiddleware} from 'redux'

import { Provider } from "react-redux";
import reducers from './src/reducers'
import App from './src/App';
import {name as appName} from './app.json';

const store =  applyMiddleware(promise)(createStore)(reducers)
export default class Home extends Component{
    render(){
    return(
            <Provider store={store}>
                <App />
            </Provider>
    )
    }
}

AppRegistry.registerComponent(appName, () => App);
