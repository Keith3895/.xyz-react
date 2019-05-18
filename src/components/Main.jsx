import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Home from './home/home';
class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' render={(props) => {
                        return (<Home />);
                    }} />
                    <Route path='/project' render={(props) => {
                        return (<h1>Project</h1>);
                    }} />
                    <Route path='/blog' render={(props) => {
                        return (<h1>Blog stuff will come here</h1>);
                    }} />
                </Switch>
            </div>
        );
    }
}
export default Main;