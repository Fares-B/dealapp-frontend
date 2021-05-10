import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginScreen from "./screens/user/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/user/RegisterScreen/RegisterScreen";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/register" component={RegisterScreen} />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
