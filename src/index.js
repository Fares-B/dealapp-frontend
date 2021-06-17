import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";

import LoginScreen from "./screens/user/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/user/RegisterScreen/RegisterScreen";
import LogoutService from "./services/LogoutService";

import DealsScreen from "./screens/deal/DealsScreen/DealsScreen";
import DealScreen from "./screens/deal/DealScreen/DealScreen";
import NewDealScreen from "./screens/deal/NewDealScreen/NewDealScreen";
import GroupScreen from "./screens/group/GroupScreen";
import AuthorScreen from "./screens/author/AuthorScreen";

ReactDOM.render(<Nav />, document.getElementById('nav'));

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route exact path="/" component={() => <DealsScreen filter={"first"} />} />
            <Route exact path="/deals/last" component={() => <DealsScreen filter={"last"} />} />
            <Route exact path="/new-deal" component={NewDealScreen} />
            <Route exact path="/deal/:dealId" component={DealScreen} />
            <Route exact path="/group/:groupId" component={GroupScreen} />
            <Route exact path="/profile/:authorId" component={AuthorScreen} />

            <Route path="/login" component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/logout" component={LogoutService}/>

        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
