import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Home from './home/home';
import Blog from './blog/blog';
class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path='/home' render={(props) => {
                    return (<Home />);
                }} />
                <Route path='/project' render={(props) => {
                    return (<h1>Project</h1>);
                }} />
                <Route path='/blog' render={(props) => {
                    return (<Blog/>);
                }} />
            </div>
        );
    }
}
export default Main;