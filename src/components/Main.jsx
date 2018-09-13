import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' render={(props) => {
                    return (<h1>Home</h1>);
                }} />
                <Route path='/project' render={(props) => {
                    return (<h1>Project</h1>);
                }} />
            </div>
        );
    }
}
export default Main;